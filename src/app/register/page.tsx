import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { IconBrandGoogle } from '@tabler/icons-react'
import Link from 'next/link'
import { RegisterForm } from './components/RegisterForm'

export const metadata = {
  title: 'Cadastro no Estimou',
}

// type AuthFormWrapperProps = {
//   children: React.ReactNode
//   showGoogleButton?: boolean
//   type: 'login' | 'register'
// }

// const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
//   children,
//   type,
// }: {
//   children: React.ReactNode
// }) => {
//   return (
//     <div className="w-full space-y-8">
//       <Logo />
//       <div className="flex flex-col space-y-2">
//         <h1 className="text-2xl font-semibold tracking-tight">Cadastre-se no Estimou</h1>
//         <p className="text-sm text-muted-foreground">
//           Insira seu e-mail abaixo para entrar em sua conta
//         </p>
//       </div>

//       <RegisterForm />
//       <p className="text-center text-sm text-muted-foreground">
//         Já possui uma conta?{' '}
//         <Link href="/login" className="text-primary underline underline-offset-4">
//           Login
//         </Link>
//       </p>
//       <div className="relative my-8">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t" />
//         </div>
//         <div className="relative flex justify-center text-xs">
//           <span className="bg-background px-2 text-sm">ou</span>
//         </div>
//       </div>
//       <Button variant="outline" className="btn-steel-500 w-full" type="button">
//         <IconBrandGoogle className="mr-2 h-4 w-4" />
//         Login com Google
//       </Button>
//     </div>
//   )
// }

export default function Register() {
  return (
    <div className="container flex min-h-screen justify-center gap-8 bg-gray-50 p-8">
      <div className="flex flex-1 flex-col justify-between rounded-lg px-8">
        <div className="w-full space-y-8">
          <Logo />
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">Cadastre-se no Estimou</h1>
            <p className="text-sm text-muted-foreground">
              Insira seu e-mail abaixo para entrar em sua conta
            </p>
          </div>

          <RegisterForm />
          <p className="text-center text-sm text-muted-foreground">
            Já possui uma conta?{' '}
            <Link href="/login" className="text-primary underline underline-offset-4">
              Login
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
          <Button variant="outline" className="btn-steel-500 w-full" type="button">
            <IconBrandGoogle className="mr-2 h-4 w-4" />
            Login com Google
          </Button>
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
