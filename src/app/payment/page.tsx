'use client';

import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';
import StripeWrapper from '@/components/StripeWrapper';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { items } = useCartStore();
  const router = useRouter();

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  useEffect(() => {
    if (total === 0) {
      console.log('Total is 0, redirecting to cart');
      router.push('/cart');
      return;
    }

    const createPaymentIntent = async () => {
      try {
        console.log('Creating payment intent for amount:', total);
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: total }),
        });
        
        const data = await response.json();
        
        if (data.error) {
          console.error('Error from API:', data.error);
          setError(data.error);
          return;
        }

        console.log('Client secret received');
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        setError('Erreur lors de la création du paiement');
      }
    };

    createPaymentIntent();
  }, [total, router]);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-red-500">
        Erreur: {error}
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Paiement</h1>
      <StripeWrapper
        clientSecret={clientSecret}
        total={total}
        onSuccess={() => router.push('/payment/success')}
      />
    </div>
  );
} 