
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Copy, ArrowRight, BrainCircuit, Code, Workflow, Lightbulb, ArrowLeft, ArrowUpRightFromSquare, ChevronsRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AuthGuard } from "@/components/auth/auth-guard";


const QueueVisual = () => (
    <div className="flex flex-col items-center justify-center gap-8 p-4 bg-muted/50 rounded-lg my-4 h-80">
        <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
                <Button>Enqueue(30)</Button>
                <ArrowLeft className="h-8 w-8 text-green-500" />
            </div>
            <div className="flex items-center border-2 border-primary h-20 w-80 relative p-2">
                <div className="absolute -left-12 font-semibold">Rear</div>
                <div className="absolute -right-12 font-semibold">Front</div>
                <div className="flex items-center gap-2">
                    <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center">20</div>
                    <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center">10</div>
                </div>
            </div>
             <div className="w-16 h-16 bg-green-500/20 border border-green-500 flex items-center justify-center m-1">30</div>
        </div>
        
        <div className="flex items-center gap-4">
             <div className="w-16 h-16 bg-destructive/20 border border-destructive flex items-center justify-center m-1">10</div>
             <div className="flex flex-col items-center gap-2">
                <Button variant="destructive">Dequeue()</Button>
                <ArrowRight className="h-8 w-8 text-destructive" />
            </div>
            <div className="flex items-center border-2 border-primary h-20 w-80 relative p-2">
                <div className="absolute -left-12 font-semibold">Rear</div>
                <div className="absolute -right-12 font-semibold">Front</div>
                <div className="flex items-center gap-2">
                     <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center">30</div>
                    <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center">20</div>
                    <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center">10</div>
                </div>
            </div>
        </div>
    </div>
);

const properties = [
    { property: "Enqueue (Insertion)", details: "O(1) - Adding to the rear is very fast.", complexity: "good" },
    { property: "Dequeue (Deletion)", details: "O(1) - Removing from the front is very fast.", complexity: "good" },
    { property: "Peek/Front (Access)", details: "O(1) - Looking at the front element is very fast.", complexity: "good" },
    { property: "Search", details: "O(n) - Must traverse the entire queue to find an element.", complexity: "bad" },
];

const ComplexityBadge = ({ complexity }: { complexity: "good" | "bad" }) => (
    <Badge variant={complexity === 'good' ? 'default' : 'destructive'} className={complexity === 'good' ? 'bg-green-600' : ''}>
        {complexity.toUpperCase()}
    </Badge>
);

const codeSnippets = {
  python: `
# Implementation using collections.deque for efficiency
from collections import deque

queue = deque()

# --- Operations ---

# 1. Enqueue (O(1))
queue.append(10)
queue.append(20)
queue.append(30)
print(f"Queue after enqueues: {queue}") # deque([10, 20, 30])

# 2. Dequeue (O(1))
# Check if queue is not empty before dequeuing
if queue:
    front_element = queue.popleft()
    print(f"Dequeued element: {front_element}") # 10
    print(f"Queue after dequeue: {queue}") # deque([20, 30])

# 3. Peek/Front (O(1))
# Check if queue is not empty before peeking
if queue:
    peek_element = queue[0]
    print(f"Front element is: {peek_element}") # 20

# 4. Check if empty
is_empty = not bool(queue)
print(f"Is queue empty? {is_empty}") # False
`.trim(),
  cpp: `
#include <iostream>
#include <queue>

// Implementation using std::queue (adapts a container like std::deque)
std::queue<int> q;

// --- Operations ---

// 1. Enqueue (O(1))
q.push(10);
q.push(20);
q.push(30);

// 2. Dequeue (O(1))
if (!q.empty()) {
    std::cout << "Dequeuing element: " << q.front() << std::endl; // 10
    q.pop(); // pop() returns void
}

// 3. Peek/Front (O(1))
if (!q.empty()) {
    std::cout << "Front element is: " << q.front() << std::endl; // 20
}

// 4. Check if empty
std::cout << "Is queue empty? " << (q.empty() ? "Yes" : "No") << std::endl; // No

// 5. Get Size
std::cout << "Queue size: " << q.size() << std::endl; // 2
`.trim(),
  java: `
import java.util.Queue;
import java.util.LinkedList;

// Implementation using a class that implements the Queue interface, like LinkedList
Queue<Integer> queue = new LinkedList<>();

// --- Operations ---

// 1. Enqueue (O(1))
queue.add(10);
queue.add(20);
queue.add(30);
System.out.println("Queue after enqueues: " + queue); // [10, 20, 30]

// 2. Dequeue (O(1))
Integer frontElement = queue.poll(); // poll() returns null if empty
System.out.println("Dequeued element: " + frontElement); // 10
System.out.println("Queue after dequeue: " + queue); // [20, 30]

// 3. Peek/Front (O(1))
Integer peekElement = queue.peek(); // peek() returns null if empty
System.out.println("Front element is: " + peekElement); // 20

// 4. Check if empty
boolean isEmpty = queue.isEmpty();
System.out.println("Is queue empty? " + isEmpty); // false
`.trim()
};

