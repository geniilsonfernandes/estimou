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


export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email inválido',
  }),
  password: z.string().min(6, {
    message: 'Senha inválida',
  }),
})