'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, InputPassword } from '@/components/ui/input'
import { IconLogin2 } from '@tabler/icons-react'

import { register } from '@/actions/register'
import { registerSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    startTransition(() => {
      register(data)
    })
  }

  return (
    <Form {...form}>
      <form className="my-8 space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Entre com seu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <InputPassword placeholder="Entre com sua senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormError /> */}
        {/* Todo create this component */}
        <Button type="submit" className="w-full" disabled={isPending}>
          <IconLogin2 />
          Criar Conta
        </Button>
      </form>
    </Form>
  )
}
