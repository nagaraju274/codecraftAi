
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
    title: "Beginner Stage: REXX Syntax & Text Power",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Regina REXX Setup",
        why: "REXX was designed to be human-readable. Setting up Regina REXX (the standard open-source interpreter) is the first step to running scripts on Windows, Linux, or Mac.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Regina REXX Official Site", url: "http://regina-rexx.sourceforge.net/" },
          { name: "REXX Language Overview", url: "https://www.rexxla.org/rexxlang/" },
        ],
        practice: "Install Regina REXX. Create a 'hello.rexx' file and use the 'SAY' command to print a message. Run it from the terminal.",
      },
      {
        what: "Variables & Dynamic Typing",
        why: "In REXX, variables don't need declarations. Everything is essentially a string, which makes data handling extremely flexible.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "REXX Variables Guide", url: "https://www.tutorialspoint.com/rexx/rexx_variables.htm" },
        ],
        practice: "Declare variables for a user's name and age. Print them using 'SAY'. Experiment with re-assigning different types to the same variable.",
      },
      {
        what: "Arithmetic & Logic",
        why: "To perform calculations and logic checks. REXX handles arbitrary-precision arithmetic, which is vital for financial applications.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "REXX Operators", url: "https://www.tutorialspoint.com/rexx/rexx_operators.htm" },
        ],
        practice: "Build a program that calculates the simple interest based on user inputs for Principal, Rate, and Time.",
      },
      {
        what: "Control Flow: IF, THEN, ELSE",
        why: "Logic branching allows your script to make decisions. REXX syntax is unique—no curly braces or complex symbols are needed.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "REXX Conditionals", url: "https://www.tutorialspoint.com/rexx/rexx_decision_making.htm" },
        ],
        practice: "Write a script that asks for a number and tells the user if it is even, odd, or zero.",
      },
      {
        what: "Iterative Logic: The DO Loop",
        why: "Automation requires repetition. REXX's 'DO' loop is one of the most versatile constructs in any language.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Loops in REXX", url: "https://www.tutorialspoint.com/rexx/rexx_loops.htm" },
        ],
        practice: "Write a loop that prints the first 10 numbers of the Fibonacci sequence.",
      },
      {
        what: "String Power: The PARSE Command",
        why: "PARSE is the 'secret weapon' of REXX. It allows you to split and extract data from strings with unmatched ease.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Mastering PARSE in REXX", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=instructions-parse" },
        ],
        practice: "Take a full name string (e.g., 'John Quincy Adams') and use PARSE to extract the first, middle, and last names into separate variables.",
      },
      {
        what: "User Input: PULL & ARG",
        why: "To create interactive scripts that can accept data from the keyboard or command-line arguments.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Getting User Input in REXX", url: "https://www.tutorialspoint.com/rexx/rexx_input_output.htm" },
        ],
        practice: "Create a 'greet.rexx' script that takes a name as a command-line argument and prints a personalized greeting.",
      },
      {
        what: "Basic Built-in Functions",
        why: "To avoid reinventing the wheel. Master SUBSTR, WORD, LENGTH, and COPIES for efficient text processing.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "REXX Built-in Functions List", url: "https://www.tutorialspoint.com/rexx/rexx_functions.htm" },
        ],
        practice: "Write a script that takes a sentence and prints the 3rd word and its length.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Data Management & OS Interop",
    level: "Intermediate",
    steps: [
      {
        what: "Compound Variables & Stem Variables",
        why: "REXX's answer to arrays and associative maps. Stems (e.g., list.i) allow you to group related data into powerful structures.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Stem Variables Explained", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=rexx-compound-variables" },
        ],
        practice: "Create a list of 5 cities using a stem variable. Write a loop to print them all along with their index.",
      },
      {
        what: "Subroutines & Local Scope (PROCEDURE)",
        why: "To keep code modular. The 'PROCEDURE EXPOSE' instruction allows you to share specific variables while hiding others.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "REXX Subroutines Guide", url: "https://www.tutorialspoint.com/rexx/rexx_subroutines.htm" },
        ],
        practice: "Create a 'MathLibrary' module with procedures for area calculations. Use PROCEDURE to isolate variables.",
      },
      {
        what: "File I/O: CHARIN & CHAROUT",
        why: "To persist data or read log files. REXX provides simple stream-based I/O methods.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "File I/O in REXX", url: "https://www.tutorialspoint.com/rexx/rexx_file_io.htm" },
        ],
        practice: "Write a script that reads a text file and counts how many times the word 'REXX' appears.",
      },
      {
        what: "External OS Commands (ADDRESS)",
        why: "REXX's primary role is as a 'Glue' language. Use 'ADDRESS' to run shell commands or interact with other applications.",
        time: "1 Week",
        prereqs: "Terminal Basics",
        resources: [
          { name: "The ADDRESS Instruction", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=instructions-address" },
        ],
        practice: "Write a REXX script that lists the files in a directory and creates a new folder using OS commands.",
      },
      {
        what: "Error Handling (SIGNAL & CALL ON)",
        why: "To build reliable scripts that can catch failures like 'File Not Found' or user interruptions (Ctrl+C).",
        time: "5 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Signal and Condition Handling", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=rexx-conditions-condition-traps" },
        ],
        practice: "Add a trap to your File I/O script that catches 'NOTREADY' errors if a file is missing.",
      },
      {
        what: "Debugging with TRACE",
        why: "TRACING is the standard way to debug REXX. Learn 'TRACE Intermediate' and 'TRACE Labels' to see exactly what your logic is doing.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "The TRACE Instruction", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=instructions-trace" },
        ],
        practice: "Run a complex script with 'TRACE I' and trace the values of variables as they change in the console.",
      },
      {
        what: "Queue Management: The Data Stack",
        why: "REXX features an internal Data Stack (LIFO/FIFO) for passing information between procedures and external commands.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Using the Data Stack", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=rexx-external-data-queue-stack" },
        ],
        practice: "Push 5 numbers onto the stack and pop them in reverse order to verify LIFO behavior.",
      },
      {
        what: "Date and Time API",
        why: "Mastering the DATE() and TIME() functions is crucial for building automation logs and schedulers.",
        time: "4 Days",
        prereqs: "Step 8",
        resources: [
          { name: "REXX Date and Time Functions", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=functions-date" },
        ],
        practice: "Write a script that calculates the number of days until the end of the current year.",
      },
    ],
  },
  {
    title: "Advanced Stage: ooREXX & Systems Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Object-Oriented REXX (ooREXX)",
        why: "ooREXX brings modern OOP (Classes, Messages, Methods) to the classic language, making it suitable for modern enterprise apps.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "ooREXX Official Documentation", url: "https://www.oorexx.org/docs.developer.html" },
        ],
        practice: "Create a 'User' class with properties and methods in ooREXX.",
      },
      {
        what: "Parsing Templates & Patterns",
        why: "To perform advanced data extraction from complex, non-standard text formats using positional and string patterns.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Advanced PARSE Techniques", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=instructions-parse" },
        ],
        practice: "Write a script that parses a log entry like '[2023-10-27 10:00:00] ERROR: User failed' into 4 variables in one line.",
      },
      {
        what: "Interfacing with C/C++",
        why: "To leverage high-performance C libraries or extend REXX with custom native functions.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "Regina REXX API for C", url: "http://regina-rexx.sourceforge.net/doc/regina.html#api" },
        ],
        practice: "Write a simple C function and call it from a REXX script using the RexxStart API.",
      },
      {
        what: "Mainframe REXX: TSO/E & ISPF",
        why: "REXX is the king of mainframe automation. Understanding how it interacts with the TSO/E environment is vital for enterprise legacy roles.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "z/OS TSO/E REXX Reference", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=language-tsoke-rexx-reference" },
        ],
        practice: "Research how 'EXECIO' works to read and write datasets on a mainframe.",
      },
      {
        what: "GUI Development with ooDialog",
        why: "To build graphical Windows applications using the ooREXX framework.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "ooDialog User Guide", url: "https://www.oorexx.org/docs/oodialog/index.html" },
        ],
        practice: "Create a simple Windows dialog with a text input and a button that shows a message box.",
      },
      {
        what: "Metaprogramming: INTERPRET",
        why: "To execute dynamic code generated at runtime. This is a high-level feature for building DSLs or flexible configuration engines.",
        time: "1 Week",
        prereqs: "Advanced Logic",
        resources: [
          { name: "The INTERPRET Instruction", url: "https://www.ibm.com/docs/en/zos/2.4.0?topic=instructions-interpret" },
        ],
        practice: "Write a script that asks for a math operator (+, -) and then uses INTERPRET to execute that math logic.",
      },
      {
        what: "REXX Security & Best Practices",
        why: "To write secure automation scripts that don't compromise system integrity or expose sensitive data.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Safe Scripting in REXX", url: "https://www.rexxla.org/" },
        ],
        practice: "Audit an old script to ensure no raw user input is passed directly to an 'ADDRESS' or 'INTERPRET' command.",
      },
      {
        what: "Final Mastery Project: The Automation Suite",
        why: "To synthesize all skills: Text parsing, File I/O, OS interop, and Error handling into a professional tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Log Monitoring & Alerting Suite' that watches multiple files, parses errors via Regex/PARSE, and logs them to a database.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Unit Converter", teaches: "Input, SAY, and basic math logic.", tech: "REXX" },
  { level: "Beginner", title: "Word Frequency Counter", teaches: "Stem variables, loops, and built-in string functions.", tech: "REXX" },
  { level: "Beginner", title: "Simple Guessing Game", teaches: "Randomness, user input (PULL), and conditionals.", tech: "REXX" },
  { level: "Intermediate", title: "System Health Monitor", teaches: "ADDRESS (OS interop), stem variables, and periodic checks.", tech: "REXX, Shell Commands" },
  { level: "Intermediate", title: "CSV Data Processor", teaches: "PARSE command, File I/O, and data transformation.", tech: "REXX" },
  { level: "Intermediate", title: "CLI Dictionary App", teaches: "Persistent file storage, search logic, and menu systems.", tech: "REXX" },
  { level: "Intermediate", title: "Log File Error Aggregator", teaches: "Advanced PARSE, file handles, and error grouping.", tech: "REXX" },
  { level: "Advanced", title: "Database Utility Wrapper", teaches: "SQL interop (via external CLI), result parsing, and reporting.", tech: "REXX, SQLite/MySQL" },
  { level: "Advanced", title: "ooREXX GUI Inventory", teaches: "ooREXX, classes, and ooDialog for Windows UI.", tech: "ooREXX, ooDialog" },
  { level: "Advanced", title: "Mainframe Simulation Tool", teaches: "EXECIO-style patterns, complex Data Stacks, and cross-module calls.", tech: "REXX" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Essential Scripter",
    description: "Focus on syntax and text processing to handle basic automation tasks.",
    schedule: [
      "Days 1-7: Installation, SAY, PULL, and basic logic.",
      "Days 8-15: Master the PARSE command and string functions.",
      "Days 16-23: Introduction to Stem Variables and DO loops.",
      "Days 24-30: Build 2 beginner projects and learn basic File I/O.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Professional Developer",
    description: "Balanced path for building robust tested applications and OS-level integration.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Advanced Stems, PROCEDURE isolation, and File I/O mastery.",
      "Days 41-60: ADDRESS commands, Error Traps (SIGNAL), and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Enterprise Architect",
    description: "Comprehensive path for modern ooREXX and high-scale systems automation.",
    schedule: [
      "Days 1-30: Core Development & Logic foundations.",
      "Days 31-60: Professional Systems (Testing, Database Interop, UI).",
      "Days 61-90: ooREXX Classes, Metaprogramming, and final capstone project.",
    ]
  }
];

