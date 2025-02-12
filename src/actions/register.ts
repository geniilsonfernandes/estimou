'use server'

import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'
import { registerSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

type RegisterResponse = { success: true; message: string } | { success: false; message: string }

export const register = async (data: z.infer<typeof registerSchema>): Promise<RegisterResponse> => {
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
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    }
  }
}
