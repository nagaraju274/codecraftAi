"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpenCheck, FolderKanban, TerminalSquare, UserCircle } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const mainLinks = [
  { href: "/playground", label: "Playground", icon: TerminalSquare },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/learn", label: "Learn", icon: BookOpenCheck },
]

const bottomLinks = [
    { href: "/profile", label: "Dashboard", icon: UserCircle },
]

export function MainSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent className="pt-4">
        <SidebarMenu>
          {mainLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(link.href)}
                tooltip={link.label}
              >
                <Link href={link.href}>
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         <SidebarMenu>
            {bottomLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton asChild isActive={pathname.startsWith(link.href)} tooltip={link.label}>
                        <Link href={link.href}>
                            <link.icon className="h-5 w-5" />
                            <span>{link.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
