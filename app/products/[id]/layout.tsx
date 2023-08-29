import type { Metadata } from 'next'
import { ReactNode } from 'react'

type Props = {
  params: { id: string }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `Product ${id}`,
    description: `Product ${id} page`,
  }
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
