import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { createCheckoutSession } from "@/lib/stripe";
import { useState } from "react";
import { toast } from "sonner";

interface SubscriptionCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  priceId: string;
  currentPlan?: boolean;
}

export function SubscriptionCard({
  name,
  price,
  features,
  popular,
  priceId,
  currentPlan,
}: SubscriptionCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setIsLoading(true);
      await createCheckoutSession(priceId);
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error("Failed to start subscription process");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          popular && "border-primary shadow-lg",
          currentPlan && "border-primary/50 bg-primary/5"
        )}
      >
        {popular && (
          <div className="absolute top-0 right-0">
            <div className="h-16 w-16">
              <div className="absolute transform rotate-45 bg-primary text-primary-foreground text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                Most Popular
              </div>
            </div>
          </div>
        )}

        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            {name}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-6">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>

          <ul className="space-y-3 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full"
            onClick={handleSubscribe}
            disabled={isLoading || currentPlan}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
                Processing...
              </div>
            ) : currentPlan ? (
              "Current Plan"
            ) : (
              "Subscribe"
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}