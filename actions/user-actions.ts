"use server";

import { createClient } from "@/utils/supabase/server";

export const getUserDetails = async () => {
  const supabase = await createClient();

  const { data: userData, error } = await supabase.auth.getUser();

  if (error) {
    return {
      status: "false",
      message: "Error fetching user",
    };
  }

  const userId = userData?.user?.id;

  const { data: userDetails, error: userError } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", userId);

  if (userError) {
    return {
      status: "false",
      message: "Error fetching user details",
    };
  }

  return {
    status: "success",
    user: userDetails,
  };
};
