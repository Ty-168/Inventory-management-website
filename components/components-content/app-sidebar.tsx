"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
} from "lucide-react"


import { NavMain } from "@/components/components-content/nav-main"
import { NavUser } from "@/components/components-content/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/content-ui/sidebar"
import { IconArchive, IconBrandTabler, IconSettings, IconTag } from "@tabler/icons-react"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const loggedInUser = typeof window !== "undefined" 
    ? JSON.parse(localStorage.getItem("loggedInUser") || "{}") 
    : {};

  const data = {
    user: {
        name: loggedInUser.username,
        email: loggedInUser.email,
        avatar: "/assets/profile-pic.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
      },
      {
        title: "Inventory",
        url: "/dashboard/inventory",
        icon: <IconArchive className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
      },
      {
        title: "Product",
        url: "/dashboard/product",
        icon: <IconTag className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
      },
      {
        title: "Setting",
        url: "/dashboard/setting",
        icon: <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
      },
    ],

  }
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <span className="text-base font-semibold">Stocky.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />

      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
