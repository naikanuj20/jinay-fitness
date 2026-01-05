import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const getStripeClient = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }
  return new Stripe(apiKey, {
    apiVersion: '2025-12-15.clover',
  });
};

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeClient();
    const { planId, planTitle, price, customerEmail, customerName, paymentMethod } = await request.json();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: planTitle,
              description: `Forged Fitness - ${planTitle}`,
            },
            unit_amount: Math.round(parseFloat(price) * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin}/payment?plan=${planId}&title=${encodeURIComponent(planTitle)}&price=${price}`,
      customer_email: customerEmail,
      metadata: {
        planId,
        planTitle,
        customerName,
        paymentMethod: paymentMethod || 'card',
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
