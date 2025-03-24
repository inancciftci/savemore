import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { cn } from "@/lib/utils";

const TransactionTable = ({
  transactions,
}: {
  transactions: ITransaction[];
}) => {
  console.log(transactions);
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-grey-500 text-[12px]">
            Recipient/Sender
          </TableHead>
          <TableHead className="text-grey-500 text-[12px]">Category</TableHead>
          <TableHead className="text-grey-500 text-[12px]">
            Transaction Date
          </TableHead>
          <TableHead className="text-grey-500 text-[12px] text-right">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tr) => (
          <TableRow key={tr.id}>
            <TableCell className="font-bold">{tr.recipient_sender}</TableCell>
            <TableCell className="text-[12px]">
              {tr.type === "in" ? "Income" : `${tr.budget_id}`}
            </TableCell>
            <TableCell className="text-[12px]">19 Aug 2024</TableCell>
            <TableCell
              className={cn(
                "font-bold text-green text-right",
                tr.type === "in" ? "text-green" : "text-red"
              )}
            >
              {tr.type === "in" ? "+" : "-"}${tr.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
