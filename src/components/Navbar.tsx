'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
  const { data: session } = useSession();
  const { items } = useCartStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link href="/" className="text-gray-900 font-medium">
              Accueil
            </Link>
            <Link href="/product" className="text-gray-600 hover:text-gray-900">
              Store
            </Link>
            <Link href="/mac" className="text-gray-600 hover:text-gray-900">
              Mac
            </Link>
            <Link href="/ipad" className="text-gray-600 hover:text-gray-900">
              iPad
            </Link>
            <Link href="/iphone" className="text-gray-600 hover:text-gray-900">
              iPhone
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            {session ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {session.user?.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Connexion
              </button>
            )}

            <Link
              href="/cart"
              className="text-gray-600 hover:text-gray-900 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 