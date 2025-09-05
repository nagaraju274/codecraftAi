

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
  python: {
    singly: {
      code: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

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
      explanation: `
- **Node Class**: A simple class to represent each element. It holds the 'data' and a 'next' pointer to the subsequent node.
- **LinkedList Class**: Manages the list, starting with just a 'head' pointer, which is initially 'None'.
- **insert_at_head**: This is an O(1) operation. 
  1. A 'new_node' is created.
  2. The 'new_node's 'next' pointer is set to the current 'head' of the list.
  3. The list's 'head' is updated to be the 'new_node', making it the first element.
- **delete_head**: Also O(1). It simply moves the 'head' pointer to the next node in the list ('self.head.next'), effectively removing the old head.
- **traverse**: An O(n) operation. It starts a 'current' pointer at the 'head' and iterates through the list, printing each node's data until 'current' becomes 'None'.
`.trim()
    },
    doubly: {
      code: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    # Insertion at head (O(1))
    def insert_at_head(self, data):
        new_node = Node(data)
        new_node.next = self.head
        if self.head:
            self.head.prev = new_node
        self.head = new_node

    # Deletion of a given node (O(1) if node is known, O(n) to find it)
    def delete_node(self, node_to_delete):
        if not node_to_delete:
            return
        if node_to_delete.prev:
            node_to_delete.prev.next = node_to_delete.next
        else: # It's the head
            self.head = node_to_delete.next
        
        if node_to_delete.next:
            node_to_delete.next.prev = node_to_delete.prev

    # Traversal (O(n))
    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=" <-> ")
            current = current.next
        print("None")
`.trim(),
      explanation: `
- **Node Class**: Now includes a 'prev' pointer in addition to 'next' and 'data'.
- **insert_at_head**: Remains O(1). The logic is similar to a singly linked list, but with an extra step: if the list is not empty, the original head's 'prev' pointer must be updated to point to the 'new_node'.
- **delete_node**: This is O(1) if you have a direct reference to the node you want to delete. 
  1. It first checks if the node has a 'prev' element. If so, it makes that previous node's 'next' pointer skip over the node-to-delete.
  2. If there is no 'prev' element, it means we are deleting the head, so the head must be updated.
  3. It then performs the opposite check for the 'next' element, updating its 'prev' pointer to skip backward over the node-to-delete.
- **traverse**: Works the same as in a singly linked list, iterating forward from the 'head'.
`.trim()
    },
    circular: {
      code: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    # Insertion at head (O(n) without tail pointer, O(1) with)
    def insert_at_head(self, data):
        new_node = Node(data)
        if not self.head:
            new_node.next = new_node # Points to itself
            self.head = new_node
            return
        
        # Find tail to update its next pointer
        temp = self.head
        while temp.next != self.head:
            temp = temp.next
        
        temp.next = new_node
        new_node.next = self.head
        self.head = new_node

    # Traversal (O(n))
    def traverse(self):
        if not self.head:
            return
        temp = self.head
        while True:
            print(temp.data, end=" -> ")
            temp = temp.next
            if temp == self.head:
                break
        print(f"(Head: {self.head.data})")
`.trim(),
      explanation: `
- **insert_at_head**: The implementation shown is O(n) because it has to find the tail node to update its 'next' pointer. 
  1. If the list is empty, the new node's 'next' pointer points to itself.
  2. Otherwise, it iterates through the list until it finds the node whose 'next' pointer is the 'head' (the tail node).
  3. It then updates the tail's 'next' to the 'new_node', and the 'new_node's 'next' to the old 'head'. Finally, the 'head' is updated.
- **traverse**: Traversal requires a different loop condition. Instead of checking for 'None', we loop until we arrive back at the 'head'. A 'do-while' loop is a natural fit, but in Python, we use a 'while True' loop with a 'break' condition.
`.trim()
    },
  },
  cpp: {
    singly: {
      code: `
#include <iostream>

struct Node {
    int data;
    Node* next;
};

class LinkedList {
public:
    Node* head;
    LinkedList() { head = nullptr; }

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
      explanation: `
- **Node Struct**: A simple structure to hold an integer 'data' and a pointer 'next' to the next Node.
- **LinkedList Class**: The 'head' is a public member pointer, initialized to 'nullptr'.
- **insert_at_head**: An O(1) operation. It dynamically allocates a 'newNode', sets its 'data', points its 'next' to the current 'head', and then updates the 'head' to be the 'newNode'.
- **delete_head**: Also O(1). It saves the current 'head' in a temporary pointer, updates 'head' to the next node, and then uses 'delete' to free the memory of the old head to prevent memory leaks.
- **traverse**: An O(n) operation. A 'current' pointer starts at the 'head' and iterates through the list until it becomes 'nullptr'.
`.trim()
    },
    doubly: {
      code: `
#include <iostream>

struct Node {
    int data;
    Node* next;
    Node* prev;
};

class DoublyLinkedList {
public:
    Node* head;
    DoublyLinkedList() { head = nullptr; }

    // Insertion at head (O(1))
    void insert_at_head(int data) {
        Node* newNode = new Node();
        newNode->data = data;
        newNode->next = head;
        newNode->prev = nullptr;
        if (head != nullptr) {
            head->prev = newNode;
        }
        head = newNode;
    }

    // Deletion of a given node
    void deleteNode(Node* node_to_delete) {
        if (node_to_delete == nullptr) return;
        if (head == node_to_delete) {
            head = node_to_delete->next;
        }
        if (node_to_delete->next != nullptr) {
            node_to_delete->next->prev = node_to_delete->prev;
        }
        if (node_to_delete->prev != nullptr) {
            node_to_delete->prev->next = node_to_delete->next;
        }
        delete node_to_delete;
    }

    // Traversal (O(n))
    void traverse() {
        Node* current = head;
        while (current != nullptr) {
            std::cout << current->data << " <-> ";
            current = current->next;
        }
        std::cout << "NULL" << std::endl;
    }
};
`.trim(),
      explanation: `
- **Node Struct**: Now contains both 'next' and 'prev' pointers.
- **insert_at_head**: Still O(1). After setting the 'newNode's 'next' pointer, it also sets its 'prev' pointer to 'nullptr'. Crucially, if the list isn't empty, it updates the old 'head's 'prev' pointer to point to the 'newNode'.
- **deleteNode**: This is O(1) if you have a direct pointer to the node. It carefully handles four cases: updating the next node's 'prev' pointer, updating the previous node's 'next' pointer, and handling the edge case where the node to be deleted is the head. Finally, it frees the memory with 'delete'.
`.trim()
    },
    circular: {
      code: `
#include <iostream>

struct Node {
    int data;
    Node* next;
};

class CircularLinkedList {
public:
    Node* head;
    CircularLinkedList() { head = nullptr; }

    // Insertion at head (O(1) with tail pointer)
    void insertAtHead(int data) {
        Node* newNode = new Node();
        newNode->data = data;
        if (head == nullptr) {
            head = newNode;
            newNode->next = head;
            return;
        }
        Node* temp = head;
        while (temp->next != head) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
        head = newNode;
    }

    // Traversal (O(n))
    void traverse() {
        if (head == nullptr) return;
        Node* temp = head;
        do {
            std::cout << temp->data << " -> ";
            temp = temp->next;
        } while (temp != head);
        std::cout << "(Head: " << head->data << ")" << std::endl;
    }
};
`.trim(),
      explanation: `
- **insertAtHead**: The code shown is O(n) as it needs to find the tail. 
  1. For an empty list, the new node's 'next' points to itself.
  2. Otherwise, it traverses the list to find the last node ('temp').
  3. It then rewires the pointers: the old tail points to the new node, the new node points to the old head, and the list's 'head' pointer is updated.
- **traverse**: A 'do-while' loop is a perfect fit here. It executes the loop body once before checking the condition, ensuring that the head node is printed even if it's the only node. The loop continues until the traversal pointer gets back to the 'head'.
`.trim()
    },
  },
  java: {
    singly: {
      code: `
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
`.trim(),
      explanation: `
- **Node Class**: A standard nested or separate class to hold the data and a reference to the next 'Node'.
- **LinkedList Class**: Manages the list and holds a reference to the 'head' node.
- **insertAtHead**: A constant time O(1) operation. A 'newNode' is created, its 'next' reference is pointed to the current 'head', and the 'head' reference is updated to the 'newNode'.
- **deleteHead**: Also O(1). The 'head' reference is simply moved to the next node in the list. The old head is automatically marked for garbage collection by Java.
- **traverse**: An O(n) operation that uses a 'current' reference to iterate through the list from the 'head' until it reaches 'null'.
`.trim()
    },
    doubly: {
      code: `
class Node {
    int data;
    Node next;
    Node prev;

    Node(int data) {
        this.data = data;
    }
}

class DoublyLinkedList {
    Node head;

    // Insertion at head (O(1))
    public void insertAtHead(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        newNode.prev = null;
        if (head != null) {
            head.prev = newNode;
        }
        head = newNode;
    }

    // Deletion of a given node
    public void deleteNode(Node nodeToDelete) {
        if (head == null || nodeToDelete == null) {
            return;
        }
        if (head == nodeToDelete) {
            head = nodeToDelete.next;
        }
        if (nodeToDelete.next != null) {
            nodeToDelete.next.prev = nodeToDelete.prev;
        }
        if (nodeToDelete.prev != null) {
            nodeToDelete.prev.next = nodeToDelete.next;
        }
    }

    // Traversal (O(n))
    public void traverse() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " <-> ");
            current = current.next;
        }
        System.out.println("null");
    }
}
`.trim(),
      explanation: `
