import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
    return (
       <footer className="bg-muted text-muted-foreground">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">CodeCraft AI</h3>
              <p className="text-sm">AI-powered platform to learn coding, build projects, and accelerate your development journey.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-foreground"><Github className="h-5 w-5" /></Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/playground" className="hover:text-foreground">Playground</Link></li>
                <li><Link href="/projects" className="hover:text-foreground">Project Builder</Link></li>
                <li><Link href="/learn" className="hover:text-foreground">Learning Paths</Link></li>
                <li><Link href="#" className="hover:text-foreground">AI Assistant</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground">Docs</Link></li>
                <li><Link href="#" className="hover:text-foreground">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-foreground">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                <li><a href="mailto:support@codecraft.ai" className="flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4" />support@codecraft.ai</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} CodeCraft AI. All rights reserved.</p>
          </div>
        </div>
       </footer>
    )
}