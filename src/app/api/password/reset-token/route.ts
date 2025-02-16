import { getUserByEmail } from '@/data/user'
import { sendRecoveryPasswordEmail } from '@/lib/mail'
import { generateResetPasswordToken } from '@/lib/tokens'
import { RecoverPasswordData, recoverPasswordSchema } from '@/server/schemas'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body: RecoverPasswordData = await req.json()
    const validation = recoverPasswordSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ success: false, message: 'Invalid data' }, { status: 400 })
    }

    const { email } = validation.data
    const normalizedEmail = email.toLowerCase()

    const existingUser = await getUserByEmail(normalizedEmail)
    if (!existingUser) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 })
    }

    const verificationToken = await generateResetPasswordToken(normalizedEmail)
    await sendRecoveryPasswordEmail(normalizedEmail, verificationToken.token)

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Reset Password Error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
