
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
  Feather,
  TestTube,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Scripting & Syntax Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Groovy & SDK Setup",
        why: "To set up the Groovy environment and understand its relationship with the JVM. Groovy is 'Java with superpowers'—it's concise and scripting-friendly.",
        time: "2 Days",
        prereqs: "None (Basic Java familiarity is a huge plus)",
        resources: [
          { name: "Groovy Official - Getting Started", url: "https://groovy-lang.org/install.html" },
          { name: "Groovy Tutorial for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=look-up-groovy-intro" },
        ],
        practice: "Install Groovy using SDKMAN. Open the 'groovysh' (REPL) and perform basic arithmetic. Run your first .groovy script.",
      },
      {
        what: "Optional Typing & The 'def' Keyword",
        why: "To understand Groovy's dynamic nature. You can choose between strict types (int, String) or flexible typing with 'def'.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Groovy Style Guide - Typing", url: "https://groovy-lang.org/style-guide.html#_typing" },
        ],
        practice: "Declare variables using both explicit types and 'def'. Experiment with re-assigning different types to a 'def' variable.",
      },
      {
        what: "GStrings & String Interpolation",
        why: "Groovy Strings (GStrings) allow you to embed logic and variables directly inside double quotes, making text manipulation effortless.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Groovy Strings (Official Docs)", url: "https://groovy-lang.org/syntax.html#_strings" },
        ],
        practice: "Build a multiline string template using triple quotes (\"\"\") that includes variables and expressions like ${1 + 1}.",
      },
      {
        what: "Closures: The Heart of Groovy",
        why: "Closures are anonymous blocks of code that can be passed around. They are the foundation for Groovy's functional features and DSLs.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Introduction to Closures", url: "https://groovy-lang.org/closures.html" },
          { name: "Groovy Closures (YouTube)", url: "https://www.youtube.com/watch?v=look-up-groovy-closures" },
        ],
        practice: "Write a closure that takes a name and prints a greeting. Use the implicit 'it' parameter.",
      },
      {
        what: "Collections Mastery (Lists & Maps)",
        why: "Groovy makes working with collections much easier than Java. Master the literal syntax [] and [:] for lightning-fast coding.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Groovy Collections Guide", url: "https://groovy-lang.org/syntax.html#_collections" },
        ],
        practice: "Create a list of numbers. Use '.each', '.collect' (map), and '.findAll' (filter) to manipulate the list.",
      },
      {
        what: "Control Flow & The Elvis Operator (?:)",
        why: "Logic branching in Groovy is clean. The Elvis operator and Safe Navigation (?.) prevent common NullPointerExceptions.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "The Elvis Operator (Mr. Haki)", url: "https://blog.mrhaki.com/2009/08/groovy-goodness-elvis-operator.html" },
        ],
        practice: "Write a script that provides a default username if the input is null, using only the Elvis operator.",
      },
      {
        what: "Groovy Beans & Properties",
        why: "To eliminate boilerplate. Groovy automatically generates getters and setters, allowing you to access properties directly.",
        time: "3 Days",
        prereqs: "Basic OOP knowledge",
        resources: [
          { name: "Groovy Beans Documentation", url: "https://groovy-lang.org/object-orientation.html#_groovybeans" },
        ],
        practice: "Define a 'Person' class with name and age fields. Create an instance and access the fields without writing 'getName()'.",
      },
      {
        what: "Regular Expressions (Regex)",
        why: "Groovy has built-in support for Regex using the slashy syntax (/pattern/) and the =~ (find) and ==~ (match) operators.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Regex in Groovy", url: "https://groovy-lang.org/syntax.html#_regular_expression_operators" },
        ],
        practice: "Extract all dates (format DD/MM/YYYY) from a text block using a single Regex match.",
      },
      {
        what: "File I/O & Scripting",
        why: "To automate system tasks. Groovy can read and write files with a fraction of the code required in Java.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Groovy File I/O (Official)", url: "https://groovy-lang.org/groovy-jdk.html#_working_with_io" },
        ],
        practice: "Write a script that reads a directory and prints the names of all files larger than 1MB.",
      },
      {
        what: "Grape: Dependency Management",
        why: "Grape allows you to add dependencies to your scripts on-the-fly using the @Grab annotation, making your scripts portable.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Grape Documentation", url: "https://groovy-lang.org/grapes.html" },
        ],
        practice: "Write a script that uses @Grab to download the 'Apache Commons Lang' library and use one of its functions.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Testing & Professional Tooling",
    level: "Intermediate",
    steps: [
      {
        what: "The Spock Testing Framework",
        why: "Spock is the gold standard for testing in the Groovy/Java world. Its 'Given-When-Then' syntax is beautiful and descriptive.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Spock Framework Docs", url: "https://spockframework.org/spock/docs/2.3/index.html" },
          { name: "Spock Tutorial (Baeldung)", url: "https://www.baeldung.com/groovy-spock" },
        ],
        practice: "Write a Spock specification to test a 'Calculator' class using Data-Driven Testing (where: block).",
      },
      {
        what: "Groovy Metaprogramming (Runtime)",
        why: "To add methods to existing classes at runtime. This is the magic that allows for powerful frameworks and mock libraries.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Runtime Metaprogramming Guide", url: "https://groovy-lang.org/metaprogramming.html#_runtime_metaprogramming" },
        ],
        practice: "Use the 'ExpandoMetaClass' to add a '.shout()' method to the built-in 'String' class.",
      },
      {
        what: "Traits & Mixins",
        why: "Traits are a powerful alternative to multiple inheritance, allowing you to share code between classes in a safe way.",
        time: "4 Days",
        prereqs: "Step 12",
        resources: [
          { name: "Traits in Groovy", url: "https://groovy-lang.org/object-orientation.html#_traits" },
        ],
        practice: "Implement a 'Logger' trait and mix it into three unrelated classes to provide standardized logging.",
      },
      {
        what: "Gradle for Groovy Developers",
        why: "Gradle is the premier build tool for Java/Groovy. It uses Groovy (or Kotlin) for its build scripts.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Gradle Build Language", url: "https://docs.gradle.org/current/userguide/groovy_build_script_primer.html" },
        ],
        practice: "Set up a Gradle project that compiles Groovy code and runs Spock tests automatically.",
      },
      {
        what: "Working with JSON & XML (JsonSlurper)",
        why: "Essential for web service interaction. Groovy's slurpers and builders turn complex XML/JSON into simple maps and lists.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Parsing JSON in Groovy", url: "https://groovy-lang.org/json.html" },
        ],
        practice: "Fetch a JSON response from a public API and parse it using 'JsonSlurper' to display specific fields.",
      },
      {
        what: "Groovy SQL & Database Interaction",
        why: "To interact with relational databases without the verbosity of JDBC. Groovy SQL handles connection management automatically.",
        time: "1 Week",
        prereqs: "SQL Basics",
        resources: [
          { name: "Groovy SQL Module Docs", url: "https://groovy-lang.org/databases.html" },
        ],
        practice: "Connect to a local SQLite database and perform a simple JOIN query to generate a report.",
      },
      {
        what: "Introduction to DSLs (Domain Specific Languages)",
        why: "To create readable, task-specific languages. Most popular tools (like Jenkins or Gradle) are built on Groovy DSLs.",
        time: "1 Week",
        prereqs: "Step 4, Step 12",
        resources: [
          { name: "Building DSLs in Groovy", url: "https://groovy-lang.org/dsls.html" },
        ],
        practice: "Create a simple 'Order' DSL that allows you to define items and prices in a human-readable way.",
      },
      {
        what: "Jenkins Pipelines (Scripted & Declarative)",
        why: "Groovy is the language of Jenkins. Every DevOps engineer must know how to script pipelines in Groovy.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Jenkins Pipeline Groovy Guide", url: "https://www.jenkins.io/doc/book/pipeline/jenkinsfile/" },
        ],
        practice: "Write a Jenkinsfile that checks out a repo, runs tests, and archives artifacts.",
      },
      {
        what: "Groovy Generics & Static Compilations",
        why: "Learn when to use '@CompileStatic' to gain Java-level performance while maintaining Groovy syntax.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Static Compilation in Groovy", url: "https://groovy-lang.org/semantics.html#_static_compilation" },
        ],
        practice: "Annotate a heavy calculation class with @CompileStatic and benchmark the speed increase.",
      },
      {
        what: "Debugging Groovy",
        why: "Debugging dynamic code can be tricky. Master the IntelliJ debugger and 'println' strategies for the BEAM.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Debugging Groovy in IntelliJ", url: "https://www.jetbrains.com/help/idea/debugging-groovy.html" },
        ],
        practice: "Debug a recursive closure and watch the stack variables in IntelliJ.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Framework Mastery",
    level: "Advanced",
    steps: [
      {
        what: "AST Transformations (Compile-time Meta)",
        why: "The ultimate power move. AST transformations allow you to hook into the compiler to add features (like @ToString or @Builder).",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "AST Transformations Guide", url: "https://groovy-lang.org/metaprogramming.html#_compile_time_metaprogramming" },
        ],
        practice: "Build a custom transformation that automatically calculates and prints method execution time at compile-time.",
      },
      {
        what: "Grails: The Rapid Web Framework",
        why: "Grails is the Rails of the JVM. It allows you to build full-stack web applications with extreme productivity.",
        time: "3 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Grails Quick Start", url: "https://guides.grails.org/grails-quick-start/guide/index.html" },
        ],
        practice: "Build a 'Book Store' application with a database backend and a frontend using Grails Scaffolding.",
      },
      {
        what: "GORM (Grails Object Relational Mapping)",
        why: "The data layer of Grails. Master dynamic finders, criteria queries, and HQL.",
        time: "1 Week",
        prereqs: "Step 22",
        resources: [
          { name: "GORM Documentation", url: "https://gorm.grails.org/latest/hibernate/manual/index.html" },
        ],
        practice: "Write a complex criteria query to find all books published in the last 2 years by a specific author.",
      },
      {
        what: "Concurrency with GPars",
        why: "GPars provides high-level concurrency actors, agents, and dataflow variables, making thread management safe.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "GPars Official Site", url: "http://www.gpars.org/guide/" },
        ],
        practice: "Build a parallel web scraper that fetches 10 sites simultaneously using GPars Actors.",
      },
      {
        what: "Custom Gradle Plugins",
        why: "To automate complex enterprise build tasks. Every large company needs custom Gradle logic.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Developing Custom Gradle Plugins", url: "https://docs.gradle.org/current/userguide/custom_plugins.html" },
        ],
        practice: "Write a Gradle plugin that automatically scans for security vulnerabilities in dependencies.",
      },
      {
        what: "Scripting for AWS/Cloud (SDK)",
        why: "Use Groovy to manage cloud infrastructure. Its scripting power is perfect for AWS Lambda or automation scripts.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "AWS SDK for Java (with Groovy samples)", url: "https://aws.amazon.com/sdk-for-java/" },
        ],
        practice: "Write a Groovy script that lists all active EC2 instances in your AWS account.",
      },
      {
        what: "Advanced Spock: Mocking & Stubbing",
        why: "To isolate your code for testing. Master Mock(), Stub(), and Spy() to simulate external services.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Spock Mocking Guide", url: "https://spockframework.org/spock/docs/2.3/interaction_based_testing.html" },
        ],
        practice: "Write a test for a 'PaymentService' that mocks an external bank API response.",
      },
      {
        what: "Micronaut with Groovy",
        why: "Micronaut is the modern, cloud-native framework for building microservices. It has excellent Groovy support.",
        time: "2 Weeks",
        prereqs: "Step 19",
        resources: [
          { name: "Micronaut Groovy Guide", url: "https://guides.micronaut.io/latest/micronaut-hello-world-groovy.html" },
        ],
        practice: "Build a 'Hello World' microservice using Micronaut and Groovy that returns a JSON greeting.",
      },
      {
        what: "Profiling & Performance (Indy)",
        why: "To ensure your Groovy apps run at peak speed. Learn about 'InvokeDynamic' (Indy) and how it optimizes the JVM.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "Groovy Indy Performance", url: "https://groovy-lang.org/invokedynamic.html" },
        ],
        practice: "Compare the bytecode generated for a standard script vs. one compiled with the Indy flag.",
      },
      {
        what: "Final Mastery: The Enterprise Orchestrator",
        why: "To synthesize all skills: DSLs, Metaprogramming, Testing, and Cloud integration.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Deploy Bot' that reads a custom DSL config file, runs validation tests in Spock, and deploys code to a cloud environment via a Gradle task.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Expense Reporter", teaches: "File I/O, Lists, and GStrings.", tech: "Groovy CLI" },
  { level: "Beginner", title: "CSV to JSON Converter", teaches: "Slurpers, Builders, and Collections.", tech: "Groovy, JsonBuilder" },
  { level: "Beginner", title: "Batch Image Renamer", teaches: "Regex, File system interaction.", tech: "Groovy" },
  { level: "Intermediate", title: "Spock Test Suite for Java App", teaches: "Testing, Mocking, and Data-driven tests.", tech: "Groovy, Spock, Gradle" },
  { level: "Intermediate", title: "Jenkins Shared Library", teaches: "Closures, Jenkins context, and modular scripting.", tech: "Groovy, Jenkins" },
  { level: "Intermediate", title: "GitHub API Dashboard", teaches: "Networking (HTTPBuilder), JSON parsing.", tech: "Groovy, HTTPBuilder" },
  { level: "Intermediate", title: "SQL Audit Tool", teaches: "Database interaction, reports, and formatting.", tech: "Groovy SQL, SQLite" },
  { level: "Advanced", title: "Custom Task DSL for Teams", teaches: "DSL design, Metaprogramming, and Builders.", tech: "Groovy DSL" },
  { level: "Advanced", title: "Grails E-commerce MVP", teaches: "Full-stack web, GORM, and Scaffolding.", tech: "Grails, PostgreSQL" },
  { level: "Advanced", title: "Parallel Log Processor", teaches: "Concurrency, Large file handling.", tech: "GPars, Groovy" },
];

