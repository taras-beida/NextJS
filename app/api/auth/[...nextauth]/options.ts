import type { NextAuthOptions } from 'next-auth'

import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { FirestoreAdapter } from '@auth/firebase-adapter'
import signIn from '@/firebase/auth/signin'

export const options: NextAuthOptions = {
  // @ts-ignore
  adapter: FirestoreAdapter(),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'text',
          placeholder: 'your email',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your password',
        },
      },
      async authorize(credentials): Promise<any> {
        if (credentials) {
          const { result, error } = await signIn(
            credentials.email,
            credentials.password
          )
          if (error) return null
          return result?.user
        }
        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}
