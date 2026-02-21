
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
  Smartphone,
  Code,
  Layout,
  Database,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Rust Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Rust & Tooling",
        why: "To set up the development environment using 'rustup' and learn 'Cargo', Rust's powerful package manager and build tool.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Rust Installation Guide", url: "https://www.rust-lang.org/learn/get-started" },
          { name: "Rust Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=MsocPEZBd-M" },
          { name: "The Cargo Book", url: "https://doc.rust-lang.org/cargo/" },
        ],
        practice: "Install Rust, create a new project with 'cargo new', and run 'Hello, World!'. Explore 'Cargo.toml'.",
      },
      {
        what: "Variables & Mutability",
        why: "Rust is immutable by default. Understanding how to manage state safely is a core principle.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Rust Book: Variables and Mutability", url: "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html" },
        ],
        practice: "Declare variables, experiment with 'mut', and learn about shadowing.",
      },
      {
        what: "Data Types & Functions",
        why: "To master Rust's statically typed nature and learn how to structure reusable logic.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Rust Book: Data Types", url: "https://doc.rust-lang.org/book/ch03-02-data-types.html" },
          { name: "Functions in Rust", url: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html" },
        ],
        practice: "Build a program that converts temperatures between Fahrenheit and Celsius.",
      },
      {
        what: "The Heart of Rust: Ownership",
        why: "Ownership is Rust's unique way of managing memory without a garbage collector. It's the most critical concept to master.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Ownership Explained (YouTube)", url: "https://www.youtube.com/watch?v=VFI7fe7W8Is" },
          { name: "Rust Book: What is Ownership?", url: "https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html" },
        ],
        practice: "Practice moving data between variables and understanding 'Move' vs 'Clone' vs 'Copy'.",
      },
      {
        what: "References & Borrowing",
        why: "To access data without taking ownership, enabling efficient and safe memory usage.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Rust Book: References and Borrowing", url: "https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html" },
        ],
        practice: "Implement a function that calculates string length using references without consuming the string.",
      },
      {
        what: "Slices & Collections",
        why: "To handle sequences of data efficiently without unnecessary copies.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "The Slice Type", url: "https://doc.rust-lang.org/book/ch04-03-slices.html" },
        ],
        practice: "Write a function that takes a string and returns the first word as a slice.",
      },
      {
        what: "Structs & Enums",
        why: "To create custom data types and model complex data structures cleanly.",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Rust Book: Structs", url: "https://doc.rust-lang.org/book/ch05-00-structs.html" },
          { name: "Rust Book: Enums", url: "https://doc.rust-lang.org/book/ch06-00-enums.html" },
        ],
        practice: "Model a geometry system with Rectangles and Circles using Structs and Enums.",
      },
      {
        what: "Pattern Matching & 'match'",
        why: "Pattern matching is a powerful control flow construct that ensures you handle all possible cases of an Enum.",
        time: "3 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Pattern Matching Guide", url: "https://doc.rust-lang.org/book/ch06-02-match.html" },
        ],
        practice: "Build a simple calculator that uses 'match' to decide which arithmetic operation to perform.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Safe & Scalable Systems",
    level: "Intermediate",
    steps: [
      {
        what: "Common Collections (Vector, HashMap)",
        why: "To store and manipulate dynamic amounts of data in memory.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Rust Book: Common Collections", url: "https://doc.rust-lang.org/book/ch08-00-common-collections.html" },
        ],
        practice: "Create a program that tracks a grocery list using Vectors and a dictionary using HashMaps.",
      },
      {
        what: "Error Handling (Result & Option)",
        why: "Rust forces you to handle errors explicitly, leading to extremely stable and predictable applications.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Error Handling in Rust", url: "https://doc.rust-lang.org/book/ch09-00-error-handling.html" },
          { name: "The '?' Operator Explained", url: "https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#a-shortcut-for-propagating-errors-the--operator" },
        ],
        practice: "Refactor a function that reads a file to handle 'FileNotFound' errors using 'Result'.",
      },
      {
        what: "Generics & Traits",
        why: "To write reusable code that can work with many types. Traits define shared behavior (similar to interfaces).",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Generics, Traits, and Lifetimes", url: "https://doc.rust-lang.org/book/ch10-00-generics.html" },
        ],
        practice: "Implement a 'Summary' trait and apply it to different data types like 'NewsArticle' and 'Tweet'.",
      },
      {
        what: "Understanding Lifetimes",
        why: "To ensure that references remain valid as long as we need them, preventing 'dangling pointers'.",
        time: "1 Week",
        prereqs: "Step 5, Step 11",
        resources: [
          { name: "Lifetimes in Rust (YouTube)", url: "https://www.youtube.com/watch?v=juIing7nL1E" },
          { name: "Rust Book: Validating References with Lifetimes", url: "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html" },
        ],
        practice: "Write a function that finds the longest of two string slices using explicit lifetime annotations.",
      },
      {
        what: "Automated Testing",
        why: "Testing is built into the language. Writing tests ensures your logic remains correct during refactoring.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Testing in Rust", url: "https://doc.rust-lang.org/book/ch11-00-testing.html" },
        ],
        practice: "Write unit tests for your temperature converter and integration tests for a library crate.",
      },
      {
        what: "Functional Features: Iterators & Closures",
        why: "To write expressive, high-performance code using functional programming patterns.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Functional Language Features", url: "https://doc.rust-lang.org/book/ch13-00-functional-features.html" },
        ],
        practice: "Use iterators and closures to filter and transform a list of numbers without using explicit loops.",
      },
      {
        what: "Smart Pointers (Box, Rc, RefCell)",
        why: "To manage complex ownership patterns, such as data with multiple owners or data stored on the heap.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Rust Smart Pointers", url: "https://doc.rust-lang.org/book/ch15-00-smart-pointers.html" },
        ],
        practice: "Build a recursive data structure like a Linked List using 'Box'.",
      },
      {
        what: "Fearless Concurrency",
        why: "Rust's ownership system prevents data races at compile time, making concurrent programming safe and easy.",
        time: "1 Week",
        prereqs: "Step 4, Step 15",
        resources: [
          { name: "Concurrency in Rust", url: "https://doc.rust-lang.org/book/ch16-00-concurrency.html" },
        ],
        practice: "Use 'Spawn' to create threads and 'mpsc' channels to communicate between them.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery & High Performance",
    level: "Advanced",
    steps: [
      {
        what: "Async Rust (Tokio & Futures)",
        why: "Asynchronous programming is essential for high-performance networking and web servers.",
        time: "2 Weeks",
        prereqs: "Step 16",
        resources: [
          { name: "Tokio Tutorial", url: "https://tokio.rs/tokio/tutorial" },
          { name: "Asynchronous Programming in Rust", url: "https://rust-lang.github.io/async-book/" },
        ],
        practice: "Build a basic TCP echo server using 'tokio' and 'async/await'.",
      },
      {
        what: "Macros (Declarative & Procedural)",
        why: "Macros allow you to write code that writes other code, reducing boilerplate and creating powerful DSLs.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Macros in Rust", url: "https://doc.rust-lang.org/book/ch19-06-macros.html" },
        ],
        practice: "Create a simple declarative macro to simplify the creation of HashMaps.",
      },
      {
        what: "Unsafe Rust & FFI",
        why: "To perform low-level operations or interface with C/C++ libraries when safety checks must be bypassed.",
        time: "1 Week",
        prereqs: "Mastery of Safe Rust",
        resources: [
          { name: "The Rustonomicon (Advanced/Unsafe)", url: "https://doc.rust-lang.org/nomicon/" },
        ],
        practice: "Write a small C wrapper and call it from Rust using the FFI.",
      },
      {
        what: "WebAssembly (Wasm) with Rust",
        why: "Rust is the premier language for high-performance code in the browser via WebAssembly.",
        time: "2 Weeks",
        prereqs: "Step 1",
        resources: [
          { name: "Rust and WebAssembly Book", url: "https://rustwasm.github.io/docs/book/" },
        ],
        practice: "Compile a Rust function to Wasm and call it from a JavaScript frontend.",
      },
      {
        what: "Backend Web Frameworks (Axum / Actix)",
        why: "To build robust, type-safe, and blazing-fast web APIs and microservices.",
        time: "2 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "Axum Framework Guide", url: "https://github.com/tokio-rs/axum" },
          { name: "Actix Web Documentation", url: "https://actix.rs/" },
        ],
        practice: "Build a full REST API with a database connection (using 'sqlx' or 'diesel').",
      },
      {
        what: "Game Development (Bevy)",
        why: "Rust is increasingly popular for game development due to its performance and safety.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Bevy Engine Official Site", url: "https://bevyengine.org/" },
        ],
        practice: "Build a simple 2D game using the Bevy engine.",
      },
      {
        what: "Optimization & Performance Profiling",
        why: "To identify and fix bottlenecks, making your Rust code as fast as possible.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Cargo Flamegraph", url: "https://github.com/flamegraph-rs/flamegraph" },
        ],
        practice: "Profile an existing project and optimize a critical section of code.",
      },
      {
        what: "Embedded Rust",
        why: "Apply Rust's safety to hardware and microcontrollers.",
        time: "Ongoing",
        prereqs: "Step 19",
        resources: [
          { name: "Embedded Rust Book", url: "https://docs.rust-embedded.org/book/" },
        ],
        practice: "Set up an emulator or a real microcontroller and blink an LED using Rust.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Grep Clone", teaches: "Argument parsing, File I/O, Error handling.", tech: "Standard Library, Cargo" },
  { level: "Beginner", title: "Guessing Game", teaches: "Variables, Input/Output, Random numbers.", tech: "Standard Library" },
  { level: "Beginner", title: "Matrix Math Library", teaches: "Structs, Traits, Testing.", tech: "Rust" },
  { level: "Intermediate", title: "In-memory Key-Value Store", teaches: "HashMaps, Ownership, Smart Pointers.", tech: "Rust" },
  { level: "Intermediate", title: "Simple Web Scraper", teaches: "Networking, Parsing HTML, Async.", tech: "Reqwest, Scraper" },
  { level: "Intermediate", title: "JSON Parser", teaches: "Pattern matching, Recursion, Enums.", tech: "Rust" },
  { level: "Intermediate", title: "Markdown to HTML Converter", teaches: "String manipulation, Regex.", tech: "Pulldown-cmark" },
  { level: "Advanced", title: "Real-time Chat Server", teaches: "WebSockets, Concurrency, Async/Tokio.", tech: "Tokio, Tungstenite" },
  { level: "Advanced", title: "Blockchain Prototype", teaches: "Cryptography, Data Structures, Hashing.", tech: "Rust, Ring" },
  { level: "Advanced", title: "Redis Clone", teaches: "Networking protocols, Concurrency, high-performance IO.", tech: "Tokio, Resp-parser" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax and the ownership model to get productive quickly.",
    schedule: [
      "Days 1-7: Rust Basics, Ownership, and Borrowing.",
      "Days 8-15: Structs, Enums, and Pattern Matching.",
      "Days 16-23: Collections and Error Handling.",
      "Days 24-30: Build a CLI tool and learn basic testing.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "A balanced pace for deep understanding and building a portfolio.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Intermediate concepts: Generics, Traits, Smart Pointers, and Concurrency.",
      "Days 46-60: Build two intermediate projects and learn async basics.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Deep dive into systems programming and specialized frameworks.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced Traits, Macros, and Async Mastery.",
      "Days 61-90: Axum/Actix web dev, performance tuning, and final advanced project.",
    ]
  }
];

