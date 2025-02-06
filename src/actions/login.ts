'use server'

import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { loginSchema } from '@/schemas'
import { signIn } from '@/utils/auth'
import { AuthError } from 'next-auth'
import { z } from 'zod'

export const login = async (data: z.infer<typeof loginSchema>) => {
  const validation = loginSchema.safeParse(data)

  if (!validation.success) {
    return {
      error: 'Invalid data',
    }
  }

  const { email, password } = validation.data

  try {
    console.log('ddsf', DEFAULT_LOGIN_REDIRECT)
    
    await signIn('credentials', { email, password, redirectTo: DEFAULT_LOGIN_REDIRECT })
  } catch (error) {
    // TODO handle error ADD SENTRY
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: 'Invalid credentials',
          }
        default:
          return {
            error: 'Invalid data',
          }
      }
    }
    throw error
  }
}
