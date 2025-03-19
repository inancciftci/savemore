import { cn } from "@/lib/utils";
import React from "react";

interface ITransaction {
  id: string;
  to: string;
  amount: string;
  when: string;
}

const TransactionCard = ({ transaction }: { transaction: ITransaction }) => {
  return (
    <div className="py-4 dark:bg-grey-900 bg-grey-100 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-h3 dark:text-grey-100">{transaction.to}</span>
        </div>
        <div className="flex flex-col">
          <span
            className={cn(
              "font-bold text-right text-green",
              transaction.amount[0] === "-" && "text-red"
            )}
          >
            {transaction.amount}
          </span>
          <span className="text-sm">{transaction.when}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