const interviewTopics = [
  "Explain Ownership, Borrowing, and Lifetimes in detail.",
  "What is the difference between String and &str?",
  "How does Rust handle concurrency differently from other languages?",
  "What are Zero-cost abstractions?",
  "Difference between 'match' and 'if let'.",
  "Explain 'deref coercion'.",
  "What is the 'orphan rule' for traits?",
  "Difference between Box, Rc, and Arc.",
  "How does the '?' operator work under the hood?",
  "Explain the difference between panic! and Result.",
];

const codingQuestions = [
  { question: "Implement a function to reverse a string in-place (if possible) or efficiently.", topic: "Strings" },
  { question: "Implement a simple LRU cache.", topic: "Data Structures" },
  { question: "Solve the 'Two Sum' problem using a HashMap for O(n).", topic: "Collections" },
  { question: "Write a thread-safe counter using Arc and Mutex.", topic: "Concurrency" },
];

const mcqs = [
  { question: "What is the default behavior of variables in Rust?", options: ["Mutable", "Immutable", "Static", "Volatile"], answer: "Immutable" },
  { question: "Which tool is Rust's package manager?", options: ["NPM", "Pip", "Cargo", "Gradle"], answer: "Cargo" },
  { question: "Which smart pointer allows for multiple owners?", options: ["Box", "Rc", "RefCell", "String"], answer: "Rc" },
];

