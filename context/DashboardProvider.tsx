"use client";
import React, { createContext, useContext } from "react";

interface DashboardContextType {
  categories: ICategory[];
  budgets: IBudget[];
  user: IUser;
  transactions: ITransaction[];
  pots: IPot[];
  totalBalance: number;
}

const DashboardContext = createContext<DashboardContextType>({
  categories: [],
  budgets: [],
  user: { email: "", first_name: "", last_name: "", id: "" },
  transactions: [],
  pots: [],
  totalBalance: 0,
});

interface DashboardProps {
  children: Readonly<React.ReactNode>;
  categories: ICategory[];
  budgets: IBudget[];
  user: IUser;
  transactions: ITransaction[];
  pots: IPot[];
  totalBalance: number;
}

const DashboardProvider = ({
  children,
  categories,
  budgets,
  user,
  transactions,
  pots,
  totalBalance,
}: DashboardProps) => {
  return (
    <DashboardContext.Provider
      value={{ totalBalance, transactions, user, categories, budgets, pots }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardData = () => useContext(DashboardContext);
export default DashboardProvider;
