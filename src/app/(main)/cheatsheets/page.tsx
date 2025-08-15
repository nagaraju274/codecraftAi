
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

const cardColors = [
  "bg-yellow-200/50 hover:bg-yellow-200/70 dark:bg-yellow-800/20 dark:hover:bg-yellow-800/40",
  "bg-gray-300/50 hover:bg-gray-300/70 dark:bg-gray-700/20 dark:hover:bg-gray-700/40",
  "bg-green-200/50 hover:bg-green-200/70 dark:bg-green-800/20 dark:hover:bg-green-800/40",
  "bg-cyan-200/50 hover:bg-cyan-200/70 dark:bg-cyan-800/20 dark:hover:bg-cyan-800/40",
  "bg-pink-200/50 hover:bg-pink-200/70 dark:bg-pink-800/20 dark:hover:bg-pink-800/40",
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
          className="pl-10 w-full"
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 flex-1 overflow-y-auto pr-4">
          {filteredData.map((sheet, index) => (
            <Link href={`/cheatsheets/${sheet.id}`} key={sheet.id}>
              <Card className={`flex items-center justify-center h-32 transition-all duration-300 ${cardColors[index % cardColors.length]}`}>
                <CardContent className="p-0">
                  <h2 className="text-lg font-semibold text-foreground text-center">{sheet.title}</h2>
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
  );
}

