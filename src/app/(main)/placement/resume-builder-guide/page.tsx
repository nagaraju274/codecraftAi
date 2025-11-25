
"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { Skeleton } from '@/components/ui/skeleton';

const generalDo = [
    "Keep it to one page, especially if you have less than 10 years of experience.",
    "Use a clean, professional font (e.g., Calibri, Arial, Times New Roman).",
    "Use a single-column format. Multi-column layouts can confuse ATS parsers.",
    "Tailor your resume for each specific job application, highlighting relevant skills.",
    "Use action verbs to describe your accomplishments (e.g., 'Developed', 'Managed', 'Implemented').",
    "Proofread multiple times for typos and grammatical errors. Ask a friend to review it too.",
    "Submit your resume as a PDF to preserve formatting."
];

const generalDont = [
    "Use a generic, one-size-fits-all resume.",
    "Include personal information like marital status, age, or a photo (unless standard in your country).",
    "Use unprofessional email addresses.",
    "Exaggerate or lie about your skills and experience.",
    "Use complex graphics, charts, colors, or fonts that can't be read by an ATS.",
    "List every course you've ever taken; only include relevant ones."
];

const serviceDo = [
    "Highlight a broad range of technical skills (e.g., Java, SQL, C++, Python).",
    "Include any certifications you have (e.g., AWS, Azure, Oracle).",
    "Mention academic projects with a clear description of your role and the technologies used.",
    "Emphasize soft skills like teamwork, communication, and problem-solving."
];

const serviceDont = [
    "Focus too narrowly on one specific or niche technology.",
    "Forget to mention your academic performance (GPA) if it's strong.",
    "Underestimate the importance of listing any internships or training programs."
];

const productDo = [
    "Showcase your expertise in Data Structures and Algorithms by listing relevant projects or competitive programming achievements.",
    "Quantify your achievements with numbers (e.g., 'Improved API response time by 30%').",
    "Link to your active GitHub, LeetCode, or personal portfolio website.",
    "Highlight open-source contributions or significant personal projects."
];

const productDont = [
    "Simply list technologies without providing context on how you used them.",
    "Use vague descriptions like 'Worked on a project'. Be specific about your contribution.",
    "Make the resume longer than one page. Be concise and impactful."
];

const ResumeGuide = ({ type }: { type: string | null }) => {
    const isService = type === 'service';
    const isProduct = type === 'product';

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <span>Resume Building Guide</span>
                </CardTitle>
                <CardDescription>
                    Your resume is often first read by an Applicant Tracking System (ATS). These guidelines help you create a professional, ATS-friendly resume that stands out to both software and human recruiters.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-green-600">Do's</h4>
                        <ul className="space-y-3">
                            {(isService ? [...generalDo, ...serviceDo] : isProduct ? [...generalDo, ...productDo] : generalDo).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-red-600">Don'ts</h4>
                        <ul className="space-y-3">
                             {(isService ? [...generalDont, ...serviceDont] : isProduct ? [...generalDont, ...productDont] : generalDont).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

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


