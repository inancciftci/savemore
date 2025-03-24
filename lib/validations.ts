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

export const AddTransactionSchema = z.object({
  recipient_sender: z
    .string()
    .min(2, "Name/Company must be at least 2 characters"),
  category: z.string({
    required_error: "Please select a related category for the transaction",
  }),
  amount: z.number().min(0.01, "Amount must be at least 0.01"),
  type: z.string({
    required_error: "Please select a type for the transaction",
  }),
});

export const AddPotSchema = z.object({
  title: z.string().min(2, "Pot name should be at least 2 characters"),
  pot_target: z.number().min(10, "Target must be at least 10"),
  theme: z.string({
    required_error: "You have to select a theme for the pot",
  }),
});
