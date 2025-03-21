"use client";
import React, { createContext, useContext } from "react";

interface DashboardContextType {
  categories: ICategory[];
  budgets: any[];
}

const DashboardContext = createContext<DashboardContextType>({
  categories: [],
  budgets: [],
});

interface DashboardProps {
  children: Readonly<React.ReactNode>;
  categories: ICategory[];
  budgets: any[];
}

const DashboardProvider = ({
  children,
  categories,
  budgets,
}: DashboardProps) => {
  return (
    <DashboardContext.Provider value={{ categories, budgets }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardData = () => useContext(DashboardContext);
export default DashboardProvider;
