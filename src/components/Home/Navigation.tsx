'use client'

import { cn } from '@/lib/utils'
import { IconRocket } from '@tabler/icons-react'
import { useWindowScroll } from '@uidotdev/usehooks'
import Link from 'next/link'
import { Logo } from '../Logo'
import { Button } from '../ui/button'

export const Navigation = () => {
  const [{ y }] = useWindowScroll()

  return (
    <nav className="fixed left-0 top-2 z-40 flex w-screen">
      <div
        className={cn(
          'container left-0 top-2 flex w-screen items-center justify-between rounded-2xl p-2 transition-all duration-300',
          {
            'bg-white/50 p-4 shadow-md backdrop-blur-sm ease-in-out': Number(y) > 10,
          }
        )}
      >
        <Logo />
        <div className="text-md flex gap-6">
          <a
            href="#"
            target="_blank"
            className="hover:text-primary hover:underline hover:underline-offset-4"
            rel="noopener noreferrer"
          >
            Como Funciona
          </a>
          <a
            href="#"
            target="_blank"
            className="hover:text-primary hover:underline hover:underline-offset-4"
            rel="noopener noreferrer"
          >
            Benefícios
          </a>
          <a
            href="#"
            target="_blank"
            className="hover:text-primary hover:underline hover:underline-offset-4"
            rel="noopener noreferrer"
          >
            Planos e Preços
          </a>
        </div>
        <div className="space-x-4">
          <Link href="/auth/register" passHref>
            <Button>
              <IconRocket />
              Cadastre-se
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
