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
      <div className="flex items-center w-full gap-2">
        <div className="h-[1px] flex-1 bg-grey-500 opacity-[.2]"></div>
        <span className="text-grey-500 text-sm">OR SIGN UP WITH</span>
        <div className="h-[1px] flex-1 bg-grey-500 opacity-[.2]"></div>
      </div>
      <Button className="dark:hover:bg-grey-900 mt-[-0.5rem] dark:hover:text-grey-100 cursor-pointer flex items-center h-[50px] mx-auto rounded-lg shadow-md  p-4">
        <div>
          <svg viewBox="0 0 128 128">
            <path
              fill="#fff"
              d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"
            ></path>
            <path
              fill="#e33629"
              d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"
            ></path>
            <path
              fill="#f8bd00"
              d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"
            ></path>
            <path
              fill="#587dbd"
              d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
            ></path>
            <path
              fill="#319f43"
              d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"
            ></path>
          </svg>
        </div>
      </Button>
    </Form>
  );
};

export default SignUpForm;
