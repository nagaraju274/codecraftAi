
"use client";

import { Suspense } from 'react';
import { useSearchParams } from "next/navigation";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot } from "lucide-react";
import Link from "next/link";
import { serviceBasedQuestions, productBasedQuestions, CompanyQuestions } from "@/lib/company-questions-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from '@/components/ui/skeleton';

const CompanyQuestionsContent = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    let questionData: CompanyQuestions;
    let pageTitle: string;

    if (type === 'service') {
        questionData = serviceBasedQuestions;
        pageTitle = "Service-Based Company Questions";
    } else if (type === 'product') {
        questionData = productBasedQuestions;
        pageTitle = "Product-Based Company Questions";
    } else {
        return (
             <div className="text-center">
                <h1 className="text-2xl font-bold">Invalid Company Type</h1>
                <p className="text-muted-foreground mt-2">Please return to the placement page and select a category.</p>
            </div>
        )
    }
    
    const companies = Object.keys(questionData);

    return (
        <>
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{pageTitle}</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Practice with questions commonly asked by top companies in this category.
                </p>
            </header>

            <Card>
                <CardContent className="p-6">
                    <Tabs defaultValue={companies[0]} className="w-full">
                        <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
                            {companies.map(companyId => (
                                <TabsTrigger key={companyId} value={companyId}>
                                    {questionData[companyId].name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        
                        {companies.map(companyId => (
                             <TabsContent key={companyId} value={companyId}>
                                <Accordion type="single" collapsible className="w-full">
                                    {questionData[companyId].questions.map((q, index) => (
                                        <AccordionItem value={`item-${index}`} key={index}>
                                            <AccordionTrigger className="text-base font-medium">
                                                <div className="flex items-center gap-3">
                                                    <Bot className="h-5 w-5 text-primary flex-shrink-0" />
                                                    <span>[{q.topic}] {q.question}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="prose prose-sm dark:prose-invert max-w-none pt-2 pl-10">
                                                <p>Answer and detailed explanation coming soon.</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                        ))}
                    </Tabs>
                </CardContent>
            </Card>
        </>
    )
}

const LoadingSkeleton = () => (
    <div className="space-y-8">
        <div className="text-center space-y-4">
            <Skeleton className="h-10 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        <Card>
            <CardContent className="p-6">
                <div className="mb-6 grid w-full grid-cols-2 md:grid-cols-4 gap-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
            </CardContent>
        </Card>
    </div>
)


export default function CompanyQuestionsPage() {
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
                    <CompanyQuestionsContent />
                </Suspense>
            </div>
        </AuthGuard>
    )
}
