"use client";
import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { cn, formatDate, formattedAmount } from "@/lib/utils";

const TransactionTableItem = ({
  transaction,
}: {
  transaction: ITransaction;
}) => {
  return (
    <TableRow key={transaction.id}>
      <TableCell className="font-bold">
        {transaction.recipient_sender}
      </TableCell>
      <TableCell className="text-[12px] max-sm:hidden">
        {transaction.type === "in"
          ? "Income"
          : `${
              transaction?.budget?.categories.title ||
              `${transaction?.pot?.title} (Pot)`
            }`}
      </TableCell>
      <TableCell className="text-[12px] max-sm:hidden">
        {formatDate(transaction?.created_at)}
      </TableCell>
      <TableCell
        className={cn(
          "font-bold text-green text-right",
          transaction.type === "in" ? "text-green" : "text-red"
        )}
      >
        {transaction.type === "in" ? "+" : "-"}
        {formattedAmount(transaction.amount)}
      </TableCell>
    </TableRow>
  );
};

export default TransactionTableItem;
