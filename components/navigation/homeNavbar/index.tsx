import React from "react";
import Theme from "../Theme";
import Link from "next/link";
import Image from "next/image";

const DesktopHomeNavbar = () => {
  return (
    <div className="flex items-center justify-between container text-grey-100">
      <Link href={"/"} className="cursor-pointer relative w-[150px] h-[50px]">
        <Image className="invert-0" src={"/logo-large.svg"} fill alt="logo" />
      </Link>
      <div className="flex items-center gap-2">
        <Link
          className="bg-green px-4 py-2 rounded-lg font-bold text-sm 
          hover:bg-green/50 transition-all duration-200 ease-in-out"
          href={"/dashboard"}
        >
          Launch App
        </Link>
        {" | "}
        <Theme />
      </div>
    </div>
  );
};

export default DesktopHomeNavbar;
