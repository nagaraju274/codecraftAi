
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const stages = [
    {
        title: "Beginner Stage: C Foundations",
        level: "Beginner",
        steps: [
            {
                what: "Introduction to C and Your First Program",
                why: "To understand the history and significance of C, set up a development environment, and learn the basic structure of a C program.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "C Introduction (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/c-programming-language/" },
                    { name: "C Full Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=KJgsSAhyaso" },
                ],
                practice: "Install a C compiler (like GCC) and a code editor (like VS Code). Write, compile, and run a 'Hello, World!' program.",
            },
            {
                what: "Variables, Data Types, and Operators",
                why: "These are the fundamental building blocks for storing and manipulating data in any program.",
                time: "1 Week",
                prereqs: "Introduction",
                resources: [
                    { name: "C Data Types (W3Schools)", url: "https://www.w3schools.com/c/c_data_types.php" },
                    { name: "C Operators (TutorialsPoint)", url: "https://www.tutorialspoint.com/cprogramming/c_operators.htm" },
                ],
                practice: "Write a program that declares variables of different types (int, float, char), performs some basic arithmetic, and prints the results.",
            },
            {
                what: "Control Flow (If/Else, Switch)",
                why: "To make decisions in your code and execute different blocks based on conditions.",
                time: "1 Week",
                prereqs: "Variables & Data Types",
                resources: [
                    { name: "C if...else Statement (W3Schools)", url: "https://www.w3schools.com/c/c_if_else.php" },
                    { name: "C switch Statement", url: "https://www.w3schools.com/c/c_switch.php" },
                ],
                practice: "Write a simple calculator that takes two numbers and an operator (+, -, *, /) as input and prints the result using a switch statement.",
            },
            {
                what: "Loops (For, While, Do-While)",
                why: "To automate repetitive tasks and iterate over collections of data.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "C Loops (W3Schools)", url: "https://www.w3schools.com/c/c_for_loop.php" },
                ],
                practice: "Write a program using a `for` loop to print the multiplication table for a given number.",
            },
            {
                what: "Functions",
                why: "To break down your code into smaller, reusable, and more manageable pieces.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "C Functions (W3Schools)", url: "https://www.w3schools.com/c/c_functions.php" },
                ],
                practice: "Write a function that calculates the factorial of a number.",
            },
            {
                what: "Arrays and Strings",
                why: "To store and manage collections of elements. In C, strings are just arrays of characters.",
                time: "1 Week",
                prereqs: "Data Types, Loops",
                resources: [
                    { name: "C Arrays (W3Schools)", url: "https://www.w3schools.com/c/c_arrays.php" },
                    { name: "C Strings (W3Schools)", url: "https://www.w3schools.com/c/c_strings.php" },
                ],
                practice: "Write a program that takes a string as input and counts the number of vowels in it.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Memory and Data Structures",
        level: "Intermediate",
        steps: [
            {
                what: "Pointers",
                why: "Pointers are C's most powerful and challenging feature. Mastering them is essential for low-level memory manipulation, dynamic memory allocation, and building complex data structures.",
                time: "2 Weeks",
                prereqs: "Beginner Stage",
                resources: [
                    { name: "C Pointers (W3Schools)", url: "https://www.w3schools.com/c/c_pointers.php" },
                    { name: "Pointers in C Programming (freeCodeCamp)", url: "https://www.freecodecamp.org/news/pointers-in-c-programming/" },
                ],
                practice: "Write a function that swaps the values of two integer variables using pointers.",
            },
            {
                what: "Pointers and Arrays",
                why: "To understand the deep connection between pointers and arrays in C, which is key to efficient array manipulation.",
                time: "1 Week",
                prereqs: "Pointers",
                resources: [
                    { name: "C Pointers and Arrays (TutorialsPoint)", url: "https://www.tutorialspoint.com/cprogramming/c_pointers_and_arrays.htm" },
                ],
                practice: "Write a function that takes an integer array and its size as input and returns the sum of its elements using pointer arithmetic instead of array indexing.",
            },
            {
                what: "Structures (structs)",
                why: "To create complex, custom data types by grouping different data types together.",
                time: "1 Week",
                prereqs: "Data Types",
                resources: [
                    { name: "C Structs (W3Schools)", url: "https://www.w3schools.com/c/c_structs.php" },
                ],
                practice: "Create a `struct` to represent a `Student` with fields for `name` (char array), `id` (int), and `gpa` (float).",
            },
            {
                what: "Dynamic Memory Allocation",
                why: "To allocate memory on the heap at runtime, allowing you to create data structures whose size is not known at compile time.",
                time: "1 Week",
                prereqs: "Pointers",
                resources: [
                    { name: "Dynamic Memory Allocation in C (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/" },
                ],
                practice: "Write a program that asks the user for a number `n`, dynamically allocates an array of `n` integers using `malloc`, fills it with values, and then frees the memory.",
            },
            {
                what: "File I/O",
                why: "To read data from and write data to files, allowing your application to persist information.",
                time: "1 Week",
                prereqs: "Pointers, Structs",
                resources: [
                    { name: "File Handling in C (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/file-handling-in-c/" },
                ],
                practice: "Write a program that writes a `Student` struct to a binary file and then reads it back.",
            },
            {
                what: "Linked Lists",
                why: "To understand your first dynamic data structure and the fundamentals of connecting nodes with pointers.",
                time: "1-2 Weeks",
                prereqs: "Structs, Dynamic Memory Allocation",
                resources: [
                    { name: "Linked List in C (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/linked-list-set-1-introduction/" },
                ],
                practice: "Implement a simple singly linked list from scratch with functions to insert a node at the head and print the list.",
            },
        ],
    },
    {
        title: "Advanced Stage: Systems and Best Practices",
        level: "Advanced",
        steps: [
            {
                what: "The C Preprocessor",
                why: "To use macros, conditional compilation, and include header files effectively.",
                time: "1 Week",
                prereqs: "Intermediate Stage",
                resources: [
                    { name: "The C Preprocessor (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/the-c-preprocessor/" },
                ],
                practice: "Create a macro to find the maximum of two numbers. Use conditional compilation (`#ifdef DEBUG`) to include debug print statements.",
            },
            {
                what: "Function Pointers",
                why: "To pass functions as arguments to other functions, enabling flexible and dynamic behavior like callbacks.",
                time: "1 Week",
                prereqs: "Pointers, Functions",
                resources: [
                    { name: "Function Pointer in C (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/function-pointer-in-c/" },
                ],
                practice: "Write a generic `sort` function that takes an array and a function pointer to a comparison function as arguments.",
            },
            {
                what: "Makefiles",
                why: "To automate the build process for larger projects with multiple source files, managing dependencies and compilation steps.",
                time: "1 Week",
                prereqs: "Command Line Basics",
                resources: [
                    { name: "Makefile Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=gMyDF3GN32Q" },
                ],
                practice: "Create a simple project with two `.c` files and a header file. Write a `Makefile` to compile and link them into a single executable.",
            },
            {
                what: "Debugging with GDB",
                why: "To effectively find and fix bugs in your code by setting breakpoints, inspecting variables, and stepping through execution.",
                time: "1 Week",
                prereqs: "Command Line Basics",
                resources: [
                    { name: "GDB Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=Dq8l1v84jVk" },
                ],
                practice: "Compile a C program with the `-g` flag. Use GDB to step through it, print the value of a variable, and set a breakpoint.",
            },
            {
                what: "Data Structures (Stacks, Queues, Trees)",
                why: "To build a strong foundation for solving complex algorithmic problems.",
                time: "2-3 Weeks",
                prereqs: "Linked Lists",
                resources: [
                    { name: "Data Structures in C (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/data-structures/" },
                ],
                practice: "Implement a stack using a linked list. Then, implement a simple binary search tree with an insert function.",
            },
            {
                what: "Introduction to Concurrency",
                why: "To understand the basics of multithreading and how to write programs that can perform multiple tasks simultaneously.",
                time: "1-2 Weeks",
                prereqs: "Pointers",
                resources: [
                    { name: "Multithreading in C", url: "https://www.geeksforgeeks.org/multithreading-in-c/" },
                ],
                practice: "Write a simple program that creates a new thread to perform a calculation and prints the result.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Console-Based Command-Line Arguments Parser", teaches: "String manipulation, arrays of strings (`argv`), and converting strings to numbers.", tech: "C" },
    { level: "Beginner", title: "Simple Text File Editor", teaches: "File I/O, string handling, and basic user input loops.", tech: "C, stdio.h" },
    { level: "Beginner", title: "Caesar Cipher Encryption/Decryption Tool", teaches: "Character manipulation, arithmetic operations, and functions.", tech: "C" },
    { level: "Intermediate", title: "Dynamic Array Implementation", teaches: "Pointers, dynamic memory allocation (`malloc`, `realloc`), and structs.", tech: "C" },
    { level: "Intermediate", title: "Linked List-Based To-Do List", teaches: "Structs, pointers, dynamic memory allocation, and data structure manipulation.", tech: "C" },
    { level: "Intermediate", title: "Word Count Utility (like wc)", teaches: "File I/O, state machines, and command-line parsing.", tech: "C" },
    { level: "Intermediate", title: "Implementation of a Hash Table", teaches: "Pointers, arrays, hashing functions, and collision resolution.", tech: "C" },
    { level: "Advanced", title: "A Simple Shell/Terminal", teaches: "Process management (`fork`, `exec`), parsing user input, and signal handling.", tech: "C, unistd.h, sys/wait.h" },
    { level: "Advanced", title: "A Small Malloc/Free Implementation", teaches: "Deep understanding of memory management, pointers, and data structures to manage memory blocks.", tech: "C" },
    { level: "Advanced", title: "Multi-threaded Web Server", teaches: "Socket programming, concurrency (pthreads), and HTTP protocol basics.", tech: "C, pthreads, netinet/in.h" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to master the core fundamentals of C.",
        schedule: [
            "Days 1-10: Complete the entire Beginner Stage.",
            "Days 11-20: Focus on Pointers and Structs from the Intermediate Stage.",
            "Days 21-30: Learn dynamic memory allocation and build the 'Linked List-Based To-Do List' project.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation and an introduction to systems programming.",
        schedule: [
            "Days 1-20: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 21-35: Learn Makefiles, the C Preprocessor, and how to debug with GDB.",
            "Days 36-50: Build an intermediate project like the 'Dynamic Array Implementation' or 'Hash Table'.",
            "Days 51-60: Learn about function pointers and implement the generic sort function project.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and readiness for systems-level programming.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages with a deep focus on pointers and memory management.",
            "Days 31-60: Complete the entire Advanced Stage, building projects along the way.",
            "Days 61-75: Build an advanced project, such as the 'Simple Shell/Terminal'.",
            "Days 76-90: Focus on performance tuning, reading standard C library source code, and preparing for technical interviews.",
        ]
    }
];

const interviewTopics = [
    "Explain the difference between the stack and the heap.",
    "What is a pointer? What is a null pointer?",
    "Explain the difference between `malloc` and `calloc`.",
    "What is a memory leak and how can you avoid it?",
    "What does the `volatile` keyword do?",
    "Explain the difference between a `struct` and a `union`.",
    "What is the purpose of the `static` keyword for variables and functions?",
    "Describe the C compilation process (preprocessing, compilation, assembly, linking).",
    "What is the difference between an array and a pointer?",
    "What is a segmentation fault?",
];

const codingQuestions = [
    { question: "Reverse a string in-place in C.", topic: "Pointers/Arrays" },
    { question: "Implement `strcpy` (string copy) from scratch.", topic: "Pointers/Arrays" },
    { question: "Detect a cycle in a linked list.", topic: "Data Structures/Pointers" },
];

const mcqs = [
    { question: "Which of these is used for dynamic memory allocation in C?", options: ["new", "alloc", "malloc", "create"], answer: "malloc" },
    { question: "What is the size of a `char` data type in C?", options: ["1 byte", "2 bytes", "4 bytes", "Depends on the system"], answer: "1 byte" },
    { question: "Which symbol is used to get the memory address of a variable?", options: ["*", "&", "%", "#"], answer: "&" },
];

const mistakes = [
    "Forgetting to free memory allocated with `malloc`/`calloc`, leading to memory leaks.",
    "Dereferencing a null or uninitialized pointer, causing segmentation faults.",
    "Buffer overflows: writing past the allocated bounds of an array.",
    "Using `==` to compare strings instead of `strcmp()`.",
    "Forgetting the null terminator (`\\0`) when working with strings.",
    "Passing large structs by value instead of by pointer, leading to poor performance.",
    "Confusing pointer arithmetic with integer arithmetic.",
    "Ignoring compiler warnings, which often point to serious potential bugs.",
    "Creating dangling pointers by freeing memory and then trying to use the pointer again.",
    "Not checking the return value of `malloc` for `NULL`, which indicates allocation failure."
];

export default function CRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The C Programming Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering C, the foundational language for systems programming, embedded systems, and high-performance computing.
          </p>
        </header>

        {stages.map((stage) => (
          <Card key={stage.title}>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                {stage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold">
                      Step {index + 1}: {step.what}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <p><strong>Why it’s important:</strong> {step.why}</p>
                        <p><strong>Time to complete:</strong> {step.time}</p>
                        <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                        <h4 className="font-semibold">Free Resources:</h4>
                        <ul>
                          {step.resources.map(res => (
                            <li key={res.url}><a href={res.url} target="_blank" rel="noopener noreferrer">{res.name}</a></li>
                          ))}
                        </ul>
                         <h4 className="font-semibold">Practice Tasks:</h4>
                        <p>{step.practice}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
         <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
                <CardDescription>Apply your knowledge with these hands-on projects, from beginner to advanced.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(p => (
                     <Card key={p.title}>
                        <CardHeader>
                            <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                            <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4"><strong>What it teaches:</strong> {p.teaches}</p>
                            <p className="text-sm"><strong>Tech:</strong> {p.tech}</p>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
                <CardDescription>Choose a plan that fits your schedule and goals.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    {plans.map((plan, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-semibold">{plan.title}</AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <p className="text-muted-foreground mb-4">{plan.description}</p>
                             <ul className="list-disc pl-5 space-y-2">
                                {plan.schedule.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
                <CardDescription>Key topics, questions, and resume tips to land a C programming job.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Important Interview Topics</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {interviewTopics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Coding Questions</h3>
                     {codingQuestions.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">[{q.topic}] {q.question}</p>
                        </div>
                    ))}
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Multiple Choice Questions (MCQs)</h3>
                     {mcqs.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">{q.question}</p>
                            <p className="text-sm text-muted-foreground">Correct Answer: {q.answer}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Resume Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {['C', 'Pointers', 'Memory Management', 'Data Structures', 'Algorithms', 'Systems Programming', 'Embedded Systems', 'Linux', 'GDB', 'Make'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, compilation instructions (including any flags), and usage examples.</li>
                        <li>Include a `Makefile` for easy compilation.</li>
                        <li>Ensure your code is clean, well-commented, and follows standard C conventions.</li>
                        <li>Explain your memory management strategy and why you chose it.</li>
                        <li>If possible, include test cases to demonstrate correctness.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Lightbulb className="h-8 w-8 text-primary"/>10 Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    {mistakes.map(mistake => <li key={mistake}>{mistake}</li>)}
                </ol>
            </CardContent>
        </Card>

        <div className="text-center pt-8">
            <h2 className="text-2xl font-bold">Your Journey Starts Now</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Learning C is a challenging but incredibly rewarding endeavor that will deepen your understanding of how computers work. This roadmap is your guide. Be patient with pointers, practice memory management diligently, and celebrate small victories. Happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}

