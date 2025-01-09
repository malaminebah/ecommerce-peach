'use client';

import { useState, useEffect } from 'react';
import { ShippingOption, CheckoutFormData } from '@/types';
import { useRouter } from 'next/navigation';

interface CheckoutFormProps {
  subtotal: number;
  onSubmit: (formData: CheckoutFormData, selectedShipping: ShippingOption) => void;
}

const SHIPPING_OPTIONS: ShippingOption[] = [
  { id: 'standard', label: 'Standard (3-5 jours)', price: 0 },
  { id: 'express', label: 'Express (1-2 jours)', price: 9.99 },
  { id: 'priority', label: 'Prioritaire (24h)', price: 19.99 },
];

export default function CheckoutForm({ subtotal, onSubmit }: CheckoutFormProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState(SHIPPING_OPTIONS[0]);
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = subtotal + selectedShipping.price;

  if (!mounted) {
    return <div className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData, selectedShipping);
    router.push('/payment');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Sous-total</span>
          <span>
            {subtotal.toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR',
            })}
          </span>
        </div>

        {/* Options de livraison */}
        <div className="py-3 border-t">
          <p className="text-gray-600 mb-2">Mode de livraison</p>
          <div className="space-y-2">
            {SHIPPING_OPTIONS.map((option) => (
              <label
                key={option.id}
                className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value={option.id}
                    checked={selectedShipping.id === option.id}
                    onChange={() => setSelectedShipping(option)}
                    className="mr-2"
                  />
                  <span>{option.label}</span>
                </div>
                <span>
                  {option.price === 0
                    ? 'Gratuit'
                    : option.price.toLocaleString('fr-FR', {
                        style: 'currency',
                        currency: 'EUR',
                      })}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-3 border-t font-semibold">
          <span>Total</span>
          <span>
            {total.toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR',
            })}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Adresse
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
              Code postal
            </label>
            <input
              type="text"
              id="postalCode"
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Ville
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors mt-6"
          onClick={handleSubmit}
        >
          Commander
        </button>
      </form>
    </div>
  );
} 