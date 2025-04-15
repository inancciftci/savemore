import { ChartNetwork, Eye, Handshake, User } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-10 items-center">
        <h2 className="text-h1 uppercase tracking-widest">How it works?</h2>
        <div className="grid grid-cols-4 gap-10 items-center">
          <div className="flex h-[300px] flex-col bg-[#dea32c] p-4 rounded-lg gap-4 items-center justify-center">
            <div className="bg-slate-700 rounded-full w-[50px] aspect-square flex items-center justify-center">
              <User size={30} className="text-slate-200" />
            </div>

            <h4 className="text-h4 text-slate-900 font-bold">Sign Up</h4>
            <p className="text-sm text-slate-900 text-center">
              Create your free account in seconds.
            </p>
          </div>
          <div className="flex h-[300px] flex-col bg-[#dea32c] p-4 rounded-lg gap-4 items-center justify-center">
            <div className="bg-slate-700 rounded-full w-[50px] aspect-square flex items-center justify-center">
              <ChartNetwork size={30} className="text-slate-200" />
            </div>

            <h4 className="text-h4 text-slate-900 font-bold">Connect</h4>
            <p className="text-sm text-slate-900 text-center">
              Set up your budgets, savings pots, and recurring bills.
            </p>
          </div>
          <div className="flex h-[300px] flex-col bg-[#dea32c] p-4 rounded-lg gap-4 items-center justify-center">
            <div className="bg-slate-700 rounded-full w-[50px] aspect-square flex items-center justify-center">
              <Eye size={30} className="text-slate-200" />
            </div>

            <h4 className="text-h4 text-slate-900 font-bold">Track</h4>
            <p className="text-sm text-slate-900 text-center">
              Log your transactions and monitor your financial progress.
            </p>
          </div>
          <div className="flex h-[300px] flex-col bg-[#dea32c] p-4 rounded-lg gap-4 items-center justify-center">
            <div className="bg-slate-700 rounded-full w-[50px] aspect-square flex items-center justify-center">
              <Handshake size={30} className="text-slate-200" />
            </div>

            <h4 className="text-h4 text-slate-900 font-bold">Optimize</h4>
            <p className="text-sm text-slate-900 text-center">
              Gain insights from your spending patterns and adjust your budget
              accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
