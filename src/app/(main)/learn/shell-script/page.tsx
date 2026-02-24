
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: The POSIX Foundation",
    level: "Beginner",
    steps: [
      {
        what: "The Shell Environment & sh vs Bash",
        why: "To understand the difference between the standard POSIX shell (/bin/sh) and the feature-rich Bash. Portability is the hallmark of a pro shell scripter.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "The POSIX Shell Standard", url: "https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html" },
          { name: "Shell Scripting Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=oxuRxtrO2Ag" },
        ],
        practice: "Open your terminal. Verify your default shell with 'echo $SHELL'. Run a command using '/bin/sh'.",
      },
      {
        what: "Variables & Positional Parameters",
        why: "To store data and accept arguments from the command line ($1, $2, $@). This makes scripts dynamic.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Shell Variables Guide", url: "https://www.tutorialspoint.com/unix/unix-using-variables.htm" },
        ],
        practice: "Write a script 'greet.sh' that takes a name as an argument and prints a greeting.",
      },
      {
        what: "Exit Status & Logical Operators",
        why: "Every command returns a status (0 for success). Mastering '&&', '||', and '$?' is key to controlling script flow.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Exit Codes Explained", url: "https://www.baeldung.com/linux/bash-exit-status-codes" },
        ],
        practice: "Try to 'ls' a non-existent file and check '$?'. Chain two commands using '&&'.",
      },
      {
        what: "Conditionals: The 'test' Command",
        why: "Logic branching depends on 'if' and 'test' (or [ ]). You must learn to check for files, strings, and numbers safely.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Shell If Statements", url: "https://www.shellscript.sh/tips/test/" },
        ],
        practice: "Write a script that checks if a file 'config.txt' exists and is readable.",
      },
      {
        what: "Loops: while & for",
        why: "To automate repetitive tasks like renaming files or processing a list of server IPs.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Loops in Shell", url: "https://www.tutorialspoint.com/unix/unix-shell-loops.htm" },
        ],
        practice: "Write a loop that prints numbers 1 to 10. Write another that lists all .jpg files in a directory.",
      },
      {
        what: "Standard I/O & Redirection",
        why: "To manage data streams. Learn to use '>', '>>', '2>', and '<' to handle output and errors.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Redirection & Pipes (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Command_line#redirection_and_pipes" },
        ],
        practice: "Redirect the error of a failed command to a file named 'error.log'.",
      },
      {
        what: "The Pipe (|) & Grep",
        why: "Piping connects commands. Grep is the standard tool for searching text within those streams.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Grep Command Tutorial", url: "https://www.youtube.com/watch?v=VGgTmxXp7xQ" },
        ],
        practice: "Find all lines containing 'localhost' in /etc/hosts using a pipe.",
      },
      {
        what: "Permissions & Shebang",
        why: "To make your scripts executable and ensure they use the correct interpreter via #!/bin/sh.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Linux Permissions Explained", url: "https://linuxjourney.com/lesson/file-permissions" },
        ],
        practice: "Create a script, add the shebang, and use 'chmod +x' to run it without 'sh prefix'.",
      },
      {
        what: "Environment Variables & PATH",
        why: "To understand how the system finds your scripts and how to store global configuration data.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "The PATH Variable", url: "https://linuxjourney.com/lesson/path-variable" },
        ],
        practice: "Add a local 'bin' folder to your $PATH and run a custom script from anywhere.",
      },
      {
        what: "Simple Text Processing: Cut, Sort, Uniq",
        why: "To manipulate columnar data (like CSVs or logs) without complex programming.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Unix Text Processing Tools", url: "https://www.youtube.com/watch?v=look-up-unix-text" },
        ],
        practice: "Extract the first column of a CSV file, sort it, and count unique values.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Automation & Logic",
    level: "Intermediate",
    steps: [
      {
        what: "Functions & Variable Scope",
        why: "To organize logic into reusable blocks. Understanding 'local' variables prevents side effects.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Functions in Shell", url: "https://www.shellscript.sh/functions.html" },
        ],
        practice: "Create a 'Logger' function that timestamps every message it prints.",
      },
      {
        what: "Signal Handling & Traps",
        why: "To build resilient scripts that clean up temporary files even if interrupted (Ctrl+C).",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Shell Traps Guide", url: "https://www.baeldung.com/linux/bash-trap-command" },
        ],
        practice: "Write a script that creates a temp file and uses 'trap' to delete it on exit.",
      },
      {
        what: "Sed Basics (Stream Editor)",
        why: "To find and replace text automatically within files or streams—vital for automated config edits.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Sed Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=look-up-sed" },
        ],
        practice: "Use sed to change all occurrences of 'localhost' to '127.0.0.1' in a config file.",
      },
      {
        what: "AWK Basics (Data Processing)",
        why: "AWK is a language designed for processing tables and logs. It is much faster than shell loops for data.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "AWK for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=9YOZmI-zWok" },
        ],
        practice: "Use AWK to calculate the total size of all files in a directory from 'ls -l' output.",
      },
      {
        what: "Command Substitution & Subshells",
        why: "To capture the output of a command into a variable (e.g., current_date=$(date)).",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Shell Command Substitution", url: "https://www.tutorialspoint.com/unix/unix-shell-substitutions.htm" },
        ],
        practice: "Create a backup filename that includes the current date and time.",
      },
      {
        what: "Arrays & Lists (POSIX limitations)",
        why: "To manage sets of data. Learn the POSIX-compliant way to handle lists using 'set --' and parameters.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "POSIX Array Workarounds", url: "https://mywiki.wooledge.org/Bashism" },
        ],
        practice: "Store a list of folder names and iterate through them using positional parameters.",
      },
      {
        what: "Error Handling & Debugging (set -x, set -e)",
        why: "To find logic errors. 'set -x' traces execution; 'set -e' stops the script on any error.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Debugging Shell Scripts", url: "https://www.baeldung.com/linux/bash-debug-mode" },
        ],
        practice: "Run a complex script with '-x' and identify why a variable isn't being set correctly.",
      },
      {
        what: "Networking with Curl & Wget",
        why: "To interact with web services and APIs directly from your automation scripts.",
        time: "5 Days",
        prereqs: "Networking Basics",
        resources: [
          { name: "Curl Tutorial for Scripting", url: "https://www.youtube.com/watch?v=look-up-curl-scripting" },
        ],
        practice: "Write a script that checks the status code of a website and alerts you if it's not 200.",
      },
      {
        what: "Regular Expressions (Regex) Mastery",
        why: "To perform complex string validation and extraction—the power tool of text manipulation.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Regex One - Learn Regex", url: "https://regexone.com/" },
        ],
        practice: "Write a pattern to validate if a string is a valid IP address.",
      },
      {
        what: "Cron Jobs & Scheduling",
        why: "Automation is only useful if it runs automatically. Master the crontab for scheduled maintenance.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Crontab Guru (Tool)", url: "https://crontab.guru/" },
        ],
        practice: "Schedule a script to run every Sunday at midnight to rotate log files.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Engineering & Security",
    level: "Advanced",
    steps: [
      {
        what: "Advanced AWK: Arithmetic & Control",
        why: "To perform complex data aggregation and reporting on gigabytes of logs without high memory usage.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Advanced AWK Guide", url: "https://www.grymoire.com/Unix/Awk.html" },
        ],
        practice: "Write an AWK script that parses an access log and finds the top 5 most active IPs.",
      },
      {
        what: "Advanced Sed: Labels & Branches",
        why: "To perform multi-line text transformations and complex conditional edits.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Sed Advanced Guide", url: "https://www.grymoire.com/Unix/Sed.html" },
        ],
        practice: "Write a sed script that deletes all HTML tags from a file, leaving only the text content.",
      },
      {
        what: "Parsing JSON with jq",
        why: "Modern APIs speak JSON. 'jq' is the required tool for shell scripts to handle JSON data.",
        time: "1 Week",
        prereqs: "Step 18",
        resources: [
          { name: "jq Play (Interactive)", url: "https://jqplay.org/" },
          { name: "jq Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=look-up-jq-tutorial" },
        ],
        practice: "Use 'curl' to get data from the GitHub API and 'jq' to extract only the repository URLs.",
      },
      {
        what: "SSH & Remote Automation",
        why: "To manage 100+ servers. Learn key-based auth and running local scripts on remote nodes.",
        time: "1 Week",
        prereqs: "Networking Basics",
        resources: [
          { name: "SSH Automation Guide", url: "https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server" },
        ],
        practice: "Write a loop that checks the disk space on 5 remote servers simultaneously using SSH.",
      },
      {
        what: "Process Parallelism (xargs -P)",
        why: "To speed up slow scripts by running tasks in parallel across multiple CPU cores.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Parallel Processing in Shell", url: "https://www.baeldung.com/linux/bash-parallel-processing" },
        ],
        practice: "Write a script that pings 50 IPs in parallel instead of one after another.",
      },
      {
        what: "Security: Taint Analysis & Sanitization",
        why: "To prevent command injection attacks. You must learn to strictly sanitize all user input.",
        time: "1 Week",
        prereqs: "Permissions Mastery",
        resources: [
          { name: "Security Best Practices for Shell", url: "https://dwheeler.com/secure-programs/Secure-Programs-HOWTO/bash.html" },
        ],
        practice: "Audit an old script to ensure no raw user input is passed directly to an 'eval' or 'system' command.",
      },
      {
        what: "CI/CD Pipeline Integration",
        why: "To automate software releases. Bash is used for build steps and deployment triggers in Jenkins/GitHub Actions.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "Shell Scripts in GitHub Actions", url: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswithrun" },
        ],
        practice: "Create a GitHub Action that runs a Shell script to verify that all images in your repo are optimized.",
      },
      {
        what: "Performance Profiling & Optimization",
        why: "To identify why a script is slow. Learn to use 'time', 'strace', and 'lsof' to diagnose bottlenecks.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Shell Performance", url: "https://www.youtube.com/watch?v=look-up-shell-prof" },
        ],
        practice: "Use 'strace' to identify exactly which system call is causing a 2-second delay in your script.",
      },
      {
        what: "Building TUI Tools (dialog / gum)",
        why: "To create professional, interactive terminal interfaces with menus, progress bars, and spinners.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Gum: TUI Library", url: "https://github.com/charmbracelet/gum" },
        ],
        practice: "Build a setup wizard for your project that uses a multi-select menu for installation options.",
      },
      {
        what: "Final Mastery: The System Orchestrator",
        why: "To synthesize all skills into a production-grade automation engine.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Self-Healing Server' script that monitors CPU/Load and automatically restarts services or clears logs when limits are reached.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Automated System Report", teaches: "System commands, variables, and output formatting.", tech: "sh, /proc" },
  { level: "Beginner", title: "Personal To-Do CLI", teaches: "File appending, user input, and logic branching.", tech: "sh" },
  { level: "Beginner", title: "Batch File Organizer", teaches: "Loops, file extensions, and mv command.", tech: "sh" },
  { level: "Intermediate", title: "Log File Error Aggregator", teaches: "Grep, Sort, Uniq, and Emailing alerts.", tech: "sh, mailx" },
  { level: "Intermediate", title: "Weather CLI via API", teaches: "Curl, JSON parsing (jq), and strings.", tech: "sh, jq, curl" },
  { level: "Intermediate", title: "Remote Server Health Dashboard", teaches: "SSH, parallel execution, and remote commands.", tech: "sh, SSH" },
  { level: "Intermediate", title: "Automated MySQL Backup", teaches: "Database CLI, compression (gzip), and cron.", tech: "sh, mysqldump" },
  { level: "Advanced", title: "Log Analyzer & Visualizer", teaches: "Advanced AWK, associative arrays, and ASCII charts.", tech: "AWK, sh" },
  { level: "Advanced", title: "Interactive OS Setup Script", teaches: "TUI design, error handling, and system config.", tech: "sh, gum/dialog" },
  { level: "Advanced", title: "Multi-Region Cloud Auditor", teaches: "Cloud CLIs (AWS/GCP), JSON logic, and parallelism.", tech: "sh, AWS CLI, jq" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Admin Starter",
    description: "Focus on syntax and basic system tasks to get productive in a server environment.",
    schedule: [
      "Days 1-7: Terminal Navigation, Permissions, and Hello World.",
      "Days 8-15: Variables, If/Then, and basic Loops.",
      "Days 16-23: Redirection, Pipes, and Grep mastery.",
      "Days 24-30: Build 2 Beginner projects and learn Cron.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Automation Pro",
    description: "Balanced path for professional scripting and data processing.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Functions, Sed, basic AWK, and SSH remoting.",
      "Days 41-60: Error handling, JSON (jq), and building a 'Server Dashboard'.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Architect",
    description: "Comprehensive path for high-scale automation and security engineering.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced AWK, Parallelism, and Security Hardening.",
      "Days 61-90: TUI design, CI/CD integration, and final Capstone project.",
    ]
  }
];

