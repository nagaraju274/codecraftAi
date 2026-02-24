
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
  Settings,
  HardDrive,
  ShieldAlert,
  Plane,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Ada Syntax & Strong Typing",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & GNAT Setup",
        why: "Ada is the gold standard for safety-critical systems. GNAT (part of GCC) is the primary compiler used in industry.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "AdaCore - Get Started", url: "https://www.adacore.com/get-started" },
          { name: "Learn Ada (Official Interactive)", url: "https://learn.adacore.com/courses/intro-to-ada/index.html" },
        ],
        practice: "Install the GNAT toolchain via Alire (Ada LIbrary REpository). Run 'alr init --exe my_app' and print 'Hello, Ada!'.",
      },
      {
        what: "Strong Typing & Numeric Types",
        why: "Ada's type system prevents errors at compile-time. You can define custom ranges for integers to prevent logic bugs.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Ada Types Guide", url: "https://en.wikibooks.org/wiki/Ada_Programming/Types" },
        ],
        practice: "Define a type 'Degree' with a range of 0 to 360. Attempt to assign 361 to see the compiler's reaction.",
      },
      {
        what: "Control Flow: If, Case, and Loops",
        why: "Logic branching in Ada is explicit and safe. The 'case' statement requires handling all possibilities (exhaustiveness).",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Ada Control Structures", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/control_structures.html" },
        ],
        practice: "Write a program that uses a 'case' statement to handle different sensor alert levels.",
      },
      {
        what: "Subprograms: Procedures & Functions",
        why: "To modularize logic. Ada distinguishes between procedures (actions) and functions (computations).",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Procedures and Functions", url: "https://en.wikibooks.org/wiki/Ada_Programming/Subprograms" },
        ],
        practice: "Create a function to calculate the velocity of an aircraft given distance and time.",
      },
      {
        what: "Packages: Encapsulation & Specs",
        why: "Packages are the core of Ada's modularity. Every package has a Specification (.ads) and a Body (.adb).",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Ada Packages Deep Dive", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html" },
        ],
        practice: "Create a 'Math_Utils' package with a spec file defining constants and a body file implementing logic.",
      },
      {
        what: "Arrays & Record Types",
        why: "To manage collections and structured data. Records are similar to Structs but with more safety features.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Records and Arrays", url: "https://en.wikibooks.org/wiki/Ada_Programming/Types/Record" },
        ],
        practice: "Define a 'Flight_Record' with fields for ID, Altitude, and Status. Store multiple records in an array.",
      },
      {
        what: "Attributes & Tick Notation",
        why: "Attributes ('First, 'Last, 'Range) allow you to write generic code that adapts to the data's boundaries.",
        time: "2 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Ada Attributes Reference", url: "https://en.wikibooks.org/wiki/Ada_Programming/Attributes" },
        ],
        practice: "Iterate through an array using 'Range attribute instead of hardcoded numbers.",
      },
      {
        what: "Exception Handling",
        why: "To build 'bulletproof' software. Ada's exceptions allow you to catch and recover from runtime errors safely.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Ada Exceptions Guide", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/exceptions.html" },
        ],
        practice: "Write a division function that catches 'Constraint_Error' when the denominator is zero.",
      },
      {
        what: "Basic I/O (Ada.Text_IO)",
        why: "To interact with the user and standard files using Ada's typed I/O library.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Input/Output in Ada", url: "https://en.wikibooks.org/wiki/Ada_Programming/Libraries/Ada.Text_IO" },
        ],
        practice: "Write a program that reads a user's name and age and validates the numeric input.",
      },
      {
        what: "Compilation Units & Dependency Management",
        why: "To understand how the 'with' and 'use' clauses work to link packages together.",
        time: "2 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Context Clauses", url: "https://en.wikibooks.org/wiki/Ada_Programming/Packages#Context_clauses" },
        ],
        practice: "Import your 'Math_Utils' package into a main program and use its functions.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Abstraction & Concurrency",
    level: "Intermediate",
    steps: [
      {
        what: "Private Types & Information Hiding",
        why: "The pillar of safe software. Private types prevent external code from tampering with an object's internal state.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Privacy in Ada", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/privacy.html" },
        ],
        practice: "Refactor your 'Bank_Account' package so the 'Balance' field is private and can only be modified via procedures.",
      },
      {
        what: "Generics: Reusable Templates",
        why: "To write logic once and use it for any type (e.g., a Sorting algorithm that works for Integers and Floats).",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Ada Generics Guide", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/generics.html" },
        ],
        practice: "Implement a generic 'Swap' procedure that works for any data type.",
      },
      {
        what: "Tasks: Native Concurrency",
        why: "Ada was designed for concurrency. Tasks are first-class citizens that run in parallel without the complexity of OS threads.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Concurrency in Ada", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/tasking.html" },
        ],
        practice: "Create a program with two tasks: one that prints 'Ping' and another that prints 'Pong' concurrently.",
      },
      {
        what: "Protected Objects: Safe Data Sharing",
        why: "To prevent 'Race Conditions'. Protected objects ensure that only one task can modify shared data at a time.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Protected Types Guide", url: "https://en.wikibooks.org/wiki/Ada_Programming/Tasking#Protected_types" },
        ],
        practice: "Implement a shared counter that is incremented safely by 10 different tasks using a protected object.",
      },
      {
        what: "Access Types (Pointers)",
        why: "To manage dynamic memory allocation safely. Ada uses 'Access' types to point to objects on the heap.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Ada Access Types", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/access_types.html" },
        ],
        practice: "Build a Singly Linked List using access types and records.",
      },
      {
        what: "Object-Oriented Ada (Tagged Types)",
        why: "Ada's version of inheritance and polymorphism. Tagged types allow for extensible class hierarchies.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Object-Oriented Programming in Ada", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/object_oriented_programming.html" },
        ],
        practice: "Create a 'Shape' tagged type and extend it into 'Circle' and 'Square' with overridden 'Area' functions.",
      },
      {
        what: "Fixed-Point & Floating-Point Mastery",
        why: "Crucial for aerospace and finance. Fixed-point types allow for high precision without the overhead of floating-point hardware.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Ada Fixed-Point Types", url: "https://en.wikibooks.org/wiki/Ada_Programming/Types/Fixed" },
        ],
        practice: "Define a fixed-point type for currency with a delta of 0.01.",
      },
      {
        what: "The Ada Container Library",
        why: "To use optimized data structures like Vectors, Maps, and Sets instead of building them from scratch.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Ada Containers", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/containers.html" },
        ],
        practice: "Use 'Ada.Containers.Vectors' to store and sort a list of student names.",
      },
      {
        what: "Rendezvous & Entries",
        why: "A unique Ada feature for direct communication between tasks using 'accept' and 'call' mechanisms.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Task Rendezvous", url: "https://en.wikibooks.org/wiki/Ada_Programming/Tasking#Rendezvous" },
        ],
        practice: "Create a 'Server' task that waits for a 'Client' task to send a message before processing it.",
      },
      {
        what: "Child Packages & Hierarchy",
        why: "To organize massive codebases into logical, hierarchical structures (e.g., Parent.Child).",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Hierarchical Packages", url: "https://en.wikibooks.org/wiki/Ada_Programming/Packages#Hierarchical_packages" },
        ],
        practice: "Build a library 'App' with child packages 'App.UI' and 'App.Database'.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Safety & SPARK",
    level: "Advanced",
    steps: [
      {
        what: "SPARK: Formal Verification",
        why: "The 'unbreakable' subset of Ada. SPARK allows you to mathematically prove that your code is free of runtime errors.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Introduction to SPARK", url: "https://learn.adacore.com/courses/intro-to-spark/index.html" },
        ],
        practice: "Write a simple 'Add' function in SPARK and use the GNATprove tool to prove its correctness.",
      },
      {
        what: "Representation Clauses (Low-Level)",
        why: "To map Ada records directly to hardware registers or specific network packet formats.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Ada Representation Clauses", url: "https://en.wikibooks.org/wiki/Ada_Programming/Representation_clauses" },
        ],
        practice: "Define a record and force its layout to match a specific 32-bit hardware register.",
      },
      {
        what: "Interfacing with C/C++",
        why: "To integrate Ada into existing systems or use C libraries (like SDL or OpenSSL).",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Interfacing with C", url: "https://learn.adacore.com/courses/intro-to-ada/chapters/interfacing_with_c.html" },
        ],
        practice: "Import the C 'printf' function into Ada and use it to print a string.",
      },
      {
        what: "Real-Time Systems (Ravenscar Profile)",
        why: "A subset of Ada tasking designed for deterministic, safety-critical real-time environments.",
        time: "1 Week",
        prereqs: "Step 13, Step 14",
        resources: [
          { name: "Ravenscar Profile Overview", url: "https://www.adacore.com/uploads/technical-papers/Ravenscar_Profile.pdf" },
        ],
        practice: "Research how the Ravenscar profile limits tasking to ensure high-speed predictable execution.",
      },
      {
        what: "Embedded Ada (ARM / RISC-V)",
        why: "To run Ada directly on microcontrollers without an operating system (Bare Metal).",
        time: "2 Weeks",
        prereqs: "Step 22",
        resources: [
          { name: "Ada on ARM Cortex-M", url: "https://blog.adacore.com/ada-on-the-microbit" },
        ],
        practice: "Set up an emulator for a Micro:bit and blink an LED using Ada.",
      },
      {
        what: "Advanced Generics: Formal Parameters",
        why: "To build extremely powerful library architectures where even functions and packages are generic parameters.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Advanced Generics", url: "https://en.wikibooks.org/wiki/Ada_Programming/Generics#Generic_formal_parameters" },
        ],
        practice: "Implement a generic 'Iterator' that takes a search function as a formal parameter.",
      },
      {
        what: "Systems Programming: Memory Pools",
        why: "To manage memory manually in performance-critical areas, similar to custom allocators in C++.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "Ada Storage Pools", url: "https://en.wikibooks.org/wiki/Ada_Programming/Types/Access#Storage_pools" },
        ],
        practice: "Create a custom storage pool that pre-allocates memory for 100 objects.",
      },
      {
        what: "Distributed Ada (Annex E)",
        why: "To build systems where tasks run on different machines but communicate as if they were local.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Ada Distributed Systems", url: "http://www.ada-auth.org/standards/12rm/html/RM-E.html" },
        ],
        practice: "Research the concept of 'Remote Procedure Calls' in the Ada Reference Manual.",
      },
      {
        what: "Static Analysis & Auditing",
        why: "To use tools like GNATcheck and GNATmetric to ensure code quality and adherence to safety standards.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Code Quality with AdaCore", url: "https://www.adacore.com/tools" },
        ],
        practice: "Run GNATcheck on a previous project to identify non-compliant code patterns.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills into a professional-grade, safety-critical system simulator.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Railway Signaling System' or a 'Small Satellite Control' simulator with tasking and verification.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Atmospheric Unit Converter", teaches: "Strong typing, Ranges, and Procedures.", tech: "Ada, Alire" },
  { level: "Beginner", title: "Inventory Management CLI", teaches: "Records, Arrays, and File I/O.", tech: "Ada" },
  { level: "Beginner", title: "Mathematical Toolkit", teaches: "Packages, Functions, and Exception handling.", tech: "Ada" },
  { level: "Intermediate", title: "Concurrent Bank Vault", teaches: "Tasks, Protected Objects, and Deadlock prevention.", tech: "Ada" },
  { level: "Intermediate", title: "Flight Data Encryptor", teaches: "Fixed-point math, Bitwise logic, and Packages.", tech: "Ada" },
  { level: "Intermediate", title: "Generic Data Structure Library", teaches: "Generics, Vectors, and Unit Testing.", tech: "Ada, AUnit" },
  { level: "Intermediate", title: "Multi-threaded Web Scraper", teaches: "Networking (AWS), Tasks, and JSON parsing.", tech: "Ada, AWS (Ada Web Server)" },
  { level: "Advanced", title: "SPARK Verified Sorting Engine", teaches: "Formal verification, Proving contracts.", tech: "Ada, SPARK" },
  { level: "Advanced", title: "Real-time Sensor Hub", teaches: "Embedded Ada, Representation clauses, Low-level I/O.", tech: "Ada, ARM Cortex" },
  { level: "Advanced", title: "Distributed Chat Protocol", teaches: "Annex E (Distribution), Networking, Sockets.", tech: "Ada, PolyORB" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Systems Dev",
    description: "Focus on syntax, strong typing, and package modularity for foundational Ada skills.",
    schedule: [
      "Days 1-7: Installation, Basic Syntax, and Strong Typing.",
      "Days 8-15: Procedures, Functions, and Package structure.",
      "Days 16-23: Records, Arrays, and basic Exception handling.",
      "Days 24-30: Build 2 beginner projects and learn Alire management.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Safety Engineer",
    description: "Balanced path covering Concurrency, Generics, and Object-Oriented patterns.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Tasks, Protected Objects, and safe data sharing.",
      "Days 46-60: Generics, OO Ada (Tagged Types), and 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The High-Integrity Expert",
    description: "Comprehensive path including Formal Verification (SPARK) and Embedded Systems.",
    schedule: [
      "Days 1-30: Core Ada & Concurrency fundamentals.",
      "Days 31-60: Professional Abstraction, Testing, and OO patterns.",
      "Days 61-90: SPARK verification, Embedded development, and final capstone project.",
    ]
  }
];

