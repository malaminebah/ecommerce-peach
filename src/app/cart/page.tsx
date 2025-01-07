'use client';

import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!mounted) return null;

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

          {/* Résumé de la commande */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>
                    {total.toLocaleString('fr-FR', {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span>Gratuite</span>
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

              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse de livraison
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Commander
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 