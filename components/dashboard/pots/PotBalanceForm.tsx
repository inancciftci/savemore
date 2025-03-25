"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDashboardData } from "@/context/DashboardProvider";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formattedAmount } from "@/lib/utils";
import { addMoneyToPot } from "@/actions/pot-actions";

const addMoneySchema = z.object({
  amount: z.coerce
    .number()
    .positive("Amount must be a positive number")
    .min(0.01, "Minimum amount is $0.01"),
});

const withdrawSchema = z.object({
  amount: z.coerce
    .number()
    .positive("Amount must be a positive number")
    .min(0.01, "Minimum amount is $0.01"),
});

const PotBalanceForm = ({
  pot,
  setPotTotal,
  potTotal,
}: {
  pot: IPot;
  potTotal: number;
  setPotTotal: (value: number | ((prev: number) => number)) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const context = useDashboardData();
  const userData = context?.user;
  const userFullName = `${userData?.first_name} ${userData.last_name}`;
  const totalBalance = context?.totalBalance;
  const [activeForm, setActiveForm] = useState<"add" | "withdraw" | null>(null);

  const addMoneyForm = useForm<z.infer<typeof addMoneySchema>>({
    resolver: zodResolver(addMoneySchema),
    defaultValues: {
      amount: undefined,
    },
  });

  const withdrawMoneyForm = useForm<z.infer<typeof withdrawSchema>>({
    resolver: zodResolver(withdrawSchema),
    defaultValues: {
      amount: undefined,
    },
  });

  const onSubmitAdd = async (data: z.infer<typeof addMoneySchema>) => {
    setLoading(true);
    try {
      if (potTotal + data.amount > pot.pot_target) {
        addMoneyForm.setError("amount", {
          type: "manual",
          message: "You can't add more than the target amount.",
        });
      } else {
        addMoneyToPot(pot.id, data.amount, userFullName);
        setPotTotal((prev: number) => prev + data.amount);
        setLoading(false);
        addMoneyForm.reset();
        setActiveForm(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitWithdraw = async (data: z.infer<typeof withdrawSchema>) => {
    console.log("Withdrawing money:", data.amount);
    withdrawMoneyForm.reset();
    setPotTotal((prev: number) => prev - data.amount);
    setActiveForm(null);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mb-4">
        <Button
          type="button"
          variant="secondary"
          className="py-6 font-bold cursor-pointer hover:translate-y-[-5px] transition-[translate] ease-in-out duration-200"
          onClick={() => setActiveForm(activeForm === "add" ? null : "add")}
        >
          + Add Money
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="py-6 font-bold cursor-pointer hover:translate-y-[-5px] transition-[translate] ease-in-out duration-200"
          onClick={() =>
            setActiveForm(activeForm === "withdraw" ? null : "withdraw")
          }
        >
          Withdraw
        </Button>
      </div>

      {activeForm === "add" && (
        <div className="animate-slide-down origin-top transition-all duration-300 ease-out">
          <Form {...addMoneyForm}>
            <form
              onSubmit={addMoneyForm.handleSubmit(onSubmitAdd)}
              className="w-full space-y-4"
            >
              <FormField
                control={addMoneyForm.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="text-sm text-grey-500">
                        Amount to Add
                      </FormLabel>
                      <span className="text-[12px] text-grey-500 flex flex-col items-end">
                        <span>Balance</span>
                        <span className="text-green font-bold">
                          {formattedAmount(totalBalance)}
                        </span>
                      </span>
                    </div>

                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter amount to add"
                        {...field}
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value ? Number(e.target.value) : undefined
                          )
                        }
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full font-bold cursor-pointer">
                {loading ? "Adding money..." : "+ Add Money"}
              </Button>
            </form>
          </Form>
        </div>
      )}

      {activeForm === "withdraw" && (
        <div className="animate-slide-down origin-top transition-all duration-300 ease-out">
          <Form {...withdrawMoneyForm}>
            <form
              onSubmit={withdrawMoneyForm.handleSubmit(onSubmitWithdraw)}
              className="w-full space-y-4"
            >
              <FormField
                control={withdrawMoneyForm.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500">
                      Amount to Withdraw
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter amount to withdraw"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full font-bold cursor-pointer">
                - Withdraw
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};

export default PotBalanceForm;
