
"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { projects } from '../projects-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Lightbulb, Code, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function ProjectBuildPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const project = projects.find(p => p.id === projectId);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  if (!project) {
    notFound();
  }

  const handleStepToggle = (stepIndex: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };
  
  const allStepsCompleted = completedSteps.length === project.steps.length;

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center gap-4 p-4 border-b">
        <Button asChild variant="ghost" size="icon">
          <Link href="/projects">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to projects</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-xl font-bold">{project.title}</h1>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
      </header>

      <div className="grid md:grid-cols-[2fr_3fr] flex-1 overflow-hidden">
        <aside className="border-r overflow-y-auto">
          <ScrollArea className="h-full">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Project Steps</h2>
              <div className="space-y-6">
                {project.steps.map((step, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 flex items-center">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${completedSteps.includes(index) ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                            {completedSteps.includes(index) ? <CheckCircle2 className="h-5 w-5" /> : <span className="font-bold">{index + 1}</span>}
                        </div>
                        {index < project.steps.length - 1 && (
                            <div className={`absolute top-8 left-1/2 w-0.5 h-full ${completedSteps.includes(index) ? 'bg-primary' : 'bg-border'}`} style={{height: 'calc(100% + 1.5rem)'}}></div>
                        )}
                    </div>

                    <div className="flex items-start gap-2">
                        <Checkbox 
                            id={`step-${index}`}
                            checked={completedSteps.includes(index)}
                            onCheckedChange={() => handleStepToggle(index)}
                            className="absolute -left-10 top-1.5 opacity-0 pointer-events-none"
                        />
                        <label htmlFor={`step-${index}`} className="flex-1 cursor-pointer">
                            <h3 className={`font-semibold mb-1 ${completedSteps.includes(index) ? 'line-through text-muted-foreground' : ''}`}>{step.title}</h3>
                            <p className={`text-sm text-muted-foreground ${completedSteps.includes(index) ? 'line-through' : ''}`}>{step.description}</p>
                        </label>
                    </div>
                  </div>
                ))}
                 {allStepsCompleted && (
                    <Card className="mt-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700">
                        <CardHeader>
                            <CardTitle className="text-lg text-green-800 dark:text-green-300">Congratulations!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-green-700 dark:text-green-400">You've completed all the steps for this project. Great job!</p>
                            <Button asChild className="mt-4">
                                <Link href="/projects">Explore Other Projects</Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
              </div>
            </div>
          </ScrollArea>
        </aside>

        <main className="overflow-y-auto">
           <ScrollArea className="h-full">
            <div className="p-6 space-y-6">
                {project.steps.map((step, index) => (
                    <Card key={index} id={`step-details-${index}`}>
                        <CardHeader className="flex flex-row justify-between items-start">
                            <div>
                                <CardDescription>Step {index + 1}</CardDescription>
                                <CardTitle>{step.title}</CardTitle>
                            </div>
                            <div className="flex gap-2">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <Code className="mr-2 h-4 w-4"/>
                                            View Code
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl">
                                        <DialogHeader>
                                            <DialogTitle>Code for: {step.title}</DialogTitle>
                                        </DialogHeader>
                                        <ScrollArea className="max-h-[70vh] mt-4">
                                            <pre className="bg-muted p-4 rounded-md text-sm font-code whitespace-pre-wrap">{step.code}</pre>
                                        </ScrollArea>
                                    </DialogContent>
                                </Dialog>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="secondary" size="sm">
                                            <Lightbulb className="mr-2 h-4 w-4"/>
                                            AI Hint
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>AI Hint for: {step.title}</DialogTitle>
                                        </DialogHeader>
                                        <p className="py-4 text-muted-foreground">{step.hint}</p>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: step.details }} />
                        </CardContent>
                        {index < project.steps.length -1 && <Separator className="my-6" />}
                    </Card>
                ))}
            </div>
           </ScrollArea>
        </main>
      </div>
    </div>
  );
}
