"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { learningPaths } from "@/lib/learning-paths-data";
import { AuthGuard } from "@/components/auth/auth-guard";

const cardColors = [
  "bg-amber-400 hover:bg-amber-500 text-amber-950 dark:bg-amber-900/40 dark:hover:bg-amber-900/60 dark:text-amber-100 border-amber-500/20",
  "bg-sky-400 hover:bg-sky-500 text-sky-950 dark:bg-sky-900/40 dark:hover:bg-sky-900/60 dark:text-sky-100 border-sky-500/20",
  "bg-emerald-400 hover:bg-emerald-500 text-emerald-950 dark:bg-emerald-900/40 dark:hover:bg-emerald-900/60 dark:text-emerald-100 border-emerald-500/20",
  "bg-indigo-400 hover:bg-indigo-500 text-indigo-950 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/60 dark:text-indigo-100 border-indigo-500/20",
  "bg-rose-400 hover:bg-rose-500 text-rose-950 dark:bg-rose-900/40 dark:hover:bg-rose-900/60 dark:text-rose-100 border-rose-500/20",
];

export default function DsaMasteryPage() {
  const dsaPaths = learningPaths.filter(p => p.category === "Data Structures & Algorithms");

  return (
    <AuthGuard>
      <div className="flex flex-col h-full gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">DSA Mastery</h1>
          <p className="text-muted-foreground">
            Master fundamental data structures and algorithms using your favorite language to prepare for technical interviews and build efficient software.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 flex-1 overflow-y-auto pr-4">
          {dsaPaths.map((path, index) => (
            <Link href={`/learn/${path.id}`} key={path.id}>
              <Card className={`flex items-center justify-center h-32 transition-all duration-300 border-2 shadow-md hover:shadow-lg ${cardColors[index % cardColors.length]}`}>
                <CardContent className="p-4">
                  <h2 className="text-lg font-bold text-center leading-tight">{path.title}</h2>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AuthGuard>
  );
}