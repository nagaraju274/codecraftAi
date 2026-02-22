
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
    title: "Beginner Stage: Linear Foundations & Java Collections",
    level: "Beginner",
    steps: [
      {
        what: "Java Basics for DSA & Memory Management",
        why: "To understand how Java handles objects, references, and the heap/stack memory, which is crucial for building and debugging data structures.",
        time: "1 Week",
        prereqs: "Basic Java Syntax",
        resources: [
          { name: "Java Memory Management (Baeldung)", url: "https://www.baeldung.com/java-stack-heap" },
          { name: "Java Collection Framework (YouTube - Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=2pDzee8iz6M" },
        ],
        practice: "Explain the difference between pass-by-value and pass-by-reference in Java. Implement a custom wrapper class.",
      },
      {
        what: "Time & Space Complexity (Big O Notation)",
        why: "To measure algorithm efficiency. You must know if your code will scale as input size (n) grows.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Big O Notation Explained (YouTube)", url: "https://www.youtube.com/watch?v=v4cd1O4zkGw" },
          { name: "Space Complexity Guide", url: "https://www.geeksforgeeks.org/g-fact-86/" },
        ],
        practice: "Analyze the time complexity of a nested loop vs. a single loop. Calculate the space of an array of size n.",
      },
      {
        what: "Static & Dynamic Arrays (ArrayList)",
        why: "Arrays are the simplest data structure. ArrayLists provide dynamic sizing, which is used in 90% of real-world apps.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Arrays in Java (Official Docs)", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" },
          { name: "How ArrayList Works internally", url: "https://www.geeksforgeeks.org/how-arraylist-works-internally-in-java/" },
        ],
        practice: "Implement a dynamic array from scratch using a static array. Handle resizing (growing) when the capacity is reached.",
      },
      {
        what: "Recursion Basics",
        why: "Recursion is the foundation for advanced topics like Trees, Graphs, and DP. You must master the 'base case' and 'recursive call'.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Recursion for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=M2uO9nMT0Bk" },
        ],
        practice: "Write recursive functions for Factorial, Fibonacci, and Binary Search.",
      },
      {
        what: "Singly & Doubly Linked Lists",
        why: "To understand pointers/references and how to build non-contiguous structures that offer O(1) insertions at the head.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Linked List Implementation (YouTube)", url: "https://www.youtube.com/watch?v=58Y9zLo4l_4" },
        ],
        practice: "Implement a custom Singly Linked List with methods for insert, delete, and search. Then, reverse the list in-place.",
      },
      {
        what: "Stacks (LIFO) & Queues (FIFO)",
        why: "Essential for managing order. Stacks are used in undo/redo and recursion; Queues are used in task scheduling and BFS.",
        time: "1 Week",
        prereqs: "Step 3, Step 5",
        resources: [
          { name: "Java Stack Class Docs", url: "https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html" },
          { name: "Queue Interface Guide", url: "https://www.baeldung.com/java-queue" },
        ],
        practice: "Implement a stack using two queues and a queue using two stacks. Solve the 'Valid Parentheses' problem.",
      },
      {
        what: "Hashing & Hash Maps",
        why: "The most powerful tool for O(1) average lookup. You must understand collisions and how Java's HashMap works internally.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Internal working of HashMap", url: "https://www.geeksforgeeks.org/internal-working-of-hashmap-java/" },
        ],
        practice: "Implement a simple frequency counter for a string using a HashMap. Learn the difference between HashMap and HashSet.",
      },
      {
        what: "String Manipulation & Patterns",
        why: "Strings are immutable in Java. Learning StringBuilder and pattern matching is vital for string-heavy interview questions.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "StringBuilder vs StringBuffer", url: "https://www.geeksforgeeks.org/stringbuffer-vs-stringbuilder-in-java/" },
        ],
        practice: "Write a function to check if two strings are anagrams. Find the longest palindromic substring.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Trees, Graphs & Sorting",
    level: "Intermediate",
    steps: [
      {
        what: "Binary Trees & Traversals",
        why: "To model hierarchical data. Master In-order, Pre-order, Post-order, and Level-order (BFS) traversals.",
        time: "1 Week",
        prereqs: "Step 4, Step 5",
        resources: [
          { name: "Binary Tree Traversals (YouTube)", url: "https://www.youtube.com/watch?v=982LhGbfNi4" },
        ],
        practice: "Build a binary tree and implement all four traversals using both recursion and iteration.",
      },
      {
        what: "Binary Search Trees (BST)",
        why: "A special tree that allows for efficient searching, insertion, and deletion in O(log n) time.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "BST Operations Guide", url: "https://www.baeldung.com/java-binary-tree" },
        ],
        practice: "Implement a BST with 'Insert', 'Search', and 'Delete' operations. Find the K-th smallest element.",
      },
      {
        what: "Heaps & Priority Queues",
        why: "To efficiently find the min/max element. Essential for Dijkstra's algorithm and finding Top-K elements.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Java PriorityQueue Tutorial", url: "https://www.geeksforgeeks.org/priority-queue-class-in-java/" },
        ],
        practice: "Implement a Min-Heap from scratch using an array. Solve the 'Kth Largest Element in an Array' problem.",
      },
      {
        what: "Graph Basics: BFS & DFS",
        why: "Graphs model networks. Breadth-First Search (BFS) finds shortest paths; Depth-First Search (DFS) explores connections.",
        time: "1 Week",
        prereqs: "Step 6, Step 9",
        resources: [
          { name: "Graph Representation (Adjacency List)", url: "https://www.geeksforgeeks.org/graph-and-its-representations/" },
          { name: "BFS vs DFS Explained", url: "https://www.youtube.com/watch?v=pcKY4hjDrxk" },
        ],
        practice: "Represent a graph using an Adjacency List (Map of Lists). Implement BFS and DFS to traverse the graph.",
      },
      {
        what: "Divide & Conquer Algorithms",
        why: "To solve complex problems by breaking them into smaller sub-problems. Foundation for efficient sorting.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Divide and Conquer (Introduction)", url: "https://www.geeksforgeeks.org/divide-and-conquer-algorithm-introduction/" },
        ],
        practice: "Implement Merge Sort and Quick Sort. Analyze why they are faster than simple sorting algorithms.",
      },
      {
        what: "Greedy Algorithms",
        why: "To find locally optimal solutions that lead to a global optimum. Fast and efficient for specific problem types.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Greedy Algorithms Explained", url: "https://www.youtube.com/watch?v=ARvQitOC284" },
        ],
        practice: "Solve the 'Activity Selection' and 'Fractional Knapsack' problems using a greedy approach.",
      },
      {
        what: "Backtracking Fundamentals",
        why: "To explore all possible solutions systematically. Used for puzzles, permutations, and pathfinding.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Backtracking Crash Course", url: "https://www.youtube.com/watch?v=DKCbsiDBN6c" },
        ],
        practice: "Solve the 'N-Queens' and 'Sudoku Solver' problems using recursion and backtracking.",
      },
      {
        what: "Advanced Sorting: Bucket, Radix, Counting",
        why: "To learn non-comparison based sorting algorithms that can run in O(n) time under specific conditions.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Radix Sort in Java", url: "https://www.baeldung.com/java-radix-sort" },
        ],
        practice: "Implement Counting Sort for an array of integers with a limited range.",
      },
    ],
  },
  {
    title: "Advanced Stage: DP, Tries & Complex Graphs",
    level: "Advanced",
    steps: [
      {
        what: "Dynamic Programming: Memoization",
        why: "To optimize recursive solutions by storing the results of expensive sub-problems (Top-Down approach).",
        time: "1 Week",
        prereqs: "Step 4, Step 15",
        resources: [
          { name: "Intro to Dynamic Programming", url: "https://www.youtube.com/watch?v=oBt53YbR9Kk" },
        ],
        practice: "Convert a slow recursive Fibonacci to a fast one using an array or map for memoization.",
      },
      {
        what: "Dynamic Programming: Tabulation",
        why: "To solve DP problems iteratively, saving stack space and often improving performance (Bottom-Up approach).",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Tabulation vs Memoization", url: "https://www.geeksforgeeks.org/tabulation-vs-memoization/" },
        ],
        practice: "Solve the 'Climbing Stairs' and 'Coin Change' problems using iterative tabulation.",
      },
      {
        what: "Advanced Graphs (Shortest Path)",
        why: "To find the best route in weighted graphs. Master Dijkstra's and Bellman-Ford algorithms.",
        time: "1 Week",
        prereqs: "Step 11, Step 12",
        resources: [
          { name: "Dijkstra's Algorithm Guide", url: "https://www.youtube.com/watch?v=XB4MIexjvY0" },
        ],
        practice: "Implement Dijkstra's algorithm using a PriorityQueue to find the shortest path from a source node.",
      },
      {
        what: "Tries (Prefix Trees)",
        why: "Highly efficient for string prefix searching, used in autocomplete and spell checkers.",
        time: "1 Week",
        prereqs: "Step 9, Step 10",
        resources: [
          { name: "Implementing a Trie in Java", url: "https://www.baeldung.com/trie-java" },
        ],
        practice: "Build a Trie from scratch. Implement 'insert', 'search', and 'startsWith' methods.",
      },
      {
        what: "Bit Manipulation",
        why: "To solve low-level optimization problems and specific interview puzzles with constant-time bitwise operations.",
        time: "4 Days",
        prereqs: "Binary Math",
        resources: [
          { name: "Bit Manipulation for Interviews", url: "https://www.youtube.com/watch?v=dbdfZ_v_WhE" },
        ],
        practice: "Implement 'find the single non-duplicate element' using XOR. Check if a number is a power of 2.",
      },
      {
        what: "Disjoint Set Union (DSU)",
        why: "To efficiently track connected components in a graph and implement Kruskal's MST algorithm.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Disjoint Set Data Structure", url: "https://www.geeksforgeeks.org/disjoint-set-data-structures/" },
        ],
        practice: "Implement DSU with Path Compression and Union by Rank. Solve 'Number of Connected Components'.",
      },
      {
        what: "Segment Trees & Fenwick Trees",
        why: "For lightning-fast range queries (sum, min, max) and point updates in O(log n) time.",
        time: "1 Week",
        prereqs: "Step 9, Step 13",
        resources: [
          { name: "Segment Tree Introduction", url: "https://www.youtube.com/watch?v=ZBHKZF5w4YU" },
        ],
        practice: "Implement a Segment Tree to perform range sum queries and point updates.",
      },
      {
        what: "Competitive Programming Strategy",
        why: "To prepare for top-tier coding contests and improve speed/accuracy under pressure.",
        time: "Ongoing",
        prereqs: "All previous stages",
        resources: [
          { name: "CP Handbook (Online)", url: "https://cp-algorithms.com/" },
        ],
        practice: "Participate in Weekly LeetCode contests or Codeforces rounds. Focus on accuracy over speed initially.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Balanced Parentheses Checker", teaches: "Stacks, HashMaps, String parsing.", tech: "Java, Stack" },
  { level: "Beginner", title: "Reverse Linked List Visualizer", teaches: "Pointer manipulation, Node structure.", tech: "Java, Graphics (optional)" },
  { level: "Beginner", title: "Employee Database (Simple)", teaches: "ArrayList, CRUD, sorting logic.", tech: "Java, ArrayList" },
  { level: "Intermediate", title: "Sudoku Solver Engine", teaches: "Backtracking, Recursion, Matrix navigation.", tech: "Java" },
  { level: "Intermediate", title: "Shortest Path in a Maze", teaches: "BFS, 2D Grid Graph, Queue management.", tech: "Java, Queue" },
  { level: "Intermediate", title: "Binary Tree Serializer", teaches: "Recursion, Level-order traversal, Serialization.", tech: "Java, StringBuilder" },
  { level: "Intermediate", title: "Frequency-based Text Auto-correct", teaches: "HashMap, Sorting, PriorityQueue.", tech: "Java, HashMap" },
  { level: "Advanced", title: "Search Engine Prefix Suggester", teaches: "Tries, efficient string storage, startsWith logic.", tech: "Java, Trie" },
  { level: "Advanced", title: "Stock Trading Strategy Optimizer", teaches: "Dynamic Programming, Kadane's algorithm, Greedy.", tech: "Java, DP" },
  { level: "Advanced", title: "Least Recently Used (LRU) Cache", teaches: "Doubly Linked List + HashMap (HashLinkedMap hybrid).", tech: "Java, Custom DLL" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on core linear structures and basic sorting to handle standard coding rounds.",
    schedule: [
      "Days 1-7: Java Syntax, Memory, and Arrays.",
      "Days 8-15: Linked Lists and Recursion.",
      "Days 16-23: Stacks, Queues, and Hashing.",
      "Days 24-30: Basic Sorting and 3 beginner projects.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Intermediate Pro",
    description: "Balanced path for building Tree, Graph, and Greedy algorithm skills.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Binary Trees, BSTs, and Heap logic.",
      "Days 46-60: Graph BFS/DFS, Greedy methods, and 2 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Algorithm Architect",
    description: "Comprehensive path including Dynamic Programming, Tries, and Advanced Graph Theory.",
    schedule: [
      "Days 1-30: Core Linear & Java Collection mastery.",
      "Days 31-60: Non-linear structures and Sorting/Searching.",
      "Days 61-90: Dynamic Programming, Tries, Segment Trees, and Contest prep.",
    ]
  }
];

