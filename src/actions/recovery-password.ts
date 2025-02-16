'use server'

import { getUserByEmail } from '@/data/user'
import { sendRecoveryPasswordEmail } from '@/lib/mail'
import { generateResetPasswordToken } from '@/lib/tokens'
import { RecoverPasswordData, recoverPasswordSchema } from '@/server/schemas'
import { ActionResponse } from './types'

class CustomError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CustomError'
  }
}

export const recoveryPassword = async (data: RecoverPasswordData): Promise<ActionResponse> => {
  const validation = recoverPasswordSchema.safeParse(data)

  if (!validation.success) {
    throw new CustomError('Invalid data')
  }

  const { email } = validation.data
  const normalizedEmail = email.toLowerCase()

  try {
    const existingUser = await getUserByEmail(normalizedEmail)
    if (!existingUser) {
      throw new CustomError('User not found')
    }
    const verificationToken = await generateResetPasswordToken(normalizedEmail)

    await sendRecoveryPasswordEmail(normalizedEmail, verificationToken.token)

    return {
      success: true,
      message: 'Email sent successfully',
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw new Error(error.message)
    }
    // TODO handle error ADD SENTRY
    throw new Error('Something went wrong. Please try again later.')
  }
}
