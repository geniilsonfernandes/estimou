'use server'

import { getUserByEmail } from '@/data/user'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { loginSchema, type LoginData } from '@/schemas'
import { signIn } from '@/utils/auth'
import { AuthError } from 'next-auth'
import { ActionResponse } from './types'

export const login = async (data: LoginData): Promise<ActionResponse> => {
  const validation = loginSchema.safeParse(data)

  if (!validation.success) {
    return {
      success: false,
      message: 'Invalid data',
    }
  }

  const { email, password } = validation.data
  const normalizedEmail = email.toLowerCase()

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser?.email || !existingUser.password) {
    return {
      success: false,
      message: 'User not found',
    }
  }

  if (!existingUser.emailVerified) {
    await generateVerificationToken(existingUser.email)

    const verificationToken = await generateVerificationToken(normalizedEmail)

    await sendVerificationEmail(normalizedEmail, verificationToken.token)
    return {
      success: false,
      message: 'User not verified, check your email to verify your account!',
    }
  }

  try {
    await signIn('credentials', { email, password, redirectTo: DEFAULT_LOGIN_REDIRECT })

    return {
      success: true,
      message: 'Login successful',
    }
  } catch (error) {
    // TODO handle error ADD SENTRY
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            message: 'User not found or password is incorrect',
            success: false,
          }
        default:
          return {
            success: false,
            message: 'Invalid data',
          }
      }
    }
    throw error
  }
}
