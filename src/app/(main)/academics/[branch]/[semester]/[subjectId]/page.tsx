
"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { learningPaths } from "@/lib/learning-paths-data";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { generateNotes } from "@/ai/flows";
import { useToast } from "@/hooks/use-toast";

export default function SubjectPage() {
  const params = useParams();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatingTopic, setGeneratingTopic] = useState<string | null>(null);

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

  const handleGenerateNotes = async (topic: string) => {
    setGeneratingTopic(topic);
    setIsLoading(true);
    setDialogContent("");
    setDialogTitle(`Notes for: ${topic}`);
    setIsDialogOpen(true);

    try {
        const result = await generateNotes({ subject: subject.name, topic });
        setDialogContent(result.notes);
    } catch(e) {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to generate notes from AI."
        });
        setIsDialogOpen(false);
    } finally {
        setIsLoading(false);
        setGeneratingTopic(null);
    }
  }

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
                                            <ul className="space-y-3 pl-4">
                                                {item.topics.map((topic, topicIndex) => (
                                                    <li key={topicIndex} className="flex items-center gap-3">
                                                         <Checkbox id={`topic-${index}-${topicIndex}`} />
                                                        <label htmlFor={`topic-${index}-${topicIndex}`} className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                            {topic}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
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
                             <CardDescription>Generate AI-powered notes for any topic in the syllabus.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {subject.syllabus && subject.syllabus.length > 0 ? (
                                subject.syllabus.map((unit, unitIndex) => (
                                    <div key={unitIndex}>
                                        <h3 className="font-semibold text-lg mb-2">{unit.unit}</h3>
                                        <ul className="space-y-2">
                                            {unit.topics.map((topic, topicIndex) => (
                                                <li key={topicIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                                                    <span>{topic}</span>
                                                    <Button 
                                                        variant="secondary" 
                                                        size="sm"
                                                        onClick={() => handleGenerateNotes(topic)}
                                                        disabled={isLoading}
                                                    >
                                                         {isLoading && generatingTopic === topic ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null}
                                                         Generate Notes
                                                    </Button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted-foreground">No syllabus topics available to generate notes from.</p>
                            )}
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

        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent className="w-[95vw] max-w-3xl h-[90vh] flex flex-col">
            <AlertDialogHeader>
              <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="flex-1 overflow-y-auto pr-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none overflow-x-auto" style={{ wordWrap: 'break-word' }}>
                  <ReactMarkdown>{dialogContent}</ReactMarkdown>
                </div>
              )}
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </AuthGuard>
  );
}
