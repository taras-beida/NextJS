import Image from 'next/image'
import getDataById from '@/firebase/firestore/getDataById'
import { IProduct } from '@/models/product'

export default async function Product({ params }: { params: { id: string } }) {
  const { result } = await getDataById('products', params.id)

  const product = { id: result?.id, ...result?.data() } as IProduct

  return (
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300">
          <Image
            src={product.image}
            width={300}
            height={300}
            className="w-full h-full object-cover"
            alt="Product Image"
          />
        </div>
      </div>
      <div className="md:flex-1 px-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            ante justo. Integer euismod libero id mauris malesuada tincidunt.
          </p>
          <div className="mb-4">
            <span className="font-bold text-gray-700">
              Product Description:
            </span>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
              Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
              vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
              nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
              lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
              nisl suscipit, nec tincidunt mi consectetur.
            </p>
          </div>
          <div className="flex">
            <div className="mr-4">
              <span className="font-bold text-gray-700">Price: </span>
              <span className="text-gray-600">
                ${new Intl.NumberFormat().format(product.price)}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700">Availability: </span>
              <span className="text-gray-600">In Stock</span>
            </div>
          </div>
        </div>

        <form>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  )
}
