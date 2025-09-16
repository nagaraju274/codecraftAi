
"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AuthGuard } from "@/components/auth/auth-guard";
import { ArrowRight, Book, BrainCircuit, Bot, FileText, Medal, Video, Target } from "lucide-react";
import Link from "next/link";
import { learningPaths } from "@/lib/learning-paths-data";

const onCampusServicePaths = learningPaths.filter(p => p.category === 'On-Campus Service-Based');
const onCampusProductPaths = learningPaths.filter(p => p.category === 'On-Campus Product-Based');


const FeatureCard = ({ title, icon, comingSoon = false, href = "#" } : { title: string, icon: React.ElementType, comingSoon?: boolean, href?: string }) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
                {React.createElement(icon, { className: "h-6 w-6 text-primary" })}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
             {comingSoon ? (
                 <p className="text-sm text-muted-foreground">This feature is coming soon!</p>
             ) : (
                <Button asChild variant="link" className="p-0">
                    <Link href={href}>
                        View Content <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
             )}
        </CardContent>
    </Card>
);

export default function PlacementPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Placement Preparation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive guide to cracking interviews for both service-based and product-based companies, on-campus and off-campus.
          </p>
        </header>

        <Card className="bg-primary/10 text-center">
            <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                    <Target className="h-8 w-8 text-primary"/>
                    Job Ready Placement Assessment
                </CardTitle>
                <CardDescription className="text-base">
                    Test your skills across aptitude, reasoning, and technical knowledge to see where you stand.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild size="lg">
                    <Link href="/placement/assessment">
                        Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

        <Accordion type="multiple" defaultValue={["item-1"]} className="w-full space-y-8">
            <AccordionItem value="item-1">
                 <AccordionTrigger className="text-2xl font-bold tracking-tight mb-4 hover:no-underline py-4 px-6 bg-muted rounded-lg">
                    On-Campus Placements
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Service-Based Companies</CardTitle>
                                <CardDescription>Focus on aptitude, reasoning, communication, and technical fundamentals for companies like TCS, Infosys, Wipro, and Accenture.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 flex-grow">
                                {onCampusServicePaths.map(path => (
                                    <FeatureCard key={path.id} title={path.title} icon={Book} href={`/learn/${path.id}`} />
                                ))}
                                <FeatureCard title="Mock Tests" icon={BrainCircuit} comingSoon />
                                <FeatureCard title="Company-Wise Questions" icon={Bot} comingSoon />
                                <FeatureCard title="Interview Prep Materials" icon={FileText} comingSoon />
                            </CardContent>
                        </Card>
                         <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Product-Based Companies</CardTitle>
                                <CardDescription>Focus on DSA, problem-solving, competitive coding, and system design for companies like Microsoft, Amazon, and Google.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 flex-grow">
                                {onCampusProductPaths.map(path => (
                                    <FeatureCard key={path.id} title={path.title} icon={Book} href={`/learn/${path.id}`} />
                                ))}
                                <FeatureCard title="Mock Tests" icon={BrainCircuit} comingSoon />
                                <FeatureCard title="Company-Wise Questions" icon={Bot} comingSoon />
                                <FeatureCard title="System Design Basics" icon={FileText} comingSoon />
                            </CardContent>
                        </Card>
                    </div>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
                 <AccordionTrigger className="text-2xl font-bold tracking-tight mb-4 hover:no-underline py-4 px-6 bg-muted rounded-lg">
                    Off-Campus Placements
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                     <div className="text-center text-muted-foreground p-8">
                        <p>Content for off-campus placements is coming soon!</p>
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                 <AccordionTrigger className="text-2xl font-bold tracking-tight mb-4 hover:no-underline py-4 px-6 bg-muted rounded-lg">
                    Success Stories
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                     <div className="text-center text-muted-foreground p-8">
                        <p>Hear from students who have successfully navigated their placement journeys. Coming soon!</p>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

      </div>
    </AuthGuard>
  );
}
