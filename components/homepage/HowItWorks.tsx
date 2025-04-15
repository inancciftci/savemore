import { ChartNetwork, Eye, Handshake, User } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-10 items-center">
        <h2 className="text-h1 uppercase tracking-widest mb-13">
          How it works?
        </h2>
        <div className="grid grid-cols-4 gap-10 items-center">
          <div className="flex h-[300px] flex-col bg-accent p-4 rounded-lg gap-4 items-center justify-center">
            <div className="bg-white rounded-full w-[50px] aspect-square flex items-center justify-center">
              <User size={30} className="text-[#dea32c]" />
            </div>

            <h4 className="text-h4 text-primary font-bold">Sign Up</h4>
            <p className="text-sm text-slate-600 text-center">
              Create your free account in seconds.
            </p>
          </div>
          <div className="flex h-[300px] flex-col bg-accent p-4 rounded-lg gap-4 items-center justify-center">
            <div className="bg-white rounded-full w-[50px] aspect-square flex items-center justify-center">
              <ChartNetwork size={30} className="text-[#dea32c]" />
            </div>

            <h4 className="text-h4 text-primary font-bold">Connect</h4>
            <p className="text-sm text-slate-600 text-center">
              Set up your budgets, savings pots, and recurring bills.
            </p>
          </div>
          <div className="flex h-[300px] flex-col bg-accent p-4 rounded-lg gap-4 items-center justify-center">
            <div className="bg-white rounded-full w-[50px] aspect-square flex items-center justify-center">
              <Eye size={30} className="text-[#dea32c]" />
            </div>

            <h4 className="text-h4 text-primary font-bold">Track</h4>
            <p className="text-sm text-slate-600 text-center">
              Log your transactions and monitor your financial progress.
            </p>
          </div>
          <div className="flex h-[300px] flex-col bg-accent p-4 rounded-lg gap-4 items-center justify-center">
            <div className="bg-white rounded-full w-[50px] aspect-square flex items-center justify-center">
              <Handshake size={30} className="text-[#dea32c]" />
            </div>

            <h4 className="text-h4 text-primary font-bold">Optimize</h4>
            <p className="text-sm text-slate-600 text-center">
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
