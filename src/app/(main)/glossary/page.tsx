
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { glossaryData, GlossaryTerm } from "@/lib/glossary-data";
import { Search } from "lucide-react";

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredGlossary = glossaryData.filter(
    (item) =>
      item.term.toLowerCase().includes(searchQuery) ||
      item.definition.toLowerCase().includes(searchQuery)
  );
  
  const groupedGlossary = filteredGlossary.reduce((acc, item) => {
    const firstLetter = item.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  const sortedGroups = Object.keys(groupedGlossary).sort();


  return (
    <div className="flex flex-col h-full gap-4">
       <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Glossary</h1>
        <p className="text-muted-foreground">
          Definitions for common programming terms and concepts.
        </p>
      </div>

       <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for a term..."
          className="pl-10 w-full"
          onChange={handleSearchChange}
        />
      </div>
      
      {filteredGlossary.length > 0 ? (
         <Accordion type="multiple" className="w-full">
            {sortedGroups.map((letter) => (
                <div key={letter} className="mb-8">
                    <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-b">{letter}</h2>
                    {groupedGlossary[letter].map((item) => (
                        <AccordionItem value={item.term} key={item.id}>
                            <AccordionTrigger className="text-lg hover:no-underline">
                                {item.term}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground prose prose-sm dark:prose-invert max-w-none">
                                <p>{item.definition}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </div>
            ))}
        </Accordion>
      ) : (
        <div className="text-center py-20">
            <p className="text-muted-foreground">No results found for "{searchQuery}".</p>
        </div>
      )}
    </div>
  );
}