const interviewTopics = [
  "Difference between /bin/sh and /bin/bash.",
  "Explain the difference between 'export var' and 'var'.",
  "How does the Pipe (|) work under the hood?",
  "What is the difference between single quotes and double quotes?",
  "Explain what a 'Deadly Embrace' (Deadlock) is in shell concurrency.",
  "How do you handle a script that hangs? (Troubleshooting).",
  "Explain the role of the $IFS variable.",
  "What is the purpose of the 'trap' command?",
  "Difference between 'exec' and 'fork'.",
  "How do you pass an array to a function in POSIX sh?",
];

const codingQuestions = [
  { question: "Write a script to find the top 10 largest files in a directory recursively.", topic: "File I/O" },
  { question: "Using AWK, count the total number of requests in an Apache log from a specific IP.", topic: "AWK" },
  { question: "Write a function that returns the reverse of a given string.", topic: "Strings" },
  { question: "Create a one-liner to kill all processes matching a specific name.", topic: "Processes" },
];

const mcqs = [
  { question: "Which command shows the current user permissions for a file?", options: ["ls -l", "chmod", "show-perm", "check"], answer: "ls -l" },
  { question: "What is the exit code for a successful command execution?", options: ["1", "0", "-1", "null"], answer: "0" },
  { question: "Which symbol is used to redirect errors to a file?", options: [">", "2>", "&>", ">>"], answer: "2>" },
];

