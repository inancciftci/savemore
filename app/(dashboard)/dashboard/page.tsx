import OverviewTopCard from "@/components/dashboard/OverviewTopCard";
import PotsItemCard from "@/components/dashboard/PotsItemCard";
import PotsTotalCard from "@/components/dashboard/PotsTotalCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-h1">Overview</h1>
      <div className="flex gap-3 items-center justify-center flex-wrap">
        <OverviewTopCard title="Current Balance" amount="$4,836.00" />
        <OverviewTopCard title="Income" amount="$3,814.25" />
        <OverviewTopCard title="Monthly Expense" amount="$1,700.50" />
      </div>
      <div className="grid grid-cols-[60%_40%] max-md:grid-cols-1 gap-6">
        <div className="flex flex-col gap-10">
          <div className="p-4 bg-white dark:bg-grey-500 rounded-lg space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="text-h3">Pots</h4>
              <Link href="#" className="flex gap-2 items-center text-sm">
                See Details <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex gap-4 h-[160px]">
              <div className="w-[50%] flex">
                <PotsTotalCard />
              </div>
              <div className="w-[50%] h-[160px] flex flex-wrap content-between space-y-4">
                <PotsItemCard title="Savings" amount="$159" />
                <PotsItemCard title="Concert" amount="$110" />
                <PotsItemCard title="Gift" amount="$10" />
                <PotsItemCard title="New Laptop" amount="$40" />
              </div>
            </div>
          </div>
        </div>
        <div>y</div>
      </div>
    </div>
  );
};

export default page;
