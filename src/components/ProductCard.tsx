'use client';

import Image from 'next/image';
import { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-64 w-full bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={product.id === '1'}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium text-gray-900">{product.name}</h3>
          <p className="mt-2 text-gray-500 text-sm">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-900 font-medium">
              {product.price.toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR'
              })}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Empêche l'ouverture du modal
                addItem(product);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 