
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
        what: "Introduction & ASDF/Elixir Setup",
        why: "To set up a stable environment. 'asdf' is the community standard for managing Erlang/Elixir versions to avoid environment drift.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Elixir Installation Guide", url: "https://elixir-lang.org/install.html" },
          { name: "Setting up Elixir with asdf", url: "https://asdf-vm.com/guide/getting-started.html" },
        ],
        practice: "Install Elixir. Open 'iex' (Interactive Elixir) and run '1 + 2'. Verify version with 'elixir -v'.",
      },
      {
        what: "The Interactive Shell (IEx) & Basic Types",
        why: "To experiment with code instantly. You must master Atoms, Tuples, Lists, and Maps—the data structures of the BEAM.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Elixir School: Basic Types", url: "https://elixirschool.com/en/lessons/basics/basics" },
        ],
        practice: "Open IEx. Practice creating Atoms (e.g., :ok) and complex nested Maps.",
      },
      {
        what: "Pattern Matching (The Core Concept)",
        why: "In Elixir, the '=' is a match operator, not an assignment. This is the single most important concept for logic flow.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Pattern Matching Guide", url: "https://elixir-lang.org/getting-started/pattern-matching.html" },
        ],
        practice: "Practice matching values like '{:ok, result} = {:ok, \"Success\"}' and observe how variables bind.",
      },
      {
        what: "The Pipe Operator (|>) & Immutability",
        why: "The pipe operator allows you to write clean, linear data transformations. Understanding that data never changes (immutability) is vital for functional thinking.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Elixir School: Pipe Operator", url: "https://elixirschool.com/en/lessons/basics/pipe_operator" },
        ],
        practice: "Take a string, lowercase it, split it, and reverse it—all using the pipe operator.",
      },
      {
        what: "Modules & Functions",
        why: "To organize logic. Learn to use 'defmodule' and 'def'. Master private functions ('defp') and the 'do' block syntax.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Modules and Functions", url: "https://elixir-lang.org/getting-started/modules-and-functions.html" },
        ],
        practice: "Create a 'Calculator' module with functions for basic operations. Use pattern matching in function headers.",
      },
      {
        what: "Recursion vs. Enumerables",
        why: "Elixir doesn't use 'for' or 'while' loops. You must use recursion or the powerful 'Enum' and 'Stream' modules.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Recursion Guide", url: "https://elixir-lang.org/getting-started/recursion.html" },
          { name: "Enum Module Docs", url: "https://hexdocs.pm/elixir/Enum.html" },
        ],
        practice: "Write a recursive function to sum a list. Then, do the same using 'Enum.reduce'.",
      },
      {
        what: "Mix Tooling & Project Structure",
        why: "Mix is the build tool for Elixir. It manages compilation, dependencies, and testing.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Introduction to Mix", url: "https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html" },
        ],
        practice: "Run 'mix new my_project'. Explore the folder structure and run 'mix test'.",
      },
      {
        what: "Control Flow: if, unless, case, cond",
        why: "While pattern matching is preferred, you need these for complex logic branching.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Control Flow in Elixir", url: "https://elixirschool.com/en/lessons/basics/control_structures" },
        ],
        practice: "Write a predicate function that uses 'case' to handle different return atoms like :ok, :error, and :pending.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Concurrency & OTP Mastery",
    level: "Intermediate",
    steps: [
      {
        what: "Processes: Spawn, Send, & Receive",
        why: "Elixir is built for concurrency. Processes are lightweight and isolated. You must understand how they communicate via messages.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Processes in Elixir", url: "https://elixir-lang.org/getting-started/processes.html" },
        ],
        practice: "Spawn two processes and have them send 'ping' and 'pong' messages to each other.",
      },
      {
        what: "GenServer: The Generic Server",
        why: "To maintain state and handle asynchronous tasks properly. Most production code uses GenServer instead of raw processes.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "GenServer Guide", url: "https://elixir-lang.org/getting-started/mix-otp/genserver.html" },
        ],
        practice: "Implement a 'Stack' using a GenServer that maintains a list of items.",
      },
      {
        what: "Supervisors & Fault Tolerance",
        why: "The 'Let it crash' philosophy. Supervisors restart child processes when they fail, ensuring high availability.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Supervisor and Application", url: "https://elixir-lang.org/getting-started/mix-otp/supervisor-and-application.html" },
        ],
        practice: "Build a supervision tree where a supervisor restarts your Stack GenServer if it crashes.",
      },
      {
        what: "Testing with ExUnit",
        why: "To build reliable systems. ExUnit is fast and built-in. Learn to use 'setup' blocks and async tests.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "ExUnit Docs", url: "https://hexdocs.pm/ex_unit/ExUnit.html" },
        ],
        practice: "Write tests for your 'Stack' GenServer, verifying both initial state and mutations.",
      },
      {
        what: "Ecto: Databases & Changesets",
        why: "To interact with SQL databases safely. Ecto separates data mapping from database queries.",
        time: "1 Week",
        prereqs: "SQL Basics",
        resources: [
          { name: "Ecto Getting Started", url: "https://hexdocs.pm/ecto/getting-started.html" },
        ],
        practice: "Define a 'User' schema and a migration. Practice inserting data using Changesets.",
      },
      {
        what: "Phoenix Framework: Web Foundations",
        why: "Phoenix is the premier web framework for Elixir, offering real-time performance and developer productivity.",
        time: "2 Weeks",
        prereqs: "Step 13",
        resources: [
          { name: "Phoenix Guides", url: "https://hexdocs.pm/phoenix/overview.html" },
          { name: "Phoenix in 15 Minutes (YouTube)", url: "https://www.youtube.com/watch?v=look-up-phoenix-intro" },
        ],
        practice: "Install Phoenix. Create a 'Blog' app. Map a controller to a view and display some posts.",
      },
      {
        what: "Phoenix LiveView",
        why: "The game-changer. Build rich, real-time interactive UIs without writing complex JavaScript.",
        time: "2 Weeks",
        prereqs: "Step 14",
        resources: [
          { name: "LiveView Official Docs", url: "https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html" },
        ],
        practice: "Build a real-time counter or search-as-you-type feature using LiveView.",
      },
      {
        what: "Structs & Custom Types",
        why: "To model domain data precisely and use compile-time checks for field presence.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Structs in Elixir", url: "https://elixir-lang.org/getting-started/structs.html" },
        ],
        practice: "Define a 'Coordinate' struct and write a function that calculates the distance between two points.",
      },
    ],
  },
  {
    title: "Advanced Stage: Distributed Systems & Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Distributed Elixir & Nodes",
        why: "To build applications that scale across multiple machines. Connect nodes and send messages across the network.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Distributed Elixir Guide", url: "https://elixir-lang.org/getting-started/mix-otp/distributed-tasks.html" },
        ],
        practice: "Launch two local nodes and use 'Node.spawn' to run code on the other instance.",
      },
      {
        what: "Macros & Metaprogramming",
        why: "To extend the language itself. Only use when necessary, but essential for understanding libraries like Ecto.",
        time: "2 Weeks",
        prereqs: "All previous steps",
        resources: [
          { name: "Metaprogramming Elixir (Book/Guide)", url: "https://elixir-lang.org/getting-started/meta/quote-and-unquote.html" },
        ],
        practice: "Write a simple 'unless' macro that acts as the opposite of 'if'.",
      },
      {
        what: "Behaviors & Protocols",
        why: "To define common interfaces. Behaviors are like Java Interfaces; Protocols enable polymorphism (like JSON encoders).",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Protocols Guide", url: "https://elixir-lang.org/getting-started/protocols.html" },
        ],
        practice: "Implement a 'String.Chars' protocol for a custom data struct.",
      },
      {
        what: "Observability & Telemetry",
        why: "To monitor production systems. Learn to use the Telemetry library to emit and handle events.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Telemetry Documentation", url: "https://hexdocs.pm/telemetry/readme.html" },
        ],
        practice: "Add telemetry measurements to a slow-running GenServer task.",
      },
      {
        what: "Performance Tuning & Profiling",
        why: "To find bottlenecks in your code. Use tools like ':fprof' or 'Benchee' for benchmarking.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Benchee Library", url: "https://github.com/bencheeorg/benchee" },
        ],
        practice: "Compare the performance of 'Enum.map' vs a manual tail-recursive map implementation.",
      },
      {
        what: "Release Management & Docker",
        why: "To deploy apps correctly. Master 'Mix Releases' to package your code without needing Elixir on the production server.",
        time: "1 Week",
        prereqs: "Linux Basics",
        resources: [
          { name: "Mix Releases Guide", url: "https://hexdocs.pm/mix/Mix.Tasks.Release.html" },
        ],
        practice: "Create a Dockerfile for a Phoenix app that uses a multi-stage build for a tiny final image.",
      },
      {
        what: "Nerves: Embedded Elixir",
        why: "Build real hardware projects (Raspberry Pi) with the safety and reliability of Elixir.",
        time: "Ongoing",
        prereqs: "Hardware access",
        resources: [
          { name: "Nerves Project", url: "https://nerves-project.org/" },
        ],
        practice: "Set up a Nerves project and blink an LED on a supported development board.",
      },
      {
        what: "Dialyzer & Static Analysis",
        why: "To catch type-related bugs in a dynamic language using 'success typings'.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Dialyxir Guide", url: "https://github.com/jeremyjh/dialyxir" },
        ],
        practice: "Add Dialyzer to your project and fix all reported type warnings.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Word Frequency Tool", teaches: "Enum, Strings, and File I/O.", tech: "Elixir, Mix" },
  { level: "Beginner", title: "Personal Finance Calculator", teaches: "Basic math, pattern matching, and recursion.", tech: "Elixir" },
  { level: "Beginner", title: "Number Guessing Game", teaches: "User input, IEx, and control flow.", tech: "Elixir" },
  { level: "Intermediate", title: "Distributed Task Queue", teaches: "GenServer, Processes, and message passing.", tech: "Elixir, OTP" },
  { level: "Intermediate", title: "Real-time Weather Dashboard", teaches: "Phoenix, LiveView, and External APIs.", tech: "Phoenix, HTTPoison" },
  { level: "Intermediate", title: "Multi-user Chat App", teaches: "PubSub, LiveView, and Sessions.", tech: "Phoenix, LiveView" },
  { level: "Intermediate", title: "Library Management DB", teaches: "Ecto, Migrations, and Relationships.", tech: "Elixir, Ecto, PostgreSQL" },
  { level: "Advanced", title: "Distributed Consensus Simulator", teaches: "Distributed nodes, complex OTP trees, and clustering.", tech: "Advanced OTP" },
  { level: "Advanced", title: "High-Performance JSON API", teaches: "Umbrella projects, performance profiling, and SQL optimization.", tech: "Elixir, Phoenix, Benchee" },
  { level: "Advanced", title: "Smart Home Controller (Nerves)", teaches: "Embedded systems, GPIO, and hardware-software interop.", tech: "Nerves, Raspberry Pi" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on syntax, pattern matching, and the pipe operator to understand functional thinking.",
    schedule: [
      "Days 1-7: Installation, IEx, and Basic Types.",
      "Days 8-15: Pattern Matching and Pipe Operator mastery.",
      "Days 16-23: Modules, Functions, and Recursion.",
      "Days 24-30: Build 2 beginner projects and learn basic Mix.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Full Stack",
    description: "Balanced path covering OTP concurrency and the Phoenix framework.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Processes, GenServers, and Supervison Trees.",
      "Days 41-60: Phoenix Framework, Ecto, and building a LiveView app.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Architect",
    description: "Comprehensive path for professional systems and distributed computing readiness.",
    schedule: [
      "Days 1-30: Core Development & Functional logic.",
      "Days 31-60: Professional Systems (OTP, Database, Testing).",
      "Days 61-90: Distributed Elixir, Macros, Performance, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain Pattern Matching vs. Assignment.",
  "What is the Pipe Operator and why is it used?",
  "Describe the Actor Model in Elixir.",
  "What are the benefits of Immutability?",
  "Explain GenServer: call vs. cast.",
  "What is a Supervision Tree and why is it important?",
  "How does 'Let it Crash' work in practice?",
  "Difference between a process and an OS thread.",
  "What is Phoenix LiveView and how does it maintain state?",
  "Explain Ecto Changesets.",
];

const codingQuestions = [
  { question: "Implement a tail-recursive function to reverse a list.", topic: "Recursion" },
  { question: "Write a pattern match that extracts the second element of a 3-element tuple.", topic: "Pattern Matching" },
  { question: "Create a simple GenServer that acts as a counter.", topic: "OTP" },
  { question: "Use Enum.reduce to find the average of a list of numbers.", topic: "Enumerables" },
];

const mcqs = [
  { question: "Which symbol denotes an atom in Elixir?", options: ["$", "@", ":", "#"], answer: ":" },
  { question: "What is the result of '1 = 2' in Elixir?", options: ["true", "false", "MatchError", "1"], answer: "MatchError" },
  { question: "Which module is used for lazy sequences?", options: ["Enum", "Stream", "Map", "List"], answer: "Stream" },
];

const mistakes = [
  "Trying to write imperative loops like 'for' or 'while'.",
  "Ignoring Pattern Matching and using too many 'if' statements.",
  "Putting too much logic into a single GenServer (bottleneck).",
  "Not handling error cases in pattern matches (unhandled matches).",
  "Forgetting that strings are binaries and chars are integers.",
  "Tutorial Hell: Reading about OTP without spawning local processes.",
  "Ignoring documentation: HexDocs is one of the best docs in tech—use it!",
  "Neglecting the Pipe Operator, leading to deeply nested function calls.",
  "Ignoring 'Success Typings' and not using Dialyzer in large projects.",
  "Over-using Macros: If you can do it with a function, don't use a macro.",
];

export default function ElixirRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <FlaskConical className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Elixir Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of building scalable, fault-tolerant, and concurrent systems. From functional foundations to advanced OTP architectures and real-time web applications with Phoenix.
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
            <CardDescription>Expert guidance to help you land your dream Elixir/Phoenix role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & OTP Challenges</h3>
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
                    {['Elixir', 'OTP', 'Phoenix', 'LiveView', 'Ecto', 'GenServer', 'Supervisors', 'Pattern Matching', 'Immutability', 'Distributed Systems', 'WebSockets', 'Telemetry'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight your understanding of the 'Let it Crash' philosophy.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests using ExUnit in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide a link to a live Phoenix application if possible.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Systems of the Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Elixir is more than just a language; it's a way to write software that can handle millions of users with rock-solid reliability. Stay consistent, embrace the functional paradigm, and remember: The most scalable systems in the world are built on the foundations you're learning today. Your journey to mastery starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Systems
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
