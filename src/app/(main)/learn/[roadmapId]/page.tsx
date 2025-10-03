
"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link as LinkIcon, Search, Sparkles, Loader, CheckSquare, ArrowLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { explainLearningTopic } from "@/ai/flows";
import { useToast } from "@/hooks/use-toast";
import { AuthGuard } from "@/components/auth/auth-guard";
import { learningPaths } from "@/lib/learning-paths-data";
import Link from "next/link";

export default function RoadmapPage() {
  const params = useParams();
  const roadmapId = params.roadmapId as string;
  const path = learningPaths.find(p => p.id === roadmapId);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [explanationTitle, setExplanationTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  if (!path) {
    notFound();
  }

  const handleExplainTopic = async (topic: (typeof path.topics)[0]) => {
    setIsLoading(true);
    setExplanation("");
    setExplanationTitle(topic.title);
    setIsDialogOpen(true);
    try {
      const result = await explainLearningTopic({
        topicTitle: topic.title,
        points: topic.points.map(p => p.text),
      });
      setExplanation(result.explanation);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get explanation from AI.",
      });
      setIsDialogOpen(false);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <AuthGuard>
        <div className="p-4 space-y-2">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/learn">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Road maps
              </Link>
            </Button>
          <h1 className="text-3xl font-bold tracking-tight">{path.title}</h1>
          <p className="text-muted-foreground">
            {path.description}
          </p>
        </div>
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 pt-4">
              <div className="p-1 h-full">
                <Card className="hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                  <CardContent className="flex-grow pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {path.topics.map((topic, index) => (
                        <AccordionItem value={`item-${index}`} key={topic.title}>
                          <div className="flex justify-between items-center w-full pr-2">
                              <AccordionTrigger className="text-base font-medium hover:no-underline py-3 flex-1 text-left">
                                  <span>{topic.title}</span>
                              </AccordionTrigger>
                              <Button size="sm" variant="ghost" onClick={() => handleExplainTopic(topic)} className="ml-4">
                                  <Sparkles className="h-4 w-4 mr-2" />
                                  Learn More
                              </Button>
                          </div>
                          <AccordionContent className="text-muted-foreground pt-2 pl-8">
                              <ul className="list-disc pl-5 space-y-4">
                                  {topic.points.map((point, i) => (
                                      <li key={i}>
                                          <span className="text-base">{point.text}</span>
                                          {point.resources && point.resources.length > 0 && (
                                              <div className="mt-2 space-x-4">
                                                  {point.resources.map((resource, j) => (
                                                      <a href={resource.url} key={j} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-base inline-flex items-center gap-1">
                                                          <LinkIcon className="h-3 w-3 shrink-0" />
                                                          {resource.name}
                                                      </a>
                                                  ))}
                                              </div>
                                          )}
                                      </li>
                                  ))}
                              </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                        {path.assignments && path.assignments.length > 0 && (
                            <AccordionItem value="assignments">
                                <AccordionTrigger className="text-base font-medium hover:no-underline py-3 flex-1 text-left text-primary">
                                    <div className="flex items-center gap-2">
                                        <CheckSquare className="h-5 w-5" />
                                        <span>Practice Assignments</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pt-2 pl-8">
                                    <ul className="list-decimal pl-5 space-y-4">
                                        {path.assignments.map((assignment, i) => (
                                            <li key={i}>
                                                <h4 className="font-semibold text-foreground">{assignment.title}</h4>
                                                <p>{assignment.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        )}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
          </div>
        </ScrollArea>
         <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent className="max-w-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle>{explanationTitle}</AlertDialogTitle>
              <AlertDialogDescription asChild>
                  <ScrollArea className="max-h-[60vh] pr-4">
                    {isLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    ) : (
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown>{explanation}</ReactMarkdown>
                      </div>
                    )}
                  </ScrollArea>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </AuthGuard>
  );
}
