'use client'

import { newPassword } from '@/actions/new-password'
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
    <div className="relative inline-flex flex-col rounded-md border border-gray-100 bg-white p-6 md:w-1/3">
      <Link href="/" passHref>
        <Logo />
      </Link>
      {isSuccess && (
        <SuccessFeedback
          title="Password reset successfully!"
          subtitle="Your password has been successfully changed, click below to continue."
        >
          <div className="flex w-full flex-col gap-2 pt-4">
            <Link href="/auth/login" passHref>
              <Button className="w-full">Continue</Button>
            </Link>
          </div>
        </SuccessFeedback>
      )}
      {!isSuccess && (
        <>
          <div className="my-8">
            <h1 className="text-lg font-semibold">Criar uma nova senha</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Escolha uma nova senha para sua conta.
            </p>
          </div>
          <Form {...form}>
            <form className="flex w-full flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
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
                    <FormLabel>Confirm Password</FormLabel>
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
