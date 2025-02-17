'use server'

import { getUserByEmail } from '@/data/user'
import { getVerificationTokenByToken } from '@/data/verification-token'
import { db } from '@/lib/db'
import { ActionResponse } from './types'

export const verificationEmail = async (token: string): Promise<ActionResponse> => {
  const existingToken = await getVerificationTokenByToken(token)

  if (!existingToken) {
    throw new Error('Token not found.')
  }

  const checkIfTokenExpired = new Date(existingToken.expires) < new Date()

  if (checkIfTokenExpired) {
    throw new Error('Token expired.')
  }

  const userExists = await getUserByEmail(existingToken.email)

  if (!userExists) {
    throw new Error('User not found.')
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
}
