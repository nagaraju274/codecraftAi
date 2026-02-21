
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
  Code,
  Layout,
  Database,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Smartphone,
  Server,
  Layers,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Dart Syntax & Core Concepts",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Dart & Tooling",
        why: "Dart is a client-optimized language for fast apps on any platform. Learning DartPad and the SDK setup is your first step.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Dart Tour (Official Docs)", url: "https://dart.dev/guides/language/language-tour" },
          { name: "Dart Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q" },
        ],
        practice: "Install Dart SDK. Open DartPad and print 'Hello World'. Run a basic math operation in the console.",
      },
      {
        what: "Variables & Basic Types",
        why: "Understanding how to store data (String, int, double, bool) is fundamental to all programming.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Variables in Dart", url: "https://dart.dev/language/variables" },
        ],
        practice: "Declare variables for a person's profile using various types. Experiment with 'var' vs 'dynamic'.",
      },
      {
        what: "Control Flow (If/Else, Switch)",
        why: "Logic allows your program to make decisions and branching paths.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Flow Statements", url: "https://dart.dev/language/control-flow" },
        ],
        practice: "Write a program that determines if a number is even or odd, and a switch statement for day-of-week selection.",
      },
      {
        what: "Loops (For, While, Do-While)",
        why: "Iteration is essential for processing lists and repeating tasks.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Loops in Dart", url: "https://www.tutorialspoint.com/dart_programming/dart_programming_loops.htm" },
        ],
        practice: "Write a loop that prints the first 10 numbers of the Fibonacci sequence.",
      },
      {
        what: "Functions & Arrow Syntax",
        why: "Functions group logic into reusable blocks. Dart's concise arrow syntax makes code cleaner.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Functions in Dart", url: "https://dart.dev/language/functions" },
        ],
        practice: "Create functions for basic math operations. Rewrite them using => arrow syntax.",
      },
      {
        what: "Collections: Lists & Sets",
        why: "Apps manage groups of data constantly. Lists are ordered, Sets are unique.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Dart Collections Guide", url: "https://dart.dev/language/collections" },
        ],
        practice: "Create a list of strings and practice adding, removing, and sorting items.",
      },
      {
        what: "Maps (Key-Value Pairs)",
        why: "Maps are crucial for handling JSON-like data and structured information.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Maps in Dart", url: "https://dart.dev/language/collections#maps" },
        ],
        practice: "Create a Map representing a book (title, author, year). Practice updating values.",
      },
      {
        what: "Sound Null Safety Basics",
        why: "Dart's null safety prevents the most common runtime crashes (NullPointerExceptions).",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Null Safety in Dart", url: "https://dart.dev/null-safety" },
          { name: "Understanding Null Safety (YouTube)", url: "https://www.youtube.com/watch?v=iYhIT_dPrjg" },
        ],
        practice: "Practice declaring nullable vs non-nullable variables. Use '?' and '!' operators correctly.",
      },
    ],
  },
  {
    title: "Intermediate Stage: OOP & Asynchronous Dart",
    level: "Intermediate",
    steps: [
      {
        what: "Classes & Objects",
        why: "OOP is the primary paradigm for Dart and Flutter. Master classes, properties, and methods.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Classes in Dart", url: "https://dart.dev/language/classes" },
        ],
        practice: "Create a 'BankAccount' class with balance management methods.",
      },
      {
        what: "Named & Redirecting Constructors",
        why: "Dart constructors are flexible. Named constructors provide clarity when creating objects.",
        time: "4 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Constructors Guide", url: "https://dart.dev/language/constructors" },
        ],
        practice: "Add multiple named constructors to your class (e.g., fromJson, initialBalance).",
      },
      {
        what: "Inheritance & Mixins",
        why: "Reuse code and share behavior across class hierarchies using mixins.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Inheritance & Mixins", url: "https://dart.dev/language/mixins" },
        ],
        practice: "Implement a 'Logger' mixin and apply it to various classes.",
      },
      {
        what: "Abstract Classes & Interfaces",
        why: "Define contracts for your code to follow, essential for large-scale architecture.",
        time: "5 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Abstract Classes", url: "https://dart.dev/language/class-modifiers#abstract" },
        ],
        practice: "Create a 'Shape' abstract class and implement 'Circle' and 'Square' subclasses.",
      },
      {
        what: "Asynchronous Programming: Futures",
        why: "Handle time-consuming tasks like network calls or file reading without blocking the app.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Asynchronous Programming: Futures", url: "https://dart.dev/codelabs/async-await" },
        ],
        practice: "Write a function that simulates a network request using Future.delayed and prints the result.",
      },
      {
        what: "Error Handling (Try-Catch-Finally)",
        why: "Build robust applications that don't crash when errors occur.",
        time: "3 Days",
        prereqs: "Step 13",
        resources: [
          { name: "Error Handling in Dart", url: "https://dart.dev/language/error-handling" },
        ],
        practice: "Wrap a math function in try-catch to handle division by zero errors.",
      },
      {
        what: "Generics",
        why: "Write reusable code that can work with any data type safely.",
        time: "5 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Generics in Dart", url: "https://dart.dev/language/generics" },
        ],
        practice: "Implement a generic 'Box' class that can hold any type of content.",
      },
      {
        what: "Packages & Pubspec.yaml",
        why: "Leverage thousands of open-source libraries to speed up development.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Dart Packages", url: "https://dart.dev/guides/packages" },
          { name: "Pub.dev Site", url: "https://pub.dev/" },
        ],
        practice: "Add a package (like 'http') to a local project and use it to make a request.",
      },
    ],
  },
  {
    title: "Advanced Stage: Specialized & High Performance",
    level: "Advanced",
    steps: [
      {
        what: "Streams & Reactive Programming",
        why: "Handle continuous streams of data (like user clicks or real-time database updates).",
        time: "2 Weeks",
        prereqs: "Step 13",
        resources: [
          { name: "Streams in Dart", url: "https://dart.dev/tutorials/language/streams" },
        ],
        practice: "Build a simple countdown timer using a Stream that emits values every second.",
      },
      {
        what: "Isolates & Multithreading",
        why: "Perform heavy computations on separate threads to keep your UI responsive.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Concurrency in Dart: Isolates", url: "https://dart.dev/language/concurrency" },
        ],
        practice: "Spawn an isolate to calculate a large prime number without blocking the main event loop.",
      },
      {
        what: "FFI (Foreign Function Interface)",
        why: "Call existing C/C++ libraries from your Dart code for maximum performance.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "C Interop with Dart FFI", url: "https://dart.dev/guides/libraries/c-interop" },
        ],
        practice: "Research how to link a simple C function to a Dart console app.",
      },
      {
        what: "Late & Required Keywords",
        why: "Advanced null safety patterns for lazy initialization and mandatory constructor parameters.",
        time: "4 Days",
        prereqs: "Step 8, Step 10",
        resources: [
          { name: "Late Variables", url: "https://dart.dev/language/variables#late-variables" },
        ],
        practice: "Refactor a class to use 'late' for a property that is initialized in a method after creation.",
      },
      {
        what: "Dart for Backend (Shelf / Dart Frog)",
        why: "Use the same language for both frontend and backend, sharing logic and models.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Dart Frog Documentation", url: "https://dartfrog.vgv.dev/" },
          { name: "Shelf Package", url: "https://pub.dev/packages/shelf" },
        ],
        practice: "Build a simple REST API that serves JSON data from an in-memory list.",
      },
      {
         what: "Functional Programming (Closures)",
        why: "Write expressive code using higher-order functions and lexically scoped closures.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Lexical Closures", url: "https://dart.dev/language/functions#lexical-closures" },
        ],
        practice: "Write a function factory that returns custom multiplier functions.",
      },
      {
        what: "Code Generation (Build Runner)",
        why: "Automate repetitive tasks like JSON serialization and dependency injection using code generation.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "JSON Serializable", url: "https://pub.dev/packages/json_serializable" },
        ],
        practice: "Set up build_runner and json_serializable to automate fromJson/toJson methods for a data class.",
      },
      {
        what: "Unit & Integration Testing",
        why: "Ensure your code is reliable and doesn't break during refactoring. Professional code must have tests.",
        time: "1 Week",
        prereqs: "All stages",
        resources: [
          { name: "Testing Dart Apps", url: "https://dart.dev/guides/testing" },
        ],
        practice: "Write unit tests for your bank account class using the 'test' package.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Password Generator", teaches: "Random, Lists, Strings, CLI input.", tech: "Dart Console" },
  { level: "Beginner", title: "Simple Task Manager", teaches: "CRUD operations on a Map, terminal interaction.", tech: "Dart Console" },
  { level: "Beginner", title: "Currency Converter", teaches: "Basic math, type conversion, functions.", tech: "Dart Console" },
  { level: "Intermediate", title: "Weather CLI", teaches: "HTTP requests, JSON parsing, Async/Await.", tech: "Dart, 'http' package" },
  { level: "Intermediate", title: "Personal Budget Tracker", teaches: "OOP, Classes, File I/O, Error handling.", tech: "Dart Console" },
  { level: "Intermediate", title: "Recursive File Search", teaches: "Recursion, File System Access (dart:io).", tech: "Dart Console" },
  { level: "Intermediate", title: "Quiz Master", teaches: "Structured data (JSON), State logic, Collections.", tech: "Dart Console" },
  { level: "Advanced", title: "REST API Backend", teaches: "Routing, Middlewares, Database integration.", tech: "Dart Frog / Shelf" },
  { level: "Advanced", title: "Multi-threaded Data Processor", teaches: "Isolates, Streams, Parallel processing.", tech: "Dart Console" },
  { level: "Advanced", title: "Reactive Chat Prototype", teaches: "WebSockets, Streams, real-time events.", tech: "Dart, WebSockets" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Intensive plan for developers with prior OOP experience (Java/C#).",
    schedule: [
      "Days 1-7: Dart Basics, Null Safety, and Functions.",
      "Days 8-15: Intermediate OOP, Mixins, and Collections.",
      "Days 16-23: Async programming (Futures) and JSON parsing.",
      "Days 24-30: Build a CLI Weather app and explore Testing.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced pace for solid foundation and project building.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Functional features, OOP patterns, and Async deep dive.",
      "Days 46-60: Build 2 intermediate projects and learn Packages.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional Dart/Flutter readiness.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate fundamentals.",
      "Days 31-60: Advanced Concurrency (Isolates), Streams, and Reactive logic.",
      "Days 61-90: Backend dev, Performance tuning, and final advanced project.",
    ]
  }
];

