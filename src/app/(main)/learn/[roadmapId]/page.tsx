
"use client";

import { notFound, useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Link as LinkIcon, 
  CheckSquare, 
  ArrowLeft, 
  Brain, 
  Monitor, 
  Code, 
  Zap, 
  GraduationCap, 
  MessageSquare, 
  ShieldCheck, 
  Lightbulb,
  ArrowRight,
  Terminal,
  Globe,
  Cpu,
  Database,
  Smartphone
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AuthGuard } from "@/components/auth/auth-guard";
import { learningPaths } from "@/lib/learning-paths-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const IconMap = {
  terminal: Terminal,
  code: Code,
  globe: Globe,
  cpu: Cpu,
  database: Database,
  smartphone: Smartphone
};

export default function RoadmapPage() {
  const params = useParams();
  const roadmapId = params.roadmapId as string;
  const path = learningPaths.find(p => p.id === roadmapId);

  if (!path) {
    notFound();
  }

  // Fallback if full data is not yet migrated to the library
  if (!path.stages) {
    return (
      <AuthGuard>
        <div className="space-y-4 p-4 md:p-0">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/learn">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Roadmaps
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{path.title}</h1>
          <p className="text-muted-foreground">{path.description}</p>
          <Card className="p-10 text-center bg-muted/20 border-dashed border-2">
            <p>Detailed roadmap content for <strong>{path.title}</strong> is currently being migrated. Please check back soon!</p>
          </Card>
        </div>
      </AuthGuard>
    );
  }

  const Icon = IconMap[path.iconType || 'code'];

  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Icon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The {path.title} Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {path.description}
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Roadmaps
          </Link>
        </Button>

        {/* Stages */}
        {path.stages.map((stage) => (
          <Card key={stage.title} className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3 text-primary">
                <Brain className="h-8 w-8" />
                {stage.title}
              </CardTitle>
              <CardDescription>Master the pillars of the {stage.level} level.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs shrink-0">{index + 1}</span>
                        {step.what}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <p><strong>Why it’s important:</strong> {step.why}</p>
                            <p><strong>Time Estimate:</strong> {step.time}</p>
                            <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-xl border border-border">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-primary"><Monitor className="h-4 w-4"/> Practice Task:</h4>
                            <p className="text-sm leading-relaxed">{step.practice}</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3 text-sm flex items-center gap-2"><Code className="h-4 w-4 text-primary"/> Free Resources:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.resources.map(res => (
                              <li key={res.url} className="list-none">
                                <a href={res.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                  <div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20">
                                    <Zap className="h-3 w-3 text-primary"/>
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{res.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        {/* Projects */}
        {path.projects && (
          <Card className="border-2 border-primary/20 bg-primary/[0.02]">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
              <CardDescription>Apply your knowledge with these hands-on projects designed for your portfolio.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {path.projects.map(p => (
                <Card key={p.title} className="bg-card hover:shadow-md transition-all border-2">
                  <CardHeader className="pb-3">
                    <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                    <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-3">
                    <p className="text-muted-foreground line-clamp-2"><strong>Teaches:</strong> {p.teaches}</p>
                    <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded text-primary">
                      <Terminal className="h-3 w-3"/> {p.tech}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Learning Plans */}
        {path.plans && (
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
              <CardDescription>Pick a timeline that matches your availability.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {path.plans.map((plan, index) => (
                  <div key={index} className="p-6 border-2 rounded-2xl bg-card shadow-sm hover:border-primary/50 transition-colors">
                    <h3 className="font-bold text-xl mb-3 text-primary">{plan.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                    <ul className="space-y-3">
                      {plan.schedule.map(item => (
                        <li key={item} className="text-sm flex items-start gap-3">
                          <div className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Interview Prep */}
        {path.interviewTopics && (
          <Card className="border-2 border-accent bg-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
              <CardDescription>Expert guidance to help you land your dream role.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Critical Interview Topics</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {path.interviewTopics.map(topic => (
                      <li key={topic} className="flex items-center gap-2 text-sm bg-background p-2 rounded-lg border shadow-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                {path.codingQuestions && (
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Coding Challenges</h3>
                    <div className="space-y-3">
                      {path.codingQuestions.map(q => (
                        <div key={q.question} className="p-4 border rounded-xl bg-card hover:border-primary/30 transition-colors">
                          <p className="font-semibold text-xs uppercase tracking-wider text-primary mb-1">{q.topic}</p>
                          <p className="text-sm leading-relaxed">{q.question}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Mistakes to Avoid */}
        {path.mistakes && (
          <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
            <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
              <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
                <Lightbulb className="h-6 w-6"/>
                10 Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                {path.mistakes.map((mistake, i) => (
                  <li key={i} className="text-sm flex items-start gap-3 text-foreground/80">
                    <span className="text-destructive font-black shrink-0">{i + 1}.</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="text-center py-16 bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[3rem] border-2 shadow-inner">
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the {path.title} Ecosystem</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Every expert developer was once a beginner. Stay consistent, keep building projects, and remember that real growth happens when you step out of your comfort zone. Your journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2">
              <Link href="/learn">
                Explore Other Roadmaps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
