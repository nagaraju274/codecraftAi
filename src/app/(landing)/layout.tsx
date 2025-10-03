
import Link from 'next/link';
// Import the BotMessageSquare and Menu icons from the lucide-react library.
import { BotMessageSquare, Menu } from 'lucide-react';
// Import the Footer component from the layout components.
import { Footer } from '@/components/layout/footer';
// Import the Button component from the UI library.
import { Button } from '@/components/ui/button';
// Import the AuthButtons component for handling authentication-related UI.
import { AuthButtons } from '@/components/layout/auth-buttons';
// Import Sheet components for the mobile menu drawer.
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

// An array of navigation links to be displayed in the header.
const navLinks = [
    { href: "/learn", label: "Learn" },
    { href: "/projects", label: "Projects" },
    { href: "/playground", label: "Playground" },
    { href: "/about", label: "About Us" },
];

// This is the layout component for the landing pages.
export default function LandingLayout({
  children, // The children prop will be the actual page content.
}: {
  children: React.ReactNode; // Type definition for the children prop.
}) {
  return (
    // The main container for the layout, using flexbox to ensure the footer stays at the bottom.
    <div className="flex flex-col min-h-screen">
      {/* The header element, sticky at the top with a blurred background effect. */}
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm shadow-md">
        {/* Container to center the header content and apply padding. */}
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
            {/* Left section of the header, containing the logo. */}
            <div className="flex items-center gap-4 flex-shrink-0">
                 {/* Container for the logo and company subtitle. */}
                 <div className="flex flex-col items-start">
                    {/* The main logo, linking to the homepage. */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <BotMessageSquare className="w-8 h-8 text-primary" />
                        <span className="font-bold text-lg">CodeCraft AI</span>
                    </Link>
                    {/* The subtitle for the company. */}
                    <p className="text-xs text-muted-foreground ml-1">by Mine-Yours</p>
                </div>
            </div>

            {/* The main navigation menu for medium screens and up. */}
            <nav className="hidden md:flex items-center gap-2">
                {/* Map through the navLinks array to create a button for each link. */}
                {navLinks.map(link => (
                    // The Button component is used with `asChild` to pass its styling to the Link component.
                    <Button asChild variant="ghost" key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </Button>
                ))}
            </nav>
            {/* Container for authentication buttons on medium screens and up. */}
            <div className="hidden md:flex items-center gap-2">
                <AuthButtons />
            </div>

            {/* The mobile menu, hidden on medium screens and up. */}
            <div className="md:hidden">
                {/* The Sheet component provides the drawer/off-canvas functionality. */}
                <Sheet>
                    {/* The trigger for the mobile menu sheet. */}
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    {/* The content of the mobile menu sheet. */}
                    <SheetContent side="left">
                        <SheetTitle className="sr-only">Main Menu</SheetTitle>
                        {/* Navigation links inside the mobile menu. */}
                        <nav className="grid gap-4 py-6">
                             {/* Map through the navLinks array to create links. */}
                             {navLinks.map(link => (
                                <Link href={link.href} key={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                            {/* Container for authentication buttons inside the mobile menu. */}
                            <div className="flex flex-col gap-2 pt-4">
                                <AuthButtons />
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </header>
      {/* The main content area where the page content (children) will be rendered. */}
      <main className="flex-1">{children}</main>
      {/* The application footer. */}
      <Footer />
    </div>
  );
}
