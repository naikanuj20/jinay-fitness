import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { planId, planTitle, price, customerEmail, customerName } = await request.json();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'us_bank_account'], // Card and ACH Debit
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
