'use server'

import { getUserByEmail } from '@/data/user'
import { getVerificationTokenByToken } from '@/data/verification-token'
import { db } from '@/lib/db'
import { ActionResponse, CustomError } from './types'

export const verificationEmail = async (token: string): Promise<ActionResponse> => {
  try {
    const existingToken = await getVerificationTokenByToken(token)

    if (!existingToken) {
      throw new CustomError('Token not found.')
    }

    const checkIfTokenExpired = new Date(existingToken.expires) < new Date()

    if (checkIfTokenExpired) {
      throw new CustomError('Token expired.')
    }

    const userExists = await getUserByEmail(existingToken.email)

    if (!userExists) {
      throw new CustomError('User not found.')
    }

    await db.user.update({
      where: {
        email: existingToken.email,
      },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    })

    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    })

    return {
      success: true,
      message: 'Email verified successfully',
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
