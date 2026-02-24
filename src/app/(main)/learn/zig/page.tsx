
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Foundational Zig",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Toolchain Setup",
        why: "To install the Zig compiler and understand 'zig build', the powerful build system that replaces Make/CMake.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Zig Official - Getting Started", url: "https://ziglang.org/learn/getting-started/" },
          { name: "Zig in 100 Seconds (YouTube)", url: "https://www.youtube.com/watch?v=kxT8-C1vmd4" },
        ],
        practice: "Install Zig. Run 'zig init-exe' to create a project template. Print 'Hello, Zig!' to the console.",
      },
      {
        what: "Variables & Basic Types",
        why: "To understand immutability ('const' vs 'var') and Zig's strict integer types (u8, i32, f64).",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Zig Language Guide - Variables", url: "https://ziglang.org/documentation/master/#Variables" },
        ],
        practice: "Declare variables for a user's age, weight, and initial. Experiment with integer overflow behavior.",
      },
      {
        what: "Control Flow: if, while, for",
        why: "To manage logic. Zig's 'for' loops are unique as they iterate over slices and arrays directly.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Zig Control Flow (Ziglearn)", url: "https://ziglearn.org/chapter-1/#if" },
        ],
        practice: "Write a program that prints the first 20 prime numbers using a 'while' loop.",
      },
      {
        what: "Functions & Error Handling",
        why: "Zig uses 'Error Sets' and 'try/catch' instead of exceptions. This is the foundation of Zig's robustness.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Zig Error Handling", url: "https://ziglearn.org/chapter-1/#errors" },
        ],
        practice: "Write a function that divides two numbers but returns an error if the denominator is zero.",
      },
      {
        what: "Structs & Enums",
        why: "To model complex data. Zig structs have no hidden padding by default, giving you total layout control.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Zig Structs & Enums", url: "https://ziglearn.org/chapter-1/#structs" },
        ],
        practice: "Model a 'Point' and 'Rectangle' struct. Calculate the area using a method-like function.",
      },
      {
        what: "Arrays & Slices",
        why: "To manage collections of data. Slices are the primary way to pass chunks of memory around safely.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Arrays and Slices in Zig", url: "https://ziglearn.org/chapter-1/#arrays" },
        ],
        practice: "Create an array of integers, take a slice of the middle three elements, and double their values.",
      },
      {
        what: "Basic Pointers (*T)",
        why: "Zig gives you raw pointer access but enforces safety. Understanding references is vital for systems code.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Zig Pointers Guide", url: "https://ziglearn.org/chapter-1/#pointers" },
        ],
        practice: "Write a function that swaps two integer values using pointers.",
      },
      {
        what: "Optionals (?T)",
        why: "To represent the absence of a value without using null pointers. Zig forces you to unwrap optionals.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Optionals in Zig", url: "https://ziglearn.org/chapter-1/#optionals" },
        ],
        practice: "Create an optional integer. Use 'if (opt_val) |val|' to print it only if it exists.",
      },
      {
        what: "Standard I/O (std.debug.print)",
        why: "To interact with the terminal for debugging and user input.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Zig Standard Library Docs", url: "https://ziglang.org/documentation/master/std/" },
        ],
        practice: "Write a CLI tool that asks for a user's name and age and prints a formatted summary.",
      },
      {
        what: "The Build System (build.zig)",
        why: "To manage dependencies, build modes (Debug, ReleaseSafe, ReleaseFast), and cross-compilation.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Zig Build System (Official)", url: "https://ziglang.org/learn/build-system/" },
        ],
        practice: "Create a custom build task that copies a config file to the bin directory after compilation.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Manual Memory & Comptime",
    level: "Intermediate",
    steps: [
      {
        what: "Allocators & Heap Memory",
        why: "Zig has no global hidden allocator. You must pass an allocator (std.mem.Allocator) to functions that need memory.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Zig Allocators Explained", url: "https://ziglearn.org/chapter-2/#allocators" },
        ],
        practice: "Implement a dynamic array-like structure using 'std.heap.page_allocator'. Ensure you 'defer free'.",
      },
      {
        what: "Pointer Arithmetic & Many-Item Pointers",
        why: "To handle low-level memory buffers and hardware registers directly.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Advanced Pointers", url: "https://ziglang.org/documentation/master/#Pointers" },
        ],
        practice: "Cast a single pointer to a many-item pointer and iterate through a memory block manually.",
      },
      {
        what: "Comptime: Compile-Time Logic",
        why: "Zig's 'superpower'. Execute code at compile-time to generate types, values, or perform optimizations.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Introduction to Comptime", url: "https://ziglearn.org/chapter-1/#comptime" },
          { name: "Comptime deep dive (YouTube)", url: "https://www.youtube.com/watch?v=look-up-zig-comptime" },
        ],
        practice: "Write a function that calculates the factorial of a number at compile-time.",
      },
      {
        what: "Generics via Comptime",
        why: "To write reusable code for any type. In Zig, generic functions are just functions that take a 'type' parameter.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Generics in Zig", url: "https://ziglearn.org/chapter-2/#generics" },
        ],
        practice: "Build a generic 'Stack(T)' data structure that works for any type T.",
      },
      {
        what: "Unit Testing (test blocks)",
        why: "Testing is built into Zig. 'test' blocks live right next to the code they verify.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Testing in Zig", url: "https://ziglearn.org/chapter-1/#testing" },
        ],
        practice: "Write unit tests for your Stack(T) implementation using 'expect' and 'expectEqual'.",
      },
      {
        what: "C Interoperability (@cImport)",
        why: "To use existing C libraries (like SDL or OpenSSL) directly in Zig without overhead.",
        time: "1 Week",
        prereqs: "Basic C Knowledge",
        resources: [
          { name: "Zig & C Interop", url: "https://ziglearn.org/chapter-4/" },
        ],
        practice: "Import 'stdio.h' and use C's 'printf' inside a Zig function.",
      },
      {
        what: "Bit Manipulation & Packed Structs",
        why: "Essential for network protocols, file formats, and hardware register mapping.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Zig Packed Structs", url: "https://ziglang.org/documentation/master/#packed-struct" },
        ],
        practice: "Create a packed struct to represent a 32-bit IPv4 header and verify its size.",
      },
      {
        what: "Standard Library: ArrayList & HashMap",
        why: "To leverage powerful, optimized data structures for everyday programming.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Standard Library Structures", url: "https://ziglang.org/documentation/master/std/#std.ArrayList" },
        ],
        practice: "Build a program that counts the frequency of words in a text file using 'std.StringHashMap'.",
      },
      {
        what: "Reflection & Type Information (@typeInfo)",
        why: "To inspect and manipulate types programmatically at compile-time.",
        time: "5 Days",
        prereqs: "Step 13",
        resources: [
          { name: "Type Information Guide", url: "https://ziglang.org/documentation/master/#typeInfo" },
        ],
        practice: "Write a generic 'printFields' function that uses @typeInfo to print the names of all fields in any struct.",
      },
      {
        what: "Cross-Compilation",
        why: "One of Zig's best features. Compile for any OS/CPU from any machine with zero extra setup.",
        time: "3 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Zig Cross-Compilation", url: "https://ziglang.org/learn/overview/#cross-compiling-is-a-first-class-use-case" },
        ],
        practice: "Compile your word-counting tool for Windows, Linux, and macOS from your current machine.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Optimization",
    level: "Advanced",
    steps: [
      {
        what: "Inline Assembly (asm)",
        why: "To perform CPU-specific operations or optimizations that the compiler cannot generate.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Zig Inline Assembly", url: "https://ziglang.org/documentation/master/#Assembly" },
        ],
        practice: "Use inline assembly to read the CPU's cycle counter (RDTSC) on x86_64.",
      },
      {
        what: "SIMD (Single Instruction, Multiple Data)",
        why: "To write blazing-fast code that processes multiple numbers in a single CPU cycle.",
        time: "1 Week",
        prereqs: "Step 21",
        resources: [
          { name: "SIMD in Zig", url: "https://ziglang.org/documentation/master/#Vectors" },
        ],
        practice: "Optimize a large array summation using '@Vector' types.",
      },
      {
        what: "WebAssembly (WASM) with Zig",
        why: "To run high-performance code in the browser. Zig is an excellent fit for WASM.",
        time: "2 Weeks",
        prereqs: "Step 20",
        resources: [
          { name: "Zig to WASM Guide", url: "https://zig.news/kristoff/how-to-build-zig-code-for-webassembly-489" },
        ],
        practice: "Build a Rust-style Fibonacci library in Zig, compile to WASM, and call it from JavaScript.",
      },
      {
        what: "Custom Allocators (Arena, Pool)",
        why: "To optimize memory usage patterns for specific application needs (e.g. temporary frame data).",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Implementing an Allocator", url: "https://www.youtube.com/watch?v=look-up-zig-allocators" },
        ],
        practice: "Build a simple Fixed-Buffer Allocator that manages a static array of memory.",
      },
      {
        what: "Bare Metal & Kernel Development",
        why: "The ultimate systems challenge. Build an OS or firmware without any standard library support.",
        time: "3 Weeks",
        prereqs: "All previous",
        resources: [
          { name: "Writing a simple OS in Zig", url: "https://github.com/phil-opp/blog_os" },
        ],
        practice: "Write a minimal kernel that boots in QEMU and prints a character to the VGA buffer.",
      },
      {
        what: "Async Zig (Conceptual/Future)",
        why: "Understand Zig's approach to concurrency (currently in flux but core to its design philosophy).",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Zig Async/Await status", url: "https://ziglang.org/news/0.10.0-release-notes/#async-is-temporarily-gone" },
        ],
        practice: "Research the history of Zig's colorblind async and why it's being redesigned.",
      },
      {
        what: "Optimization & Profiling",
        why: "To find and fix performance bottlenecks in systems code.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Zig with Perf/GDB", url: "https://www.youtube.com/watch?v=id-profiling-zig" },
        ],
        practice: "Identify a slow section in your JSON parser and optimize it using better allocation strategies.",
      },
      {
        what: "Contributing to Zig",
        why: "To help grow the ecosystem and learn from the world's best systems programmers.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [
          { name: "Zig GitHub Repository", url: "https://github.com/ziglang/zig" },
        ],
        practice: "Find a 'beginner friendly' issue on the Zig issue tracker and submit a pull request.",
      },
      {
        what: "Managing Unsafe Code",
        why: "Zig provides safety but allows 'Unsafe' blocks. Mastery means knowing exactly when and how to use them.",
        time: "1 Week",
        prereqs: "Step 21",
        resources: [
          { name: "Zig Safety vs Unsafe", url: "https://ziglang.org/documentation/master/#Runtime-Safety" },
        ],
        practice: "Write a function that uses '@ptrCast' safely and document the invariants required.",
      },
      {
        what: "System Design with Zig",
        why: "To architect large-scale systems like databases, compilers, or game engines using Zig's unique features.",
        time: "Ongoing",
        prereqs: "All previous",
        resources: [
          { name: "Bun - Building a fast JS runtime in Zig", url: "https://bun.sh/" },
        ],
        practice: "Design the architecture for a simple Key-Value store that uses Comptime for generic serialization.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Word Counter", teaches: "Files, Loops, and Basic Logic.", tech: "Zig Standard Library" },
  { level: "Beginner", title: "Number Guessing Game", teaches: "Input/Output, Randomness, and Conditionals.", tech: "Zig" },
  { level: "Beginner", title: "Basic Math Library", teaches: "Functions, Structs, and Unit Testing.", tech: "Zig" },
  { level: "Intermediate", title: "In-memory Key-Value Store", teaches: "Allocators, HashMaps, and Generics.", tech: "Zig, std.mem" },
  { level: "Intermediate", title: "Custom Unix Shell (Tiny)", teaches: "Processes, Fork/Exec, and CLI parsing.", tech: "Zig, POSIX" },
  { level: "Intermediate", title: "Image Resizer (C Wrapper)", teaches: "C Interop, build.zig, and external dependencies.", tech: "Zig, stbi_image" },
  { level: "Intermediate", title: "JSON Parser", teaches: "Recursion, Enums, and memory safety.", tech: "Zig" },
  { level: "Advanced", title: "CHIP-8 Emulator", teaches: "Instruction cycles, Bit manipulation, and Graphics interop.", tech: "Zig, SDL2" },
  { level: "Advanced", title: "HTTP/1.1 Server from Scratch", teaches: "Sockets, TCP/IP, and Buffer management.", tech: "Zig, networking" },
  { level: "Advanced", title: "Minimal x86 Bootloader", teaches: "Assembly, BIOS interrupts, and Bare Metal coding.", tech: "Zig, Assembly" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax and manual memory to get productive quickly.",
    schedule: [
      "Days 1-7: Zig Basics, Syntax, and Tooling.",
      "Days 8-15: Manual Memory Management (Allocators) and Slices.",
      "Days 16-23: Comptime and Generics fundamentals.",
      "Days 24-30: Build the 'CLI Word Counter' and learn 'zig build'.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "A balanced pace for deep understanding and building a strong portfolio.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Mastering Intermediate concepts: C Interop, Testing, and std structures.",
      "Days 46-60: Build two intermediate projects like the 'JSON Parser'.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional systems and high-performance engineering.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced logic: SIMD, WASM, and Custom Allocators.",
      "Days 61-90: Bare Metal, Performance Tuning, and final advanced project.",
    ]
  }
];

