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
    <nav className="container sticky top-3 z-[99999] flex px-4">
      <div
        className={cn(
          'flex w-full items-center justify-between rounded-2xl bg-transparent p-4 duration-500 ease-out',
          {
            'bg-white/50 backdrop-blur-sm': Number(y) > 10,
          }
        )}
      >
        <div className="flex-grow basis-0">
          <Logo />
        </div>
        <div className="text-md hidden gap-6 md:flex">
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
        <div className="flex flex-grow basis-0 justify-end space-x-4">
          <Link href="/auth/login" passHref>
            <Button variant="secondary">Log in</Button>
          </Link>
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
