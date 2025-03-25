"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { z } from "zod";
import { AddPotSchema } from "@/lib/validations";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { themes } from "@/constants/theme";
import { addPot } from "@/actions/pot-actions";

const AddPotForm = ({
  pots,
  setPots,
}: {
  pots: IPot[];
  setPots: React.Dispatch<React.SetStateAction<IPot[]>>;
}) => {
  const form = useForm<z.infer<typeof AddPotSchema>>({
    resolver: zodResolver(AddPotSchema),
    defaultValues: {
      title: "",
      pot_target: undefined,
      theme: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const usedThemes = new Set(pots.map((pot) => pot.theme));

  const onSubmit = async (data: z.infer<typeof AddPotSchema>) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("pot_target", data.pot_target?.toString() || "");
      formData.append("theme", data.theme);
      const response = await addPot(formData);
      setPots((prev) => [
        ...prev,
        {
          id: prev.length + 125123,
          theme: data.theme,
          title: data.title,
          pot_target: data.pot_target,
        },
      ]);
      if (response?.status === "false") {
        console.error("Transaction failed:", response.message);
      } else {
        setModalOpen(false);
        form.reset();
      }
    } catch (err) {
      console.error(err);
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
        + Add New Pot
      </Button>
      {modalOpen && (
        <div className="h-[100vh] w-full bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 flex justify-center items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="z-101 bg-white dark:bg-grey-100 p-10 relative rounded-lg shadow-sm min-w-[500px] max-md:min-w-[90%] space-y-10"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-h2 dark:text-grey-900">Add New Pot</h2>
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
                      Pot Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. New Laptop" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pot_target"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-grey-500">
                      Target
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
                    </FormControl>{" "}
                    <FormMessage />
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
                          <SelectValue placeholder="Select a theme for the pot" />
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
                disabled={loading}
              >
                {loading ? "Creating pot..." : "+ Add Pot"}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

export default AddPotForm;
