
"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Copy, ArrowRight, BrainCircuit, Code, Workflow, CheckCircle, Lightbulb, Link2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AuthGuard } from "@/components/auth/auth-guard";


const SinglyLinkedListVisual = () => (
    <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg my-4 space-x-2">
        <span className="font-semibold mr-2">Head</span>
        <ArrowRight className="w-6 h-6 text-muted-foreground"/>
        {['A', 'B', 'C'].map((val, i, arr) => (
             <div key={i} className="flex items-center">
                <div className="flex flex-col items-center">
                    <div className="flex">
                        <div className="w-12 h-12 border-2 border-primary bg-background rounded-l flex items-center justify-center text-lg font-bold">
                            <span>{val}</span>
                        </div>
                        <div className="w-6 h-12 border-y-2 border-r-2 border-primary bg-background rounded-r flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                    </div>
                </div>
                {i < arr.length - 1 && <ArrowRight className="w-8 h-8 text-primary mx-2" />}
             </div>
        ))}
         <div className="flex items-center">
            <ArrowRight className="w-8 h-8 text-primary mx-2" />
            <div className="w-12 h-12 flex items-center justify-center text-lg font-bold text-muted-foreground">
                NULL
            </div>
         </div>
    </div>
);

const DoublyLinkedListVisual = () => (
    <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg my-4 space-x-2">
        <span className="font-semibold mr-2">Head</span>
        <ArrowRight className="w-6 h-6 text-muted-foreground"/>
        {['A', 'B', 'C'].map((val, i, arr) => (
            <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                    <div className="flex">
                        <div className="w-6 h-12 border-y-2 border-l-2 border-blue-500 bg-background rounded-l flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="w-12 h-12 border-2 border-blue-500 bg-background flex items-center justify-center text-lg font-bold">
                            <span>{val}</span>
                        </div>
                        <div className="w-6 h-12 border-y-2 border-r-2 border-blue-500 bg-background rounded-r flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
                {i < arr.length - 1 && <div className="flex flex-col items-center"><ArrowRight className="w-8 h-8 text-blue-500" /><ArrowLeft className="w-8 h-8 text-blue-500" /></div>}
            </React.Fragment>
        ))}
        <ArrowRight className="w-6 h-6 text-muted-foreground"/>
        <span className="font-semibold ml-2">Tail</span>
    </div>
);

const CircularLinkedListVisual = () => (
    <div className="flex items-center justify-center p-8 bg-muted/50 rounded-lg my-4 space-x-2 relative h-48 w-full">
      {['A', 'B', 'C', 'D'].map((val, i, arr) => {
        const angle = (i / arr.length) * 2 * Math.PI;
        const x = Math.cos(angle) * 100;
        const y = Math.sin(angle) * 100;
        return (
          <div key={i} style={{ transform: `translate(${x}px, ${y}px)` }} className="absolute">
            <div className="flex">
                <div className="w-12 h-12 border-2 border-green-500 bg-background rounded-l flex items-center justify-center text-lg font-bold">
                    <span>{val}</span>
                </div>
                <div className="w-6 h-12 border-y-2 border-r-2 border-green-500 bg-background rounded-r flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
            </div>
            <ArrowRight className="w-6 h-6 text-green-500 absolute top-1/2 -right-10" style={{ transform: `translateY(-50%) rotate(${angle + Math.PI/4}rad)` }} />
          </div>
        );
      })}
    </div>
);


const properties = [
    { property: "Access Time", details: "O(n) - Must traverse the list from the head.", complexity: "bad" },
    { property: "Search Time", details: "O(n) - Must check every element.", complexity: "bad" },
    { property: "Insertion (Head)", details: "O(1) - Just update pointers.", complexity: "good" },
    { property: "Insertion (End, with tail pointer)", details: "O(1)", complexity: "good" },
    { property: "Insertion (Middle)", details: "O(n) - Requires traversing to the position.", complexity: "bad" },
    { property: "Deletion (Head)", details: "O(1)", complexity: "good" },
    { property: "Deletion (Middle/End)", details: "O(n) - Requires traversing to the node (or node before for singly linked).", complexity: "bad" },
];

const ComplexityBadge = ({ complexity }: { complexity: "good" | "bad" }) => (
    <Badge variant={complexity === 'good' ? 'default' : 'destructive'} className={complexity === 'good' ? 'bg-green-600' : ''}>
        {complexity.toUpperCase()}
    </Badge>
);