const interviewTopics = [
  "No Hidden Control Flow: Why does Zig avoid operator overloading?",
  "Manual Memory Management: How do Allocators work in Zig?",
  "Explain the difference between a Slice and an Array.",
  "What is Comptime? Give a real-world use case.",
  "Zig Error Sets vs Exceptions.",
  "The significance of the 'defer' and 'errdefer' keywords.",
  "How does Zig handle C interoperability?",
  "What is a 'many-item pointer' and when is it used?",
  "Zig Build Modes: Debug vs ReleaseSafe vs ReleaseFast.",
  "How does Zig's safety differ from Rust's (Borrow checker vs Runtime checks)?",
];

const codingQuestions = [
  { question: "Implement a function to reverse a slice in-place.", topic: "Memory/Logic" },
  { question: "Write a generic 'swap' function using comptime.", topic: "Comptime" },
  { question: "Implement a simple Arena Allocator.", topic: "Memory Management" },
  { question: "Parse a string into an integer without using the standard library.", topic: "Logic" },
];

const mcqs = [
  { question: "Which keyword is used to handle error values in a function call?", options: ["try", "catch", "unwrap", "handle"], answer: "try" },
  { question: "What is the result of adding two integers that results in an overflow in 'Debug' mode?", options: ["Wraps around", "Triggers a runtime panic", "Returns an error", "Silently fails"], answer: "Triggers a runtime panic" },
  { question: "Which property makes Zig uniquely suited for cross-compilation?", options: ["The built-in C compiler (zig cc)", "No garbage collector", "Static typing", "The defer keyword"], answer: "The built-in C compiler (zig cc)" },
];

