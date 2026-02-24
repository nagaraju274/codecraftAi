
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
  Terminal,
  Database,
  History,
  Binary,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Scala & JVM Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Scala & Tooling (sbt)",
        why: "To set up the development environment. Scala runs on the JVM and uses 'sbt' (Scala Build Tool) for dependency management and compilation.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Scala Official - Getting Started", url: "https://docs.scala-lang.org/getting-started/index.html" },
          { name: "Rock the JVM: Scala for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=look-up-rock-the-jvm-basics" },
        ],
        practice: "Install SDKMAN, Java, and sbt. Create a new Scala 3 project and run 'Hello, World!' through the sbt console.",
      },
      {
        what: "Values, Variables & Basic Types",
        why: "Scala emphasizes immutability. Understanding the difference between 'val' (immutable) and 'var' (mutable) is the core of the language.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Scala Book: Basic Types", url: "https://docs.scala-lang.org/scala3/book/first-look-at-types.html" },
        ],
        practice: "Declare constants for a user profile. Practice type inference and explicit type annotations.",
      },
      {
        what: "Control Flow as Expressions",
        why: "In Scala, almost everything is an expression (returns a value). This allows for cleaner, more predictable code.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Structures in Scala 3", url: "https://docs.scala-lang.org/scala3/book/control-structures.html" },
        ],
        practice: "Write an 'if' block that returns a result string directly into a variable. Experiment with 'for' comprehensions.",
      },
      {
        what: "Functions & Methods",
        why: "To structure reusable logic. Scala supports multiple parameter lists and named/default arguments.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Methods in Scala", url: "https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html#methods" },
        ],
        practice: "Create a calculator object with methods for various math operations. Use named arguments to call them.",
      },
      {
        what: "The Core Hierarchy: Any, AnyVal, AnyRef",
        why: "To understand how Scala unifies the primitive and object worlds under a single type tree.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Unified Types in Scala", url: "https://docs.scala-lang.org/tour/unified-types.html" },
        ],
        practice: "Create a list of type 'List[Any]' and add integers, strings, and custom objects to it.",
      },
      {
        what: "Object-Oriented Basics: Classes & Objects",
        why: "Scala is a pure OO language. Learn about singleton objects, companion objects, and constructors.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Scala Classes & Objects", url: "https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html#classes" },
        ],
        practice: "Model a 'Employee' class with a private ID and a public name. Create a companion object with a factory method.",
      },
      {
        what: "Traits & Mixins",
        why: "Traits are like interfaces on steroids. They allow for powerful, modular code reuse via mixin composition.",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Traits in Scala", url: "https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html#traits" },
        ],
        practice: "Implement a 'Logger' trait and mix it into several different classes to provide logging capabilities.",
      },
      {
        what: "Pattern Matching Basics",
        why: "Scala's 'switch on steroids'. It's the most powerful tool for branching logic based on the structure of data.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Pattern Matching Guide", url: "https://docs.scala-lang.org/scala3/book/control-structures.html#match-expressions" },
        ],
        practice: "Write a function that takes an 'Any' and returns a string describing its type and value using 'match'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Functional Programming & Types",
    level: "Intermediate",
    steps: [
      {
        what: "Functional Programming Core: Pure Functions",
        why: "To write predictable, testable code. Learn to avoid side effects and embrace referential transparency.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "FP in Scala (Introduction)", url: "https://docs.scala-lang.org/scala3/book/fp-intro.html" },
        ],
        practice: "Identify side effects in a piece of code and refactor them into pure functions.",
      },
      {
        what: "Higher-Order Functions (HOFs)",
        why: "To treat functions as values. Master .map, .filter, .fold, and .reduce.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Higher-Order Functions", url: "https://docs.scala-lang.org/tour/higher-order-functions.html" },
        ],
        practice: "Take a list of integers and use HOFs to find the sum of squares of all even numbers.",
      },
      {
        what: "Case Classes & Pattern Matching Deep Dive",
        why: "Case classes are optimized for immutable data modeling and work perfectly with pattern matching.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Case Classes in Scala 3", url: "https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html#case-classes" },
        ],
        practice: "Model a directory structure using Case Classes and use a recursive match to find a specific file.",
      },
      {
        what: "The Option & Either Types",
        why: "To eliminate 'null' from your codebase. These types explicitly model success, failure, and absence of value.",
        time: "5 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Error Handling with Option/Either", url: "https://docs.scala-lang.org/scala3/book/fp-functional-error-handling.html" },
        ],
        practice: "Write a function that parses a string to an integer and returns an 'Either[String, Int]'.",
      },
      {
        what: "Implicits & Given/Using (Scala 3 Contextual Abstractions)",
        why: "To write clean, decoupled code that passes 'context' automatically. This is the magic behind Scala's flexibility.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Contextual Abstractions in Scala 3", url: "https://docs.scala-lang.org/scala3/book/ca-contextual-abstractions-intro.html" },
        ],
        practice: "Implement a simple Type Class for 'JSON Serialization' using 'given' and 'using'.",
      },
      {
        what: "Recursion & Tail Recursion",
        why: "To process data without loops. Tail recursion (@tailrec) prevents stack overflows in large datasets.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Tail Recursion in Scala", url: "https://www.baeldung.com/scala/tail-recursion" },
        ],
        practice: "Implement a tail-recursive version of the Fibonacci sequence generator.",
      },
      {
        what: "Testing with ScalaTest",
        why: "Professional code requires robust suites. ScalaTest is the industry standard for unit and integration testing.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "ScalaTest - Getting Started", url: "https://www.scalatest.org/getting_started" },
        ],
        practice: "Write a suite of tests for your 'Employee' and 'Calculator' logic using 'FunSuite' or 'FlatSpec'.",
      },
      {
        what: "Collections Mastery (Sequence, Set, Map)",
        why: "To choose the right tool for data manipulation. Understand the performance trade-offs of different collection types.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Collections - The Full Guide", url: "https://docs.scala-lang.org/overviews/collections-2.13/overview.html" },
        ],
        practice: "Convert a List into a Map indexed by a specific property using '.groupBy'.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems, Concurrency & Big Data",
    level: "Advanced",
    steps: [
      {
        what: "Concurrency with Futures & Promises",
        why: "To build high-performance, non-blocking applications that utilize modern multi-core CPUs.",
        time: "2 Weeks",
        prereqs: "Step 11",
        resources: [
          { name: "Scala Futures & Promises", url: "https://docs.scala-lang.org/overviews/core/futures.html" },
        ],
        practice: "Build a program that fetches data from 3 different (simulated) APIs in parallel using Futures.",
      },
      {
        what: "Akka (Classic & Typed) / Pekko",
        why: "The Actor Model is the gold standard for high-concurrency, distributed systems. Master message passing and fault tolerance.",
        time: "3 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "Akka Documentation", url: "https://doc.akka.io/docs/akka/current/index.html" },
          { name: "Akka Typed Course (YouTube)", url: "https://www.youtube.com/watch?v=look-up-akka-typed" },
        ],
        practice: "Build a simple chat system where Actors represent users and a central Actor manages the room.",
      },
      {
        what: "Type System: Generics & Variance",
        why: "To write extremely flexible, type-safe libraries. Understand +T (covariance) and -T (contravariance).",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Variance in Scala", url: "https://docs.scala-lang.org/tour/variances.html" },
        ],
        practice: "Implement a generic 'Container' that allows for covariant subtypes.",
      },
      {
        what: "Pure Functional Effects (ZIO or Cats Effect)",
        why: "To manage the most complex 'side effects' (DB, Networking) in a purely functional and safe way.",
        time: "3 Weeks",
        prereqs: "Step 12, Step 17",
        resources: [
          { name: "ZIO Documentation", url: "https://zio.dev/" },
          { name: "Typelevel - Cats Effect", url: "https://typelevel.org/cats-effect/" },
        ],
        practice: "Write a CLI app using ZIO that reads from a file, processes data, and writes to a database concurrently.",
      },
      {
        what: "Big Data: Apache Spark with Scala",
        why: "Scala is the primary language for Spark. This is where high-paying Big Data engineering roles live.",
        time: "3 Weeks",
        prereqs: "Step 16",
        resources: [
          { name: "Spark Quick Start", url: "https://spark.apache.org/docs/latest/quick-start.html" },
          { name: "Spark with Scala Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=_C8kWso4ne4" },
        ],
        practice: "Set up a local Spark instance and perform a 'Word Count' analysis on a multi-gigabyte text file.",
      },
      {
        what: "Web Frameworks: Play or Akka HTTP",
        why: "To build robust web applications and microservices using Scala's type safety and concurrency.",
        time: "2 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "Play Framework Guide", url: "https://www.playframework.com/documentation/2.8.x/Home" },
        ],
        practice: "Create a REST API that manages a 'Book' inventory with a JSON interface.",
      },
      {
        what: "Metaprogramming & Macros",
        why: "To write code that generates other code at compile-time for maximum optimization.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "Scala 3 Macros", url: "https://docs.scala-lang.org/scala3/guides/macros/index.html" },
        ],
        practice: "Research how 'inline' methods in Scala 3 provide zero-cost abstractions.",
      },
      {
        what: "JVM Performance Tuning",
        why: "To ensure your Scala systems run at peak efficiency. Learn about GC, JIT, and memory profiling.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Optimizing Scala Code", url: "https://www.lightbend.com/blog/profiling-and-optimizing-scala-applications" },
        ],
        practice: "Use VisualVM to profile a memory-heavy Scala task and identify bottlenecks.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI File Analyzer", teaches: "Basic I/O, Strings, and Pattern Matching.", tech: "Scala Standard Lib" },
  { level: "Beginner", title: "Personal Budget Tracker (Console)", teaches: "Immutability, Case Classes, and Collections.", tech: "Scala, sbt" },
  { level: "Beginner", title: "Math Expression Evaluator", teaches: "Recursion and Expression-oriented logic.", tech: "Scala" },
  { level: "Intermediate", title: "Social Media API (Mock)", teaches: "Future-based concurrency and functional error handling.", tech: "Scala, Akka HTTP" },
  { level: "Intermediate", title: "Distributed Web Crawler", teaches: "Actors, Message Passing, and Async I/O.", tech: "Akka / Pekko" },
  { level: "Intermediate", title: "Database Query DSL", teaches: "Contextual abstractions (given/using) and Type Classes.", tech: "Scala 3" },
  { level: "Intermediate", title: "Log Processing Pipeline", teaches: "Tail Recursion and Functional collection manipulation.", tech: "Scala" },
  { level: "Advanced", title: "Real-time Analytics Engine", teaches: "Big data processing, RDDs, and DataFrames.", tech: "Apache Spark, Scala" },
  { level: "Advanced", title: "Pure Functional Microservice", teaches: "Pure effects, Dependency Injection, and Concurrency.", tech: "ZIO / Cats Effect, Doobie" },
  { level: "Advanced", title: "Distributed Consensus Simulator", teaches: "Complex Actor systems, Cluster sharding, and persistence.", tech: "Akka Cluster" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax shift from Java/Python and basic functional programming.",
    schedule: [
      "Days 1-7: Setup, Syntax, and Object-Oriented basics.",
      "Days 8-15: Core FP (HOFs, Immutability, Option).",
      "Days 16-23: Pattern Matching, Case Classes, and Collections.",
      "Days 24-30: Build a CLI project and learn basic Testing.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for solid system building and introduction to concurrency.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Functional Mastery, Contextual Abstractions, and Futures.",
      "Days 46-60: Introduction to Akka and building a web service.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional Data Engineer or Backend roles.",
    schedule: [
      "Days 1-30: Core Development & FP logic.",
      "Days 31-60: Professional Systems (Akka, ZIO, Testing).",
      "Days 61-90: Big Data (Spark), Performance Tuning, and Job Prep.",
    ]
  }
];

