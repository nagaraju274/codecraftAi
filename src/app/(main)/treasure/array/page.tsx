
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Copy, ArrowRight } from "lucide-react";
import Link from "next/link";


const ArrayVisual = () => (
    <div className="flex items-center justify-center gap-1 p-4 bg-muted/50 rounded-lg">
        {[10, 20, 30, 40, 50].map((val, i) => (
            <TooltipProvider key={i}>
                <Tooltip>
                    <TooltipTrigger>
                        <div className="relative w-16 h-16 border-2 border-primary bg-background rounded flex items-center justify-center text-lg font-bold hover:bg-primary/10 transition-colors">
                            <span>{val}</span>
                            <span className="absolute -bottom-6 text-xs text-muted-foreground">{i}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Index: {i}, Value: {val}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ))}
    </div>
);

const properties = [
    { property: "Data Storage", details: "Stores elements of the same data type." },
    { property: "Memory", details: "Contiguous block of memory.", },
    { property: "Access Time", details: "O(1)", complexity: "good" },
    { property: "Search Time", details: "O(n) - Linear Scan", complexity: "bad" },
    { property: "Search Time (Sorted)", details: "O(log n) - Binary Search", complexity: "good" },
    { property: "Insertion (End)", details: "O(1) - Amortized", complexity: "good" },
    { property: "Insertion (Middle)", details: "O(n)", complexity: "bad" },
    { property: "Deletion (End)", details: "O(1)", complexity: "good" },
    { property: "Deletion (Middle)", details: "O(n)", complexity: "bad" },
];

const ComplexityBadge = ({ complexity }: { complexity: "good" | "bad" }) => (
    <Badge variant={complexity === 'good' ? 'default' : 'destructive'} className={complexity === 'good' ? 'bg-green-600' : ''}>
        {complexity.toUpperCase()}
    </Badge>
);

const codeSnippets = {
  python: `
arr = [10, 20, 30, 40, 50]

# Access
print(arr[2])  # Output: 30

# Insertion
arr.insert(2, 25) # Insert 25 at index 2

# Deletion
arr.pop(3) # Removes element at index 3

# Search
print(30 in arr) # True
`.trim(),
  cpp: `
#include <iostream>
#include <vector>

int main() {
    std::vector<int> arr = {10, 20, 30, 40, 50};

    // Access
    std::cout << arr[2] << std::endl; // 30

    // Insertion
    arr.insert(arr.begin() + 2, 25);

    // Deletion
    arr.erase(arr.begin() + 3);

    return 0;
}
`.trim(),
  java: `
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(10);
        arr.add(20);
        arr.add(30);
        arr.add(40);
        arr.add(50);

        // Access
        System.out.println(arr.get(2)); // 30

        // Insertion
        arr.add(2, 25);

        // Deletion
        arr.remove(3);
    }
}
`.trim()
};

export default function ArrayPage() {
  return (
    <div className="container mx-auto py-10 space-y-12">
        <header>
            <div className="flex items-center gap-4">
                 <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                    Array 📦
                </h1>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Info className="h-6 w-6 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>A collection of elements stored in contiguous memory locations, accessible by index.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </header>

        <Card>
            <CardHeader><CardTitle>Visual Diagram</CardTitle></CardHeader>
            <CardContent>
                <ArrayVisual />
            </CardContent>
        </Card>

         <Card>
            <CardHeader><CardTitle>Properties & Time Complexity</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>Details</TableHead>
                            <TableHead>Time Complexity</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {properties.map(p => (
                            <TableRow key={p.property}>
                                <TableCell className="font-semibold">{p.property}</TableCell>
                                <TableCell>{p.details}</TableCell>
                                <TableCell>
                                    {p.complexity && <ComplexityBadge complexity={p.complexity as "good" | "bad"} />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle>Common Operations</CardTitle></CardHeader>
            <CardContent>
                <Tabs defaultValue="python">
                    <TabsList>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="cpp">C++</TabsTrigger>
                        <TabsTrigger value="java">Java</TabsTrigger>
                    </TabsList>
                    {Object.entries(codeSnippets).map(([lang, code]) => (
                        <TabsContent value={lang} key={lang}>
                            <div className="relative bg-muted rounded-md p-4 font-code text-sm">
                                <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-7 w-7" onClick={() => navigator.clipboard.writeText(code)}>
                                    <Copy className="h-4 w-4" />
                                </Button>
                                <pre><code>{code}</code></pre>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Interactive Mini-Challenges</CardTitle></CardHeader>
            <CardContent className="text-center text-muted-foreground py-12">
                <p>(Interactive challenges coming soon!)</p>
            </CardContent>
        </Card>

         <Card>
            <CardHeader><CardTitle>Related Links</CardTitle></CardHeader>
            <CardContent className="space-y-2">
                <Link href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <span>Linked List → Compare with arrays</span>
                    <ArrowRight className="h-4 w-4" />
                </Link>
                 <Link href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <span>Common Problems → Sliding Window, Prefix Sum, Two Pointers</span>
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </CardContent>
        </Card>

    </div>
  );
}
