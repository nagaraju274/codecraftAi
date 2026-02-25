
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
  FileCode,
  ShieldAlert,
  Braces,
  Anchor,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Starlark Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Starlark Philosophy",
        why: "To understand why Starlark exists (determinism, hermeticity, and safety) and how it differs from Python (no while loops, no recursion).",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Starlark Language Design", url: "https://github.com/bazelbuild/starlark/blob/master/design.md" },
          { name: "Starlark Overview (Bazel Docs)", url: "https://bazel.build/rules/language" },
        ],
        practice: "List three major differences between Python and Starlark. Research the term 'Hermeticity'.",
      },
      {
        what: "Syntax & Basic Types",
        why: "To master the core building blocks: Strings, Integers, Booleans, and the 'None' type.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Starlark Built-in Types", url: "https://bazel.build/rules/lib/builtins" },
        ],
        practice: "Write a script that declares variables for a build version, project name, and a boolean flag for 'debug_mode'.",
      },
      {
        what: "Lists & Dictionaries",
        why: "Build configurations are essentially large dictionaries of lists. Mastering index access and key-value pairs is vital.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "List and Dict operations", url: "https://bazel.build/rules/lib/list" },
        ],
        practice: "Create a list of source files and a dictionary mapping architecture types to compiler flags.",
      },
      {
        what: "Control Flow: If & For",
        why: "To handle logic branching. Note: Starlark only supports 'for' loops (no 'while') to ensure all code eventually terminates.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Flow in Starlark", url: "https://bazel.build/rules/language#control_flow" },
        ],
        practice: "Write a loop that filters a list of files to include only those ending in '.cpp'.",
      },
      {
        what: "Defining Functions (def)",
        why: "To organize logic into reusable blocks. Starlark functions are first-class citizens but cannot be recursive.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Functions in Starlark", url: "https://bazel.build/rules/language#functions" },
        ],
        practice: "Create a function 'format_label' that takes a name and prepends a project prefix.",
      },
      {
        what: "Immutability & Freezing",
        why: "Global variables in Starlark are 'frozen' once a module is loaded. Understanding this prevents difficult-to-track state bugs.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Starlark Mutability", url: "https://bazel.build/rules/language#mutability" },
        ],
        practice: "Experiment with trying to modify a list defined at the top level of a script from within a function.",
      },
      {
        what: "Comments & Docstrings",
        why: "To maintain readable configurations. Documentation is essential for shared build systems.",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "Style Guide for Starlark", url: "https://bazel.build/rules/style-guide" },
        ],
        practice: "Add Google-style docstrings to all functions in a previous exercise.",
      },
      {
        what: "The print() function & Debugging",
        why: "To inspect the state of your build logic during development.",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "Debugging Starlark", url: "https://bazel.build/rules/debugging" },
        ],
        practice: "Use 'print()' to output the type and value of a complex dictionary during script execution.",
      },
      {
        what: "String Formatting (Interpolation)",
        why: "To generate dynamic command lines and build labels using '%', '.format()', or f-strings (where supported).",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Starlark String API", url: "https://bazel.build/rules/lib/string" },
        ],
        practice: "Build a string that dynamically includes a version number and a platform architecture.",
      },
      {
        what: "Build File Interaction",
        why: "To understand how Starlark code in .bzl files is imported and used in BUILD files via 'load()'.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Loading Extensions", url: "https://bazel.build/rules/concepts#loading_extensions" },
        ],
        practice: "Create a .bzl file with a constant and 'load' it into a BUILD file to use as a variable.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Bazel Macros & Rules",
    level: "Intermediate",
    steps: [
      {
        what: "Bazel Macros (Reusable Logic)",
        why: "Macros are functions that wrap other rules. They are the primary way to reduce duplication in BUILD files.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Macros Guide", url: "https://bazel.build/rules/macros" },
        ],
        practice: "Write a macro 'cc_library_with_tests' that generates both a library and a corresponding test target.",
      },
      {
        what: "Custom Rules: Implementation",
        why: "Rules are the core of Bazel's extensibility. They define how to transform inputs (sources) into outputs (binaries).",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Rules (Official Docs)", url: "https://bazel.build/rules/concepts" },
        ],
        practice: "Create a simple rule 'file_copy' that copies an input file to an output destination.",
      },
      {
        what: "The context object (ctx)",
        why: "To access attributes, labels, and file paths within a rule implementation.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "The ctx Object Reference", url: "https://bazel.build/rules/lib/ctx" },
        ],
        practice: "Write a rule that prints the label name of its target using 'ctx.label.name'.",
      },
      {
        what: "Providers (Passing data between rules)",
        why: "Providers allow one rule to pass information (like compiler flags or headers) to the rule that depends on it.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Providers Documentation", url: "https://bazel.build/rules/lib/Provider" },
        ],
        practice: "Implement a 'MetadataProvider' that passes a version string from one target to another.",
      },
      {
        what: "Toolchains & Platforms",
        why: "To write builds that are independent of the host OS. This is essential for cross-compilation.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Toolchains Overview", url: "https://bazel.build/extending/toolchains" },
        ],
        practice: "Register a dummy toolchain that provides a path to a specific compiler version.",
      },
      {
        what: "Actions (ctx.actions)",
        why: "Actions tell Bazel exactly which command to run (e.g., 'gcc -c ...'). Mastering actions is vital for performance.",
        time: "5 Days",
        prereqs: "Step 13",
        resources: [
          { name: "Rules Actions", url: "https://bazel.build/rules/lib/actions" },
        ],
        practice: "Use 'ctx.actions.run' to execute a shell command that reverses the text in a file.",
      },
      {
        what: "List Comprehensions Mastery",
        why: "The only idiomatic way to handle complex filtering and mapping of lists in Starlark.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "List Comprehensions in Starlark", url: "https://github.com/bazelbuild/starlark/blob/master/spec.md#comprehensions" },
        ],
        practice: "Use a comprehension to extract only the basenames from a list of absolute file paths.",
      },
      {
        what: "The select() function",
        why: "To handle platform-specific configurations (e.g., different flags for Windows vs. Linux) dynamically.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Configurable Attributes", url: "https://bazel.build/docs/configurable-attributes" },
        ],
        practice: "Use 'select()' to choose a different source file depending on the target architecture.",
      },
      {
        what: "Bzlmod & Module Extensions",
        why: "The modern way to manage external dependencies in Bazel. Replaces the legacy WORKSPACE file.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Bzlmod Introduction", url: "https://bazel.build/external/overview" },
        ],
        practice: "Convert a project from WORKSPACE to MODULE.bazel.",
      },
      {
        what: "Aspects (Cross-cutting logic)",
        why: "Aspects allow you to augment the build graph with extra information, such as IDE integration or code coverage.",
        time: "1 Week",
        prereqs: "Step 12, Step 14",
        resources: [
          { name: "Aspects Documentation", url: "https://bazel.build/rules/aspects" },
        ],
        practice: "Write an aspect that counts the total number of source files in a build graph.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems mastery & Performance",
    level: "Advanced",
    steps: [
      {
        what: "Performance Profiling (Bazel Profile)",
        why: "To identify slow rules or macros. Large builds rely on efficient Starlark execution.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Profiling Bazel", url: "https://bazel.build/advanced/performance/profiling" },
        ],
        practice: "Generate a JSON profile of a build and identify the 'Longest Thread' in the visualization.",
      },
      {
        what: "Embedding Starlark (C++/Go/Java)",
        why: "Starlark is a standalone language. Learn how to embed the interpreter in your own applications for configuration.",
        time: "2 Weeks",
        prereqs: "C++ or Go basics",
        resources: [
          { name: "Starlark in Go", url: "https://github.com/google/starlark-go" },
          { name: "Starlark in Java", url: "https://github.com/bazelbuild/bazel/tree/master/src/main/java/net/starlark/java" },
        ],
        practice: "Write a Go program that loads a Starlark script and retrieves a variable value from it.",
      },
      {
        what: "Security & Sandbox Hardening",
        why: "Builds must be secure. Learn how to enforce hermeticity and prevent scripts from accessing the network or disk.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Hermeticity in Bazel", url: "https://bazel.build/basics/hermeticity" },
        ],
        practice: "Audit a custom rule to ensure it only accesses files declared in its inputs.",
      },
      {
        what: "Testing Rules with Starlark",
        why: "To verify your build logic. Learn to use 'analysistest' to verify providers and actions without running them.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Testing Bazel Rules", url: "https://bazel.build/rules/testing" },
        ],
        practice: "Write an analysis test that verifies a rule generates the correct command line.",
      },
      {
        what: "Custom Repository Rules",
        why: "To automate the downloading and patching of external libraries (e.g. fetching a specific GitHub tag).",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Repository Rules", url: "https://bazel.build/rules/repository_rules" },
        ],
        practice: "Write a repository rule that downloads a zip file, extracts it, and generates a BUILD file for it.",
      },
      {
        what: "Configuration Transitions",
        why: "The most complex part of Bazel. Transitions allow you to change the configuration (e.g. CPU architecture) for sub-parts of the build graph.",
        time: "2 Weeks",
        prereqs: "Step 15, Step 18",
        resources: [
          { name: "User-defined Transitions", url: "https://bazel.build/extending/config" },
        ],
        practice: "Build a project where a single binary target is built for two different architectures simultaneously.",
      },
      {
        what: "Large Scale Refactoring (Buildozer)",
        why: "To manage thousands of BUILD files. 'buildozer' allows you to edit configurations using command-line patterns.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Buildtools / Buildozer", url: "https://github.com/bazelbuild/buildtools/blob/master/buildozer/README.md" },
        ],
        practice: "Use buildozer to add a specific 'tag' to all targets in a sub-package.",
      },
      {
        what: "Contributing to Skylib",
        why: "Skylib is the standard library for Starlark. Contributing helps you learn best practices from Google engineers.",
        time: "Ongoing",
        prereqs: "All previous steps",
        resources: [
          { name: "Bazel Skylib GitHub", url: "https://github.com/bazelbuild/bazel-skylib" },
        ],
        practice: "Find a bug or missing helper function in Skylib and submit a pull request.",
      },
      {
        what: "Distributed Build Architecture",
        why: "To understand how Starlark code is executed in parallel across hundreds of remote workers.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Remote Execution API", url: "https://bazel.build/remote/execution" },
        ],
        practice: "Research the 'Remote Workers' concept and how it interacts with the local Starlark interpreter.",
      },
      {
        what: "Final Mastery Project: Custom Language Toolchain",
        why: "To synthesize all skills: Rules, Toolchains, Providers, and Performance into a complete system.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a set of Bazel rules for a language not natively supported (e.g. Zig or Vala), including compilation, testing, and dependency management.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Configuration Parser CLI", teaches: "Syntax, Dictionaries, and Lists.", tech: "Starlark-go" },
  { level: "Beginner", title: "BUILD File Linter", teaches: "String parsing and formatting rules.", tech: "Starlark" },
  { level: "Beginner", title: "Custom Log Formatter", teaches: "Functions, formatting, and I/O logic.", tech: "Starlark" },
  { level: "Intermediate", title: "Bazel Macro Library", teaches: "Macros, reusability, and build labels.", tech: "Bazel, .bzl" },
  { level: "Intermediate", title: "Static Site Generator Rule", teaches: "Rules, ctx.actions, and file transformation.", tech: "Bazel, Starlark" },
  { level: "Intermediate", title: "Custom Dependency Auditor", teaches: "Aspects and build graph traversal.", tech: "Bazel" },
  { level: "Intermediate", title: "Multi-platform Flag Manager", teaches: "select() and configuration mapping.", tech: "Bazel" },
  { level: "Advanced", title: "Zig Language Rules", teaches: "Toolchains, Providers, and native interop.", tech: "Bazel, Starlark, Zig" },
  { level: "Advanced", title: "Hermetic Sandbox Validator", teaches: "Security, file systems, and hermeticity checks.", tech: "Bazel, Starlark" },
  { level: "Advanced", title: "Distributed Task Scheduler", teaches: "Concurrency, parallel execution, and state.", tech: "Starlark-go, gRPC" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Build User",
    description: "Focus on syntax and macros to handle daily build configurations.",
    schedule: [
      "Days 1-7: Syntax, Types, and the REPL.",
      "Days 8-15: Functions, Lists, and Dicts.",
      "Days 16-23: Introduction to Macros and BUILD files.",
      "Days 24-30: Build 2 beginner projects and learn Git integration.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Platform Engineer",
    description: "Balanced path covering professional rules, providers, and automation.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Custom Rules, Providers, and Toolchains.",
      "Days 46-60: Bzlmod, Select(), and 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Build Architect",
    description: "Comprehensive path for enterprise-level scaling and system design.",
    schedule: [
      "Days 1-30: Core Language & Build foundations.",
      "Days 31-60: Professional Systems (Aspects, Testing, Security).",
      "Days 61-90: Performance Tuning, Distributed Execution, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between Starlark and Python?",
  "Explain the concept of Hermeticity in build systems.",
  "What are Bazel Macros and when should you use them over Rules?",
  "Describe the role of Providers in data passing.",
  "Why does Starlark forbid recursion and while loops?",
  "Explain the difference between a BUILD file and a .bzl file.",
  "How does 'select()' handle platform-specific logic?",
  "What is an Aspect and how is it used for cross-cutting concerns?",
  "Describe the Starlark 'Freezing' mechanism.",
  "How do you ensure a custom rule is performant?",
];

const codingQuestions = [
  { question: "Write a function to deeply merge two dictionaries.", topic: "Logic" },
  { question: "Implement a macro that generates a unique target name based on input files.", topic: "Macros" },
  { question: "Write a rule that validates the size of an output file at build time.", topic: "Rules" },
  { question: "Use a comprehension to remove duplicate labels from a list.", topic: "Functional" },
];

const mcqs = [
  { question: "Are while loops allowed in Starlark?", options: ["Yes", "No", "Only in macros", "Only in BUILD files"], answer: "No" },
  { question: "Which file is the modern replacement for WORKSPACE?", options: ["BUILD.bazel", "MODULE.bazel", "CONFIG.bazel", "PROJECT.bazel"], answer: "MODULE.bazel" },
  { question: "What is the complexity of accessing a dictionary key in Starlark?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },
];

const mistakes = [
  "Treating Starlark like Python: Expecting recursion or dynamic imports to work.",
  "Ignoring Hermeticity: Trying to access files not declared in rule inputs.",
  "Using global mutable state: Forgetting that top-level variables are frozen.",
  "Tutorial Hell: Reading the Bazel docs for weeks without building a custom rule.",
  "Inefficient Loops: Using O(n^2) logic inside a build graph with 10,000 targets.",
  "Vague labels: Using relative paths where absolute labels //path/to:target are safer.",
  "Ignoring 'analysistest': Manually checking builds instead of writing automated tests for rules.",
  "Massive root modules: Putting all logic in one .bzl file instead of modularizing.",
  "Neglecting the style guide: Writing unreadable BUILD files that confuse teammates.",
  "Hardcoding paths: Not using 'ctx.file' or 'ctx.path' for location-independent builds.",
];

export default function StarlarkRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Settings className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Starlark Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the configuration language of high-performance engineering. From Python-like foundations to building massive, hermetic, and lightning-fast build systems for Google-scale projects.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-DevOps / Configuration / Infra-as-Code">
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your DevOps portfolio.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Platform or Build Engineer role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live CLI & Logic Challenges</h3>
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
                    {['Starlark', 'Bazel', 'Build Engineering', 'Hermeticity', 'Infrastructure as Code', 'Macros', 'Providers', 'Toolchains', 'Aspects', 'Bzlmod', 'Performance Profiling', 'CI/CD Pipelines'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Build Determinism'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase modular, reusable .bzl libraries on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with optimizing build times using profiling.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <ShieldAlert className="h-6 w-6"/>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Backbone of Scalability.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Starlark is more than just a configuration tool; it's the language that enables the world's largest companies to move fast without breaking things. It rewards the precise and the organized. Stay consistent, read the build graphs, and remember: The most stable platforms in the world are built on the foundations you're learning today. Your journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Infrastructure
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
