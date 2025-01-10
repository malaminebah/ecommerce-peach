import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
  }
  
  interface Session {
    user: User;
  }
}

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'mac' | 'ipad' | 'iphone' | 'watch' | 'accessories';
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export interface ShippingOption {
  id: string;
  label: string;
  price: number;
}

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
}
