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

export const getBudgets = async () => {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      status: "false",
      message: "Error fetching user",
    };
  }

  const userId = userData?.user?.id;

  const { data: budgetData, error: budgetError } = await supabase
    .from("budget")
    .select(
      `
      id,
      created_at,
      maximum_spend,
      theme,
      user_id,
      category:category_id(id, title)
    `
    )
    .eq("user_id", userId);

  if (budgetError) {
    return {
      status: "false",
      message: "Error fetching budgets.",
    };
  }

  const transformedBudgetData = budgetData.map((budget) => ({
    ...budget,
    category: Array.isArray(budget.category)
      ? budget.category[0]
      : budget.category,
  }));

  return {
    status: "success",
    budgets: transformedBudgetData,
  };
};

export const createBudget = async (formData: FormData) => {
  const supabase = await createClient();

  const { data: userData, error: userFetchError } =
    await supabase.auth.getUser();

  if (userFetchError) {
    return {
      success: false,
      message: "Error fetching user",
    };
  }

  const userId = userData.user.id;

  const budgetData = {
    category_id: Number(formData.get("categoryTitle")),
    maximum_spend: formData.get("maximumSpend"),
    theme: formData.get("Theme"),
    user_id: userId,
  };

  const { data: insertedData, error: insertError } = await supabase
    .from("budget")
    .insert(budgetData);

  if (insertError) {
    return {
      success: false,
      message: "Error inserting budget data",
    };
  }

  return {
    success: true,
    message: "Budget added successfully",
    budget: insertedData,
  };
};
