
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Copy, ArrowRight, BrainCircuit, Code, Workflow } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const ArrayVisual = () => (
    <div className="flex items-center justify-center gap-1 p-4 bg-muted/50 rounded-lg my-4">
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
    { property: "Access Time", details: "O(1) - The fastest possible.", complexity: "good" },
    { property: "Search Time (Unsorted)", details: "O(n) - Must check every element.", complexity: "bad" },
    { property: "Search Time (Sorted)", details: "O(log n) - With Binary Search.", complexity: "good" },
    { property: "Insertion (End of Dynamic Array)", details: "O(1) - Amortized time.", complexity: "good" },
    { property: "Insertion (Beginning/Middle)", details: "O(n) - Requires shifting elements.", complexity: "bad" },
    { property: "Deletion (End of Dynamic Array)", details: "O(1)", complexity: "good" },
    { property: "Deletion (Beginning/Middle)", details: "O(n) - Requires shifting elements.", complexity: "bad" },
];

const ComplexityBadge = ({ complexity }: { complexity: "good" | "bad" }) => (
    <Badge variant={complexity === 'good' ? 'default' : 'destructive'} className={complexity === 'good' ? 'bg-green-600' : ''}>
        {complexity.toUpperCase()}
    </Badge>
);

const codeSnippets = {
  python: `
# Declaration
# Python's list is a dynamic array.
arr = [10, 20, 30, 40, 50]

# --- Operations ---

# 1. Access (O(1))
print(f"Element at index 2: {arr[2]}")  # Output: 30

# 2. Update (O(1))
arr[1] = 25
print(f"Updated array: {arr}") # [10, 25, 30, 40, 50]

# 3. Traversal (O(n))
print("Iterating through array:")
for item in arr:
    print(item, end=" ")
print()

# 4. Insertion
# At end (O(1) amortized)
arr.append(60)
print(f"After append: {arr}") # [10, 25, 30, 40, 50, 60]

# At specific index (O(n))
arr.insert(2, 99) # Insert 99 at index 2
print(f"After insert at index 2: {arr}") # [10, 25, 99, 30, 40, 50, 60]

# 5. Deletion
# From end (O(1))
arr.pop()
print(f"After pop: {arr}") # [10, 25, 99, 30, 40, 50]

# From specific index (O(n))
arr.pop(2) # Removes element at index 2
print(f"After pop from index 2: {arr}") # [10, 25, 30, 40, 50]

# 6. Search (O(n))
try:
    index = arr.index(40)
    print(f"Found 40 at index: {index}")
except ValueError:
    print("40 not found in array")

# 7. Length (O(1))
print(f"Length of array: {len(arr)}")
`.trim(),
  cpp: `
#include <iostream>
#include <vector>
#include <algorithm> // For std::find

// C++'s std::vector is a dynamic array.
std::vector<int> arr = {10, 20, 30, 40, 50};

// --- Operations ---

// 1. Access (O(1))
std::cout << "Element at index 2: " << arr[2] << std::endl; // 30

// 2. Update (O(1))
arr[1] = 25;

// 3. Traversal (O(n))
std::cout << "Iterating through array: ";
for (int item : arr) {
    std::cout << item << " ";
}
std::cout << std::endl;

// 4. Insertion
// At end (O(1) amortized)
arr.push_back(60);

// At specific index (O(n))
arr.insert(arr.begin() + 2, 99); // Insert 99 at index 2

// 5. Deletion
// From end (O(1))
arr.pop_back();

// From specific index (O(n))
arr.erase(arr.begin() + 2); // Removes element at index 2

// 6. Search (O(n))
auto it = std::find(arr.begin(), arr.end(), 40);
if (it != arr.end()) {
    std::cout << "Found 40 at index: " << std::distance(arr.begin(), it) << std::endl;
}

// 7. Length (O(1))
std::cout << "Length of array: " << arr.size() << std::endl;
`.trim(),
  java: `
import java.util.ArrayList;
import java.util.Collections;

// Java's ArrayList is a dynamic array.
ArrayList<Integer> arr = new ArrayList<>();
Collections.addAll(arr, 10, 20, 30, 40, 50);

// --- Operations ---

// 1. Access (O(1))
System.out.println("Element at index 2: " + arr.get(2)); // 30

// 2. Update (O(1))
arr.set(1, 25);
System.out.println("Updated array: " + arr);

// 3. Traversal (O(n))
System.out.print("Iterating through array: ");
for (Integer item : arr) {
    System.out.print(item + " ");
}
System.out.println();

// 4. Insertion
// At end (O(1) amortized)
arr.add(60);
System.out.println("After add: " + arr);

// At specific index (O(n))
arr.add(2, 99); // Insert 99 at index 2
System.out.println("After insert at index 2: " + arr);

// 5. Deletion
// From end (O(1) amortized)
arr.remove(arr.size() - 1);
System.out.println("After remove from end: " + arr);

// From specific index (O(n))
arr.remove(2); // Removes element at index 2
System.out.println("After remove from index 2: " + arr);

// 6. Search (O(n))
int index = arr.indexOf(40);
System.out.println("Found 40 at index: " + index);

// 7. Length (O(1))
System.out.println("Length of array: " + arr.size());
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
             <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                The array is the most fundamental data structure, forming the basis for many others. Its strength lies in providing constant-time access to any element, making it incredibly fast for read-heavy tasks.
            </p>
        </header>

        <Card>
            <CardHeader><CardTitle>Visual Diagram</CardTitle></CardHeader>
            <CardContent>
                <CardDescription>
                    An array stores elements in a contiguous block of memory. Each position, or "slot," is identified by an integer index, which starts at 0. This structure allows for direct calculation of an element's memory address, which is why accessing any element is so fast.
                </CardDescription>
                <ArrayVisual />
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Core Concepts</CardTitle>
                <CardDescription>Understanding these concepts is key to using arrays effectively.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Contiguous Memory</AccordionTrigger>
                        <AccordionContent>
                           Unlike a linked list, array elements are stored right next to each other in memory. This has two major benefits: 1) It allows for O(1) access because the computer can calculate the exact memory address of any element using its index (`address = start_address + index * element_size`). 2) It leads to excellent cache performance, as loading one element from memory often pre-loads adjacent elements into the faster cache.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Static vs. Dynamic Arrays</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Static Arrays:</strong> Have a fixed size determined at compile time. They are simple and memory-efficient but cannot be resized. C-style arrays (`int arr[10];`) are a classic example.</li>
                                <li><strong>Dynamic Arrays:</strong> Can grow and shrink at runtime. Under the hood, when a dynamic array runs out of space, it allocates a new, larger block of memory and copies all the old elements over. This is why appending is considered "amortized" O(1) — while most appends are fast, some will trigger a slow O(n) copy operation. Python's `list`, C++'s `std::vector`, and Java's `ArrayList` are all dynamic arrays.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Homogeneous Data Type</AccordionTrigger>
                        <AccordionContent>
                            Traditionally, arrays store elements of the same data type (e.g., an array of integers, an array of strings). This allows for predictable memory allocation, as every element occupies the same amount of space. Languages like Python offer more flexibility, but in statically-typed languages like C++ and Java, this rule is strictly enforced.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>


         <Card>
            <CardHeader><CardTitle>Properties & Time Complexity</CardTitle></CardHeader>
            <CardContent>
                 <CardDescription>Time complexity describes how the runtime of an operation grows as the size of the array (n) grows. Understanding these is crucial for writing efficient algorithms.</CardDescription>
                <Table className="mt-4">
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
            <CardHeader>
                <CardTitle>Common Operations</CardTitle>
                <CardDescription>Code examples for the most frequent array operations in popular languages.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="python">
                    <TabsList>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="cpp">C++</TabsTrigger>
                        <TabsTrigger value="java">Java</TabsTrigger>
                    </TabsList>
                    {Object.entries(codeSnippets).map(([lang, code]) => (
                        <TabsContent value={lang} key={lang}>
                            <div className="relative bg-muted rounded-md p-4 font-code text-sm mt-4">
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
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Workflow className="h-6 w-6 text-primary"/>Advanced Techniques & Patterns</CardTitle>
                <CardDescription>Leverage arrays to solve complex problems with these common and efficient patterns.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                     <AccordionItem value="item-1">
                        <AccordionTrigger>Two Pointers</AccordionTrigger>
                        <AccordionContent>
                           The Two-Pointer technique involves using two pointers (indices) that move through the array to solve problems. They can move towards each other, away from each other, or in the same direction. It's extremely useful for problems on sorted arrays, such as finding pairs that sum to a target, or reversing an array in-place.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Sliding Window</AccordionTrigger>
                        <AccordionContent>
                           This pattern involves creating a "window" over a portion of the array, which then slides across the array as you process it. The window can be of a fixed or variable size. It's perfect for problems involving finding the longest/shortest subarray that satisfies a condition, or finding the maximum/minimum sum of a fixed-size subarray.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Prefix Sum</AccordionTrigger>
                        <AccordionContent>
                           A prefix sum array is a pre-calculated array where each element `prefix[i]` stores the sum of all elements from the original array up to index `i`. This allows you to calculate the sum of any subarray `[j...k]` in O(1) time by computing `prefix[k] - prefix[j-1]`. It's a powerful pre-computation technique for problems involving frequent range sum queries.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    Interactive Mini-Challenges
                </CardTitle>
                <CardDescription>Ready to test your knowledge? Put these concepts into practice.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-12">
                <Button asChild size="lg">
                    <Link href="/treasure/array/challenges">
                        Start Challenges
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

         <Card>
            <CardHeader><CardTitle>What's Next?</CardTitle></CardHeader>
            <CardContent className="space-y-2">
                <Link href="/treasure/linked-list" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                    <div>
                        <h3 className="font-semibold text-primary">Linked List</h3>
                        <p className="text-sm text-muted-foreground">Explore the Linked List to see how it solves the array's O(n) insertion/deletion problem.</p>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                </Link>
                 <Link href="/dsa-with-python" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                     <div>
                        <h3 className="font-semibold text-primary">Practice Array Problems</h3>
                        <p className="text-sm text-muted-foreground">Apply your knowledge by tackling common array problems on LeetCode or HackerRank.</p>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </CardContent>
        </Card>

    </div>
  );
}
