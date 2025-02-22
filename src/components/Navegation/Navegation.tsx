'use client'
import { signOut } from 'next-auth/react'

import { cn } from '@/lib/cn'
import { IconBriefcase, IconProps, IconSmartHome, IconUsers } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

import { MenuLink } from '@/components//MenuLink'
import { ChevronLeft, ChevronsUpDown } from 'lucide-react'
import { Logo } from '../Logo'

export const Navegation = () => {
  const pathname = usePathname()

  const iconsProps = {
    size: 22,
    stroke: 1,
    strokeWidth: 1,
  } as IconProps

  const menus = [
    {
      label: 'Home',
      path: '/home',
      icon: <IconSmartHome {...iconsProps} />,
    },
    {
      label: 'clientes',
      path: '/clients',
      icon: <IconUsers {...iconsProps} />,
    },
    {
      label: 'Orcametos',
      path: '/orcametos',
      icon: <IconUsers {...iconsProps} />,
    },

    {
      label: 'serviços',
      path: '/services',
      icon: <IconBriefcase {...iconsProps} />,
    },
  ] as const

  return (
    <nav
      role="navigation"
      data-collapsible="true"
      className={cn(
        'animate-leftRight sticky top-0 hidden h-full w-12 flex-col justify-between border-r border-gray-200 py-12 text-black transition-all sm:flex lg:w-64 lg:p-2'
      )}
    >
      <button className="absolute -right-[12px] top-14 hidden h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm lg:flex">
        <ChevronLeft size={16} />
      </button>
      <div className="flex-1">
        <div className="">
          <Logo className="my-12 px-5" />
        </div>

        <div className="flex flex-col gap-2" aria-orientation="vertical" aria-label="Navigation">
          {menus.map((menu) => (
            <MenuLink
              aria-current={pathname === menu.path}
              aria-label={menu.label}
              key={menu.label}
              data-active-link={pathname === menu.path}
              href={menu.path}
              label={menu.label}
              leftSection={menu.icon}
              active={pathname === menu.path}
              variant="transparent"
            />
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={() => signOut()}
          className="flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 p-2 text-sm text-gray-500"
        >
          User <ChevronsUpDown size={16} />
        </button>
      </div>
    </nav>
  )
}
