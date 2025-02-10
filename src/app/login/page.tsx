import { Logo } from '@/components/Logo'
import { SocialLoginButton } from '@/components/SocialLoginButton/SocialLoginButton'
import Link from 'next/link'
import { LoginForm } from './components/LoginForm'

export const metadata = {
  title: 'login no Estimou',
}

export default function Login() {
  return (
    <div className="container flex min-h-screen justify-center gap-8 bg-gray-50 p-8">
      <div className="flex flex-1 flex-col justify-between rounded-lg px-8">
        <div className="w-full space-y-8">
          <Logo />
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">Bem-vindo de volta</h1>
            <p className="text-sm text-muted-foreground">
              Insira seu e-mail abaixo para entrar em sua conta
            </p>
          </div>

          <LoginForm />
          <p className="text-center text-sm text-muted-foreground">
            Ainda não possui uma conta?{' '}
            <Link href="/register" className="text-primary underline underline-offset-4">
              Registre-se
            </Link>
          </p>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-sm">ou</span>
            </div>
          </div>
          <SocialLoginButton />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">2025 - Todos os direitos reservados</p>
          <p className="text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>{' '}
            /{' '}
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="brand-gradient hidden flex-1 rounded-lg p-8 lg:block">
        <div className="relative z-20 mt-auto text-brand-50">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and helped me deliver
              stunning designs to my clients faster than ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
