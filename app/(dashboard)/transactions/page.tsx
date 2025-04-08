"use client";

import AddTransactionForm from "@/components/transactions/AddTransactionForm";
import TransactionTable from "@/components/transactions/TransactionTable";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDashboardData } from "@/context/DashboardProvider";
import React from "react";

const TransactionsPage = () => {
  const context = useDashboardData();
  const budgets = context.budgets || [];
  const transactions = context?.transactions || [];
  const usedCategories = budgets.map((budget) => budget.category.title);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-h1">Transactions</h1>
        <AddTransactionForm categories={usedCategories} />
      </div>
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between max-sm:hidden">
          <Input className="w-[250px]" placeholder="Search transaction" />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 ">
              <span className="text-grey-500 text-sm">Sort by</span>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="a-to-z">A to Z</SelectItem>
                  <SelectItem value="z-to-a">Z to A</SelectItem>
                  <SelectItem value="highest">Highest</SelectItem>
                  <SelectItem value="lowest">Lowest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-grey-500 text-sm">Category</span>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {usedCategories.map((cat, i) => (
                    <SelectItem key={i} value={cat.toLowerCase()}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <TransactionTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
