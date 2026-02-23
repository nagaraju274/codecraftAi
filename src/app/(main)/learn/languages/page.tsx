
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Code, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { learningPaths } from "@/lib/learning-paths-data";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const cardColors = [
  "bg-amber-400 hover:bg-amber-500 text-amber-950 dark:bg-amber-900/40 dark:text-amber-100 border-amber-500/20",
  "bg-sky-400 hover:bg-sky-500 text-sky-950 dark:bg-sky-900/40 dark:text-sky-100 border-sky-500/20",
  "bg-emerald-400 hover:bg-emerald-500 text-emerald-950 dark:bg-emerald-900/40 dark:text-emerald-100 border-emerald-500/20",
];

const languageSubCategories = [
  "General-Purpose Languages",
  "Web Development Languages",
  "Scripting & Automation",
  "Data Science & Analytics",
  "Systems & Embedded Programming",
  "Functional Programming",
  "Mobile App Development",
  "Blockchain & Smart Contracts",
];

export default function LanguagesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPaths = learningPaths.filter(path =>
    path.category === 'Programming Languages' &&
    (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     (path.description && path.description.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const groupedLanguages = languageSubCategories.map(subCategory => ({
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
            <Code className="text-primary h-8 w-8" />
            Programming Languages
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Master the core logic and syntax of the world's most popular coding languages.
          </p>
        </header>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search languages..."
            className="pl-10 w-full h-12 text-lg shadow-sm border-2 focus:border-primary transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Accordion type="multiple" defaultValue={['item-General-Purpose Languages']} className="w-full space-y-4">
          {groupedLanguages.map(group => (
            group.paths.length > 0 && (
              <AccordionItem value={`item-${group.name}`} key={group.name} className="border-2 rounded-xl overflow-hidden shadow-sm">
                <AccordionTrigger className="p-4 text-lg font-bold hover:no-underline bg-muted/20">
                  {group.name} ({group.paths.length})
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
                    {group.paths.map((path, index) => (
                      <Link href={`/learn/${path.id}`} key={path.id}>
                        <Card className={`flex items-center justify-center h-32 transition-all duration-300 shadow-lg hover:shadow-xl border-2 ${cardColors[index % cardColors.length]}`}>
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
            <p className="text-xl font-semibold text-muted-foreground">No languages found for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
