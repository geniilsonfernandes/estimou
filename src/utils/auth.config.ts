import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { loginSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'

export default {
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials') {
        return
      }
      if (account?.provider === 'credentials' && user.email) {
        const userExists = await getUserByEmail(user.email)

        if (!userExists?.emailVerified) {
          throw new Error('E-mail não verificado')
        }

        return
      }
    },
    async linkAccount({ user }) {
      db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      })
    },
  },
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      return session
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validation = loginSchema.safeParse(credentials)

        if (validation.success) {
          const { email, password } = validation.data
          const user = await getUserByEmail(email)
          if (!user || !user.password) {
            return null
          }

          const isPasswordValid = await bcrypt.compare(password, user.password)

          if (isPasswordValid) {
            return user
          }
        }
        return null
      },
    }),
  ],
} satisfies NextAuthConfig
