
import { Button } from '@/components/ui/button';
import { BotMessageSquare, PanelLeft, User, MessageCircleQuestion, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const navLinks = [
    { href: "/learn", label: "Learn", icon: null },
    { href: "/projects", label: "Projects", icon: null },
    { href: "/playground", label: "Playground", icon: null },
    { href: "/academics", label: "Academics", icon: GraduationCap },
    { href: "/ask-a-mentor", label: "Ask a Mentor", icon: MessageCircleQuestion },
    { href: "/community", label: "Community", icon: null },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
                            <SheetTitle className="sr-only">Main Menu</SheetTitle>
                            <nav className="grid gap-4 py-6">
                                {navLinks.map(link => (
                                    <Link href={link.href} key={link.href} className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2">
                                        {link.icon && <link.icon className="h-5 w-5" />}
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex flex-col items-start">
                    <Link href="/" className="flex items-center gap-2.5">
                        <BotMessageSquare className="w-8 h-8 text-primary" />
                        <span className="font-bold text-lg">CodeCraft AI</span>
                    </Link>
                    <p className="text-xs text-muted-foreground ml-1">by Mine-Yours</p>
                </div>
            </div>
            <nav className="hidden md:flex items-center gap-4">
                {navLinks.map(link => (
                    <Button asChild variant="ghost" key={link.href}>
                        <Link href={link.href} className="flex items-center gap-2">
                           {link.icon && <link.icon className="h-5 w-5" />}
                           {link.label}
                        </Link>
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
  );
}
