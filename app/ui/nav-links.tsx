"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Endorsements", href: "/endorsements" },
  { name: "Sources", href: "/sources" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex grow items-center justify-center text-lg font-bold p-6 mx-3 text-dgblue-dark hover:text-white",
              {
                "text-white": pathname === link.href,
              },
            )}
          >
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
