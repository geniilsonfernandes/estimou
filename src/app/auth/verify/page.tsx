import { VerificationForm } from '@/components/forms/VerificationForm'
import { Logo } from '@/components/Logo'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Card>
        <CardHeader className="flex flex-col items-center">
          <Logo />
        </CardHeader>
        <CardContent className="text-cenxter">
          <VerificationForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/auth/login" className="text-center text-sm text-muted-foreground">
            Voltar para Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
