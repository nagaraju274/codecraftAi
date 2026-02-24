
"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Code, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { learningPaths } from "@/lib/learning-paths-data";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const glassGradients = [
  "from-red-600/40 to-red-600/10 border-red-600/30 text-red-950 dark:text-red-50",
  "from-orange-600/40 to-orange-600/10 border-orange-600/30 text-orange-950 dark:text-orange-50",
  "from-amber-600/40 to-amber-600/10 border-amber-600/30 text-amber-950 dark:text-amber-50",
  "from-yellow-600/40 to-yellow-600/10 border-yellow-600/30 text-yellow-950 dark:text-yellow-50",
  "from-lime-600/40 to-lime-600/10 border-lime-600/30 text-lime-950 dark:text-lime-50",
  "from-green-600/40 to-green-600/10 border-green-600/30 text-green-950 dark:text-green-50",
  "from-emerald-600/40 to-emerald-600/10 border-emerald-600/30 text-emerald-950 dark:text-emerald-50",
  "from-teal-600/40 to-teal-600/10 border-teal-600/30 text-teal-950 dark:text-teal-50",
  "from-cyan-600/40 to-cyan-600/10 border-cyan-600/30 text-cyan-950 dark:text-cyan-50",
  "from-sky-600/40 to-sky-600/10 border-sky-600/30 text-sky-950 dark:text-sky-50",
  "from-blue-600/40 to-blue-600/10 border-blue-600/30 text-blue-950 dark:text-blue-50",
  "from-indigo-600/40 to-indigo-600/10 border-indigo-600/30 text-indigo-950 dark:text-indigo-50",
  "from-violet-600/40 to-violet-600/10 border-violet-600/30 text-violet-950 dark:text-violet-50",
  "from-purple-600/40 to-purple-600/10 border-purple-600/30 text-purple-950 dark:text-purple-50",
  "from-fuchsia-600/40 to-fuchsia-600/10 border-fuchsia-600/30 text-fuchsia-950 dark:text-fuchsia-50",
  "from-pink-600/40 to-pink-600/10 border-pink-600/30 text-pink-950 dark:text-pink-50",
  "from-rose-600/40 to-rose-600/10 border-rose-600/30 text-rose-950 dark:text-rose-50",
];

const languageSubCategories = [
  "Popular and Widely Used Languages",
  "Systems Programming Languages",
  "Web Development Languages",
  "Scripting & Automation Languages",
  "Data Science / Stats / Math-Oriented",
  "AI, ML, & Research Languages",
  "Game Development Languages",
  "Mobile App Development Languages",
  "Enterprise / Backend / JVM Languages",
  "Functional Programming Languages",
  "DevOps / Configuration / Infra-as-Code",
  "Blockchain / Smart Contract Languages",
  "Educational / Esoteric / Experimental",
  "Older / Legacy / Historical Languages",
  "Other Noteworthy or Specialized Languages"
];

function LanguagesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const sectionParam = searchParams.get("section");
  const [openItems, setOpenItems] = useState<string[]>(
    sectionParam ? sectionParam.split(",") : ["item-Popular and Widely Used Languages"]
  );

  const handleValueChange = (values: string[]) => {
    setOpenItems(values);
    const params = new URLSearchParams(searchParams.toString());
    if (values.length > 0) {
      params.set("section", values.join(","));
    } else {
      params.delete("section");
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const filteredPaths = learningPaths.filter(path =>
    path.category === 'Programming Languages' &&
    (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     (path.description && path.description.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const groupedLanguages = languageSubCategories.map(subCategory => ({
    name: subCategory,
    paths: filteredPaths.filter(path => 
      path.subCategory === subCategory || 
      (path.subCategories && path.subCategories.includes(subCategory))
    )
  }));

  let globalCardIndex = 0;

  return (
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
          Master the core logic and syntax of the world's most popular and specialized coding languages.
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

      <Accordion 
        type="multiple" 
        value={openItems} 
        onValueChange={handleValueChange}
        className="w-full space-y-4"
      >
        {groupedLanguages.map(group => (
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
          <p className="text-xl font-semibold text-muted-foreground">No languages found for "{searchQuery}".</p>
        </div>
      )}
    </div>
  );
}

export default function LanguagesPage() {
  return (
    <AuthGuard>
      <Suspense fallback={<div>Loading roadmaps...</div>}>
        <LanguagesContent />
      </Suspense>
    </AuthGuard>
  );
}
