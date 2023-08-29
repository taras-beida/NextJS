'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Spinner from '@/components/Spinner'

export default function Profile() {
  const { data: session } = useSession()

  if (!session) {
    return <Spinner />
  }

  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <Image
        src={
          session?.user?.image ||
          'https://firebasestorage.googleapis.com/v0/b/nextjs-364f3.appspot.com/o/icons%2Fuser.jpg?alt=media&token=198a752b-a286-4ef2-8205-951dcf16aec0'
        }
        width={130}
        height={130}
        className="w-32 h-32 rounded-full mx-auto"
        alt="profile"
      />
      <h2 className="text-center text-2xl font-semibold mt-3">
        {session?.user?.name}
      </h2>
      <p className="text-center text-gray-600 mt-1">
        User {session?.user?.email && `(${session?.user?.email})`}
      </p>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}
