"use client";
import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { cn } from "@/lib/utils";

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
      <TableCell className="text-[12px]">
        {transaction.type === "in"
          ? "Income"
          : `${transaction?.budget?.categories.title}`}
      </TableCell>
      <TableCell className="text-[12px]">19 Aug 2024</TableCell>
      <TableCell
        className={cn(
          "font-bold text-green text-right",
          transaction.type === "in" ? "text-green" : "text-red"
        )}
      >
        {transaction.type === "in" ? "+" : "-"}${transaction.amount}
      </TableCell>
    </TableRow>
  );
};

export default TransactionTableItem;
