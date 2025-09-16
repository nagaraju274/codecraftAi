
"use client";

import { Suspense } from 'react';
import { useSearchParams } from "next/navigation";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BrainCircuit, Code, FileX2 } from "lucide-react";
import Link from "next/link";
import { serviceBasedMockTests, productBasedMockTests } from "@/lib/mock-tests-data";
import { Skeleton } from '@/components/ui/skeleton';

const MockTestsContent = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    let tests = [];
    let pageTitle = "Mock Tests";

    if (type === 'service') {
        tests = serviceBasedMockTests;
        pageTitle = "Service-Based Company Mock Tests";
    } else if (type === 'product') {
        tests = productBasedMockTests;
        pageTitle = "Product-Based Company Mock Tests";
    }

    if (tests.length === 0) {
        return (
             <div className="text-center">
                <FileX2 className="mx-auto h-12 w-12 text-muted-foreground" />
                <h1 className="mt-4 text-2xl font-bold">No Tests Found</h1>
                <p className="text-muted-foreground mt-2">Please return to the placement page and select a category.</p>
            </div>
        )
    }

    return (
        <>
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{pageTitle}</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Practice with our curated mock tests to get ready for your upcoming placements.
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tests.map((test) => (
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
        </>
    )
}

const LoadingSkeleton = () => (
    <div className="space-y-8">
        <div className="text-center space-y-4">
            <Skeleton className="h-10 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card><CardHeader><Skeleton className="h-8 w-3/4" /></CardHeader><CardContent><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /></CardContent><CardFooter><Skeleton className="h-10 w-full" /></CardFooter></Card>
            <Card><CardHeader><Skeleton className="h-8 w-3/4" /></CardHeader><CardContent><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /></CardContent><CardFooter><Skeleton className="h-10 w-full" /></CardFooter></Card>
            <Card><CardHeader><Skeleton className="h-8 w-3/4" /></CardHeader><CardContent><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /></CardContent><CardFooter><Skeleton className="h-10 w-full" /></CardFooter></Card>
        </div>
    </div>
)

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
                <Suspense fallback={<LoadingSkeleton />}>
                    <MockTestsContent />
                </Suspense>
            </div>
        </AuthGuard>
    )
}
