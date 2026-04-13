"use client"

import * as React from "react"
import Link from "next/link"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  FileTextIcon,
  HomeIcon,
  UsersIcon,
} from "lucide-react"

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: <HomeIcon />,
      isActive: true,
    },
    {
      title: "Content",
      url: "/dashboard",
      icon: <FileTextIcon />,
      items: [
        {
          title: "Events",
          url: "/dashboard/events",
        },
        {
          title: "Blogs",
          url: "/dashboard/blogs",
        },
        {
          title: "Teachings",
          url: "/dashboard/teachings",
        },
      ],
    },
    {
      title: "Community",
      url: "/dashboard",
      icon: <UsersIcon />,
      items: [
        {
          title: "Membership requests",
          url: "/dashboard/memberships",
        },
        {
          title: "Approved users",
          url: "/dashboard/memberships/approved",
        },
      ],
    },
  ],
}

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  user: { name: string; email: string; avatar?: string }
}) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <span className="text-sm font-bold">NW</span>
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate text-sm font-medium">Nazarian Worship</span>
                  <span className="truncate text-xs text-muted-foreground">Admin Panel</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user.name,
            email: user.email,
            avatar: user.avatar ?? "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
