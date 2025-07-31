"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BotMessageSquare, FolderKanban, BookOpenCheck, TerminalSquare, UserCircle } from "lucide-react"

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"

const mainLinks = [
  { href: "/playground", label: "Playground", icon: TerminalSquare },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/learn", label: "Learn", icon: BookOpenCheck },
]

const bottomLinks = [
    { href: "/profile", label: "Profile", icon: UserCircle },
]

export function MainSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2.5">
            <BotMessageSquare className="w-8 h-8 text-primary" />
            <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">CodeCraft AI</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
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
