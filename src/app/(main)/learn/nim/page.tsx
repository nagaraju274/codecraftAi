
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
  Cpu,
  Code,
  Search,
  Monitor,
  Workflow,
  CheckCircle,
  ShieldCheck,
  Activity,
  Globe,
  Database,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Settings,
  HardDrive,
  Layers,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Nim Syntax & Core Logic",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & choosenim Setup",
        why: "To set up the Nim compiler and toolchain correctly. 'choosenim' is the easiest way to switch between versions.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Nim Official - Getting Started", url: "https://nim-lang.org/learn.html" },
          { name: "Nim Tutorial (YouTube - Gary's Nim)", url: "https://www.youtube.com/watch?v=look-up-nim-intro" },
        ],
        practice: "Install Nim via choosenim. Run 'nim c -r project.nim' to compile and run your first file.",
      },
      {
        what: "Variables & Constants (let, var, const)",
        why: "Understanding immutability is key in systems languages. 'let' is for immutable values, 'var' for mutable, and 'const' for compile-time constants.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Nim Tutorial Part 1: Variables", url: "https://nim-lang.org/docs/tut1.html#the-assignment-statement" },
        ],
        practice: "Declare variables for a user profile. Try changing a 'let' value to see the compiler error.",
      },
      {
        what: "Control Flow: if, case, when",
        why: "To handle logic branching. Nim's 'case' is more powerful than standard switch statements, requiring exhaustiveness.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Nim Control Flow", url: "https://nim-lang.org/docs/tut1.html#control-flow-statements" },
        ],
        practice: "Write a program that uses 'case' to handle different user roles (Admin, Guest, User).",
      },
      {
        what: "Loops: while & for (countup/countdown)",
        why: "Iteration is essential for processing lists. Learn Nim's unique iterator-based 'for' loops.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Loops in Nim", url: "https://nim-by-example.github.io/for_loops/" },
        ],
        practice: "Write a loop that prints only prime numbers between 1 and 50.",
      },
      {
        what: "Procedures (proc) & UFCS",
        why: "Procedures are functions in Nim. Uniform Function Call Syntax (UFCS) allows you to call 'len(arr)' as 'arr.len()'.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Procedures in Nim", url: "https://nim-lang.org/docs/tut1.html#procedures" },
        ],
        practice: "Create a geometry library where functions can be called using dot notation (e.g., circle.area).",
      },
      {
        what: "Basic Types: Integers, Floats, Chars",
        why: "Nim is statically typed. You must understand specific bit-sizes (int32, int64) for systems-level control.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Nim Basic Types", url: "https://nim-lang.org/docs/tut1.html#basic-types" },
        ],
        practice: "Perform arithmetic operations and observe how Nim handles type casting between different sizes.",
      },
      {
        what: "Strings & String Formatting",
        why: "To manipulate text data. Nim strings are mutable and null-terminated, making C-interop easy.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "String Manipulation in Nim", url: "https://nim-by-example.github.io/strings/" },
        ],
        practice: "Build a string parser that extracts values from a CSV-formatted line.",
      },
      {
        what: "Arrays & Sequences (seq)",
        why: "To manage collections of data. Arrays have fixed size; 'seq' is Nim's dynamic array (like Python lists).",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Arrays and Seqs", url: "https://nim-by-example.github.io/arrays/" },
        ],
        practice: "Create a sequence of integers and implement a simple bubble sort logic.",
      },
      {
        what: "Error Handling: Exceptions",
        why: "Build robust apps by handling runtime errors safely with try/except/finally blocks.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Nim Exception Handling", url: "https://nim-lang.org/docs/tut2.html#exception-handling" },
        ],
        practice: "Write a function that reads a file and catches the 'IOError' if the file is missing.",
      },
      {
        what: "Package Management with Nimble",
        why: "Nimble is the official package manager. Use it to install libraries and manage project dependencies.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Nimble Documentation", url: "https://github.com/nim-lang/nimble#nimble" },
        ],
        practice: "Create a '.nimble' file for your project and add a dependency like 'jsony'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Metaprogramming & Systems",
    level: "Intermediate",
    steps: [
      {
        what: "Objects & Ref Types",
        why: "To model complex data structures. Understand the difference between stack-allocated objects and heap-allocated refs.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Objects in Nim", url: "https://nim-lang.org/docs/tut2.html#objects" },
        ],
        practice: "Model a 'Bank System' using objects for Accounts and Transactions.",
      },
      {
        what: "Method Dispatch & Inheritance",
        why: "Nim supports OOP via object inheritance and dynamic dispatch using 'method'.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Inheritance & Methods", url: "https://nim-lang.org/docs/tut2.html#inheritance" },
        ],
        practice: "Create a 'Shape' hierarchy where 'Circle' and 'Square' have their own draw methods.",
      },
      {
        what: "Templates: Inline Code Generation",
        why: "Templates provide a simple way to generate code at compile-time without complex AST manipulation.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Nim Templates Guide", url: "https://nim-lang.org/docs/tut2.html#templates" },
        ],
        practice: "Write a 'debug' template that prints a variable name and its value only in debug builds.",
      },
      {
        what: "Macro Basics: The AST",
        why: "Macros are Nim's most powerful feature. They allow you to transform the code's Abstract Syntax Tree at compile-time.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Metaprogramming in Nim", url: "https://nim-lang.org/docs/tut3.html" },
        ],
        practice: "Write a simple macro that calculates the execution time of any procedure it's applied to.",
      },
      {
        what: "Generics",
        why: "To write reusable code that can work with any data type safely.",
        time: "5 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Generics in Nim", url: "https://nim-by-example.github.io/generics/" },
        ],
        practice: "Implement a generic 'Stack[T]' data structure.",
      },
      {
        what: "Pragmas: Compiler Directives",
        why: "Pragmas control compiler behavior, like speed optimizations, safety checks, or C-function exports.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Nim Pragmas List", url: "https://nim-lang.org/docs/manual.html#pragmas" },
        ],
        practice: "Use the '{.inline.}' pragma to suggest a procedure be inlined for performance.",
      },
      {
        what: "Iterators & Yield",
        why: "To create custom loops that are memory efficient by yielding items one at a time.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Iterators Guide", url: "https://nim-lang.org/docs/tut1.html#iterators" },
        ],
        practice: "Create a 'fibonacci' iterator that yields numbers up to a certain limit.",
      },
      {
        what: "Async/Await & Networking",
        why: "Modern apps need non-blocking I/O. Learn 'asyncdispatch' for building fast web servers and clients.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Asynchronous Programming", url: "https://nim-lang.org/docs/asyncdispatch.html" },
        ],
        practice: "Build a script that fetches content from multiple URLs concurrently.",
      },
      {
        what: "Working with JSON",
        why: "To communicate with web APIs. Nim has excellent built-in JSON support.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Nim JSON Module", url: "https://nim-lang.org/docs/json.html" },
        ],
        practice: "Parse a complex JSON file into a Nim object and serialize it back to a string.",
      },
      {
        what: "Database Access (SQL)",
        why: "To store and retrieve persistent application data.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Nim SQL Tutorial", url: "https://nim-lang.org/docs/db_sqlite.html" },
        ],
        practice: "Create an address book app that saves contacts to a local SQLite database.",
      },
    ],
  },
  {
    title: "Advanced Stage: Performance & Optimization",
    level: "Advanced",
    steps: [
      {
        what: "FFI: Calling C/C++ from Nim",
        why: "To leverage thousands of existing C libraries. Nim's FFI is zero-overhead and incredibly powerful.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "FFI in Nim", url: "https://nim-lang.org/docs/manual.html#foreign-function-interface" },
        ],
        practice: "Wrap a simple C library (like SDL or Raylib) and create a window in Nim.",
      },
      {
        what: "Memory Management (ARC/ORC)",
        why: "Master Nim's deterministic memory management. Learn how Automatic Reference Counting works without a GC pause.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Nim Memory Management", url: "https://nim-lang.org/docs/mm.html" },
        ],
        practice: "Analyze memory usage of a large sequence manipulation and optimize it using ARC.",
      },
      {
        what: "Concurrency & Multithreading",
        why: "To utilize multi-core processors. Learn 'spawn', 'sync', and 'channels' for safe thread communication.",
        time: "1 Week",
        prereqs: "Step 18",
        resources: [
          { name: "Nim Threading", url: "https://nim-lang.org/docs/threadpool.html" },
        ],
        practice: "Write a program that processes 1 million items in parallel across 4 threads.",
      },
      {
        what: "Metaprogramming: Advanced Macros",
        why: "Build Domain Specific Languages (DSLs). Macros can generate entire types and systems at compile-time.",
        time: "2 Weeks",
        prereqs: "Step 14",
        resources: [
          { name: "Macro Playground (YouTube)", url: "https://www.youtube.com/watch?v=look-up-nim-macros" },
        ],
        practice: "Build a mini-DSL for defining HTML templates or SQL queries within Nim.",
      },
      {
        what: "WebAssembly (WASM) with Nim",
        why: "To run high-performance code in the browser. Nim's JS backend makes this seamless.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Nim to WebAssembly", url: "https://github.com/nim-lang/nim/wiki/WebAssembly" },
        ],
        practice: "Compile a Rust-style math library in Nim to WASM and call it from a React app.",
      },
      {
        what: "Performance Profiling & Tuning",
        why: "To find and fix bottlenecks. Systems programmers must be able to read Flamegraphs and memory profiles.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Nim", url: "https://nim-lang.org/docs/manual.html#performance-tips" },
        ],
        practice: "Use a profiler to identify slow procedures in a previous project and optimize them.",
      },
      {
        what: "Cross-Compilation",
        why: "Nim can compile to Windows, Linux, Android, and iOS from a single machine with zero friction.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Nim Cross-compilation Guide", url: "https://nim-lang.org/docs/nimc.html#cross-compilation" },
        ],
        practice: "Build a Linux executable on your Windows/Mac machine.",
      },
      {
        what: "Nim for Web (NimJS)",
        why: "Write your frontend logic in Nim. It compiles to optimized JavaScript.",
        time: "1 Week",
        prereqs: "JS Basics",
        resources: [
          { name: "Nim JavaScript Backend", url: "https://nim-lang.org/docs/backends.html#the-javascript-backend" },
        ],
        practice: "Build a simple single-page app (SPA) using purely Nim code.",
      },
      {
        what: "Unit Testing (unittest module)",
        why: "Every professional project needs tests. Learn to write 'suite' and 'test' blocks.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Nim Unit Testing", url: "https://nim-lang.org/docs/unittest.html" },
        ],
        practice: "Write a test suite for your Stack[T] generic implementation.",
      },
      {
        what: "Project Documentation (DocGen)",
        why: "Nim has a built-in documentation generator. Learn to use it to document your libraries automatically.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Nim DocGen", url: "https://nim-lang.org/docs/docgen.html" },
        ],
        practice: "Generate HTML documentation for your final capstone project.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI File Renamer", teaches: "File I/O, Strings, and Command-line args.", tech: "Nim Standard Library" },
  { level: "Beginner", title: "Number Guessing Game", teaches: "Input/Output, Loops, and Logic.", tech: "Nim" },
  { level: "Beginner", title: "Basic Calculator", teaches: "Procedures, Case statements, and Math.", tech: "Nim" },
  { level: "Intermediate", title: "Nim HTTP Server", teaches: "Asynch I/O, Routing, and HTTP protocols.", tech: "Nim, asyncdispatch" },
  { level: "Intermediate", title: "JSON Data Processor", teaches: "JSON module, Seqs, and Tables.", tech: "Nim, json" },
  { level: "Intermediate", title: "SQLite Contact Manager", teaches: "Database interaction, Objects, and SQL.", tech: "Nim, db_sqlite" },
  { level: "Intermediate", title: "Compile-time Config Loader", teaches: "Templates and Comptime logic.", tech: "Nim" },
  { level: "Advanced", title: "Retro Game (FFI)", teaches: "Interfacing with C libraries (Raylib/SDL), graphics.", tech: "Nim, Raylib" },
  { level: "Advanced", title: "Custom DSL for HTML", teaches: "Advanced Macros and AST manipulation.", tech: "Nim Metaprogramming" },
  { level: "Advanced", title: "Parallel Raytracer", teaches: "Threading, Performance tuning, and complex math.", tech: "Nim, threadpool" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax and basic system tasks to get productive quickly.",
    schedule: [
      "Days 1-7: Nim Syntax, Variables, and Procedures.",
      "Days 8-15: Collections (Seq/Table) and Error handling.",
      "Days 16-23: Modules, Nimble, and basic File I/O.",
      "Days 24-30: Build 2 beginner projects and learn basic templates.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for deep understanding and building a portfolio.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Intermediate concepts: OOP, Generics, and Macros.",
      "Days 46-60: Networking, Database access, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional systems and high-performance engineering.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced logic: FFI, ARC/ORC, and Concurrency.",
      "Days 61-90: WASM, Performance Tuning, and a massive final project.",
    ]
  }
];

