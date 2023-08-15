import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'

export default async function Home() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('sign-in')
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">{session.user?.email}</h1>
      <Link href="/api/auth/signout">Sign Out</Link>
    </>
  )
}
