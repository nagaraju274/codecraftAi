
// Import the Button component from the UI library.
import { Button } from '@/components/ui/button';
// Import various icons from the lucide-react library.
import { BotMessageSquare, Menu, User, MessageCircleQuestion, GraduationCap, Briefcase, Gem } from 'lucide-react';
// Import the Next.js Link component for client-side navigation.
import Link from 'next/link';
// Import the Footer component.
import { Footer } from '@/components/layout/footer';
// Import Sheet components for the mobile menu drawer.
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

// An array of navigation link objects to be displayed in the header.
const navLinks = [
    // Each object represents a link with its URL, label, and an optional icon.
    { href: "/learn", label: "Road maps", icon: null },
    { href: "/projects", label: "Projects", icon: null },
    { href: "/playground", label: "Playground", icon: null },
    { href: "/academics", label: "Academics", icon: GraduationCap },
    { href: "/placement", label: "Placement", icon: Briefcase },
    { href: "/treasure", label: "Treasure Trove", icon: Gem },
    { href: "/ask-a-mentor", label: "Ask a Mentor", icon: MessageCircleQuestion },
    { href: "/community", label: "Community", icon: null },
];

// This is the layout component for the main application pages (e.g., dashboard, learn, projects).
export default function MainLayout({
  children, // The children prop will be the content of the specific page.
}: {
  children: React.ReactNode; // Type definition for the children prop.
}) {
  return (
    // The main container for the layout, using flexbox to ensure the footer stays at the bottom.
    <div className="flex flex-col min-h-screen">
        {/* The header element, sticky at the top with a border and shadow. */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6 shadow-md">
            {/* Container for left-aligned header items. */}
            <div className="flex items-center gap-4">
                {/* The mobile menu, hidden on large screens and up. */}
                <div className="lg:hidden">
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
                                    <Link href={link.href} key={link.href} className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2">
                                        {/* Render the icon if it exists for the link. */}
                                        {link.icon && <link.icon className="h-5 w-5" />}
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                {/* Container for the logo and company subtitle. */}
                <div className="flex flex-col items-start">
                    {/* The main logo, linking to the homepage. */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <BotMessageSquare className="w-8 h-8 text-primary" />
                        <span className="font-bold text-lg">CodeCraft AI</span>
                    </Link>
                    <p className="text-xs text-muted-foreground ml-1">by Mine-Yours</p>
                </div>
            </div>
            {/* The main navigation menu for large screens and up. */}
            <nav className="hidden lg:flex items-center gap-4">
                {/* Map through the navLinks array to create a button for each link. */}
                {navLinks.map(link => (
                    // The Button component is used with `asChild` to pass its styling to the Link component.
                    <Button asChild variant="ghost" key={link.href}>
                        <Link href={link.href} className="flex items-center gap-2">
                           {/* Render the icon if it exists for the link. */}
                           {link.icon && <link.icon className="h-5 w-5" />}
                           {link.label}
                        </Link>
                    </Button>
                ))}
                {/* A link to the user's profile page, styled as a ghost button. */}
                <Button asChild variant="ghost">
                  <Link href="/profile">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Profile</span>
                  </Link>
                </Button>
            </nav>
        </header>
        {/* The main content area where the page content (children) will be rendered. */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        {/* The application footer. */}
        <Footer />
    </div>
  );
}
