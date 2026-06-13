"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navbarItems = [
  { label: "Endorsements", ref: "/endorsements" },
  { label: "Sources", ref: "/sources" },
];

export default function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathname = usePathname();

  const toggleOpen = useCallback(
    () => setIsMenuShown(!isMenuShown),
    [isMenuShown],
  );
  return (
    <>
      <button
        className="block md:hidden float-right relative z-50"
        onClick={toggleOpen}
      >
        <div className="space-y-2 absolute top-0 right-10">
          {(isMenuShown
            ? [
                "rotate-45 translate-y-[13px]",
                "opacity-0 h-0",
                "-rotate-45 translate-y-[-13px]",
              ]
            : ["", "", ""]
          ).map((className, index) => (
            <span
              key={index}
              className={
                "block h-1 w-8 bg-dgblue-dark transform transition duration-500 ease-in-out " +
                className
              }
            ></span>
          ))}
        </div>
      </button>
      <nav
        className={`${
          isMenuShown
            ? "max-md:w-full max-md:opacity-100"
            : "max-md:w-0 max-md:opacity-0"
        } transition-all duration-500 ease-in-out md:block overflow-hidden max-md:absolute max-md:animate-sideways-once max-md:h-screen max-md:bg-white max-md:pt-24 z-40 top-0 right-0`}
      >
        <ul className="flex flex-col items-center md:flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-8 justify-around text-lg font-bold leading-5.5">
          {navbarItems.map(({ ref, label }) => (
            <li
              key={ref}
              className={clsx("hover:text-white", {
                "text-white": pathname === ref,
              })}
            >
              <Link
                href={ref}
                onClick={() => {
                  setIsMenuShown(false);
                }}
              >
                {label}
              </Link>
              <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%-theme(space.24))]" />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
