
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Python Foundations & Linear Structures",
    level: "Beginner",
    steps: [
      {
        what: "Big O Notation & Time Complexity",
        why: "To measure how efficient your code is as data grows. It's the primary language of technical interviews and software optimization.",
        time: "3 Days",
        prereqs: "Basic Algebra",
        resources: [
          { name: "Big O Notation Explained (YouTube)", url: "https://www.youtube.com/watch?v=v4cd1O4zkGw" },
          { name: "Python Time Complexity (Wiki)", url: "https://wiki.python.org/moin/TimeComplexity" },
        ],
        practice: "Calculate the time complexity of various Python loops and nested list comprehensions.",
      },
      {
        what: "Python Lists & Dynamic Arrays",
        why: "Lists are the most common structure in Python. Understanding how they grow (amortized O(1)) is crucial for performance.",
        time: "3 Days",
        prereqs: "Python Syntax",
        resources: [
          { name: "Python Lists Deep Dive", url: "https://realpython.com/python-lists-tuples/" },
        ],
        practice: "Solve 'Two Sum' and 'Contains Duplicate' on LeetCode using basic list methods.",
      },
      {
        what: "String Manipulation & Slicing",
        why: "Python strings are immutable. Learning efficient ways to manipulate them (like join() vs concatenation) prevents O(n^2) traps.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "String Methods in Python", url: "https://www.w3schools.com/python/python_ref_string.asp" },
        ],
        practice: "Implement a function to check for palindromes and another to reverse words in a sentence.",
      },
      {
        what: "Dictionaries & Hashing",
        why: "The most powerful tool for O(1) average lookup. Understanding how Python's hash map works internally is vital for efficiency.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Internal Working of Python Dicts (YouTube)", url: "https://www.youtube.com/watch?v=look-up-python-dict" },
        ],
        practice: "Build a character frequency counter. Solve 'Group Anagrams' using a dictionary.",
      },
      {
        what: "Linked Lists (Singly & Doubly)",
        why: "To understand pointers/references and build non-contiguous structures that allow O(1) insertions at the head.",
        time: "1 Week",
        prereqs: "OOP Basics (Classes)",
        resources: [
          { name: "Linked List in Python (YouTube)", url: "https://www.youtube.com/watch?v=JlMyYuNwudM" },
        ],
        practice: "Implement a custom Singly Linked List with 'insert', 'delete', and 'reverse' methods.",
      },
      {
        what: "Stacks & Queues (collections.deque)",
        why: "Essential for managing order. Stacks (LIFO) handle recursion; Queues (FIFO) handle task scheduling and BFS.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Python Deque Guide", url: "https://realpython.com/python-deque/" },
        ],
        practice: "Solve 'Valid Parentheses' using a stack. Implement a Queue using two stacks.",
      },
      {
        what: "Recursion & Backtracking Basics",
        why: "To solve problems that can be broken into smaller sub-problems. It's the logic used in Trees and Graphs.",
        time: "1 Week",
        prereqs: "Functions",
        resources: [
          { name: "Recursion Made Simple (YouTube)", url: "https://www.youtube.com/watch?v=M2uO9nMT0Bk" },
        ],
        practice: "Write recursive functions for Factorial, Fibonacci, and Binary Search.",
      },
      {
        what: "Searching Algorithms (Binary Search)",
        why: "To find items in O(log n) time instead of O(n). A cornerstone of algorithmic efficiency.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Binary Search in Python", url: "https://www.geeksforgeeks.org/binary-search/" },
        ],
        practice: "Implement Binary Search recursively and iteratively. Solve 'Search in Rotated Sorted Array'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Sorting, Trees & Advanced Logic",
    level: "Intermediate",
    steps: [
      {
        what: "Sorting Algorithms (Merge, Quick, Heap Sort)",
        why: "To organize data efficiently. Understanding O(n log n) algorithms is a requirement for advanced data processing.",
        time: "1 Week",
        prereqs: "Step 7, Step 8",
        resources: [
          { name: "Sorting in Python (Timsort)", url: "https://realpython.com/sorting-algorithms-python/" },
        ],
        practice: "Implement Merge Sort and Quick Sort from scratch. Understand when to use sorted() vs .sort().",
      },
      {
        what: "Binary Trees & Traversals (DFS/BFS)",
        why: "To model hierarchical data. Master In-order, Pre-order, Post-order, and Level-order (BFS) traversals.",
        time: "1 Week",
        prereqs: "Step 5, Step 7",
        resources: [
          { name: "Binary Tree Traversals (YouTube)", url: "https://www.youtube.com/watch?v=f55qeREg4uA" },
        ],
        practice: "Build a binary tree class. Implement Level Order Traversal using a queue.",
      },
      {
        what: "Binary Search Trees (BST)",
        why: "A special tree allowing O(log n) average search, insert, and delete. The foundation for many indexed databases.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "BST Operations Guide", url: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/" },
        ],
        practice: "Implement 'Insert', 'Search', and 'Delete' in a BST. Find the Kth smallest element.",
      },
      {
        what: "Heaps & Priority Queues (heapq)",
        why: "To efficiently find the min/max element. Essential for Dijkstra's and finding the 'Top K' items in a stream.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Python heapq Module", url: "https://docs.python.org/3/library/heapq.html" },
        ],
        practice: "Implement a Max-Heap using heapq (which is a min-heap by default). Solve 'Kth Largest Element'.",
      },
      {
        what: "Graph Representations (Matrix & List)",
        why: "Graphs model networks (Social media, Maps). Learning to represent them correctly is the first step to traversal.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Graphs in Python", url: "https://www.youtube.com/watch?v=look-up-python-graphs" },
        ],
        practice: "Represent a graph using an Adjacency List (dictionary of lists) and Adjacency Matrix.",
      },
      {
        what: "Graph Traversal (BFS & DFS)",
        why: "To find connected components and paths in a network. High priority for technical interviews.",
        time: "1 Week",
        prereqs: "Step 6, Step 13",
        resources: [
          { name: "DFS vs BFS Explained", url: "https://www.youtube.com/watch?v=pcKY4hjDrxk" },
        ],
        practice: "Solve 'Number of Islands' and 'Clone Graph' on LeetCode.",
      },
      {
        what: "Greedy Algorithms",
        why: "To solve optimization problems by making the locally optimal choice at each step.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Greedy Algorithms (YouTube)", url: "https://www.youtube.com/watch?v=ARvQitOC284" },
        ],
        practice: "Solve the 'Activity Selection' and 'Fractional Knapsack' problems.",
      },
      {
        what: "Sliding Window & Two Pointers",
        why: "Essential techniques for optimizing O(n^2) problems into O(n). Very frequent in interviews.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Sliding Window Mastery", url: "https://www.youtube.com/watch?v=look-up-sliding-window" },
        ],
        practice: "Solve 'Longest Substring Without Repeating Characters' and 'Two Sum II'.",
      },
    ],
  },
  {
    title: "Advanced Stage: DP, Tries & Complex Optimization",
    level: "Advanced",
    steps: [
      {
        what: "Dynamic Programming: Memoization",
        why: "To optimize recursive solutions by storing results of expensive sub-problems (Top-Down).",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "DP Series (YouTube - Aditya Verma)", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWacth7mTeoggw_xhv7nd7CI" },
        ],
        practice: "Solve 'Climbing Stairs' and 'House Robber' using recursion + @lru_cache.",
      },
      {
        what: "Dynamic Programming: Tabulation",
        why: "To solve DP problems iteratively (Bottom-Up), saving stack space and often improving speed.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Tabulation vs Memoization", url: "https://www.geeksforgeeks.org/tabulation-vs-memoization/" },
        ],
        practice: "Solve '0/1 Knapsack' and 'Coin Change' using 2D tabulation.",
      },
      {
        what: "Shortest Path Algorithms (Dijkstra, Bellman-Ford)",
        why: "To find the best route in weighted networks. Essential for logistics and GPS-style apps.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Dijkstra's Algorithm Guide", url: "https://www.youtube.com/watch?v=XB4MIexjvY0" },
        ],
        practice: "Implement Dijkstra's using heapq. Solve 'Cheapest Flights Within K Stops'.",
      },
      {
        what: "Backtracking: State Space Search",
        why: "To solve puzzles and pathfinding problems by exploring all possibilities and pruning invalid ones.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Backtracking Playlist", url: "https://www.youtube.com/watch?v=DKCbsiDBN6c" },
        ],
        practice: "Solve 'N-Queens' and 'Sudoku Solver'.",
      },
      {
        what: "Tries (Prefix Trees)",
        why: "Optimized for string prefix searching. Used in auto-complete and spell-check features.",
        time: "1 Week",
        prereqs: "Step 4, Step 10",
        resources: [
          { name: "Trie Implementation in Python", url: "https://www.youtube.com/watch?v=dBGUmUQhjaM" },
        ],
        practice: "Build a Trie that supports 'insert', 'search', and 'startsWith'.",
      },
      {
        what: "Disjoint Set Union (DSU)",
        why: "To efficiently manage connected components and detect cycles in undirected graphs.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Union Find / DSU Tutorial", url: "https://www.youtube.com/watch?v=aBxjDBC4M1U" },
        ],
        practice: "Implement DSU with Path Compression and Union by Rank. Solve 'Redundant Connection'.",
      },
      {
        what: "Bit Manipulation",
        why: "For constant-time optimizations. Critical for competitive programming and specific technical rounds.",
        time: "1 Week",
        prereqs: "Binary Math",
        resources: [
          { name: "Bit Manipulation for Interviews", url: "https://www.youtube.com/watch?v=dbdfZ_v_WhE" },
        ],
        practice: "Solve 'Single Number' and 'Number of 1 Bits' using bitwise operators.",
      },
      {
        what: "Segment Trees & Range Queries",
        why: "For logarithmic-time range queries (sum, min, max) and point updates in large arrays.",
        time: "1 Week",
        prereqs: "Step 10, Step 17",
        resources: [
          { name: "Segment Tree Series", url: "https://www.youtube.com/watch?v=ZBHKZF5w4YU" },
        ],
        practice: "Implement a Segment Tree to solve 'Range Sum Query - Mutable'.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Balanced Parentheses Checker", teaches: "Stacks, HashMaps, and string parsing.", tech: "Python, collections.deque" },
  { level: "Beginner", title: "Anagram Solver", teaches: "Hashing, string sorting, and mapping.", tech: "Python, dict" },
  { level: "Beginner", title: "CLI Task Manager", teaches: "CRUD operations, Linked List management.", tech: "Python" },
  { level: "Intermediate", title: "Maze Path Finder", teaches: "Graph BFS, 2D Matrix traversal, and Queues.", tech: "Python, deque" },
  { level: "Intermediate", title: "Huffman Coding Compression", teaches: "Greedy algorithms, Binary Trees, and Priority Queues.", tech: "Python, heapq" },
  { level: "Intermediate", title: "Sudoku Solver Dashboard", teaches: "Backtracking, recursion, and constraint satisfaction.", tech: "Python" },
  { level: "Intermediate", title: "Binary Tree Visualizer", teaches: "Recursive traversals, serialization, and node architecture.", tech: "Python" },
  { level: "Advanced", title: "Autocomplete Search Engine", teaches: "Tries, efficient string storage, and prefix logic.", tech: "Python, Trie" },
  { level: "Advanced", title: "Shortest Route Finder (Maps)", teaches: "Dijkstra's, graph weights, and path reconstruction.", tech: "Python, heapq, DSU" },
  { level: "Advanced", title: "Inventory Optimizer (Stock)", teaches: "Dynamic Programming, Kadane's algorithm, and Knapsack.", tech: "Python, DP" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on core linear structures and basic search/sort to clear standard technical screenings.",
    schedule: [
      "Days 1-7: Big O, Python Collections, and Arrays/Strings.",
      "Days 8-15: Linked Lists, Recursion, and basic Hashing.",
      "Days 16-23: Stacks, Queues, and Binary Search.",
      "Days 24-30: Basic Sorting (Merge/Quick) and 2 beginner projects.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Interview Ready",
    description: "Balanced path covering Trees, Graphs, and Greedy algorithms for top-tier product roles.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Binary Trees, BSTs, and Heap logic.",
      "Days 41-60: Graph BFS/DFS, Greedy, Sliding Window, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Algorithm Architect",
    description: "Comprehensive path including Dynamic Programming, Tries, and Advanced Graph Theory.",
    schedule: [
      "Days 1-30: Core Linear & Non-Linear fundamentals.",
      "Days 31-60: Graph Optimization and Intermediate projects.",
      "Days 61-90: Dynamic Programming, Tries, Segment Trees, and Mock Contests.",
    ]
  }
];

