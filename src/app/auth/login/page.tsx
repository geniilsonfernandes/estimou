import { LoginForm } from '@/components/forms/LoginForm'
import { Highlight } from '@/components/Highlight/Highlight'

export const metadata = {
  title: 'login no Estimou',
}

export default function Login() {
  return (
    <div className="container flex min-h-screen justify-center gap-4 p-4 sm:p-8">
      <LoginForm />
      <Highlight />
    </div>
  )
}
