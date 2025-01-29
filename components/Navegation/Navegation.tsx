'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconBrandAlipay,
  IconBriefcase,
  IconLogout,
  IconProps,
  IconSmartHome,
  IconUsers,
} from '@tabler/icons-react';
import { Box, NavLink, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Navegation.module.css';

export const Navegation = () => {
  const match = useMediaQuery('(min-width: 1200px)');
  const pathname = usePathname();

  const iconsProps = {
    size: 20,
    stroke: 1,
    strokeWidth: 1.5,
  } as IconProps;
  const menus = [
    {
      label: 'Home',
      path: '/',
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
  ] as const;

  return (
    <Stack
      className={classes.nav}
      component="nav"
      w={match ? 200 : 40}
      role="navigation"
      data-collapsible="true"
    >
      <Box flex={1}>
        <Box px={match ? 'xl' : '6'} py="xl">
          <IconBrandAlipay size={28} stroke={1} />
        </Box>
        <Stack gap="xs" aria-orientation="vertical" aria-label="Navigation">
          {menus.map((menu) => (
            <NavLink
              component={Link}
              styles={{
                label: {
                  display: match ? 'block' : 'none',
                },
              }}
              pl={match ? 'xl' : ''}
              className={classes.navlink}
              aria-current={pathname === menu.path}
              aria-label={menu.label}
              variant="subtle"
              leftSection={menu.icon}
              active={pathname === menu.path}
              key={menu.label}
              href={menu.path}
              label={menu.label}
              data-active-link={pathname === menu.path}
              tt="capitalize"
            />
          ))}
        </Stack>
      </Box>

      <Stack gap="xs">
        <NavLink
          component="button"
          className={classes.navlink}
          styles={{
            label: {
              display: match ? 'block' : 'none',
            },
          }}
          pl={match ? 'xl' : ''}
          leftSection={<IconLogout {...iconsProps} />}
          label="Logout"
        />
      </Stack>
    </Stack>
  );
};
