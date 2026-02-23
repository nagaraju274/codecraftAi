
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
  "from-emerald-600/40 to-emerald-600/10 border-emerald-600/30 text-emerald-950 dark:text-emerald-100",
  "from-rose-600/40 to-rose-600/10 border-rose-600/30 text-rose-950 dark:text-rose-100",
  "from-indigo-600/40 to-indigo-600/10 border-indigo-600/30 text-indigo-950 dark:text-indigo-100",
  "from-amber-600/40 to-amber-600/10 border-amber-600/30 text-amber-950 dark:text-amber-100",
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
                    {group.paths.map((path, index) => (
                      <Link href={`/learn/${path.id}`} key={path.id}>
                        <Card className={`flex items-center justify-center h-32 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 bg-gradient-to-br backdrop-blur-md hover:scale-105 ${glassGradients[index % glassGradients.length]}`}>
                          <CardContent className="p-4">
                            <h2 className="text-lg font-bold text-center leading-tight">{path.title}</h2>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
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
