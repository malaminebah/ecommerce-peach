'use client';

import { Product } from '@/types';
import ProductList from './ProductList';

interface BestSalesProps {
  products: Product[];
}

export function BestSales({ products }: BestSalesProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Meilleures Ventes
        </h2>
        <ProductList products={products} />
      </div>
    </section>
  );
}

