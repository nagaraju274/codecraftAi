
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  MessageSquare,
  Zap,
  GraduationCap,
  Lightbulb,
  Code,
  Search,
  Monitor,
  Workflow,
  CheckCircle,
  ShieldCheck,
  Cpu,
  Layers,
  Globe,
  Activity,
  ArrowLeft,
  ArrowRight,
  Database,
  History,
  Terminal,
  Binary,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: STL Foundations & Linear Structures",
    level: "Beginner",
    steps: [
      {
        what: "C++ STL & Memory Management",
        why: "To understand the Standard Template Library (STL) and how C++ manages memory via pointers and references, which is the foundation of high-performance coding.",
        time: "1 Week",
        prereqs: "Basic C++ Syntax",
        resources: [
          { name: "C++ STL Complete Pipeline (YouTube - Striver)", url: "https://www.youtube.com/watch?v=RRVYpI8qF8M" },
          { name: "Pointers and Memory in C++", url: "https://www.geeksforgeeks.org/pointers-in-cpp/" },
        ],
        practice: "Implement a simple swap function using references. Explore std::vector and std::pair in the STL.",
      },
      {
        what: "Time & Space Complexity (Big O)",
        why: "To write code that doesn't just work, but works efficiently. You must know how your code behaves as data scales.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Big O Notation Explained", url: "https://www.youtube.com/watch?v=v4cd1O4zkGw" },
          { name: "Asymptotic Analysis Guide", url: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/" },
        ],
        practice: "Analyze the time complexity of a single loop vs. nested loops. Practice identifying O(1), O(n), and O(n^2) patterns.",
      },
      {
        what: "Arrays & Strings (std::vector, std::string)",
        why: "Arrays are the most used data structure. Master C++ strings and dynamic arrays (vectors) for 80% of easy interview questions.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "C++ Vectors Tutorial", url: "https://www.youtube.com/watch?v=PocJ5DHYfPM" },
          { name: "String Manipulation in C++", url: "https://www.geeksforgeeks.org/string-in-cpp/" },
        ],
        practice: "Build a program to reverse an array in-place. Solve 'Maximum Subarray Sum' (Kadane's) using vectors.",
      },
      {
        what: "Recursion & Backtracking Basics",
        why: "To solve problems that can be broken into smaller sub-problems. This is the logic used in Trees, Graphs, and DP.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Recursion Playlist (YouTube - Aditya Verma)", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWeT1ffqc8-k64hG5OGooTRu" },
        ],
        practice: "Write recursive functions for Factorial, Fibonacci, and Binary Search. Solve the 'Subsets' problem.",
      },
      {
        what: "Linked Lists (Singly & Doubly)",
        why: "To understand dynamic memory and pointer manipulation. Linked lists are fundamental for building Queues and Stacks.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Linked List in C++ (YouTube)", url: "https://www.youtube.com/watch?v=ndSAsidZshA" },
        ],
        practice: "Implement a Singly Linked List from scratch with insert, delete, and reverse operations.",
      },
      {
        what: "Stacks & Queues (STL)",
        why: "Essential for managing order. Stacks (LIFO) handle recursion and undo logic; Queues (FIFO) handle task scheduling.",
        time: "1 Week",
        prereqs: "Step 3, Step 5",
        resources: [
          { name: "Stack and Queue STL Guide", url: "https://www.youtube.com/watch?v=91STv6OnLRg" },
        ],
        practice: "Solve 'Valid Parentheses' using a stack. Implement a Queue using two stacks.",
      },
      {
        what: "Bit Manipulation",
        why: "For lightning-fast constant-time optimizations. Critical for competitive programming and specific technical rounds.",
        time: "4 Days",
        prereqs: "Binary Math",
        resources: [
          { name: "Bit Manipulation Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwLz3Ot69ybQHzSfUBchPRu2" },
        ],
        practice: "Solve 'Power of Two' and 'Count Set Bits' using bitwise operators (&, |, ^, <<, >>).",
      },
      {
        what: "Hashing (unordered_map, unordered_set)",
        why: "The most powerful tool for O(1) average lookup. Essential for frequency counting and fast data retrieval.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Hashing in C++ STL", url: "https://www.youtube.com/watch?v=Ke89p4z8ZHM" },
        ],
        practice: "Implement a frequency counter for characters in a string. Solve 'Two Sum' using a hash map.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Non-Linear Structures & Algorithms",
    level: "Intermediate",
    steps: [
      {
        what: "Sorting & Searching Algorithms",
        why: "To organize data efficiently. Master Binary Search (O(log n)) and sorting like Merge Sort and Quick Sort (O(n log n)).",
        time: "1 Week",
        prereqs: "Step 2, Step 4",
        resources: [
          { name: "Binary Search Mastery", url: "https://www.youtube.com/watch?v=j_H_6jqO_OE" },
          { name: "Sorting Algorithms Playlist", url: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwKedT2KfDMB9K50rqkhswqX" },
        ],
        practice: "Implement Binary Search recursively. Solve 'Search in Rotated Sorted Array'.",
      },
      {
        what: "Binary Trees & Traversals",
        why: "To represent hierarchical data. Master In-order, Pre-order, Post-order, and Level-order (BFS) traversals.",
        time: "1 Week",
        prereqs: "Step 4, Step 5",
        resources: [
          { name: "Binary Tree Series (Striver)", url: "https://www.youtube.com/watch?v=_ANrF3FJm7I&list=PLgUwDviBHe0SmLBZmcEuxov6SKSuTyY8_" },
        ],
        practice: "Build a binary tree and implement all four traversals. Calculate the 'Height' of a tree.",
      },
      {
        what: "Binary Search Trees (BST)",
        why: "A special tree allowing O(log n) search, insert, and delete. The basis for set and map in STL.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "BST Concepts & Operations", url: "https://www.youtube.com/watch?v=p7-9UvDQZ3w" },
        ],
        practice: "Implement 'Insert' and 'Search' in a BST. Find the 'LCA' (Lowest Common Ancestor) of two nodes.",
      },
      {
        what: "Heaps & Priority Queues",
        why: "To efficiently find the min/max element. Essential for Dijkstra's and Top-K problems.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Heap Implementation & Priority Queue", url: "https://www.youtube.com/watch?v=HqPJF2L5h9U" },
        ],
        practice: "Implement a Max-Heap using an array. Solve 'Kth Largest Element' using STL priority_queue.",
      },
      {
        what: "Graph Basics: BFS & DFS",
        why: "Graphs model real-world networks (Social media, Maps). Master the two core traversal techniques.",
        time: "1 Week",
        prereqs: "Step 6, Step 8, Step 10",
        resources: [
          { name: "Graph Series (YouTube - Striver)", url: "https://www.youtube.com/watch?v=M3_pLsDdeuU&list=PLgUwDviBHe0oE5JQDUMhpZr8Z738IXyzX" },
        ],
        practice: "Represent a graph using an Adjacency List. Implement BFS and DFS traversal.",
      },
      {
        what: "Greedy Algorithms",
        why: "To solve optimization problems by making the locally optimal choice at each step.",
        time: "1 Week",
        prereqs: "Step 9, Step 12",
        resources: [
          { name: "Greedy Algorithms Guide", url: "https://www.youtube.com/watch?v=ARvQitOC284" },
        ],
        practice: "Solve the 'Activity Selection' and 'Fractional Knapsack' problems.",
      },
      {
        what: "Backtracking: State Space Search",
        why: "To solve puzzles and pathfinding problems by exploring all possibilities and pruning invalid ones.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Backtracking Playlist", url: "https://www.youtube.com/watch?v=DKCbsiDBN6c&list=PLgUwDviBHe0rGlzInqcbiRKsd6M5wNoqn" },
        ],
        practice: "Solve 'N-Queens' and 'Sudoku Solver' using recursion and backtracking.",
      },
      {
        what: "Sliding Window & Two Pointers",
        why: "Essential techniques for optimizing O(n^2) array problems into O(n). High priority for technical interviews.",
        time: "1 Week",
        prereqs: "Step 3, Step 8",
        resources: [
          { name: "Sliding Window Mastery", url: "https://www.youtube.com/watch?v=jpvU_Z6BK_0" },
        ],
        practice: "Solve 'Longest Substring Without Repeating Characters' and 'Smallest Window containing all characters'.",
      },
    ],
  },
  {
    title: "Advanced Stage: DP, Tries & Complex Optimization",
    level: "Advanced",
    steps: [
      {
        what: "Dynamic Programming: Intro & Memoization",
        why: "The most feared interview topic. Learn to optimize recursive solutions by storing results of sub-problems.",
        time: "1 Week",
        prereqs: "Step 4, Step 15",
        resources: [
          { name: "DP Series (YouTube - Aditya Verma)", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWacth7mTeoggw_xhv7nd7CI" },
        ],
        practice: "Convert recursive Fibonacci to Memoized. Solve '0/1 Knapsack' using DP.",
      },
      {
        what: "Dynamic Programming: Tabulation & Space Optimization",
        why: "To write memory-efficient iterative DP solutions that are stable and fast.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Tabulation vs Memoization", url: "https://www.geeksforgeeks.org/tabulation-vs-memoization/" },
        ],
        practice: "Solve 'Coin Change' and 'Edit Distance' using 2D tabulation. Optimize to 1D if possible.",
      },
      {
        what: "Advanced Graphs (Shortest Path & MST)",
        why: "To find optimal routes. Master Dijkstra's, Bellman-Ford, and Kruskal's for Minimum Spanning Trees.",
        time: "1 Week",
        prereqs: "Step 12, Step 13",
        resources: [
          { name: "Dijkstra's Algorithm Guide", url: "https://www.youtube.com/watch?v=XB4MIexjvY0" },
        ],
        practice: "Implement Dijkstra's using STL priority_queue. Solve Kruskal's algorithm for MST.",
      },
      {
        what: "Disjoint Set Union (DSU)",
        why: "To efficiently manage connected components. Used in Kruskal's and dynamic connectivity problems.",
        time: "4 Days",
        prereqs: "Step 13",
        resources: [
          { name: "DSU Tutorial (Striver)", url: "https://www.youtube.com/watch?v=aBxjDBC4M1U" },
        ],
        practice: "Implement DSU with Path Compression and Union by Rank. Solve 'Number of Connected Components'.",
      },
      {
        what: "Tries (Prefix Trees)",
        why: "Optimized for string searching and prefix matching. Used in search engines and dictionaries.",
        time: "1 Week",
        prereqs: "Step 10, Step 11",
        resources: [
          { name: "Trie Implementation in C++", url: "https://www.youtube.com/watch?v=dBGUmUQhjaM" },
        ],
        practice: "Build a Trie from scratch. Implement 'insert', 'search', and 'startsWith' methods.",
      },
      {
        what: "Segment Trees & Fenwick Trees",
        why: "For logarithmic-time range queries (sum, min, max) and point updates. Vital for advanced competitive coding.",
        time: "1 Week",
        prereqs: "Step 10, Step 17",
        resources: [
          { name: "Segment Tree Series", url: "https://www.youtube.com/watch?v=ZBHKZF5w4YU" },
        ],
        practice: "Implement a Segment Tree to solve 'Range Minimum Query' with updates.",
      },
      {
        what: "Number Theory for DSA",
        why: "To solve math-heavy problems involving GCD, Sieve of Eratosthenes, and Modular Exponentiation.",
        time: "1 Week",
        prereqs: "Basic Math",
        resources: [
          { name: "Number Theory for CP", url: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwLz3Ot69ybQHzSfUBchPRu2" },
        ],
        practice: "Implement Sieve to find all primes up to N. Calculate (a^b)%m efficiently.",
      },
      {
        what: "Competitive Programming Strategy",
        why: "To prepare for online coding rounds and improve speed/accuracy under high pressure.",
        time: "Ongoing",
        prereqs: "All previous stages",
        resources: [
          { name: "CP Algorithms (Handbook)", url: "https://cp-algorithms.com/" },
        ],
        practice: "Participate in Weekly LeetCode contests. Aim for solving 3/4 problems consistently.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Valid Parentheses Engine", teaches: "Stacks, HashMaps, and logic-driven parsing.", tech: "C++, STL Stack" },
  { level: "Beginner", title: "Anagram Solver", teaches: "Hashing, Sorting, and character mapping.", tech: "C++, unordered_map" },
  { level: "Beginner", title: "Array-Based Phonebook", teaches: "Vector management, Sorting, and Binary Search.", tech: "C++, Vector" },
  { level: "Intermediate", title: "Maze Path Finder", teaches: "Graph BFS, 2D Matrix traversal, and Queue management.", tech: "C++, Queue" },
  { level: "Intermediate", title: "Huffman Coding Compressor", teaches: "Greedy algorithms, Binary Trees, and Priority Queues.", tech: "C++, Heap" },
  { level: "Intermediate", title: "Sudoku Solver Dashboard", teaches: "Backtracking, Recursion, and constraint satisfaction.", tech: "C++" },
  { level: "Intermediate", title: "Binary Tree Visualizer", teaches: "Recursive traversals, Serialization, and Node architecture.", tech: "C++" },
  { level: "Advanced", title: "Autocomplete Search Suggestor", teaches: "Tries, efficient string storage, and prefix logic.", tech: "C++, Trie" },
  { level: "Advanced", title: "Shortest Route Finder (Maps)", teaches: "Dijkstra's, Graph weights, and Path reconstruction.", tech: "C++, DSU, Heap" },
  { level: "Advanced", title: "Range Query Library", teaches: "Segment Trees, Fenwick Trees, and logarithmic performance.", tech: "C++, Segment Tree" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on core linear structures and basic search/sort to clear standard technical screenings.",
    schedule: [
      "Days 1-7: C++ STL, Time Complexity, and Arrays/Vectors.",
      "Days 8-15: Linked Lists, Recursion, and Strings.",
      "Days 16-23: Stacks, Queues, and Hashing mastery.",
      "Days 24-30: Binary Search and basic Sorting (Merge/Quick).",
    ]
  },
  {
    title: "60-Day Standard Plan: The Interview Ready",
    description: "Balanced path covering Trees, Graphs, and Greedy algorithms for top-tier product roles.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Binary Trees, BSTs, and Heap logic.",
      "Days 41-60: Graph BFS/DFS, Greedy, Backtracking, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Algorithm Architect",
    description: "Comprehensive path including Dynamic Programming, Tries, and Advanced Graph Theory for MAANG roles.",
    schedule: [
      "Days 1-30: Core Linear & Non-Linear fundamentals.",
      "Days 31-60: Graph Optimization and Intermediate projects.",
      "Days 61-90: Dynamic Programming, Tries, Segment Trees, and Mock Contests.",
    ]
  }
];

const interviewTopics = [
  "C++ STL Internal implementation (Vector doubling, Map as Red-Black Tree).",
  "Time & Space Complexity analysis (Worst, Average, Best cases).",
  "Pointers vs. References in DSA implementation.",
  "Difference between set and unordered_set (and when to use which).",
  "How recursion uses the internal Stack (Recursion limit/Stack Overflow).",
  "Stable vs. Unstable sorting algorithms.",
  "Dijkstra's vs. Bellman-Ford: Handling negative weights.",
  "Dynamic Programming: State identification and transition formulas.",
  "The role of the 'this' pointer in custom Node structures.",
  "Binary Search variants (Lower Bound, Upper Bound, Search in Rotated).",
];

const codingQuestions = [
  { question: "Reverse a Linked List in one pass using iteration.", topic: "Linked List" },
  { question: "Find the maximum sum subarray (Kadane's Algorithm).", topic: "Arrays" },
  { question: "Check if a Binary Tree is a valid BST.", topic: "BST/Recursion" },
  { question: "Implement a thread-safe Queue using Mutex (for systems roles).", topic: "Concurrency/DSA" },
];

const mcqs = [
  { question: "Which C++ STL container allows O(1) random access?", options: ["List", "Vector", "Stack", "Map"], answer: "Vector" },
  { question: "What is the time complexity of searching in a balanced BST?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: "O(log n)" },
  { question: "Which sorting algorithm is used by std::sort in most implementations?", options: ["QuickSort", "MergeSort", "IntroSort", "HeapSort"], answer: "IntroSort" },
];

const mistakes = [
  "Ignoring Time Complexity: Writing code that works but fails on large inputs (TLE).",
  "Tutorial Hell: Watching videos without manually coding the data structures.",
  "Forgetting Base Cases: Leading to infinite recursion and stack overflow.",
  "Hardcoding sizes: Not using dynamic structures like vector, leading to memory issues.",
  "Not handling Edge Cases: Failing on empty inputs, single node lists, or null pointers.",
  "Comparing with == for floating points: Use a small epsilon threshold instead.",
  "Ignoring STL: Trying to implement everything from scratch when optimized tools exist.",
  "Not practicing on Whiteboards: Struggling to explain logic without an IDE's auto-complete.",
  "Skipping Space Complexity: Modern apps are memory-intensive; every byte counts.",
  "Lack of Consistency: Solving 10 problems in a day and then nothing for a week.",
];

export default function DsaCppRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Code className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            DSA with C++ Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering Data Structures and Algorithms using the high-performance power of C++. From Big O to Dynamic Programming.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to roadmaps
          </Link>
        </Button>

        {stages.map((stage) => (
          <Card key={stage.title} className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3 text-primary">
                <Brain className="h-8 w-8" />
                {stage.title}
              </CardTitle>
              <CardDescription>Follow these {stage.steps.length} steps to progress from {stage.level}.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs shrink-0">{index + 1}</span>
                        {step.what}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <p><strong>Why it’s important:</strong> {step.why}</p>
                            <p><strong>Time Estimate:</strong> {step.time}</p>
                            <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-xl border border-border">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-primary"><Monitor className="h-4 w-4"/> Practice Task:</h4>
                            <p className="text-sm leading-relaxed">{step.practice}</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3 text-sm flex items-center gap-2"><Code className="h-4 w-4 text-primary"/> Free Resources:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.resources.map(res => (
                              <li key={res.url} className="list-none">
                                <a href={res.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                  <div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20">
                                    <Zap className="h-3 w-3 text-primary"/>
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{res.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        <Card className="border-2 border-primary/20 bg-primary/[0.02]">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
            <CardDescription>Apply your knowledge with these hands-on projects designed for your GitHub portfolio.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <Card key={p.title} className="bg-card hover:shadow-md transition-all border-2">
                <CardHeader className="pb-3">
                  <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                  <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p className="text-muted-foreground line-clamp-2"><strong>Teaches:</strong> {p.teaches}</p>
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded text-primary">
                    <Terminal className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Pick a timeline that matches your availability and goals.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="p-6 border-2 rounded-2xl bg-card shadow-sm hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-xl mb-3 text-primary">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.schedule.map(item => (
                      <li key={item} className="text-sm flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent bg-accent/5">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
            <CardDescription>Master the topics and questions required to land a role at top product companies.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Critical Interview Topics</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {interviewTopics.map(topic => (
                    <li key={topic} className="flex items-center gap-2 text-sm bg-background p-2 rounded-lg border shadow-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Coding Challenges</h3>
                <div className="space-y-3">
                  {codingQuestions.map(q => (
                    <div key={q.question} className="p-4 border rounded-xl bg-card hover:border-primary/30 transition-colors">
                      <p className="font-semibold text-xs uppercase tracking-wider text-primary mb-1">{q.topic}</p>
                      <p className="text-sm leading-relaxed">{q.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t space-y-6">
              <h3 className="font-bold text-xl text-center">Resume & Profile Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['C++', 'STL', 'Data Structures', 'Algorithms', 'Big O Analysis', 'Recursion', 'Dynamic Programming', 'Graph Theory', 'Trees', 'Dijkstra', 'Segment Tree', 'Backtracking'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain an active LeetCode/GitHub profile with consistent streak.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain the logic and complexity in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use modern C++ standards (C++17 or C++20) in your code.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <Lightbulb className="h-6 w-6"/>
              10 Mistakes to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {mistakes.map((mistake, i) => (
                <li key={i} className="text-sm flex items-start gap-3 text-foreground/80">
                  <span className="text-destructive font-black shrink-0">{i + 1}.</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center py-16 bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[3rem] border-2 shadow-inner">
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Logic, Master the Code</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            DSA is the soul of software engineering. Mastering it with C++ gives you an unparalleled understanding of performance and memory. Stay consistent, solve one problem every day, and never stop questioning "how can this be faster?". Your journey to becoming a world-class problem solver starts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2">
              <Link href="/learn">
                Explore Other Roadmaps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
