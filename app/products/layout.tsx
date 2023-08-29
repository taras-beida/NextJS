import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
