import React from "react";
import Theme from "../Theme";
import { PiggyBank } from "lucide-react";
import Link from "next/link";
import LoginButton from "../LoginButton";

const DesktopHomeNavbar = () => {
  return (
    <div className="flex items-center justify-between container border-b-[1px]">
      <Link href={"/"} className="cursor-pointer flex items-center gap-1">
        <span className="font-bold rounded-md uppercase border-1 px-1.5 bg-grey-900 dark:bg-grey-100 text-grey-100 dark:text-red">
          save
        </span>
        <div className="border-3 border-grey-900 dark:border-grey-100 flex items-center p-2 justify-center dark:bg-red rounded-full">
          <PiggyBank size={25} />
        </div>

        <span className="font-bold rounded-md uppercase border-1 px-1.5 bg-grey-900 dark:bg-grey-100 text-grey-100 dark:text-red">
          more
        </span>
      </Link>
      <div className="flex items-center gap-2">
        <LoginButton />
        <Theme />
      </div>
    </div>
  );
};

export default DesktopHomeNavbar;
