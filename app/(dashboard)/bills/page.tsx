import BillsTable from "@/components/bills/BillsTable";
import { Receipt } from "lucide-react";
import React from "react";

const BillsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-h1">Recurring Bills</h1>
        <span className="font-bold">+ Add Bill</span>
      </div>
      <div className="grid grid-cols-[auto_60%] gap-10">
        <div className="flex flex-col gap-10">
          <div className="p-4 bg-grey-900 rounded-lg flex flex-col gap-4">
            <Receipt className="size-10 text-grey-100" />
            <h2 className="text-h2 text-grey-100">Total Paid</h2>
            <span className="text-h1 text-grey-100">$570</span>
          </div>
          <div className="p-4 bg-white rounded-lg flex flex-col gap-2">
            <h3 className="text-h3 mb-4">Summary</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-grey-500">Paid Bills</span>
              <span className="font-bold">4 ($190)</span>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <span className="text-sm text-grey-500">Total Upcoming</span>
              <span className="font-bold">4 ($190)</span>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <span className="text-sm text-red">Due Soon</span>
              <span className="font-bold text-red">4 ($190)</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <BillsTable />
        </div>
      </div>
    </div>
  );
};

export default BillsPage;
