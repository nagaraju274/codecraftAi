
"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { learningPaths } from "@/lib/learning-paths-data";
import { AuthGuard } from "@/components/auth/auth-guard";

const cardColors = [
  "bg-yellow-200/50 hover:bg-yellow-200/70 dark:bg-yellow-800/20 dark:hover:bg-yellow-800/40",
  "bg-gray-300/50 hover:bg-gray-300/70 dark:bg-gray-700/20 dark:hover:bg-gray-700/40",
  "bg-green-200/50 hover:bg-green-200/70 dark:bg-green-800/20 dark:hover:bg-green-800/40",
  "bg-cyan-200/50 hover:bg-cyan-200/70 dark:bg-cyan-800/20 dark:hover:bg-cyan-800/40",
  "bg-pink-200/50 hover:bg-pink-200/70 dark:bg-pink-800/20 dark:hover:bg-pink-800/40",
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
              <Card className={`flex items-center justify-center h-32 transition-all duration-300 ${cardColors[index % cardColors.length]}`}>
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold text-foreground text-center">{path.title}</h2>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AuthGuard>
  );
}