const interviewTopics = [
  "Strong Typing: Why define custom ranges for Integers?",
  "Difference between a Procedure and a Function in Ada.",
  "Package Architecture: Specification vs. Body.",
  "Explain Ada Tasks vs. standard OS Threads.",
  "What are Protected Objects and why are they safer than Mutexes?",
  "Tagging: How does Ada handle Inheritance and Polymorphism?",
  "What is SPARK and how does it relate to Ada?",
  "Explain 'Renaming' and 'Subtype' declarations.",
  "How does Ada handle Fixed-point math?",
  "Memory Management: Why does Ada prefer value types and 'Aliased' objects over raw pointers?",
];

const codingQuestions = [
  { question: "Define a type 'Altitude' that only accepts values between -500 and 50,000.", topic: "Strong Typing" },
  { question: "Write a generic function to find the maximum element in an array of any numeric type.", topic: "Generics" },
  { question: "Implement a task that acts as a simple timer, printing a message every 5 seconds.", topic: "Tasking" },
  { question: "Create a protected object that manages a shared resource (like a printer queue).", topic: "Protected Objects" },
];

const mcqs = [
  { question: "Which file extension is used for an Ada package specification?", options: [".adb", ".ads", ".ada", ".cpp"], answer: ".ads" },
  { question: "What is the primary benefit of the 'Ravenscar' profile?", options: ["Faster GUI rendering", "Deterministic real-time scheduling", "Easier database access", "Automatic memory management"], answer: "Deterministic real-time scheduling" },
  { question: "Which keyword is used to make a type extensible for inheritance?", options: ["class", "extend", "tagged", "virtual"], answer: "tagged" },
];

