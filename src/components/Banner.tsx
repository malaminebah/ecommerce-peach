'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative py-16 md:py-24">
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4">
            MacBook Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-8">
            Superpuissant grâce aux puces M2 Pro et M2 Max.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Acheter
            </button>
            <button className="text-blue-500 hover:text-blue-600 px-8 py-3">
              En savoir plus &gt;
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[400px] md:h-[600px] w-full bg-[#fafafa]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/bannercolor.jpg"
            alt="MacBook Pro"
            fill
            className="object-cover w-full"
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>

        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">Jusqu&apos;à</h3>
            <p className="text-gray-500">22 heures d&apos;autonomie</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">Jusqu&apos;à</h3>
            <p className="text-gray-500">96 Go de mémoire unifiée</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">Puce</h3>
            <p className="text-gray-500">M2 Pro ou M2 Max</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 