const codeSnippets = {
  python: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # --- Operations ---

    # Insertion at head (O(1))
    def insert_at_head(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # Deletion of head (O(1))
    def delete_head(self):
        if self.head:
            self.head = self.head.next

    # Traversal (O(n))
    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
`.trim(),
  cpp: `
#include <iostream>

struct Node {
    int data;
    Node* next;
};

class LinkedList {
public:
    Node* head;
    LinkedList() { head = nullptr; }

    // --- Operations ---

    // Insertion at head (O(1))
    void insert_at_head(int data) {
        Node* newNode = new Node();
        newNode->data = data;
        newNode->next = head;
        head = newNode;
    }

    // Deletion of head (O(1))
    void delete_head() {
        if (head != nullptr) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }

    // Traversal (O(n))
    void traverse() {
        Node* current = head;
        while (current != nullptr) {
            std::cout << current->data << " -> ";
            current = current->next;
        }
        std::cout << "NULL" << std::endl;
    }
};
`.trim(),
  java: `
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    Node head;

    // --- Operations ---

    // Insertion at head (O(1))
    public void insertAtHead(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    // Deletion of head (O(1))
    public void deleteHead() {
        if (head != null) {
            head = head.next;
        }
    }

    // Traversal (O(n))
    public void traverse() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}
`.trim()
};

const commonProblems = [
  {
    title: "Reverse a Linked List",
    description: "Reverse a singly linked list.",
    logic: "The standard iterative approach uses three pointers: `previous`, `current`, and `next_node`. As you traverse the list, you change the `next` pointer of the `current` node to point to the `previous` node. You then move all three pointers one step forward. The key is to first save the next node before you overwrite the current node's `next` pointer.",
    code: `
def reverse_list(head):
    prev = None
    curr = head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev
`.trim(),
    lineByLine: [
        "`prev = None` - Initializes a pointer for the previous node, which will eventually be the new head.",
        "`curr = head` - Starts a pointer at the current head of the list.",
        "`while curr:` - Loops through the entire list until `curr` becomes `None`.",
        "`next_temp = curr.next` - Stores the next node in the original list before we overwrite the pointer.",
        "`curr.next = prev` - The core reversal step: the current node's pointer is flipped to point backwards.",
        "`prev = curr` - The `prev` pointer moves one step forward to the current node.",
        "`curr = next_temp` - The `curr` pointer moves one step forward to the next node in the original list.",
        "`return prev` - When the loop finishes, 'prev' will be at the original last node, which is the new head."
    ],
    diagram: `
**List: A -> B -> C -> NULL**

1.  **Initial:**
    *   prev = NULL
    *   curr = A

2.  **Loop 1 (curr=A):**
    *   next_temp = B
    *   A.next = NULL (reverses pointer)
    *   prev = A
    *   curr = B
    *   State: NULL <- A,  B -> C -> NULL

3.  **Loop 2 (curr=B):**
    *   next_temp = C
    *   B.next = A (reverses pointer)
    *   prev = B
    *   curr = C
    *   State: NULL <- A <- B,  C -> NULL

4.  **Loop 3 (curr=C):**
    *   next_temp = NULL
    *   C.next = B (reverses pointer)
    *   prev = C
    *   curr = NULL
    *   State: NULL <- A <- B <- C

5.  **Loop ends.** Return 'prev', which is C. **Result: C -> B -> A -> NULL**
    `
  },
  {
    title: "Detect a Cycle",
    description: "Given a linked list, determine if it has a cycle in it.",
    logic: "The most famous solution is Floyd's Tortoise and Hare algorithm. It uses two pointers, a 'slow' one that moves one step at a time, and a 'fast' one that moves two steps at a time. If there is a cycle, the fast pointer will eventually lap the slow pointer, and they will meet. If the fast pointer reaches the end of the list (NULL), there is no cycle.",
    code: `
def has_cycle(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
`.trim(),
    lineByLine: [
        "`slow = head`, `fast = head` - Initializes both pointers at the start of the list.",
        "`while fast and fast.next:` - The loop continues as long as the fast pointer and the node ahead of it are not null. This prevents errors on lists with an even or odd number of nodes.",
        "`slow = slow.next` - The slow pointer moves one step.",
        "`fast = fast.next.next` - The fast pointer moves two steps.",
        "`if slow == fast:` - If the pointers ever meet at the same node, a cycle has been detected.",
        "`return True` - Confirms a cycle exists.",
        "`return False` - If the loop finishes, it means the fast pointer reached the end, so there is no cycle."
    ],
    diagram: `
**List: A -> B -> C -> D -> B (cycle)**

| Step | Slow Pointer | Fast Pointer | Meet? |
|------|--------------|--------------|-------|
| 0    | A            | A            | No    |
| 1    | B            | C            | No    |
| 2    | C            | B            | No    |
| 3    | D            | D            | YES!  |

**Returns True.**
    `
  },
];


export default function LinkedListPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
          <header>
              <div className="flex items-center gap-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                      Linked List 🔗
                  </h1>
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger>
                              <Info className="h-6 w-6 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                              <p>A linear collection of data elements whose order is not given by their physical placement in memory.</p>
                          </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                  Unlike an array, a linked list's elements are not stored at contiguous locations. The elements are linked using pointers, which gives it a key advantage: insertions and deletions at the beginning are extremely fast.
              </p>
          </header>

          <Card>
              <CardHeader><CardTitle>Visual Diagrams</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>
                      A linked list consists of nodes where each node contains data and a pointer to the next node in the sequence. The entry point is the 'head' pointer. The last node points to NULL, indicating the end of the list.
                  </CardDescription>
                  <SinglyLinkedListVisual />
                   <CardDescription className="mt-4">
                      A doubly linked list has nodes that contain an extra pointer, to the previous node in the sequence. This allows for traversal in both directions.
                  </CardDescription>
                  <DoublyLinkedListVisual />
                   <CardDescription className="mt-4">
                      In a circular linked list, the `next` pointer of the last node points back to the head node instead of NULL, forming a circle.
                  </CardDescription>
                  <CircularLinkedListVisual />
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                  <CardTitle>Core Concepts</CardTitle>
                  <CardDescription>Understanding these concepts is key to using linked lists effectively.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Nodes and Pointers</AccordionTrigger>
                          <AccordionContent>
                           Each element in a linked list is a 'node'. A node is typically a struct or object containing two things: the data itself, and a pointer (or reference) to the next node in the sequence. This chain of pointers is what forms the list.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Types of Linked Lists</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-foreground mb-1">Singly Linked List</h4>
                                <p>This is the most basic type. Each node has one pointer that points to the next node in the list. Traversal is only possible in the forward direction. It's memory-efficient but lacks the flexibility of backward traversal.</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-foreground mb-1">Doubly Linked List</h4>
                                <p>Each node has two pointers: one to the next node (`next`) and one to the previous node (`prev`). This allows for traversal in both forward and backward directions, which can simplify some operations like deletion. The trade-off is slightly more memory usage per node.</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-foreground mb-1">Circular Linked List</h4>
                                <p>In this variation, the 'next' pointer of the last node points back to the head node instead of NULL. This forms a circle and can be useful for applications that require continuous looping through items, like a playlist or a round-robin scheduler. It can be singly or doubly linked.</p>
                            </div>
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Head and Tail</AccordionTrigger>
                          <AccordionContent>
                              The `head` is a pointer that always points to the very first node in the list. It's the entry point for any list operation. Similarly, a `tail` pointer can be maintained to point to the last node. Having a tail pointer makes insertion at the end of the list an O(1) operation, which would otherwise be O(n).
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>


          <Card>
              <CardHeader><CardTitle>Properties & Time Complexity</CardTitle></CardHeader>
              <CardContent>
                  <CardDescription>A linked list excels at insertions and deletions at the beginning of the list, but is slow for accessing a specific element.</CardDescription>
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
                  <CardDescription>Code examples for the most frequent linked list operations in popular languages.</CardDescription>
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
                  <CardDescription>Leverage linked lists to solve complex problems with these common and efficient patterns.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Two Pointers (Fast & Slow)</AccordionTrigger>
                          <AccordionContent>
                            This is the most famous linked list pattern. By having two pointers move through the list at different speeds (e.g., one moves one step, the other moves two), you can solve a surprising number of problems. It's the key to detecting cycles, finding the middle of a list, and more, all in a single pass.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Dummy Head Node</AccordionTrigger>
                          <AccordionContent>
                            To simplify insertion and deletion logic, especially at the head of the list, a 'dummy' or 'sentinel' node can be created. This dummy node points to the real head of the list. It eliminates the need for special `if` conditions to handle changes to the head, as the head is now just another node in the list from the dummy's perspective.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>In-Place Reversal</AccordionTrigger>
                          <AccordionContent>
                            This pattern involves reversing the list without using any extra space. By carefully managing three pointers (previous, current, and next), you can iterate through the list and flip the direction of each node's `next` pointer as you go.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </CardContent>
          </Card>
          
          <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-3"><Lightbulb className="h-6 w-6 text-primary"/>Common Linked List Problems</CardTitle>
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
                                          {problem.lineByLine.map((line, i) => <li key={i}>{line}</li>)}
                                      </ul>

                                      <h4 className="font-semibold">How it Works (Diagram)</h4>
                                      <pre className="bg-muted/50 p-4 rounded-md text-sm font-code whitespace-pre-wrap">{`
                                      ${problem.diagram}
                                      `}</pre>
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
                      <Link href="/treasure/linked-list/challenges">
                          Start Challenges
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </CardContent>
          </Card>

          <Card>
              <CardHeader><CardTitle>What's Next?</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                  <Link href="/treasure/stack" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Stack</h3>
                          <p className="text-sm text-muted-foreground">Explore the Stack, a LIFO data structure often built upon linked lists or arrays.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/dsa-problems" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Practice Linked List Problems</h3>
                          <p className="text-sm text-muted-foreground">Apply your knowledge by tackling common linked list problems on LeetCode or HackerRank.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
              </CardContent>
          </Card>

      </div>
    </AuthGuard>
  );
}
