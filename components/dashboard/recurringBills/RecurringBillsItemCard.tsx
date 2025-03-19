import React from "react";

interface IBill {
  id: string;
  title: string;
  amount: string;
}

const RecurringBillsItemCard = ({ bill }: { bill: IBill }) => {
  return (
    <div className="bg-grey-100 dark:bg-grey-900 rounded-lg border-l-[6px] border-green px-4 py-6 flex items-center justify-between">
      <span className="text-grey-500 dark:text-grey-100">{bill.title}</span>
      <span className="font-bold text-grey-900 dark:text-grey-100">
        {bill.amount}
      </span>
    </div>
  );
};

export default RecurringBillsItemCard;
