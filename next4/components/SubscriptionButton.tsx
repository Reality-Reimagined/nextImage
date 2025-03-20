"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "@/lib/stripe";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface SubscriptionButtonProps {
  priceId: string;
  planName: string;
}

export function SubscriptionButton({ priceId, planName }: SubscriptionButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setIsLoading(true);
      await createCheckoutSession(priceId);
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Failed to start subscription process");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSubscribe}
      disabled={isLoading}
      className="w-full"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        `Subscribe to ${planName}`
      )}
    </Button>
  );
}