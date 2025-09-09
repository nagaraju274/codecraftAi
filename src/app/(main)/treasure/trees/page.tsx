
"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Copy, ArrowRight, BrainCircuit, Code, Workflow, CheckCircle, Lightbulb, ChevronsRight, GitCommit, Search, Plus, Trash2, GitBranch } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AuthGuard } from "@/components/auth/auth-guard";

const TreeVisual = () => (
    <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg my-4 relative h-72">
        {/* Nodes */}
        <div className="absolute top-4 w-16 h-16 border-2 border-primary bg-background rounded-full flex items-center justify-center text-lg font-bold">10</div>
        
        <div className="absolute top-24 left-1/4 w-16 h-16 border-2 border-primary bg-background rounded-full flex items-center justify-center text-lg font-bold">5</div>
        <div className="absolute top-24 right-1/4 w-16 h-16 border-2 border-primary bg-background rounded-full flex items-center justify-center text-lg font-bold">15</div>

        <div className="absolute top-48 left-8 w-16 h-16 border-2 border-primary bg-background rounded-full flex items-center justify-center text-lg font-bold">2</div>
        <div className="absolute top-48 left-[calc(25%+2rem)] w-16 h-16 border-2 border-primary bg-background rounded-full flex items-center justify-center text-lg font-bold">7</div>
        <div className="absolute top-48 right-[calc(25%+2rem)] w-16 h-16 border-2 border-primary bg-background rounded-full flex items-center justify-center text-lg font-bold">12</div>
        <div className="absolute top-48 right-8 w-16 h-16 border-2 border-primary bg-background rounded-full flex items-center justify-center text-lg font-bold">20</div>
        
        {/* Lines */}
        <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
            {/* Top to middle */}
            <line x1="50%" y1="56" x2="33.33%" y2="116" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="50%" y1="56" x2="66.67%" y2="116" stroke="hsl(var(--border))" strokeWidth="2" />
            {/* Middle to bottom */}
            <line x1="33.33%" y1="148" x2="20%" y2="212" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="33.33%" y1="148" x2="40%" y2="212" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="66.67%" y1="148" x2="60%" y2="212" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="66.67%" y1="148" x2="80%" y2="212" stroke="hsl(var(--border))" strokeWidth="2" />
        </svg>
    </div>
);

const properties = [
    { operation: "Access", complexity: "O(log n) to O(n)", details: "Average case for balanced trees is fast, worst case (unbalanced) is slow." },
    { operation: "Search", complexity: "O(log n) to O(n)", details: "Similar to access, performance depends on the tree's balance." },
    { operation: "Insertion", complexity: "O(log n) to O(n)", details: "Average case for balanced trees. Self-balancing trees (AVL, Red-Black) maintain O(log n)." },
    { operation: "Deletion", complexity: "O(log n) to O(n)", details: "Average case for balanced trees. Self-balancing trees maintain O(log n)." },
];

const ComplexityBadge = ({ complexity }: { complexity: string }) => {
    const isGood = complexity.includes("log n");
    return <Badge variant={isGood ? 'default' : 'destructive'} className={isGood ? 'bg-green-600' : ''}>
        {complexity}
    </Badge>
};


const codeSnippets = {
    python: `
class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

# Example of creating a simple tree
root = TreeNode(10)
root.left = TreeNode(5)
root.right = TreeNode(15)
root.left.left = TreeNode(2)

# In-order Traversal
def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val, end=' ')
        inorder_traversal(root.right)

# Pre-order Traversal
def preorder_traversal(root):
    if root:
        print(root.val, end=' ')
        preorder_traversal(root.left)
        preorder_traversal(root.right)

# Post-order Traversal
def postorder_traversal(root):
    if root:
        postorder_traversal(root.left)
        postorder_traversal(root.right)
        print(root.val, end=' ')
`.trim(),
  cpp: `
#include <iostream>

struct Node {
    int key;
    struct Node *left, *right;
};

Node* newNode(int key) {
    Node* temp = new Node;
    temp->key = key;
    temp->left = temp->right = nullptr;
    return temp;
}

// In-order Traversal
void inorderTraversal(Node* root) {
    if (root != nullptr) {
        inorderTraversal(root->left);
        std::cout << root->key << " ";
        inorderTraversal(root->right);
    }
}

// Pre-order Traversal
void preorderTraversal(Node* root) {
    if (root != nullptr) {
        std::cout << root->key << " ";
        preorderTraversal(root->left);
        preorderTraversal(root->right);
    }
}

// Post-order Traversal
void postorderTraversal(Node* root) {
    if (root != nullptr) {
        postorderTraversal(root->left);
        postorderTraversal(root->right);
        std::cout << root->key << " ";
    }
}

// Example usage in main()
// Node* root = newNode(10);
// root->left = newNode(5);
// root->right = newNode(15);
`.trim(),
  java: `
class Node {
    int key;
    Node left, right;

    public Node(int item) {
        key = item;
        left = right = null;
    }
}

class BinaryTree {
    Node root;

    // In-order Traversal
    void printInorder(Node node) {
        if (node == null) return;
        printInorder(node.left);
        System.out.print(node.key + " ");
        printInorder(node.right);
    }

    // Pre-order Traversal
    void printPreorder(Node node) {
        if (node == null) return;
        System.out.print(node.key + " ");
        printPreorder(node.left);
        printPreorder(node.right);
    }

    // Post-order Traversal
    void printPostorder(Node node) {
        if (node == null) return;
        printPostorder(node.left);
        printPostorder(node.right);
        System.out.print(node.key + " ");
    }
}
`.trim()
};

