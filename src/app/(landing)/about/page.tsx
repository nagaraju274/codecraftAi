
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BotMessageSquare, Users, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CodeCraft AI & Mine-Yours',
  description: 'Learn about CodeCraft AI, a product by Mine-Yours. Discover our mission to empower developers and our story as a student-led software company.',
}

const otherProducts = [
    {
        name: "AI Project Builder",
        description: "Build functional applications with AI-guided assistance.",
        href: "/projects"
    },
    {
        name: "Guided Road maps",
        description: "Master new technologies with structured, hands-on tutorials.",
        href: "/learn"
    }
];


export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-20">
        
        {/* Product Intro */}
        <section className="text-center max-w-4xl mx-auto">
          <BotMessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            About CodeCraft AI
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            CodeCraft AI is a revolutionary platform designed to empower the next generation of developers. We believe that learning to code should be an intuitive, engaging, and accelerated experience. By integrating cutting-edge AI assistance directly into the development workflow, we provide real-time code fixing, interactive explanations, and guided project-building to take you from concept to creation faster than ever before.
          </p>
        </section>

        <div className="border-b my-20"></div>

        {/* Built by Mine-Yours Section */}
        <section className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Rocket className="w-8 h-8 text-primary" />
                Built by Mine-Yours
            </h2>

            {/* Company Mission */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="mt-3 text-lg text-muted-foreground">
                    At Mine-Yours, our mission is to solve real-world problems through innovative software products and to empower individuals and startups by offering reliable, accessible, and affordable technical services. We believe that everyone with an idea deserves the technology to build it. Whether it’s a ride-sharing solution, an AI-powered pet care app, or a student from a small town looking to launch a startup — we are here to say: 🧠 “Our innovation is yours to use. Your ideas are ours to support.”
                </p>
            </div>
            
            {/* Student-led Origin */}
             <div className="mt-12">
                <h3 className="text-2xl font-semibold">Our Story</h3>
                <div className="mt-3 text-lg text-muted-foreground space-y-4">
                  <p>In a small room in Hyderabad, a group of ten passionate students — each with dreams bigger than their skills — decided to build more than just projects. They built a vision. “Mine-Yours” was born from a simple but powerful idea: “My ideas are solutions to your problems.” The ‘Mine’ represents our original innovations — products that solve real-world problems like rural transportation, agricultural support, pet care, and digital education. The ‘Yours’ symbolizes the services we offer — helping others turn their ideas into reality through web and app development, AI integration, UI/UX, branding, and tech consulting. What started as a student-driven initiative is growing into a next-generation software company — one that doesn’t just serve clients or users, but supports innovators like us, who only needed a hand to turn dreams into software. We’re not just building tech — we’re building a movement of creators, collaborators, and problem-solvers.</p>
                </div>
            </div>

             {/* Other Products */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-8">Discover Our Other Innovations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {otherProducts.map((product) => (
                      <Card key={product.name} className="text-left">
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{product.description}</p>
                             <Button asChild variant="link" className="p-0 h-auto mt-4">
                                <Link href={product.href}>Learn more</Link>
                            </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-20 bg-muted/50 p-10 rounded-xl">
                 <h3 className="text-2xl font-semibold">Ready to Collaborate?</h3>
                 <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                    Whether you have a project in mind or want to learn more about our work, we'd love to connect.
                 </p>
                <Button asChild size="lg" className="mt-6">
                    <Link href="/contact">
                        Contact Us <ArrowRight className="ml-2"/>
                    </Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
