import { Resend } from 'resend'

const resendClient = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationUrl = `http://localhost:3000/auth/verify?token=${token}`
  await resendClient.emails.send({
    from: 'onboarding@estimou.com',
    to: email,
    subject: 'Estimou - Verify your email',
    html: `<p>Click <a href="${confirmationUrl}">here</a> to verify your email</p>`,
  })
}

export const sendRecoveryPasswordEmail = async (email: string, token: string) => {
  const confirmationUrl = `http://localhost:3000/auth/recovery-password?token=${token}`
  await resendClient.emails.send({
    from: 'noreply@estimou.com',
    to: email,
    subject: 'Estimou - Recuperar senha',
    html: `<p>Click <a href="${confirmationUrl}">here</a> to recover your password</p>
    
    <p>This link will expire in 1 hour.</p>
    `,
  })
}
