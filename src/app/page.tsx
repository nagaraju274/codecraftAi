import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Bot, BookOpenCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: <Code className="w-10 h-10 text-primary" />,
        title: "Interactive Playground",
        description: "Experiment with code in a real-time editor with an integrated console. Run JavaScript or Python snippets instantly."
    },
    {
        icon: <Bot className="w-10 h-10 text-primary" />,
        title: "AI-Powered Assistance",
        description: "Get unstuck with AI-powered code fixing, explanations, and generation, right within your development workflow."
    },
    {
        icon: <BookOpenCheck className="w-10 h-10 text-primary" />,
        title: "Guided Learning",
        description: "Follow structured learning paths and build projects step-by-step with AI hints to master new technologies."
    }
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Learn to Code, Build with AI</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            CodeCraft AI is your personal coding tutor. Master new skills with interactive lessons, build real projects with AI assistance, and accelerate your development journey.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/playground">
                Get Started
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="relative aspect-video max-w-4xl mx-auto">
                <Image 
                    src="https://placehold.co/1200x675.png" 
                    alt="CodeCraft AI Platform Screenshot"
                    fill
                    className="rounded-xl shadow-2xl object-cover"
                    data-ai-hint="app screenshot"
                />
            </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Succeed</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              A comprehensive toolset to take you from beginner to proficient developer.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Building?</h2>
            <p className="mt-2 max-w-xl mx-auto text-muted-foreground">
                Jump into the playground and start your coding adventure today.
            </p>
            <div className="mt-8">
                <Button asChild size="lg">
                <Link href="/playground">
                    Start Coding Now
                    <ArrowRight className="ml-2" />
                </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
