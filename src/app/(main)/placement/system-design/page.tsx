
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Server, Database, Layers, Scaling } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const coreConcepts = [
    {
        icon: Scaling,
        title: "Scalability",
        description: "Designing a system that can handle growing amounts of work. This includes both vertical (increasing a single server's resources) and horizontal (adding more servers) scaling.",
    },
    {
        icon: Layers,
        title: "Load Balancing",
        description: "Distributing incoming network traffic across multiple servers to ensure no single server is overworked, improving response times and availability.",
    },
    {
        icon: Database,
        title: "Caching",
        description: "Storing copies of frequently accessed data in a temporary storage location (a cache) to serve future requests faster.",
    },
    {
        icon: Server,
        title: "Databases",
        description: "Choosing the right database (SQL vs. NoSQL) based on the application's needs for consistency, availability, and partition tolerance (CAP Theorem).",
    },
];

export default function SystemDesignPage() {
    return (
        <AuthGuard>
            <div className="container mx-auto py-10 space-y-8">
                <Button asChild variant="ghost" className="mb-4 self-start">
                    <Link href="/placement">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Placement Prep
                    </Link>
                </Button>

                 <header className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">System Design Basics</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        An introduction to the core concepts needed to design scalable and reliable systems.
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-6">
                    {coreConcepts.map(concept => (
                         <Card key={concept.title}>
                            <CardHeader className="flex-row items-start gap-4">
                                 <div className="bg-primary/10 p-3 rounded-full">
                                    <concept.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>{concept.title}</CardTitle>
                                    <CardDescription className="pt-2">{concept.description}</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Common Interview Problems</CardTitle>
                        <CardDescription>Practice applying these concepts to common design questions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Design a URL Shortener (like TinyURL)</AccordionTrigger>
                                <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                                    <p>Coming soon: A detailed breakdown of designing a URL shortening service, including API design, data model, and handling hash collisions.</p>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-2">
                                <AccordionTrigger>Design a Social Media Feed (like Twitter or Facebook)</AccordionTrigger>
                                <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                                     <p>Coming soon: A guide to designing a feed system, including trade-offs between a 'pull' (fan-out-on-read) and 'push' (fan-out-on-write) model.</p>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-3">
                                <AccordionTrigger>Design a Ride-Sharing App (like Uber or Lyft)</AccordionTrigger>
                                <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                                     <p>Coming soon: An overview of designing a location-based service, including how to efficiently match riders and drivers.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </AuthGuard>
    )
}
