import { themes } from "@/constants/theme";
import React from "react";

const BudgetCard = ({ budget }: { budget: IBudget }) => {
  const budgetTheme = themes.find((theme) => theme.title === budget.theme);
  const progressWidth = (250 / budget.maximum_spend) * 100;
  return (
    <div className="bg-white p-6 rounded-lg flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <div
          className={`${budgetTheme?.background} size-[15px] rounded-full`}
        ></div>
        <h3 className="text-h3">{budget.category.title}</h3>
      </div>
      <span className="text-grey-500 text-[12px]">
        Maximum of ${budget.maximum_spend}
      </span>
      <div className="flex rounded-lg overflow-hidden w-full h-[20px] bg-grey-100">
        <div
          className={`${budgetTheme?.background} flex items-center justify-center text-white font-medium`}
          style={{ width: `${progressWidth}%` }}
        ></div>
        <div className="flex-grow flex items-center justify-end pr-3 text-gray-700 font-medium"></div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <div className=" flex items-center gap-4">
          <div
            className={`w-[3px] h-[40px] rounded-2xl ${budgetTheme?.background}`}
          ></div>
          <div className="flex flex-col justify-between">
            <span className="text-grey-500 text-[12px]">Spent</span>
            <span className="font-bold">$250</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[3px] h-[40px] rounded-2xl bg-grey-100"></div>
          <div className="flex flex-col justify-between">
            <span className="text-grey-500 text-[12px]">Remaining</span>
            <span className="font-bold">${budget.maximum_spend - 250}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
