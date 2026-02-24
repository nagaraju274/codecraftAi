
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Vala Syntax & GLib Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Vala & Toolchain Setup",
        why: "To install the 'valac' compiler and understand its unique role: compiling Vala code into optimized C source code for the GObject system.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Vala Official - Getting Started", url: "https://wiki.gnome.org/Projects/Vala/Tutorial" },
          { name: "Vala Basics (YouTube)", url: "https://www.youtube.com/watch?v=look-up-vala-intro" },
        ],
        practice: "Install 'valac' and 'glib-2.0' development headers. Write a 'Hello, Vala!' program and compile it with 'valac hello.vala'.",
      },
      {
        what: "Variables, Constants & Basic Types",
        why: "To master Vala's strictly typed nature and its integration with GLib types like 'string', 'int', and 'bool'.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Vala Documentation: Types", url: "https://valadoc.org/glib-2.0/index.html" },
        ],
        practice: "Declare variables for a user profile. Practice template strings like `\"Hello $name\"`.",
      },
      {
        what: "Control Flow: if, switch, foreach",
        why: "To manage logic branching. Vala's 'foreach' is particularly useful for iterating over GLib collections.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Flow in Vala", url: "https://wiki.gnome.org/Projects/Vala/Tutorial#Control_Flow" },
        ],
        practice: "Write a program that uses 'switch' to handle different command-line flags.",
      },
      {
        what: "Methods & Parameter Passing",
        why: "To modularize logic. Learn about 'out' and 'ref' parameters for returning multiple values or modifying objects.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Vala Methods Guide", url: "https://wiki.gnome.org/Projects/Vala/Tutorial#Methods" },
        ],
        practice: "Create a math library with procedures that use 'out' parameters to return both quotient and remainder.",
      },
      {
        what: "Arrays & GLib Collections (Gee)",
        why: "To manage lists and maps. Libgee provides modern, high-level data structures like ArrayList and HashMap.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Libgee Documentation", url: "https://valadoc.org/gee-0.8/index.html" },
        ],
        practice: "Build a program that stores a list of tasks in a 'Gee.ArrayList' and sorts them alphabetically.",
      },
      {
        what: "Error Handling (Exceptions)",
        why: "To build reliable applications using Vala's 'error domains' which compile down to efficient GError structures in C.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Error Handling in Vala", url: "https://wiki.gnome.org/Projects/Vala/Tutorial#Error_Handling" },
        ],
        practice: "Write a file-reading function that catches specific errors like 'File Not Found'.",
      },
      {
        what: "Basic I/O: GLib.FileStream",
        why: "To interact with the file system using the standard GLib utilities.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "GLib File Utilities", url: "https://valadoc.org/glib-2.0/GLib.FileStream.html" },
        ],
        practice: "Build a tool that reads a text file and counts the total number of words.",
      },
      {
        what: "Namespaces & Code Organization",
        why: "To prevent name collisions in large projects and learn how to use the 'using' keyword properly.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Vala Namespaces", url: "https://wiki.gnome.org/Projects/Vala/Tutorial#Namespaces" },
        ],
        practice: "Organize your math library into a 'MyCompany.Utilities' namespace.",
      },
    ],
  },
  {
    title: "Intermediate Stage: GObject & GTK Development",
    level: "Intermediate",
    steps: [
      {
        what: "The GObject System Basics",
        why: "GObject is the core of GNOME. Mastering Vala classes means mastering GObject without the painful C boilerplate.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "GObject Reference Manual", url: "https://docs.gtk.org/gobject/" },
        ],
        practice: "Define a 'Person' class with properties and a constructor. Use 'get' and 'set' accessors.",
      },
      {
        what: "Signals & Slots",
        why: "This is the primary way GObjects communicate. Essential for building interactive user interfaces.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Vala Signals Guide", url: "https://wiki.gnome.org/Projects/Vala/SignalsGuide" },
        ],
        practice: "Create a class that emits a custom signal and another that connects a callback to it.",
      },
      {
        what: "Memory Management: Ownership & References",
        why: "Vala uses ARC (Automatic Reference Counting). You must understand 'unowned' vs 'owned' to avoid leaks.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Vala Memory Management", url: "https://wiki.gnome.org/Projects/Vala/Manual/Attributes#Ownership" },
        ],
        practice: "Analyze a piece of code with a circular reference and fix it using 'unowned'.",
      },
      {
        what: "Introduction to GTK 4",
        why: "To build native graphical applications for Linux. GTK 4 is the modern standard for GNOME apps.",
        time: "2 Weeks",
        prereqs: "Step 10",
        resources: [
          { name: "GTK 4 Python/Vala Docs", url: "https://docs.gtk.org/gtk4/" },
          { name: "GTK 4 for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=look-up-gtk4-vala" },
        ],
        practice: "Create a simple window with a button that updates a label text when clicked.",
      },
      {
        what: "Asynchronous Programming (Async/Await)",
        why: "To keep UIs responsive. Vala provides beautiful syntax for asynchronous methods using GLib's event loop.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Vala Asynchronous Methods", url: "https://wiki.gnome.org/Projects/Vala/Manual/Methods#Asynchronous_Methods" },
        ],
        practice: "Build a tool that fetches a URL asynchronously and displays the status code.",
      },
      {
        what: "Build Systems: Meson & Ninja",
        why: "Modern Vala projects use Meson for building. It is much faster and cleaner than Makefiles.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "The Meson Build System", url: "https://mesonbuild.com/Quick-guide.html" },
        ],
        practice: "Create a 'meson.build' file for a project with multiple source files and dependencies.",
      },
      {
        what: "SQLite Integration",
        why: "To store persistent application data in a lightweight relational database.",
        time: "1 Week",
        prereqs: "SQL Basics",
        resources: [
          { name: "Vala SQLite Example", url: "https://wiki.gnome.org/Projects/Vala/SQLiteSample" },
        ],
        practice: "Build a simple 'Contact Book' app that saves and retrieves names from a local database.",
      },
      {
        what: "Working with JSON (Json-GLib)",
        why: "To interact with modern web APIs. Json-GLib is the standard for Vala/GObject apps.",
        time: "5 Days",
        prereqs: "Step 13",
        resources: [
          { name: "Json-GLib Documentation", url: "https://valadoc.org/json-glib-1.0/index.html" },
        ],
        practice: "Parse a configuration JSON file into a Vala object.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Architecture & Native Interop",
    level: "Advanced",
    steps: [
      {
        what: "GObject Introspection (GIR)",
        why: "To expose your Vala logic to other languages like Python or JavaScript. This is how GNOME is built.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "GObject Introspection Wiki", url: "https://gi.readthedocs.io/en/latest/" },
        ],
        practice: "Compile a Vala library into a GIR and Typelib, then call it from a Python script.",
      },
      {
        what: "Writing VAPI Files (Native C Interop)",
        why: "To use C libraries that don't have official Vala support. You must learn to describe C headers in Vala format.",
        time: "2 Weeks",
        prereqs: "C Basics",
        resources: [
          { name: "Creating VAPI Files", url: "https://wiki.gnome.org/Projects/Vala/LegacyBindings" },
        ],
        practice: "Find a small C header and write a custom VAPI file to use its functions in Vala.",
      },
      {
        what: "D-Bus Integration (GDBus)",
        why: "To allow your application to communicate with other running processes on Linux (e.g. system notifications).",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "GDBus Vala Example", url: "https://wiki.gnome.org/Projects/Vala/GDBusClientSample" },
        ],
        practice: "Send a desktop notification using the D-Bus interface of the notification daemon.",
      },
      {
        what: "Advanced GTK: Custom Widgets",
        why: "When standard buttons and labels aren't enough. Learn to draw directly using the Cairo graphics library.",
        time: "2 Weeks",
        prereqs: "Step 12",
        resources: [
          { name: "Cairo Graphics in Vala", url: "https://valadoc.org/cairo/index.html" },
        ],
        practice: "Create a custom 'Speedometer' widget that draws its needle based on a data property.",
      },
      {
        what: "Libsoup for Web Interaction",
        why: "The standard HTTP client library for GNOME. Essential for building web-connected desktop apps.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Libsoup Documentation", url: "https://valadoc.org/libsoup-3.0/index.html" },
        ],
        practice: "Build a simple web scraper or client for a REST API.",
      },
      {
        what: "Performance Profiling (Sysprof/Valgrind)",
        why: "Even with ARC, memory issues can occur. SRE-like monitoring for your desktop application.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "GNOME Sysprof Guide", url: "https://sysprof.it/" },
        ],
        practice: "Use Valgrind to ensure your contact book application has zero memory leaks.",
      },
      {
        what: "Flatpak & App Distribution",
        why: "To package your app so it runs on any Linux distribution without dependency issues.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Flatpak Official Docs", url: "https://docs.flatpak.org/en/latest/" },
        ],
        practice: "Create a Flatpak manifest for your GTK project and build it locally.",
      },
      {
        what: "Mastery Project: Full GNOME App",
        why: "To synthesize all skills: UI, Data, Async, and Distribution into a production-grade application.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build an 'RSS Reader' or 'Local Music Player' with database persistence and Flatpak support.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Word Frequency Counter", teaches: "File I/O, Strings, and Gee Collections.", tech: "Vala, GLib" },
  { level: "Beginner", title: "System Info Tool", teaches: "Subprocesses and string parsing.", tech: "Vala, GLib" },
  { level: "Beginner", title: "Task Manager (Console)", teaches: "Structs and basic logic flow.", tech: "Vala" },
  { level: "Intermediate", title: "Native GTK Notepad", teaches: "GTK 4, File saving, and Signals.", tech: "Vala, GTK 4" },
  { level: "Intermediate", title: "SQLite Contact Manager", teaches: "Database interaction and UI lists.", tech: "Vala, SQLite, GTK" },
  { level: "Intermediate", title: "Weather Desktop Widget", teaches: "Async networking, JSON, and UI updates.", tech: "Vala, Libsoup, Json-GLib" },
  { level: "Intermediate", title: "System Monitor (Custom UI)", teaches: "Custom drawing and performance metrics.", tech: "Vala, Cairo, GTK" },
  { level: "Advanced", title: "Collaborative Whiteboard", teaches: "WebSockets, D-Bus, and concurrent state.", tech: "Vala, Libsoup, D-Bus" },
  { level: "Advanced", title: "C Library Binding (VAPI)", teaches: "Writing custom bindings for high-perf C libs.", tech: "Vala, C, VAPI" },
  { level: "Advanced", title: "Professional GTK App (Flatpak)", teaches: "Complete lifecycle from dev to Flathub deployment.", tech: "Vala, Meson, Flatpak" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax and basic CLI tasks to understand the GObject model.",
    schedule: [
      "Days 1-7: Vala Syntax, Variables, and Procedures.",
      "Days 8-15: GLib basics and File I/O.",
      "Days 16-23: Introduction to Classes and Signals.",
      "Days 24-30: Build a CLI 'Word Counter' and learn Meson build system.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for native Linux application development.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: GTK 4 basics, State management, and Async logic.",
      "Days 46-60: SQLite integration and building a full 'Notepad' project.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional systems and GNOME application engineering.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced logic: D-Bus, Cairo, and GObject Introspection.",
      "Days 61-90: VAPI bindings, Flatpak distribution, and final major project.",
    ]
  }
];

