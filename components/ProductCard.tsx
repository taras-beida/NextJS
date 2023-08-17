'use client'

import { FC } from 'react'
import { IProduct } from '@/models/product'

type Props = {
  product: IProduct
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <a href={'#'} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt="product image"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${new Intl.NumberFormat().format(product.price)}
      </p>
    </a>
  )
}

export default ProductCard
