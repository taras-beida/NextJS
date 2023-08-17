'use client'

import { FC } from 'react'
import Image from 'next/image'
import { IProduct } from '@/models/product'

type Props = {
  product: IProduct
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <a href={'#'} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={product.image}
          width={100}
          height={100}
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
