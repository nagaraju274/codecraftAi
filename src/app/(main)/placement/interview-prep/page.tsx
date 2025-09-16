
"use client";

import { Suspense, lazy } from 'react';
import { useSearchParams } from "next/navigation";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, UserCheck, MessageSquare, Lightbulb } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from '@/components/ui/skeleton';
import { ResumeGuide } from '../resume-builder-guide/page';

const serviceBasedMaterials = {
    title: "Service-Based Interview Prep",
    description: "Focus on a well-rounded profile, strong fundamentals, and clear communication.",
    sections: [
        {
            icon: MessageSquare,
            title: "Common HR Questions",
            content: "Be prepared for questions like: 'Tell me about yourself', 'Why this company?', 'What are your strengths and weaknesses?', and 'Where do you see yourself in 5 years?'"
        },
        {
            icon: Lightbulb,
            title: "Technical Interview Fundamentals",
            content: "Revise core concepts of OOPs, DBMS, Computer Networks, and at least one programming language. Expect basic coding questions on arrays, strings, and simple logic."
        }
    ]
}

const productBasedMaterials = {
    title: "Product-Based Interview Prep",
    description: "Focus on deep problem-solving skills, data structures, and system design thinking.",
    sections: [
        {
            icon: UserCheck,
            title: "Behavioral Questions (STAR Method)",
            content: "Practice answering behavioral questions using the STAR method (Situation, Task, Action, Result). Prepare examples for teamwork, leadership, and handling conflict."
        },
        {
            icon: Lightbulb,
            title: "Technical Interview Deep Dive",
            content: "Expect multiple rounds focusing on DSA. You must be able to explain your thought process and analyze the time/space complexity of your solution. Also, be ready for basic system design questions."
        }
    ]
}

const InterviewPrepContent = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    const data = type === 'service' ? serviceBasedMaterials : productBasedMaterials;

     if (type !== 'service' && type !== 'product') {
        return (
             <div className="text-center">
                <h1 className="text-2xl font-bold">Invalid Preparation Type</h1>
                <p className="text-muted-foreground mt-2">Please return to the placement page and select a category.</p>
            </div>
        )
    }

    return (
        <>
             <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{data.title}</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {data.description}
                </p>
            </header>
            
            <Suspense fallback={<Skeleton className="h-64 w-full" />}>
                <ResumeGuide type={type} />
            </Suspense>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Interview Rounds</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                        {data.sections.map((section, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-lg font-medium">
                                    <div className="flex items-center gap-3">
                                        <section.icon className="h-6 w-6 text-primary flex-shrink-0" />
                                        <span>{section.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="prose prose-sm dark:prose-invert max-w-none pt-2 pl-12">
                                    <p>{section.content}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
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
            <CardContent className="p-6 space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
            </CardContent>
        </Card>
    </div>
)


export default function InterviewPrepPage() {
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
                    <InterviewPrepContent />
                </Suspense>
            </div>
        </AuthGuard>
    )
}
