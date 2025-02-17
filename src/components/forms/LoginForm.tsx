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
import { useDisclosure } from '@/hooks/useDisclosure'
import { authenticateUser } from '@/server/actions/authenticate-user'
import { loginSchema } from '@/server/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconLogin2 } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Snackbar } from '../Snackbar/Snackbar'
import Modal from '../ui/modal'
import { RecoveryForm } from './RecoveryForm'

export const LoginForm = () => {
  const [opened, { open, close }] = useDisclosure()

  const {
    mutate: loginMutation,
    isPending,
    data,
  } = useMutation({
    mutationFn: authenticateUser,
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
    <>
      <Modal isOpen={opened} onClose={close} title="Recuperar Senha" size="sm">
        <RecoveryForm onClose={close} />
      </Modal>

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
                <button
                  type="button"
                  onClick={() => open()}
                  className="absolute right-0 top-[8px] text-xs text-muted-foreground hover:underline"
                >
                  Esqueceu sua senha?
                </button>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <InputPassword placeholder="Entre com sua senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {data?.message && (
            <Snackbar
              message={data.message}
              variant={data.success ? 'success' : 'error'}
              aria-live="polite"
            />
          )}

          <Button isLoading={isPending} type="submit" className="mt-4 w-full" disabled={isPending}>
            <IconLogin2 />
            Entrar
          </Button>
        </form>
      </Form>
    </>
  )
}
