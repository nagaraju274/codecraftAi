
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Kotlin Syntax & Core Concepts",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Kotlin & IntelliJ Setup",
        why: "Kotlin is a modern, expressive language that is 100% interoperable with Java. IntelliJ IDEA is the best environment for it.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Kotlin Official Docs - Getting Started", url: "https://kotlinlang.org/docs/getting-started.html" },
          { name: "Kotlin Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=F9UC9DY-vIU" },
        ],
        practice: "Install IntelliJ IDEA Community Edition. Create a 'Hello World' project. Learn how to use the REPL.",
      },
      {
        what: "Variables & Data Types (val vs var)",
        why: "Kotlin emphasizes immutability. Understanding the difference between read-only and mutable variables is foundational.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Basic Types in Kotlin", url: "https://kotlinlang.org/docs/basic-types.html" },
        ],
        practice: "Declare variables for a user profile using appropriate types and immutability rules.",
      },
      {
        what: "Control Flow (when, if as expression)",
        why: "Kotlin treats control flow structures as expressions, allowing for cleaner and more functional code.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Flow: If, When, For, While", url: "https://kotlinlang.org/docs/control-flow.html" },
        ],
        practice: "Rewrite a traditional Java-style switch statement using Kotlin's powerful `when` expression.",
      },
      {
        what: "Null Safety: The Billion Dollar Fix",
        why: "Kotlin's type system is designed to eliminate NullPointerExceptions, making your apps far more stable.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Null Safety in Kotlin", url: "https://kotlinlang.org/docs/null-safety.html" },
          { name: "Safe Calls & Elvis Operator", url: "https://www.baeldung.com/kotlin/null-safety" },
        ],
        practice: "Practice using nullable types (`?`), safe calls (`?.`), and the Elvis operator (`?:`) to handle missing data.",
      },
      {
        what: "Functions & Named Arguments",
        why: "Kotlin functions are concise and support default/named arguments, reducing the need for method overloading.",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Functions in Kotlin", url: "https://kotlinlang.org/docs/functions.html" },
        ],
        practice: "Create a function with multiple parameters that have default values. Call it using named arguments.",
      },
      {
        what: "Classes & Constructors",
        why: "Kotlin drastically reduces boilerplate for class definitions compared to Java.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Classes & Inheritance", url: "https://kotlinlang.org/docs/classes.html" },
        ],
        practice: "Define a class with a primary constructor and an init block. Experiment with secondary constructors.",
      },
      {
        what: "Collections (List, Set, Map)",
        why: "Almost every app manages lists of data. Kotlin separates mutable and read-only collections for safety.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Kotlin Collections Overview", url: "https://kotlinlang.org/docs/collections-overview.html" },
        ],
        practice: "Create a list of tasks. Filter the list to show only completed ones using functional operations.",
      },
      {
        what: "Smart Casts & Type Checks",
        why: "Kotlin automatically casts types after checking them, making code more readable and less error-prone.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Type Checks & Casts", url: "https://kotlinlang.org/docs/typecasts.html" },
        ],
        practice: "Use the `is` operator within an `if` block and observe how the compiler handles the smart cast.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Functional & Idiomatic Kotlin",
    level: "Intermediate",
    steps: [
      {
        what: "Scope Functions (let, run, apply, also)",
        why: "These functions make your code more concise and readable when performing operations on an object.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Scope Functions Guide", url: "https://kotlinlang.org/docs/scope-functions.html" },
          { name: "Scope Functions Visualized", url: "https://medium.com/kotlin-academy/kotlin-standard-functions-at-a-glance-let-with-run-apply-also-28dcfca58266" },
        ],
        practice: "Refactor an object initialization and configuration block using `apply` and `also`.",
      },
      {
        what: "Data Classes & Sealed Classes",
        why: "Data classes automate `equals()`, `hashCode()`, and `toString()`. Sealed classes provide restricted class hierarchies for state management.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Sealed Classes in Kotlin", url: "https://kotlinlang.org/docs/sealed-classes.html" },
        ],
        practice: "Build a UI state management system using a Sealed class to represent Loading, Success, and Error states.",
      },
      {
        what: "Extension Functions",
        why: "Extend the functionality of existing classes (even from libraries) without inheriting from them.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Extensions in Kotlin", url: "https://kotlinlang.org/docs/extensions.html" },
        ],
        practice: "Write an extension function for the `String` class that formats it as a currency.",
      },
      {
        what: "Lambdas & Higher-Order Functions",
        why: "Functional programming is a core pillar of Kotlin. Higher-order functions treat functions as first-class citizens.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Lambdas & Higher-Order Functions", url: "https://kotlinlang.org/docs/lambdas.html" },
        ],
        practice: "Write a function that takes a lambda as a parameter to perform custom filtering on a list.",
      },
      {
        what: "Generics",
        why: "Generics allow you to write reusable and type-safe code for different data types.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Generics in Kotlin", url: "https://kotlinlang.org/docs/generics.html" },
        ],
        practice: "Implement a generic 'Repository' class that can store and retrieve any type of object.",
      },
      {
        what: "Delegated Properties (by lazy, by Delegates)",
        why: "Delegation allows you to reuse common property patterns like lazy loading or observable properties.",
        time: "5 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Delegated Properties", url: "https://kotlinlang.org/docs/delegated-properties.html" },
        ],
        practice: "Use `lazy` to initialize a heavy object only when it's first accessed.",
      },
      {
        what: "Introduction to Coroutines",
        why: "Coroutines are the standard for asynchronous, non-blocking code in Kotlin (crucial for Android/Backend).",
        time: "2 Weeks",
        prereqs: "Intermediate Fundamentals",
        resources: [
          { name: "Coroutines Guide (Official)", url: "https://kotlinlang.org/docs/coroutines-guide.html" },
          { name: "Coroutines for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=BOHR_as_03Q" },
        ],
        practice: "Write a simple program that launches a coroutine to fetch data (simulated with delay) without blocking the main thread.",
      },
      {
        what: "Kotlin Serialization (JSON)",
        why: "The official library for converting Kotlin objects to JSON and back, essential for API interaction.",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Kotlin Serialization Guide", url: "https://github.com/Kotlin/kotlinx.serialization" },
        ],
        practice: "Annotate a data class and use the library to serialize it into a JSON string.",
      },
    ],
  },
  {
    title: "Advanced Stage: Specialization & Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Advanced Coroutines (Flow & Channels)",
        why: "Flow is Kotlin's reactive streams API, perfect for handling streams of data asynchronously.",
        time: "2 Weeks",
        prereqs: "Step 15",
        resources: [
          { name: "Kotlin Flow (Official Docs)", url: "https://kotlinlang.org/docs/flow.html" },
        ],
        practice: "Implement a search-as-you-type feature using Flow and operators like `debounce`.",
      },
      {
        what: "Kotlin DSL Construction",
        why: "Kotlin's features allow you to build custom Domain Specific Languages (DSLs) for configuration or UI.",
        time: "1 Week",
        prereqs: "Extension Functions, Lambdas",
        resources: [
          { name: "Type-safe Builders (DSLs)", url: "https://kotlinlang.org/docs/type-safe-builders.html" },
        ],
        practice: "Create a simple HTML or XML builder DSL using trailing lambdas and extension functions.",
      },
      {
        what: "Inline Classes & Reified Types",
        why: "Optimize performance and work around JVM type erasure using advanced language features.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Inline Classes", url: "https://kotlinlang.org/docs/inline-classes.html" },
        ],
        practice: "Write a generic function using `reified` to get the type of a parameter at runtime.",
      },
      {
        what: "Ktor for Backend Services",
        why: "Ktor is a lightweight, asynchronous framework for building connected applications (Servers & Clients).",
        time: "2 Weeks",
        prereqs: "Coroutines, Serialization",
        resources: [
          { name: "Ktor Official Site", url: "https://ktor.io/" },
        ],
        practice: "Build a simple REST API with Ktor that performs CRUD operations on an in-memory list.",
      },
      {
        what: "Kotlin Multiplatform (KMP)",
        why: "The future of cross-platform development. Share business logic between Android, iOS, Web, and Desktop.",
        time: "3 Weeks",
        prereqs: "Advanced Kotlin",
        resources: [
          { name: "Kotlin Multiplatform Documentation", url: "https://kotlinlang.org/docs/multiplatform.html" },
        ],
        practice: "Create a shared module that contains validation logic used by both an Android and a Desktop (Compose) app.",
      },
      {
        what: "Jetpack Compose (Modern UI)",
        why: "The modern, declarative toolkit for building native UI on Android and Desktop.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Jetpack Compose Tutorial", url: "https://developer.android.com/jetpack/compose/tutorial" },
        ],
        practice: "Build a complex list UI with Jetpack Compose using state-hoisting patterns.",
      },
      {
        what: "Advanced Testing (MockK, Kotest)",
        why: "Professional Kotlin development requires modern testing libraries that support coroutines and DSLs.",
        time: "1 Week",
        prereqs: "Testing Fundamentals",
        resources: [
          { name: "MockK Guide", url: "https://mockk.io/" },
          { name: "Kotest Framework", url: "https://kotest.io/" },
        ],
        practice: "Write unit tests for a Coroutine-based ViewModel using MockK.",
      },
      {
        what: "Kotlin Symbol Processing (KSP)",
        why: "Learn how to write compiler plugins and generate code, a powerful skill for library authors.",
        time: "2 Weeks",
        prereqs: "Mastery Level",
        resources: [
          { name: "KSP Documentation", url: "https://kotlinlang.org/docs/ksp-overview.html" },
        ],
        practice: "Research how libraries like Room use KSP to generate database code.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Expense Tracker", teaches: "Input/Output, Lists, Data Classes, Basic Logic.", tech: "Kotlin JVM" },
  { level: "Beginner", title: "Text-Based Adventure Game", teaches: "Control flow (when), Classes, and State.", tech: "Kotlin JVM" },
  { level: "Beginner", title: "Unit Converter (Library)", teaches: "Functions, Extension Functions, and Math.", tech: "Kotlin JVM" },
  { level: "Intermediate", title: "Android Weather App", teaches: "Retrofit (Networking), Coroutines, Serialization, UI.", tech: "Kotlin, Android SDK" },
  { level: "Intermediate", title: "Ktor REST API", teaches: "Server-side routes, JSON handling, Database integration (Exposed).", tech: "Kotlin, Ktor, PostgreSQL" },
  { level: "Intermediate", title: "Reactive To-Do List", teaches: "State management, Flow, local persistence (Room/SqlDelight).", tech: "Kotlin, Flow, Android" },
  { level: "Intermediate", title: "Library Management System", teaches: "Advanced OOP, Generics, and File I/O.", tech: "Kotlin JVM" },
  { level: "Advanced", title: "Kotlin Multiplatform App", teaches: "Code sharing, Expect/Actual, Architecture (MVVM).", tech: "KMP, Compose Multiplatform" },
  { level: "Advanced", title: "Compiler Plugin (Basic)", teaches: "Abstract Syntax Trees (AST), Code generation.", tech: "Kotlin, KSP" },
  { level: "Advanced", title: "Real-time Chat with WebSockets", teaches: "WebSockets, advanced concurrency, Ktor Server.", tech: "Kotlin, Ktor, Coroutines" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Intensive plan for those with prior Java/C# experience focusing on syntax shift.",
    schedule: [
      "Days 1-7: Kotlin Basics, Null Safety, and Functions.",
      "Days 8-15: OOP, Data Classes, and Extension Functions.",
      "Days 16-23: Introduction to Coroutines and Collections.",
      "Days 24-30: Build a functional CLI project and explore Ktor.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "A balanced pace for building a solid foundation and a portfolio.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Functional programming, scope functions, and Coroutines.",
      "Days 46-60: Build two intermediate projects (Android and Ktor).",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Deep dive for career readiness in Android or Backend development.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced Coroutines, Flow, and Specialized Frameworks.",
      "Days 61-90: Kotlin Multiplatform, performance tuning, and interview prep.",
    ]
  }
];

