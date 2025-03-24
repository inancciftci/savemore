import { themes } from "@/constants/theme";
import { cn } from "@/lib/utils";
import React from "react";

const BudgetsItemCard = ({ budget }: { budget: IBudget }) => {
  return (
    <div className="flex gap-3 h-[60px]">
      <div
        className={cn(
          "h-full w-[5px] rounded-lg",
          themes.find((theme) => theme.title === budget.theme)?.background
        )}
      ></div>

      <div className="flex flex-col justify-between">
        <span className="text-[12px] text-grey-500">
          {budget.category.title}
        </span>
        <span className="font-bold dark:text-grey-900">
          ${budget.maximum_spend}
        </span>
      </div>
    </div>
  );
};

export default BudgetsItemCard;
