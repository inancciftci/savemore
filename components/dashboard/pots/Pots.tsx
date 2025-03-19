import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import PotsTotalCard from "./PotsTotalCard";
import PotsItemCard from "./PotsItemCard";

const Pots = () => {
  return (
    <div className="p-6 bg-white dark:bg-grey-100 rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="text-h2 dark:text-grey-900">Pots</h4>
        <Link
          href="#"
          className="flex gap-2 items-center text-sm text-grey-500"
        >
          See Details <ArrowRight size={14} />
        </Link>
      </div>
      <div className="flex gap-4 h-[160px]">
        <div className="w-[50%] max-md:w-[35%] flex">
          <PotsTotalCard />
        </div>
        <div className="w-[50%] max-md:w-[65%] h-[160px] flex flex-wrap content-between space-y-4">
          <PotsItemCard title="Savings" amount="$159" />
          <PotsItemCard title="Concert" amount="$110" />
          <PotsItemCard title="Gift" amount="$10" />
          <PotsItemCard title="New Laptop" amount="$40" />
        </div>
      </div>
    </div>
  );
};

export default Pots;
