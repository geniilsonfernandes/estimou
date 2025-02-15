'use server'

import { getPasswordResetTokenByToken } from '@/data/recovery-token'
import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { CreateNewPasswordData, createNewPasswordSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { ActionResponse } from './types'

export const newPassword = async (data: {
  values: CreateNewPasswordData
  token: string
}): Promise<ActionResponse> => {
  const { values, token } = data

  const validation = createNewPasswordSchema.safeParse(values)

  if (!validation.success) {
    return {
      success: false,
      message: 'Invalid data',
    }
  }

  console.log(token)
  

  const existingToken = await getPasswordResetTokenByToken(token)

  if (!existingToken) {
    return {
      success: false,
      message: 'Token not found.',
    }
  }

  const checkIfTokenExpired = new Date(existingToken.expires) < new Date()

  if (checkIfTokenExpired) {
    return {
      success: false,
      message: 'Token expired.',
    }
  }

  const userExists = await getUserByEmail(existingToken.email)

  if (!userExists) {
    return {
      success: false,
      message: 'User not found.',
    }
  }

  // this is a new password
  const { password } = validation.data

  const hashedPassword = await bcrypt.hash(password, 10)

  await db.user.update({
    where: {
      id: userExists.id,
    },
    data: {
      password: hashedPassword,
    },
  })

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  })

  return {
    success: true,
    message: 'Password updated successfully',
  }
}
