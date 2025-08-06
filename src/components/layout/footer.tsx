import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, BotMessageSquare } from 'lucide-react';

export function Footer() {
    return (
       <footer className="bg-muted text-muted-foreground">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2.5 text-foreground">
                  <BotMessageSquare className="w-8 h-8 text-primary" />
                  <span className="font-bold text-lg">CodeCraft AI</span>
              </Link>
              <p className="text-sm">
                Mine-Yours is a dynamic, student-led software company where innovation meets opportunity. We're passionate about building cutting-edge tech products while also offering our expertise through professional freelance services, bringing fresh ideas to life.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-foreground"><Github className="h-5 w-5" /></Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-foreground">About Mine-Yours</Link></li>
                <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                <li><a href="mailto:contact@mine-yours.com" className="flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4" />Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/playground" className="hover:text-foreground">Interactive Playground</Link></li>
                <li><Link href="/projects" className="hover:text-foreground">AI Project Builder</Link></li>
                <li><Link href="/learn" className="hover:text-foreground">Guided Learning Paths</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-foreground">Freelance Offerings</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-center text-sm">
            <p>Made by Mine-Yours</p>
          </div>
        </div>
       </footer>
    )
}
