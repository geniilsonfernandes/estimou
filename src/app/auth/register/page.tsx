import { RegisterForm } from '@/components/forms/RegisterForm'
import { Highlight } from '@/components/Highlight/Highlight'

export const metadata = {
  title: 'Cadastro no Estimou',
}

export default function Register() {
  return (
    <div className="container flex min-h-screen justify-center gap-4 p-4 sm:p-8">
      <RegisterForm />
      <Highlight />
    </div>
  )
}
