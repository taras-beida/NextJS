import Image from 'next/image'
import Link from 'next/link'
import NextImg from '@/public/next.svg'

export default async function Home() {
  return (
    <section className="h-full relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image src={NextImg} className="mx-auto h-12" alt="Logo" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “I am a web developer with six years of experience. I specialize
              in using React to build dynamic web applications, and my expertise
              allows me to create efficient and innovative solutions for
              different projects.”
            </p>
          </blockquote>

          <div className="flex justify-center mt-6">
            <Link
              className="inline-block px-12 py-3 text-sm font-medium text-white bg-gray-800 border border-gray-800 rounded active:text-black hover:bg-transparent hover:text-black focus:outline-none focus:ring"
              href={'/products'}
            >
              Products
            </Link>
          </div>

          <figcaption className="mt-10">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/nextjs-364f3.appspot.com/o/other%2Fprofile.JPG?alt=media&token=b22fcac1-fa1c-4148-b612-6320b3b6f921"
              className="mx-auto h-10 w-10 rounded-full"
              width={40}
              height={40}
              alt="Taras Beida"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Taras Beida</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">
                Senior Frontend Developer (React)
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
