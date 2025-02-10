import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { IconLockAccess } from '@tabler/icons-react'
import Link from 'next/link'

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Logo />
      <Card>
        <CardHeader className="flex flex-col items-center">
          <IconLockAccess size={64} strokeWidth={1} />
          <h1 className="text-2xl">Ops algo deu errado</h1>
        </CardHeader>
        <CardContent className="text-cenxter">
          <Link href="/login" passHref>
            <Button>Voltar para o login</Button>
          </Link>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground">
            Se o problema persistir, entre em contato com o suporte.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
