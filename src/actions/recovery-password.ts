'use server'

import { getUserByEmail } from '@/data/user'
import { sendRecoveryPasswordEmail } from '@/lib/mail'
import { generateRecoveryToken } from '@/lib/tokens'
import { RecoverPasswordData, recoverPasswordSchema } from '@/schemas'
import { ActionResponse } from './types'

export const recoveryPassword = async (data: RecoverPasswordData): Promise<ActionResponse> => {
  const validation = recoverPasswordSchema.safeParse(data)

  if (!validation.success) {
    return {
      success: false,
      message: 'Invalid data',
    }
  }

  const { email } = validation.data
  const normalizedEmail = email.toLowerCase()

  try {
    const existingUser = await getUserByEmail(normalizedEmail)
    if (!existingUser) {
      return {
        success: false,
        message: 'User not found',
      }
    }
    const verificationToken = await generateRecoveryToken(normalizedEmail)

    await sendRecoveryPasswordEmail(normalizedEmail, verificationToken.token)

    return {
      success: true,
      message: 'Email sent successfully',
    }
  } catch {
    // TODO handle error ADD SENTRY

    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    }
  }
}
