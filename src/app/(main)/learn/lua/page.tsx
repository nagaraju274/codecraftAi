
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
  Gamepad2,
  Settings,
  HardDrive,
  Box,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Scripting Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Lua Interpreter Setup",
        why: "To set up the Lua runtime and understand why it is the language of choice for embedding in larger applications like Roblox and World of Warcraft.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Lua.org - Getting Started", url: "https://www.lua.org/start.html" },
          { name: "Lua Tutorial for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=iMacxZQMPXs" },
        ],
        practice: "Install Lua. Open the interpreter and print 'Hello, Lua!'. Run a simple script from a .lua file.",
      },
      {
        what: "Variables & Data Types",
        why: "To master Lua's dynamic typing. You must understand nil, boolean, number, string, and the concept of global vs local scope.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Lua Types and Values", url: "https://www.lua.org/pil/2.html" },
        ],
        practice: "Declare local variables for a player's stats (health, score, name). Experiment with re-assigning values of different types.",
      },
      {
        what: "Arithmetic & Logical Operators",
        why: "To perform calculations and combine conditions. Understanding 'and', 'or', and 'not' is core to logic flow.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Lua Operators Guide", url: "https://www.tutorialspoint.com/lua/lua_operators.htm" },
        ],
        practice: "Build a program that calculates the average of four numbers and checks if it's within a specific range.",
      },
      {
        what: "Control Flow: if, then, else",
        why: "Logic branching allows your scripts to react to different conditions, essential for game AI and UI logic.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Lua Control Structures", url: "https://www.lua.org/pil/4.3.html" },
        ],
        practice: "Write a script that determines if a character can enter a dungeon based on level and key possession.",
      },
      {
        what: "Loops: while, repeat, and for",
        why: "Iteration is essential for processing lists and repeating actions. Master both numeric and generic for loops.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Looping in Lua", url: "https://www.tutorialspoint.com/lua/lua_loops.htm" },
        ],
        practice: "Write a loop that prints the Fibonacci sequence up to 100. Write another that iterates backwards from 10 to 1.",
      },
      {
        what: "Functions & Variable Scope",
        why: "Functions are first-class citizens in Lua. Understanding local scope is vital for performance and preventing bugs.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Functions in Lua", url: "https://www.lua.org/pil/5.html" },
        ],
        practice: "Create a reusable function that calculates the distance between two 2D points.",
      },
      {
        what: "Tables: The Only Data Structure",
        why: "Tables are the swiss-army knife of Lua. They act as arrays, dictionaries, and objects. You must master them.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Lua Tables Deep Dive", url: "https://www.lua.org/pil/11.html" },
        ],
        practice: "Create an inventory system using a table that stores items as keys and their quantities as values.",
      },
      {
        what: "Basic File I/O",
        why: "To save settings or read logs. The 'io' library provides simple methods for persistent data storage.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Lua File I/O", url: "https://www.tutorialspoint.com/lua/lua_file_io.htm" },
        ],
        practice: "Write a script that asks for a user's name and saves it to a 'users.txt' file.",
      },
      {
        what: "Standard Libraries: math & string",
        why: "To perform advanced math and text manipulation without writing complex custom logic.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Lua String Library", url: "https://www.lua.org/pil/20.html" },
          { name: "Lua Math Library", url: "https://www.lua.org/pil/18.html" },
        ],
        practice: "Use string.gsub to replace all swear words in a text block with asterisks.",
      },
      {
        what: "Modules & require",
        why: "To organize large projects. Learning to split code into separate files and import them is a professional standard.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Lua Modules", url: "https://www.lua.org/pil/15.html" },
        ],
        practice: "Move your math functions into a 'utils.lua' file and use them in a 'main.lua' via require.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Meta-Programming & OOP",
    level: "Intermediate",
    steps: [
      {
        what: "Meta-tables & Meta-methods",
        why: "The 'secret' to Lua's flexibility. They allow you to change the behavior of tables (e.g. adding two tables together).",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Metatables and Metamethods", url: "https://www.lua.org/pil/13.html" },
        ],
        practice: "Implement a vector addition system where you can use '+' between two table 'vectors'.",
      },
      {
        what: "Object-Oriented Programming (OOP)",
        why: "Lua isn't class-based, but you can simulate classes using metatables. Essential for game entity architecture.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "OOP in Lua", url: "https://www.lua.org/pil/16.html" },
        ],
        practice: "Build an 'Enemy' class with health and damage properties, and create 'Boss' and 'Minion' instances.",
      },
      {
        what: "Coroutines: Cooperative Multitasking",
        why: "Coroutines allow you to pause and resume code execution. Vital for managing game AI, cutscenes, and async tasks.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Coroutines Guide", url: "https://www.lua.org/pil/9.html" },
        ],
        practice: "Implement a simple task scheduler that switches between two functions printing numbers.",
      },
      {
        what: "Environments & _G",
        why: "To understand how Lua stores variables globally and how to sandbox scripts for security.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Lua Environments", url: "https://www.lua.org/pil/14.html" },
        ],
        practice: "List all global variables currently in your script using the _G table.",
      },
      {
        what: "Error Handling: pcall & xpcall",
        why: "To prevent a single error from crashing your entire application (especially in embedded contexts).",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Error Handling in Lua", url: "https://www.lua.org/pil/8.4.html" },
        ],
        practice: "Wrap a risky function call in pcall and handle the error message if it fails.",
      },
      {
        what: "Pattern Matching (Regex alternative)",
        why: "Lua has its own lightweight string matching patterns instead of full Regex. Essential for parsing text efficiently.",
        time: "5 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Lua Patterns Guide", url: "https://www.lua.org/pil/20.2.html" },
        ],
        practice: "Extract all numbers from a string containing mixed text and digits.",
      },
      {
        what: "Package Management: Luarocks",
        why: "To use community-built libraries. Luarocks is the npm/pip equivalent for the Lua world.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Luarocks Getting Started", url: "https://luarocks.org/" },
        ],
        practice: "Install the 'json' library via Luarocks and use it to decode a JSON string.",
      },
      {
        what: "Performance & Garbage Collection",
        why: "To write high-performance scripts. Understanding when memory is freed helps avoid lag in games.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "Garbage Collection in Lua", url: "https://www.lua.org/pil/17.html" },
        ],
        practice: "Use 'collectgarbage()' to manually trigger and measure memory cleanup in a large loop.",
      },
    ],
  },
  {
    title: "Advanced Stage: Engines & Interop",
    level: "Advanced",
    steps: [
      {
        what: "The Lua C API (Introduction)",
        why: "Lua's true power is being embedded in C/C++. Learn how the stack-based communication works.",
        time: "2 Weeks",
        prereqs: "C Basics",
        resources: [
          { name: "The C API Guide", url: "https://www.lua.org/pil/24.html" },
        ],
        practice: "Write a simple C program that executes a Lua script and retrieves a variable value.",
      },
      {
        what: "LuaJIT & FFI",
        why: "LuaJIT is a lightning-fast implementation. FFI allows you to call C functions directly from Lua with near-zero overhead.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "LuaJIT FFI Tutorial", url: "https://luajit.org/ext_ffi.html" },
        ],
        practice: "Use FFI to call the 'printf' or 'sleep' function from the standard C library.",
      },
      {
        what: "Game Engine Mastery: Love2D",
        why: "To build standalone 2D games. Love2D is the premier Lua game engine for PC and mobile.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Love2D Wiki", url: "https://love2d.org/wiki/Main_Page" },
          { name: "Love2D for Beginners (YouTube)", url: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwL3Ot69ybQHzSfUBchPRu2" },
        ],
        practice: "Build a complete Pong clone with sound, score, and simple AI.",
      },
      {
        what: "Roblox Scripting (Luau)",
        why: "Luau is a fast, typed version of Lua. One of the biggest professional markets for Lua developers.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Roblox Creator Documentation", url: "https://create.roblox.com/docs/scripting/luau" },
        ],
        practice: "Create a simple obstacle course (Obby) where touching a lava part resets the player.",
      },
      {
        what: "Web Development: Lapis (OpenResty)",
        why: "To build ultra-fast web APIs. Lapis runs on Nginx using the power of Lua.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Lapis Guide", url: "https://leafo.net/lapis/" },
        ],
        practice: "Create a REST API that returns a random quote from a local text file.",
      },
      {
        what: "Sandboxing & Security",
        why: "To safely execute user scripts in your own application without risking system access.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Sandboxing in Lua", url: "http://lua-users.org/wiki/SandBoxing" },
        ],
        practice: "Create a restricted environment where a script can only access a specific set of math functions.",
      },
      {
        what: "Advanced Metaprogramming",
        why: "To build Domain Specific Languages (DSLs) or advanced framework logic.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Advanced Lua Patterns", url: "http://lua-users.org/wiki/MetatableEvents" },
        ],
        practice: "Build a mini-DSL for defining 2D game levels using tables.",
      },
      {
        what: "Neovim Plugin Development",
        why: "Modern Neovim is configured entirely in Lua. High utility for productivity enthusiasts.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Neovim Lua Guide", url: "https://neovim.io/doc/user/lua-guide.html" },
        ],
        practice: "Write a small Neovim plugin that adds a custom keybinding to format your code.",
      },
      {
        what: "Unit Testing (Busted)",
        why: "Professional Lua code needs tests. Busted is the standard BDD-style testing framework.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Busted Docs", url: "https://lunarmodules.github.io/busted/" },
        ],
        practice: "Write unit tests for a complex inventory management logic.",
      },
      {
        what: "CI/CD for Lua",
        why: "To automate testing and linting (using Luacheck) every time you push code.",
        time: "4 Days",
        prereqs: "Git basics",
        resources: [
          { name: "GitHub Actions for Lua", url: "https://github.com/marketplace/actions/setup-lua" },
        ],
        practice: "Set up a GitHub Action that runs Busted tests on your repository.",
      },
      {
        what: "Distributed Systems: Tarantool",
        why: "To understand how Lua is used in low-latency, high-performance database environments.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Tarantool Documentation", url: "https://www.tarantool.io/en/doc/latest/" },
        ],
        practice: "Research how Tarantool uses Lua for stored procedures and high-speed data processing.",
      },
      {
        what: "Final Mastery: The Scriptable Engine",
        why: "To synthesize all skills: Embedding, OO, and Metaprogramming into a single cohesive project.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a tiny 2D 'Game Console' in C++ that allows users to write their own games in Lua scripts.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Basic Calculator", teaches: "Input, Math, and Control Flow.", tech: "Lua" },
  { level: "Beginner", title: "Word Frequency Counter", teaches: "Tables (Dictionaries), Loops, and File I/O.", tech: "Lua" },
  { level: "Beginner", title: "Personal Budget Tracker", teaches: "Tables, Math, and formatting.", tech: "Lua" },
  { level: "Intermediate", title: "Love2D Pong Clone", teaches: "Game loop, Physics, Graphics, and Input.", tech: "Lua, Love2D" },
  { level: "Intermediate", title: "Inventory Management ADT", teaches: "OOP patterns and Metatables.", tech: "Lua" },
  { level: "Intermediate", title: "Async Web Scraper", teaches: "Networking, JSON, and Coroutines.", tech: "Lua, Luarocks" },
  { level: "Intermediate", title: "Config Parser (DSL)", teaches: "Patterns, Strings, and Environments.", tech: "Lua" },
  { level: "Advanced", title: "Neovim Custom Plugin", teaches: "Platform APIs, System interaction.", tech: "Lua, Neovim" },
  { level: "Advanced", title: "Embedded Scripting Console", teaches: "C API, Embedding, and Sandboxing.", tech: "Lua, C/C++" },
  { level: "Advanced", title: "Real-time Multiplayer Lobby", teaches: "WebSockets, Lapis, and Concurrency.", tech: "Lua, Lapis, Redis" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Hobbyist",
    description: "Focus on syntax and Roblox/Love2D basics to start building simple games.",
    schedule: [
      "Days 1-7: Installation, Variables, and Logic.",
      "Days 8-15: Master Tables and generic loops.",
      "Days 16-23: Functions, Modules, and basic File I/O.",
      "Days 24-30: Build 2 beginner projects and learn basic Git.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Scripting Pro",
    description: "Balanced path for professional scripting and tool development.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Metatables, OOP, Coroutines, and Luarocks.",
      "Days 46-60: Error handling, JSON, and building a Love2D game.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Architect",
    description: "Comprehensive path for high-performance engineering and C-interop.",
    schedule: [
      "Days 1-30: Core Development & Functional logic.",
      "Days 31-60: Professional Systems (Testing, Performance, Security).",
      "Days 61-90: C API, LuaJIT, Web Dev, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Tables: How are they used as both arrays and dictionaries?",
  "Metatables & Metamethods: Give a real-world example.",
  "How does Lua handle memory management? (Garbage Collection).",
  "Explain the difference between a global and a local variable in Lua.",
  "What is a Coroutine and how does it differ from a Thread?",
  "How do you implement OOP in Lua?",
  "What is the purpose of the 'self' parameter?",
  "What is the C API and how is Lua typically embedded?",
  "Explain the significance of 'nil' in Lua logic.",
  "How does Lua handle string manipulation compared to Python/JS?",
];

const codingQuestions = [
  { question: "Implement a function to deep-copy a nested table.", topic: "Tables/Recursion" },
  { question: "Write a script to reverse the order of elements in an array table.", topic: "Logic" },
  { question: "Create a class 'Shape' and a subclass 'Square' using metatables.", topic: "OOP" },
  { question: "Implement a producer-consumer pattern using Coroutines.", topic: "Concurrency" },
];

const mcqs = [
  { question: "What is the starting index of a standard Lua array table?", options: ["0", "1", "-1", "Depends on the table"], answer: "1" },
  { question: "Which symbol is used for string concatenation?", options: ["+", "&", "..", "."], answer: ".." },
  { question: "Which table holds all global variables?", options: ["_G", "_ENV", "_GLOBAL", "_ROOT"], answer: "_G" },
];

const mistakes = [
  "Forgetting that Lua arrays start at index 1.",
  "Using global variables by default (always use 'local').",
  "Failing to handle 'nil' values in calculations.",
  "Tutorial Hell: Reading manual for weeks without spawning a single script.",
  "Using '==' to compare tables (it checks reference, not content).",
  "Not using 'pcall' for risky operations in long-running apps.",
  "Ignoring the garbage collector performance in high-speed games.",
  "Over-complicating metatables for simple storage tasks.",
  "Forgetting to return values from functions.",
  "Ignoring Luacheck or other static analysis tools.",
];

export default function LuaRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Gamepad2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Lua Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most lightweight and extensible language in tech. From building world-class games in Roblox and Love2D to embedding high-performance logic in C++ systems.
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
            <CardDescription>Expert guidance to help you land your dream Lua/Game scripting role.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Lua', 'Metatables', 'Coroutines', 'Love2D', 'Roblox (Luau)', 'LuaJIT', 'C API', 'FFI', 'Embeddable', 'Functional Programming', 'Unit Testing', 'Busted'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include playable itch.io or Roblox links for game projects.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose Coroutines for AI').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide benchmark results for performance-critical logic.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Unleash Your Creativity</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Lua is more than a language; it's a bridge to making your ideas move. Its simplicity hides a deep power that runs some of the most popular platforms on earth. Stay consistent, keep building even when the metatables get complex, and remember: Every great game architect started with their first 'hello world'. Your scripting journey starts now!
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
