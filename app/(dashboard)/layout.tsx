import { getCategories } from "@/actions/budget-actions";
import SidebarDesktop from "@/components/navigation/sidebarDesktop";
import SidebarMobile from "@/components/navigation/sidebarMobile";
import Theme from "@/components/navigation/Theme";
import DashboardProvider from "@/context/DashboardProvider";

const DashboardLayout = async ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const categoriesResponse = await getCategories();
  const categoriesData = (await categoriesResponse?.categories) || [];
  return (
    <div className="grid grid-cols-[auto_1fr] max-md:grid-cols-1 relative max-md:mb-[6rem]">
      <DashboardProvider categories={categoriesData}>
        <SidebarDesktop />
        <section className="container">
          <div className="mt-4 px-4">{children}</div>
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
