"use client";

import AddPotForm from "@/components/pots/AddPotForm";
import PotCard from "@/components/pots/PotCard";
import { useDashboardData } from "@/context/DashboardProvider";
import React from "react";

const PotsPage = () => {
  const context = useDashboardData();
  const pots = context?.pots;
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-h1">Pots</h1>
        <AddPotForm pots={pots} />
      </div>
      <div className="grid grid-cols-2 gap-10">
        {pots?.map((pot) => (
          <PotCard key={pot.id} pot={pot} />
        ))}
      </div>
    </div>
  );
};

export default PotsPage;
