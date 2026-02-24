
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
  Radio,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Functional Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Erlang/OTP Setup",
        why: "To set up the Erlang runtime system (BEAM). Understanding how to use the shell (werl/erl) is the first step to experimentation.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Erlang Official - Downloads", url: "https://www.erlang.org/downloads" },
          { name: "Learn You Some Erlang: Starting Out", url: "https://learnyousomeerlang.com/starting-out-for-real" },
        ],
        practice: "Install Erlang. Open the shell and perform basic arithmetic. Use 'q().' to exit.",
      },
      {
        what: "The Shell (Erl) & Basic Types",
        why: "Erlang is a dynamic, functional language. You must master Atoms, Integers, Floats, Tuples, and Lists.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Erlang School: Basic Types", url: "https://learnyousomeerlang.com/starting-out-for-real#tuples" },
        ],
        practice: "Create complex nested data structures using Tuples and Lists in the shell.",
      },
      {
        what: "Pattern Matching (The Heart of Erlang)",
        why: "Pattern matching is used for assignment, control flow, and function selection. It's the most powerful feature of the language.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Pattern Matching Guide", url: "https://learnyousomeerlang.com/starting-out-for-real#pattern-matching" },
        ],
        practice: "Practice matching like '{ok, Result} = {ok, 42}.' and learn what happens when a match fails.",
      },
      {
        what: "Modules & Functions",
        why: "To organize code. Learn about '-module', '-export', and how to define functions with multiple clauses.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Modules & Functions (Official)", url: "https://www.erlang.org/doc/getting_started/getting_started.html#modules" },
        ],
        practice: "Create a 'geometry' module with functions to calculate the area of different shapes using multiple function clauses.",
      },
      {
        what: "Recursion & List Processing",
        why: "Erlang doesn't have traditional loops. You must use recursion to process lists and repeat tasks.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Recursion in Erlang", url: "https://learnyousomeerlang.com/recursion" },
        ],
        practice: "Write a recursive function to find the maximum value in a list and another to sum all elements.",
      },
      {
        what: "Higher-Order Functions & List Comprehensions",
        why: "To write concise, expressive code. Master 'lists:map', 'lists:filter', and the '[X || X <- List]' syntax.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Higher Order Functions", url: "https://learnyousomeerlang.com/higher-order-functions" },
        ],
        practice: "Use a list comprehension to find all even numbers in a list and square them.",
      },
      {
        what: "Immutability & Variables",
        why: "Variables in Erlang are 'single-assignment'. Once bound, they never change. This is key to concurrency and safety.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Single Assignment Explained", url: "https://www.erlang.org/doc/reference_manual/expressions.html#variables" },
        ],
        practice: "Try to re-assign a variable in the shell and observe the 'exception error: no match' message.",
      },
      {
        what: "The Build Tool: Rebar3",
        why: "Rebar3 is the standard build tool for Erlang. It handles compilation, testing, and dependency management.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Rebar3 Official Site", url: "https://www.rebar3.org/docs/getting-started" },
        ],
        practice: "Install rebar3. Create a new 'app' template and run 'rebar3 compile'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Concurrency & OTP",
    level: "Intermediate",
    steps: [
      {
        what: "Processes: Spawn, Send, & Receive",
        why: "Erlang's concurrency is based on lightweight processes. You must understand how they communicate via mailboxes.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "The Hitchhiker's Guide to Concurrency", url: "https://learnyousomeerlang.com/the-hitchhikers-guide-to-concurrency" },
        ],
        practice: "Create two processes that send numbers back and forth, incrementing them each time.",
      },
      {
        what: "Links, Monitors & 'Let it Crash'",
        why: "Error handling in Erlang is done by linking processes. When one crashes, others are notified. This enables self-healing systems.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Errors and Processes", url: "https://learnyousomeerlang.com/errors-and-processes" },
        ],
        practice: "Spawn a process, link it to the main process, and intentionally crash it to see the exit signal.",
      },
      {
        what: "The OTP Framework: GenServer",
        why: "GenServer is the most important OTP behavior. It provides a standard way to implement client-server logic with state.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Clients and Servers", url: "https://learnyousomeerlang.com/clients-and-servers" },
        ],
        practice: "Implement a 'Bank' GenServer that tracks a balance and handles 'deposit' and 'withdraw' calls.",
      },
      {
        what: "Supervisors: Building Trees",
        why: "Supervisors manage the lifecycle of other processes. They are the 'parents' that restart crashed 'children'.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Supervisors Guide", url: "https://learnyousomeerlang.com/supervisors" },
        ],
        practice: "Build a supervision tree where a supervisor restarts your Bank GenServer automatically if it fails.",
      },
      {
        what: "Testing with EUnit & Common Test",
        why: "To build reliable systems. EUnit is for unit tests; Common Test is for large-scale integration testing.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "EUnit User's Guide", url: "https://www.erlang.org/doc/apps/eunit/chapter.html" },
        ],
        practice: "Write a test suite for your geometry module, ensuring all edge cases (like zero dimensions) are handled.",
      },
      {
        what: "Storage: ETS & DETS",
        why: "Erlang Term Storage (ETS) provides high-performance in-memory data storage for concurrent access.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "ETS Guide", url: "https://learnyousomeerlang.com/ets" },
        ],
        practice: "Create an ETS table to cache results of expensive calculations performed by a GenServer.",
      },
      {
        what: "Record and Maps Mastery",
        why: "To manage complex state within OTP behaviors. Maps are dynamic; Records are fixed and fast.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Maps and Records", url: "https://www.erlang.org/doc/reference_manual/data_types.html#maps" },
        ],
        practice: "Refactor your Bank GenServer to use a Map for storing multiple accounts indexed by user ID.",
      },
      {
        what: "The Application Behavior",
        why: "To package your code into a self-contained OTP application that can be started and stopped by the runtime.",
        time: "5 Days",
        prereqs: "Step 12",
        resources: [
          { name: "The OTP Application", url: "https://learnyousomeerlang.com/release-is-in-the-air" },
        ],
        practice: "Convert your supervised Bank system into a full '.app' that can be loaded in the shell.",
      },
    ],
  },
  {
    title: "Advanced Stage: Distributed Systems & Performance",
    level: "Advanced",
    steps: [
      {
        what: "Distributed Erlang & Nodes",
        why: "The BEAM is inherently distributed. Learn to connect different nodes and send messages across the network.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Distributed Programming", url: "https://www.erlang.org/doc/getting_started/getting_started.html#distribution" },
        ],
        practice: "Start two nodes on your computer and have a GenServer on Node A call a function on Node B.",
      },
      {
        what: "Mnesia: The Distributed Database",
        why: "Mnesia is a heavy-duty, distributed DBMS built into Erlang. It supports transactions and high availability.",
        time: "2 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "Mnesia Guide", url: "https://learnyousomeerlang.com/mnesia" },
        ],
        practice: "Create a schema, start Mnesia, and build a distributed user database that replicates across two nodes.",
      },
      {
        what: "Hot Code Swapping",
        why: "To update running systems without stopping them. This is how Erlang achieves 'nine nines' of availability.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Designing for Scalability with Erlang/OTP", url: "https://www.erlang.org/doc/design_principles/users_guide.html" },
        ],
        practice: "Update a GenServer's code while it's holding state and observe it transition to the new version seamlessly.",
      },
      {
        what: "NIFs: Interfacing with C",
        why: "When performance or hardware access is needed. Native Implemented Functions (NIFs) let you call C from Erlang.",
        time: "1 Week",
        prereqs: "C Programming",
        resources: [
          { name: "Native Implemented Functions", url: "https://www.erlang.org/doc/tutorial/nif.html" },
        ],
        practice: "Write a high-speed prime number checker in C and link it to your Erlang project.",
      },
      {
        what: "Performance Profiling & Observer",
        why: "To find bottlenecks. The 'observer' tool provides a graphical view of the BEAM's internal state.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "The Observer Tool", url: "https://www.erlang.org/doc/apps/observer/observer_ug.html" },
        ],
        practice: "Run 'observer:start().' while your distributed app is running. Inspect process mailboxes and memory usage.",
      },
      {
        what: "Release Management (Relx)",
        why: "To package your entire app and the Erlang runtime into a standalone bundle for production deployment.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Rebar3 Releases", url: "https://rebar3.org/docs/deployment/releases/" },
        ],
        practice: "Build a release of your Mnesia app and run it without needing 'erl' in your path.",
      },
      {
        what: "TCP/UDP Socket Programming",
        why: "To build custom network protocols. Erlang's 'gen_tcp' is extremely efficient for handling thousands of connections.",
        time: "1 Week",
        prereqs: "Networking Basics",
        resources: [
          { name: "Sockets Guide", url: "https://learnyousomeerlang.com/buckets-of-sockets" },
        ],
        practice: "Build a simple TCP echo server that can handle multiple simultaneous clients.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all functional, concurrent, and distributed skills into a professional-grade system.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Distributed Real-time Chat System' with persistent history, user presence, and zero-downtime updates.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Recursive Calculator", teaches: "Recursion, Pattern matching, and Arithmetic.", tech: "Erlang" },
  { level: "Beginner", title: "Word Frequency Tool", teaches: "Lists, Maps, and Higher-order functions.", tech: "Erlang" },
  { level: "Beginner", title: "Rock-Paper-Scissors CLI", teaches: "Input handling, I/O, and Logic.", tech: "Erlang" },
  { level: "Intermediate", title: "Multi-user Key-Value Store", teaches: "GenServer, ETS, and state management.", tech: "Erlang, OTP" },
  { level: "Intermediate", title: "Concurrent Web Scraper", teaches: "Processes, message passing, and HTTP clients.", tech: "Erlang, hackney" },
  { level: "Intermediate", title: "Self-Healing Bank System", teaches: "Supervisors, linking, and fault tolerance.", tech: "Erlang, OTP" },
  { level: "Intermediate", title: "Simple TCP Chat Server", teaches: "gen_tcp, binary handling, and process per connection.", tech: "Erlang" },
  { level: "Advanced", title: "Distributed Consensus Simulator", teaches: "Distributed nodes, Mnesia, and network reliability.", tech: "Erlang, Mnesia" },
  { level: "Advanced", title: "Real-time Metrics Dashboard", teaches: "Observer, Telemetry, and WebSocket interop.", tech: "Erlang, Cowboy" },
  { level: "Advanced", title: "Zero-Downtime Messaging App", teaches: "Hot code swapping, releases, and large-scale OTP.", tech: "Erlang, rebar3" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on functional programming basics and pattern matching to understand the Erlang mindset.",
    schedule: [
      "Days 1-7: Installation, Shell, and Basic Types.",
      "Days 8-15: Pattern Matching and function clauses.",
      "Days 16-23: Recursion, Lists, and HOFs.",
      "Days 24-30: Build 2 beginner projects and learn rebar3 basics.",
    ]
  },
  {
    title: "60-Day Standard Plan: The OTP Engineer",
    description: "Balanced path covering concurrency, fault tolerance, and the standard framework.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Processes, GenServer, and state management.",
      "Days 41-60: Supervisors, ETS storage, and building a full OTP app.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Distributed Architect",
    description: "Comprehensive path for professional systems and distributed computing readiness.",
    schedule: [
      "Days 1-30: Core Development & Functional logic.",
      "Days 31-60: Professional Systems (OTP, Database, Testing).",
      "Days 61-90: Distributed Erlang, Mnesia, Releases, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain Pattern Matching vs. Assignment.",
  "Describe the 'Actor Model' in Erlang.",
  "What is the difference between a process and an OS thread?",
  "What are the benefits of Immutability?",
  "Explain the 'Let it Crash' philosophy.",
  "Difference between a GenServer 'call' and 'cast'.",
  "How does a Supervision Tree ensure high availability?",
  "Explain Hot Code Swapping.",
  "What is the purpose of ETS and DETS?",
  "How does Erlang handle distribution across nodes?",
];

const codingQuestions = [
  { question: "Implement a tail-recursive function to find the length of a list.", topic: "Recursion" },
  { question: "Write a pattern match that extracts the 'value' from a tagged tuple like '{ok, value}'.", topic: "Pattern Matching" },
  { question: "Create a simple GenServer that handles a counter state.", topic: "OTP" },
  { question: "Write a function that spawns 1000 processes and sums their outputs.", topic: "Concurrency" },
];

const mcqs = [
  { question: "Which symbol denotes an atom in Erlang?", options: ["$", "@", "lowercase letters", "Capital letters"], answer: "lowercase letters" },
  { question: "What is the return type of a process's mailbox receive block?", options: ["The message sent", "Boolean", "Process ID", "void"], answer: "The message sent" },
  { question: "Which OTP behavior is used for creating a process manager?", options: ["gen_server", "gen_statem", "supervisor", "application"], answer: "supervisor" },
];

const mistakes = [
  "Trying to write imperative loops like 'for' or 'while'.",
  "Using shared state instead of passing messages between processes.",
  "Ignoring the 'Let it Crash' philosophy by writing too many try/catch blocks.",
  "Forgetting that strings are just lists of integers (char lists).",
  "Not using OTP behaviors (reinventing GenServer).",
  "Tutorial Hell: Reading about supervisors without building a crashing system.",
  "Putting too much logic into a single process (bottleneck).",
  "Neglecting the log file: The SASL log is vital for debugging.",
  "Ignoring the official documentation: It's the most reliable source.",
  "Over-engineering a simple linear task with complex process trees.",
];

export default function ErlangRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Radio className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Erlang Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language of the 'Nine Nines'. From absolute functional foundations to building the world's most resilient distributed systems with Erlang/OTP.
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
            <CardDescription>Expert guidance to help you land your dream Erlang/OTP role.</CardDescription>
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
                    {['Erlang/OTP', 'BEAM', 'Concurrency', 'GenServer', 'Supervisors', 'Fault Tolerance', 'Distributed Systems', 'Hot Code Swapping', 'Mnesia', 'rebar3', 'Pattern Matching', 'Functional Programming'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of the 'Actor Model'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests using EUnit in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain how you handled 'Fault Tolerance' in your systems.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build Systems That Never Die</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Erlang is more than just a language; it's a way to write software that stands the test of time and high traffic. Stay consistent, embrace the functional paradigm, and remember: The most reliable systems in the world are built on the foundations you're learning today. Your journey to mastery starts now!
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
