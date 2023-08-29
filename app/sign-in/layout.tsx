import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in page',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
