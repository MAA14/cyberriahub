import TextBody from "@/components/atoms/typography/TextBody";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
};
const NavLink = ({ href, label, isActive }: NavLinkProps) => {
  return (
    <div className="group navLink w-11 flex flex-col items-center justify-center">
      <Link href={href}>
        <TextBody
          className={`${isActive ? "text-blue-light" : "text-white hover:text-blue-light"}`}
        >
          {label}
        </TextBody>
      </Link>
      <div
        className={`relative navLine overflow-hidden origin-left transition-all h-2 duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-11"}`}
      >
        <Image
          src={"/images/NavLine.png"}
          width={44}
          height={2}
          alt="Navigation Line"
          className="min-w-11 h-auto absolute top-0"
        />
      </div>
    </div>
  );
};

export default NavLink;
