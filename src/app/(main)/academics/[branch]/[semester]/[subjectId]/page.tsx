
"use client";

import { useParams, notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2, BookOpen } from "lucide-react";
import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";
import { academicsData, branchNames } from "@/lib/academics-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import ReactMarkdown from "react-markdown";


export default function SubjectPage() {
  const params = useParams();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [explanationTitle, setExplanationTitle] = useState("");

  const branch = params.branch as string;
  const semester = params.semester as string;
  const subjectId = params.subjectId as string;

  const branchData = academicsData[branch];
  const subjects = branchData ? branchData[semester] : null;
  const subject = subjects?.find(s => s.id === subjectId);

  if (!subject) {
    notFound();
  }
  
  const relatedRoadmap = subject.relatedRoadmapId 
    ? learningPaths.find(p => p.id === subject.relatedRoadmapId) 
    : null;

  const fullBranchName = branchNames[branch] || "Unknown Branch";

  return (
    <AuthGuard>
        <div className="container mx-auto py-10">
             <Button asChild variant="ghost" className="mb-8 self-start">
                <Link href={`/academics/${branch}/${semester}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to {fullBranchName} Subjects
                </Link>
            </Button>
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {subject.name}
                </h1>
                <p className="mt-2 text-xl text-muted-foreground">
                    {subject.description}
                </p>
            </header>

            {relatedRoadmap && (
                <Card className="mb-8 bg-primary/10 border-primary/20">
                    <CardHeader>
                        <CardTitle className="text-lg">Related Career Path</CardTitle>
                        <CardDescription>
                            The concepts in this subject are crucial for the following career path.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold">{relatedRoadmap.title}</h4>
                                <p className="text-sm text-muted-foreground">{relatedRoadmap.description}</p>
                            </div>
                            <Button asChild>
                                <Link href={`/learn/${relatedRoadmap.id}`}>
                                    View Roadmap
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            <Tabs defaultValue="syllabus" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                    <TabsTrigger value="pyq">Previous Papers</TabsTrigger>
                    <TabsTrigger value="assignments">Assignments</TabsTrigger>
                </TabsList>
                <TabsContent value="syllabus">
                    <Card>
                        <CardHeader>
                            <CardTitle>Syllabus</CardTitle>
                            <CardDescription>A complete breakdown of the course curriculum, unit by unit.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           {subject.syllabus && subject.syllabus.length > 0 ? (
                            <Accordion type="multiple" className="w-full">
                                {subject.syllabus.map((item, index) => (
                                    <AccordionItem value={`item-${index}`} key={index}>
                                        <AccordionTrigger className="text-lg">{item.unit}</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-3 pl-4 prose prose-sm dark:prose-invert max-w-none">
                                                {item.topics.map((topic, topicIndex) => (
                                                    <p key={topicIndex} className="text-base text-muted-foreground">
                                                        {topic}
                                                    </p>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                           ) : (
                             <p className="text-muted-foreground">Syllabus content coming soon.</p>
                           )}
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="notes">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notes & Materials</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">Notes content coming soon.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="pyq">
                    <Card>
                        <CardHeader>
                            <CardTitle>Previous Year Question Papers</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-muted-foreground">PYQ content coming soon.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="assignments">
                    <Card>
                        <CardHeader>
                            <CardTitle>Assignments</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-muted-foreground">Assignments content coming soon.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    </AuthGuard>
  );
}
