import { AppSidebar } from "@/components/components-content/app-sidebar"
import { ChartAreaInteractive } from "@/components/components-content/chart-area-interactive"
import { SectionCards } from "@/components/components-content/section-cards"
import { SiteHeader } from "@/components/components-content/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/content-ui/sidebar"

import data from "./data.json"
import { ChartBar } from "@/components/components-content/barchart"
import { ProductList } from "@/components/components-content/productcard"

export default function DashboardPage() {
  return (
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:px-6">
                <ChartAreaInteractive />
                <ChartBar />
              </div>
              <ProductList/>
            </div>
          </div>
        </div>
      </SidebarInset>
  )
}
