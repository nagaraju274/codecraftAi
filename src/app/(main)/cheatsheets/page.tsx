
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { cheatsheetData } from "@/lib/cheatsheet-data";

export default function CheatSheetsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(new Set(cheatsheetData.map(c => c.category)));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredData = cheatsheetData.map(category => ({
    ...category,
    items: category.items.filter(
      item =>
        item.command.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
    ),
  })).filter(category => category.items.length > 0);

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

      <Tabs defaultValue={categories[0]} className="flex-1">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10 h-auto flex-wrap">
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="space-y-6">
              {filteredData
                .filter(sheet => sheet.category === category)
                .map(sheet => (
                  <Card key={sheet.id}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <sheet.icon className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>{sheet.title}</CardTitle>
                          <CardDescription>{sheet.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[30%]">Command</TableHead>
                            <TableHead>Description</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {sheet.items.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-mono bg-muted/50 rounded-md">
                                {item.command}
                              </TableCell>
                              <TableCell>{item.description}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      {filteredData.length === 0 && (
         <div className="text-center py-20">
            <p className="text-muted-foreground">No results found for "{searchQuery}".</p>
        </div>
      )}
    </div>
  );
}
