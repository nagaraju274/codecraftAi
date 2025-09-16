
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BrainCircuit, Code } from "lucide-react";
import Link from "next/link";

const mockTests = [
    {
        id: "aptitude-reasoning-1",
        title: "Aptitude & Reasoning Test 1",
        icon: BrainCircuit,
        description: "Sharpen your quantitative and logical skills with this comprehensive aptitude test."
    },
    {
        id: "dsa-coding-1",
        title: "DSA & Coding Test 1",
        icon: Code,
        description: "Test your knowledge of fundamental data structures and algorithms with MCQs and a coding challenge."
    },
     {
        id: "full-placement-1",
        title: "Full Placement Mock Test 1",
        icon: BrainCircuit,
        description: "A complete simulation of a real placement test, covering all major sections."
    },
];


export default function MockTestsPage() {

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
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Mock Tests</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Practice with our curated mock tests to get ready for your upcoming placements.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockTests.map((test) => (
                        <Card key={test.id} className="flex flex-col">
                            <CardHeader className="flex-row items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <test.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>{test.title}</CardTitle>
                                    <CardDescription className="pt-2">{test.description}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow"></CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" disabled>
                                    <Link href={`/placement/mock-tests/${test.id}`}>
                                        Start Test <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </AuthGuard>
    )
}
