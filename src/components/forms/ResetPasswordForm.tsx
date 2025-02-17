'use client'

import { newPassword } from '@/server/actions/new-password'
import { CreateNewPasswordData, createNewPasswordSchema } from '@/server/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Logo } from '../Logo'
import { SuccessFeedback } from '../SuccessFeedback/SuccessFeedback'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { InputPassword } from '../ui/input'
import { FormHeader } from './auth/FormHeader'

export const ResetPasswordForm = () => {
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
    <div className="relative inline-flex w-full max-w-md flex-col rounded-md border border-gray-100 bg-white p-6">
      {isSuccess && (
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
      )}
      {!isSuccess && (
        <>
          <Link href="/" passHref>
            <Logo />
          </Link>
          <div className="my-8">
            <FormHeader
              title="Criar uma nova senha"
              subtitle="Escolha uma nova senha para sua conta."
            />
          </div>
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
        </>
      )}
    </div>
  )
}
