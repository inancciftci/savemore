"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function getUserSession() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    return null;
  }
  return { status: "success", user: data.session?.user };
}

export async function login(formData: FormData) {
  const supabase = await createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) return null;
  revalidatePath("/");
  return { status: "success", user: null };
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const credentials = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const redirectUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { error, data } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      emailRedirectTo: `${redirectUrl}`,
      data: {
        name: credentials.name,
      },
    },
  });

  if (error) {
    return { status: error.message, user: null };
  } else if (data?.user?.identities?.length === 0) {
    return { status: "User with this email already exists", user: null };
  }

  revalidatePath("/", "layout");
  redirect(redirectUrl || "/");
}
