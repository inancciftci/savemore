import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import BillsTableItem from "./BillsTableItem";

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
          <BillsTableItem />
          <BillsTableItem />
          <BillsTableItem />
          <BillsTableItem />
        </TableBody>
      </Table>
    </div>
  );
};

export default BillsTable;