const commonProblems = [
  {
    title: "Implement Queue using Stacks",
    description: "Implement a first in, first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).",
    logic: "The core idea is to use two stacks, let's call them `in_stack` and `out_stack`. All `enqueue` operations go directly into `in_stack`. The `dequeue` and `peek` operations work on `out_stack`. If `out_stack` is empty when a `dequeue` or `peek` is requested, we transfer all elements from `in_stack` to `out_stack`. This transfer reverses the order of the elements, effectively making the LIFO stack behave in a FIFO manner for these operations. We only perform this transfer when `out_stack` is empty, which makes the operations amortized O(1).",
    code: `
class MyQueue:
    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def push(self, x: int) -> None:
        self.in_stack.append(x)

    def pop(self) -> int:
        self.peek()
        return self.out_stack.pop()

    def peek(self) -> int:
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        return self.out_stack[-1]

    def empty(self) -> bool:
        return not self.in_stack and not self.out_stack
`.trim(),
    lineByLine: [
        "'__init__' - Initializes two empty lists to act as our stacks.",
        "'push' - This is the enqueue operation. New elements are always appended to the `in_stack`.",
        "'pop' - This is the dequeue operation. It first calls `peek()` to ensure `out_stack` is ready, then pops from `out_stack`.",
        "'peek' - This is the crucial part. It first checks if `out_stack` is empty. If it is, it moves every element from `in_stack` to `out_stack`. This reversal puts the oldest elements at the top of `out_stack`. It then returns the top element of `out_stack`.",
        "'empty' - The queue is empty only if both stacks are empty."
    ],
    diagram: `
**Operations:** push(1), push(2), peek(), pop(), push(3), peek()

1. **push(1):** 'in_stack' = [1], 'out_stack' = []
2. **push(2):** 'in_stack' = [1, 2], 'out_stack' = []
3. **peek():**
   - 'out_stack' is empty.
   - Transfer from 'in_stack': 'out_stack' becomes [2, 1], 'in_stack' becomes [].
   - Return top of 'out_stack': 1.
4. **pop():**
   - 'peek()' was just called, 'out_stack' is ready.
   - Pop from 'out_stack'. Return 1. 'out_stack' is now [2].
5. **push(3):** 'in_stack' = [3], 'out_stack' = [2].
6. **peek():**
   - 'out_stack' is NOT empty.
   - Return top of 'out_stack': 2.
    `
  },
];


export default function QueuePage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
          <header>
              <div className="flex items-center gap-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                      Queue ➡️
                  </h1>
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger>
                              <Info className="h-6 w-6 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                              <p>A FIFO (First-In, First-Out) abstract data type.</p>
                          </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                  A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. This is like a checkout line at a grocery store: the first person to get in line is the first person to be served. Elements are added to the back (rear) and removed from the front.
              </p>
          </header>

          <Card>
              <CardHeader><CardTitle>Visual Diagram</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>
                      The main operations for a queue are 'enqueue' (add an element to the rear) and 'dequeue' (remove an element from the front).
                  </CardDescription>
                  <QueueVisual />
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                  <CardTitle>Core Concepts</CardTitle>
                  <CardDescription>Understanding these concepts is key to using queues effectively.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>FIFO (First-In, First-Out)</AccordionTrigger>
                          <AccordionContent>
                            This is the defining principle of a queue. Unlike a stack's LIFO, the first element added to the queue is the first one to be removed. This makes queues ideal for any scenario where order of arrival is important, such as processing tasks in the order they were received or managing requests to a shared resource.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Implementation: Array vs. Linked List</AccordionTrigger>
                          <AccordionContent>
                              <ul className="list-disc pl-5 space-y-2">
                                  <li><strong>Linked List:</strong> This is a very natural way to implement a queue. By keeping pointers to both the head and the tail of the list, you can achieve true O(1) time complexity for both enqueue (add to tail) and dequeue (remove from head) operations.</li>
                                  <li><strong>Array/Vector:</strong> While possible, implementing an efficient queue with a standard dynamic array can be tricky. Enqueuing at the end is fast (O(1)), but dequeuing from the beginning requires shifting all other elements, which is a slow O(n) operation. To overcome this, a circular queue (or circular buffer) is often used with arrays, which reuses empty spots at the front of the array.</li>
                              </ul>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>


          <Card>
              <CardHeader><CardTitle>Properties & Time Complexity</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>A queue's primary advantage is its speed for adding and removing elements from its ends.</CardDescription>
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
                  <CardDescription>Code examples for queue operations in popular languages. Most languages provide a built-in queue implementation.</CardDescription>
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
                  <CardDescription>Queues are used in a wide variety of computing scenarios.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Task Scheduling</AccordionTrigger>
                          <AccordionContent>
                           Operating systems use queues to schedule CPU tasks. Processes waiting for the CPU are kept in a queue, and the scheduler picks the next process to run from the front of the queue.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Breadth-First Search (BFS)</AccordionTrigger>
                          <AccordionContent>
                            BFS is a graph traversal algorithm that explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. A queue is the perfect data structure to manage the nodes to be visited.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Buffering</AccordionTrigger>
                          <AccordionContent>
                            Queues are used in networking to handle data packets. When data is transmitted faster than it can be processed, it's stored in a buffer (a queue) to await processing, ensuring no data is lost. This is common in things like streaming video.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                          <AccordionTrigger>Printers and Shared Resources</AccordionTrigger>
                          <AccordionContent>
                           When multiple users send print jobs to a single printer, the jobs are placed in a print queue. The printer processes the jobs in the order they were received (FIFO).
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>
          
          <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-3"><Lightbulb className="h-6 w-6 text-primary"/>Common Queue Problems</CardTitle>
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
                      <Link href="/treasure/queue/challenges">
                          Start Challenges
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </CardContent>
          </Card>

          <Card>
              <CardHeader><CardTitle>What's Next?</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                  <Link href="/treasure/hash-table" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Hash Table</h3>
                          <p className="text-sm text-muted-foreground">Explore Hash Tables to see how they provide average O(1) time complexity for search, insertion, and deletion.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/dsa-problems" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Practice Queue Problems</h3>
                          <p className="text-sm text-muted-foreground">Apply your knowledge by tackling common queue problems on LeetCode or HackerRank.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
              </CardContent>
          </Card>

      </div>
    </AuthGuard>
  );
}
