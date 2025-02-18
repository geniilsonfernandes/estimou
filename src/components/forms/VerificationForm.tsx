'use client'

import { useSearchParams } from 'next/navigation'

import { verificationEmail } from '@/server/actions/verification-email'
import { useMutation } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useCallback, useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import { Logo } from '../Logo'
import { Snackbar } from '../Snackbar/Snackbar'
import { SuccessFeedback } from '../SuccessFeedback/SuccessFeedback'
import { Button } from '../ui/button'
import { FormHeader } from './auth/FormHeader'

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
    <div className="s relative inline-flex w-full max-w-md flex-col gap-8">
      {isSuccess && (
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
      )}
      {!isSuccess && (
        <>
          <Logo />
          <FormHeader
            title="Verificando seu e-mail"
            subtitle="
        Verifique seu e-mail para finalizar o processo de cadastro."
          />
          <div className="mb-4 mt-8 flex items-center justify-center gap-4">
            {isError && <Snackbar message={error?.message} variant="error" aria-live="polite" />}

            {isPending && <Loader color="black" size="lg" />}
          </div>

          <Link href="/auth/login" passHref>
            <Button className="w-full" variant="ghost">
              <ArrowLeft className="h-4 w-4" /> Voltar para o login
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
