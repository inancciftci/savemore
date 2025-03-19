"use client";
import React from "react";
import Theme from "../Theme";
import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SidebarDesktop = () => {
  const pathname = usePathname();

  return (
    <div className="max-md:hidden min-h-[100vh] bg-grey-900 dark:bg-grey-100 text-grey-100 dark:text-grey-900 rounded-r-xl shadow-sm">
      <Image
        className="mt-10 ml-6 dark:invert"
        src={"/logo-large.svg"}
        alt="logo"
        width={121}
        height={22}
      />
      <div className="flex flex-col gap-1 mt-10">
        {links.map((l, i) => (
          <Link
            className={cn(
              "px-6 py-4 font-bold rounded-r-xl w-[90%]",
              "text-grey-100 dark:bg-grey-100 dark:text-grey-900",
              pathname === l.href &&
                "dark:bg-grey-900 bg-grey-100 dark:text-grey-100 text-grey-900 border-l-8 border-green px-4"
            )}
            href={l.href}
            key={i}
          >
            <div className="flex items-center gap-4">
              <Image src={l.icon} width={15} height={15} alt="icon" />
              {l.name}
            </div>
          </Link>
        ))}
      </div>
      <Theme />
    </div>
  );
};

export default SidebarDesktop;
