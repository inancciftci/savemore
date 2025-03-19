import Budgets from "@/components/dashboard/budgets/Budgets";
import OverviewTopCard from "@/components/dashboard/OverviewTopCard";
import Pots from "@/components/dashboard/pots/Pots";
import RecurringBills from "@/components/dashboard/recurringBills/RecurringBills";
import Transactions from "@/components/dashboard/transactions/Transactions";

import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-h1">Overview</h1>
      <div className="flex gap-3 items-stretch justify-center flex-wrap">
        <OverviewTopCard title="Current Balance" amount="$4,836.00" />
        <OverviewTopCard title="Income" amount="$3,814.25" />
        <OverviewTopCard title="Monthly Expense" amount="$1,700.50" />
      </div>
      <div className="grid grid-cols-[55%_1fr] max-md:grid-cols-1 gap-10">
        <div className="flex flex-col gap-10">
          <Pots />
          <Transactions />
        </div>
        <div className="flex flex-col gap-10">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
};

export default page;
