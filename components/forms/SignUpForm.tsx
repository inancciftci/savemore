"use client";
import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterFormSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { signup } from "@/actions/auth-actions";

const SignUpForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });
  const handleSubmit = async (data: z.infer<typeof RegisterFormSchema>) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    signup(formData);
    setLoading(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="flex gap-2 w-full">
          <div className="w-[50%]">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-grey-900 text-[12px]">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-grey-100"
                      placeholder="Enter your first name"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="w-[50%]">
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-grey-900 text-[12px]">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-grey-100"
                      placeholder="Enter your last name"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-grey-900 text-[12px]">Email</FormLabel>
              <FormControl>
                <Input
                  className="dark:bg-grey-100"
                  placeholder="Enter your email"
                  required
                  type="email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-grey-900 text-[12px]">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="dark:bg-grey-100"
                  placeholder="Enter your password"
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full dark:bg-grey-900 dark:text-grey-100 hover:translate-y-[-.3rem] bg-grey-900 cursor-pointer text-grey-100"
        >
          {loading ? "Signing up..." : "Register"}
        </Button>
      </form>
      <p className="text-grey-500 text-sm text-center">
        You already have an account?{" "}
        <Link href={"/login"} className="text-grey-900 font-bold underline">
          Login
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
