'use client';

import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CheckoutForm from '@/components/CheckoutForm';
import { ShippingOption, CheckoutFormData } from '@/types';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = (formData: CheckoutFormData, selectedShipping: ShippingOption) => {
    console.log('Commande soumise:', {
      formData,
      items,
      shipping: selectedShipping,
      total: subtotal + selectedShipping.price
    });
    // Ici vous pouvez ajouter la logique pour traiter la commande
  };

  // Afficher un placeholder pendant l'hydratation
  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Votre Panier</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Votre panier est vide</p>
          <a
            href="/product"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Continuer vos achats
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des produits */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="relative h-24 w-24 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.product.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.product.id, parseInt(e.target.value))
                        }
                        className="border rounded-md p-1"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Supprimer
                      </button>
                    </div>
                    <p className="font-medium">
                      {item.product.price.toLocaleString('fr-FR', {
                        style: 'currency',
                        currency: 'EUR',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire de commande */}
          <div className="lg:col-span-1">
            <CheckoutForm
              subtotal={subtotal}
              onSubmit={handleCheckout}
            />
          </div>
        </div>
      )}
    </div>
  );
} 