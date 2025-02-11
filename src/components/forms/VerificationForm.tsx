'use client'

import { useSearchParams } from 'next/navigation'

import { newVerification } from '@/actions/new-verification'
import { AlertCircle } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { Alert, AlertDescription } from '../ui/alert'
import { FormHeader } from './auth/FormHeader'

export const VerificationForm = () => {
  const [success, setSuccess] = useState<string>()
  const [error, setError] = useState<string>()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const onVerify = useCallback(async () => {
    if (success || error) {
      return
    }
  

    if (!token) {
      return setError('Token não encontrado.')
    }

    newVerification(token).then((r) => {
      if (r?.error) {
        setError(r.error)
      }
      if (r?.success) {
        setSuccess(r.success)
      }
    })
  }, [token, success, error])

  useEffect(() => {
    onVerify()
  }, [onVerify])

  return (
    <div className="text-center">
      <FormHeader
        title="Verificando seu e-mail"
        subtitle="
            Verifique seu e-mail para finalizar o processo de cadastro."
      />
      <div className="mb-4 mt-8 flex items-center justify-center gap-4">
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
        {!error && !success && <Loader color="black" size="lg" />}
      </div>
    </div>
  )
}
