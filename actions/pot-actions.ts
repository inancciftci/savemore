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

export const addMoneyToPot = async (
  potId: number,
  amount: number,
  userFullName: string
) => {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      status: "false",
      message: "Error fetching user",
    };
  }

  const userId = userData?.user?.id;

  const transactionData = {
    user_id: userId,
    recipient_sender: userFullName,
    amount: amount,
    type: "out",
    pot_id: potId,
  };

  const { data: insertData, error: insertError } = await supabase
    .from("transaction")
    .insert(transactionData);

  if (insertError) {
    return {
      status: "false",
      message: "Error inserting pot data",
    };
  }

  return {
    status: "success",
    transaction: insertData,
  };
};

export const deletePot = async (potId: number) => {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      status: "false",
      message: "Error fetching user data",
    };
  }

  const userId = userData?.user?.id;

  const { error: deleteError } = await supabase
    .from("pot")
    .delete()
    .eq("id", potId)
    .eq("user_id", userId);

  if (deleteError) {
    return {
      status: "false",
      message: "Error deleting pot",
    };
  }
  return {
    status: "success",
    message: "Pot deleted succesfully",
  };
};
