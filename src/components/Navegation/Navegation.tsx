"use client";

import {
  IconBrandAlipay,
  IconBriefcase,
  IconLogout,
  IconProps,
  IconSmartHome,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navegation = () => {
  // const match = useMediaQuery("(min-width: 1200px)");
  const pathname = usePathname();

  const iconsProps = {
    size: 20,
    stroke: 1,
    strokeWidth: 1.5,
  } as IconProps;

  const menus = [
    {
      label: "Home",
      path: "/",
      icon: <IconSmartHome {...iconsProps} />,
    },
    {
      label: "clientes",
      path: "/clients",
      icon: <IconUsers {...iconsProps} />,
    },
    {
      label: "serviços",
      path: "/services",
      icon: <IconBriefcase {...iconsProps} />,
    },
  ] as const;

  return (
    <nav role="navigation" data-collapsible="true">
      <div>
        <div>
          <IconBrandAlipay size={28} stroke={1} />
        </div>
        <div aria-orientation="vertical" aria-label="Navigation">
          {menus.map((menu) => (
            <Link
              aria-current={pathname === menu.path}
              aria-label={menu.label}
              key={menu.label}
              href={menu.path}
              data-active-link={pathname === menu.path}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <button>
          <IconLogout /> Logout
        </button>
      </div>
    </nav>
  );
};
