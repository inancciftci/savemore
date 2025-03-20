import { z } from "zod";

export const AddBudgetSchema = z.object({
  categoryTitle: z.string({
    required_error: "Please select a related category for the budget",
  }),
  maximumSpend: z.number(),
  theme: z.string({
    required_error: "Please select a desired theme for the budget",
  }),
});