const commonProblems = [
  {
    title: "Maximum Depth of Binary Tree",
    description: "Given the root of a binary tree, return its maximum depth.",
    logic: "The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node. This problem is a classic example of recursion. The depth of a tree is `1 + max(depth of left subtree, depth of right subtree)`. The base case for the recursion is when a node is null, in which case its depth is 0.",
    code: `
def max_depth(root):
    if root is None:
        return 0
    else:
        left_depth = max_depth(root.left)
        right_depth = max_depth(root.right)
        
        return max(left_depth, right_depth) + 1
`.trim(),
  },
  {
    title: "Validate Binary Search Tree",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    logic: "A valid BST has the following properties: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees. A common approach is to perform a recursive traversal, keeping track of the valid range (min and max) that each node's value can fall into. For a node's left child, the upper bound of the valid range becomes the node's value. For a node's right child, the lower bound becomes the node's value.",
    code: `
def is_valid_bst(root):
    def validate(node, low=-float('inf'), high=float('inf')):
        # An empty tree is a valid BST.
        if not node:
            return True
        
        # The current node's value must be within the valid range.
        if not (low < node.val < high):
            return False

        # Recursively check the left and right subtrees,
        # updating the valid range for each.
        return (validate(node.left, low, node.val) and
                validate(node.right, node.val, high))

    return validate(root)
`.trim(),
  },
];


