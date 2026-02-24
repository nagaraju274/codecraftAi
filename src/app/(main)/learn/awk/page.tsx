
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
  FileCode,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Text Processing Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to AWK & Environment Setup",
        why: "To understand AWK's role as a text-processing powerhouse and verify your installation (mawk, nawk, or gawk).",
        time: "1 Day",
        prereqs: "Basic Terminal usage",
        resources: [
          { name: "AWK for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=9YOZmI-zWok" },
          { name: "GNU AWK User Guide", url: "https://www.gnu.org/software/gawk/manual/gawk.html" },
        ],
        practice: "Run 'awk --version'. Execute your first one-liner: awk '{print \"Hello, AWK\"}' and provide some input.",
      },
      {
        what: "The AWK Program Structure (BEGIN, Body, END)",
        why: "To master the execution flow: processing data before, during, and after reading the input file.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "AWK Execution Model", url: "https://www.tutorialspoint.com/awk/awk_workflow.htm" },
        ],
        practice: "Write a script that prints a header in BEGIN, processes lines in the body, and prints a footer in END.",
      },
      {
        what: "Fields & Records ($0, $1, $NF)",
        why: "Fields ($1, $2) and Records ($0) are how AWK identifies data. This is the foundation of columnar processing.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "AWK Built-in Variables", url: "https://www.geeksforgeeks.org/awk-built-in-variables-nr-nf-fs-ofs-ors/" },
        ],
        practice: "Print the first and last column of a CSV file. Experiment with $0 to print the whole line.",
      },
      {
        what: "Patterns & Regex Matching",
        why: "AWK is built on pattern-action pairs. You must learn to filter data using strings and regular expressions.",
        time: "3 Days",
        prereqs: "Basic Regex",
        resources: [
          { name: "AWK Regular Expressions", url: "https://www.gnu.org/software/gawk/manual/html_node/Regexp.html" },
        ],
        practice: "Write a command that only prints lines containing the word 'error' or 'fail' from a log file.",
      },
      {
        what: "Built-in Variables (NR, NF, FS, OFS)",
        why: "NR (Record Number) and NF (Number of Fields) allow you to track position and structure dynamically.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "AWK NR vs FNR", url: "https://www.baeldung.com/linux/awk-nr-fnr" },
        ],
        practice: "Print every line of a file preceded by its line number. Print only lines that have exactly 5 fields.",
      },
      {
        what: "Basic Arithmetic & Math Functions",
        why: "To perform calculations on data (e.g. summing a column of numbers) directly from the terminal.",
        time: "2 Days",
        prereqs: "Basic Math",
        resources: [
          { name: "Arithmetic in AWK", url: "https://www.tutorialspoint.com/awk/awk_operators.htm" },
        ],
        practice: "Calculate the sum and average of values in the second column of a text file.",
      },
      {
        what: "String Functions (length, substr, index)",
        why: "To clean and transform text data without complex programming logic.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "AWK String Functions", url: "https://www.gnu.org/software/gawk/manual/html_node/String-Functions.html" },
        ],
        practice: "Print only the first 10 characters of every line. Convert a specific column to all uppercase.",
      },
      {
        what: "Conditionals: if, else, and ternary",
        why: "Logic branching allows your AWK scripts to handle different data scenarios differently.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Flow in AWK", url: "https://www.tutorialspoint.com/awk/awk_control_flow.htm" },
        ],
        practice: "Write a script that prints 'High' if a value > 100 and 'Low' otherwise.",
      },
      {
        what: "Output Formatting with printf",
        why: "The standard 'print' is simple; 'printf' allows for professional, aligned table output.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "printf in AWK", url: "https://www.gnu.org/software/gawk/manual/html_node/Printf.html" },
        ],
        practice: "Format a list of names and prices into perfectly aligned columns with 2 decimal places.",
      },
      {
        what: "Input Redirection & Pipes",
        why: "To understand how AWK fits into the Unix philosophy by receiving data from other commands.",
        time: "1 Day",
        prereqs: "Terminal Basics",
        resources: [
          { name: "Piping to AWK", url: "https://linuxjourney.com/lesson/the-shell" },
        ],
        practice: "Pipe 'ls -l' into AWK to print only filenames and their permissions.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Arrays & Automation",
    level: "Intermediate",
    steps: [
      {
        what: "Loops: for, while, and do-while",
        why: "To automate tasks within a single record, such as iterating through all fields ($1 to $NF).",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "AWK Loops Guide", url: "https://www.tutorialspoint.com/awk/awk_loops.htm" },
        ],
        practice: "Write a loop that prints the sum of all numeric values across all fields in every line.",
      },
      {
        what: "Associative Arrays (The Power of AWK)",
        why: "AWK arrays are essentially hash maps. They are the most powerful feature for aggregating data (e.g. counting unique entries).",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Associative Arrays in AWK", url: "https://www.gnu.org/software/gawk/manual/html_node/Arrays.html" },
        ],
        practice: "Count the frequency of each IP address in a web access log file.",
      },
      {
        what: "User-Defined Functions",
        why: "To keep complex AWK scripts organized, reusable, and modular.",
        time: "4 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Functions in AWK", url: "https://www.gnu.org/software/gawk/manual/html_node/User_002ddefined.html" },
        ],
        practice: "Create a function 'to_fahrenheit' and use it to process a column of Celsius data.",
      },
      {
        what: "Advanced Field Splitting (FS, FPAT)",
        why: "To handle complex data formats like CSVs with quoted strings that standard whitespace splitting cannot handle.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Splitting Fields by Content", url: "https://www.gnu.org/software/gawk/manual/html_node/Splitting-By-Content.html" },
        ],
        practice: "Use FPAT to correctly parse a CSV file where some fields contain commas within double quotes.",
      },
      {
        what: "Substitution Functions (sub, gsub)",
        why: "To perform sophisticated search-and-replace operations across your data streams.",
        time: "4 Days",
        prereqs: "Regex Mastery",
        resources: [
          { name: "gsub and sub Explained", url: "https://www.tutorialspoint.com/awk/awk_string_functions.htm" },
        ],
        practice: "Remove all HTML tags from a text string using gsub and regular expressions.",
      },
      {
        what: "Multi-file Processing (ARGV, FNR)",
        why: "To correlate data across different files (e.g. joining a users file with a logs file).",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Processing Multiple Files", url: "https://www.baeldung.com/linux/awk-multiple-files" },
        ],
        practice: "Print only the lines that exist in file A but not in file B.",
      },
      {
        what: "Sorting & Deduplication",
        why: "AWK can sort arrays internally or work with the shell 'sort' command for maximum efficiency.",
        time: "3 Days",
        prereqs: "Step 12",
        resources: [
          { name: "Sorting Arrays in gawk", url: "https://www.gnu.org/software/gawk/manual/html_node/Array-Sorting-Functions.html" },
        ],
        practice: "Take a list of unsorted numbers, store them in an array, and print them in ascending order.",
      },
      {
        what: "System Interaction (system() & getline)",
        why: "To execute shell commands from within AWK or read the output of a command directly into a variable.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Using getline in AWK", url: "https://www.gnu.org/software/gawk/manual/html_node/Getline.html" },
        ],
        practice: "Use 'getline' to read the current date from the shell and use it in your AWK report.",
      },
      {
        what: "Time & Date Functions",
        why: "Crucial for analyzing time-stamped log files. Master 'mktime' and 'strftime'.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Time Functions in gawk", url: "https://www.gnu.org/software/gawk/manual/html_node/Time-Functions.html" },
        ],
        practice: "Convert a Unix timestamp column into a human-readable date format.",
      },
      {
        what: "Debugging AWK Scripts",
        why: "Finding logic errors in complex scripts. Learn to use 'dgawk' or manual 'print' tracing.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Debugging AWK", url: "https://www.gnu.org/software/gawk/manual/html_node/Debugger.html" },
        ],
        practice: "Intentionally break a loop and use the debugger to find where the variable goes out of range.",
      },
    ],
  },
  {
    title: "Advanced Stage: High-Performance Systems",
    level: "Advanced",
    steps: [
      {
        what: "gawk-specific Features (Arrays of Arrays)",
        why: "Modern GNU AWK supports multi-dimensional arrays, allowing for complex data structures like JSON-like maps.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Arrays of Arrays", url: "https://www.gnu.org/software/gawk/manual/html_node/Arrays-of-Arrays.html" },
        ],
        practice: "Build a nested data structure representing a company hierarchy (Dept -> Employee -> Salary).",
      },
      {
        what: "Performance Profiling & Optimization",
        why: "AWK is fast, but poorly written scripts can be slow on gigabyte-sized files. Learn to use '--profile'.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling AWK Scripts", url: "https://www.gnu.org/software/gawk/manual/html_node/Profiling.html" },
        ],
        practice: "Profile a script processing 1 million lines and optimize it to use 50% less CPU time.",
      },
      {
        what: "Network Programming with AWK",
        why: "To build simple network listeners or clients using AWK's internal socket support.",
        time: "1 Week",
        prereqs: "Networking Basics",
        resources: [
          { name: "TCP/IP Internetworking with gawk", url: "https://www.gnu.org/software/gawk/manual/gawk.html#TCP_002fIP-Networking" },
        ],
        practice: "Build a simple TCP echo server that prints whatever a client sends to it.",
      },
      {
        what: "Two-way I/O & Coprocesses",
        why: "To send data to a shell command and read the result back immediately without using temporary files.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Two-way Communications", url: "https://www.gnu.org/software/gawk/manual/html_node/Two_002dway-I_002fO.html" },
        ],
        practice: "Use a coprocess to encrypt a string using 'openssl' and read the result back into AWK.",
      },
      {
        what: "Building custom DSLs with AWK",
        why: "AWK is perfect for creating domain-specific languages for config parsing or reporting.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Parsing a DSL with AWK", url: "https://wiki.tcl-lang.org/page/AWK" },
        ],
        practice: "Build a parser for a custom config format that uses key: value syntax.",
      },
      {
        what: "Security: Safe Input Handling",
        why: "Automation scripts are often vulnerable to command injection. Learn to escape data passed to 'system()'.",
        time: "4 Days",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "AWK Security Best Practices", url: "https://www.gnu.org/software/gawk/manual/html_node/Security.html" },
        ],
        practice: "Audit a script to ensure that user-provided strings cannot execute malicious shell commands.",
      },
      {
        what: "Bitwise Operations in AWK",
        why: "To process binary flags or perform low-level data manipulation.",
        time: "3 Days",
        prereqs: "Binary Math",
        resources: [
          { name: "Bit-Manipulation Functions", url: "https://www.gnu.org/software/gawk/manual/html_node/Bitwise-Functions.html" },
        ],
        practice: "Use bitwise AND to check if a numeric flag is set in a machine status log.",
      },
      {
        what: "Internationalization & Localisation",
        why: "To handle multi-byte characters (UTF-8) correctly in global data environments.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "I18N in gawk", url: "https://www.gnu.org/software/gawk/manual/html_node/Internationalization.html" },
        ],
        practice: "Process a text file containing non-ASCII characters and verify that 'length()' returns the correct count.",
      },
      {
        what: "Interfacing with C via Extensions",
        why: "When AWK's performance reaches its limit, you can call C code directly from your AWK script.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "Writing gawk Extensions", url: "https://www.gnu.org/software/gawk/manual/html_node/Dynamic-Loading.html" },
        ],
        practice: "Read the documentation on how to load a dynamic library (.so) into gawk.",
      },
      {
        what: "Final Mastery Project: The Data Architect",
        why: "To synthesize all skills: Performance, Arrays, and Systems into a production-grade tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Real-time Log Monitoring Engine' that processes streaming logs, aggregates errors by minute, and sends a summary report via email.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Column Sum Calculator", teaches: "Arithmetic, Fields, and END blocks.", tech: "AWK" },
  { level: "Beginner", title: "Log Filter Tool", teaches: "Pattern matching, Regex, and Redirects.", tech: "AWK" },
  { level: "Beginner", title: "CSV to Markdown Converter", teaches: "OFS, Fields, and Header generation.", tech: "AWK" },
  { level: "Intermediate", title: "Word Frequency Counter", teaches: "Associative Arrays and sorting.", tech: "AWK" },
  { level: "Intermediate", title: "System Activity Report", teaches: "Pipes (ps/df), aggregation, and formatting.", tech: "AWK, Shell" },
  { level: "Intermediate", title: "SQL Insert Generator", teaches: "String formatting (printf) and data cleanup.", tech: "AWK" },
  { level: "Intermediate", title: "Automated Website Monitor", teaches: "Curl integration, HTTP status checks.", tech: "AWK, Curl" },
  { level: "Advanced", title: "High-Speed Access Log Parser", teaches: "Profiling, optimization, arrays of arrays.", tech: "gawk" },
  { level: "Advanced", title: "CLI Analytics Dashboard", teaches: "ASCII charts, periodic updates (after), events.", tech: "AWK, TUI" },
  { level: "Advanced", title: "Custom Language Interpreter", teaches: "Metaprogramming, DSL design, recursions.", tech: "AWK" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Essential Scripter",
    description: "Focus on one-liners, pattern matching, and basic aggregation for daily tasks.",
    schedule: [
      "Days 1-7: Installation, Program Structure, and Fields.",
      "Days 8-15: Regex, Patterns, and built-in variables.",
      "Days 16-23: Arithmetic, String functions, and printf.",
      "Days 24-30: Build 2 Beginner projects and learn basic redirection.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Automation Pro",
    description: "Balanced path for professional data processing and shell integration.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Associative Arrays, Loops, and multi-file processing.",
      "Days 46-60: Substitution (gsub), system interaction, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Engineer",
    description: "Comprehensive path for high-performance data engineering and architecture.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced gawk features, performance tuning, and networking.",
      "Days 61-90: DSL construction, Security, Docker, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between BEGIN, Body, and END blocks.",
  "How do you process multiple files while keeping track of current line number vs. total line number? (NR vs FNR).",
  "What is an associative array and how is it used for deduplication?",
  "How does the Pipe operator (|) interact with AWK in a shell command?",
  "Explain the role of the 'FS' and 'OFS' variables.",
  "Describe how 'getline' works and its potential pitfalls.",
  "When would you use 'gsub()' instead of 'sub()'?",
  "How does AWK handle quoted fields in a CSV? (FPAT).",
  "Explain the 'system()' function and security risks.",
  "Describe AWK's internal execution loop.",
];

const codingQuestions = [
  { question: "Write a one-liner to find the average value of the 3rd column in a file.", topic: "Arithmetic" },
  { question: "Count unique occurrences of the first column in a file using an array.", topic: "Arrays" },
  { question: "Extract all lines where the second column is longer than 15 characters.", topic: "Strings" },
  { question: "Format a log file so that the timestamp (1st col) and status (3rd col) are perfectly aligned.", topic: "Formatting" },
];

const mcqs = [
  { question: "Which variable stores the total number of fields in the current record?", options: ["NR", "NF", "FS", "$0"], answer: "NF" },
  { question: "What is the default Field Separator (FS) in AWK?", options: [",", ";", "Whitespace", "\\t"], answer: "Whitespace" },
  { question: "Which command is used to read the next record from the input file inside a loop?", options: ["next", "getline", "read", "pop"], answer: "getline" },
];

const mistakes = [
  "Forgetting the '$' for fields: Writing '1' instead of '$1'.",
  "Using '==' for pattern matching instead of '~' (regex match).",
  "Case sensitivity: Not realizing patterns are case-sensitive by default.",
  "Ignoring the Log: Not checking 'dgawk' output for complex logic errors.",
  "Modifying $0: Changes to $0 update all fields, which can be unexpected.",
  "Tutorial Hell: Reading manual for weeks without piping real logs into AWK.",
  "Hardcoding FS: Use 'awk -F,' instead of 'BEGIN { FS=\",\" }' for better one-liners.",
  "Thinking AWK is 0-indexed: Fields start at $1 ($0 is the whole record).",
  "Over-nesting logic: Use pattern-action pairs instead of deep if-else trees.",
  "Ignoring performance: Using loops for tasks that a simple associative array could do faster.",
];

export default function AwkRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The AWK Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the "Ground Truth" of text processing. From your first one-liner to building high-performance, automated data analytical engines.
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
              <CardDescription>Follow these steps to progress from {stage.level}.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Automation role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live CLI Challenges</h3>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWK', 'gawk', 'Sed', 'Text Processing', 'Automation', 'Unix Shell', 'Regex', 'ETL', 'Log Analysis', 'One-liners', 'Performance Tuning', 'Bash'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain an active 'dotfiles' or 'scripts' repository on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide 'Before and After' performance metrics for log-parsing scripts.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with 'Big Data' text processing.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate Your Data Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            AWK is more than just a tool; it's a way of looking at data as a stream of possibilities. It rewards the precise and the curious. Stay consistent, read the man pages, and remember: If you have to do it more than twice, script it. Your data architecture journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start AWK Projects
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
