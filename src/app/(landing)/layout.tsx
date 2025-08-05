import Link from 'next/link';
import { BotMessageSquare } from 'lucide-react';
import { MainSidebar } from '@/components/layout/main-sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2.5">
                <BotMessageSquare className="w-8 h-8 text-primary" />
                <span className="font-bold text-lg">CodeCraft AI</span>
            </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
       <footer className="bg-muted py-6">
            <div className="container mx-auto px-4 sm:px-6 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} CodeCraft AI. All rights reserved.</p>
            </div>
       </footer>
    </div>
  );
}
