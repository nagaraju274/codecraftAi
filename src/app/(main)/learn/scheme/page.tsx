
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Functional Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Chez Scheme/Guile Setup",
        why: "To set up a professional Scheme environment. Chez Scheme is known for speed, while GNU Guile is the official extensibility language of the GNU system.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Chez Scheme Official Site", url: "https://cisco.github.io/ChezScheme/" },
          { name: "GNU Guile - Getting Started", url: "https://www.gnu.org/software/guile/manual/html_node/Getting-Started.html" },
        ],
        practice: "Install Chez Scheme or Guile. Open the REPL and run '(display \"Hello, Scheme!\")'.",
      },
      {
        what: "S-Expressions & Prefix Notation",
        why: "Everything in Scheme is an S-expression. Understanding the (operator operand1 operand2) syntax is the key to reading any Lisp-based code.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "The Scheme Programming Language (Book)", url: "https://scheme.com/tspl4/intro.html" },
        ],
        practice: "Convert 10 complex mathematical formulas into Scheme S-expressions.",
      },
      {
        what: "Values, Symbols & Quotes",
        why: "To distinguish between code to be executed and data to be processed. The 'quote' operator is central to Scheme logic.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Scheme Syntax and Data Types", url: "https://www.scheme.com/tspl4/syntax.html" },
        ],
        practice: "Experiment with quoting lists and symbols in the REPL to see how evaluation is suppressed.",
      },
      {
        what: "Functions: define & lambda",
        why: "Functions are first-class citizens. Learning to create named functions with 'define' and anonymous ones with 'lambda' is essential.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Procedures and Variables", url: "https://scheme.com/tspl4/start.html#./start:h1" },
        ],
        practice: "Write a function that calculates the area of a circle. Create a lambda that squares a number and apply it immediately.",
      },
      {
        what: "Recursion (The Loop Alternative)",
        why: "Scheme has no traditional 'for' or 'while' loops. You must master recursion to perform any iterative task.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Recursion in Scheme", url: "https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours/Recursion" },
        ],
        practice: "Write a recursive function to calculate the factorial of N and another to find the Nth Fibonacci number.",
      },
      {
        what: "Tail-Call Optimization (TCO)",
        why: "To write memory-efficient loops. TCO allows Scheme to run recursive calls without growing the stack, making them as fast as C loops.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Tail Recursion Explained", url: "https://wiki.haskell.org/Tail_recursion" },
        ],
        practice: "Rewrite your factorial function using an accumulator to make it tail-recursive.",
      },
      {
        what: "Lists: Cons, Car & Cdr",
        why: "The 'Big Three' of Lisp. Car (head), Cdr (tail), and Cons (constructor) are how you build and traverse data structures.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "List Processing in Scheme", url: "https://scheme.com/tspl4/start.html#./start:h4" },
        ],
        practice: "Implement a function that returns the second-to-last element of a list using only car and cdr.",
      },
      {
        what: "Control Flow: IF & COND",
        why: "To implement logic branching. 'cond' is the standard for multi-way branches in Scheme.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Structures Guide", url: "https://scheme.com/tspl4/control.html" },
        ],
        practice: "Write a function that returns a letter grade (A, B, C) based on a numeric score using 'cond'.",
      },
      {
        what: "Local Scoping: let, let*, letrec",
        why: "To manage variables within a specific block of code. Understanding the subtle differences in variable visibility is vital.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Local Binding", url: "https://scheme.com/tspl4/start.html#./start:h2" },
        ],
        practice: "Refactor a complex calculation to use 'let' for storing intermediate results.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Closures & Metaprogramming",
    level: "Intermediate",
    steps: [
      {
        what: "Closures & Lexical Scoping",
        why: "To create functions that 'remember' their environment. Closures are the foundation for state management in functional programming.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Closures in Scheme", url: "https://www.youtube.com/watch?v=look-up-scheme-closures" },
        ],
        practice: "Create a function 'make-counter' that returns a closure with its own private internal state.",
      },
      {
        what: "Higher-Order Functions: map, apply & filter",
        why: "To write expressive code that processes data as streams. These are the workhorses of professional Scheme.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Mapping and Filtering", url: "https://scheme.com/tspl4/control.html#./control:h3" },
        ],
        practice: "Use 'map' to square every number in a list. Use 'filter' to keep only the even ones.",
      },
      {
        what: "Continuations: call/cc",
        why: "Scheme's 'superpower'. Continuations allow you to capture the current state of a program and resume it later, enabling custom control flow.",
        time: "2 Weeks",
        prereqs: "Step 10",
        resources: [
          { name: "Continuations Guide", url: "https://scheme.com/tspl4/control.html#./control:h4" },
          { name: "The Power of Call/CC", url: "https://www.youtube.com/watch?v=id-call-cc" },
        ],
        practice: "Use 'call/cc' to implement a simple 'break' or 'return' statement inside a nested loop.",
      },
      {
        what: "Macros: syntax-rules",
        why: "To extend the language syntax. 'syntax-rules' allows you to write hygienic macros that generate code without name collisions.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Macros in Scheme", url: "https://scheme.com/tspl4/syntax.html#./syntax:h1" },
        ],
        practice: "Write a macro 'unless' that evaluates a block only if a condition is false.",
      },
      {
        what: "Pairs, Lists & Internal Representation",
        why: "To understand how Scheme data is actually stored in memory. Essential for debugging and performance tuning.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Internal Data Structures", url: "https://scheme.com/tspl4/objects.html" },
        ],
        practice: "Draw the 'box and pointer' diagram for a complex nested list.",
      },
      {
        what: "Exception Handling: with-exception-handler",
        why: "To build robust applications that can recover from errors gracefully.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "Exceptions in Scheme", url: "https://scheme.com/tspl4/exceptions.html" },
        ],
        practice: "Implement a file-read function that catches 'file not found' errors and returns a default value.",
      },
      {
        what: "Modules & Library Structure (R7RS)",
        why: "To organize large projects. R7RS modules allow for portable code sharing between different Scheme implementations.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "R7RS Library System", url: "https://standards.scheme.org/official/r7rs.pdf" },
        ],
        practice: "Create a library module for your math functions and import it into a separate program.",
      },
      {
        what: "Dynamic Parameters & Fluid Binding",
        why: "To manage global-like state safely in a multi-threaded or complex environment.",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Parameters in Scheme", url: "https://scheme.com/tspl4/control.html#./control:h2" },
        ],
        practice: "Use 'parameterize' to temporarily change a global configuration value within a specific scope.",
      },
      {
        what: "File I/O & Ports",
        why: "To read and write persistent data. Scheme uses 'ports' as an abstraction for data streams.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "Input and Output", url: "https://scheme.com/tspl4/io.html" },
        ],
        practice: "Write a script that reads a CSV file and converts it into a list of Scheme maps.",
      },
    ],
  },
  {
    title: "Advanced Stage: Compilers & Language Design",
    level: "Advanced",
    steps: [
      {
        what: "Metacircular Evaluators",
        why: "The ultimate academic exercise. Write a Scheme interpreter in Scheme to understand how languages are born.",
        time: "3 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "SICP - Chapter 4: Metalinguistic Abstraction", url: "https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-25.html" },
        ],
        practice: "Build a minimal Scheme interpreter that supports 'define', 'if', and 'lambda'.",
      },
      {
        what: "Advanced Macros: syntax-case",
        why: "To build non-hygienic or complex macros that need to inspect the details of the code they transform.",
        time: "2 Weeks",
        prereqs: "Step 13",
        resources: [
          { name: "syntax-case manual", url: "https://scheme.com/tspl4/syntax.html#./syntax:h2" },
        ],
        practice: "Write a macro that automatically generates getters and setters for a record type.",
      },
      {
        what: "Compiling Scheme to C",
        why: "To understand how a high-level functional language can achieve near-native performance.",
        time: "2 Weeks",
        prereqs: "C Basics",
        resources: [
          { name: "Chicken Scheme (Compiler)", url: "https://www.call-cc.org/" },
        ],
        practice: "Compile a Scheme script using Chicken Scheme and inspect the generated C source code.",
      },
      {
        what: "Foreign Function Interface (FFI)",
        why: "To use existing C/C++ libraries (like OpenSSL or SDL) from your Scheme code.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "Guile FFI Documentation", url: "https://www.gnu.org/software/guile/manual/html_node/Foreign-Function-Interface.html" },
        ],
        practice: "Call the C 'sqrt' or 'printf' function from your Scheme REPL.",
      },
      {
        what: "Logic Programming in Scheme (miniKanren)",
        why: "To learn how to implement relational and logical programming paradigms within a functional language.",
        time: "2 Weeks",
        prereqs: "Recursion Mastery",
        resources: [
          { name: "miniKanren Official Site", url: "http://minikanren.org/" },
        ],
        practice: "Implement a simple ancestor-lookup logic using a miniKanren implementation in Scheme.",
      },
      {
        what: "Performance Profiling & Optimization",
        why: "To find bottlenecks in slow procedures. Optimization in Scheme requires understanding the BEAM/JVM or native target.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Scheme Code", url: "https://www.gnu.org/software/guile/manual/html_node/Profiling.html" },
        ],
        practice: "Identify a slow procedure and optimize it using type hints (if supported) or better algorithm choice.",
      },
      {
        what: "Formal Verification Foundations",
        why: "To understand how the mathematical purity of Scheme lends itself to proving code correctness.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Programming Languages: Application and Interpretation", url: "https://www.plai.org/" },
        ],
        practice: "Read about the connection between Scheme and formal semantics.",
      },
      {
        what: "Concurrent Programming (Actors)",
        why: "To build systems that can perform multiple tasks simultaneously using lightweight processes.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Guile Concurrency", url: "https://www.gnu.org/software/guile/manual/html_node/Scheduling.html" },
        ],
        practice: "Build a parallel web scraper that fetches 5 sites simultaneously using threads or fibers.",
      },
      {
        what: "Object Systems: GOOPS",
        why: "To understand how to implement Object-Oriented patterns in a functional language.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Guile GOOPS Manual", url: "https://www.gnu.org/software/guile/manual/html_node/GOOPS.html" },
        ],
        practice: "Define a class hierarchy for 'GemetricShapes' using multiple dispatch.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Interpreters, Macros, and Performance into a professional tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Lisp-powered Web Engine' or a 'Scheme Interpreter for a custom DSL'.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Recursive Calculator", teaches: "Recursion, S-expressions, and Arithmetic.", tech: "Chez Scheme" },
  { level: "Beginner", title: "CLI Word Frequency Tool", teaches: "Lists, HOFs, and basic File I/O.", tech: "Scheme" },
  { level: "Beginner", title: "Unit Converter Library", teaches: "Functions, Parameters, and Conditionals.", tech: "Scheme" },
  { level: "Intermediate", title: "Sudoku Solver", teaches: "Backtracking, Recursion, and State.", tech: "Scheme" },
  { level: "Intermediate", title: "JSON Parser DSL", teaches: "Advanced Macros (syntax-rules) and strings.", tech: "Scheme" },
  { level: "Intermediate", title: "Interactive RPG Engine", teaches: "Closures, local state, and I/O.", tech: "Scheme" },
  { level: "Intermediate", title: "Markdown to HTML Converter", teaches: "Pattern matching, Strings, and recursion.", tech: "Scheme" },
  { level: "Advanced", title: "Metacircular Evaluator", teaches: "Interpreter design, Evaluation logic, and Scoping.", tech: "Advanced Scheme" },
  { level: "Advanced", title: "Logic Programming Engine", teaches: "Unification, miniKanren concepts.", tech: "Scheme, Logic" },
  { level: "Advanced", title: "High-Speed C-Interop Wrapper", teaches: "FFI, performance tuning, and external linking.", tech: "Guile / Chicken" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on syntax, recursion, and functional thinking to master the core Scheme logic.",
    schedule: [
      "Days 1-7: Installation, REPL, and S-Expressions.",
      "Days 8-15: List manipulation (car/cdr) and Recursion.",
      "Days 16-23: Functions, Lambda, and Conditionals.",
      "Days 24-30: Build 2 beginner projects and learn basic File I/O.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Macro Expert",
    description: "Balanced path covering the power of metaprogramming and closures.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Closures, HOFs, and Macro basics.",
      "Days 46-60: Continuations (call/cc), Modules, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Functional Architect",
    description: "Comprehensive path for professional systems and high-integrity development.",
    schedule: [
      "Days 1-30: Core Development & Functional logic.",
      "Days 31-60: Professional Systems (Exceptions, FFI, Testing).",
      "Days 61-90: Compilers, Metacircular Evaluators, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain S-Expressions and Homoiconicity.",
  "Difference between Car, Cdr, and Cons.",
  "What is Tail-Call Optimization and why is it mandatory in Scheme?",
  "Explain the difference between 'let', 'let*', and 'letrec'.",
  "What are Continuations (call/cc)? Provide a use case.",
  "Describe the 'Hygienic Macro' system.",
  "Difference between a Symbol and a String in Lisp.",
  "Explain Lexical vs. Dynamic scoping.",
  "How do you handle error cases in a pure functional language?",
  "Describe the Metacircular Evaluator concept.",
];

const codingQuestions = [
  { question: "Implement 'map' using only recursion and 'cons'.", topic: "Recursion" },
  { question: "Write a tail-recursive function to reverse a list.", topic: "Optimization" },
  { question: "Create a macro that implements a 'while' loop.", topic: "Macros" },
  { question: "Implement a function that detects if a list is a palindrome.", topic: "Lists" },
];

const mcqs = [
  { question: "Which function returns the tail of a list?", options: ["head", "car", "tail", "cdr"], answer: "cdr" },
  { question: "What is the result of '(car '(1 2 3))'?", options: ["1", "(1)", "(2 3)", "null"], answer: "1" },
  { question: "Which construct is used for local variable binding?", options: ["def", "set!", "let", "var"], answer: "let" },
];

const mistakes = [
  "Parentheses Mismatch: Forgetting to close a bracket is the #1 error.",
  "Confusing '=' (comparison) with 'set!' (assignment).",
  "Forgetting the Quote ('): Passing a list as data without quoting it first.",
  "Ignoring Tail Recursion: Leading to stack overflows on large datasets.",
  "Over-using 'set!': Prefer functional patterns over mutable state.",
  "Tutorial Hell: Reading SICP for weeks without running code in a REPL.",
  "Trying to write imperative 'for' loops: Use recursion instead.",
  "Ignoring the Logger: Not checking REPL errors for complex logic.",
  "Hardcoding paths: Not using implementation-specific file utilities.",
  "Over-engineering Macros: Using a macro when a simple function would suffice.",
];

export default function SchemeRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Braces className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Scheme Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the "Elegance of Minimalism". From absolute foundations of S-expressions to advanced metacircular evaluators, hygienic macros, and the power of continuations.
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Recursion Challenges</h3>
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
                    {['Scheme', 'Lisp', 'Functional Programming', 'S-Expressions', 'Recursion', 'Tail-Call Optimization', 'Hygienic Macros', 'Continuations', 'call/cc', 'Metacircular Evaluator', 'miniKanren', 'R7RS'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Code as Data' and 'Language Extensibility'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase your metacircular evaluator project on GitHub.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Code Your Way into Clarity</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Scheme isn't just a language; it's a way of looking at the universe of computation. It rewards the curious and the precise. Stay consistent, embrace the parentheses, and remember: The most beautiful systems in the world were born from the principles you're mastering today. Your journey to functional mastery starts now!
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
