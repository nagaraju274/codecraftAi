
"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, FileText, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { Skeleton } from '@/components/ui/skeleton';
import { ResumeGuide } from '@/components/feature/resume-guide';

const ResumeGuideContent = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    
    return <ResumeGuide type={type} />;
}

const LoadingSkeleton = () => (
    <Card>
        <CardHeader>
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-3/4 mt-2" />
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <Skeleton className="h-6 w-1/4" />
                <div className="space-y-3">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-5/6" />
                    <Skeleton className="h-5 w-full" />
                </div>
            </div>
            <div className="space-y-4">
                <Skeleton className="h-6 w-1/4" />
                <div className="space-y-3">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-5/6" />
                </div>
            </div>
        </CardContent>
    </Card>
);

export default function ResumeGuidePage() {
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
                    <ResumeGuideContent />
                </Suspense>
            </div>
        </AuthGuard>
    )
};
