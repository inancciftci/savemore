import React from "react";

const BillsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-h1">Recurring Bills</h1>
        <span className="font-bold">+ Add Bill</span>
      </div>
    </div>
  );
};

export default BillsPage;
