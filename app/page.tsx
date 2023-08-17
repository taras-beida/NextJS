import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import { IProduct } from '@/models/product'
import getCollection from '@/firebase/firestore/getCollection'
import ProductCard from '@/components/ProductCard'

export default async function Home() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('sign-in')
  }

  const { result, error } = await getCollection('products')

  const products =
    result?.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as IProduct) || []

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl ">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
