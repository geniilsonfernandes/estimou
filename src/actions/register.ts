'use server'

import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { registerSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

export const register = async (data: z.infer<typeof registerSchema>) => {
  const validation = registerSchema.safeParse(data)

  if (!validation.success) {
    return {
      error: 'Invalid data',
    }
  }

  const { email, password, name } = validation.data

  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {
      error: 'User already exists',
    }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  // TODO: send email confirmation

  return {
    success: true,
  }
}