const interviewTopics = [
  "Nim's Compilation Model: C/C++ vs. JavaScript backend.",
  "Uniform Function Call Syntax (UFCS) benefits.",
  "Difference between 'let', 'var', and 'const' in Nim.",
  "Explain Nim's Error Sets and the 'try' macro.",
  "What are Nim Macros and how do they differ from C macros?",
  "How does Nim's memory management (ARC/ORC) work?",
  "Ref types vs. Object types: When to use which?",
  "Explaining the purpose of Pragmas.",
  "Concurrency in Nim: Spawn vs. Threads.",
  "What is 'Comptime' in Nim?",
];

const codingQuestions = [
  { question: "Implement a thread-safe Queue using Nim's Channels.", topic: "Concurrency" },
  { question: "Write a generic 'sum' function that works for any numeric type.", topic: "Generics" },
  { question: "Create a macro that automatically generates getters for an object's fields.", topic: "Metaprogramming" },
  { question: "Implement a recursive directory walker that prints file sizes.", topic: "File I/O" },
];

const mcqs = [
  { question: "Which command runs a Nim file immediately after compiling?", options: ["nim compile", "nim r", "nim c -r", "nim execute"], answer: "nim c -r" },
  { question: "What is Nim's default case convention for variable names?", options: ["CamelCase", "snake_case", "Any (Nim is case-insensitive)", "kebab-case"], answer: "Any (Nim is case-insensitive, except for first letter)" },
  { question: "Which pragma ensures a function is not exported outside the module?", options: ["{.private.}", "{.hidden.}", "{.local.}", "By default, names are private unless exported with '*'"], answer: "By default, names are private unless exported with '*'" },
];