const interviewTopics = [
  "How does Vala memory management differ from C++ or Java? (ARC).",
  "Explain the relationship between Vala and C.",
  "What is GObject? Why is it useful for systems programming?",
  "Explain the 'owned' and 'unowned' keywords.",
  "Difference between a Signal and a standard Method call.",
  "What is a VAPI file and why is it necessary?",
  "How does Vala handle asynchronous programming?",
  "Explain the benefit of using GObject Introspection.",
  "What is the purpose of the 'using' keyword in Vala?",
  "How do you resolve a circular reference in Vala?",
];

const codingQuestions = [
  { question: "Define a class with a private field and a public property with custom getters.", topic: "OOP" },
  { question: "Write an async method that sleeps for 1 second without blocking the main thread.", topic: "Async" },
  { question: "Implement a signal that passes two parameters to its connected callbacks.", topic: "Signals" },
  { question: "Write a function that correctly handles an error from a file-open operation.", topic: "Error Handling" },
];

const mcqs = [
  { question: "What is the primary library that Vala depends on?", options: ["Qt", "GLib", "Standard Library (C)", "Boost"], answer: "GLib" },
  { question: "Which build system is most commonly used for Vala today?", options: ["Make", "CMake", "Meson", "Ant"], answer: "Meson" },
  { question: "What happens to Vala code during the compilation process?", options: ["Interpreted directly", "Compiled to C first", "Compiled to JVM Bytecode", "Compiled to Machine Code directly"], answer: "Compiled to C first" },
];

