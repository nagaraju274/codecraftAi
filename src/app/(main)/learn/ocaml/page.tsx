
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
  Infinity as InfinityIcon,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Functional Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & OPAM Setup",
        why: "To set up the OCaml Package Manager (OPAM) and the platform toolchain. OCaml's environment management is the first step to a stable workflow.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "OCaml.org - Install Guide", url: "https://ocaml.org/docs/installing-ocaml" },
          { name: "OCaml for the Impatient (Blog)", url: "https://ocaml.org/docs/up-and-running" },
        ],
        practice: "Install OPAM. Initialize a switch. Open 'utop' (the enhanced REPL) and perform basic math.",
      },
      {
        what: "Variables, Types & Immutability",
        why: "To understand that in OCaml, variables are immutable values by default. Mastering Int, Float, Bool, and Char is the core of the language.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "OCaml Tutorial: Basic Types", url: "https://ocaml.org/docs/basic-types" },
        ],
        practice: "Declare values for a person's profile. Observe that you cannot re-assign a value once defined using 'let'.",
      },
      {
        what: "Functions & Recursion",
        why: "Functions are first-class citizens. Since OCaml doesn't have traditional loops, recursion ('let rec') is how you iterate.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Functions in OCaml", url: "https://ocaml.org/docs/functions" },
        ],
        practice: "Write recursive functions for Factorial and Fibonacci. Learn the difference between Float and Int arithmetic (e.g., +. vs +).",
      },
      {
        what: "Pattern Matching (The Heart of OCaml)",
        why: "Pattern matching is the most powerful tool for logic branching. It replaces complex 'if-else' chains with clean, readable structural matches.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Pattern Matching Guide", url: "https://ocaml.org/docs/data-types#pattern-matching" },
        ],
        practice: "Write a function that describes a number (zero, one, or large) using the 'match' keyword.",
      },
      {
        what: "Lists & Recursive Data Structures",
        why: "Lists are the primary collection type. Mastering the [H :: T] syntax is essential for processing streams of data.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Working with Lists", url: "https://ocaml.org/docs/lists" },
        ],
        practice: "Implement a function to find the length of a list and another to reverse a list manually.",
      },
      {
        what: "Variants & Sum Types",
        why: "To model complex domain data. Variants allow a variable to be one of several distinct types (e.g., 'Circle' or 'Square').",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Variant Types", url: "https://ocaml.org/docs/data-types#variants" },
        ],
        practice: "Model a 'Response' type that can be 'Success of string' or 'Error of int'.",
      },
      {
        what: "Records & Product Types",
        why: "To group related data into named fields. Records are the standard way to model entities like 'User' or 'Account'.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "OCaml Records", url: "https://ocaml.org/docs/data-types#records" },
        ],
        practice: "Create a 'Book' record with title, author, and page count fields.",
      },
      {
        what: "Standard Library Basics (Stdlib)",
        why: "To avoid reinventing the wheel. Learn the core modules like List, String, and Array.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Stdlib Documentation", url: "https://v2.ocaml.org/api/Stdlib.html" },
        ],
        practice: "Use 'List.map' and 'List.filter' to process a list of integers.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Modules & Abstractions",
    level: "Intermediate",
    steps: [
      {
        what: "Higher-Order Functions (HOFs)",
        why: "To write expressive code that processes data as streams. Master .map, .filter, and the powerful .fold_left.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Functional Programming in OCaml", url: "https://cs3110.github.io/textbook/chapters/hop/hop.html" },
        ],
        practice: "Use 'fold_left' to sum a list and 'fold_right' to flatten a list of lists.",
      },
      {
        what: "Options & Result Types (Error Handling)",
        why: "OCaml doesn't use null. These types force you to handle success and failure explicitly at compile-time.",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Error Handling in OCaml", url: "https://ocaml.org/docs/error-handling" },
        ],
        practice: "Write a function that divides two numbers and returns a 'Result' type to handle division by zero.",
      },
      {
        what: "Modules & Signatures (.ml / .mli)",
        why: "To organize large codebases. Modules provide namespaces and encapsulation. Signatures define the public API.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "The Module System", url: "https://ocaml.org/docs/modules" },
        ],
        practice: "Create a 'Counter' module with a signature that hides the internal integer state.",
      },
      {
        what: "Build Systems: Dune",
        why: "Dune is the standard build tool for OCaml. It handles compilation, dependencies, and project layout.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Dune Build System Guide", url: "https://dune.build/docs" },
        ],
        practice: "Initialize a project with 'dune init' and build an executable that uses an external library.",
      },
      {
        what: "Polymorphism & Generics",
        why: "To write functions that work on any type (e.g., a generic 'Stack' or 'Queue').",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Polymorphism in OCaml", url: "https://ocaml.org/docs/polymorphism" },
        ],
        practice: "Implement a generic 'peek' function that works for a list of any type.",
      },
      {
        what: "Functors (Parametric Modules)",
        why: "Functors are functions that take modules as input and return modules. This is OCaml's 'Superpower' for advanced abstraction.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "OCaml Functors Guide", url: "https://ocaml.org/docs/functors" },
        ],
        practice: "Implement a 'Set' module that can be specialized for both Integers and Strings using a Functor.",
      },
      {
        what: "Testing with Alcotest / OUnit",
        why: "Professional code requires verification. Learn to write unit tests that run automatically via Dune.",
        time: "5 Days",
        prereqs: "Step 12",
        resources: [
          { name: "Testing in OCaml", url: "https://ocaml.org/docs/testing" },
        ],
        practice: "Write a test suite for your Counter module and verify its state transitions.",
      },
      {
        what: "Imperative Features & Mutability",
        why: "While primarily functional, OCaml allows mutability (refs, arrays) for performance optimization.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Imperative Programming in OCaml", url: "https://ocaml.org/docs/mutability" },
        ],
        practice: "Use a 'ref' to create a counter that increments within a function call.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & High Performance",
    level: "Advanced",
    steps: [
      {
        what: "Monads & Async (Lwt / Async)",
        why: "To handle asynchronous I/O (like networking) in a non-blocking, purely functional way.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Lwt Tutorial", url: "https://ocsigen.org/lwt/latest/manual/manual" },
          { name: "Real World OCaml: Concurrent Programming", url: "https://dev.realworldocaml.org/concurrent-programming.html" },
        ],
        practice: "Build a tool that fetches content from multiple URLs concurrently using Lwt.",
      },
      {
        what: "GADTs (Generalized Algebraic Data Types)",
        why: "To encode complex logic into the type system itself, preventing bugs at compile-time.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "GADTs in OCaml", url: "https://ocaml.org/docs/gadts" },
        ],
        practice: "Build a type-safe expression evaluator that prevents adding a String to an Int.",
      },
      {
        what: "Multicore OCaml & Effects",
        why: "To utilize all CPU cores and manage control flow natively using effect handlers (OCaml 5.0+).",
        time: "2 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "OCaml 5.0 Manual", url: "https://v2.ocaml.org/manual/parallelism.html" },
        ],
        practice: "Parallelize a heavy matrix calculation across 4 CPU cores using the Domains module.",
      },
      {
        what: "FFI: Interfacing with C",
        why: "When performance or hardware access is needed. Learn to call C code from OCaml.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "C Interface Guide", url: "https://v2.ocaml.org/manual/intfc.html" },
        ],
        practice: "Wrap a simple C math function and call it from an OCaml script.",
      },
      {
        what: "Parsing with Menhir / Sedlex",
        why: "OCaml is the best language for building compilers. Learn to turn text into structured data (AST).",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Menhir Documentation", url: "http://gallium.inria.fr/~fpottier/menhir/" },
        ],
        practice: "Write a parser for a simple subset of JSON or a custom mathematical language.",
      },
      {
        what: "Performance Profiling & Optimization",
        why: "To identify space leaks and optimize the garbage collector settings for production speed.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling OCaml Code", url: "https://ocaml.org/docs/profiling" },
        ],
        practice: "Use 'perf' or 'memtrace' to find a bottleneck in a recursive function.",
      },
      {
        what: "Web Development: Dream",
        why: "To build high-performance web APIs. Dream is a minimalist, easy-to-use framework for modern OCaml.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Dream Web Framework", url: "https://aantron.github.io/dream/" },
        ],
        practice: "Create a REST API that manages a 'Book' inventory with a JSON interface.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Type safety, Modules, and Performance into a professional tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Mini-Language Interpreter' or a 'High-Frequency Trading Simulator' with a Dream dashboard.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Unit Converter", teaches: "Input/Output, Math, and Pattern Matching.", tech: "OCaml, Stdlib" },
  { level: "Beginner", title: "Word Frequency Counter", teaches: "Lists, HOFs, and basic File I/O.", tech: "OCaml" },
  { level: "Beginner", title: "Personal Task Manager", teaches: "Records, Variants, and recursive data.", tech: "OCaml" },
  { level: "Intermediate", title: "JSON Data Parser", teaches: "Recursive types, Result handling, and Modules.", tech: "OCaml, Yojson" },
  { level: "Intermediate", title: "Text-based RPG Engine", teaches: "State management, Mutability, and Game loops.", tech: "OCaml" },
  { level: "Intermediate", title: "Generic Math Library", teaches: "Functors and Signatures.", tech: "OCaml" },
  { level: "Intermediate", title: "Markdown to HTML Converter", teaches: "Strings, Regex, and recursive processing.", tech: "OCaml" },
  { level: "Advanced", title: "Concurrent Web Crawler", teaches: "Lwt, Parallelism, and Async I/O.", tech: "OCaml, Lwt" },
  { level: "Advanced", title: "Type-Safe REST API", teaches: "Dream, GADTs, and Database persistence.", tech: "OCaml, Dream, Caqti" },
  { level: "Advanced", title: "Lisp Interpreter", teaches: "Parsing (Menhir), AST, and Evaluation logic.", tech: "OCaml, Menhir" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on syntax, recursion, and core functional logic to get productive quickly.",
    schedule: [
      "Days 1-7: Setup, utop, and Basic Syntax.",
      "Days 8-15: Lists, Recursion, and Pattern Matching.",
      "Days 16-23: Higher-Order Functions and basic Modules.",
      "Days 24-30: Build 2 beginner projects and learn basic I/O.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Intermediate Pro",
    description: "Balanced path covering the heavy abstractions: Functors, Options, and Dune.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Functors, Signatures, and Error handling.",
      "Days 46-60: Networking, JSON, and building a full CLI app.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Functional Architect",
    description: "Comprehensive path for professional systems and high-integrity software readiness.",
    schedule: [
      "Days 1-30: Core Language & Functional logic.",
      "Days 31-60: Professional Systems (Lwt, GADTs, Testing).",
      "Days 61-90: Web Frameworks, Performance tuning, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain Hindley-Milner Type Inference.",
  "Difference between a Variant and a Record.",
  "What is Tail-Call Optimization? Why does OCaml need it?",
  "Explain Currying and Partial Application.",
  "How do you handle error cases in OCaml? (Result vs Exceptions).",
  "What is a Functor? Give a real-world use case.",
  "Describe the OCaml Garbage Collector (Generational).",
  "Explain the difference between 'let' and 'let rec'.",
  "What is the purpose of a .mli file?",
  "How does Lwt handle concurrency without multiple threads?",
];

const codingQuestions = [
  { question: "Implement a function to find the length of a list recursively.", topic: "Recursion" },
  { question: "Implement 'map' using 'fold_right'.", topic: "HOFs" },
  { question: "Write a function to safely extract the head of a list using Option.", topic: "Error Handling" },
  { question: "Detect if a list is a palindrome.", topic: "Lists" },
];

const mcqs = [
  { question: "Which symbol is used for integer division in OCaml?", options: ["/", "/.", "//", "div"], answer: "/" },
  { question: "What is the return type of a function that only performs side effects?", options: ["void", "null", "unit", "()" ], answer: "unit" },
  { question: "Which tool is the standard build system for OCaml?", options: ["Make", "Cabal", "Dune", "Cargo"], answer: "Dune" },
];

const mistakes = [
  "Trying to write imperative 'for' loops: Use recursion or map/filter instead.",
  "Ignoring Float arithmetic operators: Writing '1.0 + 2.0' instead of '1.0 +. 2.0'.",
  "Confusing List and Array: Lists are immutable and linked; Arrays are mutable and contiguous.",
  "Tutorial Hell: Reading papers for weeks without writing code in utop.",
  "Using Exceptions for logic: This makes code hard to trace—use Result instead.",
  "Neglecting Signatures: Always write .mli files to document your public interface.",
  "Over-using Mutability: Refs should be your last resort, not your first choice.",
  "Ignoring compiler warnings: OCaml's warnings often hint at logic errors (like non-exhaustive matches).",
  "Tutorial Hopping: Stick to one consistent resource like 'OCaml Programming: Art and Science'.",
  "Failing to use Dune: Manually compiling large projects is a recipe for dependency hell.",
];

export default function OCamlRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <InfinityIcon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The OCaml Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language of high-frequency trading and compiler design. From absolute functional foundations to advanced GADTs, Multicore systems, and formal verification.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Functional Programming Languages">
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your GitHub portfolio.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Functional Programming role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding Challenges</h3>
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
                    {['OCaml', 'ML', 'Functors', 'GADTs', 'Pattern Matching', 'Lwt', 'Async', 'Jane Street', 'Multicore', 'Dune', 'Formal Verification', 'Compiler Design'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Safety-First' engineering.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include property-based test results in project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with high-integrity or math-heavy domains.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Logic of Pure Performance</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            OCaml is more than just a language; it's a way of looking at computation as a rigorous, mathematical discipline. It rewards the precise and the persistent. Stay consistent, embrace the functor, and remember: The most stable systems in the world are built on the foundations you're learning today. Your journey to functional mastery starts now!
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
