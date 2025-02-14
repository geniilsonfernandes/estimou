'use client'

import { login } from '@/actions/login'
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
import { loginSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconLogin2 } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Snackbar } from '../Snackbar/Snackbar'

const ACCOUNT_NOT_LINKED = 'OAuthAccountNotLinked'
const AUTH_ERROS_MESSAGES = {
  [ACCOUNT_NOT_LINKED]: 'Esse email já está vinculado a outra conta!',
}

export const LoginForm = () => {
  const searchParams = useSearchParams()
  const urlError = searchParams.get('error') === ACCOUNT_NOT_LINKED

  const {
    mutate: loginMutation,
    isPending,
    data,
  } = useMutation({
    mutationFn: login,
  })

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    loginMutation(data)
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
            <FormItem className="relative">
              <Link
                href="/forgot-password"
                className="absolute right-0 top-[8px] text-xs text-muted-foreground hover:underline"
              >
                Esqueceu sua senha?
              </Link>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <InputPassword placeholder="Entre com sua senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {urlError && (
          <Snackbar
            message={AUTH_ERROS_MESSAGES[ACCOUNT_NOT_LINKED]}
            variant={'error'}
            aria-live="polite"
          />
        )}

        {data?.message && (
          <Snackbar
            message={data.message}
            variant={data.success ? 'success' : 'error'}
            aria-live="polite"
          />
        )}

        <Button isLoading={isPending} type="submit" className="mt-4 w-full" disabled={isPending}>
          <IconLogin2 />
          Login
        </Button>
      </form>
    </Form>
  )
}
