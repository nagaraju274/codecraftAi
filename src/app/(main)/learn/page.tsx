
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { learningPaths } from "@/lib/learning-paths-data";
import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const cardColors = [
  "bg-yellow-200/50 hover:bg-yellow-200/70 dark:bg-yellow-800/20 dark:hover:bg-yellow-800/40",
  "bg-gray-300/50 hover:bg-gray-300/70 dark:bg-gray-700/20 dark:hover:bg-gray-700/40",
  "bg-green-200/50 hover:bg-green-200/70 dark:bg-green-800/20 dark:hover:bg-green-800/40",
  "bg-cyan-200/50 hover:bg-cyan-200/70 dark:bg-cyan-800/20 dark:hover:bg-cyan-800/40",
  "bg-pink-200/50 hover:bg-pink-200/70 dark:bg-pink-800/20 dark:hover:bg-pink-800/40",
];

const Section = ({ title, paths, searchQuery, value }: { title: string, paths: typeof learningPaths, searchQuery: string, value: string }) => {
  const filteredPaths = paths.filter(path =>
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredPaths.length === 0 && searchQuery) {
    return null;
  }
  
  if (filteredPaths.length === 0) {
      return null;
  }

  return (
     <AccordionItem value={value}>
      <AccordionTrigger className="text-2xl font-bold tracking-tight mb-4 hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-6">
          {filteredPaths.map((path, index) => (
            <Link href={`/learn/${path.id}`} key={path.id}>
              <Card className={`flex items-center justify-center h-32 transition-all duration-300 ${cardColors[index % cardColors.length]}`}>
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold text-foreground text-center">{path.title}</h2>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};


export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const languages = learningPaths.filter(p => p.category === "Programming Languages");
  const frameworks = learningPaths.filter(p => p.category === "Frameworks & Libraries");
  const roles = learningPaths.filter(p => p.category === "Job Roles");
  
  const allFilteredPaths = learningPaths.filter(path =>
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AuthGuard>
      <div className="flex flex-col h-full gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
          <p className="text-muted-foreground">
            Our structured learning paths will help you master new skills and advance your career.
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search all learning paths..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex-1 overflow-y-auto pr-4">
            <Accordion 
                type="multiple" 
                defaultValue={["item-1", "item-2", "item-3"]} 
                className="w-full space-y-4"
            >
                <Section title="Programming Languages" paths={languages} searchQuery={searchQuery} value="item-1" />
                <Section title="Frameworks & Libraries" paths={frameworks} searchQuery={searchQuery} value="item-2" />
                <Section title="Job Roles" paths={roles} searchQuery={searchQuery} value="item-3" />
            </Accordion>
            
           {allFilteredPaths.length === 0 && (
            <div className="col-span-full text-center py-20">
                <p className="text-muted-foreground">No learning paths found for "{searchQuery}".</p>
            </div>
           )}
        </div>
      </div>
    </AuthGuard>
  );
}
