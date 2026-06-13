import NavBar from "@/app/ui/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="absolute md:fixed z-40 h-32 w-full flex-row justify-center gap-6 bg-dgblue-med">
        <div className="relative flex justify-around mx-auto gap-8 h-32 items-center">
          <Link
            href="/"
            target="_self"
            className="flex items-center min-w-75 justify-center ml-3"
          >
            <Image
              src="/dgol-logo.png"
              alt="Dan Goldman logo"
              width={137}
              height={91}
            />
          </Link>
          <div className="grow justify-center">
            <NavBar />
          </div>
        </div>
      </header>
      <div className="h-32"></div>
    </>
  );
}
