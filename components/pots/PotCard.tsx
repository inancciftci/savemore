import { themes } from "@/constants/theme";
import { Ellipsis } from "lucide-react";
import React from "react";
import PotBalanceForm from "../dashboard/pots/PotBalanceForm";

const PotCard = ({ pot }: { pot: IPot }) => {
  const themeColor = themes.filter((theme) => theme.title === pot.theme)[0]
    .background;
  const progressWidth = ((15 / pot.pot_target) * 100).toFixed(2);
  console.log();
  return (
    <div className="p-6 bg-white rounded-lg flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className={`${themeColor} size-4 rounded-full`}></div>
          <h3 className="text-h3">{pot.title}</h3>
        </div>
        <Ellipsis className="size-5 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-grey-500">Total Saved</span>
        <span className="text-h1">$15</span>
      </div>
      <div className="flex h-[10px] rounded-lg bg-grey-100">
        <div
          className={`${themeColor} rounded-lg`}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold">{progressWidth}%</span>
        <span className="text-sm text-grey-500">
          Target of ${pot.pot_target}
        </span>
      </div>
      <PotBalanceForm pot={pot} />
    </div>
  );
};

export default PotCard;
