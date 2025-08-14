
import { MainSidebar } from '@/components/layout/main-sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { BotMessageSquare, PanelLeft, User } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { href: "/learn", label: "Learn" },
    { href: "/projects", label: "Projects" },
    { href: "/playground", label: "Playground" },
    { href: "/community", label: "Community" },
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
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <PanelLeft className="h-5 w-5" />
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <nav className="grid gap-4 py-6">
                                    {navLinks.map(link => (
                                        <Link href={link.href} key={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
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
                    <Button asChild variant="ghost">
                      <Link href="/profile">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Profile</span>
                      </Link>
                    </Button>
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
