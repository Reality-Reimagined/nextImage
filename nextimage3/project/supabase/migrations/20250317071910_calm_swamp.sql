/*
  # Subscription System Schema

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `stripe_customer_id` (text)
      - `stripe_subscription_id` (text)
      - `plan_type` (text) - 'free', 'basic', 'pro', 'enterprise'
      - `status` (text) - 'active', 'canceled', 'past_due'
      - `current_period_end` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `generation_usage`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `subscription_id` (uuid, references subscriptions)
      - `count` (integer)
      - `period_start` (timestamptz)
      - `period_end` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read their own data
    - Add policies for service role to manage all data
*/

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users NOT NULL,
    stripe_customer_id text,
    stripe_subscription_id text,
    plan_type text NOT NULL DEFAULT 'free',
    status text NOT NULL DEFAULT 'active',
    current_period_end timestamptz,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    UNIQUE(user_id)
);

-- Create generation_usage table
CREATE TABLE IF NOT EXISTS generation_usage (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users NOT NULL,
    subscription_id uuid REFERENCES subscriptions NOT NULL,
    count integer DEFAULT 0,
    period_start timestamptz NOT NULL,
    period_end timestamptz NOT NULL,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE generation_usage ENABLE ROW LEVEL SECURITY;

-- Policies for subscriptions
CREATE POLICY "Users can view own subscription"
    ON subscriptions FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage subscriptions"
    ON subscriptions FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Policies for generation_usage
CREATE POLICY "Users can view own usage"
    ON generation_usage FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage usage"
    ON generation_usage FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Functions for usage tracking
CREATE OR REPLACE FUNCTION increment_generation_count()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO generation_usage (
        user_id,
        subscription_id,
        count,
        period_start,
        period_end
    )
    VALUES (
        auth.uid(),
        (SELECT id FROM subscriptions WHERE user_id = auth.uid()),
        1,
        date_trunc('month', now()),
        (date_trunc('month', now()) + interval '1 month')
    )
    ON CONFLICT (user_id, period_start)
    DO UPDATE SET count = generation_usage.count + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;