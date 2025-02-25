'use client'

import { newPassword } from '@/app/actions/new-password'
import { CreateNewPasswordData, createNewPasswordSchema } from '@/server/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { SuccessFeedback } from '../SuccessFeedback/SuccessFeedback'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { InputPassword } from '../ui/input'
import { AuthFormLayout } from './auth/AuthFormLayout'

const Main = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const {
    mutate: newPasswordMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: newPassword,
  })

  const form = useForm<CreateNewPasswordData>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(createNewPasswordSchema),
  })

  const onSubmit = (data: CreateNewPasswordData) => {
    if (token) {
      newPasswordMutation({ values: data, token })
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      {isSuccess && (
        <div className="auth-layout">
          <SuccessFeedback
            title="Senha alterada com sucesso"
            subtitle="Voce pode ir para o login, clique no botao abaixo para fazer login."
          >
            <div className="flex w-full flex-col gap-2 pt-4">
              <Link href="/auth/login" passHref>
                <Button className="w-full">Ir para o login</Button>
              </Link>
            </div>
          </SuccessFeedback>
        </div>
      )}
      {!isSuccess && (
        <AuthFormLayout
          isCallToActionHidden
          isSocialLoginHidden
          title="Criar uma nova senha"
          subtitle="Escolha uma nova senha para sua conta."
          className="max-w-md"
        >
          <Form {...form}>
            <form className="flex w-full flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <InputPassword disabled={isPending} placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar Senha</FormLabel>
                    <FormControl>
                      <InputPassword disabled={isPending} placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between gap-2">
                <Button
                  isLoading={isPending}
                  type="submit"
                  className="mt-4 w-full"
                  disabled={isPending}
                >
                  Criar nova senha
                </Button>
              </div>
            </form>
          </Form>
        </AuthFormLayout>
      )}
    </Suspense>
  )
}

export const ResetPasswordForm = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  )
}