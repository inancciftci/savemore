"use client";
import React, { createContext, useContext } from "react";

const DashboardContext = createContext<ICategory[]>([]);

interface DashboardProps {
  children: Readonly<React.ReactNode>;
  categories: ICategory[];
}

const DashboardProvider = ({ children, categories }: DashboardProps) => {
  return (
    <DashboardContext.Provider value={categories}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useCategories = () => useContext(DashboardContext);
export default DashboardProvider;
