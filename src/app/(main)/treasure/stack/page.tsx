
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Copy, ArrowRight, BrainCircuit, Code, Workflow, CheckCircle, Lightbulb, Layers, ArrowDown, ArrowUp, Eye } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AuthGuard } from "@/components/auth/auth-guard";


const StackVisual = () => (
    <div className="flex items-center justify-center gap-12 p-4 bg-muted/50 rounded-lg my-4 h-64">
        <div className="flex flex-col items-center gap-2">
            <Button>Push(30)</Button>
            <ArrowDown className="h-8 w-8 text-green-500" />
            <div className="w-24 h-40 border-2 border-primary border-t-0 flex flex-col-reverse items-center p-1 relative">
                <div className="absolute -bottom-6 text-xs text-muted-foreground">Stack</div>
                <div className="w-full h-10 bg-primary/20 border border-primary flex items-center justify-center m-1">20</div>
                <div className="w-full h-10 bg-primary/20 border border-primary flex items-center justify-center m-1">10</div>
            </div>
             <div className="w-24 h-10 bg-green-500/20 border border-green-500 flex items-center justify-center m-1">30</div>
        </div>

        <div className="flex flex-col items-center gap-2">
            <Button variant="destructive">Pop()</Button>
            <ArrowUp className="h-8 w-8 text-destructive" />
            <div className="w-24 h-40 border-2 border-primary border-t-0 flex flex-col-reverse items-center p-1 relative">
                 <div className="absolute -bottom-6 text-xs text-muted-foreground">Stack</div>
                <div className="w-full h-10 bg-primary/20 border border-primary flex items-center justify-center m-1">20</div>
                <div className="w-full h-10 bg-primary/20 border border-primary flex items-center justify-center m-1">10</div>
            </div>
            <div className="w-24 h-10 bg-destructive/20 border border-destructive flex items-center justify-center m-1">30</div>
        </div>

        <div className="flex flex-col items-center gap-2">
            <Button variant="secondary">Peek()</Button>
            <Eye className="h-8 w-8 text-secondary-foreground" />
            <div className="w-24 h-40 border-2 border-primary border-t-0 flex flex-col-reverse items-center p-1 relative">
                 <div className="absolute -bottom-6 text-xs text-muted-foreground">Stack</div>
                <div className="w-full h-10 bg-primary/20 border border-primary flex items-center justify-center m-1">20</div>
                <div className="w-full h-10 bg-primary/20 border border-primary flex items-center justify-center m-1">10</div>
                <div className="w-full h-10 bg-primary/20 border border-primary ring-2 ring-yellow-400 flex items-center justify-center m-1">30</div>
            </div>
        </div>
    </div>
);

const properties = [
    { property: "Push (Insertion)", details: "O(1) - Adding to the top is very fast.", complexity: "good" },
    { property: "Pop (Deletion)", details: "O(1) - Removing from the top is very fast.", complexity: "good" },
    { property: "Peek/Top (Access)", details: "O(1) - Looking at the top element is very fast.", complexity: "good" },
    { property: "Search", details: "O(n) - Must remove every element to find one in the middle.", complexity: "bad" },
];

const ComplexityBadge = ({ complexity }: { complexity: "good" | "bad" }) => (
    <Badge variant={complexity === 'good' ? 'default' : 'destructive'} className={complexity === 'good' ? 'bg-green-600' : ''}>
        {complexity.toUpperCase()}
    </Badge>
);

const codeSnippets = {
  python: `
# Implementation using a Python list (Dynamic Array)
stack = []

# --- Operations ---

# 1. Push (O(1) amortized)
stack.append(10)
stack.append(20)
stack.append(30)
print(f"Stack after pushes: {stack}") # [10, 20, 30]

# 2. Pop (O(1))
top_element = stack.pop()
print(f"Popped element: {top_element}") # 30
print(f"Stack after pop: {stack}") # [10, 20]

# 3. Peek/Top (O(1))
# Check if stack is not empty before peeking
if stack:
    peek_element = stack[-1]
    print(f"Top element is: {peek_element}") # 20

# 4. Check if empty
is_empty = not bool(stack)
print(f"Is stack empty? {is_empty}") # False

# Note: For thread-safe, large-scale applications, 
# consider using 'collections.deque'
`.trim(),
  cpp: `
#include <iostream>
#include <stack>
#include <vector>

// Implementation using std::stack (adapts a container like std::vector)
std::stack<int> s;

// --- Operations ---

// 1. Push (O(1) amortized for default container)
s.push(10);
s.push(20);
s.push(30);

// 2. Pop (O(1) for default container)
// Note: In C++, pop() returns void. You must call top() first.
if (!s.empty()) {
    std::cout << "Popping element: " << s.top() << std::endl; // 30
    s.pop();
}

// 3. Peek/Top (O(1))
if (!s.empty()) {
    std::cout << "Top element is: " << s.top() << std::endl; // 20
}

// 4. Check if empty
std::cout << "Is stack empty? " << (s.empty() ? "Yes" : "No") << std::endl; // No
`.trim(),
  java: `
import java.util.Stack;

// Implementation using java.util.Stack (legacy, Vector-based)
// A better implementation uses Deque: Deque<Integer> stack = new ArrayDeque<>();
Stack<Integer> stack = new Stack<>();

// --- Operations ---

// 1. Push (O(1) amortized)
stack.push(10);
stack.push(20);
stack.push(30);
System.out.println("Stack after pushes: " + stack); // [10, 20, 30]

// 2. Pop (O(1) amortized)
Integer topElement = stack.pop();
System.out.println("Popped element: " + topElement); // 30
System.out.println("Stack after pop: " + stack); // [10, 20]

// 3. Peek/Top (O(1))
Integer peekElement = stack.peek();
System.out.println("Top element is: " + peekElement); // 20

// 4. Check if empty
boolean isEmpty = stack.isEmpty();
System.out.println("Is stack empty? " + isEmpty); // false
`.trim()
};

