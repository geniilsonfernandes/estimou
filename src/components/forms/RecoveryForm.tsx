'use client'

import { recoveryPassword } from '@/actions/recovery-password'
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
            Skip, I'll check later
          </Button>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Didn't receive the email?{' '}
          <span
            role="button"
            className="cursor-pointer text-brand-600 hover:underline"
            onClick={() => recoveryPasswordMutation({ email: form.getValues('email') })}
          >
            Send again
          </span>
        </p>
      </SuccessFeedback>
    )
  }

  return (
    <>
      {isSuccess && successFeedback()}

      {!isSuccess && (
        <>
          <div className="my-4">
            <h1 className="text-lg font-semibold">Forget Your Password?</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and we will send you instructions to reset your password.
            </p>
          </div>

          <Form {...form}>
            <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
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
                  Send Instructions
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
    </>
  )
}
