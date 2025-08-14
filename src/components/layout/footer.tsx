
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, BotMessageSquare } from 'lucide-react';

export function Footer() {
    return (
       <footer className="bg-muted text-muted-foreground">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="space-y-4 md:col-span-3 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 text-foreground">
                  <BotMessageSquare className="w-8 h-8 text-primary" />
                  <span className="font-bold text-lg">CodeCraft AI</span>
              </Link>
              <p className="text-sm">
                A revolutionary platform designed to empower the next generation of developers through AI-powered tools and guided learning.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-foreground"><Github className="h-5 w-5" /></Link>
              </div>
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
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-foreground">About Mine-Yours</Link></li>
                <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                <li><a href="mailto:contact@mine-yours.com" className="flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4" />Contact</a></li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/documentation" className="hover:text-foreground">Documentation</Link></li>
                <li><Link href="/community" className="hover:text-foreground">Community Forum</Link></li>
                <li><Link href="#" className="hover:text-foreground">Cheat Sheets</Link></li>
                <li><Link href="#" className="hover:text-foreground">Glossary</Link></li>
                <li><Link href="#" className="hover:text-foreground">Study Plan Generator</Link></li>
                <li><Link href="#" className="hover:text-foreground">Time Management</Link></li>
                <li><Link href="#" className="hover:text-foreground">Growth Mindset & Motivation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-foreground">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-center text-sm">
            <p>Built with ❤️ by Mine-Yours. All rights reserved.</p>
          </div>
        </div>
       </footer>
    )
}