const mistakes = [
  "Forgetting the 'unowned' keyword, leading to retain cycles and leaks.",
  "Blocking the main GTK thread with heavy synchronous tasks.",
  "Mixing CamelCase and snake_case inconsistently (follow the Vala style guide!).",
  "Tutorial Hell: Reading about GObject for weeks without building a simple app.",
  "Not using 'valadoc.org'—it is the best source for library information.",
  "Hardcoding strings instead of using gettext for internationalization.",
  "Using 'var' when 'unowned var' is more appropriate for transient pointers.",
  "Ignoring the Meson build system and struggling with manual C flags.",
  "Trying to use complex C++ patterns that GObject doesn't support natively.",
  "Neglecting to use 'valgrind' to verify memory health.",
];

export default function ValaRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Vala Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the modern language of the GNOME desktop. Build high-performance, native Linux applications with the ease of C# and the power of C.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Systems Programming Languages">
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
            <CardDescription>Build these 10 projects to showcase your expertise in the Vala ecosystem.</CardDescription>
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
            <CardDescription>Master the topics required to land a role at companies building Linux desktop ecosystems.</CardDescription>
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
                    {['Vala', 'GObject', 'GLib', 'GTK 4', 'ARC', 'Meson', 'Ninja', 'Flatpak', 'D-Bus', 'Json-GLib', 'VAPI', 'Cairo', 'Systems Programming'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight your understanding of the Linux desktop ecosystem.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase Vala projects on GitHub with screenshots of the GTK interface.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with Flatpak packaging and distribution.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build Native, Build Fast.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Vala is the bridge between productivity and performance. It empowers you to build professional desktop software without drowning in C boilerplate. Stay consistent, read the GNOME docs, and remember: The most integrated apps on Linux are built with the tools you're learning today. Your journey starts now!
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
