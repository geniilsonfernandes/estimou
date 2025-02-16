'use server'

import { db } from '@/lib/db'

/**
 * this function is used to get a verification token by email
 * @param email
 * @returns
 */

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = db.verificationToken.findFirst({
      where: {
        email,
      },
    })

    return verificationToken
  } catch {
    return null
  }
}

/**
 * this function is used to get a verification token by token
 *
 * @param token
 * @returns
 */

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = db.verificationToken.findUnique({
      where: {
        token,
      },
    })

    return verificationToken
  } catch {
    return null
  }
}

export const getResetTokenByToken = async (token: string) => {
  try {
    const verificationToken = db.passwordResetToken.findUnique({
      where: {
        token,
      },
    })

    return verificationToken
  } catch {
    return null
  }
}