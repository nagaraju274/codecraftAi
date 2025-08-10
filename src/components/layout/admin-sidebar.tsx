
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, BookCopy, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator
} from "@/components/ui/sidebar"

const mainLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/users", label: "User Management", icon: Users },
    { href: "/admin/content", label: "Content", icon: BookCopy, disabled: false },
]

const settingsLinks = [
    { href: "/admin/settings", label: "Settings", icon: Settings, disabled: true },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">Admin Panel</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(link.href)}
                tooltip={link.label}
                disabled={link.disabled}
                aria-disabled={link.disabled}
              >
                <Link href={link.href}>
                  <link.icon className="h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
       <SidebarFooter>
         <SidebarSeparator />
         <SidebarMenu>
             {settingsLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(link.href)}
                    tooltip={link.label}
                    disabled={link.disabled}
                    aria-disabled={link.disabled}
                >
                    <Link href={link.href}>
                    <link.icon className="h-5 w-5" />
                    <span className="group-data-[collapsible=icon]:hidden">{link.label}</span>
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