const interviewTopics = [
  "What is Sound Null Safety and how does it work?",
  "Difference between final, const, and var.",
  "How do Futures and Streams differ?",
  "What are Mixins and when should you use them over inheritance?",
  "Explain the difference between 'async' and 'async*' functions.",
  "How does Dart handle multithreading? (Isolates vs Threads).",
  "What is the 'late' keyword and what are its risks?",
  "Difference between a list and a set in Dart.",
  "Explain the event loop in Dart.",
  "What is an abstract class and how does it differ from an interface in Dart?",
];

const codingQuestions = [
  { question: "Reverse a string without using built-in helper functions.", topic: "String Manipulation" },
  { question: "Implement a function that returns a stream of numbers after a delay.", topic: "Streams" },
  { question: "Detect if a list has any duplicate entries efficiently.", topic: "Collections" },
  { question: "Merge two sorted lists into one sorted list.", topic: "Logic" },
];

const mcqs = [
  { question: "Which keyword is used to include a mixin in a class?", options: ["include", "with", "extends", "implements"], answer: "with" },
  { question: "What is the return type of an asynchronous function?", options: ["void", "dynamic", "Future", "Task"], answer: "Future" },
  { question: "Which operator is used for the Null-aware cascade?", options: ["?.", "!..", "?..", "..?"], answer: "?.." },
];

