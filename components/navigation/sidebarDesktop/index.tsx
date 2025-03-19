"use client";
import React, { useState } from "react";
import Theme from "../Theme";
import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SidebarDesktop = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "relative max-md:hidden min-h-screen bg-grey-900 pr-4 dark:bg-grey-100 text-grey-100 dark:text-grey-900 shadow-sm rounded-r-xl transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-center py-6">
        <Image
          className="dark:invert transition-all duration-300"
          src={collapsed ? "/logo-small.svg" : "/logo-large.svg"}
          alt="logo"
          width={collapsed ? 20 : 121}
          height={22}
        />
      </div>
      <div className="p-4 w-full flex justify-center gap-4 items-center">
        {!collapsed && (
          <div>
            <Theme />
          </div>
        )}
        <Button
          onClick={handleCollapse}
          className="flex items-center justify-center transition-all duration-300 bg-grey-500 dark:bg-grey-900 dark:text-grey-100 hover:bg-grey-100 hover:text-grey-900 cursor-pointer dark:hover:bg-grey-500"
        >
          {collapsed ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
        </Button>
      </div>
      <div className="flex flex-col gap-1 mt-6">
        {links.map((l, i) => (
          <Link
            key={i}
            href={l.href}
            className={cn(
              "flex items-center gap-4 px-6 py-4 font-bold rounded-r-xl transition-all duration-300",
              collapsed && "px-0 pl-4 h-[40px] w-[55px]",
              "text-grey-100 dark:bg-grey-100 dark:text-grey-900",
              pathname === l.href &&
                "dark:bg-grey-900 bg-grey-100 dark:text-grey-100 text-grey-900 border-l-4 border-green"
            )}
          >
            <Image src={l.icon} width={15} height={15} alt="icon" />
            <span
              className={cn(
                "transition-opacity duration-200",
                collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              )}
            >
              {l.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarDesktop;
