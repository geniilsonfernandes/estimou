'use server'

import { getPasswordResetTokenByToken } from '@/data/recovery-token'
import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { CreateNewPasswordData, createNewPasswordSchema } from '@/server/schemas'
import bcrypt from 'bcryptjs'
import { ActionResponse, CustomError } from './types'

export const newPassword = async (data: {
  values: CreateNewPasswordData
  token: string
}): Promise<ActionResponse> => {
  const { values, token } = data

  const validation = createNewPasswordSchema.safeParse(values)

  if (!validation.success) {
    throw new CustomError('Invalid data')
  }

  try {
    const existingToken = await getPasswordResetTokenByToken(token)

    if (!existingToken) {
      throw new Error('Token not found.')
    }

    const checkIfTokenExpired = new Date(existingToken.expires) < new Date()

    if (checkIfTokenExpired) {
      throw new Error('Token not found.')
    }

    const userExists = await getUserByEmail(existingToken.email)

    if (!userExists) {
      throw new Error('User not found.')
    }

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
  } catch (error) {
    if (error instanceof CustomError) {
      throw new Error(error.message)
    }
    // TODO handle error ADD SENTRY
    throw new Error('Something went wrong. Please try again later.')
  }
}
