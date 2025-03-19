# Gemini Studio - AI Image Creation & Editing

A Next.js application for generating and editing images using Google's Gemini 2.0 Flash technology. Create stunning AI-generated images or enhance existing ones through natural language instructions.

## Features

- 🎨 Text-to-image generation with Gemini 2.0 Flash
- 🖌️ Image editing through natural language instructions
- 💬 Conversation history with context-aware refinements
- 📱 Responsive UI built with Next.js and shadcn/ui
- 🌙 Dark/Light mode support
- 💳 Stripe integration for subscriptions
- 🔐 User authentication with Supabase
- 📊 Usage tracking and limits
- 🔄 Automatic saves and exports

## Getting Started

### Prerequisites

1. Get your API keys:
   - [Google AI Studio (Gemini)](https://ai.google.dev/)
   - [Stripe](https://stripe.com/)
   - [Supabase](https://supabase.com/)

2. Set up environment variables:

```bash
cp .env.example .env
```

Add your API keys to the `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
npx next dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stripe Integration Setup

1. Create products and prices in your Stripe dashboard:
   - Basic Plan: Monthly subscription
   - Pro Plan: Monthly subscription
   - Enterprise Plan: Monthly subscription

2. Update the price IDs in the code:
   - Find `subscriptionPlans` in `app/profile/page.tsx`
   - Replace `priceId` values with your Stripe price IDs

3. Set up Stripe webhooks:
   - Create a webhook in your Stripe dashboard
   - Point it to `/api/stripe` (in production)
   - Add the webhook secret to your environment variables

4. Test the integration:
   - Use Stripe test cards in development
   - Verify webhook handling
   - Check subscription status updates

## Supabase Setup

1. Create a new Supabase project

2. Run the database migrations:
   - Migrations are in `supabase/migrations`
   - They set up tables for:
     - User subscriptions
     - Usage tracking
     - Row-level security policies

3. Enable authentication:
   - Configure email auth in Supabase dashboard
   - Update auth settings as needed

## Project Structure

```
├── app/
│   ├── api/           # API routes
│   ├── create/        # Image creation page
│   ├── gallery/       # User gallery
│   └── profile/       # User profile & settings
├── components/        # React components
├── lib/              # Utility functions
└── supabase/         # Supabase configuration
```

## Key Components

- `ImagePromptInput`: Handles user prompts with context-aware suggestions
- `ImageResultDisplay`: Shows generated/edited images with history
- `SubscriptionCard`: Displays subscription plans
- `AccountSettingsDialog`: Manages user settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Google Gemini](https://deepmind.google/technologies/gemini/)
- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Stripe](https://stripe.com/)
- [Supabase](https://supabase.com/)