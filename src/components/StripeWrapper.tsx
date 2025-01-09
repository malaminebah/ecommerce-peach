'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

interface StripeWrapperProps {
  clientSecret: string;
  total: number;
  onSuccess: () => void;
}

export default function StripeWrapper({ clientSecret, total, onSuccess }: StripeWrapperProps) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#3b82f6',
          },
        },
      }}
    >
      <PaymentForm total={total} onSuccess={onSuccess} />
    </Elements>
  );
} 