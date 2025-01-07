'use client';

import { useCartStore } from '@/store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!mounted) return null;

  return (
    <div className="relative">
      {/* Bouton du panier */}
      <button
        className="relative text-gray-700 hover:text-gray-900"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingBag className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {/* Modal du panier */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[100]"
            />

            {/* Panneau du panier */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-[100dvh] w-full max-w-md bg-white shadow-xl z-[101] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-semibold">Votre Panier</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {items.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Votre panier est vide
                  </p>
                ) : (
                  <>
                    {/* Liste des produits */}
                    <div className="space-y-6 mb-8">
                      {items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center space-x-4 border-b pb-4"
                        >
                          <div className="relative h-20 w-20 bg-gray-100 rounded-md overflow-hidden">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.product.price.toLocaleString('fr-FR', {
                                style: 'currency',
                                currency: 'EUR',
                              })}
                            </p>
                            <div className="flex items-center mt-2">
                              <select
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(
                                    item.product.id,
                                    parseInt(e.target.value)
                                  )
                                }
                                className="text-sm border rounded-md mr-2 p-1"
                              >
                                {[1, 2, 3, 4, 5].map((num) => (
                                  <option key={num} value={num}>
                                    {num}
                                  </option>
                                ))}
                              </select>
                              <button
                                onClick={() => removeItem(item.product.id)}
                                className="text-sm text-red-500 hover:text-red-600"
                              >
                                Supprimer
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Total et bouton de paiement */}
                    <div className="border-t pt-6 sticky bottom-0 bg-white">
                      <div className="flex justify-between mb-4">
                        <span className="font-medium">Total</span>
                        <span className="font-medium">
                          {total.toLocaleString('fr-FR', {
                            style: 'currency',
                            currency: 'EUR',
                          })}
                        </span>
                      </div>
                      <button 
                        onClick={() => {
                          setIsOpen(false);
                          router.push('/cart');
                        }}
                        className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        Passer la commande
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 