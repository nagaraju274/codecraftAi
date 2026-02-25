
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
        what: "Introduction & GHC Setup",
        why: "To set up the Glasgow Haskell Compiler (GHC) and GHcup. Understanding the REPL (GHCi) is the first step to exploring Haskell's evaluation.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Haskell.org - Get Started", url: "https://www.haskell.org/downloads/" },
          { name: "Haskell for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=02_H3Ljq7-I" },
        ],
        practice: "Install GHC and Stack/Cabal. Open GHCi and perform basic arithmetic. Run your first .hs file.",
      },
      {
        what: "Values, Types & Immutability",
        why: "In Haskell, variables are immutable values. Mastering basic types like Int, Float, Bool, and Char is the core of the language.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Learn You a Haskell: Types and Typeclasses", url: "http://learnyouahaskell.com/types-and-typeclasses" },
        ],
        practice: "Declare values for a person's profile. Observe that you cannot re-assign a value once defined.",
      },
      {
        what: "Functions & Type Signatures",
        why: "Functions are first-class citizens. Learning the syntax `fn :: Type -> Type` is vital for reading Haskell code.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Haskell Functions Guide", url: "https://en.wikibooks.org/wiki/Haskell/Variables_and_functions" },
        ],
        practice: "Write functions for basic math operations with explicit type signatures.",
      },
      {
        what: "Lists & Recursion (The Loop Alternative)",
        why: "Haskell has no 'for' or 'while' loops. You must master recursion and the '[x|x <- list]' list comprehension syntax.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Learn You a Haskell: Recursion", url: "http://learnyouahaskell.com/recursion" },
        ],
        practice: "Write a recursive function to find the maximum element in a list.",
      },
      {
        what: "Pattern Matching & Guards",
        why: "To handle different data shapes elegantly. Pattern matching replaces nested 'if' statements in functional programming.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Syntax in Functions", url: "http://learnyouahaskell.com/syntax-in-functions" },
        ],
        practice: "Write a function that describes a list (empty, single element, or many) using pattern matching.",
      },
      {
        what: "Currying & Partial Application",
        why: "Haskell functions only take one argument. Understanding how `f x y` is really `(f x) y` is key to functional power.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Currying Explained", url: "https://wiki.haskell.org/Currying" },
        ],
        practice: "Create a 'multiplier' function and partially apply it to create a 'doubler' and 'tripler'.",
      },
      {
        what: "Higher-Order Functions (Map, Filter, Fold)",
        why: "The workhorses of functional programming. They allow you to process collections with linear, readable logic.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Higher Order Functions Guide", url: "http://learnyouahaskell.com/higher-order-functions" },
        ],
        practice: "Take a list of strings and use map/filter to return only the uppercase versions of strings longer than 5 chars.",
      },
      {
        what: "Tuples & Custom Data Types (Data)",
        why: "To model complex domain data. Learn the difference between Product types (tuples) and Sum types (enums).",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Defining Your Own Types", url: "http://learnyouahaskell.com/making-our-own-types-and-typeclasses" },
        ],
        practice: "Model a 'Shape' type that can be a Circle, Rectangle, or Triangle.",
      },
      {
        what: "Lazy Evaluation Basics",
        why: "Haskell doesn't compute values until needed. This allows for infinite data structures and unique optimizations.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Laziness in Haskell", url: "https://wiki.haskell.org/Lazy_evaluation" },
        ],
        practice: "Create an infinite list of even numbers and use 'take 10' to see only the first ten.",
      },
      {
        what: "Modules & Project Structure",
        why: "To organize large codebases. Learn to use 'import' and the standard project layout.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Haskell Modules", url: "http://learnyouahaskell.com/modules" },
        ],
        practice: "Move your math functions into a 'MathUtils' module and import it into a main file.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Type Systems & Abstractions",
    level: "Intermediate",
    steps: [
      {
        what: "Type Classes (Eq, Ord, Show)",
        why: "Type classes provide polymorphism. Understanding how a function can work on any type that is 'Ordered' or 'Showable'.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "A Gentle Intro to Type Classes", url: "https://www.haskell.org/tutorial/classes.html" },
        ],
        practice: "Create a custom type and implement the 'Show' and 'Eq' type classes for it manually.",
      },
      {
        what: "The Functor Typeclass",
        why: "To apply a function inside a context (like a List or Option) without reaching into the container.",
        time: "5 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Functors, Applicatives, and Monads In Pictures", url: "https://www.adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html" },
        ],
        practice: "Use 'fmap' to increment an integer inside a 'Maybe' and a 'List'.",
      },
      {
        what: "Maybe & Either (Handling Errors)",
        why: "Haskell doesn't use null or exceptions for logic. These types force you to handle success and failure explicitly.",
        time: "4 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Error Handling in Haskell", url: "https://wiki.haskell.org/Error_handling" },
        ],
        practice: "Write a division function that returns 'Nothing' on zero and 'Just result' otherwise.",
      },
      {
        what: "Applicative Functors",
        why: "To apply a function wrapped in a context to a value wrapped in a context. Used for parallel-like effects.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Applicatives Guide", url: "http://learnyouahaskell.com/functors-applicative-functors-and-monoids#applicative-functors" },
        ],
        practice: "Use the <*> operator to combine two Maybe values with a summing function.",
      },
      {
        what: "The IO Monad: Impure World",
        why: "To handle side effects (printing, reading files) while keeping the rest of the code pure.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Input and Output", url: "http://learnyouahaskell.com/input-and-output" },
        ],
        practice: "Write a program that asks for a user's name and favorite color, then saves it to a file.",
      },
      {
        what: "Monads: The 'Do' Notation",
        why: "To sequence computations that have context (like state or errors) in a readable, imperatively-styled way.",
        time: "2 Weeks",
        prereqs: "Step 14, Step 15",
        resources: [
          { name: "A Fistful of Monads", url: "http://learnyouahaskell.com/a-fistful-of-monads" },
        ],
        practice: "Refactor a series of nested 'case' expressions for Maybe types into a single 'do' block.",
      },
      {
        what: "Monoids & Semigroups",
        why: "To master the patterns of combining data. These are the algebraic building blocks of parallel and big data processing.",
        time: "5 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Monoids Guide", url: "http://learnyouahaskell.com/functors-applicative-functors-and-monoids#monoids" },
        ],
        practice: "Implement a Monoid instance for a custom 'Score' type that combines points and tracks winners.",
      },
      {
        what: "Standard Libraries: ByteString & Text",
        why: "Standard Strings in Haskell are slow linked lists. Professional apps use 'Text' for words and 'ByteString' for data.",
        time: "4 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Haskell Text Tutorial", url: "https://www.fpcomplete.com/haskell/tutorial/string-types/" },
        ],
        practice: "Write a script that processes a 10MB text file efficiently using Data.Text.",
      },
      {
        what: "Cabal & Stack (Deep Dive)",
        why: "To manage complex multi-library projects and handle reproducible builds.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "The Haskell Toolstack", url: "https://docs.haskellstack.org/en/stable/README/" },
        ],
        practice: "Initialize a new stack project, add a dependency like 'aeson', and compile it.",
      },
      {
        what: "Unit Testing (HUnit & QuickCheck)",
        why: "To ensure logic reliability. QuickCheck is a legendary Haskell tool that generates random tests to find edge cases.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "QuickCheck Tutorial", url: "https://www.youtube.com/watch?v=look-up-quickcheck" },
        ],
        practice: "Write a property-based test that verifies that reversing a list twice returns the original list.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Functional Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Monad Transformers (MTL)",
        why: "To combine multiple monads (e.g., State + Error + IO) into a single stack for complex application logic.",
        time: "2 Weeks",
        prereqs: "Step 16",
        resources: [
          { name: "Monad Transformers Step-by-Step", url: "https://page.mi.fu-berlin.de/scravy/realworldhaskell/transformers.html" },
        ],
        practice: "Build a small game engine loop using StateT and IO.",
      },
      {
        what: "Type-Level Programming (GADTs)",
        why: "To encode business logic into the type system itself, making certain classes of bugs mathematically impossible.",
        time: "2 Weeks",
        prereqs: "Step 11",
        resources: [
          { name: "GADTs in Haskell", url: "https://en.wikibooks.org/wiki/Haskell/GADT" },
        ],
        practice: "Implement a type-safe expression evaluator that prevents adding a String to an Int at compile-time.",
      },
      {
        what: "Concurrency & Parallelism (STM)",
        why: "Software Transactional Memory (STM) makes writing thread-safe code as easy as managing database transactions.",
        time: "2 Weeks",
        prereqs: "Step 15",
        resources: [
          { name: "Parallel and Concurrent Programming in Haskell (Book)", url: "https://simonmar.github.io/pages/pcph.html" },
        ],
        practice: "Build a thread-safe shared counter using TVars and atomically blocks.",
      },
      {
        what: "Parsing with Parsec / Megaparsec",
        why: "Haskell is the best language for building parsers and compilers. Learn to turn text into structured data.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Monadic Parsing in Haskell", url: "https://www.youtube.com/watch?v=look-up-parsing-haskell" },
        ],
        practice: "Write a parser for a subset of JSON or a simple mathematical language.",
      },
      {
        what: "Lens & Optics",
        why: "To manipulate deep nested data structures elegantly without massive boilerplate.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Lens Over Tea (Blog Series)", url: "https://artyom.me/lens-over-tea-1" },
        ],
        practice: "Update a deeply nested field inside a complex object using the Lens library.",
      },
      {
        what: "Web Development: Yesod or Servant",
        why: "To build type-safe, high-performance web APIs and applications. Servant generates documentation and clients automatically.",
        time: "2 Weeks",
        prereqs: "Advanced Monads",
        resources: [
          { name: "Servant: A Type-Level Web DSL", url: "https://www.servant.dev/tutorial/" },
        ],
        practice: "Build a REST API for a library system where the routes are defined at the type level.",
      },
      {
        what: "Profiling & Performance (GHC RTS)",
        why: "To identify space leaks and optimize the GHC runtime system settings for production speed.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Haskell Code", url: "https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/profiling.html" },
        ],
        practice: "Use 'ghc-prof' to find a space leak in a recursive function and fix it using 'seq' or 'BangPatterns'.",
      },
      {
        what: "GHC Generics & Generic Programming",
        why: "To write functions that work on any data structure automatically (like auto-generating JSON encoders).",
        time: "1 Week",
        prereqs: "Step 22",
        resources: [
          { name: "Generic Programming in Haskell", url: "https://wiki.haskell.org/GHC.Generics" },
        ],
        practice: "Implement a generic 'ToString' function that works for any record type.",
      },
      {
        what: "FFI: Interfacing with C",
        why: "To use existing high-speed C libraries or expose Haskell logic to other languages.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "Foreign Function Interface (Wiki)", url: "https://wiki.haskell.org/FFI_Introduction" },
        ],
        practice: "Call the C 'sqrt' function from Haskell using the FFI.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Type safety, Monads, and Performance into a professional tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Lisp Interpreter' or a 'Static Site Generator' with parallel processing and type-safe config.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Unit Converter", teaches: "Input/Output, Math, and Pattern Matching.", tech: "Haskell, GHC" },
  { level: "Beginner", title: "Word Frequency Counter", teaches: "Lists, HOFs, and basic File I/O.", tech: "Haskell" },
  { level: "Beginner", title: "Prime Number Finder", teaches: "Recursion and lazy evaluation.", tech: "Haskell" },
  { level: "Intermediate", title: "JSON Data Parser", teaches: "Parsec, Applicatives, and custom data types.", tech: "Haskell, Parsec" },
  { level: "Intermediate", title: "Interactive Todo CLI", teaches: "State management, IO, and List processing.", tech: "Haskell" },
  { level: "Intermediate", title: "Expression Evaluator", teaches: "Recursion, Algebraic Data Types (ADTs).", tech: "Haskell" },
  { level: "Intermediate", title: "Markdown to HTML Converter", teaches: "Strings, Regex (or parsing), and recursion.", tech: "Haskell" },
  { level: "Advanced", title: "Concurrent Web Crawler", teaches: "STM, Parallelism, and Async I/O.", tech: "Haskell, STM" },
  { level: "Advanced", title: "Type-Safe REST API", teaches: "Servant, Monad Transformers, and Databases.", tech: "Haskell, Servant, Persistent" },
  { level: "Advanced", title: "Mini Lisp Interpreter", teaches: "Advanced Parsing, Scoping, and GADTs.", tech: "Haskell, Megaparsec" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on syntax, recursion, and core functional logic to get productive quickly.",
    schedule: [
      "Days 1-7: Installation, GHCi, and Basic Syntax.",
      "Days 8-15: Lists, Recursion, and Pattern Matching.",
      "Days 16-23: Higher-Order Functions and Type Classes.",
      "Days 24-30: Build 2 beginner projects and learn basic I/O.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Intermediate Pro",
    description: "Balanced path covering the heavy abstractions: Functors, Applicatives, and Monads.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Functors, Applicatives, and the 'Do' notation.",
      "Days 46-60: Networking, JSON, and building a full CLI app.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Functional Architect",
    description: "Comprehensive path for professional systems and high-integrity software readiness.",
    schedule: [
      "Days 1-30: Core Language & Functional logic.",
      "Days 31-60: Professional Systems (Monads, Transformers, STM).",
      "Days 61-90: Web Frameworks, GADTs, Performance tuning, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain Purity and Side Effects in Haskell.",
  "What is Lazy Evaluation? Give a real-world example.",
  "Difference between a Functor, an Applicative, and a Monad.",
  "Explain 'Currying' and 'Partial Application'.",
  "How does the IO Monad keep Haskell pure?",
  "What is STM (Software Transactional Memory) and its benefits?",
  "Explain Algebraic Data Types (Sum vs Product types).",
  "Describe the difference between 'Eq' and 'Ord' typeclasses.",
  "How do you handle error cases in Haskell? (Maybe vs Either).",
  "What is Type Inference and how does GHC handle it?",
];

const codingQuestions = [
  { question: "Implement a custom 'map' function using recursion.", topic: "HOFs" },
  { question: "Write a function to flatten a nested list of any depth (if possible) or just one level.", topic: "Recursion" },
  { question: "Implement a Safe Head function that returns a Maybe type.", topic: "Error Handling" },
  { question: "Write a simple Monadic calculator that chains operations using 'do' notation.", topic: "Monads" },
];

const mcqs = [
  { question: "Which symbol denotes the 'bind' operator in Haskell?", options: ["<*>", "|>", ">>=", "$"], answer: ">>=" },
  { question: "What is the result of 'head []' in standard Haskell?", options: ["Nothing", "null", "Runtime Exception", "0"], answer: "Runtime Exception" },
  { question: "Which typeclass is used for things that can be mapped over?", options: ["Monad", "Applicative", "Functor", "Show"], answer: "Functor" },
];

const mistakes = [
  "Trying to write imperative 'for' loops: Use recursion or map/filter instead.",
  "Ignoring Type Signatures: Always write signatures to help yourself and the compiler.",
  "Confusing String, Text, and ByteString: Use 'Text' for words and 'ByteString' for data.",
  "Tutorial Hell: Reading about Category Theory without writing code in GHCi.",
  "Using 'head' or '!!' on empty lists: This leads to runtime crashes—use Maybe instead.",
  "Neglecting the log: GHC's error messages are detailed—read them from top to bottom.",
  "Over-using Monad Transformers: Keep your stacks simple until complexity is necessary.",
  "Space Leaks: Not understanding laziness can lead to massive memory spikes.",
  "Ignoring documentation: Hackage/Hoogle are the best resources in any language.",
  "Premature Optimization: Haskell is fast, but write correct code first before using BangPatterns.",
];

export default function HaskellRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <InfinityIcon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Haskell Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the "Gold Standard" of functional programming. From absolute foundations of purity and recursion to advanced category theory, type-level engineering, and high-performance concurrent systems.
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Category Challenges</h3>
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
                    {['Haskell', 'Category Theory', 'Monads', 'Functors', 'Applicatives', 'Type-Safe', 'Immutability', 'Lazy Evaluation', 'STM', 'QuickCheck', 'GADTs', 'GHC', 'Transformers'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Type-Driven Development'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include property-based test results (QuickCheck) in project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with high-integrity or math-heavy domains.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Logic of Pure Code</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Haskell is more than just a language; it's a way of looking at the universe of computation. It rewards the precise and the persistent. Stay consistent, embrace the Monad, and remember: The most stable systems in the world are built on the foundations you're learning today. Your journey to functional mastery starts now!
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
