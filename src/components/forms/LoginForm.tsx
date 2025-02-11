'use client'

import { login } from '@/actions/login'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ACCOUNT_NOT_LINKED = 'OAuthAccountNotLinked'
const AUTH_ERROS_MESSAGES = {
  [ACCOUNT_NOT_LINKED]: 'Esse email já está vinculado a outra conta!',
}

export const LoginForm = () => {
  const [error, setError] = useState<string>()
  const searchParams = useSearchParams()
  const urlError = searchParams.get('error') === ACCOUNT_NOT_LINKED
  const [isPending, startTransition] = useTransition()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    startTransition(() => {
      login(data).then((r) => {
        if (r?.error) {
          setError(r.error)
        }
      })
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
                <Input placeholder="Enter your email" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <InputPassword {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <Checkbox />
            <label htmlFor="remember" className="text-sm text-muted-foreground">
              Manter conectado
            </label>
          </div>
          <Link href="/forgot-password" className="text-sm hover:text-primary">
            Esqueceu sua senha?
          </Link>
        </div>
        {urlError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{AUTH_ERROS_MESSAGES[ACCOUNT_NOT_LINKED]}</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="my-2" variant="destructive">
            <AlertCircle className="mr-2 h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Button isLoading={isPending} type="submit" className="w-full" disabled={isPending}>
          <IconLogin2 />
          Login
        </Button>
      </form>
    </Form>
  )
}