const interviewTopics = [
  "Java Collection Framework (Internal working of ArrayList, HashMap).",
  "Time and Space Complexity analysis (Big O).",
  "OOPs in Java vs. Procedural logic in DSA.",
  "Difference between Abstract classes and Interfaces in DSA design.",
  "Garbage collection and its impact on performance-critical code.",
  "Recursion vs. Iteration: Stack overflow risks.",
  "Stable vs. Unstable sorting algorithms.",
  "In-place vs. Out-of-place algorithms.",
  "BFS vs. DFS: When to use which for shortest path.",
  "Dynamic Programming: State identification and transition formulas.",
];

const codingQuestions = [
  { question: "Find the middle of a Linked List in one pass.", topic: "Two Pointers" },
  { question: "Check if a Binary Tree is a valid BST.", topic: "BST/Recursion" },
  { question: "Implement a Thread-safe Stack in Java.", topic: "Concurrency/DSA" },
  { question: "Find the maximum sum of a contiguous subarray (Kadane's).", topic: "DP/Arrays" },
];

const mcqs = [
  { question: "Which data structure follows the LIFO principle?", options: ["Queue", "Stack", "List", "Tree"], answer: "Stack" },
  { question: "What is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"], answer: "O(n^2)" },
  { question: "Which Java collection allows storing key-value pairs?", options: ["ArrayList", "HashSet", "HashMap", "LinkedList"], answer: "HashMap" },
];

