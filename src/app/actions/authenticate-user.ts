'use server'

import { getUserByEmail } from '@/data/user'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'
import { loginSchema, type LoginData } from '@/server/schemas'
import { signIn } from '@/utils/auth'
import { AuthError } from 'next-auth'
import { ActionResponse, CustomError } from './types'

export const authenticateUser = async (data: LoginData): Promise<ActionResponse> => {
  const validation = loginSchema.safeParse(data)

  if (!validation.success) {
    throw new CustomError('Invalid data')
  }

  try {
    const { email, password } = validation.data
    const normalizedEmail = email.toLowerCase()

    const existingUser = await getUserByEmail(email)

    if (!existingUser || !existingUser?.email || !existingUser.password) {
      throw new CustomError('User not found')
    }

    if (!existingUser.emailVerified) {
      await generateVerificationToken(existingUser.email)
      const verificationToken = await generateVerificationToken(normalizedEmail)
      await sendVerificationEmail(normalizedEmail, verificationToken.token)

      throw new CustomError('User not verified, check your email to verify your account!')
    }

    await signIn('credentials', { email, password, redirect: false  })
    return {
      success: true,
      message: 'Login successful',
    }
  } catch (error) {
    console.log(error)

    if (error instanceof CustomError) {
      throw new Error(error.message)
    }
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

    // TODO handle error ADD SENTRY
    throw new Error('Something went wrong. Please try again later.')
  }
}