const commonProblems = [
  {
    title: "Valid Parentheses",
    description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.",
    logic: "This is a classic problem for a stack. As we iterate through the string, if we encounter an opening bracket ('(', '{', '['), we push it onto the stack. If we encounter a closing bracket, we check the top of the stack. If the stack is empty or the bracket at the top is not the corresponding opening bracket, the string is invalid. If we find a match, we pop the opening bracket from the stack. After iterating through the entire string, if the stack is empty, it means every opening bracket was correctly matched and closed, so the string is valid. If the stack is not empty, it means there are unclosed opening brackets, and the string is invalid.",
    code: `
def is_valid(s):
    stack = []
    # A mapping of closing brackets to their opening counterparts
    mapping = {")": "(", "}": "{", "]": "["}
    
    for char in s:
        # If the character is a closing bracket
        if char in mapping:
            # Pop the top element from the stack if it's not empty; otherwise, assign a dummy value
            top_element = stack.pop() if stack else '#'
            
            # If the popped element doesn't match the required opening bracket, it's invalid
            if mapping[char] != top_element:
                return False
        else:
            # It's an opening bracket, push it onto the stack
            stack.append(char)
            
    # If the stack is empty at the end, all brackets were matched.
    return not stack
`.trim(),
    lineByLine: [
        "`stack = []` - Initializes an empty list to act as our stack.",
        "`mapping = {...)` - Creates a dictionary for quick lookups. Given a closing bracket, it tells us what the corresponding opening bracket should be.",
        "`for char in s:` - We loop through each character of the input string.",
        "`if char in mapping:` - This checks if the current character is a closing bracket (i.e., a key in our map).",
        "`top_element = stack.pop() if stack else '#'` - If it's a closing bracket, we need to check the top of the stack. We pop the top element. If the stack is empty, we use a placeholder '#' to prevent an error and ensure the upcoming comparison fails.",
        "`if mapping[char] != top_element:` - We look up the required opening bracket in our map (`mapping[char]`) and compare it to the `top_element` we just popped. If they don't match, the order is incorrect, and we return `False` immediately.",
        "`else: stack.append(char)` - If the character is not a closing bracket, it must be an opening one. We push it onto the stack to wait for its closing partner.",
        "`return not stack` - After the loop finishes, if the stack is empty, it means every opening bracket found a matching closing bracket. `not stack` will be `True`. If the stack is not empty, it means there are unclosed brackets, so `not stack` will be `False`."
    ],
    diagram: `
**String: "()[]{}"**

1. '(': Is an opening bracket. Push '('. Stack: ['(']
2. ')': Is a closing bracket. Pop from stack. '(' matches ')'. Stack: []
3. '[': Is an opening bracket. Push '['. Stack: ['[']
4. ']': Is a closing bracket. Pop from stack. '[' matches ']'. Stack: []
5. '{': Is an opening bracket. Push '{'. Stack: ['{']
6. '}': Is a closing bracket. Pop from stack. '{' matches '}'. Stack: []

End of string. Stack is empty. **Result: True**

---
**String: "([)]"**

1. '(': Is an opening bracket. Push '('. Stack: ['(']
2. '[': Is an opening bracket. Push '['. Stack: ['(', '[']
3. ')': Is a closing bracket. Pop from stack ('['). '(' does not match '['. **Result: False**
    `
  },
];