const mistakes = [
  "Ignoring Time Complexity: Writing code that works for small input but fails for large ones.",
  "Hardcoding types: Not using Generics, making code less reusable.",
  "Forgetting Base Cases in Recursion: Leads to StackOverflowError.",
  "Tutorial Hell: Watching videos without typing the code and solving problems manually.",
  "Comparing Strings with == instead of .equals(): A common Java-specific bug.",
  "Not handling edge cases (Empty input, null head, single node).",
  "Relying solely on built-in collections: Not knowing how to build them from scratch.",
  "Inefficient memory usage: Creating new objects inside loops unnecessarily.",
  "Skipping Space Complexity analysis: Modern memory is large, but not infinite.",
  "Premature Optimization: Trying to write the fastest code before ensuring it works correctly.",
];

export default function DsaJavaRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Code className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            DSA with Java Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering Data Structures and Algorithms using the robust power of Java. From Big O to Dynamic Programming.
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
            <CardDescription>Master the topics and questions required to land a software engineering role.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Collection Framework', 'Data Structures', 'Algorithms', 'Big O Analysis', 'Binary Search', 'Recursion', 'Dynamic Programming', 'Graph Theory', 'Trees', 'Heap', 'Trie'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain an active LeetCode/GitHub profile with consistent commits.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain the Time/Space complexity in the README of every project.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use professional Java coding standards (camelCase, JavaDoc).</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build Your Algorithmic Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Mastering DSA is more than just passing an interview; it's about training your mind to think logically and build efficient, scalable systems. Stay consistent, solve one problem every day, and never stop questioning "how can this be faster?". Your journey to becoming a world-class software engineer starts today!
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
