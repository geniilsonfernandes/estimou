'use client'
import { signOut } from 'next-auth/react'

import { MenuLink } from '@/components//MenuLink'
import { useDisclosure } from '@/hooks/useDisclosure'
import { cn } from '@/lib/cn'
import { IconBriefcase, IconProps, IconSmartHome, IconUsers } from '@tabler/icons-react'
import { ChevronLeft, ChevronsUpDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Logo } from '../Logo'

export const Navegation = () => {
  const [collapsed, { open, close }] = useDisclosure(true)
  const pathname = usePathname()

  const iconsProps = {
    size: 22,
    stroke: 1,
    strokeWidth: 1,
  } as IconProps

  const menus: {
    label: string
    path: string
    icon: React.ReactNode
    actionClick?: () => void
  }[] = [
    {
      label: 'Home',
      path: '/home',
      icon: <IconSmartHome {...iconsProps} />,
    },
    {
      label: 'clientes',
      path: '/clients',
      icon: <IconUsers {...iconsProps} />,
      actionClick: () => console.log('click'),
    },
    {
      label: 'Orçamento',
      path: '/oçrametos',
      icon: <IconUsers {...iconsProps} />,
      actionClick: () => console.log('click'),
    },

    {
      label: 'serviços',
      path: '/services',
      icon: <IconBriefcase {...iconsProps} />,
      actionClick: () => console.log('click'),
    },
  ]

  return (
    <nav
      role="navigation"
      data-collapsible="true"
      className={cn(
        'sticky top-0 hidden h-screen w-12 animate-leftRight flex-col justify-between border-r border-gray-200 py-12 text-black transition-all duration-500 ease-in-out lg:flex lg:w-64 lg:p-2',
        {
          'lg:w-64': collapsed,
          'lg:w-16': !collapsed,
        }
      )}
    >
      <button
        className={cn(
          'absolute -right-[12px] top-14 hidden h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-all duration-300 lg:flex',
          {
            'rotate-180': !collapsed,
          }
        )}
        onClick={collapsed ? close : open}
      >
        <ChevronLeft size={16} />
      </button>
      <div className="flex-1">
        <div className={cn('mx-2 my-12 flex justify-start')}>
          <Logo hiddenText={!collapsed} />
        </div>

        <div className="flex flex-col gap-1" aria-orientation="vertical" aria-label="Navigation">
          {menus.map((menu) => (
            <MenuLink
              aria-current={pathname === menu.path}
              aria-label={menu.label}
              key={menu.label}
              data-active-link={pathname === menu.path}
              href={menu.path}
              label={menu.label}
              leftSection={menu.icon}
              hiddenLabel={!collapsed}
              active={pathname === menu.path}
              actionClick={collapsed ? menu.actionClick : undefined}
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
