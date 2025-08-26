

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link2, BrainCircuit, Workflow, Briefcase, GraduationCap, Link as LinkIcon, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { AuthGuard } from "@/components/auth/auth-guard";

const dataStructures = {
    linear: [
        { name: "Array", href: "/main/treasure/array" },
        { name: "Linked List (Singly, Doubly, Circular)" },
        { name: "Stack" },
        { name: "Queue (Simple, Circular, Priority Queue, Deque)" },
    ],
    nonLinear: [
        "Trees", "Binary Tree", "Binary Search Tree (BST)", "AVL Tree, Red-Black Tree", "Segment Tree, Fenwick Tree (BIT)",
        "Graphs", "Directed / Undirected", "Weighted / Unweighted", "Adjacency List / Matrix",
    ],
    hashing: ["Hash Tables", "Hash Maps / Dictionaries", "Sets"],
    advanced: ["Heap / Priority Queue", "Trie (Prefix Tree)", "Disjoint Set Union (DSU / Union Find)", "Sparse Table"],
};

const algorithms = {
    sorting: ["Bubble, Selection, Insertion", "Merge Sort", "Quick Sort", "Heap Sort", "Counting, Radix, Bucket Sort"],
    searching: ["Linear Search", "Binary Search", "Ternary Search", "Search in Rotated Arrays"],
    techniques: ["Fast & Slow Pointer (Linked List)", "Stack-based Infix/Prefix/Postfix Evaluations"],
    recursion: ["Permutations / Combinations", "N-Queens Problem", "Sudoku Solver"],
    greedy: ["Activity Selection", "Huffman Coding", "Fractional Knapsack"],
    dp: ["Memoization / Tabulation", "Knapsack Variants", "Longest Common Subsequence", "Matrix Chain Multiplication", "DP on Trees, Bitmasking"],
    graph: ["BFS / DFS", "Dijkstra’s Algorithm", "Bellman-Ford", "Floyd-Warshall", "Topological Sort", "Kruskal’s / Prim’s (MST)", "Tarjan’s / Kosaraju’s (SCC)"],
    other: ["Sliding Window", "Two Pointers", "Binary Search on Answer", "Bit Manipulation", "Line Sweep", "Divide & Conquer", "Mo’s Algorithm"],
};

const practicePlatforms = [
  { name: "LeetCode", url: "https://leetcode.com/" },
  { name: "Codeforces", url: "https://codeforces.com/" },
  { name: "CodeChef", url: "https://www.codechef.com/" },
  { name: "HackerRank", url: "https://www.hackerrank.com/" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
  { name: "InterviewBit", url: "https://www.interviewbit.com/" },
  { name: "AtCoder", url: "https://atcoder.jp/" },
  { name: "TopCoder", url: "https://www.topcoder.com/" },
  { name: "Exercism", url: "https://exercism.org/" },
  { name: "Spoj", url: "https://www.spoj.com/" },
];

const jobRoles = [
    "Software Developer (Product Companies: Google, Microsoft, Amazon)",
    "Competitive Programmer",
    "Algorithm Engineer",
    "Backend Developer (performance-critical)",
    "Data Scientist / ML Engineer (for algorithmic problems)",
    "Systems Software Engineer",
    "Research / PhD roles (Algorithm Design)",
];

export default function TreasurePage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            DSA Treasure Trove
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of essential data structures, algorithms, and resources to guide your journey to DSA mastery.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Data Structures */}
          <Card className="flex flex-col">
              <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                      <Link2 className="h-6 w-6 text-primary"/>
                      <span>Core Data Structures</span>
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                  <div>
                      <h3 className="font-semibold mb-2">📦 Linear Data Structures</h3>
                      <div className="flex flex-wrap gap-2">
                          {dataStructures.linear.map(item => (
                              item.href ? (
                                  <Link href={item.href} key={item.name}>
                                      <Badge variant="secondary" className="hover:bg-primary/20 cursor-pointer">{item.name}</Badge>
                                  </Link>
                              ) : (
                                  <Badge key={item.name} variant="secondary">{item.name}</Badge>
                              )
                          ))}
                      </div>
                  </div>
                  <div>
                      <h3 className="font-semibold mb-2">🌳 Non-Linear Data Structures</h3>
                      <div className="flex flex-wrap gap-2">
                          {dataStructures.nonLinear.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                      </div>
                  </div>
                  <div>
                      <h3 className="font-semibold mb-2">📚 Hashing</h3>
                      <div className="flex flex-wrap gap-2">
                          {dataStructures.hashing.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                      </div>
                  </div>
                  <div>
                      <h3 className="font-semibold mb-2">🧱 Advanced Structures</h3>
                      <div className="flex flex-wrap gap-2">
                          {dataStructures.advanced.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                      </div>
                  </div>
              </CardContent>
          </Card>
          
          {/* Algorithms */}
          <Card className="flex flex-col">
              <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                      <Workflow className="h-6 w-6 text-primary"/>
                      <span>Algorithms</span>
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                  <div>
                      <h3 className="font-semibold mb-2">🧮 Sorting & Searching</h3>
                      <div className="flex flex-wrap gap-2">
                          {[...algorithms.sorting, ...algorithms.searching].map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                      </div>
                  </div>
                  <div>
                      <h3 className="font-semibold mb-2">⛓️ Common Techniques & Paradigms</h3>
                      <div className="flex flex-wrap gap-2">
                          {[...algorithms.techniques, ...algorithms.recursion, ...algorithms.greedy, ...algorithms.dp].map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                      </div>
                  </div>
                  <div>
                      <h3 className="font-semibold mb-2">🌐 Graph Algorithms</h3>
                      <div className="flex flex-wrap gap-2">
                          {algorithms.graph.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                      </div>
                  </div>
                  <div>
                      <h3 className="font-semibold mb-2">🎯 Other Key Algorithms</h3>
                      <div className="flex flex-wrap gap-2">
                          {algorithms.other.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                      </div>
                  </div>
              </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Where to Practice */}
              <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                          <BrainCircuit className="h-6 w-6 text-primary"/>
                          <span>Where to Practice</span>
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                      {practicePlatforms.map(platform => (
                          <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:underline">
                              <LinkIcon className="h-3.5 w-3.5" />
                              {platform.name}
                          </a>
                      ))}
                  </CardContent>
              </Card>

              {/* Job Roles */}
              <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                          <Briefcase className="h-6 w-6 text-primary"/>
                          <span>Crucial Job Roles</span>
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {jobRoles.map(item => <li key={item}>{item}</li>)}
                      </ul>
                  </CardContent>
              </Card>
        </div>
        
          <Card className="bg-primary/10">
              <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                      <GraduationCap className="h-8 w-8 text-primary"/>
                      <span>Start Your Journey</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                      Ready to begin? Follow our step-by-step learning path to build your skills from the ground up.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button asChild size="lg">
                      <Link href="/dsa-learning-path">
                          View the DSA Learning Path
                          <ArrowRight className="ml-2" />
                      </Link>
                  </Button>
              </CardFooter>
          </Card>

      </div>
    </AuthGuard>
  );
}
