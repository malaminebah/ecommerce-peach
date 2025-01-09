import ProductList from '@/components/ProductList'
import { iPadProducts } from '@/data/products'
import React from 'react'

export default function Macpage () {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-semibold text-gray-900 mb-8">
      Tous nos ipad
    </h1>
    <ProductList products={iPadProducts} />
  </div>
  )
}

