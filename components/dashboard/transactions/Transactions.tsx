"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import TransactionCard from "./TransactionCard";
import { useDashboardData } from "@/context/DashboardProvider";

const Transactions = () => {
  const context = useDashboardData();
  const transactions = context?.transactions.slice(0, 5);
  return (
    <div className="p-6 bg-white dark:bg-grey-100 rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="text-h2 dark:text-grey-900">Transactions</h4>
        <Link
          href="#"
          className="flex gap-2 items-center text-grey-500 text-sm"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {transactions.map((t) => (
          <TransactionCard key={t.id} transaction={t} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
