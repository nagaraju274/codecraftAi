
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
  Gamepad2,
  Settings,
  HardDrive,
  Box,
  Binary,
  Layers3,
  Flame,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Haxe Foundations & Syntax",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Haxe Toolkit Setup",
        why: "To set up the compiler and 'haxelib', the package manager. Understanding the ecosystem is the first step to cross-platform dev.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Haxe.org - Getting Started", url: "https://haxe.org/documentation/introduction/getting-started.html" },
          { name: "Haxe Tutorial for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=look-up-haxe-intro" },
        ],
        practice: "Install Haxe. Create a 'Main.hx' file and run 'haxe --interp' to see 'Hello World' in the terminal.",
      },
      {
        what: "Variables, Types & Final",
        why: "Haxe is strictly typed but has excellent type inference. Learning 'var' vs 'final' is core to state management.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Haxe Types Documentation", url: "https://haxe.org/manual/types.html" },
        ],
        practice: "Declare variables for a game character (name, health, power). Use explicit type annotations.",
      },
      {
        what: "Control Flow: if, switch & match",
        why: "To manage logic branching. Haxe's 'switch' statement is powerful and supports pattern matching.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Logic & Control Flow", url: "https://haxe.org/manual/expression-control-flow.html" },
        ],
        practice: "Write a script that categorizes a player's rank based on their high score using a switch statement.",
      },
      {
        what: "Functions & Arrow Syntax",
        why: "Functions are the building blocks of reusable logic. Haxe supports high-level arrow function syntax.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Functions in Haxe", url: "https://haxe.org/manual/types-function.html" },
        ],
        practice: "Create a library of math functions and use an arrow function to sort a list of numbers.",
      },
      {
        what: "Anonymous Structures (Structs)",
        why: "Haxe allows you to define object shapes on-the-fly, which is highly efficient for data transport.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Anonymous Structures Guide", url: "https://haxe.org/manual/types-anonymous-structure.html" },
        ],
        practice: "Define a 'Point' structure with x and y coordinates and write a function that takes it as a parameter.",
      },
      {
        what: "Arrays & Maps",
        why: "To manage collections of data. Maps are essential for key-value lookups like inventories or settings.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Haxe Collections", url: "https://haxe.org/manual/std-Array.html" },
        ],
        practice: "Create a Map representing an inventory where item names are keys and quantities are values.",
      },
      {
        what: "Classes & Interfaces",
        why: "Haxe is a pure OOP language. Mastering class structures, constructors, and implementation is vital.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Classes & Objects", url: "https://haxe.org/manual/types-class-instance.html" },
        ],
        practice: "Model a 'Vehicle' class and implement it in 'Car' and 'Bicycle' classes using an interface.",
      },
      {
        what: "Static Extensions",
        why: "One of Haxe's coolest features. It allows you to 'add' methods to existing classes without inheritance.",
        time: "3 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Static Extensions Guide", url: "https://haxe.org/manual/lf-static-extension.html" },
        ],
        practice: "Write a 'StringExtensions' class that adds a '.capitalize()' method to every string in your project.",
      },
      {
        what: "Compiling to Targets (JS/C++)",
        why: "The main benefit of Haxe. Learn to output your code to different platforms using '.hxml' build files.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Haxe Compiler Targets", url: "https://haxe.org/documentation/introduction/compiler-targets.html" },
        ],
        practice: "Create a build.hxml file that compiles your code to both a JavaScript file and a C++ executable.",
      },
      {
        what: "Haxelib: Managing Libraries",
        why: "To use community tools. Learn to install, remove, and manage library versions.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Haxelib Usage", url: "https://haxe.org/manual/haxelib.html" },
        ],
        practice: "Install the 'tink_core' or 'thx.core' library and use one of its functions in a script.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Power Features & Game Dev",
    level: "Intermediate",
    steps: [
      {
        what: "Enums & Pattern Matching Deep Dive",
        why: "Haxe enums are algebraic data types. Pattern matching on them is the cleanest way to handle complex state.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Enum Pattern Matching", url: "https://haxe.org/manual/lf-pattern-matching.html" },
        ],
        practice: "Model a 'GameState' enum (Loading, Playing, Paused) and use 'switch' to handle transitions.",
      },
      {
        what: "Abstract Types",
        why: "To create 'Zero-cost' abstractions. Abstracts allow you to wrap existing types with new behavior without runtime overhead.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Abstract Types Explained", url: "https://haxe.org/manual/types-abstract.html" },
        ],
        practice: "Create a 'Color' abstract that wraps an Integer and provides 'red', 'green', and 'blue' accessors.",
      },
      {
        what: "Generics",
        why: "To write reusable code that can work with any data type while maintaining total type safety.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Generics in Haxe", url: "https://haxe.org/manual/type-system-generics.html" },
        ],
        practice: "Implement a generic 'Stack<T>' data structure.",
      },
      {
        what: "Metadata (@:)",
        why: "To give instructions to the compiler or external tools. Essential for libraries like OpenFL or Heaps.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Metadata List", url: "https://haxe.org/manual/lf-metadata.html" },
        ],
        practice: "Use the '@:expose' metadata to make a Haxe class accessible from raw JavaScript.",
      },
      {
        what: "Dynamic & Type Reflection",
        why: "Sometimes you need flexibility. Learn to use 'Dynamic' and the 'Reflect' class for runtime inspection.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Reflection in Haxe", url: "https://haxe.org/manual/std-reflection.html" },
        ],
        practice: "Write a function that loops through all fields of an object at runtime and prints their values.",
      },
      {
        what: "Intro to Heaps or OpenFL (2D Graphics)",
        why: "Haxe is famous for games. Heaps (used for Dead Cells) or OpenFL (Flash-like) are the standard frameworks.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Heaps.io - Getting Started", url: "https://heaps.io/documentation/hello-hashlink.html" },
          { name: "OpenFL Basics", url: "https://www.openfl.org/learn/docs/introduction/" },
        ],
        practice: "Install Heaps. Create a window and render a moving square that bounces off the edges.",
      },
      {
        what: "Error Handling: Exceptions",
        why: "To build robust applications that can recover from runtime failures gracefully.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Haxe Exceptions", url: "https://haxe.org/manual/lf-condition-handling.html" },
        ],
        practice: "Wrap a JSON parsing call in a try-catch block and handle the error message.",
      },
      {
        what: "Conditional Compilation (#if)",
        why: "To write code that only compiles for specific targets (e.g., C++ only logic vs JS only logic).",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Conditional Compilation", url: "https://haxe.org/manual/lf-condition-compilation.html" },
        ],
        practice: "Write a module that prints 'Running on Browser' for JS and 'Running on Native' for C++.",
      },
      {
        what: "The Standard Library (haxe.*)",
        why: "To avoid reinventing the wheel. Master Math, Json, Http, and Crypto modules.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Haxe API Reference", url: "https://api.haxe.org/" },
        ],
        practice: "Build a tool that fetches a JSON file from a URL and converts it into a list of objects.",
      },
      {
        what: "Unit Testing (UTest or HaxeUnit)",
        why: "Professional cross-platform code needs verification. Learn to write suites that run on all targets.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "UTest Documentation", url: "https://github.com/haxe-utest/utest" },
        ],
        practice: "Write unit tests for your generic Stack class.",
      },
    ],
  },
  {
    title: "Advanced Stage: Macros & Architecture",
    level: "Advanced",
    steps: [
      {
        what: "Macro Basics (Expr)",
        why: "Haxe's ultimate power. Macros allow you to change the language and generate code at compile-time.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Haxe Macros Guide", url: "https://haxe.org/manual/macro.html" },
          { name: "Macro Playground (YouTube)", url: "https://www.youtube.com/watch?v=look-up-haxe-macros" },
        ],
        practice: "Write a macro that prints the current compile time into your application binary.",
      },
      {
        what: "Build Macros (@:build)",
        why: "To automatically generate fields, methods, or interfaces for classes based on metadata or files.",
        time: "2 Weeks",
        prereqs: "Step 21",
        resources: [
          { name: "Build Macros Overview", url: "https://haxe.org/manual/macro-type-building.html" },
        ],
        practice: "Create a build macro that automatically adds a 'toString' method to any class it is applied to.",
      },
      {
        what: "Advanced Interop (Externs)",
        why: "To use raw C++ or JS libraries within Haxe with zero performance overhead.",
        time: "1 Week",
        prereqs: "C++ or JS Basics",
        resources: [
          { name: "Haxe Externs Guide", url: "https://haxe.org/manual/target-javascript-externs.html" },
        ],
        practice: "Write an extern for a simple JavaScript library (like Toastr) and use it in a Haxe-JS project.",
      },
      {
        what: "Memory Management & HXC++",
        why: "To optimize native performance. Learn how Haxe handles garbage collection on native targets.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "HXC++ Memory Management", url: "https://haxe.org/manual/target-cpp.html" },
        ],
        practice: "Identify a memory leak in a large loop and optimize it using better object recycling.",
      },
      {
        what: "Concurrency: The Main Loop",
        why: "Haxe is primarily single-threaded with an event loop. Learn to handle concurrent tasks safely.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Haxe MainLoop", url: "https://api.haxe.org/haxe/MainLoop.html" },
        ],
        practice: "Build a task scheduler that runs a low-priority job during 'idle' time.",
      },
      {
        what: "Serialization & Data Protocol",
        why: "To save game states or sync data across networks efficiently.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Haxe Serialization", url: "https://haxe.org/manual/std-serialization.html" },
        ],
        practice: "Use 'haxe.Serializer' to save a complex object tree to a file and 'Unserializer' to load it.",
      },
      {
        what: "Performance Profiling",
        why: "To find bottlenecks in games. Learn to use target-specific profilers (Chrome DevTools for JS, GDB for C++).",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Haxe Apps", url: "https://haxe.org/manual/debugging.html" },
        ],
        practice: "Profile a heavy graphics project and optimize the slowest rendering function.",
      },
      {
        what: "Large-scale Architecture (HexMachina)",
        why: "To build enterprise-grade applications. Learn about Dependency Injection and MVC patterns in Haxe.",
        time: "2 Weeks",
        prereqs: "All Intermediate steps",
        resources: [
          { name: "HexMachina Framework", url: "https://hexmachina.org/" },
        ],
        practice: "Research the MVC pattern and how it applies to large cross-platform codebases.",
      },
      {
        what: "CI/CD for Multi-target Projects",
        why: "To automate the build process for 5+ targets every time you push code.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "GitHub Actions for Haxe", url: "https://github.com/marketplace/actions/setup-haxe" },
        ],
        practice: "Set up a GitHub Action that compiles your project for both JS and C++ on every commit.",
      },
      {
        what: "Final Mastery Project: The Multi-Target Suite",
        why: "To synthesize all skills: Macros, Interop, UI, and Automation.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Cross-platform Inventory Manager' that runs as a web app (JS) and a high-perf desktop app (C++).",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Word Frequency Tool", teaches: "File I/O, Strings, and Maps.", tech: "Haxe Standard Library" },
  { level: "Beginner", title: "Number Guessing Game", teaches: "Input/Output, Loops, and Logic.", tech: "Haxe" },
  { level: "Beginner", title: "Unit Converter (Library)", teaches: "Static extensions and basic math.", tech: "Haxe" },
  { level: "Intermediate", title: "2D Space Shooter", teaches: "Heaps/OpenFL, Game loops, and Signals.", tech: "Haxe, Heaps.io" },
  { level: "Intermediate", title: "Web Scraper (Node.js)", teaches: "Async I/O, JSON, and target interop.", tech: "Haxe, JS/Node target" },
  { level: "Intermediate", title: "SQLite Contact Manager", teaches: "Database interaction and Abstracts.", tech: "Haxe, SQLite" },
  { level: "Intermediate", title: "Automated JSON Schema Validator", teaches: "Reflection and Serialization.", tech: "Haxe" },
  { level: "Advanced", title: "Custom UI Framework (Macro-based)", teaches: "Advanced Macros and code generation.", tech: "Haxe Macros" },
  { level: "Advanced", title: "Multi-platform Music Player", teaches: "Native interop, FFI, and complex UI.", tech: "Haxe, C++, OpenFL" },
  { level: "Advanced", title: "Real-time Multiplayer Lobby", teaches: "WebSockets, high-scale architecture, and sync.", tech: "Haxe, Node.js/C++" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Indie Jammer",
    description: "Focus on syntax and game engine basics to start building prototypes quickly.",
    schedule: [
      "Days 1-7: Haxe Syntax, Setup, and Basic Types.",
      "Days 8-15: Classes, Interfaces, and Collections.",
      "Days 16-23: Intro to Heaps/OpenFL and 2D graphics.",
      "Days 24-30: Build and publish a small 2D game prototype.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Cross-Platform Dev",
    description: "Balanced path for building robust applications across web and native.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Abstracts, Generics, Networking, and Haxelib.",
      "Days 46-60: Conditional Compilation and building a full web API.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Architect",
    description: "Comprehensive path for professional systems and high-performance game engineering.",
    schedule: [
      "Days 1-30: Core Engine & Scripting foundations.",
      "Days 31-60: Advanced logic: Macros, FFI, and Testing.",
      "Days 61-90: Performance Tuning, CI/CD, and a massive capstone project.",
    ]
  }
];

const interviewTopics = [
  "How does Haxe achieve its cross-platform capability?",
  "Explain Abstract Types vs. Classes in Haxe.",
  "What are Haxe Macros and how do they benefit large projects?",
  "Difference between 'Dynamic' and 'Any' types.",
  "Explain Static Extensions and provide a use case.",
  "Describe the Haxe build process using '.hxml' files.",
  "How does Haxe handle memory management on native targets (C++)?",
  "What is Conditional Compilation and how is it used?",
  "Explain the difference between a Struct and a Map in Haxe.",
  "How do you interface Haxe with existing C++ or JS code?",
];

const codingQuestions = [
  { question: "Implement a generic Stack class using an Array.", topic: "Generics" },
  { question: "Write an abstract type that wraps an Int to represent Degrees (0-360).", topic: "Abstracts" },
  { question: "Write a recursive function to find the depth of a tree structure.", topic: "Recursion" },
  { question: "Create a macro that automatically generates a unique ID for a class.", topic: "Macros" },
];

const mcqs = [
  { question: "Which command runs a Haxe script directly through interpretation?", options: ["haxe --run", "haxe --interp", "haxe execute", "haxe start"], answer: "haxe --interp" },
  { question: "Which target is best for high-performance desktop games in Haxe?", options: ["JavaScript", "C++ (hxcpp)", "Python", "PHP"], answer: "C++ (hxcpp)" },
  { question: "Which metadata is used to prevent code from being removed by dead code elimination?", options: ["@:keep", "@:active", "@:save", "@:static"], answer: "@:keep" },
];

const mistakes = [
  "Not using 'final' for immutable variables, leading to state bugs.",
  "Ignoring abstracts: Using regular classes for simple wrappers adds unnecessary overhead.",
  "Tutorial Hell: Reading about macros for weeks without writing basic logic.",
  "Mixing target-specific code without #if, causing compile errors on other targets.",
  "Forgetting the shebang or entry point in CLI scripts.",
  "Ignoring the compiler warnings: Haxe is very good at catching potential nulls.",
  "Over-using Dynamic: It bypasses type safety and kills performance.",
  "Not using 'haxe --interp' for quick logic testing.",
  "Hardcoding paths instead of using the project-relative structure.",
  "Neglecting the built-in unit testing frameworks for cross-platform logic.",
];

export default function HaxeRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Gamepad2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Haxe Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most versatile language in existence. From absolute foundations to advanced metaprogramming, cross-platform system engineering, and world-class game development.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Game Development Languages">
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
            <CardDescription>Pick a timeline that matches your availability and goals.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Haxe or Game development role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding & Logic Challenges</h3>
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
              <h3 className="font-bold text-xl text-center">Resume & Profile Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers3 className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Haxe', 'Hxcpp', 'Macros', 'Abstracts', 'Generics', 'Multi-target', 'OpenFL', 'Heaps.io', 'Externs', 'Static Extensions', 'Pattern Matching', 'GObject', 'Unit Testing'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight the 'Cross-platform' nature of your projects.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase macro-powered optimizations in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Link to playable web demos and downloadable native binaries.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build Everywhere. Code with Elegance.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Haxe is the ultimate tool for developers who refuse to be boxed into a single platform. It rewards the curious, the architects, and the game creators. Stay consistent, read the manual (it's a hidden gem!), and remember: The greatest multi-platform hits were built on the foundations you're learning today. Your journey to Haxe mastery starts now!
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
