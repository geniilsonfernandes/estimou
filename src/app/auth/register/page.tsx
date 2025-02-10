import { Wrapper } from '@/components/forms/auth/Wrapper'
import { RegisterForm } from '@/components/forms/RegisterForm'

export const metadata = {
  title: 'Cadastro no Estimou',
}

export default function Register() {
  return (
    <div className="container flex min-h-screen justify-center gap-8 bg-gray-50 p-8">
      <Wrapper
        title="Cadastre-se no Estimou"
        subtitle="Insira seu e-mail abaixo para entrar em sua conta"
        callToAction="Já possui uma conta?"
        href="/auth/login"
        linkText="Login"
      >
        <RegisterForm />
      </Wrapper>
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