const mistakes = [
  "Fighting the borrow checker instead of rethinking the data structure.",
  "Overusing '.clone()' to avoid ownership errors instead of using references.",
  "Using 'unwrap()' everywhere instead of proper error handling.",
  "Forgetting that almost everything in Rust is an expression.",
  "Thinking Rust is C++ and trying to use inheritance instead of composition and traits.",
  "Not using 'Cargo' features to manage dependencies efficiently.",
  "Ignoring compiler warnings, which are actually helpful suggestions.",
  "Using raw pointers when safe references would work.",
  "Not writing unit tests from the start.",
  "Hardcoding types instead of using Generics where appropriate.",
];

export default function RustRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Rust Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive journey to mastering Rust, the language of memory safety, performance, and reliability.
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
            <CardDescription>Expert guidance to help you land your dream Rust developer role.</CardDescription>
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
                    {['Rust', 'Cargo', 'Ownership', 'Borrowing', 'Lifetimes', 'Zero-cost abstractions', 'Traits', 'Async Rust', 'Tokio', 'Wasm', 'FFI', 'Memory Safety'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Smartphone className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your memory management decisions in project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include benchmark results using 'Criterion'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Show how you use 'traits' to keep your code DRY.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Embrace the Borrow Checker</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Rust is more than just a language; it's a paradigm shift. It will make you a better programmer by forcing you to think about memory and safety upfront. Don't be discouraged when the compiler rejects your code—it's preventing bugs before they ever reach production. Stay consistent, keep building, and soon you'll be writing fearless, high-performance systems.
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
