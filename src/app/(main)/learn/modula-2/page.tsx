
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
  Terminal,
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
  Binary,
  Settings,
  HardDrive,
  Box,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Structured Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Modula-2 & GM2 Setup",
        why: "Modula-2 is the successor to Pascal, designed for systems programming. Setting up the GNU Modula-2 (GM2) compiler is the first step.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "GNU Modula-2 Homepage", url: "https://www.nongnu.org/gm2/" },
          { name: "Modula-2 Introduction (Infoworld)", url: "https://www.modula2.org/intro/" },
        ],
        practice: "Install GM2 on Linux or WSL. Create a simple 'Main' module and print 'Hello, Modula-2!'.",
      },
      {
        what: "Module Structure: Definition vs Implementation",
        why: "The 'Module' is the namesake of the language. Understanding the separation between interface (.def) and logic (.mod) is fundamental.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Modula-2 Modules Guide", url: "https://www.modula2.org/tutor/chapter3.php" },
        ],
        practice: "Create a 'MathUtils' definition module and a corresponding implementation module.",
      },
      {
        what: "Variables, Constants & Basic Types",
        why: "Modula-2 is strictly typed. You must learn INTEGER, CARDINAL, REAL, BOOLEAN, and CHAR.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Modula-2 Basic Types", url: "https://www.modula2.org/tutor/chapter4.php" },
        ],
        practice: "Write a program that calculates the volume of a cylinder using defined constants.",
      },
      {
        what: "Control Flow: IF, CASE & LOOP",
        why: "To handle logic branching. Modula-2 requires explicit 'END' for all control structures, reducing ambiguity.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Logic & Control Structures", url: "https://www.modula2.org/tutor/chapter5.php" },
        ],
        practice: "Write a program that uses a CASE statement to categorize a character as a vowel, consonant, or digit.",
      },
      {
        what: "Procedures & Parameter Passing",
        why: "To modularize code within a module. Understand the difference between value parameters and VAR parameters (references).",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Procedures in Modula-2", url: "https://www.modula2.org/tutor/chapter7.php" },
        ],
        practice: "Create a procedure that swaps two integers using VAR parameters.",
      },
      {
        what: "Arrays & Strings",
        why: "To manage collections of data. Strings in Modula-2 are arrays of characters, requiring careful index handling.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Arrays and Subscripts", url: "https://www.modula2.org/tutor/chapter8.php" },
        ],
        practice: "Write a program to find the largest number in an array of 20 CARDINAL values.",
      },
      {
        what: "Enumerations & Subranges",
        why: "Subranges allow the compiler to catch logic errors (like a day of the month being 32) at compile-time.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Custom Types & Ranges", url: "https://www.modula2.org/tutor/chapter10.php" },
        ],
        practice: "Define a subrange for 'WorkingDays' and an enum for 'Months'. Check for range violations.",
      },
      {
        what: "Standard Library: InOut & RealInOut",
        why: "Modula-2 does not have built-in I/O. You must import standard modules to interact with the console.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Standard I/O Modules", url: "https://www.modula2.org/tutor/chapter6.php" },
        ],
        practice: "Read multiple inputs from the user and format them into a table using InOut.",
      },
      {
        what: "Recursive Procedures",
        why: "To solve problems like directory traversal or mathematical sequences using self-referencing logic.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Recursion in Structured Languages", url: "https://www.modula2.org/tutor/chapter7.php" },
        ],
        practice: "Implement the Factorial and Fibonacci sequences using recursive procedures.",
      },
      {
        what: "Sets in Modula-2",
        why: "Sets are a native, highly efficient bit-mapped data structure unique to the Wirth-style languages.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Modula-2 Sets", url: "https://www.modula2.org/tutor/chapter11.php" },
        ],
        practice: "Use a SET to track which flags are active in a simulated machine state.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Modules & Memory",
    level: "Intermediate",
    steps: [
      {
        what: "Records & Variant Records",
        why: "To create complex data structures. Variant records allow for safe, structured 'unions' of different data types.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Records Guide", url: "https://www.modula2.org/tutor/chapter9.php" },
        ],
        practice: "Model a 'Student' record that can store either a grade percentage or a letter grade using a variant.",
      },
      {
        what: "Pointers & Dynamic Memory",
        why: "To build linked structures. Unlike higher-level languages, memory management here is manual and precise.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Pointers and Dynamic Allocation", url: "https://www.modula2.org/tutor/chapter12.php" },
        ],
        practice: "Implement a Singly Linked List with 'New' and 'Dispose' operations.",
      },
      {
        what: "Opaque Export & Data Abstraction",
        why: "This is the 'Secret' of Modula-2. Hide the implementation details of a type from other modules for safety.",
        time: "1 Week",
        prereqs: "Step 2, Step 12",
        resources: [
          { name: "Data Hiding in Modula-2", url: "https://www.modula2.org/tutor/chapter13.php" },
        ],
        practice: "Build a 'Stack' module where the underlying array/list is opaque to the user.",
      },
      {
        what: "Low-Level Programming: SYSTEM Module",
        why: "To bypass type-checking for hardware access. Learn about ADDRESS, WORD, ADR, and SIZE.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Low Level Features", url: "https://www.modula2.org/tutor/chapter14.php" },
        ],
        practice: "Write a procedure that inspects the raw byte content of any variable using ADDRESS pointers.",
      },
      {
        what: "Coroutines & Concurrent Tasks",
        why: "Modula-2 was one of the first languages to include native support for lightweight concurrency.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Processes and Coroutines", url: "https://www.modula2.org/tutor/chapter15.php" },
        ],
        practice: "Create two coroutines that yield control to each other in a round-robin fashion.",
      },
      {
        what: "The Storage Module",
        why: "To customize memory allocation. This is essential for embedded systems or performance-critical apps.",
        time: "5 Days",
        prereqs: "Step 12",
        resources: [
          { name: "Memory Management Modules", url: "https://www.modula2.org/tutor/chapter12.php" },
        ],
        practice: "Write a custom ALLOCATE procedure that tracks the total memory used.",
      },
      {
        what: "Interfacing with C code",
        why: "Most legacy systems require calling C libraries. Learn how GM2 handles C linkages.",
        time: "1 Week",
        prereqs: "Step 1, Step 14",
        resources: [
          { name: "GM2 C Interoperability", url: "https://www.nongnu.org/gm2/interfacing_to_c.html" },
        ],
        practice: "Call the C 'printf' or 'malloc' function from a Modula-2 module.",
      },
      {
        what: "Exception Handling (ISO Modula-2)",
        why: "ISO standard added formal exceptions. Learn TRY, EXCEPT, and RAISE patterns.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "ISO Modula-2 Extensions", url: "http://www.modula2.org/iso/isostandard.php" },
        ],
        practice: "Implement a math module that raises an exception on division by zero.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Architecture",
    level: "Advanced",
    steps: [
      {
        what: "Device Drivers & Interrupts",
        why: "To interact with physical hardware. Learn how to map modules to specific hardware addresses.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Embedded Systems with Modula-2", url: "https://www.embedded.com/programming-languages-modula-2/" },
        ],
        practice: "Write a simulated driver for a UART serial port using memory-mapped I/O.",
      },
      {
        what: "Building a Runtime System",
        why: "To understand how the language manages coroutines and memory without an OS.",
        time: "2 Weeks",
        prereqs: "Step 15, Step 16",
        resources: [
          { name: "Modula-2 Internal Architecture", url: "https://www.modula2.org/reference/" },
        ],
        practice: "Build a tiny scheduler that manages 3 tasks with priority levels.",
      },
      {
        what: "Advanced Data Abstraction: ADTs",
        why: "To build enterprise-grade libraries using generic pointers and opaque types.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Abstract Data Types in Modula-2", url: "https://www.modula2.org/tutor/chapter13.php" },
        ],
        practice: "Implement a generic Binary Search Tree using ADDRESS and opaque types.",
      },
      {
        what: "Object-Oriented Modula-2 (Oakwood)",
        why: "Learn how the language evolved to support classes and objects in later dialects like Modula-3 and Oberon.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "From Modula-2 to Oberon", url: "https://profs.info.uaic.ro/~pmihaela/ASM/Wirth-Oberon.pdf" },
        ],
        practice: "Research the 'Record Extension' pattern used to simulate inheritance.",
      },
      {
        what: "Compiler Construction with Modula-2",
        why: "Modula-2 was designed to be easily compilable. Building a parser for it is a classic CS exercise.",
        time: "2 Weeks",
        prereqs: "All previous steps",
        resources: [
          { name: "Compiler Design (Wirth)", url: "https://people.inf.ethz.ch/wirth/CompilerConstruction/index.html" },
        ],
        practice: "Write a lexer for a subset of Modula-2 syntax.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all modular and system-level skills into a professional-grade tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Minimal Operating System Kernel' or a 'Static Website Generator' using purely Modula-2.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Calculator CLI", teaches: "Input/Output, Math, and CASE logic.", tech: "Modula-2, InOut" },
  { level: "Beginner", title: "Prime Number Finder", teaches: "Loops, Arrays, and Procedures.", tech: "Modula-2" },
  { level: "Beginner", title: "String Reverser", teaches: "Array manipulation and indexing.", tech: "Modula-2" },
  { level: "Intermediate", title: "Generic Stack ADT", teaches: "Opaque types and pointers.", tech: "Modula-2, SYSTEM" },
  { level: "Intermediate", title: "Linked List Database", teaches: "Dynamic memory and Records.", tech: "Modula-2, Storage" },
  { level: "Intermediate", title: "Multi-tasking Demo", teaches: "Coroutines and YIELD patterns.", tech: "Modula-2, Processes" },
  { level: "Intermediate", title: "Binary-to-Hex Converter", teaches: "Bitwise logic and low-level typing.", tech: "Modula-2, SYSTEM" },
  { level: "Advanced", title: "Simple Task Scheduler", teaches: "Interrupt handling and context switching.", tech: "Modula-2, Low-level" },
  { level: "Advanced", title: "C-Library Wrapper (SDL)", teaches: "FFI and external linking.", tech: "Modula-2, GM2, C" },
  { level: "Advanced", title: "Minimal Bootloader", teaches: "Bare-metal architecture, Inodes.", tech: "Modula-2, Assembly" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on syntax, structured programming, and modular design.",
    schedule: [
      "Days 1-7: Setup, Basic Types, and I/O.",
      "Days 8-15: Procedures, Parameters, and Control Flow.",
      "Days 16-23: Definition/Implementation Modules and Arrays.",
      "Days 24-30: Build 2 Beginner projects and learn basic Git.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Systems Dev",
    description: "Balanced path covering memory, pointers, and data abstraction.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Pointers, Dynamic Memory, and Records.",
      "Days 41-60: Opaque types, SYSTEM module, and 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Low-Level Pro",
    description: "Comprehensive path for OS-level development and concurrency.",
    schedule: [
      "Days 1-30: Core Development & FP logic.",
      "Days 31-60: Professional Systems (Coroutines, C-interop, Testing).",
      "Days 61-90: Hardware drivers, Compiler basics, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Definition Module vs. Implementation Module.",
  "Difference between VAR and Value parameters.",
  "What is an Opaque Type and why is it used?",
  "How does Modula-2 handle concurrency compared to Threads?",
  "The role of the SYSTEM module.",
  "Explain the difference between CARDINAL and INTEGER.",
  "How to prevent memory leaks in a language without GC?",
  "The significance of the 'EXPORT' list in Modula-2 (legacy vs modern).",
  "Coroutines: What is IOTRANSFER?",
  "Why is Modula-2 considered 'safe' for systems programming?",
];

const codingQuestions = [
  { question: "Swap two memory addresses using pointers.", topic: "Pointers" },
  { question: "Write a recursive procedure to calculate N!.", topic: "Recursion" },
  { question: "Implement a circular buffer using a fixed array.", topic: "Arrays" },
  { question: "Create an opaque Stack type.", topic: "Abstraction" },
];

const mcqs = [
  { question: "Which file extension is used for a definition module?", options: [".mod", ".def", ".ads", ".h"], answer: ".def" },
  { question: "Which module contains low-level hardware primitives?", options: ["InOut", "Storage", "SYSTEM", "MathLib"], answer: "SYSTEM" },
  { question: "What is the primary difference between card and int?", options: ["Size", "Signs (Cardinal is unsigned)", "Speed", "Memory location"], answer: "Signs (Cardinal is unsigned)" },
];

const mistakes = [
  "Forgetting the semicolon at the end of every statement.",
  "Case sensitivity: 'MODULE' is not the same as 'module'.",
  "Using VAR parameters when a read-only value would suffice.",
  "Forgetting to 'Dispose' pointers, leading to memory leaks.",
  "Mismatching .def and .mod exports.",
  "Ignoring range checking: Modula-2 is built to catch these, so use subranges!",
  "Thinking Strings are first-class: They are arrays of CHAR.",
  "Circular dependencies between modules.",
  "Hardcoding buffer sizes: Use SIZE and ADR for portability.",
  "Not using 'qualified' imports where naming conflicts occur.",
];

export default function Modula2RoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Layers className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Modula-2 Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the architecture of structured, modular systems. From Wirth's foundations to low-level hardware control and concurrent programming.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Systems Programming Languages">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Languages
          </Link>
        </Button>

        {stages.map((stage) => (
          <Card key={stage.title} className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3 text-primary">
                <Brain className="h-8 w-8" />
                {stage.title}
              </CardTitle>
              <CardDescription>Master the pillars of the {stage.level} level.</CardDescription>
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
            <CardDescription>Build these 10 projects to showcase your expertise in modular systems.</CardDescription>
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
            <CardDescription>Pick a timeline that matches your goals.</CardDescription>
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
            <CardDescription>Master the topics required for professional systems engineering roles.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Coding Challenges</h3>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Modula-2', 'Modular Programming', 'ADTs', 'Opaque Types', 'Coroutines', 'SYSTEM Module', 'GM2', 'Structured Programming', 'Systems Engineering', 'Device Drivers', 'Pointers'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight your understanding of software architecture and data hiding.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase modular projects with clean .def/.mod separation on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize experience with safety-critical or low-level logic.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build Robust Systems with Precision</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Modula-2 is the masterclass of structured design. It teaches you how to think in components and manage resources with surgical accuracy. Stay consistent, read the classic papers, and remember: The most reliable systems in computing were born from the principles you're mastering now. Your journey starts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Modular Projects
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
