
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
        what: "Introduction to F# & .NET Setup",
        why: "To set up the .NET SDK and understand F#'s role as a functional-first language on the JVM-like CLR. F# prioritizes correctness and conciseness.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "F# Official - Get Started", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/get-started/get-started-vscode" },
          { name: "F# for Fun and Profit: Why F#?", url: "https://fsharpforfunandprofit.com/posts/fsharp-in-60-seconds/" },
        ],
        practice: "Install .NET SDK and VS Code with the Ionide extension. Run 'dotnet new console -lang F#' and print 'Hello, F#!'.",
      },
      {
        what: "F# Interactive (FSI) & Scripting",
        why: "F# development is highly iterative. Using .fsx files and the REPL allows you to test logic instantly without full project builds.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Using F# Interactive", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/tools/fsharp-interactive/" },
        ],
        practice: "Open FSI in your terminal. Create a .fsx file, write a simple addition function, and send it to the interactive window.",
      },
      {
        what: "Values, Bindings & Immutability",
        why: "In F#, variables are 'values' and are immutable by default. Understanding the 'let' keyword is the first step to bug-free code.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Values and let Bindings", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/let-bindings" },
        ],
        practice: "Declare values for a person's name and age. Attempt to change them and observe the compiler error.",
      },
      {
        what: "Types & Type Inference",
        why: "F# has a powerful type system that 'guesses' types so you don't have to type them, while remaining 100% type-safe.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "F# Type System", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/fsharp-types" },
        ],
        practice: "Write code that mixes integers and floats. Learn to use 'float()' and 'int()' for explicit conversion.",
      },
      {
        what: "Functions & The Pipe Operator (|>) ",
        why: "The pipe operator is the soul of F#. It allows you to write code that reads left-to-right, mirroring how data flows through logic.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Functions in F#", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/" },
        ],
        practice: "Take a number, add 10, multiply by 2, and print the result—all using a single chain of pipe operators.",
      },
      {
        what: "Control Flow: If/Then/Else as Expressions",
        why: "In F#, everything returns a value. 'if' is an expression, not a statement, which makes logic more predictable.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "F# Conditional Expressions", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/conditional-expressions-if-then-else" },
        ],
        practice: "Write an 'if' expression that returns 'Even' or 'Odd' string based on a number.",
      },
      {
        what: "Tuples & Records",
        why: "To group related data without the boilerplate of classes. Records are immutable and support structural equality.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "F# Records Guide", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records" },
        ],
        practice: "Define a 'Coordinate' tuple and a 'User' record with name and email fields.",
      },
      {
        what: "Discriminated Unions (Sum Types)",
        why: "To model data that can be one of several distinct cases (e.g., Circle OR Square). This eliminates many runtime errors.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Discriminated Unions", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions" },
        ],
        practice: "Model a 'Shape' type that can be a Circle(radius), Rectangle(w, h), or Point.",
      },
      {
        what: "Pattern Matching Basics",
        why: "The primary way to handle complex data shapes. It ensures you handle every possible case, preventing 'missing case' bugs.",
        time: "4 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Pattern Matching in F#", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching" },
        ],
        practice: "Write a function 'calculateArea' that uses pattern matching to handle the 'Shape' union you built.",
      },
      {
        what: "Lists & Recursion",
        why: "F# uses immutable linked lists. Since there are no loops in pure functional code, recursion is how you process data.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Lists in F#", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists" },
        ],
        practice: "Write a recursive function to find the maximum value in a list of integers.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Data Processing & Modeling",
    level: "Intermediate",
    steps: [
      {
        what: "High-Order Functions (Map, Filter, Fold)",
        why: "To process collections efficiently and readably. F#'s List and Array modules provide powerful functional tools.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Working with Collections", url: "https://fsharpforfunandprofit.com/posts/list-module-functions/" },
        ],
        practice: "Take a list of strings and use map/filter to return only the lengths of strings longer than 5 chars.",
      },
      {
        what: "Option & Result Types",
        why: "To eliminate 'NullReferenceException'. Option models missing values; Result models success or error states.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Options in F#", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/options" },
        ],
        practice: "Write a safe division function that returns 'Result<float, string>' instead of throwing an error.",
      },
      {
        what: "Units of Measure",
        why: "A unique F# feature that allows the compiler to verify physical units (meters, seconds, dollars) to prevent math errors.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Units of Measure Guide", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/units-of-measure" },
        ],
        practice: "Create a physics calculation where you cannot accidentally add 'Meters' to 'Seconds'.",
      },
      {
        what: "Pipelining & Composition (>>)",
        why: "To build complex logic by snapping smaller functions together like Lego pieces.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Function Composition", url: "https://fsharpforfunandprofit.com/posts/function-composition/" },
        ],
        practice: "Create 3 simple math functions and compose them into one 'superFunction' using the >> operator.",
      },
      {
        what: "Sequences & Lazy Evaluation",
        why: "Sequences (seq) are like C# IEnumerable. They allow for processing infinite data and optimized computation.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Sequences in F#", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/sequences" },
        ],
        practice: "Create an infinite sequence of prime numbers and use 'Seq.take 10' to view only the first few.",
      },
      {
        what: "Modules & Project Structure",
        why: "To organize large codebases. Understanding the linear file order in F# projects is vital for architecture.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Modules in F#", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/modules" },
        ],
        practice: "Organize your project into 'Domain', 'Logic', and 'Program' files. Fix any compilation order issues.",
      },
      {
        what: "Object-Oriented F# (Classes & Interfaces)",
        why: "To interoperate with the C# ecosystem and implement specific .NET patterns when functional code isn't enough.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Classes in F#", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes" },
        ],
        practice: "Implement a .NET 'IDisposable' interface in an F# class to manage resources.",
      },
      {
        what: "Active Patterns",
        why: "To add custom logic into the pattern matching engine, making it easier to parse complex strings or structures.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Active Patterns Guide", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/active-patterns" },
        ],
        practice: "Build an active pattern that parses a string and identifies if it's an Integer, a Float, or a Word.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Metaprogramming",
    level: "Advanced",
    steps: [
      {
        what: "Asynchronous Workflows (async { })",
        why: "To build high-performance applications that handle I/O without blocking threads.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Async Programming in F#", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/tutorials/asynchronous-and-concurrent-programming/async" },
        ],
        practice: "Write a program that fetches data from 5 different URLs concurrently and returns the fastest response.",
      },
      {
        what: "Computation Expressions (Monads)",
        why: "The 'Secret' of F#. They allow you to define custom language logic for things like query builders, async, or error handling.",
        time: "3 Weeks",
        prereqs: "Step 12, Step 19",
        resources: [
          { name: "Computation Expressions Explained", url: "https://fsharpforfunandprofit.com/posts/computation-expressions-intro/" },
        ],
        practice: "Build a custom 'maybe { }' computation expression to automate null/option checks.",
      },
      {
        what: "Type Providers: Magic Data Access",
        why: "Type Providers generate types for you at compile-time based on your data (SQL, JSON, XML). No more manual DTOs.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "F# Data: Type Providers", url: "https://fsharp.github.io/FSharp.Data/" },
        ],
        practice: "Use the 'SqlHtmlProvider' to read a table from a live website and process it as a typed object.",
      },
      {
        what: "Web Development: Giraffe or Saturn",
        why: "To build ultra-fast, functional-style web APIs on top of ASP.NET Core.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Giraffe Documentation", url: "https://giraffe.gui/" },
          { name: "Saturn Web Framework", url: "https://saturnframework.org/" },
        ],
        practice: "Create a REST API that manages a 'Book' inventory with JSON endpoints.",
      },
      {
        what: "Fable: F# to JavaScript",
        why: "To build modern, reactive frontends (React) using the same language as your backend.",
        time: "2 Weeks",
        prereqs: "React Basics",
        resources: [
          { name: "Fable Official Site", url: "https://fable.io/" },
        ],
        practice: "Build a single-page counter app using Fable and Elmish architecture.",
      },
      {
        what: "Metaprogramming: Quotations",
        why: "To treat F# code as data that can be analyzed or transformed into other languages (like SQL or GLSL).",
        time: "1 Week",
        prereqs: "Step 20",
        resources: [
          { name: "Code Quotations Guide", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/code-quotations" },
        ],
        practice: "Write a function that inspects a simple arithmetic expression and prints its structure.",
      },
      {
        what: "Performance Tuning & Profiling",
        why: "To identify space leaks and optimize F# code for production-level throughput.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "F# Performance Tips", url: "https://learn.microsoft.com/en-us/dotnet/fsharp/introduction-to-fsharp/performance" },
        ],
        practice: "Use the 'BenchmarkDotNet' library to compare the speed of 'List' vs 'Array' in a tight loop.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Type safety, Computation Expressions, and Performance into a professional tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Real-time Analytics Dashboard' with an F# backend (Giraffe), a Fable frontend, and shared domain logic.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Word Frequency Tool", teaches: "Piping, Lists, and Map manipulation.", tech: "F#, Standard Lib" },
  { level: "Beginner", title: "Personal Budget CLI", teaches: "Immutability, Records, and File I/O.", tech: "F#" },
  { level: "Beginner", title: "Units Converter (Physics)", teaches: "Units of Measure and Type safety.", tech: "F#" },
  { level: "Intermediate", title: "Weather API Dashboard", teaches: "Async, Type Providers, and JSON parsing.", tech: "F#, FSharp.Data" },
  { level: "Intermediate", title: "Markdown to HTML CLI", teaches: "Recursive data structures and active patterns.", tech: "F#" },
  { level: "Intermediate", title: "Persistent Task Manager", teaches: "SQL, Drizzle-like interop, and Result types.", tech: "F#, SQLite" },
  { level: "Intermediate", title: "Algebraic Calculator", teaches: "Discriminated Unions and recursion.", tech: "F#" },
  { level: "Advanced", title: "Full-stack SaaS Boilerplate", teaches: "Giraffe, Saturn, Fable, and Auth.", tech: "F#, Fable, React" },
  { level: "Advanced", title: "Distributed Web Crawler", teaches: "Async Workflows, Actors (MailboxProcessor), and Concurrency.", tech: "F#, OTP-like" },
  { level: "Advanced", title: "Financial Risk Engine", teaches: "Performance tuning, heavy math, and large data processing.", tech: "F#, BenchmarkDotNet" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on syntax, pattern matching, and the pipe operator to understand the functional mindset.",
    schedule: [
      "Days 1-7: Installation, FSI, and Basic Types.",
      "Days 8-15: Functions, Piping, and Pattern Matching.",
      "Days 16-23: Records, Unions, and Recursion.",
      "Days 24-30: Build 2 beginner projects and learn basic .NET CLI.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Full Stack",
    description: "Balanced path covering professional data management and web APIs.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: HOFs, Option/Result, Units of Measure, and Modules.",
      "Days 41-60: Web Servers (Giraffe), SQL Type Providers, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Functional Architect",
    description: "Comprehensive path for professional systems and enterprise-level development.",
    schedule: [
      "Days 1-30: Core Development & Functional logic.",
      "Days 31-60: Professional Systems (Async, Computation Expressions).",
      "Days 61-90: Fable, React, Performance tuning, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain immutability and why it's the default in F#.",
  "What is the difference between a Record and a Class?",
  "Describe Discriminated Unions and their use cases.",
  "How does Pattern Matching improve code robustness?",
  "What is the Pipe Operator (|>) and how does it work?",
  "Explain Currying and Partial Application.",
  "What are Units of Measure and why are they unique to F#?",
  "Difference between synchronous and asynchronous workflows in F#.",
  "What is a Type Provider? Give an example.",
  "How does F# handle Null safety? (Option type).",
];

const codingQuestions = [
  { question: "Implement a tail-recursive function to reverse a list.", topic: "Recursion" },
  { question: "Write a pattern match that handles a Shape union (Circle, Rectangle).", topic: "Pattern Matching" },
  { question: "Create a simple 'maybe' computation expression.", topic: "Monads" },
  { question: "Use List.fold to find the average of a list of numbers.", topic: "Functional" },
];

const mcqs = [
  { question: "Which keyword is used for immutable bindings?", options: ["var", "val", "let", "const"], answer: "let" },
  { question: "What is the result of '1 / 2' in F#?", options: ["0", "0.5", "1", "Runtime Error"], answer: "0 (Int division)" },
  { question: "Which operator is used for function composition?", options: ["|>", ">>", "<-", "<*"], answer: ">>" },
];

const mistakes = [
  "Trying to write imperative loops like 'for' or 'while' - use recursion or HOFs.",
  "Ignoring the Pipe Operator, leading to deeply nested function calls.",
  "Treating F# like C# - don't use classes where records or unions are enough.",
  "Forgetting 'rec' in recursive function definitions.",
  "Not using 'Option' types, re-introducing NullPointerExceptions.",
  "Tutorial Hell: Reading about Monads without building a practical 'maybe' builder.",
  "Ignoring the compiler warnings - F# warnings are very prescriptive.",
  "Neglecting the REPL: Trying to build whole projects before testing snippets.",
  "Ignoring 'Success Typings' and not using the powerful 'Units of Measure'.",
  "Hardcoding paths: Use project-relative directories.",
];

export default function FSharpRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Code className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The F# Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most expressive and robust language on the .NET platform. From functional foundations to advanced computation expressions, type providers, and full-stack Fable applications.
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
            <CardDescription>Expert guidance to help you land your dream F# or Functional role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Concurrency Challenges</h3>
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
                    {['F#', '.NET', 'Functional Programming', 'Pattern Matching', 'Immutability', 'Type Providers', 'Computation Expressions', 'Async Workflows', 'Giraffe', 'Saturn', 'Fable', 'Units of Measure'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Domain-Driven Design'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include REPL session logs in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with high-integrity financial or data systems.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Future of Correctness.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            F# is more than just a language; it's a way of looking at the universe of data and flow. It rewards the precise and the persistent. Stay consistent, embrace the functional paradigm, and remember: The most stable systems in the world are built on the foundations you're learning today. Your journey to functional mastery starts now!
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
