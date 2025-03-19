import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import TransactionCard from "./TransactionCard";

const dummyTransactions = [
  { id: "1", to: "Emma Richardson", amount: "$75", when: "19 Aug 2024" },
  { id: "2", to: "Daniel Carter", amount: "-$45", when: "19 Aug 2024" },
  { id: "3", to: "Migros", amount: "$96", when: "19 Aug 2024" },
  { id: "4", to: "Getir", amount: "-$421", when: "19 Aug 2024" },
  { id: "5", to: "Inanc Ciftci", amount: "-$90", when: "19 Aug 2024" },
  { id: "6", to: "Doğalgaz", amount: "$30", when: "19 Aug 2024" },
];

const Transactions = () => {
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
        {dummyTransactions.map((t) => (
          <TransactionCard key={t.id} transaction={t} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
