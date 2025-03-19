import React from "react";

const OverviewTopCard = ({
  title,
  amount,
}: {
  title: string;
  amount: string;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-4 bg-white p-4 rounded-lg shadow-sm dark:bg-grey-500">
      <span className="text-sm">{title}</span>
      <span className="font-bold text-3xl">{amount}</span>
    </div>
  );
};

export default OverviewTopCard;
