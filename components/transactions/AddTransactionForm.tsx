"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { AddTransactionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { useDashboardData } from "@/context/DashboardProvider";
import { addTransaction } from "@/actions/transaction-actions";

const AddTransactionForm = ({ categories }: { categories: string[] }) => {
  const context = useDashboardData();
  const budgets = context?.budgets;
  const totalBalance = context?.totalBalance;
  const form = useForm<z.infer<typeof AddTransactionSchema>>({
    resolver: zodResolver(AddTransactionSchema),
    defaultValues: {
      recipient_sender: "",
      category: undefined,
      amount: 0,
      type: undefined,
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const categoryValue = form.watch("category");
  const isIncome = categoryValue === "income";
  useEffect(() => {
    if (isIncome) {
      form.setValue("type", "in");
    } else {
      form.setValue("type", "out");
    }
  }, [isIncome, form]);

  const onSubmit = async (data: z.infer<typeof AddTransactionSchema>) => {
    setLoading(true);
    try {
      if (totalBalance <= 0 && data.type === "out") {
        toast.error("Please add a balance first ");
      } else {
        const formData = new FormData();
        formData.append("recipient_sender", data.recipient_sender);
        formData.append("amount", data.amount.toString());
        formData.append("type", data.type);

        if (data.category !== "income") {
          const categoryId =
            budgets?.find((budget) => budget.category.title === data.category)
              ?.id || "";
          formData.append("budget_id", categoryId.toString());
        }

        const response = await addTransaction(formData);

        setTimeout(() => {
          window.location.reload();
        }, 500);

        if (response?.status === "false") {
          console.error("Transaction failed:", response.message);
        } else {
          setModalOpen(false);
          form.reset();
        }
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button
        onClick={() => setModalOpen(!modalOpen)}
        className="font-[600] cursor-pointer text-sm py-6"
      >
        + Add New Transaction
      </Button>
      {modalOpen && (
        <div className="z-[999] h-[100vh] w-full bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 flex justify-center items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
              className="z-[1000] bg-white dark:bg-grey-100 p-10 relative rounded-lg shadow-sm min-w-[500px] max-md:min-w-[90%] space-y-10"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-h2 dark:text-grey-900">
                  Add New Transaction
                </h2>
                <Button
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                  className="cursor-pointer rounded-full"
                  size="icon"
                >
                  <X size={6} />
                </Button>
              </div>

              <FormField
                control={form.control}
                name="recipient_sender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500 dark:text-grey-500">
                      Recipient / Sender
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter person/company name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500 dark:text-grey-500">
                      Transaction Category
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full dark:bg-grey-900 dark:hover:bg-grey-900">
                          <SelectValue placeholder="Select a category for the transaction" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="z-[1050]">
                        <SelectGroup>
                          <SelectLabel>Income</SelectLabel>
                          <SelectItem value="income">Income</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Budgets</SelectLabel>
                          {categories.map((cat, i) => (
                            <SelectItem value={cat} key={i}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-10">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-grey-500">
                        Amount
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter an amount"
                          type="number"
                          onChange={(e) =>
                            field.onChange(
                              e.target.value ? Number(e.target.value) : ""
                            )
                          }
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-grey-500 dark:text-grey-500">
                        Type (In/Out)
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                        disabled
                      >
                        <FormControl>
                          <SelectTrigger className="w-full dark:bg-grey-900 dark:hover:bg-grey-900">
                            <SelectValue placeholder="Transaction Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="in" disabled={!isIncome}>
                            {" "}
                            In
                          </SelectItem>
                          <SelectItem value="out" disabled={isIncome}>
                            Out
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <Button
                className="w-full py-6 font-[600] cursor-pointer"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating transaction..." : "+ Add Transaction"}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

export default AddTransactionForm;
