'use server'

import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'
import { type RegisterData, registerSchema } from '@/server/schemas'
import bcrypt from 'bcryptjs'
import { ActionResponse, CustomError } from './types'

export const registerUser = async (data: RegisterData): Promise<ActionResponse> => {
  const validation = registerSchema.safeParse(data)
  if (!validation.success) {
    throw new CustomError('Invalid data')
  }

  const { email, password, name } = validation.data
  const normalizedEmail = email.toLowerCase()

  try {
    const existingUser = await getUserByEmail(normalizedEmail)
    if (existingUser) {
      throw new CustomError('User already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.user.create({
      data: {
        name,
        email: normalizedEmail,
        password: hashedPassword,
      },
    })
    const verificationToken = await generateVerificationToken(normalizedEmail)

    await sendVerificationEmail(normalizedEmail, verificationToken.token)

    return {
      success: true,
      message: 'Confirm your email address',
    }
  } catch (error) {
    // TODO handle error ADD SENTRY
    if (error instanceof CustomError) {
      throw new Error(error.message)
    }
    // TODO handle error ADD SENTRY
    throw new Error('Something went wrong. Please try again later.')
  }
}
