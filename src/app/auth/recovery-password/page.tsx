import { ResetPasswordForm } from "@/components/forms/ResetPasswordForm"

export const metadata = {
  title: 'Cadastro no Estimou',
}

export default function Recovery() {
  return (
    <div className="container flex min-h-screen items-center justify-center gap-8 p-8">
      <ResetPasswordForm />
    </div>
  )
}
