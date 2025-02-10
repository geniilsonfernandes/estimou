import { VerifyForm } from '@/components/forms/VerifyForm'
import { Logo } from '@/components/Logo'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'




export default function VerifyPage() {


  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Card>
        <CardHeader className="flex flex-col items-center">
          <Logo />
        </CardHeader>
        <CardContent className="text-cenxter">
          <VerifyForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}
