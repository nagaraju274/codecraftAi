// Import the AdminSidebar component.
import { AdminSidebar } from '@/components/layout/admin-sidebar';
// Import sidebar components from the UI library.
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
// Import the Button component.
import { Button } from '@/components/ui/button';
// Import icons from the lucide-react library.
import { BotMessageSquare, PanelLeft } from 'lucide-react';
// Import the Next.js Link component.
import Link from 'next/link';
// Import the Footer component.
import { Footer } from '@/components/layout/footer';

// Define the layout component for the admin section.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return the JSX structure for the admin layout.
  return (
    // Provides the context for the sidebar state.
    <SidebarProvider>
      {/* The main sidebar component for admin navigation. */}
      <AdminSidebar />
      {/* A component that adjusts its margin based on the sidebar's state. */}
      <SidebarInset>
        {/* Main container for the page content. */}
        <div className="flex flex-col min-h-screen">
            {/* The header of the admin panel. */}
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6 shadow-md">
                {/* Container for left-aligned header items. */}
                <div className="flex items-center gap-4">
                    {/* The button to toggle the sidebar's visibility. */}
                    <SidebarTrigger size="icon" variant="outline">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </SidebarTrigger>
                     {/* The site logo and name. */}
                     <div className="flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-2.5">
                            <BotMessageSquare className="w-8 h-8 text-primary" />
                            <span className="font-bold text-lg">CodeCraft AI</span>
                        </Link>
                        <p className="text-xs text-muted-foreground ml-1">by Mine-Yours</p>
                    </div>
                </div>
                 {/* A button that links back to the main site. */}
                 <Button asChild>
                    <Link href="/">Back to Main Site</Link>
                </Button>
            </header>
            {/* The main content area where child pages will be rendered. */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-muted/40">
              {children}
            </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