- **Node Class**: Contains references for both 'next' and 'prev' nodes.
- **insertAtHead**: Still O(1). It sets the 'newNode's 'next' and 'prev' pointers, and if the list is not empty, it updates the 'prev' reference of the original 'head'.
- **deleteNode**: An O(1) operation if the node reference is known. It correctly handles the 'head' case and re-links the 'next' and 'prev' nodes around the 'nodeToDelete'. The deleted node is then eligible for garbage collection.
`.trim()
    },
    circular: {
      code: `
class Node {
    int data;
    Node next;

    Node(int data) { this.data = data; }
}

class CircularLinkedList {
    Node head;

    // Insertion at head
    public void insertAtHead(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            newNode.next = head;
            return;
        }
        Node temp = head;
        while (temp.next != head) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = head;
        head = newNode;
    }

    // Traversal (O(n))
    public void traverse() {
        if (head == null) return;
        Node temp = head;
        do {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        } while (temp != head);
        System.out.println("(Head: " + head.data + ")");
    }
}
`.trim(),
      explanation: `
- **insertAtHead**: The provided code is O(n) because it needs to traverse to the end of the list to find the tail.
  1. A 'newNode' is created. If the list is empty, its 'next' reference points to itself.
  2. Otherwise, a 'temp' reference iterates until 'temp.next' is the 'head', meaning 'temp' is the tail.
  3. The pointers are rewired: the tail's 'next' points to the new node, the new node's 'next' points to the old head, and the list's 'head' is updated.