const mistakes = [
  "Ignoring Sound Null Safety by using '!' (bang operator) everywhere.",
  "Using 'var' when 'final' or 'const' would be safer and more efficient.",
  "Performing heavy logic inside the build method (in Flutter context) or blocking the event loop.",
  "Forgetting to handle error cases in Futures (using .catchError or try-catch).",
  "Not closing Streams, leading to memory leaks.",
  "Overusing 'dynamic', which bypasses type checking and leads to runtime errors.",
  "Confusing 'late' with lazy initialization; 'late' variables must still be initialized before access.",
  "Writing Java-style boilerplate instead of using Dart's concise features (like getters/setters).",
  "Ignoring the official 'lints' and styling guidelines (effective Dart).",
  "Not writing tests for business logic, relying only on manual testing.",
];

export default function DartRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Smartphone className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Dart Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering Dart, the client-optimized language for multi-platform applications.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to roadmaps
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
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs">{index + 1}</span>
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
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-primary"><Layout className="h-4 w-4"/> Practice Task:</h4>
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
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded">
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
            <CardDescription>Expert guidance to help you land your dream Dart/Flutter role.</CardDescription>
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
                    {['Dart', 'Null Safety', 'Flutter', 'Async/Await', 'Streams', 'Isolates', 'Mixins', 'REST APIs', 'Unit Testing', 'OOP', 'Ktor', 'Package Management'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Smartphone className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your choice of state management if applicable.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include clear tests to demonstrate code reliability.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Link to public Dart packages if you've authored any.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Hit the Bullseye with Dart</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Dart is a beautiful, modern language that makes development a joy. Whether you're aiming for Flutter, Web, or Backend, Dart gives you the speed and safety you need. Stay consistent, keep building, and remember that every expert was once a beginner.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2">
              <Link href="/playground">
                Try the Playground
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
