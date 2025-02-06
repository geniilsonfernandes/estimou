import { getUserByEmail } from '@/data/user'
import { loginSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default {
  providers: [
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
