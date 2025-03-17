import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export const createCheckoutSession = async (priceId: string) => {
  try {
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    });

    const { sessionId } = await response.json();
    const stripe = await getStripe();

    if (!stripe) {
      throw new Error("Stripe failed to initialize");
    }

    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
};