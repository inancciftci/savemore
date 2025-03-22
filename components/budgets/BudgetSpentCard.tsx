import { themes } from "@/constants/theme";
import { cn } from "@/lib/utils";
import React from "react";

const BudgetSpentCard = ({ budget }: { budget: IBudget }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={cn(
          "w-[3px] h-[26px] rounded-2xl",
          themes.find((theme) => theme.title === budget.theme)?.background
        )}
      ></div>
      <div className={cn("flex justify-between items-center w-full")}>
        <span>{budget.category.title}</span>
        <div className="flex gap-2 items-center">
          <span className="font-bold">$250</span>
          <span className="text-grey-500 text-[12px]">
            of ${budget.maximum_spend}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BudgetSpentCard;
