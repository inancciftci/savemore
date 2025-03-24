"use client";
import React, { createContext, useContext } from "react";

interface DashboardContextType {
  categories: ICategory[];
  budgets: IBudget[];
  user: IUser;
  transactions: ITransaction[];
}

const DashboardContext = createContext<DashboardContextType>({
  categories: [],
  budgets: [],
  user: { email: "", first_name: "", last_name: "", id: "" },
  transactions: [],
});

interface DashboardProps {
  children: Readonly<React.ReactNode>;
  categories: ICategory[];
  budgets: IBudget[];
  user: IUser;
  transactions: ITransaction[];
}

const DashboardProvider = ({
  children,
  categories,
  budgets,
  user,
  transactions,
}: DashboardProps) => {
  return (
    <DashboardContext.Provider
      value={{ transactions, user, categories, budgets }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardData = () => useContext(DashboardContext);
export default DashboardProvider;
