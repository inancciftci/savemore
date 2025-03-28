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

const BillsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your bills</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[12px] text-grey-500">
              Bill Title
            </TableHead>
            <TableHead className="text-[12px] text-grey-500 text-right">
              Due Date
            </TableHead>
            <TableHead className="text-[12px] text-grey-500 text-right">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">
              Spark Electric Solutions
            </TableCell>
            <TableCell className="text-right text-green text-[12px]">
              Monthly-2nd
            </TableCell>
            <TableCell className="text-right font-bold text-sm">
              $100.00
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">
              Spark Electric Solutions
            </TableCell>
            <TableCell className="text-right text-green text-[12px]">
              Monthly-2nd
            </TableCell>
            <TableCell className="text-right font-bold text-sm">
              $100.00
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">
              Spark Electric Solutions
            </TableCell>
            <TableCell className="text-right text-green text-[12px]">
              Monthly-2nd
            </TableCell>
            <TableCell className="text-right font-bold text-sm">
              $100.00
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BillsTable;
