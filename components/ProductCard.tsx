'use client'

import { FC, MouseEvent, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '@/models/product'
import { useSession } from 'next-auth/react'
import setData from '@/firebase/firestore/setData'
import getDataById from '@/firebase/firestore/getDataById'
import { IBucket } from '@/models/bucket'

type Props = {
  product: IProduct
}

const ProductCard: FC<Props> = ({ product }) => {
  const { data: session } = useSession()
  const [bucketData, setBucketData] = useState<IBucket | null>()

  const isInBucket = useMemo(
    () => bucketData?.productsIds.includes(product.id),
    [bucketData?.productsIds, product.id]
  )

  useEffect(() => {
    if (!session?.user?.email) return

    const fetchBucket = async () => {
      const { result: bucket } = await getDataById(
        'bucket',
        session?.user?.email || ''
      )
      setBucketData({
        productsIds: bucket?.data()?.productsIds || [],
      })
    }

    fetchBucket().catch(console.error)
  }, [session?.user?.email])

  const addToBucket = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newBucket = {
      productsIds: [...(bucketData?.productsIds || []), product.id],
    }
    const { error } = await setData(
      'bucket',
      session?.user?.email || '',
      newBucket
    )
    if (!error) setBucketData(newBucket)
  }

  const removeFromBucket = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newBucket = {
      productsIds:
        bucketData?.productsIds?.filter((item) => item !== product.id) || [],
    }
    const { error } = await setData(
      'bucket',
      session?.user?.email || '',
      newBucket
    )
    if (!error) setBucketData(newBucket)
  }

  return (
    <Link href={`/products/${product.id}`} className="group">
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

        {bucketData && (
          <>
            {isInBucket ? (
              <button
                onClick={removeFromBucket}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={addToBucket}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Buy
              </button>
            )}
          </>
        )}
      </div>
    </Link>
  )
}

export default ProductCard
