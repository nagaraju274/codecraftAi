
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BrainCircuit, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { learningPaths } from "@/lib/learning-paths-data";
import { AuthGuard } from "@/components/auth/auth-guard";

const cardColors = [
  "bg-indigo-400 hover:bg-indigo-500 text-indigo-950 dark:bg-indigo-900/40 dark:text-indigo-100 border-indigo-500/20",
  "bg-violet-400 hover:bg-violet-500 text-violet-950 dark:bg-violet-900/40 dark:text-violet-100 border-violet-500/20",
  "bg-purple-400 hover:bg-purple-500 text-purple-950 dark:bg-purple-900/40 dark:text-purple-100 border-purple-500/20",
];

export default function DsaPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPaths = learningPaths.filter(path =>
    path.category === 'Data Structures & Algorithms' &&
    (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     (path.description && path.description.toLowerCase().includes(searchQuery.toLowerCase())))
  );

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
            <BrainCircuit className="text-primary h-8 w-8" />
            Data Structures & Algorithms
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Build a deep understanding of computer science fundamentals and master coding interviews.
          </p>
        </header>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search DSA roadmaps..."
            className="pl-10 w-full h-12 text-lg shadow-sm border-2 focus:border-primary transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
          {filteredPaths.map((path, index) => (
            <Link href={`/learn/${path.id}`} key={path.id}>
              <Card className={`flex items-center justify-center h-32 transition-all duration-300 shadow-lg hover:shadow-xl border-2 ${cardColors[index % cardColors.length]}`}>
                <CardContent className="p-4">
                  <h2 className="text-lg font-bold text-center leading-tight">{path.title}</h2>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {searchQuery && filteredPaths.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-semibold text-muted-foreground">No DSA roadmaps found for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
