import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { priceId } = body;

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancelled`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const headersList = headers();
    const stripeSignature = headersList.get("stripe-signature");

    if (!stripeSignature) {
      return NextResponse.json(
        { error: "No stripe signature found" },
        { status: 400 }
      );
    }

    const event = stripe.webhooks.constructEvent(
      await req.text(),
      stripeSignature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        // Handle successful payment
        // Update user's subscription status in database
        break;
      case "customer.subscription.updated":
        // Handle subscription updates
        break;
      case "customer.subscription.deleted":
        // Handle subscription cancellations
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { error: "Error handling webhook" },
      { status: 400 }
    );
  }
}