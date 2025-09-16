// This directive marks this component as a Client Component.
"use client"

// Import the Next.js Link component.
import Link from "next/link"
// Import the usePathname hook from Next.js to get the current URL path.
import { usePathname } from "next/navigation"
// Import icons from the lucide-react library.
import { LayoutDashboard, Users, BookCopy, Settings } from "lucide-react"

// Import sidebar components from the UI library.
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

// Define the navigation links for the main part of the sidebar.
const mainLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/users", label: "User Management", icon: Users },
    { href: "/admin/content", label: "Content", icon: BookCopy, disabled: false },
]

// Define the navigation links for the settings part of the sidebar.
const settingsLinks = [
    { href: "/admin/settings", label: "Settings", icon: Settings, disabled: false },
]

// The main AdminSidebar component.
export function AdminSidebar() {
  // Get the current pathname to determine which link is active.
  const pathname = usePathname()

  // Return the JSX structure for the sidebar.
  return (
    <Sidebar>
      {/* The header section of the sidebar. */}
      <SidebarHeader>
        <h2 className="text-lg font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">Admin Panel</h2>
      </SidebarHeader>
      {/* The main content area of the sidebar. */}
      <SidebarContent>
        <SidebarMenu>
          {/* Map over the main links to create menu items. */}
          {mainLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild // Allows the button to wrap a Link component.
                isActive={pathname.startsWith(link.href)} // Set as active if the current path starts with the link's href.
                tooltip={link.label} // Tooltip text to show when the sidebar is collapsed.
                disabled={link.disabled} // Disable the button if specified.
                aria-disabled={link.disabled}
              >
                <Link href={link.href}>
                  <link.icon className="h-5 w-5" />
                  {/* The label is hidden when the sidebar is collapsed to an icon-only view. */}
                  <span className="group-data-[collapsible=icon]:hidden">{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
       {/* The footer section of the sidebar. */}
       <SidebarFooter>
         <SidebarSeparator />
         <SidebarMenu>
             {/* Map over the settings links to create menu items. */}
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
