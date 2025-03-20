"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useCategories } from "@/context/DashboardProvider";
import { X } from "lucide-react";
import { z } from "zod";
import { AddBudgetSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { themes } from "@/constants/theme";

const dummyBudgets = [
  {
    id: 1,
    maximumSpend: 3000,
    theme: "Purple",
    categoryTitle: "4",
  },
  {
    id: 2,
    maximumSpend: 3000,
    theme: "Red",
    categoryTitle: "3",
  },
];

const AddBudgetForm = () => {
  const context = useCategories();
  const categories = context || [];
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const usedThemes = new Set(dummyBudgets.map((budget) => budget.theme));
  const form = useForm<z.infer<typeof AddBudgetSchema>>({
    resolver: zodResolver(AddBudgetSchema),
    defaultValues: {
      categoryTitle: "",
      maximumSpend: undefined,
      theme: "",
    },
  });

  const onSubmit = (data: z.infer<typeof AddBudgetSchema>) => {
    console.log(data);
  };
  return (
    <>
      <Button
        onClick={() => setModalOpen(!modalOpen)}
        className="font-[600] cursor-pointer text-sm py-6"
      >
        + Add New Budget
      </Button>
      {modalOpen && (
        <div className="h-[100vh] w-full bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 flex justify-center items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white dark:bg-grey-100 p-10 relative rounded-lg shadow-sm min-w-[500px] max-md:min-w-[90%] space-y-10"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-h2 dark:text-grey-900">Add New Budget</h2>
                <Button
                  onClick={() => setModalOpen(!modalOpen)}
                  className="cursor-pointer rounded-full"
                  size="icon"
                >
                  <X size={6} />
                </Button>
              </div>

              <FormField
                control={form.control}
                name="categoryTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500 dark:text-grey-500">
                      Budget Category
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full dark:bg-grey-900 dark:hover:bg-grey-900">
                          <SelectValue placeholder="Select a related category for the budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories?.map((cat) => (
                          <SelectItem
                            className="w-full"
                            key={cat.id}
                            value={String(cat.id)}
                          >
                            {cat.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maximumSpend"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500 dark:text-grey-500">
                      Maximum Spend
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="dark:bg-grey-900"
                        placeholder="$ e.g. 2000"
                        type="number"
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === ""
                              ? undefined
                              : Number(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage className="text-red font-bold text-sm">
                      {form.formState.errors.maximumSpend?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500 dark:text-grey-500">
                      Theme
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full dark:bg-grey-900 dark:hover:bg-grey-900">
                          <SelectValue placeholder="Select a theme for the budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {themes?.map((theme) => (
                          <SelectItem
                            className="w-full flex justify-between items-center"
                            key={theme.id}
                            value={theme.title}
                            disabled={usedThemes.has(theme.title)}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={`size-[15px] ${theme.background} rounded-full`}
                              ></div>
                              {theme.title}
                            </div>
                            {usedThemes.has(theme.title) && (
                              <div className="ml-auto text-red text-sm">
                                (Already used)
                              </div>
                            )}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                className="w-full py-6 font-[600] cursor-pointer"
                type="submit"
              >
                + Add Budget
              </Button>
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

export default AddBudgetForm;
