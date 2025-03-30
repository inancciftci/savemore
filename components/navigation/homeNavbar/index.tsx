import React from "react";
import Theme from "../Theme";
import Link from "next/link";
import LoginButton from "../LoginButton";
import Image from "next/image";

const DesktopHomeNavbar = () => {
  return (
    <div className="flex items-center justify-between container border-b-[1px] text-grey-100">
      <Link href={"/"} className="cursor-pointer relative w-[150px] h-[50px]">
        <Image className="invert-0" src={"/logo-large.svg"} fill alt="logo" />
      </Link>
      <div className="flex items-center gap-2">
        <LoginButton />
        {" | "}
        <Link
          className="bg-grey-100 text-sm px-4 py-2 text-grey-900 rounded-lg"
          href={"/dashboard"}
        >
          Dashboard
        </Link>
        {" | "}
        <Theme />
      </div>
    </div>
  );
};

export default DesktopHomeNavbar;
