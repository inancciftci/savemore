import { cn, formatDate, formattedAmount } from "@/lib/utils";
import React from "react";

const TransactionCard = ({ transaction }: { transaction: ITransaction }) => {
  return (
    <div className="py-4 dark:bg-grey-900 bg-grey-100 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-h3 dark:text-grey-100">
            {transaction.recipient_sender}
          </span>
        </div>
        <div className="flex flex-col">
          <span
            className={cn(
              "font-bold text-right text-green",
              transaction.type === "out" && "text-red"
            )}
          >
            {formattedAmount(transaction.amount)}
          </span>
          <span className="text-sm">{formatDate(transaction.created_at)}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
