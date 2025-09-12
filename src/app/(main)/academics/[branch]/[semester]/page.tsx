
"use client";

import { useParams, notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";
import { academicsData, branchNames } from "@/lib/academics-data";

export default function SubjectsPage() {
  const params = useParams();
  const branch = params.branch as string;
  const semester = params.semester as string;

  const branchData = academicsData[branch];
  const subjects = branchData ? branchData[semester] : null;

  if (!subjects) {
    // In a real app, you might show a "coming soon" or "no data" page
    // For now, we can show a simple message or redirect
    return (
        <AuthGuard>
            <div className="container mx-auto py-10 text-center">
                 <Button asChild variant="ghost" className="mb-8 self-start">
                    <Link href="/academics">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Academics
                    </Link>
                </Button>
                <h1 className="text-2xl font-bold">No Subjects Found</h1>
                <p className="text-muted-foreground mt-2">
                    Data for this branch and semester is not yet available.
                </p>
            </div>
        </AuthGuard>
    )
  }

  const fullBranchName = branchNames[branch] || "Unknown Branch";
  const year = Math.ceil(parseInt(semester) / 2);

  return (
    <AuthGuard>
        <div className="container mx-auto py-10">
            <Button asChild variant="ghost" className="mb-8 self-start">
                <Link href="/academics">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Academics
                </Link>
            </Button>
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {fullBranchName}
                </h1>
                <p className="mt-2 text-xl text-muted-foreground">
                    Year {year}, Semester {semester}
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject) => (
                    <Card key={subject.id} className="flex flex-col hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <CardTitle className="text-xl">{subject.name}</CardTitle>
                                <div className="p-2 bg-primary/10 rounded-full">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <CardDescription>{subject.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow"></CardContent>
                        <CardContent>
                             <Button asChild className="w-full">
                                <Link href="#">
                                    View Resources
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </AuthGuard>
  );
}
