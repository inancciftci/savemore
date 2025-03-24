"use server";

import { createClient } from "@/utils/supabase/server";

export const addPot = async (formData: FormData) => {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      status: "false",
      message: "Error fetching user data",
    };
  }

  const userID = userData?.user?.id;

  const potData = {
    user_id: userID,
    title: formData.get("title") as string,
    theme: formData.get("theme") as string,
    pot_target: formData.get("pot_target") as number | null,
  };

  const { data: insertData, error: insertError } = await supabase
    .from("pot")
    .insert(potData)
    .select();

  if (insertError) {
    return {
      status: "false",
      message: "Error inserting pot data",
    };
  }

  return {
    status: "success",
    pot: insertData,
  };
};

export const getPots = async () => {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      status: "false",
      message: "Error fetching user data.",
    };
  }

  const userID = userData?.user?.id;

  const { data: potsData, error: potsError } = await supabase
    .from("pot")
    .select("*")
    .eq("user_id", userID);

  if (potsError) {
    return {
      status: "false",
      message: "Error fetching pot data",
    };
  }

  return {
    status: "success",
    pots: potsData,
  };
};
