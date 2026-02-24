
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
  Layout,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Hack Foundations & Strict Mode",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Hack & HHVM Setup",
        why: "To set up the HipHop Virtual Machine (HHVM) and understand how Hack evolved from PHP to provide a faster, safer development experience.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Hack Official Documentation", url: "https://docs.hhvm.com/hack/" },
          { name: "HHVM Installation Guide", url: "https://docs.hhvm.com/hack/getting-started/getting-started" },
        ],
        practice: "Install HHVM. Create a 'hello.hack' file and run it using the HHVM CLI.",
      },
      {
        what: "Strict Mode & Type Annotations",
        why: "Hack's primary strength is its type system. Learning to write in 'Strict Mode' ensures catchable errors at compile-time.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Hack Type System Overview", url: "https://docs.hhvm.com/hack/types/introduction" },
        ],
        practice: "Write a script with '<<file: __Strict>>' and declare variables with explicit types (int, string, bool).",
      },
      {
        what: "Functions & Type Hinting",
        why: "To define clear contracts for your logic. Learn about parameter types and return type hints.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Functions in Hack", url: "https://docs.hhvm.com/hack/functions/introduction" },
        ],
        practice: "Create a math library where every function has strictly defined input and output types.",
      },
      {
        what: "Hack Collections (Vector, Map, Set)",
        why: "Standard PHP arrays are imprecise. Hack's Collections are specialized, efficient, and type-safe alternatives.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Hack Collections Guide", url: "https://docs.hhvm.com/hack/collections/introduction" },
        ],
        practice: "Build a program that manages a unique list of user IDs using a Set and a price lookup using a Map.",
      },
      {
        what: "Control Flow & Logic",
        why: "To handle branching and loops. Hack's control flow is similar to PHP but enforces stricter type checks in conditions.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Logic & Control Flow in Hack", url: "https://docs.hhvm.com/hack/expressions-and-operators/introduction" },
        ],
        practice: "Write a script that uses 'foreach' to iterate over a Vector and calculate statistics.",
      },
      {
        what: "Classes & Objects (The Hack Way)",
        why: "To structure data and logic. Hack classes remove legacy PHP ambiguities and provide better performance.",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Classes in Hack", url: "https://docs.hhvm.com/hack/classes/introduction" },
        ],
        practice: "Model a 'Product' class with private properties and public getters/setters.",
      },
      {
        what: "Interfaces & Abstract Classes",
        why: "To define architectural contracts that multiple classes can implement, essential for large-scale codebases.",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Interfaces & Abstraction", url: "https://docs.hhvm.com/hack/classes/interfaces" },
        ],
        practice: "Create a 'Logger' interface and implement it for 'FileLogger' and 'ConsoleLogger'.",
      },
      {
        what: "Nullable Types & Optionals",
        why: "To handle missing data safely without triggering runtime null pointer exceptions.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Nullable Types in Hack", url: "https://docs.hhvm.com/hack/types/nullable-types" },
        ],
        practice: "Write a function that takes a nullable string and provides a default value if it's null.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Async & Advanced Types",
    level: "Intermediate",
    steps: [
      {
        what: "Asynchronous Programming (Async/Await)",
        why: "The 'Killer Feature' of Hack. Perform high-performance I/O operations (like DB calls) without blocking the thread.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Async in Hack (Official)", url: "https://docs.hhvm.com/hack/async/introduction" },
          { name: "Async Design Patterns", url: "https://docs.hhvm.com/hack/async/design-patterns" },
        ],
        practice: "Write a function that fetches data from two different (simulated) APIs concurrently using 'await gen_concurrent(...)'.",
      },
      {
        what: "Generics",
        why: "To write reusable components that work with any type while maintaining total type safety.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Generics in Hack", url: "https://docs.hhvm.com/hack/generics/introduction" },
        ],
        practice: "Implement a generic 'Stack<T>' class that can hold integers, strings, or custom objects.",
      },
      {
        what: "Shapes & Tuples",
        why: "To model lightweight, structured data without the overhead of a full class. Shapes are perfect for API responses.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Shapes in Hack", url: "https://docs.hhvm.com/hack/shapes/introduction" },
        ],
        practice: "Define a Shape representing a User Profile and write a function that validates its fields.",
      },
      {
        what: "Enums & Reified Generics",
        why: "For safe, readable constant groups and advanced type checks that persist at runtime.",
        time: "5 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Enums in Hack", url: "https://docs.hhvm.com/hack/enums/introduction" },
        ],
        practice: "Create an enum for 'UserStatus' and use it in a class to manage account states.",
      },
      {
        what: "XHP: Safe UI Components",
        why: "XHP is Hack's unique way to embed XML-like syntax directly in code, preventing XSS vulnerabilities by design.",
        time: "1 Week",
        prereqs: "HTML Basics",
        resources: [
          { name: "XHP Guide", url: "https://docs.hhvm.com/hack/XHP/introduction" },
        ],
        practice: "Build a reusable UI button component using XHP that takes a label and a URL.",
      },
      {
        what: "Attributes & Metadata",
        why: "To add declarative data to your classes and functions, used by frameworks for routing and validation.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Hack Attributes", url: "https://docs.hhvm.com/hack/attributes/introduction" },
        ],
        practice: "Create a custom attribute '<<Memoize>>' and apply it to an expensive calculation function.",
      },
      {
        what: "Testing with HackTest",
        why: "To build reliable, production-ready systems. HackTest is the modern alternative to PHPUnit for the BEAM.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "HackTest Repository", url: "https://github.com/hhvm/hacktest" },
        ],
        practice: "Write a suite of unit tests for your generic Stack implementation.",
      },
      {
        what: "Working with HSL (Hack Standard Library)",
        why: "HSL is the modern, consistent library that replaces messy legacy PHP functions.",
        time: "5 Days",
        prereqs: "Beginner Stage",
        resources: [
          { name: "HSL Documentation", url: "https://github.com/hhvm/hsl" },
        ],
        practice: "Refactor a string manipulation script to use 'Str\\split' and 'Str\\join' from HSL.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & High Performance",
    level: "Advanced",
    steps: [
      {
        what: "HHVM Performance Tuning",
        why: "To run high-scale applications. Learn about JIT compilation, Repo Authoritative mode, and Proxygen.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "HHVM Performance Guide", url: "https://docs.hhvm.com/hhvm/configuration/performance" },
        ],
        practice: "Analyze the output of the HHVM profiler to find bottlenecks in a large calculation.",
      },
      {
        what: "Advanced Async: Data Access Layers",
        why: "To build 'batching' logic that automatically combines multiple database requests into one for extreme efficiency.",
        time: "2 Weeks",
        prereqs: "Step 9",
        resources: [
          { name: "Async Data Fetching Patterns", url: "https://docs.hhvm.com/hack/async/data-fetching" },
        ],
        practice: "Implement a basic data loader that batches requests for user objects by ID.",
      },
      {
        what: "Building Microservices with Hack",
        why: "Hack is designed for massive scale. Learn to architect services that communicate via gRPC or Thrift.",
        time: "2 Weeks",
        prereqs: "Networking Basics",
        resources: [
          { name: "Microservices with HHVM", url: "https://hhvm.com/blog/" },
        ],
        practice: "Design a high-level architecture for a service-oriented social media backend.",
      },
      {
        what: "Security Hardening in Hack",
        why: "To protect sensitive user data. Learn about Taint Analysis and secure XHP practices.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Security in Hack", url: "https://docs.hhvm.com/hack/XHP/introduction#security" },
        ],
        practice: "Audit an XHP component to ensure no raw unsanitized user input is rendered.",
      },
      {
        what: "Custom Hack Frameworks",
        why: "To understand the internals of how systems like 'HackRouter' and 'Hack-XHP-Bootstrap' work.",
        time: "2 Weeks",
        prereqs: "All Intermediate steps",
        resources: [],
        practice: "Build a tiny MVC framework that uses Attributes for routing.",
      },
      {
        what: "Native Interop (C++)",
        why: "When performance requires moving beyond the VM. Call high-speed C++ logic from your Hack code.",
        time: "1 Week",
        prereqs: "C++ Basics",
        resources: [
          { name: "HHVM Extension API", url: "https://docs.hhvm.com/hhvm/extensions/introduction" },
        ],
        practice: "Write a simple C++ extension that performs a fast math operation and expose it to Hack.",
      },
      {
        what: "Deployment & Dockerization",
        why: "To ship your code reliably. Master multi-stage Docker builds for HHVM applications.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Official HHVM Docker Image", url: "https://hub.docker.com/r/hhvm/hhvm" },
        ],
        practice: "Create a Dockerfile that packages an HHVM web server and an XHP-based frontend.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Async logic, XHP safety, and high-scale architecture into a single app.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Real-time Analytics Dashboard' that fetches data asynchronously and renders it using XHP components.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Employee Directory", teaches: "Strict mode, Collections, and basic File I/O.", tech: "Hack, HHVM" },
  { level: "Beginner", title: "Unit Converter Library", teaches: "Functions, type hinting, and unit testing.", tech: "Hack, HackTest" },
  { level: "Beginner", title: "Simple Math Evaluator", teaches: "Logic flow and Enums.", tech: "Hack" },
  { level: "Intermediate", title: "XHP-based Static Site Generator", teaches: "XHP, File system, and Strings.", tech: "Hack, XHP" },
  { level: "Intermediate", title: "Async Web Scraper", teaches: "Async/Await and Networking.", tech: "Hack, HSL" },
  { level: "Intermediate", title: "Database Schema Manager", teaches: "Generics and SQL interop.", tech: "Hack, MySQL" },
  { level: "Intermediate", title: "RESTful Task API", teaches: "Routing, JSON Shapes, and Attributes.", tech: "Hack, HackRouter" },
  { level: "Advanced", title: "Real-time Message Broker", teaches: "WebSockets, Async data batching, and performance tuning.", tech: "Hack, Redis" },
  { level: "Advanced", title: "Custom ORM for Hack", teaches: "Metaprogramming, Attributes, and Generics.", tech: "Hack" },
  { level: "Advanced", title: "High-scale Dashboard (Docker)", teaches: "Full-stack integration, Docker, and CI/CD.", tech: "Hack, XHP, Docker" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Web Builder",
    description: "Focus on syntax, strict mode, and XHP to build functional web pages quickly.",
    schedule: [
      "Days 1-7: Installation, Basic Types, and Strict Mode.",
      "Days 8-15: Functions, Collections, and basic Classes.",
      "Days 16-23: Introduction to XHP and UI building.",
      "Days 24-30: Build 2 beginner projects and learn basic Git.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Full-Stack Dev",
    description: "Balanced path covering Async programming and database integration.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Async/Await, Networking, and HSL mastery.",
      "Days 41-60: Database interaction, Shapes, and 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Architect",
    description: "Comprehensive path for professional high-scale engineering and deployment.",
    schedule: [
      "Days 1-30: Core Development & Functional logic.",
      "Days 31-60: Professional Systems (Testing, Performance, Security).",
      "Days 61-90: Generics, Advanced Async, Docker, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Strict Mode vs. Partial Mode in Hack.",
  "Why is XHP safer than standard string concatenation?",
  "Explain Async/Await and the underlying event loop.",
  "How do Hack Collections differ from PHP Arrays?",
  "What are Shapes and why use them over Classes?",
  "Describe Generics and Type Erasure in the context of the JVM/BEAM vs HHVM.",
  "How does Hack handle Null safety?",
  "What is the purpose of the HSL (Hack Standard Library)?",
  "Explain the '<<file: __Strict>>' pragma.",
  "How does HHVM's JIT compiler improve performance?",
];

const codingQuestions = [
  { question: "Implement a generic function to reverse a Vector.", topic: "Generics" },
  { question: "Write an async function that fetches two values and returns their sum.", topic: "Async" },
  { question: "Create an XHP component that renders a list of items.", topic: "XHP" },
  { question: "Implement a frequency counter for a string using a Map.", topic: "Collections" },
];

const mcqs = [
  { question: "Which pragma is required for full type checking?", options: ["__Partial", "__Strict", "__Full", "__Checked"], answer: "__Strict" },
  { question: "What is the result of '1 + \"2\"' in Hack strict mode?", options: ["3", "\"12\"", "Runtime Error", "Type-check Error"], answer: "Type-check-time Error" },
  { question: "Which feature protects against XSS automatically?", options: ["PDO", "Async", "XHP", "HSL"], answer: "XHP" },
];

const mistakes = [
  "Staying in 'Partial' mode: You lose 90% of the benefits of Hack.",
  "Treating Hack like PHP: Don't use legacy array() when Vector/Map is available.",
  "Ignoring the Logger: The type-checker output is your best friend—read it carefully.",
  "Blocking inside Async: Never use a non-async I/O call inside an async function.",
  "Over-using Classes: Shapes are much more efficient for simple data structures.",
  "Tutorial Hell: Reading about HHVM without writing code in the shell.",
  "Neglecting HSL: Don't use legacy string/math functions; use the new namespaced ones.",
  "Forgetting to 'await': Calling an async function without await returns an Awaitable object, not the result.",
  "Manual XSS prevention: Using raw echo instead of XHP components.",
  "Ignoring tests: Large type-safe systems still need logic verification.",
];

export default function HackRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Globe className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Hack Programming Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language of the modern social web. From safe, statically-typed foundations to high-performance async architectures and secure XHP components.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Web Development Languages">
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
            <CardDescription>Expert guidance to help you land your dream web engineering role at companies using HHVM.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Logic & Type Challenges</h3>
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
                    {['Hack', 'HHVM', 'Static Typing', 'Async/Await', 'XHP', 'HSL', 'Generics', 'Shapes', 'Attributes', 'Unit Testing', 'Meta-Programming', 'High-Scale Architecture'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Safety by Design' using XHP.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include benchmark results for any async batching logic you've built.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Link to public Hack libraries or XHP components on GitHub.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Web of Tomorrow</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Hack is more than just a language; it's a testament to how established systems can evolve for safety and scale. By mastering Hack, you're learning the tools that power one of the largest platforms on earth. Stay consistent, trust the type-checker, and remember: Every great engineer starts with a single line of strict code. Your journey starts now!
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