const mistakes = [
  "Forgetting the Shebang: Without #!/bin/sh, the OS might use an incompatible shell.",
  "Not quoting variables: \"$var\" prevents word-splitting and globbing bugs.",
  "Ignoring Exit Codes: Not checking if a command succeeded before moving to the next step.",
  "Using 'cat' unnecessarily: (e.g. cat file | grep) - just use 'grep pattern file'.",
  "Hardcoding paths: Always use relative paths or environment variables like $HOME.",
  "Neglecting 'set -e': Not stopping on errors can lead to catastrophic data loss in scripts.",
  "Tutorial Hell: Reading about Sed for weeks without typing a single command.",
  "Hardcoding Secrets: Storing passwords in scripts instead of using Vaults or .env files.",
  "Over-nesting Logic: Writing 1000-line monolithic scripts instead of small modules.",
  "Ignoring Portability: Using Bash-only features in a script intended for Alpine Linux (/bin/sh).",
];

export default function ShellScriptRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Shell Scripting Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the "Ground Truth" of systems automation. From absolute terminal foundations to building complex, high-performance DevOps pipelines and secure server architectures.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Shell Engineer.</CardDescription>
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
            <CardDescription>Master the topics required to land a role as a Systems Administrator or DevOps Engineer.</CardDescription>
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
                    {['sh', 'Bash', 'POSIX', 'Sed', 'AWK', 'jq', 'Shell Scripting', 'Automation', 'Linux Systems', 'Crontab', 'Regex', 'SSH', 'CI/CD', 'Security Hardening'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'POSIX Portability'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality GIF recordings of your automated scripts in action.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with shell-based security auditing and sanitization.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate Your Success</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Shell scripting is the ultimate bridge between developer logic and system execution. It rewards the precise and the persistent. Stay consistent, read the manual (man pages are your friend!), and always build with portability and security in mind. The world runs on the scripts you're about to write. You've got this!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Automating Projects
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
