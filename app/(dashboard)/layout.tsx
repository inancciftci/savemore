import SidebarDesktop from "@/components/navigation/sidebarDesktop";

const DashboardLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] max-md:grid-cols-1">
      <SidebarDesktop />
      <section className="container">
        <div className="mt-4 px-4">{children}</div>
      </section>
    </div>
  );
};

export default DashboardLayout;
