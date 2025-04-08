import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import TransactionTableItem from "./TransactionTableItem";

const TransactionTable = ({
  transactions,
}: {
  transactions: ITransaction[];
}) => {
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-grey-500 text-[12px]">
            Recipient/Sender
          </TableHead>
          <TableHead className="text-grey-500 text-[12px] max-sm:hidden">
            Category
          </TableHead>
          <TableHead className="text-grey-500 text-[12px] max-sm:hidden">
            Transaction Date
          </TableHead>
          <TableHead className="text-grey-500 text-[12px] text-right">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tr) => (
          <TransactionTableItem key={tr.id} transaction={tr} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
