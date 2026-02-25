
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
  Braces,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: The Lisp Mindset & Syntax",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & SBCL Setup",
        why: "To set up the Steel Bank Common Lisp (SBCL) environment and understand Lisp's unique identity as the second-oldest high-level language.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Common Lisp Cookbook: Getting Started", url: "https://lispcookbook.github.io/cl-cookbook/getting-started.html" },
          { name: "Practical Common Lisp: Lisp in Small Pieces", url: "https://gigamonkeys.com/book/" },
        ],
        practice: "Install SBCL and Quicklisp. Open the REPL and print 'Hello, Lisp World!'.",
      },
      {
        what: "S-Expressions & Prefix Notation",
        why: "Everything in Lisp is a list. Understanding prefix notation (function arg1 arg2) is the key to reading any Lisp code.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Structure and Interpretation of Computer Programs (SICP)", url: "https://mitpress.mit.edu/sites/default/files/sicp/index.html" },
        ],
        practice: "Convert 5 complex mathematical expressions from standard notation to Lisp prefix notation.",
      },
      {
        what: "Basic Types: Atoms, Symbols & Lists",
        why: "To master the building blocks of data. Lisp unifies code and data through these simple types.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Lisp Syntax and Semantics", url: "https://docs.huihoo.com/ansi-common-lisp/ansi-common-lisp.html" },
        ],
        practice: "Create a list of symbols representing a grocery list. Use 'quote' to prevent evaluation.",
      },
      {
        what: "Evaluation Rules (Quote & Eval)",
        why: "Lisp evaluation is unique. Understanding when something is code vs. data is the 'Aha!' moment of the language.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Common Lisp: The Language (Steele)", url: "https://www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.html" },
        ],
        practice: "Experiment with ' (quote) and 'eval' in the REPL to see how data becomes executable code.",
      },
      {
        what: "Arithmetic & Logic Predicates",
        why: "To perform calculations and logic checks using standard Lisp functions like '+', '-', 'zerop', and 'numberp'.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Basic Math in Lisp", url: "https://lispcookbook.github.io/cl-cookbook/numbers.html" },
        ],
        practice: "Write a script that determines if a number is prime using a simple division check loop.",
      },
      {
        what: "List Manipulation: Cons, Car, & Cdr",
        why: "The foundational operations for processing lists. Car (head), Cdr (tail), and Cons (constructor) are the heart of Lisp.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "The Little Schemer (Concepts apply to CL)", url: "https://www.youtube.com/watch?v=look-up-little-schemer" },
        ],
        practice: "Write a function that returns the second element of a list using only 'car' and 'cdr'.",
      },
      {
        what: "Control Flow: IF, COND & WHEN",
        why: "To implement logic branching. 'cond' is the Lisp standard for multi-way branches.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Flow Guide", url: "https://lispcookbook.github.io/cl-cookbook/control-structures.html" },
        ],
        practice: "Write a 'grade-calculator' that uses 'cond' to return A, B, C based on a score.",
      },
      {
        what: "Functions: DEFUN & Lambda",
        why: "Functions are first-class citizens. Learning to define named functions and anonymous lambdas is essential.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Functions in Common Lisp", url: "https://www.tutorialspoint.com/lisp/lisp_functions.htm" },
        ],
        practice: "Create a function 'square' and use a lambda inside 'mapcar' to square a whole list of numbers.",
      },
      {
        what: "Local Variables: LET & LET*",
        why: "To manage scope and store temporary values without polluting the global environment.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Variables and Scoping", url: "https://lispcookbook.github.io/cl-cookbook/variables.html" },
        ],
        practice: "Refactor a math function to use 'let' for storing intermediate results.",
      },
      {
        what: "Iteration: DOTIMES, DOLIST & LOOP",
        why: "While recursion is common, 'loop' is the most powerful iteration macro in any language.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "The Loop Macro Guide", url: "https://lispcookbook.github.io/cl-cookbook/iteration.html" },
        ],
        practice: "Write a 'loop' that finds the sum of all even numbers in a list.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Functional Mastery & Macros",
    level: "Intermediate",
    steps: [
      {
        what: "Functional Programming (Map, Reduce, Filter)",
        why: "To write higher-level code that processes data as streams. These are the workhorses of professional Lisp.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Higher Order Functions in Lisp", url: "https://www.cs.cmu.edu/~dst/LispBook/book.pdf" },
        ],
        practice: "Use 'reduce' to find the average of a list. Use 'filter' (remove-if-not) to get only strings from a mixed list.",
      },
      {
        what: "Recursion & Tail Call Optimization",
        why: "Lisp prefers recursion. Understanding how the compiler optimizes calls prevents stack overflow.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Recursion in Lisp", url: "https://www.youtube.com/watch?v=look-up-lisp-recursion" },
        ],
        practice: "Implement the Fibonacci sequence using both standard and tail-recursive versions.",
      },
      {
        what: "Macros: Code as Data (Homoiconicity)",
        why: "The reason Lisp exists. Macros allow you to change the language by writing code that generates code.",
        time: "2 Weeks",
        prereqs: "Step 4",
        resources: [
          { name: "Beating the Averages (Paul Graham)", url: "http://www.paulgraham.com/avg.html" },
          { name: "Macros Tutorial", url: "https://lispcookbook.github.io/cl-cookbook/macros.html" },
        ],
        practice: "Write a macro 'backwards' that evaluates code written in reverse order (e.g., (backwards (1 2 +))).",
      },
      {
        what: "Backquote & Unquote (`, , @)",
        why: "To template code generation within macros. It's the 'templating engine' for your logic.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "The Backquote Character", url: "https://www.gnu.org/software/emacs/manual/html_node/elisp/Backquote.html" },
        ],
        practice: "Build a macro that takes a list of variable names and initializes them all to zero.",
      },
      {
        what: "Closures & Dynamic Scope",
        why: "Lisp supports both lexical and dynamic scope. Understanding the difference is vital for state management.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Scope and Extent", url: "https://www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.html" },
        ],
        practice: "Create a function factory that returns closures with private counter variables.",
      },
      {
        what: "CLOS: Common Lisp Object System",
        why: "The most powerful OOP system in existence. Learn Generic Functions and Multiple Dispatch.",
        time: "2 Weeks",
        prereqs: "Beginner Stage",
        resources: [
          { name: "CLOS Tutorial", url: "https://lispcookbook.github.io/cl-cookbook/clos.html" },
        ],
        practice: "Implement a 'Shape' hierarchy where 'area' is a generic function dispatched on type.",
      },
      {
        what: "The Condition System (Error Handling)",
        why: "Go beyond try/catch. Lisp allows you to fix errors and resume execution without unwinding the stack.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "The Condition System", url: "https://lispcookbook.github.io/cl-cookbook/error-handling.html" },
        ],
        practice: "Write a program that catches a file-not-found error and offers a 'restart' to pick a new file path.",
      },
      {
        what: "Quicklisp & ASDF",
        why: "To manage external libraries and define your own systems (projects).",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Quicklisp Official", url: "https://www.quicklisp.org/" },
        ],
        practice: "Install the 'Drakma' library and use it to perform an HTTP request.",
      },
      {
        what: "File I/O & Pathnames",
        why: "To read and write data. Lisp's pathname system is cross-platform by design.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "File I/O Guide", url: "https://lispcookbook.github.io/cl-cookbook/files.html" },
        ],
        practice: "Write a script that reads a CSV and stores each row as a list inside a larger list.",
      },
      {
        what: "Foreign Function Interface (CFFI)",
        why: "To call C libraries from Lisp for performance or hardware access.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "CFFI User Guide", url: "https://common-lisp.net/project/cffi/manual/html_node/index.html" },
        ],
        practice: "Call the C 'printf' function from your Lisp REPL.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Metacircular Design",
    level: "Advanced",
    steps: [
      {
        what: "Advanced Macros & DSL Design",
        why: "To create entire mini-languages inside Lisp. This is how high-end Lisp systems (like Emacs or Autocad) work.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "On Lisp (Paul Graham)", url: "http://www.paulgraham.com/onlisp.html" },
        ],
        practice: "Build a mini-DSL for defining HTML tables using purely Lisp syntax.",
      },
      {
        what: "CLOS Method Combinators",
        why: "To master advanced OOP patterns like 'Before', 'After', and 'Around' methods.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Advanced CLOS", url: "https://lispcookbook.github.io/cl-cookbook/clos.html#method-combination" },
        ],
        practice: "Use 'around' methods to add logging to a database wrapper without changing the core logic.",
      },
      {
        what: "Concurrency: Bordeaux-Threads",
        why: "To build multi-threaded applications on the BEAM or JVM (if using Clojure) or natively in CL.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Bordeaux-Threads API", url: "https://triki.common-lisp.dev/bordeaux-threads" },
        ],
        practice: "Build a parallel web scraper that fetches 10 sites simultaneously using threads.",
      },
      {
        what: "Web Development: Hunchentoot",
        why: "To build high-performance web servers and APIs using the premier Lisp web framework.",
        time: "2 Weeks",
        prereqs: "Step 18",
        resources: [
          { name: "Hunchentoot Documentation", url: "https://edicl.github.io/hunchentoot/" },
        ],
        practice: "Create a REST API that accepts a number and returns its prime factors in JSON.",
      },
      {
        what: "Performance Profiling & Optimization",
        why: "To ensure your Lisp code runs as fast as C. Learn to use 'time' and compiler declarations.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Optimizing Lisp Code", url: "https://lispcookbook.github.io/cl-cookbook/performance.html" },
        ],
        practice: "Identify a slow procedure and optimize it using type declarations (check-type).",
      },
      {
        what: "Metacircular Evaluators",
        why: "The ultimate academic exercise. Write a Lisp interpreter in Lisp to understand how languages are born.",
        time: "3 Weeks",
        prereqs: "All Intermediate steps",
        resources: [
          { name: "SICP - Chapter 4: Metalinguistic Abstraction", url: "https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-25.html" },
        ],
        practice: "Build a minimal Lisp interpreter that supports defun, if, and basic arithmetic.",
      },
      {
        what: "Artificial Intelligence: Classical AI",
        why: "Lisp is the language of AI. Learn search algorithms, symbolic logic, and expert systems.",
        time: "2 Weeks",
        prereqs: "Recursion Mastery",
        resources: [
          { name: "Paradigms of AI Programming (PAIP)", url: "https://github.com/norvig/paip-lisp" },
        ],
        practice: "Implement a simple Breadth-First Search (BFS) to solve a maze.",
      },
      {
        what: "Deployment & Standalone Binaries",
        why: "To share your Lisp applications with users who don't have Lisp installed.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Creating Executables", url: "https://lispcookbook.github.io/cl-cookbook/scripting.html" },
        ],
        practice: "Compile a CLI tool into a standalone executable using 'asdf:make'.",
      },
      {
        what: "Interfacing with Databases (Postmodern)",
        why: "To build data-driven applications using PostgreSQL.",
        time: "1 Week",
        prereqs: "Step 18",
        resources: [
          { name: "Postmodern Library", url: "https://marijnhaverbeke.nl/postmodern/" },
        ],
        practice: "Connect to a DB and perform a simple query to retrieve user records.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Macros, Web, Database, and Performance.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Lisp-powered Blog Engine' with a custom DSL for page layout and a persistent DB backend.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Word Frequency Tool", teaches: "Lists, Hash Tables, and File I/O.", tech: "Common Lisp" },
  { level: "Beginner", title: "Personal Unit Converter", teaches: "Functions, Conditionals, and Math.", tech: "SBCL" },
  { level: "Beginner", title: "Number Guessing Game", teaches: "Loops, I/O, and Randomness.", tech: "Common Lisp" },
  { level: "Intermediate", title: "Interactive Lisp Shell (Mini)", teaches: "Eval, Read, and Print loop logic.", tech: "Lisp" },
  { level: "Intermediate", title: "Text-Based Adventure Engine", teaches: "CLOS, State Management, and Data modeling.", tech: "Common Lisp, CLOS" },
  { level: "Intermediate", title: "Recursive File Search Utility", teaches: "Recursion, File System API.", tech: "Lisp, UIOP" },
  { level: "Intermediate", title: "REST API for Tasks", teaches: "Hunchentoot, JSON handling, and Routing.", tech: "Lisp, Hunchentoot" },
  { level: "Advanced", title: "HTML Generator DSL", teaches: "Advanced Macros, Backquote, and Templates.", tech: "Metaprogramming" },
  { level: "Advanced", title: "Symbolic Logic Engine", teaches: "Unification, AI search, and expert rules.", tech: "Lisp, Logic" },
  { level: "Advanced", title: "Distributed Task Queue", teaches: "Concurrency, Threads, and Socket programming.", tech: "Lisp, Bordeaux-threads" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on syntax and functional thinking to master the core Lisp logic.",
    schedule: [
      "Days 1-7: Installation, REPL, and S-Expressions.",
      "Days 8-15: List manipulation (car/cdr) and Recursion.",
      "Days 16-23: Functions, Lambdas, and Conditionals.",
      "Days 24-30: Build 2 beginner projects and learn basic File I/O.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Macro Expert",
    description: "Balanced path covering the power of metaprogramming and systems.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Macros, Backquote, and Functional patterns.",
      "Days 46-60: Quicklisp, ASDF, and building an Intermediate project.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Lisp Architect",
    description: "Comprehensive path for professional systems and AI development.",
    schedule: [
      "Days 1-30: Core Development & Functional logic.",
      "Days 31-60: Professional Systems (CLOS, Web, Database).",
      "Days 61-90: Advanced Macros, Performance, AI, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "What is an S-Expression? Explain the Homoiconicity of Lisp.",
  "Difference between a Symbol and a String.",
  "Explain the difference between Lexical and Dynamic scoping.",
  "How does a Lisp Macro differ from a C Macro?",
  "Describe the 'Condition System' and why it's better than standard Exceptions.",
  "What is the REPL and why is it central to Lisp development?",
  "Explain Multiple Dispatch in CLOS.",
  "What is Garbage Collection and how does it work in Lisp environments?",
  "What is the role of Quicklisp and ASDF?",
  "Difference between 'car'/'cdr' and 'first'/'rest'.",
];

const codingQuestions = [
  { question: "Implement a function to find the Nth element of a list recursively.", topic: "Recursion" },
  { question: "Write a macro 'let1' that simplifies a single-variable 'let'.", topic: "Macros" },
  { question: "Implement a function that deep-flattens a nested list.", topic: "List Manipulation" },
  { question: "Create a generic function 'draw' that handles different geometric structs.", topic: "CLOS" },
];

const mcqs = [
  { question: "Which function is used to add an element to the front of a list?", options: ["append", "cons", "push", "insert"], answer: "cons" },
  { question: "What does 'Lisp' originally stand for?", options: ["List Processing", "Logic In Simple Programming", "Linked System Protocol", "List Search Programming"], answer: "List Processing" },
  { question: "Which operator prevents a form from being evaluated?", options: ["eval", "quote", "setq", "defun"], answer: "quote" },
];

const mistakes = [
  "Parentheses Mismatch: Forgetting to close a bracket is the #1 beginner error.",
  "Forgetting ' (Quote): Trying to pass a list as data without quoting it first.",
  "Over-using Global Variables: Not utilizing 'let' for local scoping leads to side effects.",
  "Ignoring the REPL: Trying to write whole files before testing snippets in the console.",
  "Recursion without a Base Case: This will crash your stack instantly.",
  "Tutorial Hell: Reading PAIP or SICP for weeks without running code in SBCL.",
  "Not using Quicklisp: Trying to manage libraries manually is a nightmare.",
  "Using 'setq' for everything: Prefer functional patterns over imperative assignments.",
  "Ignoring compiler warnings: Lisp compilers are extremely helpful—listen to them.",
  "Over-engineering Macros: Using a macro when a simple function would suffice.",
];

export default function LispRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Braces className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Lisp Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the "Ancient Art" of programmable programming. From the absolute foundations of S-expressions to advanced metaprogramming, symbolic AI, and the legendary power of Macros.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Popular and Widely Used Languages">
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
            <CardDescription>Expert guidance to help you land your dream Lisp or AI role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Macro Challenges</h3>
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
                    {['Common Lisp', 'Macros', 'S-Expressions', 'Homoiconicity', 'CLOS', 'SBCL', 'Functional Programming', 'Symbolic AI', 'DSL Design', 'Metaprogramming', 'Recursion', 'Quicklisp'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Code as Data'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests to demonstrate code reliability.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with domain-specific languages you've built.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Code Your Way into the Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Lisp isn't just a language; it's a way of looking at the universe of computation. It rewards the curious and the precise. Stay consistent, embrace the parentheses, and remember: The most advanced systems in the world were born from the principles you're mastering today. Your journey to Lisp mastery starts now!
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
