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
