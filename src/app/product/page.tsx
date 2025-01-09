import ProductList from '@/components/ProductList';
import { products } from '@/data/products';

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Tous nos produits
      </h1>
      <ProductList products={products} />
    </div>
  );
}
