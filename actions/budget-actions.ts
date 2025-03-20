"use server";

import { createClient } from "@/utils/supabase/server";

export const getCategories = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    return null;
  }
  return { status: "success", categories: data };
};
