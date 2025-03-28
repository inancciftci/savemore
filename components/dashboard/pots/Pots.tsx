"use client";
import { ArrowRight, MoveRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import PotsTotalCard from "./PotsTotalCard";
import PotsItemCard from "./PotsItemCard";
import { useDashboardData } from "@/context/DashboardProvider";
import { formattedAmount } from "@/lib/utils";

const Pots = () => {
  const context = useDashboardData();
  const pots = context?.pots;
  const transactions = context?.transactions;
  const potTransactions = transactions.filter((txn) => txn.pot_id !== null);
  const potsTotal = potTransactions.reduce(
    (total, txn) => total + txn.amount,
    0
  );
  const potSaved = (pot: IPot, txns: ITransaction[]) => {
    const potTxns = txns.filter((txn) => txn.pot.title === pot.title);
    return formattedAmount(
      potTxns.reduce((total, txn) => total + txn.amount, 0)
    );
  };
  return (
    <div className="p-6 bg-white dark:bg-grey-100 rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="text-h2 dark:text-grey-900">Pots</h4>
        <Link
          href="#"
          className="flex gap-2 items-center text-sm text-grey-500"
        >
          See Details <ArrowRight size={14} />
        </Link>
      </div>
      {pots.length > 0 ? (
        <div className="flex gap-4 h-[160px]">
          <div className="w-[50%] max-md:w-[35%] flex">
            <PotsTotalCard potsTotal={potsTotal} />
          </div>
          <div className="w-[50%] max-md:w-[65%] h-[160px] flex flex-wrap content-between space-y-4">
            {pots.slice(0, 4).map((p) => (
              <PotsItemCard
                key={p.id}
                title={p.title}
                amount={potSaved(p, potTransactions)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <span className="text-red font-bold">There is no pots yet</span>
          <Link
            className="flex items-center gap-2 bg-grey-500 text-sm font-bold p-4 text-grey-100 rounded-lg"
            href="/pots"
          >
            <MoveRightIcon className="size-5" /> Create your first pot
          </Link>
        </div>
      )}
    </div>
  );
};

export default Pots;