export default function TreesPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
          <header>
              <div className="flex items-center gap-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                      Trees 🌳
                  </h1>
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger>
                              <Info className="h-6 w-6 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                              <p>A non-linear data structure that represents hierarchical data.</p>
                          </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                  A tree is a widely used data structure that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.
              </p>
          </header>

          <Card>
              <CardHeader><CardTitle>Visual Diagram</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>
                      A tree consists of a root node, and every other node is connected by an edge. Nodes with no children are called leaf nodes. The diagram below shows a simple binary search tree.
                  </CardDescription>
                  <TreeVisual />
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                  <CardTitle>Tree Terminology</CardTitle>
                  <CardDescription>Understanding these concepts is key to working with trees.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Node & Edge</AccordionTrigger>
                          <AccordionContent>A Node is the fundamental part of a tree that stores data. An Edge is the link between two nodes.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Root</AccordionTrigger>
                          <AccordionContent>The topmost node in a tree, which has no parent.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Parent, Child, Sibling</AccordionTrigger>
                          <AccordionContent>A node that has an edge to a child node is the parent. The node it connects to is the child. Siblings are nodes that share the same parent.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                          <AccordionTrigger>Leaf Node</AccordionTrigger>
                          <AccordionContent>A node that has no children.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                          <AccordionTrigger>Height and Depth</AccordionTrigger>
                          <AccordionContent>The Height of a tree is the length of the longest path from the root to a leaf. The Depth of a node is the length of the path from the root to that node.</AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                  <CardTitle>Types of Trees</CardTitle>
                  <CardDescription>Trees come in many forms, each with specific properties and use cases.</CardDescription>
              </CardHeader>
              <CardContent>
                   <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Binary Tree</AccordionTrigger>
                          <AccordionContent>A tree where each node has at most two children, referred to as the left child and the right child.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Binary Search Tree (BST)</AccordionTrigger>
                          <AccordionContent>A binary tree with a special property: for any given node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater. This makes searching very efficient.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>AVL & Red-Black Trees</AccordionTrigger>
                          <AccordionContent>These are self-balancing binary search trees. They automatically perform rotations to maintain a balanced height, which guarantees that operations like search, insert, and delete remain at an efficient O(log n) time complexity.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                          <AccordionTrigger>Heap</AccordionTrigger>
                          <AccordionContent>A specialized tree-based data structure that satisfies the heap property. In a max-heap, the parent node is always greater than or equal to the child nodes. In a min-heap, the parent is always less than or equal to the child nodes. Heaps are commonly used to implement Priority Queues.</AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>


          <Card>
              <CardHeader><CardTitle>Properties & Time Complexity (for BSTs)</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>Time complexity for Binary Search Trees (BSTs) is heavily dependent on whether the tree is balanced.</CardDescription>
                  <Table className="mt-4">
                      <TableHeader>
                          <TableRow>
                              <TableHead>Operation</TableHead>
                              <TableHead>Avg. Complexity (Balanced)</TableHead>
                              <TableHead>Worst-Case (Unbalanced)</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {properties.map(p => (
                              <TableRow key={p.operation}>
                                  <TableCell className="font-semibold">{p.operation}</TableCell>
                                  <TableCell><ComplexityBadge complexity="O(log n)" /></TableCell>
                                  <TableCell><ComplexityBadge complexity="O(n)" /></TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </CardContent>
          </Card>

           <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-3"><Workflow className="h-6 w-6 text-primary"/>Tree Traversal</CardTitle>
                  <CardDescription>Traversal is the process of visiting each node in the tree. There are two main approaches: Depth-First Search (DFS) and Breadth-First Search (BFS).</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>In-order Traversal (DFS)</AccordionTrigger>
                          <AccordionContent>
                            <p>Visits the left subtree, then the root node, then the right subtree. For a Binary Search Tree, this traversal visits the nodes in ascending order.</p>
                            <p className="font-mono text-sm mt-2"><strong>Path:</strong> Left - Root - Right</p>
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Pre-order Traversal (DFS)</AccordionTrigger>
                          <AccordionContent>
                            <p>Visits the root node first, then the left subtree, then the right subtree. This is useful for creating a copy of the tree.</p>
                            <p className="font-mono text-sm mt-2"><strong>Path:</strong> Root -> Left -> Right</p>
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Post-order Traversal (DFS)</AccordionTrigger>
                          <AccordionContent>
                            <p>Visits the left subtree, then the right subtree, then the root node. This is useful for deleting nodes from a tree, as you can delete the children before the parent.</p>
                            <p className="font-mono text-sm mt-2"><strong>Path:</strong> Left -> Right -> Root</p>
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                          <AccordionTrigger>Level-order Traversal (BFS)</AccordionTrigger>
                          <AccordionContent>
                            <p>Visits nodes level by level, from left to right within each level. This is a Breadth-First Search (BFS) approach and typically requires a queue to implement.</p>
                             <p className="font-mono text-sm mt-2"><strong>Path:</strong> Level 0 -> Level 1 -> Level 2 -> ...</p>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>
          
          <Card>
              <CardHeader>
                  <CardTitle>Common Operations & Implementations</CardTitle>
                  <CardDescription>Code examples for creating a tree node and performing common traversals.</CardDescription>
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
                  <CardTitle className="flex items-center gap-3"><Lightbulb className="h-6 w-6 text-primary"/>Common Tree Problems</CardTitle>
                  <CardDescription>Practice with these classic problems to solidify your understanding of trees.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      {commonProblems.map((problem, index) => (
                          <AccordionItem value={`item-${index}`} key={index}>
                              <AccordionTrigger className="text-base font-medium no-underline hover:no-underline">
                                  <div className="flex items-center justify-between w-full">
                                      <span>{problem.title}</span>
                                      <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 mr-4">
                                          Try Me
                                      </div>
                                  </div>
                              </AccordionTrigger>
                              <AccordionContent className="pt-2">
                                  <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                                      <p className="text-muted-foreground">{problem.description}</p>
                                      
                                      <h4 className="font-semibold">Logic & Approach</h4>
                                      <p>{problem.logic}</p>

                                      <h4 className="font-semibold">Code Example (Python)</h4>
                                      <pre className="bg-muted p-4 rounded-md text-sm font-code whitespace-pre-wrap">{problem.code}</pre>
                                  </div>
                              </AccordionContent>
                          </AccordionItem>
                      ))}
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
                      <Link href="/treasure/trees/challenges">
                          Start Challenges
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </CardContent>
          </Card>

          <Card>
              <CardHeader><CardTitle>What's Next?</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                  <Link href="/treasure/graph" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Graphs</h3>
                          <p className="text-sm text-muted-foreground">Explore Graphs, a more general data structure where any node can connect to any other node.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/dsa-problems" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Practice Tree Problems</h3>
                          <p className="text-sm text-muted-foreground">Apply your knowledge by tackling common tree problems on LeetCode or HackerRank.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
              </CardContent>
          </Card>

      </div>
    </AuthGuard>
  );
}
