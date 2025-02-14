'use client'

import { recoveryPassword } from '@/actions/recovery-password'
import { RecoverPasswordData, recoverPasswordSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { MailCheck, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

type SuccessFeedbackProps = {
  email: string
}

const emailProviders: Record<string, string> = {
  'gmail.com': 'https://mail.google.com/',
  'outlook.com': 'https://outlook.live.com/owa/',
  'yahoo.com': 'https://login.yahoo.com/',
  'hotmail.com': 'https://outlook.live.com/owa/',
  'hotmail.com.br': 'https://outlook.live.com/owa/',
}

export const SuccessFeedback: React.FC<SuccessFeedbackProps> = ({ email }) => {
  const domain = email.split('@')[1]
  const emailUrl = emailProviders[domain]

  const openEmailApp = () => {
    if (emailUrl) window.location.href = emailUrl
  }

  return (
    <div className="fade flex flex-col items-center gap-4 pt-6">
      <div className="inline-flex rounded-full bg-brand-100 p-4 text-brand-600">
        <MailCheck strokeWidth={1} size={32} />
      </div>
      <h1 className="text-center text-lg font-semibold">Check your email</h1>
      <p className="text-center text-sm text-muted-foreground">
        If you have an account, you will receive an email with instructions on how to reset your
        password.
      </p>

      {emailUrl && (
        <div className="flex w-full flex-col gap-2 pt-4">
          <Button className="w-full" onClick={openEmailApp}>
            Open Email {domain} App
          </Button>
          <Button className="w-full" variant="ghost">
            Skip, I'll check later
          </Button>
        </div>
      )}

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Didn't receive the email? <span className="text-brand-600 hover:underline">Send again</span>
      </p>
    </div>
  )
}

export const RecoveryForm = () => {
  const {
    mutate: recoveryPasswordMutation,
    isPending,
    isSuccess,
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

  if (isSuccess) {
    return (
      <>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <SuccessFeedback email={form.getValues('email')} />
          </motion.div>
        )}
      </>
    )
  }

  return (
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
  )
}
