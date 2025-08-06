import { MainSidebar } from '@/components/layout/main-sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { BotMessageSquare, PanelLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer';

const navLinks = [
    { href: "/learn", label: "Learn" },
    { href: "/projects", label: "Projects" },
    { href: "/playground", label: "Playground" },
    { href: "/about", label: "About Us" },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6 shadow-md">
                <div className="flex items-center gap-4">
                    <SidebarTrigger size="icon" variant="outline" className="md:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </SidebarTrigger>
                    <Link href="/" className="flex items-center gap-2.5">
                        <BotMessageSquare className="w-8 h-8 text-primary" />
                        <span className="font-bold text-lg">CodeCraft AI</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-4">
                    {navLinks.map(link => (
                        <Button asChild variant="ghost" key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </Button>
                    ))}
                </nav>
            </header>
            <main className="flex-1 p-4 sm:p-6 lg:p-8">
              {children}
            </main>
            <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
