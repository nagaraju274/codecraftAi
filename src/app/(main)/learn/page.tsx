
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Library, Briefcase, BrainCircuit, ArrowRight } from "lucide-react";
import { AuthGuard } from "@/components/auth/auth-guard";

const categories = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Master the syntax and core concepts of popular languages like Python, JavaScript, C++, and more.",
    icon: Code,
    href: "/learn/languages",
    color: "from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-900 dark:text-amber-100",
    iconBg: "bg-amber-500/20",
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    description: "Learn to build powerful applications using modern frameworks like React, Next.js, and Flutter.",
    icon: Library,
    href: "/learn/frameworks",
    color: "from-sky-500/20 to-sky-500/5 border-sky-500/20 text-sky-900 dark:text-sky-100",
    iconBg: "bg-sky-500/20",
  },
  {
    id: "roles",
    title: "Job Roles",
    description: "Explore 100+ specialized career paths from Software Engineering to AI Research and Cybersecurity.",
    icon: Briefcase,
    href: "/learn/roles",
    color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-900 dark:text-emerald-100",
    iconBg: "bg-emerald-500/20",
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Build a strong foundation in problem-solving and prepare for top-tier technical interviews.",
    icon: BrainCircuit,
    href: "/learn/dsa",
    color: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/20 text-indigo-900 dark:text-indigo-100",
    iconBg: "bg-indigo-500/20",
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
              <Card className={`h-full transition-all duration-300 hover:shadow-2xl border-2 group bg-gradient-to-br backdrop-blur-md ${category.color}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${category.iconBg} group-hover:scale-110 transition-transform`}>
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
