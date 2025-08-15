
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

const cardColors = [
  "bg-yellow-200/50 hover:bg-yellow-200/70",
  "bg-gray-300/50 hover:bg-gray-300/70",
  "bg-green-200/50 hover:bg-green-200/70",
  "bg-cyan-200/50 hover:bg-cyan-200/70",
  "bg-pink-200/50 hover:bg-pink-200/70",
];

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPaths = learningPaths.filter(path =>
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
            placeholder="Search for a learning path..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 flex-1 overflow-y-auto pr-4">
          {filteredPaths.map((path, index) => (
            <Link href={`/learn/${path.id}`} key={path.id}>
              <Card className={`flex items-center justify-center h-32 transition-all duration-300 ${cardColors[index % cardColors.length]}`}>
                <CardContent className="p-0">
                  <h2 className="text-lg font-semibold text-foreground text-center">{path.title}</h2>
                </CardContent>
              </Card>
            </Link>
          ))}
           {filteredPaths.length === 0 && (
            <div className="col-span-full text-center py-20">
                <p className="text-muted-foreground">No learning paths found for "{searchQuery}".</p>
            </div>
           )}
        </div>
      </div>
    </AuthGuard>
  );
}
