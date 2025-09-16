
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const resumeDo = [
    "Keep it to one page.",
    "Use a clean, professional font.",
    "Quantify your achievements with numbers (e.g., 'Improved performance by 20%').",
    "Tailor your resume for each job application.",
    "Include links to your GitHub, LinkedIn, and portfolio.",
    "Proofread multiple times for typos and grammatical errors."
];

const resumeDont = [
    "Use a generic, one-size-fits-all resume.",
    "Include personal information like marital status or a photo.",
    "Exaggerate or lie about your skills and experience.",
    "Use complex graphics or colors that distract the reader.",
    "List every course you've ever taken.",
    "Submit it as a Word document (use PDF)."
];

const ResumeBuilderGuide = () => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <span>Resume Building Guide</span>
            </CardTitle>
            <CardDescription>
                Craft a professional, ATS-friendly resume that stands out to recruiters.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <h4 className="font-semibold text-lg text-green-600">Do's</h4>
                <ul className="space-y-3">
                    {resumeDo.map((item, index) => (
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
                    {resumeDont.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
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
                <ResumeBuilderGuide />
            </div>
        </AuthGuard>
    )
};
