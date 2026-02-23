
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Library, Briefcase, BrainCircuit, ArrowRight } from "lucide-react";
import { AuthGuard } from "@/components/auth/auth-guard";

const categories = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Master the syntax and core concepts of popular languages like Python, JavaScript, C++, and more.",
    icon: Code,
    href: "/learn/languages",
    color: "bg-amber-400 text-amber-950 dark:bg-amber-900/40 dark:text-amber-100",
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    description: "Learn to build powerful applications using modern frameworks like React, Next.js, and Flutter.",
    icon: Library,
    href: "/learn/frameworks",
    color: "bg-sky-400 text-sky-950 dark:bg-sky-900/40 dark:text-sky-100",
  },
  {
    id: "roles",
    title: "Job Roles",
    description: "Explore 100+ specialized career paths from Software Engineering to AI Research and Cybersecurity.",
    icon: Briefcase,
    href: "/learn/roles",
    color: "bg-emerald-400 text-emerald-950 dark:bg-emerald-900/40 dark:text-emerald-100",
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Build a strong foundation in problem-solving and prepare for top-tier technical interviews.",
    icon: BrainCircuit,
    href: "/learn/dsa",
    color: "bg-indigo-400 text-indigo-950 dark:bg-indigo-900/40 dark:text-indigo-100",
  },
];

export default function LearnPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Learning Roadmaps
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose a category to explore detailed, step-by-step paths to mastery.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link href={category.href} key={category.id}>
              <Card className={`h-full transition-all duration-300 hover:shadow-xl border-2 group ${category.color}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-background/20 group-hover:bg-background/40 transition-colors">
                      <category.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg opacity-90">{category.description}</p>
                  <div className="flex items-center font-bold">
                    Explore Roadmaps <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AuthGuard>
  );
}
