import { AppSidebar } from "@/components/components-content/app-sidebar"
import { ChartAreaInteractive } from "@/components/components-content/chart-area-interactive"
import { SectionCards } from "@/components/components-content/section-cards"
import { SiteHeader } from "@/components/components-content/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/content-ui/sidebar"

import { ChartBar } from "@/components/components-content/barchart"
import { ProductList } from "@/components/components-content/productcard"
import { Inventory } from "@/components/components-content/inventory"

export default function InventoryPage() {
  return (
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col px-6 h-screen">
            <Inventory/>
        </div>
      </SidebarInset>
  );
}
