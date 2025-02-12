'use server'

import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'
import { type RegisterData, registerSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { ActionResponse } from './types'

export const register = async (data: RegisterData): Promise<ActionResponse> => {
  const validation = registerSchema.safeParse(data)
  if (!validation.success) {
    return {
      success: false,
      message: 'Invalid data',
    }
  }

  const { email, password, name } = validation.data
  const normalizedEmail = email.toLowerCase()

  try {
    const existingUser = await getUserByEmail(normalizedEmail)
    if (existingUser) {
      return {
        success: false,
        message: 'User already exists',
      }
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
  } catch {
    // TODO handle error ADD SENTRY
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    }
  }
}