const plans = [
  {
    title: "30-Day Fast Track: The DevOps Scripter",
    description: "Focus on syntax and Jenkins/Gradle scripting to get productive in a professional environment.",
    schedule: [
      "Days 1-7: Installation, Variables, GStrings, and Closures.",
      "Days 8-15: Collections (List/Map) and File I/O.",
      "Days 16-23: Introduction to Gradle and Jenkins Pipelines.",
      "Days 24-30: Build 2 beginner projects and learn basic Spock testing.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Full-Stack Pro",
    description: "Balanced path for building robust tested applications and basic web services.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Spock Testing, Metaprogramming, and JSON/XML parsing.",
      "Days 46-60: Introduction to Grails and building a database-backed app.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Language Expert",
    description: "Comprehensive path for high-performance enterprise and architecture roles.",
    schedule: [
      "Days 1-30: Core Development & Scripting logic.",
      "Days 31-60: Professional Testing (Spock) and Systems (Gradle/Jenkins).",
      "Days 61-90: AST Transformations, GPars Concurrency, and Job Prep.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between 'def' and 'var'?",
  "How does Groovy's 'it' parameter work in closures?",
  "Explain GStrings vs Java Strings.",
  "Describe the 'Elvis Operator' and its use cases.",
  "What is the difference between a List and a Map literal in Groovy?",
  "How does Spock's 'Given-When-Then' structure improve testing?",
  "Explain Runtime vs Compile-time Metaprogramming.",
  "What is @CompileStatic and when should you use it?",
  "Describe the role of the 'Expando' class.",
  "What are Groovy Traits and how do they differ from Java Interfaces?",
];

const codingQuestions = [
  { question: "Write a one-liner to find all even numbers in a list and square them.", topic: "Collections" },
  { question: "Implement a closure that memoizes its results.", topic: "Closures" },
  { question: "Write a Spock test that uses a 'where' block to test 5 different inputs.", topic: "Testing" },
  { question: "Use a slurper to parse a nested JSON object and return a specific value.", topic: "Parsing" },
];

const mcqs = [
  { question: "What is the default return type of a method in Groovy?", options: ["void", "null", "The value of the last expression", "dynamic"], answer: "The value of the last expression" },
  { question: "Which operator is used for safe navigation to avoid NullPointerExceptions?", options: ["?:", "?.", "!!", "=>"], answer: "?." },
  { question: "Which framework is known for its BDD-style testing in Groovy?", options: ["JUnit", "TestNG", "Spock", "Mocha"], answer: "Spock" },
];

const mistakes = [
  "Writing Java-style code: Not leveraging Groovy's concise syntax (e.g., using semicolons).",
  "Ignoring the Elvis Operator: Writing long if-else blocks for null checks.",
  "Over-using 'def': In large projects, explicit typing makes code more maintainable.",
  "Tutorial Hell: Reading about closures without spawning them in the REPL.",
  "Forgetting the implicit 'it': Manually declaring parameters when 'it' is enough.",
  "Neglecting the Spock framework: Relying only on JUnit when Spock is available.",
  "Ignoring @CompileStatic: Struggling with performance issues in critical loops.",
  "Hardcoding paths: Not using Groovy's powerful file utilities.",
  "Misusing Metaprogramming: Changing base classes in a way that confuses teammates.",
  "Ignoring the Log: Not checking the detailed output of failed Spock tests.",
];

export default function GroovyRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Feather className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Groovy Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most expressive language on the JVM. From absolute scripting foundations to advanced metaprogramming, professional testing with Spock, and enterprise automation.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Scripting & Automation Languages">
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Groovy Developer.</CardDescription>
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
            <CardDescription>Pick a timeline that matches your availability and goals.</CardDescription>
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
            <CardDescription>Master the topics and challenges required to land a role as a JVM or Automation Engineer.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding & Logic Challenges</h3>
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
              <h3 className="font-bold text-xl text-center">Resume & Profile Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Groovy', 'Spock Framework', 'Jenkins Pipelines', 'Gradle', 'Metaprogramming', 'AST Transformations', 'DSL Design', 'JVM', 'Grails', 'GORM', 'GPars', 'CI/CD', 'Java Interoperability'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality Jenkinsfiles or Gradle scripts in your GitHub repositories.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose Spock for BDD').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with Java-Groovy hybrid systems.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Unleash the Power of the JVM</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Groovy is more than just a language; it's a productivity multiplier for the JVM. It lets you write readable, expressive code without sacrificing the robustness of Java. Stay consistent, keep building, and remember: The most efficient automations in history were built on the foundations you're learning today. Your journey starts now!
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
