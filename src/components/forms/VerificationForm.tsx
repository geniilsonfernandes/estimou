'use client'

import { useSearchParams } from 'next/navigation'

import { verificationEmail } from '@/app/actions/verification-email'
import { useMutation } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Suspense, useCallback, useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import { Snackbar } from '../Snackbar/Snackbar'
import { SuccessFeedback } from '../SuccessFeedback/SuccessFeedback'
import { Button } from '../ui/button'
import { AuthFormLayout } from './auth/AuthFormLayout'

export const VerificationForm = () => {
  const {
    mutate: verificationTokenMutation,
    isPending,
    error,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: verificationEmail,
  })
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const onVerify = useCallback(async () => {
    if (token) {
      verificationTokenMutation(token)
    }
  }, [token, verificationTokenMutation])

  useEffect(() => {
    onVerify()
  }, [onVerify])

  return (
    <Suspense fallback={<Loader />}>
      {isSuccess && (
        <div className="auth-layout w-full max-w-md">
          <SuccessFeedback
            title="Email verificado com sucesso"
            subtitle="Seu email foi verificado com sucesso, agora você pode entrar em sua conta."
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
          title="Verificando seu e-mail"
          subtitle="Para evitar eventuais problemas, verificamos seu e-mail para validar sua conta."
          isCallToActionHidden
          isSocialLoginHidden
          className="w-full max-w-md"
        >
          <div className="flex min-h-7 items-center justify-center gap-4 pb-8">
            {!token && (
              <Snackbar
                message="Token de verificação inválido"
                variant="error"
                aria-live="polite"
                hiddenCloseButton
              />
            )}
            {isError && (
              <Snackbar
                message={error?.message}
                variant="error"
                aria-live="polite"
                hiddenCloseButton
              />
            )}

            {isPending && <Loader color="black" size="lg" />}
          </div>

          <Link href="/auth/login" passHref>
            <Button className="w-full" variant="ghost">
              <ArrowLeft className="h-4 w-4" /> Voltar para o login
            </Button>
          </Link>
        </AuthFormLayout>
      )}
    </Suspense>
  )
}
