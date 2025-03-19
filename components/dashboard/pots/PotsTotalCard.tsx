import Image from "next/image";
import React from "react";

const PotsTotalCard = () => {
  return (
    <div className="bg-beige-100 dark:bg-grey-900 dark:text-grey-100 p-4 rounded-lg shadow-sm flex flex-col justify-between w-full h-full">
      <div className="flex max-md:flex-col gap-6 items-center h-full">
        <div className="relative size-[40px]">
          <Image
            className="dark:invert"
            src={"/icon-nav-pots.svg"}
            fill
            alt="pots saved"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm">Total Saved</span>
          <span className="text-h1">$850</span>
        </div>
      </div>
    </div>
  );
};

export default PotsTotalCard;
