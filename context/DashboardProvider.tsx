"use client";
import React, { createContext, useContext } from "react";

interface DashboardContextType {
  categories: ICategory[];
  budgets: IBudget[];
  user: IUser;
  transactions: ITransaction[];
  pots: IPot[];
}

const DashboardContext = createContext<DashboardContextType>({
  categories: [],
  budgets: [],
  user: { email: "", first_name: "", last_name: "", id: "" },
  transactions: [],
  pots: [],
});

interface DashboardProps {
  children: Readonly<React.ReactNode>;
  categories: ICategory[];
  budgets: IBudget[];
  user: IUser;
  transactions: ITransaction[];
  pots: IPot[];
}

const DashboardProvider = ({
  children,
  categories,
  budgets,
  user,
  transactions,
  pots,
}: DashboardProps) => {
  return (
    <DashboardContext.Provider
      value={{ transactions, user, categories, budgets, pots }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardData = () => useContext(DashboardContext);
export default DashboardProvider;
