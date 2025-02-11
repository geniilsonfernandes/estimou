'use server'

import { getUserByEmail } from '@/data/user'
import { getVerificationTokenByToken } from '@/data/verification-token'
import { db } from '@/lib/db'

/**
 * verify a token provided by the user and update the user's email if the token is valid
 *
 * @param {string} token
 * @returns {Promise<{ error?: string, success?: string }>}
 */
export const newVerification = async (
  token: string
): Promise<{ error?: string; success?: string }> => {
  const existingToken = await getVerificationTokenByToken(token)

  if (!existingToken) {
    return {
      error: 'Token not found.',
    }
  }

  const checkIfTokenExpired = new Date(existingToken.expires) < new Date()

  if (checkIfTokenExpired) {
    return {
      error: 'Token expired.',
    }
  }

  const userExists = await getUserByEmail(existingToken.email)

  if (!userExists) {
    return {
      error: 'User not found.',
    }
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
    success: 'email verified!',
  }
}
