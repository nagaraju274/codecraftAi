
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpenCheck, FolderKanban, TerminalSquare, Home } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar"

const mainLinks = [
  { href: "/playground", label: "Playground", icon: TerminalSquare },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/learn", label: "Learn", icon: BookOpenCheck },
]

export function MainSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent className="pt-4">
         <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton href="/" asChild isActive={pathname === "/"}>
                        <Link href="/">
                            <Home className="h-5 w-5" />
                            <span>Home</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
         </SidebarHeader>
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
    </Sidebar>
  )
}
