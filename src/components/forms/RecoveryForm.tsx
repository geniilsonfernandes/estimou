'use client'

import { recoveryPassword } from '@/server/actions/recovery-password'
import { RecoverPasswordData, recoverPasswordSchema } from '@/server/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { MailCheck, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Snackbar } from '../Snackbar/Snackbar'
import { SuccessFeedback } from '../SuccessFeedback/SuccessFeedback'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { AuthFormLayout } from './auth/AuthFormLayout'

const emailProviders: Record<string, string> = {
  'gmail.com': 'https://mail.google.com/',
  'outlook.com': 'https://outlook.live.com/owa/',
  'yahoo.com': 'https://login.yahoo.com/',
  'hotmail.com': 'https://outlook.live.com/owa/',
  'hotmail.com.br': 'https://outlook.live.com/owa/',
}

type RecoveryFormProps = {
  onClose: () => void
}

export const RecoveryForm: React.FC<RecoveryFormProps> = ({ onClose }) => {
  const {
    mutate: recoveryPasswordMutation,
    isPending,
    isSuccess,
    error,
    isError,
  } = useMutation({
    mutationFn: recoveryPassword,
  })

  const form = useForm<RecoverPasswordData>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(recoverPasswordSchema),
  })

  const onSubmit = (data: RecoverPasswordData) => {
    recoveryPasswordMutation(data)
  }

  const successFeedback = () => {
    const email = form.getValues('email')
    const domain = email.split('@')[1]
    const emailUrl = emailProviders[domain]

    const openEmailApp = () => {
      if (emailUrl) window.location.href = emailUrl
    }

    return (
      <div className="auth-layout w-full max-w-md">
        <SuccessFeedback
          color="brand"
          title="Check your email"
          icon={<MailCheck strokeWidth={1} size={32} />}
          subtitle="We sent a password recovery instructions to your email."
        >
          <div className="flex w-full flex-col gap-2 pt-4">
            {domain && (
              <Button className="w-full" onClick={openEmailApp}>
                {emailUrl ? `Open ${domain} App` : 'Open your Email'}
              </Button>
            )}

            <Button className="w-full" variant="ghost" onClick={onClose}>
              Ok, Eu vou verificar mais tarde
            </Button>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Ainda não recebeu o email?
            <span
              role="button"
              className="cursor-pointer text-brand-600 hover:underline"
              onClick={() => recoveryPasswordMutation({ email: form.getValues('email') })}
            >
              Enviar novamente
            </span>
          </p>
        </SuccessFeedback>
      </div>
    )
  }

  return (
    <>
      {isSuccess && successFeedback()}

      {!isSuccess && (
        <AuthFormLayout
          title="Esqueci minha senha"
          subtitle="Por favor, informe seu email e nós lhe enviaremos instruções para redefinir sua senha."
          isCallToActionHidden
          isSocialLoginHidden
          className="w-full max-w-md"
        >
          <Form {...form}>
            <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} placeholder="gzLbI@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isError && error instanceof Error && (
                <Snackbar message={error.message} variant="error" />
              )}

              <div className="flex justify-between gap-2 pt-4">
                <Button
                  isLoading={isPending}
                  type="submit"
                  className="mt-4 w-full"
                  disabled={isPending}
                >
                  <Send />
                  Enviar Instruções
                </Button>
              </div>
            </form>
          </Form>
        </AuthFormLayout>
      )}
    </>
  )
}
