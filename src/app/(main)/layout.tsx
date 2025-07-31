import { MainSidebar } from '@/components/layout/main-sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarTrigger size="icon" variant="outline">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </SidebarTrigger>
        </header>
        <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