const interviewTopics = [
  "Difference between val, var, def, and lazy val.",
  "What is a Case Class? Why are they useful?",
  "Explain the difference between a Trait and an Abstract Class.",
  "How does Pattern Matching work under the hood?",
  "What is a Monad? (Explain using Option or List).",
  "Explain the 'given' and 'using' clauses in Scala 3.",
  "What are Higher-Order Functions?",
  "Describe the Actor Model and its benefits for concurrency.",
  "How do you handle N+1 query problems in a functional setting?",
  "Explain Covariance and Contravariance.",
];

const codingQuestions = [
  { question: "Implement a tail-recursive function to find the maximum element in a list.", topic: "Recursion" },
  { question: "Flatten a nested list of lists manually using 'foldLeft'.", topic: "Functional Programming" },
  { question: "Write a function that merges two maps, summing the values for shared keys.", topic: "Collections" },
  { question: "Build a simple Actor that responds to a Ping message with a Pong message.", topic: "Akka" },
];

const mcqs = [
  { question: "Which of the following is immutable by default in Scala?", options: ["var", "val", "def", "trait"], answer: "val" },
  { question: "What is the result of 'Some(10).map(_ * 2)'?", options: ["20", "Some(20)", "List(20)", "None"], answer: "Some(20)" },
  { question: "Which keyword is used to include a trait in a class?", options: ["inherits", "implements", "extends", "with"], answer: "extends" },
];

