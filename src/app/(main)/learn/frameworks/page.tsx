
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Library, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { learningPaths } from "@/lib/learning-paths-data";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const glassGradients = [
  "from-sky-600/40 to-sky-600/10 border-sky-600/30 text-sky-950 dark:text-sky-100",
  "from-indigo-600/40 to-indigo-600/10 border-indigo-600/30 text-indigo-950 dark:text-indigo-100",
  "from-violet-600/40 to-violet-600/10 border-violet-600/30 text-violet-950 dark:text-violet-100",
  "from-purple-600/40 to-purple-600/10 border-purple-600/30 text-purple-950 dark:text-purple-100",
];

const frameworkSubCategories = [
  "Frontend Web Frameworks",
  "Backend Web Frameworks",
  "Mobile Frameworks",
  "Game Development Engines",
  "Data Science & ML Libraries",
  "DevOps & Infrastructure Tools",
  "Cloud SDKs",
  "Blockchain/Smart Contract Tools"
];

export default function FrameworksPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPaths = learningPaths.filter(path =>
    path.category === 'Frameworks & Libraries' &&
    (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     (path.description && path.description.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const groupedFrameworks = frameworkSubCategories.map(subCategory => ({
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
            <Library className="text-primary h-8 w-8" />
            Frameworks & Libraries
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Accelerate your development with industry-standard tools and ecosystems.
          </p>
        </header>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search frameworks..."
            className="pl-10 w-full h-12 text-lg shadow-sm border-2 focus:border-primary transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Accordion type="multiple" defaultValue={['item-Frontend Web Frameworks']} className="w-full space-y-4">
          {groupedFrameworks.map(group => (
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
            <p className="text-xl font-semibold text-muted-foreground">No frameworks found for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
