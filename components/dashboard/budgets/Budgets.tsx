import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
// import { BudgetsGraph } from "./BudgetsGraph";
import BudgetsItemCard from "./BudgetsItemCard";

const budgetData = [
  { id: "1", title: "Entertainment", amount: "$50.00", color: "#277C78" },
  { id: "2", title: "Bills", amount: "$750.00", color: "#82C9D7" },
  { id: "3", title: "Dining Out", amount: "$75.00", color: "#F2CDAC" },
  { id: "4", title: "Personal Care", amount: "$100.00", color: "#626070" },
];

const Budgets = () => {
  return (
    <div className="p-6 bg-white dark:bg-grey-100 rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="text-h2 dark:text-grey-900">Budgets</h4>
        <Link
          href="#"
          className="flex gap-2 items-center text-sm text-grey-500"
        >
          See Details <ArrowRight size={14} />
        </Link>
      </div>
      <div className="flex items-center">
        {/* <BudgetsGraph /> */}
        <div className="flex flex-wrap gap-10">
          {budgetData.map((budget) => (
            <BudgetsItemCard budget={budget} key={budget.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budgets;
