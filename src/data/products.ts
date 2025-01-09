import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 14"',
    description: 'Puce M2 Pro, 16 Go de RAM, 512 Go SSD',
    price: 1999.99,
    image: '/macBook.png',
    category: 'mac'
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'A17 Pro, 256 Go, Titane naturel',
    price: 1199.99,
    image: '/iphone.jpg',
    category: 'iphone'
  },
  {
    id: '3',
    name: 'iPad Pro',
    description: 'M2, 11", 128 Go, Wi-Fi',
    price: 899.99,
    image: '/ipad.jpg',
    category: 'ipad'
  },
  {
    id: '4',
    name: 'AirPods Pro',
    description: '2ème génération avec boîtier de charge MagSafe',
    price: 279.99,
    image: '/products/airpods-pro.jpg',
    category: 'accessories'
  },
  {
    id: '5',
    name: 'Apple Watch Series 9',
    description: 'GPS, 45mm, Boîtier aluminium minuit',
    price: 449.99,
    image: '/products/apple-watch.jpg',
    category: 'watch'
  },
  {
    id: '6',
    name: 'iMac 24"',
    description: 'M3, 8 Go RAM, 256 Go SSD, Bleu',
    price: 1499.99,
    image: '/macBook.png',
    category: 'mac'
  },
  {
    id: '7',
    name: 'Mac mini',
    description: 'M2, 8 Go RAM, 256 Go SSD',
    price: 699.99,
    image: '/macBook.png',
    category: 'mac'
  },
  {
    id: '8',
    name: 'Studio Display',
    description: 'Écran Retina 5K 27", Verre standard',
    price: 1749.99,
    image: '/products/studio-display.jpg',
    category: 'accessories'
  },
  {
    id: '9',
    name: 'iPad Air',
    description: 'M1, 10.9", 64 Go, Wi-Fi, Gris sidéral',
    price: 699.99,
    image: '/ipad.jpg',
    category: 'ipad'
  },
  {
    id: '10',
    name: 'iPad mini',
    description: 'A15, 8.3", 64 Go, Wi-Fi, Rose',
    price: 559.99,
    image: '/ipad.jpg',
    category: 'ipad'
  },
  {
    id: '11',
    name: 'iPhone 15',
    description: 'A16, 128 Go, Bleu',
    price: 899.99,
    image: '/iphone.jpg',
    category: 'iphone'
  },
  {
    id: '12',
    name: 'AirPods Max',
    description: 'Casque supra-auriculaire, Argent',
    price: 579.99,
    image: '/products/airpods-max.jpg',
    category: 'accessories'
  },
  {
    id: '13',
    name: 'HomePod mini',
    description: 'Enceinte connectée, Blanc',
    price: 99.99,
    image: '/products/homepod-mini.jpg',
    category: 'accessories'
  },
  {
    id: '14',
    name: 'Apple TV 4K',
    description: 'Wi-Fi + Ethernet, 128 Go',
    price: 169.99,
    image: '/products/apple-tv.jpg',
    category: 'accessories'
  },
  {
    id: '15',
    name: 'Magic Keyboard',
    description: 'Avec pavé numérique, Français',
    price: 109.99,
    image: '/products/magic-keyboard.jpg',
    category: 'accessories'
  }
];

// Helpers pour filtrer les produits par catégorie
export const macProducts = products.filter(p => p.category === 'mac');
export const iPadProducts = products.filter(p => p.category === 'ipad');
export const iPhoneProducts = products.filter(p => p.category === 'iphone');
export const watchProducts = products.filter(p => p.category === 'watch');
export const accessoryProducts = products.filter(p => p.category === 'accessories');

export const bestSellers = products.slice(0, 3); 