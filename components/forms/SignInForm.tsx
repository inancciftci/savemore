"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { LoginFormSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { login } from "@/actions/auth-actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginFormSchema>) => {
    setLoading(true);
    setAuthError(null);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      const res = await login(formData);

      if (res && !res.success) {
        setAuthError(
          res.error || "Login failed. Please check your credentials."
        );
        toast.error(res.error || "Login failed");
      } else {
        toast.success("Login successful");
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      setAuthError("An unexpected error occurred. Please try again.");
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {authError && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm border border-red-200">
            {authError}
          </div>
        )}

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
              <FormMessage />
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
                  className="dark:bg-grey-100"
                  placeholder="Enter your password"
                  required
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={loading}
          className="cursor-pointer w-full bg-grey-900 text-grey-100"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <p className="text-grey-500 text-sm text-center mt-4">
        Need to create an account?{" "}
        <Link href={"/register"} className="text-grey-900 font-bold underline">
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
