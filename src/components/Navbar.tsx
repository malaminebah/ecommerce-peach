'use client';

import Link from 'next/link';
import { useState } from 'react';
import {  Menu, X } from 'lucide-react';
import Cart from './Cart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-gray-900">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            </svg>
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/product" className="text-sm text-gray-700 hover:text-gray-900">
              Store
            </Link>
            <Link href="/mac" className="text-sm text-gray-700 hover:text-gray-900">
              Mac
            </Link>
            <Link href="/iphone" className="text-sm text-gray-700 hover:text-gray-900">
              iPhone
            </Link>
            <Link href="/ipad" className="text-sm text-gray-700 hover:text-gray-900">
              iPad
            </Link>
          </div>

          {/* Panier */}
          <div className="flex items-center space-x-4">
            <Cart />
            
            {/* Menu burger - Mobile */}
            <button 
              className="md:hidden text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/product" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </Link>
              <Link 
                href="/mac" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Mac
              </Link>
              <Link 
                href="/iphone" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                iPhone
              </Link>
              <Link 
                href="/ipad" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                iPad
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 