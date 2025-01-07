import { Product } from '@/types';
import ProductList from '@/components/ProductList';

const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 14"',
    description: 'Puce M2 Pro, 16 Go de RAM, 512 Go SSD',
    price: 2399,
    image: '/images/macbook-pro.jpg'
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'A17 Pro, 256 Go, Titane naturel',
    price: 1459,
    image: '/images/iphone-15-pro.jpg'
  },
  {
    id: '3',
    name: 'iPad Air',
    description: 'Puce M1, 256 Go, Wi-Fi + 5G',
    price: 969,
    image: '/images/ipad-air.jpg'
  },
  {
    id: '4',
    name: 'AirPods Pro',
    description: '2ème génération avec boîtier de charge MagSafe',
    price: 279,
    image: '/images/airpods-pro.jpg'
  },
  {
    id: '5',
    name: 'Apple Watch Series 9',
    description: 'GPS + Cellular, 45mm, Boîtier en aluminium',
    price: 539,
    image: '/images/apple-watch.jpg'
  },
  {
    id: '6',
    name: 'Mac Studio',
    description: 'Puce M2 Ultra, 64 Go de RAM, 1 To SSD',
    price: 4599,
    image: '/images/mac-studio.jpg'
  }
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-medium text-gray-900 mb-8 p-6">
        Nos Produits
      </h1>
      <ProductList products={products} />
    </div>
  );
}
