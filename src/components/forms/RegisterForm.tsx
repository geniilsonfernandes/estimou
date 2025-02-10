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
import { Alert, AlertDescription } from '@/components/ui/alert'
import { registerSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle } from 'lucide-react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState<string>()
  const [error, setError] = useState<string>()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    startTransition(() => {
      register(data).then((r) => {
        console.log(r)

        if (r.success) {
          setSuccess(r.success)
        }
        if (r.error) {
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
        <div className="pb-4"></div>
        {error && (
          <Alert className="my-2" variant="destructive">
            <AlertCircle className="mr-2 h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert className="my-2" variant="success">
            <AlertCircle className="mr-2 h-4 w-4" />
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        <Button type="submit" className="w-full" disabled={isPending}>
          <IconLogin2 />
          Criar Conta
        </Button>
      </form>
    </Form>
  )
}
