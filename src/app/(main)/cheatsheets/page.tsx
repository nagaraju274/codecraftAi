"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cheatsheetData } from "@/lib/cheatsheet-data";
import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";

const cardColors = [
  "bg-amber-400 hover:bg-amber-500 text-amber-950 dark:bg-amber-900/40 dark:hover:bg-amber-900/60 dark:text-amber-100 border-amber-500/20",
  "bg-sky-400 hover:bg-sky-500 text-sky-950 dark:bg-sky-900/40 dark:hover:bg-sky-900/60 dark:text-sky-100 border-sky-500/20",
  "bg-emerald-400 hover:bg-emerald-500 text-emerald-950 dark:bg-emerald-900/40 dark:hover:bg-emerald-900/60 dark:text-emerald-100 border-emerald-500/20",
  "bg-indigo-400 hover:bg-indigo-500 text-indigo-950 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/60 dark:text-indigo-100 border-indigo-500/20",
  "bg-rose-400 hover:bg-rose-500 text-rose-950 dark:bg-rose-900/40 dark:hover:bg-rose-900/60 dark:text-rose-100 border-rose-500/20",
];

export default function CheatSheetsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredData = cheatsheetData.filter(
    item =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery)
  );


  return (
    <AuthGuard>
      <div className="flex flex-col h-full gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Cheat Sheets</h1>
          <p className="text-muted-foreground">
            Quick references for common commands and syntax.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search all cheat sheets..."
            className="pl-10 w-full h-12 shadow-sm border-2"
            onChange={handleSearch}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 flex-1 overflow-y-auto pr-4">
            {filteredData.map((sheet, index) => (
              <Link href={`/cheatsheets/${sheet.id}`} key={sheet.id}>
                <Card className={`flex items-center justify-center h-32 transition-all duration-300 border-2 shadow-md hover:shadow-lg ${cardColors[index % cardColors.length]}`}>
                  <CardContent className="p-0">
                    <h2 className="text-lg font-bold text-center px-4 leading-tight">{sheet.title}</h2>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {filteredData.length === 0 && (
              <div className="col-span-full text-center py-20">
                  <p className="text-muted-foreground">No cheat sheets found for "{searchQuery}".</p>
              </div>
            )}
          </div>

      </div>
    </AuthGuard>
  );
}