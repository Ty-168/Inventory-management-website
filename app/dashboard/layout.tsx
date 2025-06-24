import "@/styles/globals.css";
import { AppSidebar } from "@/components/components-content/app-sidebar"
import { SidebarProvider } from "@/components/ui/content-ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
        {children}
    </SidebarProvider>
  );
}
