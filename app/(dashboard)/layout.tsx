import { getBudgets, getCategories } from "@/actions/budget-actions";
import { getTransactions } from "@/actions/transaction-actions";
import { getUserDetails } from "@/actions/user-actions";
import SidebarDesktop from "@/components/navigation/sidebarDesktop";
import SidebarMobile from "@/components/navigation/sidebarMobile";
import Theme from "@/components/navigation/Theme";
import DashboardProvider from "@/context/DashboardProvider";

const DashboardLayout = async ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const userResponse = await getUserDetails();
  const userData = (await userResponse.user) || [];
  const transcationsResponse = await getTransactions();
  const transactionsData = (await transcationsResponse?.transactions) || [];
  const categoriesResponse = await getCategories();
  const categoriesData = (await categoriesResponse?.categories) || [];
  const budgetsResponse = await getBudgets();
  const budgetsData = (await budgetsResponse?.budgets) || [];
  return (
    <div className="grid grid-cols-[auto_1fr] max-md:grid-cols-1 relative max-md:mb-[6rem]">
      <DashboardProvider
        user={userData[0]}
        categories={categoriesData}
        budgets={budgetsData}
        transactions={transactionsData}
      >
        <SidebarDesktop />
        <section className="container">
          <div className="mt-4 px-4"> {children}</div>
        </section>
        <SidebarMobile />
        <div className="hidden max-md:flex absolute top-[1rem] right-[1rem]">
          <Theme />
        </div>
      </DashboardProvider>
    </div>
  );
};

export default DashboardLayout;