const interviewTopics = [
  "What is Null Safety and how does it work?",
  "Difference between 'val' and 'const val'.",
  "Explain Coroutines and how they differ from Threads.",
  "What are Sealed Classes and why use them over Enums?",
  "What are Extension Functions and how are they implemented under the hood?",
  "Difference between 'let', 'run', 'apply', 'also', and 'with'.",
  "How does Kotlin achieve Java interoperability?",
  "What are Data Classes and what functions do they provide?",
  "Explain 'lateinit' vs 'lazy' initialization.",
  "What is a 'suspend' function?",
];

const codingQuestions = [
  { question: "Reverse a string without using built-in helper functions.", topic: "String Manipulation" },
  { question: "Detect if a list has duplicates using a Set.", topic: "Collections" },
  { question: "Implement a Thread-safe Singleton in Kotlin using 'object'.", topic: "Design Patterns" },
  { question: "Write a function that uses Flow to emit a sequence of values with a delay.", topic: "Coroutines" },
];

const mcqs = [
  { question: "Which keyword is used to define a read-only variable?", options: ["var", "val", "final", "const"], answer: "val" },
  { question: "What is the return type of a function that doesn't return anything meaningful?", options: ["void", "Null", "Unit", "Nothing"], answer: "Unit" },
  { question: "Which operator is the 'Safe Call' operator?", options: ["!!", "?.", "?:", "as?"], answer: "?." },
];

