interface ICategory {
  id: number;
  created_at: string;
  title: string;
}

interface IBudget {
  id?: number;
  created_at?: string;
  maximum_spend: number;
  theme: string;
  user_id?: string;
  category: {
    id: number;
    title: string;
  };
}

interface IUser {
  avatar_url?: string;
  created_at?: string;
  email: string;
  first_name: string;
  last_name: string;
  id: string;
}

interface ITransaction {
  amount: number;
  budget_id?: number;
  budget?: {
    id: number;
    categories: {
      title: string;
    };
    category_id: number;
  } | null;
  created_at: string;
  id: number;
  recipient_sender: string;
  type: string;
  user_id: string;
  pot_id?: number;
  pot: {
    id: number;
    title: string;
  };
}

interface IPot {
  created_at?: string;
  id: number;
  theme: string;
  title: string;
  user_id?: string;
  pot_target: number;
}
