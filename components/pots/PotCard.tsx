"use client";
import { themes } from "@/constants/theme";
import { Ellipsis, PenIcon, Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import PotBalanceForm from "../dashboard/pots/PotBalanceForm";
import { useDashboardData } from "@/context/DashboardProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { deletePot } from "@/actions/pot-actions";
import toast from "react-hot-toast";

const PotCard = ({ pot }: { pot: IPot }) => {
  const context = useDashboardData();
  const transactions = context?.transactions;
  const potSaved =
    transactions
      .filter((tr) => tr.pot_id === pot.id)
      .reduce((total, tr) => total + tr.amount, 0) || 0;
  const [potTotal, setPotTotal] = useState<number>(potSaved);
  const themeColor = themes.filter((theme) => theme.title === pot.theme)[0]
    .background;
  const progressWidth = ((potTotal / pot.pot_target) * 100).toFixed(2);
  return (
    <div className="p-6 bg-white rounded-lg flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className={`${themeColor} size-4 rounded-full`}></div>
          <h3 className="text-h3">{pot.title}</h3>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Ellipsis className="size-5 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-center">
            <DropdownMenuItem
              onClick={() => {
                toast.success("Pot deleted successfully");
                deletePot(pot.id);
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              }}
              className="font-bold cursor-pointer flex items-center text-[12px]"
            >
              <Trash2Icon className="size-4 text-red" /> Delete
            </DropdownMenuItem>
            <DropdownMenuItem className="font-bold cursor-pointer flex items-center text-[12px]">
              <PenIcon className="size-4 text-orange-400" /> Edit
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-grey-500">Total Saved</span>
        <span className="text-h1">${potTotal}</span>
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
      <PotBalanceForm potTotal={potTotal} setPotTotal={setPotTotal} pot={pot} />
    </div>
  );
};

export default PotCard;
