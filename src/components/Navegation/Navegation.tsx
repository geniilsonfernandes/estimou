'use client'
import { signOut } from 'next-auth/react'

import { cn } from '@/lib/cn'
import { IconBriefcase, IconLogout, IconProps, IconSmartHome, IconUsers } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

import { MenuLink } from '@/components//MenuLink'
import { Logo } from '../Logo'
import { Button } from '../ui/button'

export const Navegation = () => {
  const pathname = usePathname()

  const iconsProps = {
    size: 22,
    stroke: 1,
    strokeWidth: 1.5,
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
        'sticky top-0 hidden h-screen w-12 flex-col justify-between bg-gray-100 py-12 text-black transition-all sm:flex lg:w-56 lg:pl-8'
      )}
    >
      <div className="flex-1">
        <Logo className="px-3" />

        <div className="space-y-2 pt-8" aria-orientation="vertical" aria-label="Navigation">
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
        <Button variant="ghost" onClick={() => signOut()}>
          <IconLogout {...iconsProps} />
          Logout
        </Button>
      </div>
    </nav>
  )
}
