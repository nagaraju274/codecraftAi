
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { learningPaths } from "@/lib/learning-paths-data";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const glassGradients = [
  "from-emerald-500/50 to-emerald-500/20 border-emerald-500/40 text-emerald-950 dark:text-emerald-50",
  "from-teal-500/50 to-teal-500/20 border-teal-500/40 text-teal-950 dark:text-teal-50",
  "from-cyan-500/50 to-cyan-500/20 border-cyan-500/40 text-cyan-950 dark:text-cyan-50",
  "from-sky-500/50 to-sky-500/20 border-sky-500/40 text-sky-950 dark:text-sky-50",
  "from-blue-500/50 to-blue-500/20 border-blue-500/40 text-blue-950 dark:text-blue-50",
  "from-indigo-500/50 to-indigo-500/20 border-indigo-500/40 text-indigo-950 dark:text-indigo-50",
  "from-violet-500/50 to-violet-500/20 border-violet-500/40 text-violet-950 dark:text-violet-50",
  "from-purple-500/50 to-purple-500/20 border-purple-500/40 text-purple-950 dark:text-purple-50",
  "from-fuchsia-500/50 to-fuchsia-500/20 border-fuchsia-500/40 text-fuchsia-950 dark:text-fuchsia-50",
  "from-pink-500/50 to-pink-500/20 border-pink-500/40 text-pink-950 dark:text-pink-50",
  "from-rose-500/50 to-rose-500/20 border-rose-500/40 text-rose-950 dark:text-rose-50",
  "from-red-500/50 to-red-500/20 border-red-500/40 text-red-950 dark:text-red-50",
  "from-orange-500/50 to-orange-500/20 border-orange-500/40 text-orange-950 dark:text-orange-50",
  "from-amber-500/50 to-amber-500/20 border-amber-500/40 text-amber-950 dark:text-amber-50",
  "from-yellow-500/50 to-yellow-500/20 border-yellow-500/40 text-yellow-950 dark:text-yellow-50",
  "from-lime-500/50 to-lime-500/20 border-lime-500/40 text-lime-950 dark:text-lime-50",
  "from-green-500/50 to-green-500/20 border-green-500/40 text-green-950 dark:text-green-50",
];

const jobRoleSubCategories = [
  "Core Software Development Jobs",
  "Artificial Intelligence & Machine Learning",
  "Data & Database Roles",
  "Web Technology Jobs",
  "Cloud & Infrastructure Jobs",
  "Cybersecurity Jobs",
  "Blockchain & Web3 Jobs",
  "Robotics, IoT & Hardware Integration",
  "Research & Academia",
  "Testing & Quality Assurance",
  "Design & Product Roles",
  "Management & Business Roles",
  "Technical Support & Infrastructure",
  "Interdisciplinary & Specialized Roles",
  "Other Opportunities",
  "Government & Public Sector"
];

export default function JobRolesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPaths = learningPaths.filter(path =>
    path.category === 'Job Roles' &&
    (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     (path.description && path.description.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const groupedJobRoles = jobRoleSubCategories.map(subCategory => ({
    name: subCategory,
    paths: filteredPaths.filter(path => path.subCategory === subCategory)
  }));

  let globalCardIndex = 0;

  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Roadmaps
          </Link>
        </Button>

        <header>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Briefcase className="text-primary h-8 w-8" />
            Job Role Roadmaps
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Choose a specialized career path and follow a structured roadmap to landing your dream job.
          </p>
        </header>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search 100+ job roles..."
            className="pl-10 w-full h-12 text-lg shadow-sm border-2 focus:border-primary transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Accordion type="multiple" defaultValue={['item-Core Software Development Jobs']} className="w-full space-y-4">
          {groupedJobRoles.map(group => (
            group.paths.length > 0 && (
              <AccordionItem value={`item-${group.name}`} key={group.name} className="border-2 rounded-xl overflow-hidden shadow-sm">
                <AccordionTrigger className="p-4 text-lg font-bold hover:no-underline bg-muted/20">
                  {group.name} ({group.paths.length})
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
                    {group.paths.map((path) => {
                      const colorClass = glassGradients[globalCardIndex % glassGradients.length];
                      globalCardIndex++;
                      return (
                        <Link href={`/learn/${path.id}`} key={path.id}>
                          <Card className={`flex items-center justify-center h-32 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 bg-gradient-to-br backdrop-blur-md hover:scale-105 ${colorClass}`}>
                            <CardContent className="p-4">
                              <h2 className="text-lg font-bold text-center leading-tight">{path.title}</h2>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          ))}
        </Accordion>

        {searchQuery && filteredPaths.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-semibold text-muted-foreground">No job roles found for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
