'use client';

import { Product } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const addItem = useCartStore((state) => state.addItem);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[101] overflow-y-auto"
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden">
                <div className="flex justify-end p-4">
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                  {/* Image */}
                  <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Contenu */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-medium text-gray-900">
                        {product.name}
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        {product.description}
                      </p>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-medium text-gray-900">
                          {product.price.toLocaleString('fr-FR', {
                            style: 'currency',
                            currency: 'EUR',
                          })}
                        </span>
                        <button
                          onClick={() => {
                            addItem(product);
                            onClose();
                          }}
                          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    </div>

                    {/* Caractéristiques */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Caractéristiques
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-32">Référence:</span>
                          <span className="font-medium">{product.id}</span>
                        </li>
                        {/* Ajoutez d'autres caractéristiques selon vos besoins */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 