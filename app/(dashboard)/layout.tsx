import { getBudgets, getCategories } from "@/actions/budget-actions";
import { getPots } from "@/actions/pot-actions";
import { getTransactions } from "@/actions/transaction-actions";
import { getUserDetails } from "@/actions/user-actions";
import SidebarDesktop from "@/components/navigation/sidebarDesktop";
import SidebarMobile from "@/components/navigation/sidebarMobile";
import Theme from "@/components/navigation/Theme";
import DashboardProvider from "@/context/DashboardProvider";
import { calculateBalance } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const [
    userResponse,
    transactionsResponse,
    categoriesResponse,
    potsResponse,
    budgetsResponse,
  ] = await Promise.all([
    getUserDetails(),
    getTransactions(),
    getCategories(),
    getPots(),
    getBudgets(),
  ]);

  const userData = userResponse?.user || "";
  const transactionsData = transactionsResponse?.transactions || [];
  const categoriesData = categoriesResponse?.categories || [];
  const potsData = potsResponse?.pots || [];
  const budgetsData = budgetsResponse?.budgets || [];
  const totalBalance = calculateBalance(transactionsData);
  return (
    <div className="grid grid-cols-[auto_1fr] max-md:grid-cols-1 relative max-md:mb-[6rem]">
      <DashboardProvider
        totalBalance={totalBalance}
        user={userData[0]}
        categories={categoriesData}
        budgets={budgetsData}
        transactions={transactionsData}
        pots={potsData}
      >
        <SidebarDesktop />
        <section className="container">
          <div className="mt-4 px-4">{children}</div>
        </section>
        <SidebarMobile />
        <div className="hidden max-md:flex absolute top-[1rem] right-[1rem]">
          <Theme />
        </div>
        <Toaster />
      </DashboardProvider>
    </div>
  );
};

export default DashboardLayout;
