"use server";

import { createClient } from "@/utils/supabase/server";

export const addTransaction = async (data: FormData) => {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      status: "false",
      message: "Error fetching user data",
    };
  }

  const userId = userData?.user?.id;

  const transactionData: {
    user_id: string;
    recipient_sender: FormDataEntryValue | null;
    amount: FormDataEntryValue | null;
    type: FormDataEntryValue | null;
    budget_id?: string;
  } = {
    user_id: userId,
    recipient_sender: data.get("recipient_sender"),
    amount: data.get("amount"),
    type: data.get("type"),
  };

  if (data.get("budget_id")) {
    transactionData.budget_id = data.get("budget_id") as string;
  }

  const { data: insertData, error: insertError } = await supabase
    .from("transaction")
    .insert(transactionData)
    .select();

  if (insertError) {
    return {
      status: "false",
      message: "Error inserting transaction",
    };
  }

  return {
    status: "true",
    transaction: insertData,
  };
};

export const getTransactions = async () => {
  const supabase = await createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      status: "false",
      message: "Error fetching user data",
    };
  }

  const userId = userData?.user?.id;

  const { data: transactionData, error: transactionError } = await supabase
    .from("transaction")
    .select(
      `
    id, created_at, user_id, recipient_sender, amount, type, budget_id,
    budget:budget_id (
      id, category_id,
      categories:category_id (title)
    )
  `
    )
    .eq("user_id", userId);

  if (transactionError) {
    return {
      status: "false",
      message: "Error fetching transactions",
    };
  }

  const formattedTransactions =
    transactionData?.map((transaction) => ({
      ...transaction,
      budget:
        transaction.budget && transaction.budget.length > 0
          ? {
              id: transaction.budget[0].id,
              category_id: transaction.budget[0].category_id,
              categories:
                transaction.budget[0].categories &&
                transaction.budget[0].categories.length > 0
                  ? { title: transaction.budget[0].categories[0].title }
                  : { title: "" },
            }
          : undefined,
    })) || [];

  return {
    status: "true",
    transactions: formattedTransactions,
  };
};
