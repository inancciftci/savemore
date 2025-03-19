import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import RecurringBillsItemCard from "./RecurringBillsItemCard";

const bills = [
  { id: "1", title: "Paid Bills", amount: "$190.00" },
  { id: "2", title: "Total Upcoming", amount: "$194.98" },
  { id: "3", title: "Due Soon", amount: "$59.98" },
];

const RecurringBills = () => {
  return (
    <div className="p-6 bg-white dark:bg-grey-100 rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="text-h2 dark:text-grey-900">Recurring Bills</h4>
        <Link
          href="#"
          className="flex gap-2 items-center text-grey-500 text-sm"
        >
          See Details <ArrowRight size={14} />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {bills.map((bill) => (
          <RecurringBillsItemCard key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default RecurringBills;
