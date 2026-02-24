
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
    title: "Beginner Stage: Foundational Structure",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Oberon & VOC Setup",
        why: "To understand the philosophy of extreme simplicity and set up the Vishap Oberon Compiler (VOC) or Oxford Oberon-2.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Project Oberon Official Site", url: "http://www.projectoberon.com/" },
          { name: "Oberon-2 Programming (TutorialsPoint)", url: "https://www.tutorialspoint.com/oberon/index.htm" },
        ],
        practice: "Install VOC. Create a 'Hello' module and print 'Hello, Oberon World!' to the terminal.",
      },
      {
        what: "Basic Syntax: Variables & Constants",
        why: "Oberon is strictly typed and case-sensitive. Mastering basic types like INTEGER, REAL, and BOOLEAN is required.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Oberon Basic Types", url: "https://en.wikibooks.org/wiki/Oberon/Basic_Types" },
        ],
        practice: "Declare variables for a circle's properties and calculate its circumference using a constant for Pi.",
      },
      {
        what: "Control Flow: IF, WHILE & REPEAT",
        why: "To implement logic. Oberon uses minimalist control structures that require an explicit 'END' for every block.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Structures in Wirth Languages", url: "https://www.inf.ethz.ch/personal/wirth/Oberon/Oberon07.Report.pdf" },
        ],
        practice: "Write a program that uses a WHILE loop to find the greatest common divisor (GCD) of two numbers.",
      },
      {
        what: "Procedures & Parameter Passing",
        why: "Procedures are the only way to modularize logic in Oberon. Learn the difference between value and VAR parameters.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Procedures and Scope", url: "https://en.wikibooks.org/wiki/Oberon/Procedures" },
        ],
        practice: "Create a procedure that swaps two variables using VAR parameters.",
      },
      {
        what: "Arrays & Character Strings",
        why: "To handle collections. In Oberon, strings are simply null-terminated arrays of characters.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Arrays in Oberon", url: "https://www.tutorialspoint.com/oberon/oberon_arrays.htm" },
        ],
        practice: "Write a program to reverse a string stored in an array without using external libraries.",
      },
      {
        what: "Records: Structured Data",
        why: "Records are used to group related data. They are the base for Oberon's unique approach to OOP.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Oberon Records", url: "https://en.wikibooks.org/wiki/Oberon/Records" },
        ],
        practice: "Define a 'Point' record with X and Y coordinates and a 'Color' record.",
      },
      {
        what: "Modules & Exporting (The '*' Mark)",
        why: "Oberon uses a simple export marking system. Only variables and procedures marked with '*' are visible to other modules.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "The Module System", url: "https://en.wikibooks.org/wiki/Oberon/Modules" },
        ],
        practice: "Create a 'MathUtils' module that exports a 'Square' function but keeps helper functions private.",
      },
      {
        what: "Standard I/O: Out & In Modules",
        why: "To interact with the system. Oberon provides minimalist standard modules for text and number I/O.",
        time: "2 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Oberon Standard Libraries", url: "https://github.com/v-project/voc/wiki" },
        ],
        practice: "Build a program that reads a list of numbers from the user and outputs the average using the Out module.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Type Extension & Memory",
    level: "Intermediate",
    steps: [
      {
        what: "Pointers & Dynamic Allocation (NEW)",
        why: "To build dynamic structures. Oberon uses 'Pointers' combined with a garbage-collected heap for safety.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Pointers and Memory", url: "https://en.wikibooks.org/wiki/Oberon/Pointers" },
        ],
        practice: "Implement a simple Singly Linked List using pointers and records.",
      },
      {
        what: "Type Extension (Oberon's OOP)",
        why: "This is the core of Oberon. Instead of complex classes, Oberon uses 'Type Extension' to build hierarchies.",
        time: "1 Week",
        prereqs: "Step 6, Step 9",
        resources: [
          { name: "Type Extension Explained", url: "https://www.modula2.org/oberon/typeextension.php" },
        ],
        practice: "Extend a base 'Shape' record into 'Circle' and 'Rectangle' types.",
      },
      {
        what: "Type Testing & Guarding (IS & WITH)",
        why: "To handle polymorphism safely. 'IS' checks a type at runtime, and 'WITH' provides a safe cast.",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Type Safety in Oberon", url: "https://en.wikibooks.org/wiki/Oberon/Type_Tests" },
        ],
        practice: "Write a procedure that takes a base 'Shape' and uses 'IS' to determine the specific subtype.",
      },
      {
        what: "Procedure Types & Variables",
        why: "To implement callbacks and functional programming patterns by treating procedures as data.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Procedure Types in Oberon-2", url: "https://en.wikibooks.org/wiki/Oberon/Procedure_Types" },
        ],
        practice: "Implement a generic 'Sort' procedure that takes a comparison procedure as an argument.",
      },
      {
        what: "Files & Streams I/O",
        why: "To persist data. Learn how the Files module manages durable data on disk.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "The Files Module", url: "https://github.com/v-project/voc/blob/master/src/lib/Files.def" },
        ],
        practice: "Write a module that saves a list of student records to a binary file and reads them back.",
      },
      {
        what: "The Oberon System Concept",
        why: "To understand the tightly integrated environment where the OS and compiler are one and the same.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "The Oberon System (PDF)", url: "https://www.inf.ethz.ch/personal/wirth/Oberon/Oberon.System.pdf" },
        ],
        practice: "Research the concept of 'Commands' and how they differ from standard executables.",
      },
      {
        what: "Error Handling Logic",
        why: "Oberon doesn't have try/catch. You must learn to use error status flags and 'HALT' for critical failures.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Error Handling Patterns", url: "https://en.wikipedia.org/wiki/Oberon_(programming_language)#Features" },
        ],
        practice: "Modify your File module to return status codes for 'File Not Found' or 'Disk Full'.",
      },
      {
        what: "Garbage Collection Awareness",
        why: "Even though it's automatic, a systems programmer must understand the mark-and-sweep process to avoid latency issues.",
        time: "4 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Oberon GC Basics", url: "https://www.inf.ethz.ch/personal/wirth/Oberon/GC.pdf" },
        ],
        practice: "Research how the Oberon GC identifies unreferenced pointers in the heap.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Compilers",
    level: "Advanced",
    steps: [
      {
        what: "The SYSTEM Module (Low-Level)",
        why: "To access hardware directly. Learn GET, PUT, ADR, and BIT manipulation.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Low-Level Programming in Oberon", url: "http://www.ethoberon.ethz.ch/WirthPubl/CCompiler.pdf" },
        ],
        practice: "Write a procedure that inspects the raw hexadecimal bytes of an integer variable.",
      },
      {
        what: "Compiler Construction Foundations",
        why: "Oberon was designed to be easily compilable. Learning its structure is a masterclass in language design.",
        time: "3 Weeks",
        prereqs: "Advanced Logic",
        resources: [
          { name: "Compiler Construction (Wirth)", url: "https://people.inf.ethz.ch/wirth/CompilerConstruction/index.html" },
        ],
        practice: "Write a recursive descent parser for a simple subset of Oberon math expressions.",
      },
      {
        what: "Graphics & Display Module",
        why: "To build graphical user interfaces. Learn about framebuffers and tiling.",
        time: "2 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "Oberon Display Module", url: "https://github.com/v-project/voc/blob/master/src/lib/Display.def" },
        ],
        practice: "Draw a colored rectangle and a simple pixel-based icon on the screen using the Display module.",
      },
      {
        what: "Building an OS (Project Oberon)",
        why: "The ultimate goal. Learn how the file system, scheduler, and memory manager are built in ~10,000 lines of code.",
        time: "4 Weeks",
        prereqs: "All previous steps",
        resources: [
          { name: "Project Oberon (Book Extract)", url: "http://www.projectoberon.com/01_Intro.pdf" },
        ],
        practice: "Simulate a small task scheduler that manages 3 concurrent processes.",
      },
      {
        what: "Component-Oriented Programming",
        why: "To understand the evolution into BlackBox Component Builder and its industrial applications.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "BlackBox Component Builder", url: "https://blackbox.foundation/" },
        ],
        practice: "Build a small reusable UI component (like a button) using the BlackBox framework.",
      },
      {
        what: "FFI: Interfacing with C",
        why: "To use Oberon within modern Linux/Windows environments by calling C libraries.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "VOC C Interoperability", url: "https://github.com/v-project/voc/wiki/Interfacing-to-C" },
        ],
        practice: "Call the C 'printf' or 'sqrt' function from an Oberon module.",
      },
      {
        what: "Performance Optimization",
        why: "To write code that is as fast as C while maintaining Oberon's safety guarantees.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Optimizing Oberon Code", url: "https://www.inf.ethz.ch/personal/wirth/Oberon/Optimization.pdf" },
        ],
        practice: "Compare the speed of array access vs. pointer arithmetic in a heavy loop.",
      },
      {
        what: "Mastery Project: Tiny Database",
        why: "To synthesize all modular, record, and file system skills into a professional tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Flat-File Database' that supports indexing, search, and dynamic record insertion.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Unit Converter CLI", teaches: "Input/Output, Math, and CASE logic.", tech: "Oberon, Out/In Modules" },
  { level: "Beginner", title: "Prime Sieve", teaches: "Arrays, Loops, and Procedures.", tech: "Oberon" },
  { level: "Beginner", title: "Matrix Addition Tool", teaches: "2D Arrays and nested loops.", tech: "Oberon" },
  { level: "Intermediate", title: "Linked List Contact Book", teaches: "Pointers, Dynamic memory, and Records.", tech: "Oberon, NEW/DISPOSE" },
  { level: "Intermediate", title: "Simple Text Editor (TUI)", teaches: "File I/O, Buffer management, and Strings.", tech: "Oberon, Files module" },
  { level: "Intermediate", title: "Generic Stack ADT", teaches: "Procedure types and Data Abstraction.", tech: "Oberon" },
  { level: "Intermediate", title: "Shape Drawing Library", teaches: "Type extension and dynamic dispatch.", tech: "Oberon, Display" },
  { level: "Advanced", title: "Tiny Oberon Parser", teaches: "Recursive descent parsing, Lexing.", tech: "Oberon, Metaprogramming" },
  { level: "Advanced", title: "Memory-mapped I/O Driver", teaches: "SYSTEM module, bitwise logic.", tech: "Oberon, Low-level" },
  { level: "Advanced", title: "Minimal Bootloader OS", teaches: "Bare-metal, Kernel architecture.", tech: "Oberon, Assembly" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on syntax, modular design, and basic structured logic.",
    schedule: [
      "Days 1-7: Setup, Basic Types, and I/O.",
      "Days 8-15: Procedures, Parameters, and Loops.",
      "Days 16-23: Records, Arrays, and Modules.",
      "Days 24-30: Build 2 Beginner projects and learn basic Git.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Systems Dev",
    description: "Balanced path covering memory, pointers, and type extension.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Pointers, Dynamic Memory, and Type Extension.",
      "Days 41-60: Files module, Error handling, and 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Language Expert",
    description: "Comprehensive path for compiler-level development and OS internals.",
    schedule: [
      "Days 1-30: Core Development & Logic foundations.",
      "Days 31-60: Professional Systems (Low-level, C-interop, UI).",
      "Days 61-90: Compiler basics, OS architecture, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between a Record and a Record Extension?",
  "How does Oberon handle inheritance compared to Java or C++?",
  "The significance of the '*' mark in module declarations.",
  "Explain VAR parameters vs. Value parameters.",
  "What is the purpose of the SYSTEM module?",
  "How does the Oberon Garbage Collector work?",
  "Difference between a Pointer and a Procedure type.",
  "Explain the 'IS' and 'WITH' operators for type safety.",
  "Why is Oberon considered one of the smallest professional languages?",
  "What is a Command in the Oberon System context?",
];

const codingQuestions = [
  { question: "Implement a procedure to reverse a linked list in-place.", topic: "Pointers" },
  { question: "Write a recursive procedure to calculate the Nth Fibonacci number.", topic: "Recursion" },
  { question: "Extend a 'User' record into an 'Admin' record with extra permissions.", topic: "Type Extension" },
  { question: "Implement a simple Search function for a sorted array of integers.", topic: "Logic" },
];

const mcqs = [
  { question: "Which file extension is used for Oberon source files?", options: [".mod", ".def", ".ob", ".pas"], answer: ".mod" },
  { question: "Which keyword is used to allocate memory on the heap?", options: ["alloc", "malloc", "NEW", "create"], answer: "NEW" },
  { question: "Is Oberon case-sensitive?", options: ["Yes", "No", "Only for keywords", "Only for variables"], answer: "Yes" },
];

const mistakes = [
  "Forgetting the semicolon at the end of statements.",
  "Case sensitivity: 'MODULE' must be uppercase, 'module' is an error.",
  "Mixing up '=' (comparison) and ':=' (assignment).",
  "Forgetting to export variables/procedures with the '*' mark.",
  "Ignoring the 'END' keyword for control blocks (leads to nesting errors).",
  "Using VAR parameters unnecessarily when a value copy is safer.",
  "Not defining Informats correctly when reading custom files.",
  "Memory leaks: Forgetting that while it has GC, pointers to large structures stay alive if not cleared.",
  "Circular module dependencies: Oberon prevents these strictly.",
  "Trying to use complex OOP patterns (like Multiple Inheritance) that aren't supported.",
];

export default function OberonRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Oberon Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of "Less is More". From the foundations of structured programming to building entire operating systems with fewer than 10,000 lines of code.
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
            <CardDescription>Build these 10 projects to showcase your expertise in minimalist systems.</CardDescription>
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
            <CardDescription>Master the topics required for roles in language design, security, and OS development.</CardDescription>
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
                    {['Oberon-2', 'Type Extension', 'Wirth-style Languages', 'Compiler Construction', 'Safe Systems', 'Manual Allocation', 'Garbage Collection', 'SYSTEM Module', 'Project Oberon', 'BlackBox Builder'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of software maintainability and simplicity.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase compiler-level projects on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with hardware-software co-design.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Leanest Software Possible</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Oberon is the final evolution of structured systems programming. It teaches you that perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. Stay consistent, study the classics, and remember: The most stable systems are the simplest. Your journey to mastery starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Minimal Projects
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
