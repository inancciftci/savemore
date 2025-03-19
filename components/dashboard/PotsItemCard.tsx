import React from "react";

const PotsItemCard = ({ title, amount }: { title: string; amount: string }) => {
  return (
    <div className="w-[50%]">
      <div className="flex gap-4 item-center">
        <div className="h-[70px] w-[5px] bg-green rounded-lg"></div>
        <div className="flex flex-col justify-between">
          <span>{title}</span>
          <span className="font-bold text-lg">{amount}</span>
        </div>
      </div>
    </div>
  );
};

export default PotsItemCard;
