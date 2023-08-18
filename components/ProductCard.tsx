'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '@/models/product'

type Props = {
  product: IProduct
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={'#'} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt="product image"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="mt-2 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            ${new Intl.NumberFormat().format(product.price)}
          </p>
        </div>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Buy
        </button>
      </div>
    </Link>
  )
}

export default ProductCard
