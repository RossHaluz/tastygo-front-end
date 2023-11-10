import AdminHeader from "@/components/AdminDashboard/AdminHeader";
import AdminMobileMenu from "@/components/AdminDashboard/AdminMobileMenu";

export default function DashboardLaypout({ children }) {
  return (
    <div>
      <AdminMobileMenu />
      <AdminHeader />
      {children}
    </div>
  );
}
