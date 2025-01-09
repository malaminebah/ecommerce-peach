import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();
    console.log('Amount received:', amount);

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is not defined');
      throw new Error('Stripe key is missing');
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log('PaymentIntent created:', paymentIntent.client_secret);
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du paiement' },
      { status: 500 }
    );
  }
} 