
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
  Layout,
  Cable,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Tcl Syntax & Scripting Basics",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Tclsh Setup",
        why: "To set up the Tcl interpreter (tclsh) and understand its unique 'everything is a string' philosophy.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Tcl.tk - Getting Started", url: "https://www.tcl.tk/man/tcl8.5/tutorial/tcltutorial.html" },
          { name: "Tcl Programming Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=look-up-tcl-intro" },
        ],
        practice: "Install Tcl/Tk. Open tclsh and print 'Hello, Tcl!'. Run a script from a .tcl file.",
      },
      {
        what: "The Tcl Command Structure",
        why: "In Tcl, every line is a command. Mastering command syntax (command arg1 arg2) is fundamental.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Tcl Fundamentals", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl1.html" },
        ],
        practice: "Practice basic commands like 'set', 'puts', and 'expr'.",
      },
      {
        what: "Variables & Substitutions ($, [], \\)",
        why: "To manage data flow. Understanding variable substitution ($), command substitution ([]), and backslash escaping is critical.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Tcl Substitutions Guide", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl2.html" },
        ],
        practice: "Write a script that calculates the result of a command nested inside another command.",
      },
      {
        what: "Math & Expressions (expr)",
        why: "Tcl uses the 'expr' command for all calculations. You must learn how to handle floating-point and integer math.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Tcl Expr Documentation", url: "https://www.tcl.tk/man/tcl8.5/TclCmd/expr.htm" },
        ],
        practice: "Build a script that calculates the area of a circle using mathematical functions.",
      },
      {
        what: "List Manipulation (The Core Structure)",
        why: "Lists are the primary data structure in Tcl. Master lindex, llength, lappend, and lrange.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Tcl Lists Tutorial", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl11.html" },
        ],
        practice: "Create a list of server names and practice adding, removing, and sorting them.",
      },
      {
        what: "Control Flow: if, switch",
        why: "To handle logic branching. Tcl's 'switch' command is exceptionally powerful for string pattern matching.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Tcl Decision Making", url: "https://www.tutorialspoint.com/tcl-tk/tcl_decision_making.htm" },
        ],
        practice: "Write a script that categorizes file extensions using a switch statement.",
      },
      {
        what: "Loops: for, while, foreach",
        why: "To automate repetitive tasks. 'foreach' is the most idiomatic way to process lists in Tcl.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Tcl Loops Guide", url: "https://www.tutorialspoint.com/tcl-tk/tcl_loops.htm" },
        ],
        practice: "Write a loop that iterates through a list of filenames and prints only the ones ending in '.log'.",
      },
      {
        what: "Procedures (proc) & Scope",
        why: "To write reusable, modular code. Understanding local vs global scope via 'global' or 'upvar' is vital.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Tcl Procedures", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl14.html" },
        ],
        practice: "Create a custom procedure that takes an array of numbers and returns their average.",
      },
      {
        what: "File System Operations",
        why: "Tcl is widely used for file automation. Learn 'open', 'read', 'write', and the 'file' command ensemble.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Tcl File I/O", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl22.html" },
        ],
        practice: "Write a script that reads a log file and extracts lines containing specific keywords.",
      },
      {
        what: "Standard Library (Tcllib basics)",
        why: "Tcllib contains dozens of modules for hashing, text processing, and data structures.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Tcllib Documentation", url: "https://core.tcl-lang.org/tcllib/doc/trunk/embedded/index.md" },
        ],
        practice: "Use the 'struct::stack' module from Tcllib to implement a simple LIFO buffer.",
      },
    ],
  },
  {
    title: "Intermediate Stage: GUI Development & Automation",
    level: "Intermediate",
    steps: [
      {
        what: "Arrays (Associative Maps)",
        why: "Tcl arrays are hash maps. They are the standard way to store key-value data across procedures.",
        time: "5 Days",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Tcl Arrays Guide", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl18.html" },
        ],
        practice: "Create a database-like array to store and retrieve user profile information.",
      },
      {
        what: "Dictionaries (dict command)",
        why: "Dictionaries are values (unlike arrays), making them easier to pass to functions and store in lists.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Tcl Dict Command", url: "https://www.tcl.tk/man/tcl8.5/TclCmd/dict.htm" },
        ],
        practice: "Convert your array-based user profile system to use a dictionary.",
      },
      {
        what: "Regular Expressions (regexp, regsub)",
        why: "Perl-compatible regex in Tcl is incredibly fast and flexible for data parsing.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Tcl Regex Tutorial", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl20.html" },
        ],
        practice: "Write a script that validates email addresses and extracts domain names.",
      },
      {
        what: "Error Handling (catch, try)",
        why: "To build robust automation scripts that don't stop on minor failures.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Tcl Catch Command", url: "https://www.tcl.tk/man/tcl8.5/TclCmd/catch.htm" },
        ],
        practice: "Wrap a file-open operation in a 'catch' block to provide a custom error message.",
      },
      {
        what: "Introduction to Tk (The GUI toolkit)",
        why: "Tk is the standard for building cross-platform native graphical interfaces with minimal code.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Tk Tutorial (Official)", url: "https://www.tkdocs.com/tutorial/index.html" },
        ],
        practice: "Build a simple window with a 'Hello' button that shows a message box.",
      },
      {
        what: "Tk Layout: Pack, Grid, Place",
        why: "Layout managers control where widgets sit. Mastering 'grid' is essential for professional UIs.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "Geometry Management in Tk", url: "https://www.tkdocs.com/tutorial/grid.html" },
        ],
        practice: "Create a calculator UI layout using the grid manager.",
      },
      {
        what: "Event-Driven Programming (vwait, after)",
        why: "UIs and network servers respond to events. Learning the Tcl event loop is key to non-blocking code.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "Tcl Event Loop", url: "https://wiki.tcl-lang.org/page/Event+Loop" },
        ],
        practice: "Build a countdown timer that updates the UI every second without freezing.",
      },
      {
        what: "Expect: Automating Interactive CLIs",
        why: "Expect is the #1 tool for automating telnet, ssh, and ftp sessions. A huge use case for Tcl.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Expect Guide", url: "https://www.nist.gov/publications/expect-software-suite-automating-interactive-programs" },
        ],
        practice: "Write an Expect script that logs into a remote server via SSH and runs 'uptime'.",
      },
      {
        what: "Packages & Namespaces",
        why: "To organize large projects and avoid variable name collisions. Essential for library creation.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Tcl Namespaces", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl30.html" },
        ],
        practice: "Convert your math library into a proper Tcl package with its own namespace.",
      },
      {
        what: "String & Binary Handling",
        why: "To process raw data from files or network sockets using 'binary scan' and 'binary format'.",
        time: "5 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Tcl Binary Command", url: "https://www.tcl.tk/man/tcl8.5/TclCmd/binary.htm" },
        ],
        practice: "Write a script that reads a binary file header and extracts version information.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Engineering & Metaprogramming",
    level: "Advanced",
    steps: [
      {
        what: "Metaprogramming (uplevel, upvar)",
        why: "Tcl allows you to manipulate the caller's scope. This is how you build custom control structures or DSLs.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Tcl Uplevel & Upvar", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl26.html" },
        ],
        practice: "Implement a 'repeat' loop construct that isn't built into the language.",
      },
      {
        what: "TclOO: Object-Oriented Tcl",
        why: "Tcl 8.6+ includes a native object system for building complex, stateful applications.",
        time: "2 Weeks",
        prereqs: "Step 19",
        resources: [
          { name: "TclOO Documentation", url: "https://www.tcl.tk/man/tcl8.6/TclCmd/class.htm" },
        ],
        practice: "Refactor your user profile system into a class-based hierarchy with inheritance.",
      },
      {
        what: "Socket Programming (Network)",
        why: "To build client-server applications. Tcl's socket API is non-blocking and extremely lightweight.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Tcl Sockets Tutorial", url: "https://www.tcl.tk/man/tcl8.5/tutorial/Tcl25.html" },
        ],
        practice: "Build a simple TCP chat server that can handle multiple clients concurrently.",
      },
      {
        what: "Interfacing with C/C++ (C API)",
        why: "Tcl was designed to be embedded. Learn to write C extensions for performance or hardware access.",
        time: "2 Weeks",
        prereqs: "C Basics",
        resources: [
          { name: "Tcl C API Overview", url: "https://www.tcl.tk/man/tcl8.5/TclLib/contents.htm" },
        ],
        practice: "Write a high-speed math function in C and register it as a Tcl command.",
      },
      {
        what: "Advanced Tk: Canvas & Themes",
        why: "The Canvas widget allows for drawing arbitrary graphics. Ttk (Themed Tk) ensures apps look modern on all OSs.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Tk Canvas Guide", url: "https://www.tkdocs.com/tutorial/canvas.html" },
        ],
        practice: "Create a simple flowchart drawing tool using the Canvas widget.",
      },
      {
        what: "Safe Interpreters & Sandboxing",
        why: "To run untrusted user scripts safely within your application by restricting command access.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Tcl Safe Base", url: "https://www.tcl.tk/man/tcl8.5/TclCmd/safe.htm" },
        ],
        practice: "Create a restricted shell where the user can only use math and string commands, but not file I/O.",
      },
      {
        what: "Deployment: Starpacks & Starkits",
        why: "To package your Tcl/Tk application and the runtime into a single standalone executable for easy sharing.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Tclkit & Starkit Intro", url: "https://wiki.tcl-lang.org/page/Starkit" },
        ],
        practice: "Package a simple Tk tool into a 'starpack' .exe file.",
      },
      {
        what: "Performance Profiling & Tuning",
        why: "To identify why a script is slow. Learn to use 'timer' and 'tcllib' profiling tools.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Profiling Tcl Code", url: "https://wiki.tcl-lang.org/page/Profiling+Tcl+code" },
        ],
        practice: "Optimize a large list-processing script to use dictionaries for faster lookup.",
      },
      {
        what: "Threads in Tcl",
        why: "While the event loop is usually enough, sometimes true parallelism is needed for heavy CPU tasks.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Tcl Thread Package", url: "https://www.tcl.tk/man/tcl8.5/ThreadCmd/thread.htm" },
        ],
        practice: "Run a long-running calculation in a separate thread to keep the main UI responsive.",
      },
      {
        what: "Final Mastery: The System Orchestrator",
        why: "To synthesize all skills: GUI, Sockets, Expect, and Metaprogramming into one tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Network Device Manager' that logs into multiple routers via Expect, audits configs, and shows status in a Tk Dashboard.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Unit Converter", teaches: "Input, Math (expr), and variables.", tech: "Tcl" },
  { level: "Beginner", title: "Log File Filter", teaches: "File I/O, Strings, and Loops.", tech: "Tcl" },
  { level: "Beginner", title: "Batch Image Renamer", teaches: "File system commands, Lists, and Regexp.", tech: "Tcl" },
  { level: "Intermediate", title: "Tk Text Editor", teaches: "Tk Widgets, Text widget manipulation, File saving.", tech: "Tcl/Tk" },
  { level: "Intermediate", title: "Expect Router Configurator", teaches: "Expect command, interactive automation, SSH.", tech: "Tcl, Expect" },
  { level: "Intermediate", title: "SQLite Inventory Manager", teaches: "Database interaction, SQL, and Data mapping.", tech: "Tcl, tcl-sqlite3" },
  { level: "Intermediate", title: "Weather Dashboard", teaches: "Networking (HTTP), JSON parsing, and Tk UI.", tech: "Tcl/Tk, tcllib" },
  { level: "Advanced", title: "Multi-user Chat (Sockets)", teaches: "TCP Sockets, Event loop, and State management.", tech: "Tcl, Networking" },
  { level: "Advanced", title: "Custom DSL for Automation", teaches: "Metaprogramming (uplevel/upvar), DSL design.", tech: "Tcl" },
  { level: "Advanced", title: "High-Speed C-Extended Library", teaches: "C API, performance tuning, and cross-compilation.", tech: "Tcl, C" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Automation Scripter",
    description: "Focus on syntax, lists, and Expect to be productive in a networking or Linux environment.",
    schedule: [
      "Days 1-7: Installation, Variables, Substitutions, and Math.",
      "Days 8-15: Master Lists and basic Control Flow.",
      "Days 16-23: File I/O and Regular Expressions.",
      "Days 24-30: Build 2 beginner projects and learn basic Expect automation.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Full-Stack Pro",
    description: "Balanced path for building native tools and interactive GUI applications.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Dictionaries, Error Handling, and Tk GUI basics.",
      "Days 41-60: Event loop, Packages, and building a full Tk Text Editor.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Language Expert",
    description: "Comprehensive path for high-performance engineering and systems architecture.",
    schedule: [
      "Days 1-30: Core Development & Scripting logic.",
      "Days 31-60: Professional Systems (GUI, Database, Expect).",
      "Days 61-90: Metaprogramming, C API, Threading, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Everything is a String: What does this mean for Tcl?",
  "Explain variable substitution ($) vs. command substitution ([]).",
  "How do lists differ from arrays in Tcl?",
  "What is the role of the 'expr' command?",
  "Describe the Tcl event loop and its significance for GUIs.",
  "What is 'Expect' and why is it unique to the Tcl world?",
  "Explain 'uplevel' and 'upvar' and their use cases.",
  "How do you implement OOP in modern Tcl (Tcl 8.6+)?",
  "Difference between synchronous and asynchronous socket calls in Tcl.",
  "What is a 'starpack' and how do you deploy Tcl apps?",
];

const codingQuestions = [
  { question: "Write a proc to find the frequency of words in a text file.", topic: "Dictionaries" },
  { question: "Implement a 'unless' control structure using metaprogramming.", topic: "Metaprogramming" },
  { question: "Use a regex to extract all IP addresses from a multi-line string.", topic: "Regex" },
  { question: "Create a Tk button that, when clicked, changes its own label.", topic: "GUI/Tk" },
];

const mcqs = [
  { question: "Which command is used for arithmetic evaluations in Tcl?", options: ["calc", "math", "expr", "eval"], answer: "expr" },
  { question: "What is the return value of a 'proc' if no return statement is found?", options: ["null", "void", "The result of the last command", "0"], answer: "The result of the last command" },
  { question: "Which toolkit is used for building GUIs in Tcl?", options: ["Gt", "Qt", "Tk", "Wx"], answer: "Tk" },
];

const mistakes = [
  "Forgetting the square brackets [] for command substitution.",
  "Confusing arrays (which are not values) with dictionaries (which are values).",
  "Not using 'expr' for math, leading to string concatenation errors.",
  "Tutorial Hell: Reading about the C API before mastering basic list processing.",
  "Neglecting local variable scope: Not using 'local' (implicitly via proc) or 'global' correctly.",
  "Ignoring the powerful Tcl Wiki: It's the #1 resource for Tcl problems.",
  "Failing to use 'catch' for risky operations (like file access or networking).",
  "Hardcoding paths instead of using the 'file' command ensemble for cross-platform safety.",
  "Over-nesting code instead of using the pipe-like nature of Tcl commands.",
  "Ignoring the built-in unit testing module 'tcltest'.",
];

export default function TclRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cable className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Tcl Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the Tool Command Language. From your first 'puts' to building high-performance automation suites, professional Tk GUIs, and advanced systems logic.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Tcl/Tk Developer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream role in Automation or Systems Engineering.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding & Scripting Challenges</h3>
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
                    {['Tcl/Tk', 'Expect', 'Tcllib', 'TclOO', 'Metaprogramming', 'Uplevel', 'Upvar', 'Network Automation', 'EDA Automation', 'GUI Development', 'Starpacks', 'Starkits', 'Non-blocking I/O'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality screenshots of your Tk GUI tools in your GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g. 'Why I used Expect for session handling').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase your ability to cross-compile and package Tcl apps into standalones.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate Your Success</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Tcl is the "secret sauce" of high-end automation. It rewards those who value simplicity and efficiency. Stay consistent, read the official manuals (and the Tcl Wiki!), and remember: If you have to do it twice, script it. Your journey to Tcl mastery starts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Tcl Projects
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
