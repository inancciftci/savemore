"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { AddBillSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { X } from "lucide-react";
import { Input } from "../ui/input";
import { z } from "zod";

const AddBillForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof AddBillSchema>>({
    resolver: zodResolver(AddBillSchema),
    defaultValues: {
      title: "",
      bill_date: "",
      amount: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof AddBillSchema>) => {
    setLoading(false);
    console.log(data);
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(!modalOpen)}
        className="font-[600] cursor-pointer text-sm py-6"
      >
        + Add New Bill
      </Button>
      {modalOpen && (
        <div className="h-[100vh] w-full bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 flex justify-center items-center z-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="z-101 bg-white dark:bg-grey-100 p-10 relative rounded-lg shadow-sm min-w-[500px] max-md:min-w-[90%] space-y-10"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-h2 dark:text-grey-900">Add New Bill</h2>
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
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500">
                      Bill Title
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter a bill title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bill_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500">
                      Bill Date (Enter a due date)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. '3'" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500">
                      Bill Amount
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="$ e.g. 100"
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full py-6 font-[600] cursor-pointer"
                type="submit"
                disabled={loading}
              >
                {loading ? "Adding the bill..." : "+ Add Bill"}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

export default AddBillForm;
