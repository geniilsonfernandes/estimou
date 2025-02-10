import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { IconLogin2, IconRocket, IconVideo } from '@tabler/icons-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-8 bg-gray-100 py-4">
      <nav className="container sticky top-6 flex justify-between rounded-2xl">
        <Logo />
        <div className="space-x-4">
          <Link href="/auth/login" passHref>
            <Button>
              <IconLogin2 />
              Login
            </Button>
          </Link>
          <Link href="/auth/register" passHref>
            <Button variant="secondary">
              <IconRocket />
              Cadastre-se
            </Button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="steel-500 rounded-lg border px-8 shadow-sm">
          <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
            <div>
              <Button variant="secondary" size="sm" className="gap-4">
                Read our launch article
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-center font-exo text-3xl font-bold tracking-tight">
                Diga adeus aos orçamentos via WhatsApp e PDFs!
              </h1>
              <p className="text-md max-w-2xl text-center leading-relaxed tracking-tight text-muted-foreground md:text-xl">
                Make it easier for journalists and influencers to learn about your product with a
                beautiful press kit website.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button size="lg" variant="outline">
                <IconVideo size={24} />
                Demo
              </Button>
              <Button size="lg">
                <IconRocket />
                Cadastre-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
