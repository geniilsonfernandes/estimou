import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({
    message: 'Email inválido',
  }),
  password: z.string().min(6, {
    message: 'Senha inválida',
  }),
})

export type RegisterData = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email inválido',
  }),
  password: z.string().min(6, {
    message: 'Senha inválida',
  }),
})

export type LoginData = z.infer<typeof loginSchema>

export const recoverPasswordSchema = z.object({
  email: z.string().email({
    message: 'Email inválido',
  }),
})

export type RecoverPasswordData = z.infer<typeof recoverPasswordSchema>

export const createNewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Senha inválida',
  }),
  confirmPassword: z.string().min(6, {
    message: 'Senha inválida',
  }),
})

export type CreateNewPasswordData = z.infer<typeof createNewPasswordSchema>