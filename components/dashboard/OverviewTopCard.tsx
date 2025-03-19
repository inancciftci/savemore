import { cn } from "@/lib/utils";
import React from "react";

const OverviewTopCard = ({
  title,
  amount,
}: {
  title: string;
  amount: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col gap-4 bg-white p-4 rounded-lg shadow-sm dark:bg-grey-500",
        title === "Current Balance" && "bg-green text-grey-100",
        title === "Monthly Expense" && "bg-red text-grey-100"
      )}
    >
      <span
        className={cn(
          "text-sm text-grey-500 dark:text-grey-100",
          title === "Current Balance" && " text-grey-100",
          title === "Monthly Expense" && " text-grey-100"
        )}
      >
        {title}
      </span>
      <span className="font-bold text-3xl">{amount}</span>
    </div>
  );
};

export default OverviewTopCard;
