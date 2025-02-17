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

import { registerUser } from '@/server/actions/register-user'
import { registerSchema } from '@/server/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Snackbar } from '../Snackbar/Snackbar'

export const RegisterForm = () => {
  const {
    mutate: registerMutation,
    isPending,
    isSuccess,
    error,
    isError,
  } = useMutation({
    mutationFn: registerUser,
  })

  const form = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    registerMutation(data, {
      onSuccess: () => {
        form.reset()
      },
    })
  }

  return (
    <Form {...form}>
      <form className="my-8 flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="gzLbI@example.com" {...field} />
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

        {isError && <Snackbar message={error?.message} variant="error" aria-live="polite" />}
        {isSuccess && (
          <Snackbar
            message="Conta criada com sucesso!, Verifique seu email"
            variant="success"
            aria-live="polite"
          />
        )}
        <Button type="submit" isLoading={isPending} className="mt-4 w-full" disabled={isPending}>
          <IconLogin2 />
          Criar Conta
        </Button>
      </form>
    </Form>
  )
}
