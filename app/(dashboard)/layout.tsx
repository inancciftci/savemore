import SidebarDesktop from "@/components/navigation/sidebarDesktop";
import SidebarMobile from "@/components/navigation/sidebarMobile";

const DashboardLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] max-md:grid-cols-1 relative max-md:mb-[6rem]">
      <SidebarDesktop />
      <section className="container">
        <div className="mt-4 px-4">{children}</div>
      </section>
      <SidebarMobile />
    </div>
  );
};

export default DashboardLayout;