- **traverse**: A 'do-while' loop is used for traversal. This ensures the loop body runs at least once, which is necessary to print the single node in a one-element list. The loop terminates when the 'temp' reference has circled back to the 'head'.
`.trim()
    },
  }
};


const commonProblems = [
  {
    title: "Reverse a Linked List",
    description: "Reverse a singly linked list.",
    logic: "The standard iterative approach uses three pointers: 'previous', 'current', and 'next_node'. The goal is to walk through the list, and for each node we visit, we change its 'next' pointer to point to the 'previous' node instead. Because we're overwriting the 'next' pointer, we first need to save a reference to the original next node so we don't lose the rest of the list. After we reverse the pointer, we move all three pointers one step forward for the next iteration.",
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
        "`prev = None` - We initialize a 'prev' pointer to 'None' (or 'null'). This is crucial because the 'next' pointer of the original head node will eventually need to point to 'None', making it the new tail of the list.",
        "`curr = head` - The 'curr' pointer starts at the head of the list. This is the node we are currently processing.",
        "`while curr:` - The loop continues as long as 'curr' is not 'None', ensuring we process every node in the list.",
        "`next_temp = curr.next` - This is a critical step. Before we change 'curr.next', we must store its original value in 'next_temp'. If we didn't, we would lose the link to the rest of the list.",
        "`curr.next = prev` - This is the reversal step. We make the current node's 'next' pointer point backward to the 'prev' node.",
        "`prev = curr` - We move 'prev' one step forward. It now points to the node we just processed.",
        "`curr = next_temp` - We move 'curr' one step forward to the next node in the original list, which we saved in 'next_temp'.",
        "`return prev` - When the loop finishes ('curr' is 'None'), the 'prev' pointer will be at the last node of the original list, which is now the head of the reversed list."
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
    logic: "The most famous solution is Floyd's Tortoise and Hare algorithm. It uses two pointers that traverse the list at different speeds. The 'slow' pointer moves one step at a time, while the 'fast' pointer moves two steps at a time. If the list has a loop, the fast pointer will eventually enter the loop and start circling. The slow pointer will also eventually enter the loop. Since the fast pointer is moving faster, it is guaranteed to eventually 'lap' the slow pointer, and they will meet at the same node. If the fast pointer reaches the end of the list (NULL), it means there was no cycle.",
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
        "`slow = head`, `fast = head` - We initialize both pointers at the starting node of the list.",
        "`while fast and fast.next:` - This is the loop condition. We need to check both 'fast' and 'fast.next' because we will be accessing 'fast.next.next'. If either is null, the fast pointer has reached the end of the list, and there can't be a cycle.",
        "`slow = slow.next` - The slow pointer moves one step forward in each iteration.",
        "`fast = fast.next.next` - The fast pointer moves two steps forward in each iteration.",
        "`if slow == fast:` - Inside the loop, we check if the two pointers are now referencing the exact same node object. If they are, it means the fast pointer has lapped the slow one inside a cycle.",
        "`return True` - If the pointers meet, we have found a cycle and can immediately return true.",
        "`return False` - If the 'while' loop completes without the pointers ever meeting, it means the fast pointer reached a 'null', so we know there is no cycle."
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
                      In a circular linked list, the 'next' pointer of the last node points back to the head node instead of NULL, forming a circle.
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
                           Each element in a linked list is a 'node'. Think of a node as a small container. This container holds two things: the actual data you want to store (like a number or a string), and a pointer. The pointer is simply the memory address of the *next* node in the sequence. This chain of pointers is what forms the list, creating a connection between nodes that could be located anywhere in your computer's memory. It's like a scavenger hunt where each clue tells you where to find the next one.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Types of Linked Lists</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-foreground mb-1">Singly Linked List</h4>
                                <p>This is the most basic type. Each node has only one pointer, which points to the next node in the list. It's a one-way street; you can only traverse the list in the forward direction, from head to tail. It's memory-efficient because it only stores one pointer per node, but its inflexibility can make certain operations, like deleting the last element, less efficient if you don't have a tail pointer.</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-foreground mb-1">Doubly Linked List</h4>
                                <p>Each node in a doubly linked list has two pointers: one to the next node ('next') and one to the previous node ('prev'). This makes it a two-way street. You can traverse the list both forwards and backwards. This bi-directional capability simplifies many operations, such as deleting a node, because you don't need to keep a separate pointer to the previous node as you traverse. The trade-off is slightly more memory usage per node to store the extra pointer.</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-foreground mb-1">Circular Linked List</h4>
                                <p>In this variation, the 'next' pointer of the last node points back to the head node instead of being 'NULL' or 'None'. This forms a continuous loop or circle. This structure is useful for applications that require a continuous cycle, like a media player's playlist on repeat, or managing resources in a round-robin scheduling system. A circular linked list can be either singly or doubly linked.</p>
                            </div>
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Head and Tail</AccordionTrigger>
                          <AccordionContent>
                              The 'head' is a special pointer that always points to the very first node in the list. It's the entry point for any operation; without the head, you would lose the entire list. Similarly, a 'tail' pointer can be maintained to point to the very last node. While not strictly necessary, keeping a tail pointer is a huge performance optimization. It makes insertion at the end of the list an O(1) operation, which would otherwise require traversing the entire list (an O(n) operation) to find the end.
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
                      {Object.entries(codeSnippets).map(([lang, codes]) => (
                          <TabsContent value={lang} key={lang}>
                            <Accordion type="single" collapsible className="w-full" defaultValue='item-0'>
                                {Object.entries(codes).map(([type, data], index) => (
                                <AccordionItem value={`item-${index}`} key={type}>
                                    <AccordionTrigger className="text-base font-medium capitalize no-underline hover:no-underline">
                                       {type} Linked List
                                    </AccordionTrigger>
                                    <AccordionContent>
                                       <div className="relative bg-muted rounded-md p-4 font-code text-sm mt-4">
                                            <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-7 w-7" onClick={() => navigator.clipboard.writeText(data.code)}>
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                            <pre><code>{data.code}</code></pre>
                                        </div>
                                        <div className="mt-4 prose prose-sm dark:prose-invert max-w-none">
                                            <h4 className="font-semibold">Explanation:</h4>
                                            <pre className="bg-muted/50 p-4 rounded-md text-sm font-code whitespace-pre-wrap">{data.explanation}</pre>
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
                  <CardTitle className="flex items-center gap-3"><Workflow className="h-6 w-6 text-primary"/>Advanced Techniques & Patterns</CardTitle>
                  <CardDescription>Leverage linked lists to solve complex problems with these common and efficient patterns.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Two Pointers (Fast & Slow)</AccordionTrigger>
                          <AccordionContent>
                            This is arguably the most famous linked list pattern. By having two pointers move through the list at different speeds (e.g., one moves one step, the other moves two steps), you can solve a surprising number of problems in a single pass. It's the key to detecting cycles (if a fast pointer ever catches up to a slow one, there's a loop), finding the middle of a list (when the fast pointer reaches the end, the slow pointer is at the middle), and finding the Nth node from the end. It's a clever way to understand relative positions within the list without needing to know the list's length beforehand.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Dummy Head Node</AccordionTrigger>
                          <AccordionContent>
                           Edge cases, especially operations at the head of the list (like inserting a new first node or deleting the current head), often require special 'if' conditions. A 'dummy' or 'sentinel' node is a placeholder node that is placed before the actual head of the list. Your main pointer then operates on the dummy node. This simplifies your code significantly because every insertion or deletion is now a "middle" operation from the dummy's perspective. You no longer need separate logic to handle changes to the head, resulting in cleaner and less error-prone code. You just return 'dummy.next' at the end.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>In-Place Reversal</AccordionTrigger>
                          <AccordionContent>
                            This powerful pattern involves reversing the list without using any extra space for a new list. By carefully managing three pointers (often called 'previous', 'current', and 'next'), you can iterate through the list and flip the direction of each node's 'next' pointer as you go. The 'current' node's 'next' pointer is changed to point to the 'previous' node, and then all three pointers are moved one step forward. It's a classic interview problem that demonstrates a strong understanding of pointer manipulation.
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