const mistakes = [
  "Fighting the Build System: Trying to use Make instead of learning build.zig.",
  "Memory Leaks: Forgetting to 'defer allocator.free(slice)'.",
  "Ignoring Errors: Using 'catch unreachable' too liberally.",
  "Shadowing Confusion: Not realizing Zig prevents local variable shadowing by default.",
  "Array vs Slice: Passing arrays by value instead of using slices.",
  "Optional Overload: Not realizing that '?' is a type modifier, not a value.",
  "Ignoring Build Modes: Only ever testing in Debug mode.",
  "Premature Comptime: Using comptime where a simple runtime function would suffice.",
  "Lack of Alignment: Not considering memory alignment when doing raw pointer casts.",
  "Not using 'zig fmt': Ignoring the official style guide.",
];

export default function ZigRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Settings className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Zig Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the next generation of systems programming. From zero hidden control flow to mastering the world's most powerful build system and compile-time execution.
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
              <CardDescription>Follow these {stage.steps.length} steps to progress from {stage.level}.</CardDescription>
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your portfolio.</CardDescription>
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
            <CardDescription>Pick a timeline that matches your availability.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Coding Challenges</h3>
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
                    {['Zig', 'Manual Memory', 'Allocators', 'Comptime', 'C Interop', 'Cross-compilation', 'Systems Programming', 'WASM', 'SIMD', 'Low-level', 'Bare Metal', 'Generic Programming'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of memory safety without a garbage collector.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase projects that leverage Zig's 'Comptime' for optimization.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with cross-compiling for unusual targets.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Robust Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Zig is more than a language; it's a new perspective on software reliability. By removing hidden behavior, it gives you the control to build perfect systems. Stay consistent, read the source code of the standard library, and never stop experimenting. The future of systems is yours to build!
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
