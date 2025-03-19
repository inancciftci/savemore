import SidebarDesktop from "@/components/navigation/sidebarDesktop";

const DashboardLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <SidebarDesktop />
      <section className="container">{children}</section>
    </div>
  );
};

export default DashboardLayout;
