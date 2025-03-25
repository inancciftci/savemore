import { formattedAmount } from "@/lib/utils";
import React from "react";

const BudgetSpendings = ({ txns }: { txns: ITransaction[] }) => {
  return (
    <div className="bg-grey-100 rounded-lg p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold">Latest Spendings</h4>
          <span className="text-grey-500 text-sm">See All</span>
        </div>
        {txns.map((txn) => (
          <div key={txn.id} className="flex items-center justify-between">
            <span className="text-[12px] font-bold">
              {txn.recipient_sender}
            </span>
            <span className="text-[12px] font-bold text-red">
              {txn.amount && <span>-{formattedAmount(txn.amount)}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetSpendings;