const mistakes = [
  "Forgetting the '*' suffix to export procedures/variables from modules.",
  "Mixing spaces and tabs: Nim is indentation-sensitive.",
  "Using 'var' when 'let' would suffice (immutability is better).",
  "Ignoring 'ref' types and facing stack-overflows with massive objects.",
  "Tutorial Hell: Reading about macros for weeks without writing basic logic.",
  "Not using 'choosenim', resulting in version conflicts.",
  "Over-using macros: Start with procedures, then templates, then macros.",
  "Ignoring the C-compiler warnings hidden by the Nim compiler.",
  "Not checking the Nimble ecosystem before building from scratch.",
  "Failing to use 'unittest' for even simple logic blocks.",
];

export default function NimRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Nim Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most elegant systems programming language. From absolute foundations to advanced metaprogramming, C-interop, and high-performance distributed systems.
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
            <CardDescription>Build your portfolio with these 10 hands-on Nim projects.</CardDescription>
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
            <CardDescription>Master the topics required to land a role at companies using modern systems languages.</CardDescription>
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
                    {['Nim', 'Metaprogramming', 'Macros', 'FFI', 'C-interop', 'ARC/ORC', 'Memory Safety', 'Concurrency', 'Async I/O', 'UFCS', 'Nimble', 'High Performance'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Compile-time Execution' and 'Macros'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase Nim libraries you've built or contributed to on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with cross-platform build pipelines.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Silicon Soul</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Nim is more than just a language; it's a creative freedom for systems programmers. By blending Python's beauty with C's speed, it lets you focus on what matters: the logic. Stay consistent, read the official docs (they are excellent), and never stop experimenting. The future of high-performance software is in your hands!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Projects
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
