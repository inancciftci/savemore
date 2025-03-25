import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateBalance = (transactions: ITransaction[]) => {
  const inTotal = transactions
    .filter((tr) => tr.type === "in")
    .reduce((sum, tr) => sum + tr.amount, 0);
  const outTotal = transactions
    .filter((tr) => tr.type === "out")
    .reduce((sum, tr) => sum + tr.amount, 0);
  return inTotal - outTotal;
};

export const formattedAmount = (num: number) => {
  return `$${num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
