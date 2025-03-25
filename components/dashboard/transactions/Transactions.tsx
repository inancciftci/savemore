"use client";

import { ArrowRight, MoveRightIcon } from "lucide-react";
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
      {transactions.length > 0 ? (
        <div className="flex flex-col gap-4">
          {transactions.map((t) => (
            <TransactionCard key={t.id} transaction={t} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <span className="text-red font-bold">
            There is no transactions yet
          </span>
          <Link
            className="flex items-center gap-2 bg-grey-500 text-sm font-bold p-4 text-grey-100 rounded-lg"
            href="/transactions"
          >
            <MoveRightIcon className="size-5" /> Add your first transaction
          </Link>
        </div>
      )}
    </div>
  );
};

export default Transactions;
