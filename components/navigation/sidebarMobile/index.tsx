"use client";
import { links } from "@/constants/links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarMobile = () => {
  const pathname = usePathname();
  return (
    <div className="hidden max-md:flex fixed bottom-[0px] w-full pt-2 px-1 gap-2 items-center justify-center bg-grey-900 dark:bg-grey-500 text-grey-100 rounded-t-lg">
      {links.map((l) => (
        <Link
          className={cn(
            "text-sm flex flex-col border-b-4 border-grey-500 gap-2 p-1 flex-1 items-center py-3 rounded-t-lg transition-all ease-in-out duration-200",
            pathname === l.href &&
              "bg-grey-100 text-grey-900 border-b-4 border-green"
          )}
          href={l.href}
          key={l.id}
        >
          <div className="w-[15px] h-[15px] relative">
            <Image src={l.icon} fill alt={l.name} />
          </div>

          <span className="text-[12px] font-bold">
            {l.name === "Recurring Bills" ? "Bills" : `${l.name}`}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarMobile;
