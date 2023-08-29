import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