export default function StackPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
          <header>
              <div className="flex items-center gap-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                      Stack 📚
                  </h1>
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger>
                              <Info className="h-6 w-6 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                              <p>A LIFO (Last-In, First-Out) abstract data type.</p>
                          </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                  A stack is a fundamental data structure that follows the Last-In, First-Out (LIFO) principle. Think of it like a stack of plates or a pile of books: you can only add a new item to the top, and you can only remove the item that is currently at the top.
              </p>
          </header>

          <Card>
              <CardHeader><CardTitle>Visual Diagram</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>
                      The main operations for a stack are 'push' (add an element to the top), 'pop' (remove the element from the top), and 'peek' or 'top' (view the top element without removing it).
                  </CardDescription>
                  <StackVisual />
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                  <CardTitle>Core Concepts</CardTitle>
                  <CardDescription>Understanding these concepts is key to using stacks effectively.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>LIFO (Last-In, First-Out)</AccordionTrigger>
                          <AccordionContent>
                            This is the defining principle of a stack. The last element that you add (push) onto the stack is always the very first element that gets removed (popped). This is in direct contrast to a queue, which is FIFO (First-In, First-Out). This behavior makes stacks ideal for problems that involve reversing order or processing nested structures.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Implementation: Array vs. Linked List</AccordionTrigger>
                          <AccordionContent>
                              <ul className="list-disc pl-5 space-y-2">
                                  <li><strong>Array/Vector:</strong> The simplest way to implement a stack. In languages with dynamic arrays (like Python's list or C++'s vector), pushing is appending to the end, and popping is removing from the end. Both are very fast (amortized O(1)) operations.</li>
                                  <li><strong>Linked List:</strong> A stack can also be implemented with a linked list. Pushing involves adding a new node to the head of the list, and popping involves removing the head. These are true O(1) operations. While slightly more complex to implement from scratch, it avoids the potential for slow resizing that can occasionally happen with dynamic arrays.</li>
                              </ul>
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>The Call Stack</AccordionTrigger>
                          <AccordionContent>
                              One of the most important applications of stacks happens behind the scenes in almost every programming language: the call stack. When a function is called, a "stack frame" containing its local variables and return address is pushed onto the call stack. When the function returns, its frame is popped off. This is why recursion that goes too deep results in a "stack overflow" error — the call stack runs out of space.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>


          <Card>
              <CardHeader><CardTitle>Properties & Time Complexity</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>A stack's primary advantage is its speed for adding and removing elements from the top.</CardDescription>
                  <Table className="mt-4">
                      <TableHeader>
                          <TableRow>
                              <TableHead>Operation</TableHead>
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
                  <CardDescription>Code examples for stack operations in popular languages. Most languages provide a built-in stack implementation.</CardDescription>
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
                  <CardTitle className="flex items-center gap-3"><Workflow className="h-6 w-6 text-primary"/>Applications and Use Cases</CardTitle>
                  <CardDescription>Stacks are used to solve many common programming problems.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Expression Evaluation</AccordionTrigger>
                          <AccordionContent>
                           Stacks are essential for parsing and evaluating mathematical expressions, particularly for converting expressions from infix notation (e.g., `3 + 4`) to postfix (e.g., `3 4 +`) or prefix notation, which are easier for computers to evaluate.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Undo/Redo Functionality</AccordionTrigger>
                          <AccordionContent>
                            In text editors or graphics programs, an "undo" history is often managed with a stack. Each action is pushed onto the stack. When the user clicks "undo," the most recent action is popped from the stack and reversed. A second stack can be used to manage the "redo" history.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Backtracking Algorithms</AccordionTrigger>
                          <AccordionContent>
                            Many algorithms that explore a set of possibilities use a stack to keep track of the path taken. If a path leads to a dead end, the algorithm can "backtrack" by popping from the stack to return to a previous decision point and try a different option. This is common in problems like solving mazes or puzzles like Sudoku.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                          <AccordionTrigger>Graph and Tree Traversal (DFS)</AccordionTrigger>
                          <AccordionContent>
                            Depth-First Search (DFS) is a common algorithm for traversing a graph or a tree. It explores as far as possible along each branch before backtracking. An explicit stack is the natural data structure to manage the nodes to be visited during a DFS traversal.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>
          
          <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-3"><Lightbulb className="h-6 w-6 text-primary"/>Common Stack Problems</CardTitle>
                  <CardDescription>Practice with these classic problems. Click on one to see a detailed explanation and solution.</CardDescription>
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

                                      <h4 className="font-semibold">Line-by-Line Explanation</h4>
                                      <ul className="list-disc pl-5 space-y-2">
                                          {problem.lineByLine.map((line, i) => <li key={i}><code className='text-xs bg-muted/50 p-1 rounded'>{line}</code></li>)}
                                      </ul>

                                      <h4 className="font-semibold">How it Works (Diagram)</h4>
                                      <pre className="bg-muted/50 p-4 rounded-md text-sm font-code whitespace-pre-wrap">{problem.diagram}</pre>
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
                      <Link href="/treasure/stack/challenges">
                          Start Challenges
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </CardContent>
          </Card>

          <Card>
              <CardHeader><CardTitle>What's Next?</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                  <Link href="/treasure/queue" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Queue</h3>
                          <p className="text-sm text-muted-foreground">Explore the Queue, a FIFO (First-In, First-Out) data structure, the logical counterpart to the Stack.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/dsa-problems" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Practice Stack Problems</h3>
                          <p className="text-sm text-muted-foreground">Apply your knowledge by tackling common stack problems on LeetCode or HackerRank.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
              </CardContent>
          </Card>

      </div>
    </AuthGuard>
  );
}
