'use client';

import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';

interface PaymentFormProps {
  total: number;
  onSuccess: () => void;
}

export default function PaymentForm({ total, onSuccess }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        throw new Error(submitError.message);
      }

      const { error: paymentError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
        },
      });

      if (paymentError) {
        throw new Error(paymentError.message);
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Informations de paiement
        </h3>
        
        <div className="space-y-4">
          <PaymentElement />

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm"
            >
              {error}
            </motion.div>
          )}

          <div className="border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total à payer</span>
              <span className="font-medium">
                {total.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </span>
            </div>

            <button
              type="submit"
              disabled={!stripe || isLoading}
              className={`w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors ${
                (!stripe || isLoading) && 'opacity-50 cursor-not-allowed'
              }`}
            >
              {isLoading ? 'Traitement...' : 'Payer maintenant'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
} 