const mistakes = [
  "Ignoring compiler warnings: Ada compilers are designed to be extremely helpful—listen to them.",
  "Treating Ada like C: Don't use raw pointers if you can use value types or references.",
  "Vague types: Defining everything as 'Integer' instead of specific ranges (e.g. range 1..10).",
  "Mixing logic in the .ads file: Keep the specification clean; move logic to the .adb body.",
  "Polluting namespace: Avoid 'use' clauses in large projects; prefer 'with' and explicit naming.",
  "Ignoring SPARK: For safety-critical work, not using formal verification is a missed opportunity.",
  "Blocking Tasks: Never use a long-running procedure inside a task without proper synchronization.",
  "Manual Memory management: Overusing 'Unchecked_Deallocation' when scope-based lifetimes are enough.",
  "Neglecting Alire: Don't manage dependencies manually; use the Alire package manager.",
  "Over-engineering: Ada is powerful—don't use complex tasking for a simple linear problem.",
];

export default function AdaRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Plane className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Ada Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language of high-integrity systems. From military-grade security and aerospace reliability to advanced concurrent architectures and formal verification.
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
              <CardDescription>Follow these {stage.steps.length} steps to progress from {stage.level}.</CardDescription>
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
            <CardDescription>Apply your knowledge with these 10 hands-on Ada projects.</CardDescription>
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
            <CardDescription>Choose a timeline that matches your availability.</CardDescription>
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
            <CardDescription>Master the topics required to land a role in high-integrity systems engineering.</CardDescription>
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
                    {['Ada 2012', 'SPARK', 'Formal Verification', 'Embedded Ada', 'GNAT', 'Strong Typing', 'Tasking', 'Protected Objects', 'Ravenscar', 'Real-Time Systems', 'MISRA', 'DO-178C'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Safety-Critical' standards.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase projects that have zero runtime crashes (proven with SPARK).</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with hardware-software integration.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build Software You Can Trust Your Life With</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Ada is more than a language; it's an engineering discipline. It rewards those who value precision and safety over simple hacks. Stay consistent, read the reference manual, and remember: The most reliable systems in history were built on the foundations you're learning today. Your high-integrity journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Safety Projects
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
