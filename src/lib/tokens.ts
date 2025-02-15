import { getResetTokenByToken, getVerificationTokenByEmail } from '@/data/verification-token'
import { v4 as uuid } from 'uuid'
import { db } from './db'

export const generateResetPasswordToken = async (email: string) => {
  const token = uuid()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getResetTokenByToken(email)

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const recoveryToken = await db.passwordResetToken.create({
    data: {
      token,
      expires,
      email,
    },
  })

  return recoveryToken
}

export const generateVerificationToken = async (email: string) => {
  const token = uuid()
  const expires = new Date(new Date().getTime() + 3600 * 1000) // 1 hour

  const existingToken = await getVerificationTokenByEmail(token)

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      token,
      expires,
      email,
    },
  })

  return verificationToken
}