const mistakes = [
  "Overusing '!!' (Force Unwrapping), which re-introduces NullPointerExceptions.",
  "Using 'var' when 'val' could be used, leading to unnecessary mutability.",
  "Not using data classes for simple model objects.",
  "Forgetting to handle exceptions inside Coroutines (use CoroutineExceptionHandler).",
  "Using Java-style getters/setters instead of Kotlin properties.",
  "Ignoring scope functions, leading to repetitive 'objectName.property' calls.",
  "Not using 'lateinit' or 'lazy' properly, causing uninitialized access errors.",
  "Overcomplicating logic when a simple collection operator (like filter/map) would work.",
  "Ignoring compiler warnings, especially those regarding performance (e.g., boxing).",
  "Not using 'when' as an expression, missing out on exhaustive checks.",
];

export default function KotlinRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Smartphone className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Kotlin Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive guide to mastering Kotlin for Android, JVM, and Multiplatform development.
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
                    <Smartphone className="h-3 w-3"/> {p.tech}
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
            <CardDescription>Expert guidance to help you land your dream Kotlin role.</CardDescription>
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
                    {['Kotlin', 'Coroutines', 'Android SDK', 'Jetpack Compose', 'MVVM', 'Dagger Hilt', 'Retrofit', 'KMP', 'Null Safety', 'Unit Testing', 'Flow', 'Ktor'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Smartphone className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your choice of state management (e.g. Flow vs StateFlow).</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests to demonstrate stability.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use high-quality GIFs in GitHub READMEs for UI projects.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Your Kotlin Adventure Awaits</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Kotlin is more than just a language; it's a productivity superpower. Whether you're building the next viral Android app or a high-scale backend, Kotlin gives you the tools to write safe, clean, and reliable code. Stay consistent, keep building, and remember that every expert was once a beginner.
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
