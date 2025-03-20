"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, User, Image as ImageIcon, History, Calendar, CreditCard } from "lucide-react";
import { SubscriptionCard } from "@/components/SubscriptionCard";
import { format } from "date-fns";
import { AccountSettingsDialog } from "@/components/AccountSettingsDialog";

// Mock subscription data - replace with real data from Supabase
const mockSubscription = {
  plan: "basic",
  status: "active",
  currentPeriodEnd: new Date(2024, 3, 15), // April 15, 2024
};

const subscriptionPlans = [
  {
    name: "Basic",
    price: "9.99",
    priceId: "price_basic",
    features: [
      "50 generations per month",
      "Basic editing features",
      "Standard response time",
      "Community support",
      "Download in standard quality",
    ],
  },
  {
    name: "Pro",
    price: "19.99",
    priceId: "price_pro",
    features: [
      "150 generations per month",
      "Advanced editing features",
      "Priority processing",
      "Email support",
      "Download in high quality",
      "Commercial usage rights",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "49.99",
    priceId: "price_enterprise",
    features: [
      "Unlimited generations",
      "Premium editing features",
      "Fastest processing",
      "24/7 priority support",
      "Custom API access",
      "Team collaboration tools",
    ],
  },
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Profile</h1>
            <p className="text-muted-foreground">
              Manage your account and subscription
            </p>
          </div>
          <AccountSettingsDialog />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-muted-foreground">user@example.com</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Member Since</label>
                  <p className="text-muted-foreground">January 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Current Subscription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Plan</label>
                  <p className="text-muted-foreground capitalize">{mockSubscription.plan}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <p className="text-muted-foreground capitalize">{mockSubscription.status}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Next Billing Date</label>
                  <p className="text-muted-foreground">
                    {format(mockSubscription.currentPeriodEnd, "MMMM d, yyyy")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">23</p>
                    <p className="text-sm text-muted-foreground">
                      Images Generated
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <History className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">15</p>
                    <p className="text-sm text-muted-foreground">
                      Images Edited
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Subscription Plans</h2>
            <p className="text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan) => (
              <SubscriptionCard
                key={plan.name}
                {...plan}
                currentPlan={plan.name.toLowerCase() === mockSubscription.plan}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}