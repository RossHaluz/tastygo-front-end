"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "Delivery",
    link: "/delivery",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "Contacts",
    link: "/contact",
  },
];

const Navigation = () => {
  const currentLink = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-[64px]">
      {menus?.map(({ name, link }) => {
        const current = currentLink === link;
        return (
          <Link
            key={name}
            href={link}
            className={clsx("text-[16px]", {
              "text-[#536524] underline": current,
            })}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
