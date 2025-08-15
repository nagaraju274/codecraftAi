
import { AdminSidebar } from '@/components/layout/admin-sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { BotMessageSquare, PanelLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6 shadow-md">
                <div className="flex items-center gap-4">
                    <SidebarTrigger size="icon" variant="outline">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </SidebarTrigger>
                     <div className="flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-2.5">
                            <BotMessageSquare className="w-8 h-8 text-primary" />
                            <span className="font-bold text-lg">CodeCraft AI</span>
                        </Link>
                        <p className="text-xs text-muted-foreground ml-1">by Mine-Yours</p>
                    </div>
                </div>
                 <Button asChild>
                    <Link href="/">Back to Main Site</Link>
                </Button>
            </header>
            <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-muted/40">
              {children}
            </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
