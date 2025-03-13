import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="grid grid-cols-[minmax(0,480px)_1fr] min-h-[100vh]">
      <div className="p-4">
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
        </div>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
