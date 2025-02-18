import { RegisterForm } from '@/components/forms/RegisterForm'

export const metadata = {
  title: 'Cadastro no Estimou',
}

export default function Register() {
  return (
    <div className="container flex min-h-screen justify-center gap-4 p-4 sm:p-8">
      <RegisterForm />
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