const interviewTopics = [
  "Explain the PARSE command and its different templates.",
  "What are Stem Variables and how do they differ from standard arrays?",
  "How does REXX handle variable scoping? (Global vs PROCEDURE).",
  "Explain the significance of 'SAY' vs 'PULL'.",
  "What is the Data Stack and how is it used for IPC?",
  "Describe the 'SIGNAL' instruction for error handling.",
  "Difference between REXX and Object REXX.",
  "What is the role of the 'ADDRESS' instruction?",
  "How do you perform arbitrary-precision math in REXX?",
  "Explain 'INTERPRET' and its security risks.",
];

const codingQuestions = [
  { question: "Write a REXX program to find the largest number in a stem variable list.", topic: "Stems/Loops" },
  { question: "Use PARSE to extract the domain name from an email address.", topic: "String Parsing" },
  { question: "Implement a function that reverses a string manually without using built-in 'REVERSE'.", topic: "Logic" },
  { question: "Write a script that reads a file and pushes each line onto the Data Stack.", topic: "File I/O / Stack" },
];

const mcqs = [
  { question: "Which instruction is used to display output to the screen?", options: ["PRINT", "WRITE", "SAY", "ECHO"], answer: "SAY" },
  { question: "What is the standard comment syntax in REXX?", options: ["//", "#", "/* ... */", "--"], answer: "/* ... */" },
  { question: "Which command is used to split a string into parts?", options: ["SPLIT", "DIVIDE", "PARSE", "TOKEN"], answer: "PARSE" },
];

