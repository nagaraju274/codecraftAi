import Link from 'next/link';
import { BotMessageSquare } from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { AuthButtons } from '@/components/layout/auth-buttons';

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
            <div className="flex flex-col items-start">
                <Link href="/" className="flex items-center gap-2.5">
                    <BotMessageSquare className="w-8 h-8 text-primary" />
                    <span className="font-bold text-lg">CodeCraft AI</span>
                </Link>
                <p className="text-xs text-muted-foreground ml-1">by Mine-Yours</p>
            </div>
            <nav className="hidden md:flex items-center gap-2">
                {navLinks.map(link => (
                    <Button asChild variant="ghost" key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </Button>
                ))}
                 <div className="flex items-center gap-2 ml-4">
                    <AuthButtons />
                </div>
            </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
