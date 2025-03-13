import { PiggyBank } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="grid grid-cols-[minmax(0,480px)_1fr] max-md:grid-cols-1 min-h-[100vh]">
      <div className="p-4 max-md:hidden">
        <div className="rounded-lg shadow-md overflow-hidden h-[100%] border-2 border-grey-900 dark:border-grey-100 relative">
          <Image
            src={"/illustration-authentication.svg"}
            fill
            alt="login layout image"
            className="object-cover"
          />
          <div className="flex flex-col text-grey-100 gap-4 px-6 absolute bottom-[8%]">
            <h2 className="text-h1">
              Keep track of your money and save for your future
            </h2>
            <p className="text-sm">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
          <Link
            href={"/"}
            className="cursor-pointer flex items-center gap-1 absolute top-[1rem] left-[1rem]"
          >
            <span className="font-bold rounded-md uppercase border-3 px-1.5 bg-red dark:bg-grey-100 text-grey-100 dark:text-red">
              save
            </span>
            <div className="border-3 border-grey-100  flex items-center p-2 justify-center text-grey-100 bg-red rounded-full">
              <PiggyBank size={25} />
            </div>

            <span className="font-bold rounded-md uppercase border-3 px-1.5 bg-red dark:bg-grey-100 text-grey-100 dark:text-red">
              more
            </span>
          </Link>
        </div>
      </div>
      <div className="hidden absolute max-md:block top-0 p-4 bg-grey-900 dark:bg-grey-100 w-[100%] left-[50%] translate-x-[-50%]">
        <h1 className="text-h1 text-center text-grey-100 dark:text-grey-900">
          SAVEMORE
        </h1>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