const interviewTopics = [
  "Python Internal Complexity (List vs Set vs Dict).",
  "Time & Space Complexity analysis (Big O).",
  "Garbage collection and Memory management in Python.",
  "Difference between generators and lists in DSA.",
  "Stable vs. Unstable sorting algorithms.",
  "Dijkstra's vs. Bellman-Ford: Handling negative weights.",
  "Dynamic Programming: Identifying overlapping subproblems.",
  "The role of recursion limits in deep trees.",
  "When to use set() for O(1) lookup vs list().",
  "Binary Search variants (First/Last occurrence).",
];

const codingQuestions = [
  { question: "Reverse a Singly Linked List in-place.", topic: "Linked List" },
  { question: "Find the maximum sum subarray (Kadane's Algorithm).", topic: "Arrays" },
  { question: "Implement a Least Recently Used (LRU) Cache.", topic: "Design/Hashing" },
  { question: "Find the number of connected components in a graph.", topic: "Graphs/DSU" },
];

const mcqs = [
  { question: "What is the average time complexity of looking up a key in a Python dict?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: "O(1)" },
  { question: "Which Python module is used to implement a Priority Queue?", options: ["queue", "collections", "heapq", "bisect"], answer: "heapq" },
  { question: "What is the time complexity of appending to a Python list?", options: ["O(1) amortized", "O(n)", "O(log n)", "O(1) strictly"], answer: "O(1) amortized" },
];

const mistakes = [
  "Using list.pop(0) - This is O(n); use collections.deque.popleft() for O(1).",
  "Modifying a list while iterating over it.",
  "Ignoring Python's recursion limit (default ~1000).",
  "Tutorial Hell: Watching without manually coding.",
  "Not considering edge cases (Empty list, single node, large numbers).",
  "Premature Optimization: Trying to be fast before being correct.",
  "Ignoring Space Complexity in recursive calls.",
  "Tutorial Hopping: Not sticking to one consistent path.",
  "Not practicing on Whiteboards/Paper.",
  "Hardcoding values instead of writing generic functions.",
];

export default function DsaPythonRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Code className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            DSA with Python Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering Data Structures and Algorithms using the elegance of Python. From Big O to Dynamic Programming.
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
                    {['Python', 'Big O Analysis', 'Data Structures', 'Algorithms', 'Recursion', 'Dynamic Programming', 'Graph Theory', 'Trees', 'Dijkstra', 'Segment Tree', 'Sliding Window'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain an active LeetCode/GitHub profile with a consistent streak.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain the Time/Space complexity in the README of every project.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight cross-functional skills (e.g. 'Optimized script runtime by 60% using sets').</li>
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
            DSA is the foundation of computer science. Mastering it with Python allows you to focus on the logic rather than complex syntax. Stay consistent, solve one problem every day, and never stop questioning "how can this be faster?". Your journey to becoming a world-class problem solver starts today!
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
