// This directive marks this component as a Client Component.
"use client"

// Import the Next.js Link component.
import Link from "next/link"
// Import the usePathname hook from Next.js to get the current URL path.
import { usePathname } from "next/navigation"
// Import icons from the lucide-react library.
import { Home, Compass, FolderKanban, BookCopy, Code, MessageCircleQuestion, Users, FileText, BotMessageSquare, LifeBuoy, BookOpen, GraduationCap, Briefcase, Gem, Trophy } from "lucide-react"

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
    { href: "/profile", label: "Dashboard", icon: Home },
    { href: "/learn", label: "Learning Paths", icon: Compass },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/playground", label: "Playground", icon: Code },
    { href: "/academics", label: "Academics", icon: GraduationCap },
    { href: "/placement", label: "Placement", icon: Briefcase },
    { href: "/treasure", label: "Treasure Trove", icon: Gem },
]

// Define the navigation links for the community/support part of the sidebar.
const secondaryLinks = [
    { href: "/ask-a-mentor", label: "Ask a Mentor", icon: MessageCircleQuestion },
    { href: "/community", label: "Community", icon: Users },
    { href: "/cheatsheets", label: "Cheat Sheets", icon: BookCopy },
    { href: "/glossary", label: "Glossary", icon: BookOpen },
]

// Define the navigation links for the help/documentation part of the sidebar.
const helpLinks = [
    { href: "/documentation", label: "Documentation", icon: FileText, disabled: false },
    { href: "/help", label: "Help & Support", icon: LifeBuoy, disabled: false },
]

// The main MainSidebar component.
export function MainSidebar() {
  // Get the current pathname to determine which link is active.
  const pathname = usePathname()

  // Return the JSX structure for the sidebar.
  return (
    <Sidebar>
      {/* The header section of the sidebar. */}
      <SidebarHeader>
        <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5">
                <BotMessageSquare className="w-8 h-8 text-primary" />
                <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">CodeCraft AI</span>
            </Link>
            <p className="text-xs text-muted-foreground ml-1 group-data-[collapsible=icon]:hidden">by Mine-Yours</p>
        </div>
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
        <SidebarSeparator />
         <SidebarMenu>
          {/* Map over the secondary links to create menu items. */}
          {secondaryLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(link.href)}
                tooltip={link.label}
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
      {/* The footer section of the sidebar. */}
      <SidebarFooter>
         <SidebarSeparator />
         <SidebarMenu>
            {/* Map over the help links to create menu items. */}
            {helpLinks.map((link) => (
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
