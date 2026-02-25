
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
  Braces,
  BoxSelect,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Functional Foundations & The REPL",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Clojure & Leiningen Setup",
        why: "To set up the Java Virtual Machine (JVM) and 'Leiningen', the standard build tool. Understanding Clojure's Lisp roots is the first step to functional thinking.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Clojure.org - Getting Started", url: "https://clojure.org/guides/getting_started" },
          { name: "Leiningen Official Guide", url: "https://leiningen.org/" },
        ],
        practice: "Install the Clojure CLI and Leiningen. Run 'lein repl' and perform basic math. Print 'Hello, Clojure!'.",
      },
      {
        what: "The REPL-Driven Development Workflow",
        why: "Clojure isn't written in files alone; it's grown in the REPL. Mastering the 'Evaluate' loop is the single most important habit for a Clojurian.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Clojure REPL Guide", url: "https://clojure.org/guides/repl/introduction" },
          { name: "REPL Driven Development (YouTube)", url: "https://www.youtube.com/watch?v=gIilsomZ-ik" },
        ],
        practice: "Connect VS Code (with Calva) or IntelliJ (with Cursive) to a running REPL session. Evaluate code directly from your editor.",
      },
      {
        what: "S-Expressions & Prefix Notation",
        why: "Everything in Clojure is an S-expression (list). Mastering the (operator operand1 operand2) syntax is required to read any code.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Clojure for the Brave and True: Syntax", url: "https://www.braveclojure.com/do-things/#1_Syntax" },
        ],
        practice: "Convert 10 complex mathematical formulas from standard infix notation to Clojure prefix notation.",
      },
      {
        what: "Core Data Types: Scalar & Literal",
        why: "To manage basic data. Master Strings, Numbers, Keywords (:key), and Symbols (name). Keywords are vital for map lookups.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Clojure Data Structures", url: "https://clojure.org/reference/data_structures" },
        ],
        practice: "Practice defining large maps using keywords and symbols. Experiment with different numeric precisions.",
      },
      {
        what: "Persistent Collections (Vectors & Maps)",
        why: "Clojure uses persistent data structures. They are immutable but efficient. You must master Vectors [] and Maps {}.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Clojure for the Brave and True: Data Structures", url: "https://www.braveclojure.com/do-things/#2_Data_Structures" },
        ],
        practice: "Build a nested data structure representing a 'User' with a name, age, and a list of hobbies (vector).",
      },
      {
        what: "Functions: defn & Anonymous Functions",
        why: "Functions are first-class citizens. Learning 'defn', 'fn', and the '#()' shorthand is the core of writing logic.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Defining Functions", url: "https://clojure.org/guides/learn/functions" },
        ],
        practice: "Write functions for area calculation. Rewrite them using anonymous function syntax.",
      },
      {
        what: "Immutability & The 'let' Binding",
        why: "Clojure variables never change. 'let' creates a local scope for values. This is the cornerstone of safe concurrency.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Values and Change: Clojure’s approach to Identity", url: "https://clojure.org/about/state" },
        ],
        practice: "Refactor a math procedure to use 'let' for intermediate, unchangeable calculations.",
      },
      {
        what: "Namespaces & Project Structure",
        why: "To organize large codebases. Understanding 'ns', ':require', and ':refer' is vital for modularity.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Clojure Namespaces", url: "https://clojure.org/reference/namespaces" },
        ],
        practice: "Create two separate files. Import a function from one into the other and call it correctly.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Functional Power & State",
    level: "Intermediate",
    steps: [
      {
        what: "Functional Programming (Map, Reduce, Filter)",
        why: "To write expressive code that processes data as streams. These are the workhorses of professional Clojure.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Map, Filter, and Reduce in Clojure", url: "https://www.braveclojure.com/core-functions-in-depth/" },
        ],
        practice: "Take a list of strings, filter out the ones shorter than 5 chars, and map them to uppercase.",
      },
      {
        what: "Destructuring (Positional & Map)",
        why: "To extract values from complex data structures elegantly. This is used extensively in function parameters.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Clojure Destructuring Guide", url: "https://clojure.org/guides/destructuring" },
        ],
        practice: "Write a function that accepts a 'User' map and extracts 'name' and 'city' directly in the parameter list.",
      },
      {
        what: "State Management: Atoms",
        why: "While data is immutable, apps need state. Atoms provide a safe way to manage shared, synchronous, mutable state.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Clojure Atoms", url: "https://clojure.org/reference/atoms" },
        ],
        practice: "Build a simple global counter using an Atom. Practice 'swap!' and 'reset!' functions.",
      },
      {
        what: "Sequences & Laziness",
        why: "Clojure sequences are lazy. This allows for processing infinite data and optimized processing chains.",
        time: "5 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Sequences in Clojure", url: "https://clojure.org/reference/sequences" },
        ],
        practice: "Create an infinite sequence of prime numbers and use 'take 10' to view only the first few.",
      },
      {
        what: "Polymorphism: Protocols & Multimethods",
        why: "To define common interfaces. Protocols provide high-performance polymorphism; Multimethods provide flexible dispatch.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Protocols and Records", url: "https://clojure.org/reference/protocols" },
        ],
        practice: "Implement a 'Shape' protocol with a 'calculate-area' method for 'Circle' and 'Square' records.",
      },
      {
        what: "Testing with clojure.test",
        why: "Professional code requires verification. Clojure's built-in testing library is simple and effective.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Unit Testing in Clojure", url: "https://clojure.github.io/clojure/clojure.test-api.html" },
        ],
        practice: "Write unit tests for your math library, covering edge cases like division by zero.",
      },
      {
        what: "Working with JSON (Cheshire)",
        why: "To communicate with web APIs. Cheshire is the standard fast JSON library for Clojure.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Cheshire GitHub", url: "https://github.com/dakrone/cheshire" },
        ],
        practice: "Parse a complex JSON string into a Clojure map and extract specific keys.",
      },
      {
        what: "HTTP Clients (clj-http)",
        why: "To fetch data from the web. Learn to handle status codes, headers, and async requests.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "clj-http Tutorial", url: "https://github.com/dakrone/clj-http" },
        ],
        practice: "Fetch weather data from an API and print the current temperature to the console.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Metaprogramming",
    level: "Advanced",
    steps: [
      {
        what: "Macros: Code as Data (Homoiconicity)",
        why: "The 'Secret' of Lisp. Macros allow you to change the language by writing code that generates code at compile-time.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Clojure for the Brave and True: Macros", url: "https://www.braveclojure.com/writing-macros/" },
        ],
        practice: "Write a macro 'backwards' that evaluates code written in reverse order (e.g., (backwards (1 2 +))).",
      },
      {
        what: "Software Transactional Memory (STM)",
        why: "To handle complex, multi-object state changes atomically without manual locks. This is Clojure's unique concurrency feature.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Refs and Transactions", url: "https://clojure.org/reference/refs" },
        ],
        practice: "Simulate a bank transfer between two accounts using 'dosync' and 'alter'.",
      },
      {
        what: "Web Development: Ring & Compojure",
        why: "Ring is the standard Clojure web server library. Compojure provides an elegant routing DSL.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Ring Wiki", url: "https://github.com/ring-clojure/ring/wiki" },
          { name: "Compojure Tutorial", url: "https://github.com/weavejester/compojure/wiki" },
        ],
        practice: "Build a REST API that manages a task list with JSON endpoints.",
      },
      {
        what: "ClojureScript & Re-frame",
        why: "To build modern, reactive frontends using the same language as the backend. Re-frame is the gold standard for CLJS architecture.",
        time: "3 Weeks",
        prereqs: "React Basics",
        resources: [
          { name: "ClojureScript.org", url: "https://clojurescript.org/" },
          { name: "Re-frame Documentation", url: "https://day8.github.io/re-frame/re-frame/" },
        ],
        practice: "Build a single-page counter app with a custom UI using Re-frame and Reagent.",
      },
      {
        what: "Databases: Next.jdbc & HoneySQL",
        why: "To interact with relational databases. HoneySQL allows you to write SQL as Clojure data (maps/vectors).",
        time: "1 Week",
        prereqs: "SQL Basics",
        resources: [
          { name: "Next.jdbc Documentation", url: "https://github.com/seancorfield/next-jdbc" },
        ],
        practice: "Connect to an SQLite DB and perform a JOIN query using HoneySQL to map results to Clojure records.",
      },
      {
        what: "Clojure Spec",
        why: "To define data shapes and validate them. Spec replaces traditional 'types' with powerful runtime validation and data generation.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "clojure.spec Guide", url: "https://clojure.org/guides/spec" },
        ],
        practice: "Define a spec for a 'User' map and use it to validate incoming API data.",
      },
      {
        what: "Performance Profiling & Tuning",
        why: "To ensure your Clojure systems run at peak speed on the JVM. Learn about reflection warnings and type hints.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Clojure", url: "https://clojure.org/reference/optimization" },
        ],
        practice: "Identify a slow calculation and add type hints (^long, ^double) to increase execution speed.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Macros, Full-stack, Database, and State management.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Real-time Collaborative Whiteboard' with a Clojure backend (WebSockets) and a ClojureScript frontend.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Word Frequency Tool", teaches: "Slurp, Regex, and Map manipulation.", tech: "Clojure, Standard Lib" },
  { level: "Beginner", title: "Personal Budget CLI", teaches: "Immutability, Reducers, and I/O.", tech: "Clojure" },
  { level: "Beginner", title: "Number Guessing Game", teaches: "Atoms, Recursion, and User Input.", tech: "Clojure" },
  { level: "Intermediate", title: "Weather API Dashboard", teaches: "clj-http, JSON parsing, and async UI.", tech: "Clojure, Cheshire" },
  { level: "Intermediate", title: "Persistent Task Manager", teaches: "Next.jdbc, HoneySQL, and CRUD.", tech: "Clojure, PostgreSQL" },
  { level: "Intermediate", title: "Inventory Record System", teaches: "Protocols, Records, and testing.", tech: "Clojure, clojure.test" },
  { level: "Intermediate", title: "Markdown to HTML CLI", teaches: "Recursive data structures and string processing.", tech: "Clojure" },
  { level: "Advanced", title: "Full-stack SaaS Boilerplate", teaches: "Ring, Compojure, Re-frame, and Auth.", tech: "Clojure, ClojureScript" },
  { level: "Advanced", title: "Real-time Monitoring Engine", teaches: "WebSockets, STM, and high-perf State.", tech: "Clojure, Sente" },
  { level: "Advanced", title: "Custom Logic Macro Library", teaches: "Advanced Macros and DSL design.", tech: "Metaprogramming" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on syntax, the REPL, and functional thinking to master core Clojure logic.",
    schedule: [
      "Days 1-7: Installation, REPL, and S-Expressions.",
      "Days 8-15: Functional data processing (map/reduce).",
      "Days 16-23: Immutability and local state (let).",
      "Days 24-30: Build 2 beginner projects and learn basic Git.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Systems Dev",
    description: "Balanced path covering professional state management and web APIs.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Atoms, Refs, Networking, and JSON.",
      "Days 41-60: Web Servers (Ring), SQL, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Full-Stack Architect",
    description: "Comprehensive path for professional systems and frontend development.",
    schedule: [
      "Days 1-30: Core Development & Functional logic.",
      "Days 31-60: Professional Systems (Testing, Database, Macros).",
      "Days 61-90: ClojureScript, Re-frame, Performance, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between an Atom and a Ref?",
  "Explain Homoiconicity: Code as Data.",
  "How does Clojure handle Immutability internally? (Persistent Trees).",
  "Explain the difference between a Vector and a List in Clojure.",
  "What is the 'Double Dispatch' problem and how do Multimethods solve it?",
  "Describe the REPL-driven development workflow.",
  "What are Clojure Macros and when should you use them?",
  "Explain the role of the JVM in Clojure's performance.",
  "Difference between synchronous and asynchronous messaging in Clojure.",
  "How does 'clojure.spec' improve code robustness?",
];

const codingQuestions = [
  { question: "Write a function to reverse a list using recursion.", topic: "Recursion" },
  { question: "Implement a thread-safe global counter using an Atom.", topic: "State" },
  { question: "Flatten a nested list of lists manually using 'reduce'.", topic: "Functional" },
  { question: "Write a macro that implements an 'if-not' logic.", topic: "Macros" },
];

const mcqs = [
  { question: "Which symbol denotes a keyword in Clojure?", options: ["$", "@", ":", "#"], answer: ":" },
  { question: "What is the return value of '(first [])'?", options: ["nil", "[]", "0", "Runtime Error"], answer: "nil" },
  { question: "Which data structure provides O(1) random access?", options: ["List", "Vector", "Set", "None"], answer: "Vector" },
];

const mistakes = [
  "Treating Clojure like Java: Don't use mutable objects if possible.",
  "Ignoring the REPL: Writing too much code before testing it incrementally.",
  "Over-using Macros: They are hard to debug; use functions first.",
  "Forgetting 'recur' in recursion: This causes stack overflow on the JVM.",
  "Using Lists when you need Vectors (index access).",
  "Tutorial Hell: Reading 'Brave Clojure' without typing the code.",
  "Hardcoding paths: Use resources or project-relative directories.",
  "Ignoring Reflection Warnings: These kill JVM performance.",
  "Putting too much state in Atoms: Keep state localized.",
  "Ignoring 'nil' punning: Thinking nil is always an error.",
];

export default function ClojureRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Braces className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Clojure Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most sophisticated Lisp on the JVM. From absolute foundations of immutability and REPL-driven development to advanced macro-engineering, STM concurrency, and full-stack ClojureScript.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Enterprise / Backend / JVM Languages">
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
            <CardDescription>Expert guidance to help you land your dream Clojure or Backend role.</CardDescription>
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
                    {['Clojure', 'JVM', 'Immutability', 'Atoms/Refs', 'STM', 'REPL-driven', 'Leiningen', 'Ring', 'Compojure', 'ClojureScript', 'Re-frame', 'Next.jdbc', 'Spec'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Functional Thinking' over just syntax.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include REPL session logs in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with high-concurrency systems.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Future of State.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Clojure is more than just a language; it's a way of looking at the universe of data and change. It rewards the precise and the persistent. Stay consistent, embrace the parentheses, and remember: The most stable systems in the world are built on the foundations you're learning today. Your journey to functional mastery starts now!
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
