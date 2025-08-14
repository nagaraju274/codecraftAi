import Link from 'next/link';
import { BotMessageSquare, PanelLeft } from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { AuthButtons } from '@/components/layout/auth-buttons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { href: "/learn", label: "Learn" },
    { href: "/projects", label: "Projects" },
    { href: "/playground", label: "Playground" },
    { href: "/about", label: "About Us" },
];

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-4 flex-shrink-0">
                 <div className="flex flex-col items-start">
                    <Link href="/" className="flex items-center gap-2.5">
                        <BotMessageSquare className="w-8 h-8 text-primary" />
                        <span className="font-bold text-lg">CodeCraft AI</span>
                    </Link>
                    <p className="text-xs text-muted-foreground ml-1">by Mine-Yours</p>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-2">
                {navLinks.map(link => (
                    <Button asChild variant="ghost" key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </Button>
                ))}
            </nav>
            <div className="hidden md:flex items-center gap-2">
                <AuthButtons />
            </div>

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
                            <div className="flex flex-col gap-2 pt-4">
                                <AuthButtons />
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
