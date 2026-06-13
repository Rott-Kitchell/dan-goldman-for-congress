import NavLinks from "./nav-links";
import Image from "next/image";
import Link from "next/link";

export default function TopNav() {
  return (
    <>
      <div className="flex grow flex-row justify-center gap-6 bg-dgblue-med">
        <Link href="/">
          <Image
            src="/dgol-logo.png"
            alt="Dan Goldman logo"
            width={137}
            height={91}
          />
        </Link>
        <NavLinks />
      </div>
    </>
  );
}
