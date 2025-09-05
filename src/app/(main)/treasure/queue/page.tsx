
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Copy, ArrowRight, BrainCircuit, Code, Workflow, Lightbulb, ChevronsRight, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AuthGuard } from "@/components/auth/auth-guard";


const QueueVisual = () => (
    <div className="flex flex-col items-center justify-center gap-8 p-4 bg-muted/50 rounded-lg my-4">
        <div className="text-center">
            <h3 className="font-semibold">Enqueue Operation (Add to Rear)</h3>
            <p className="text-xs text-muted-foreground">A new element (30) is added to the back (right side) of the line.</p>
        </div>
        <div className="flex items-center gap-4 w-full justify-center">
             <div className="flex items-center border-2 border-primary h-20 w-80 relative p-2 rounded-lg bg-background">
                <div className="absolute -top-6 left-0 font-semibold text-sm">Front</div>
                <div className="absolute -top-6 right-0 font-semibold text-sm">Rear</div>
                <div className="flex items-center gap-2">
                    <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center text-lg font-bold rounded-md">10</div>
                    <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center text-lg font-bold rounded-md">20</div>
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <LogIn className="h-8 w-8 text-green-500 mr-2" />
                    <div className="w-16 h-16 bg-green-500/20 border border-green-500 flex items-center justify-center text-lg font-bold rounded-md">30</div>
                </div>
            </div>
        </div>

        <div className="text-center mt-8">
            <h3 className="font-semibold">Dequeue Operation (Remove from Front)</h3>
            <p className="text-xs text-muted-foreground">The first element (10) is removed from the front (left side) of the line.</p>
        </div>
        <div className="flex items-center gap-4 w-full justify-center">
            <div className="flex items-center border-2 border-primary h-20 w-80 relative p-2 rounded-lg bg-background">
                <div className="absolute -top-6 left-0 font-semibold text-sm">Front</div>
                <div className="absolute -top-6 right-0 font-semibold text-sm">Rear</div>
                 <div className="flex items-center gap-2">
                    <div className="w-16 h-16 bg-destructive/20 border border-destructive flex items-center justify-center text-lg font-bold rounded-md">10</div>
                    <LogOut className="h-8 w-8 text-destructive ml-2" />
                    <div className="flex-1 flex items-center gap-2 justify-end">
                        <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center text-lg font-bold rounded-md">20</div>
                        <div className="w-16 h-16 bg-primary/20 border border-primary flex items-center justify-center text-lg font-bold rounded-md">30</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const properties = [
    { type: "Simple Queue (Linked List)", property: "Enqueue", complexity: "O(1)" },
    { type: "Simple Queue (Linked List)", property: "Dequeue", complexity: "O(1)" },
    { type: "Simple Queue (Array)", property: "Enqueue", complexity: "O(1) amortized" },
    { type: "Simple Queue (Array)", property: "Dequeue", complexity: "O(n)" },
    { type: "Circular Queue (Array)", property: "Enqueue", complexity: "O(1)" },
    { type: "Circular Queue (Array)", property: "Dequeue", complexity: "O(1)" },
    { type: "Priority Queue (Heap)", property: "Enqueue", complexity: "O(log n)" },
    { type: "Priority Queue (Heap)", property: "Dequeue", complexity: "O(log n)" },
    { type: "Deque (Linked List/Deque)", property: "Add/Remove Front/Rear", complexity: "O(1)" },
    { type: "All Types", property: "Peek/Front (Access)", complexity: "O(1)" },
    { type: "All Types", property: "Search", complexity: "O(n)" },
];

const ComplexityBadge = ({ complexity }: { complexity: string }) => {
    const isGood = complexity.includes("1") || complexity.includes("log n");
    return <Badge variant={isGood ? 'default' : 'destructive'} className={isGood ? 'bg-green-600' : ''}>
        {complexity}
    </Badge>
};

const codeSnippets = {
  python: {
    simple: {
      code: `
from collections import deque

# collections.deque is highly optimized for appends and pops from both ends.
q = deque()

# Enqueue (add to the right)
q.append(10)
q.append(20)
q.append(30)
print(f"Queue after enqueues: {q}")

# Dequeue (remove from the left)
first_item = q.popleft()
print(f"Dequeued item: {first_item}")
print(f"Queue after dequeue: {q}")

# Peek (look at the front item)
if q:
    front_item = q[0]
    print(f"Front item is: {front_item}")
`.trim(),
      explanation: 'Python\'s `collections.deque` (double-ended queue) is the standard and most efficient way to implement a simple FIFO queue. `append()` adds to the rear, and `popleft()` removes from the front, both in O(1) time.',
      lineByLine: [
        "`from collections import deque` - Imports the necessary class.",
        "`q = deque()` - Initializes an empty deque object.",
        "`q.append(10)` - Enqueues an item. This adds it to the right side of the deque.",
        "`first_item = q.popleft()` - Dequeues an item. This removes and returns the leftmost item.",
        "`front_item = q[0]` - Peeks at the front item without removing it. This is an O(1) operation on a deque."
      ]
    },
    priority: {
      code: `
import heapq

# Python's heapq module implements a min-heap.
pq = []

# Enqueue with priority (lower number = higher priority)
heapq.heappush(pq, (2, 'Task A')) # (priority, item)
heapq.heappush(pq, (3, 'Task B'))
heapq.heappush(pq, (1, 'Task C'))
print(f"Priority queue: {pq}")

# Dequeue (removes the item with the highest priority/smallest number)
highest_priority_item = heapq.heappop(pq)
print(f"Dequeued item: {highest_priority_item}") # ('Task C')
print(f"Priority queue after dequeue: {pq}")
`.trim(),
      explanation: 'A Priority Queue in Python is typically implemented using the `heapq` module, which provides a min-heap. Items are stored as tuples `(priority, data)`. `heappush` and `heappop` maintain the heap property, ensuring the item with the smallest priority value is always at the root, ready to be dequeued in O(log n) time.',
      lineByLine: [
        "`import heapq` - Imports the heap queue algorithm library.",
        "`pq = []` - A regular Python list is used as the underlying storage for the heap.",
        "`heapq.heappush(pq, (2, 'Task A'))` - Pushes an item onto the heap. `heapq` will automatically arrange the list to maintain the min-heap property.",
        "`highest_priority_item = heapq.heappop(pq)` - Removes and returns the smallest item from the heap (in this case, the one with priority 1)."
      ]
    },
    deque: {
      code: `
from collections import deque

d = deque()

# Add to rear
d.append(10) # deque is now [10]

# Add to front
d.appendleft(20) # deque is now [20, 10]

# Add to rear again
d.append(30) # deque is now [20, 10, 30]

# Remove from rear
d.pop() # returns 30, deque is now [20, 10]

# Remove from front
d.popleft() # returns 20, deque is now [10]
`.trim(),
      explanation: 'Python\'s `collections.deque` is a fully-featured double-ended queue. It provides O(1) time complexity for adding and removing elements from both the front (`appendleft`, `popleft`) and the rear (`append`, `pop`).',
      lineByLine: [
        "`d = deque()` - Initializes an empty deque.",
        "`d.append(10)` - Adds an element to the right end (rear).",
        "`d.appendleft(20)` - Adds an element to the left end (front).",
        "`d.pop()` - Removes and returns the element from the right end (rear).",
        "`d.popleft()` - Removes and returns the element from the left end (front)."
      ]
    }
  },
  cpp: {
    simple: {
      code: `
#include <iostream>
#include <queue>

// Create a queue of integers
std::queue<int> q;

// Enqueue
q.push(10);
q.push(20);
q.push(30);

// Dequeue
if (!q.empty()) {
    q.pop(); // Removes 10. Note: pop() returns void.
}

// Peek
if (!q.empty()) {
    std::cout << "Front element: " << q.front() << std::endl; // 20
}

// Check size
std::cout << "Queue size: " << q.size() << std::endl; // 2
`.trim(),
      explanation: 'The C++ STL provides `std::queue`, which is a container adapter that gives a FIFO interface. By default, it uses `std::deque` as the underlying container. `push()` adds to the back, `pop()` removes from the front, and `front()` accesses the front element.',
      lineByLine: [
        "`#include <queue>` - Includes the necessary header for `std::queue`.",
        "`std::queue<int> q;` - Declares a queue that will hold integers.",
        "`q.push(10);` - Enqueues an element to the back of the queue.",
        "`q.pop();` - Dequeues an element from the front. Important: this function has a `void` return type.",
        "`q.front()` - Returns a reference to the element at the front of the queue without removing it."
      ]
    },
    priority: {
      code: `
#include <iostream>
#include <queue>

// Create a max-priority queue (default behavior)
std::priority_queue<int> pq;

// Enqueue
pq.push(10);
pq.push(30);
pq.push(20);

// Peek at the highest priority item
if (!pq.empty()) {
    std::cout << "Top element: " << pq.top() << std::endl; // 30
}

// Dequeue (removes the highest priority item)
pq.pop();
std::cout << "Top element after pop: " << pq.top() << std::endl; // 20
`.trim(),
      explanation: 'C++\'s `std::priority_queue` is a container adapter that provides a priority queue interface, typically implemented as a max-heap. This means that by default, the element with the largest value has the highest priority. `push()` adds an element, and `pop()` removes the top-priority element.',
      lineByLine: [
        "`#include <queue>` - The priority queue is also in this header.",
        "`std::priority_queue<int> pq;` - Declares a max-priority queue.",
        "`pq.push(30);` - Adds an element. The underlying heap will be rearranged to maintain the max-heap property.",
        "`pq.top()` - Returns a const reference to the element with the highest priority (the largest value in a max-heap).",
        "`pq.pop()` - Removes the top-priority element."
      ]
    },
    deque: {
      code: `
#include <iostream>
#include <deque>

std::deque<int> d;

// Add to rear
d.push_back(10); // deque is now {10}

// Add to front
d.push_front(20); // deque is now {20, 10}

// Add to rear again
d.push_back(30); // deque is now {20, 10, 30}

// Remove from rear
d.pop_back(); // deque is now {20, 10}

// Remove from front
d.pop_front(); // deque is now {20}
`.trim(),
      explanation: 'The C++ STL `std::deque` is a sequence container that allows for efficient insertion and deletion at both its beginning and its end. It is the default underlying container for `std::queue` and `std::stack`.',
      lineByLine: [
        "`#include <deque>` - Includes the necessary header.",
        "`d.push_back(10);` - Adds an element to the end (rear) of the deque.",
        "`d.push_front(20);` - Adds an element to the beginning (front) of the deque.",
        "`d.pop_back();` - Removes the element from the end (rear).",
        "`d.pop_front();` - Removes the element from the beginning (front)."
      ]
    }
  },
  java: {
    simple: {
      code: `
import java.util.Queue;
import java.util.LinkedList;

// Queue is an interface; LinkedList is a common implementation.
Queue<Integer> q = new LinkedList<>();

// Enqueue
q.add(10);
q.offer(20); // add() and offer() are similar
System.out.println("Queue: " + q);

// Dequeue
Integer firstItem = q.remove(); // Throws exception if empty
Integer secondItem = q.poll();  // Returns null if empty
System.out.println("Removed: " + firstItem + ", " + secondItem);


// Peek
q.add(30);
Integer frontItem = q.element(); // Throws exception if empty
Integer nextFront = q.peek();   // Returns null if empty
System.out.println("Front item: " + frontItem);
`.trim(),
      explanation: 'In Java, `Queue` is an interface. A common and efficient implementation is `LinkedList`. The interface provides methods like `add()`/`offer()` for enqueueing and `remove()`/`poll()` for dequeueing. The main difference is how they handle empty-queue scenarios: one set throws an exception, while the other returns `null` or `false`.',
      lineByLine: [
        "`Queue<Integer> q = new LinkedList<>();` - Declares a variable of type `Queue` and instantiates it with a `LinkedList`.",
        "`q.add(10);` - Enqueues an item. Throws an exception if the queue capacity is full.",
        "`q.offer(20);` - Also enqueues an item. Returns `false` if the queue capacity is full, instead of throwing.",
        "`q.remove();` - Dequeues an item. Throws an exception if the queue is empty.",
        "`q.poll();` - Also dequeues an item. Returns `null` if the queue is empty.",
        "`q.element();` - Peeks at the front item. Throws an exception if empty.",
        "`q.peek();` - Also peeks at the front item. Returns `null` if empty."
      ]
    },
    priority: {
      code: `
import java.util.PriorityQueue;
import java.util.Queue;

// PriorityQueue implements a min-heap by default.
Queue<Integer> pq = new PriorityQueue<>();

// Enqueue
pq.add(30);
pq.add(10);
pq.add(20);

// Peek at the highest priority item
System.out.println("Top element: " + pq.peek()); // 10

// Dequeue (removes the highest priority item)
pq.poll();
System.out.println("Top element after poll: " + pq.peek()); // 20
`.trim(),
      explanation: 'Java\'s `java.util.PriorityQueue` class provides a priority queue implementation, which is a min-heap by default. This means the element with the smallest value has the highest priority. The standard `add()`/`offer()` and `remove()`/`poll()` methods are used, but their behavior is governed by the element priorities.',
      lineByLine: [
        "`Queue<Integer> pq = new PriorityQueue<>();` - Creates a priority queue. By default, it orders elements by their natural ordering (smallest first for numbers).",
        "`pq.add(30);` - Adds an element to the queue. The underlying heap is re-organized.",
        "`pq.peek();` - Returns the head of the queue (the smallest element) without removing it.",
        "`pq.poll();` - Removes and returns the head of the queue."
      ]
    },
    deque: {
      code: `
import java.util.ArrayDeque;
import java.util.Deque;

Deque<Integer> d = new ArrayDeque<>();

// Add to rear
d.addLast(10); // Deque is now [10]

// Add to front
d.addFirst(20); // Deque is now [20, 10]

// Remove from rear
d.removeLast(); // Returns 10. Deque is now [20]

// Remove from front
d.removeFirst(); // Returns 20. Deque is now []
`.trim(),
      explanation: 'Java\'s `Deque` (Double-Ended Queue) interface provides a rich set of methods for adding and removing from both ends. `ArrayDeque` is a common and efficient implementation. It provides methods like `addFirst`/`removeFirst` and `addLast`/`removeLast`.',
      lineByLine: [
        "`Deque<Integer> d = new ArrayDeque<>();` - `Deque` is an interface; `ArrayDeque` is a resizable-array implementation.",
        "`d.addLast(10);` - Adds an element to the tail (end) of the deque.",
        "`d.addFirst(20);` - Adds an element to the head (front) of the deque.",
        "`d.removeLast();` - Removes and returns the element from the tail.",
        "`d.removeFirst();` - Removes and returns the element from the head."
      ]
    }
  }
};


const commonProblems = [
  {
    title: "Implement Queue using Stacks",
    description: "Implement a first in, first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).",
    logic: "The core idea is to use two stacks, let's call them 'in_stack' and 'out_stack'. All 'enqueue' operations go directly into 'in_stack'. The 'dequeue' and 'peek' operations work on 'out_stack'. If 'out_stack' is empty when a 'dequeue' or 'peek' is requested, we transfer all elements from 'in_stack' to 'out_stack'. This transfer reverses the order of the elements, effectively making the LIFO stack behave in a FIFO manner for these operations. We only perform this transfer when 'out_stack' is empty, which makes the operations amortized O(1).",
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
        "`__init__` - Initializes two empty lists to act as our stacks.",
        "`push` - This is the enqueue operation. New elements are always appended to the `in_stack`.",
        "`pop` - This is the dequeue operation. It first calls `peek()` to ensure `out_stack` is ready, then pops from `out_stack`.",
        "`peek` - This is the crucial part. It first checks if `out_stack` is empty. If it is, it moves every element from `in_stack` to `out_stack`. This reversal puts the oldest elements at the top of `out_stack`. It then returns the top element of `out_stack`.",
        "`empty` - The queue is empty only if both stacks are empty."
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
   - Return top of 'out_stack': 2.`
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
                              <p>A data structure that follows a First-In, First-Out (FIFO) principle.</p>
                          </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                  A queue is a linear data structure analogous to a real-world line. The first element added is the first to be removed. It has two main ends: the 'front' where elements are removed (dequeued) and the 'rear' where elements are added (enqueued).
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
                  <CardTitle>Core Concepts & Types</CardTitle>
                  <CardDescription>Queues come in several variations, each suited for different tasks.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Simple Queue (FIFO)</AccordionTrigger>
                          <AccordionContent>
                            This is the standard queue that strictly follows the First-In, First-Out principle. It's ideal for any scenario where order of arrival is important, such as processing tasks in the order they were received or managing requests to a shared resource.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Circular Queue</AccordionTrigger>
                          <AccordionContent>
                            A circular queue is a linear data structure in which the operations are performed based on FIFO principle and the last position is connected back to the first position to make a circle. It's an efficient way to implement a queue using an array, as it avoids the O(n) cost of shifting elements upon dequeueing by wrapping around to the start of the array when the end is reached.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Priority Queue</AccordionTrigger>
                          <AccordionContent>
                            A priority queue is a special type of queue where each element has an associated priority. Elements with higher priority are served before elements with lower priority. If two elements have the same priority, they are served according to their order in the queue. They are commonly implemented using a heap.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                          <AccordionTrigger>Deque (Double-Ended Queue)</AccordionTrigger>
                          <AccordionContent>
                            A deque is a generalization of a queue that allows adding and removing elements from either the front or the rear. This makes it a versatile structure that can act as both a queue and a stack.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>


          <Card>
              <CardHeader><CardTitle>Properties & Time Complexity</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>Performance varies based on the queue type and its underlying implementation (e.g., Array, Linked List, Heap).</CardDescription>
                  <Table className="mt-4">
                      <TableHeader>
                          <TableRow>
                              <TableHead>Queue Type / Operation</TableHead>
                              <TableHead>Time Complexity</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {properties.map(p => (
                              <TableRow key={p.type + p.property}>
                                  <TableCell className="font-semibold">{p.type} - {p.property}</TableCell>
                                  <TableCell>
                                      <ComplexityBadge complexity={p.complexity} />
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
                  <CardDescription>Code examples for queue operations in popular languages. Most languages provide built-in, highly-optimized implementations.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Tabs defaultValue="python">
                      <TabsList>
                          <TabsTrigger value="python">Python</TabsTrigger>
                          <TabsTrigger value="cpp">C++</TabsTrigger>
                          <TabsTrigger value="java">Java</TabsTrigger>
                      </TabsList>
                      {Object.entries(codeSnippets).map(([lang, queues]) => (
                          <TabsContent value={lang} key={lang}>
                            <Accordion type="single" collapsible className="w-full" defaultValue='item-0'>
                                {Object.entries(queues).map(([type, data], index) => (
                                <AccordionItem value={`item-${index}`} key={type}>
                                    <AccordionTrigger className="text-base font-medium capitalize no-underline hover:no-underline">
                                       {type} Queue
                                    </AccordionTrigger>
                                    <AccordionContent>
                                       <div className="relative bg-muted rounded-md p-4 font-code text-sm mt-4">
                                            <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-7 w-7" onClick={() => navigator.clipboard.writeText(data.code)}>
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                            <pre><code>{data.code}</code></pre>
                                        </div>
                                        <div className="mt-4 prose prose-sm dark:prose-invert max-w-none">
                                            <h4 className="font-semibold">Logic & Approach</h4>
                                            <p>{data.explanation}</p>

                                            <h4 className="font-semibold">Line-by-Line Explanation</h4>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {(data.lineByLine || []).map((line, i) => <li key={i}><code className='text-xs bg-muted/50 p-1 rounded'>{line}</code></li>)}
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                ))}
                            </Accordion>
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

    