const mistakes = [
  "Using 'var' everywhere: This defeats the purpose of functional programming safety.",
  "Not understanding the JVM: Scala performance relies on how the JVM handles objects.",
  "Ignoring 'Option': Using 'null' will lead to inevitable crashes.",
  "Complex Pattern Matching: Trying to match too many things at once makes code unreadable.",
  "Tutorial Hell: Reading about Monads for hours without writing code.",
  "Mixing logic in the View (for web): Always keep business logic in models/services.",
  "Not using sbt properly: Manually managing JARs is a nightmare.",
  "Ignoring Tail Recursion: This will lead to StackOverflowErrors on production data.",
  "Over-using Implicits: Makes code hard to trace and debug if overdone.",
  "Lack of Unit Tests: In complex type systems, tests are your only safety net during refactoring.",
];

export default function ScalaRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Layers className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Scala Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most sophisticated language on the JVM. From absolute foundations to the high-scale worlds of Functional Programming, Big Data, and Distributed Systems.
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
            <CardDescription>Build your portfolio with these 10 hands-on Scala projects.</CardDescription>
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
            <CardDescription>Pick a timeline that matches your goals.</CardDescription>
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
            <CardDescription>Master the topics required to land a role at top tech companies using Scala.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Coding Challenges</h3>
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
                    {['Scala 3', 'Functional Programming', 'Akka', 'Pekko', 'Apache Spark', 'ZIO', 'Cats Effect', 'sbt', 'Monads', 'Type Classes', 'Concurrency', 'Big Data'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Functional Thinking' over just syntax.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include benchmark results for any Spark or concurrent Akka projects.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use modern Scala 3 features (using/given) to show you stay updated.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Scale Your Thinking</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Scala isn't just a language; it's a way to architect elegant, bulletproof systems. It rewards the curious and the precise. Stay consistent, embrace the type system, and remember: The most powerful systems in the world are built on the foundations you're learning today. Your Scala journey starts now!
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