const mistakes = [
  "Forgetting the '/* ... */' header: REXX files should start with a comment to be recognized on some systems.",
  "Case sensitivity confusion: Commands like 'say' are not case-sensitive, but strings are.",
  "Global variable leakage: Not using 'PROCEDURE' in subroutines causes unexpected side effects.",
  "Tutorial Hell: Reading manual for weeks without writing scripts in the shell.",
  "Using '==' for string comparison: In REXX, '=' is used for comparison, '==' is for 'exactly equal'.",
  "Ignoring the Log: Not using 'TRACE' to find where your loop is going wrong.",
  "Hardcoding paths: Not using relative paths or OS environment variables.",
  "Over-using INTERPRET: It is powerful but dangerous; use functions or logic instead where possible.",
  "Neglecting Stem Initialization: Not clearing stems (stem. = '') before use can lead to stale data.",
  "Manual Data Cleaning: Trying to use loops for string splitting when 'PARSE' is built for it.",
];

export default function RexxRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The REXX Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most readable automation language in history. From your first 'SAY' command to building complex, high-performance enterprise automation suites and GUI tools.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional REXX Engineer.</CardDescription>
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
            <CardDescription>Master the topics required to land a role as a Systems Automator or Mainframe Engineer.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Parsing Challenges</h3>
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
                    {['REXX', 'ooREXX', 'Regina REXX', 'PARSE command', 'Stem Variables', 'Automation', 'Mainframe Scripting', 'z/OS', 'TSO/E', 'ISPF', 'ooDialog', 'Data Stack'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Clean Scripting' and 'Text Processing'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase automation scripts that interact with live OS services on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with cross-platform build or audit pipelines.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate with Elegance</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            REXX is the ultimate language for those who value logic over complicated syntax. It's built for those who want to solve problems without the clutter. Stay consistent, read the classic IBM docs, and remember: If you have to do it twice, script it. Your journey to REXX mastery starts today!
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
