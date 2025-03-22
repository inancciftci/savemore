import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { themes } from "@/constants/theme";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetGraph = ({ budgets }: { budgets: IBudget[] }) => {
  const data = {
    labels: budgets?.map((budget) => budget.category.title),
    datasets: [
      {
        label: "Budget",
        data: budgets?.map((budget) => budget.maximum_spend),
        backgroundColor: budgets?.map((budget) =>
          themes
            .find((theme) => theme.title === budget.theme)
            ?.background.split("-")[1]
            .replace(/[\[\]]/g, "")
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom height & width
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-[100%] max-h-[100%] h-[300px] mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default BudgetGraph;
