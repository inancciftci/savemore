import React from "react";
import { TableCell, TableRow } from "../ui/table";

const BillsTableItem = () => {
  return (
    <TableRow>
      <TableCell className="font-bold">Spark Electric Solutions</TableCell>
      <TableCell className="text-right text-green text-[12px]">
        Monthly-2nd
      </TableCell>
      <TableCell className="text-right font-bold text-sm">$100.00</TableCell>
    </TableRow>
  );
};

export default BillsTableItem;
