
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
  ChevronRight,
  FileCode,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Terminal & Command Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to the Shell & CLI",
        why: "To understand what a shell is (the interface between you and the kernel) and how to navigate the file system using the command line.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Linux Journey: The Shell", url: "https://linuxjourney.com/lesson/the-shell" },
          { name: "Bash for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=oxuRxtrO2Ag" },
        ],
        practice: "Open your terminal. Practice using 'pwd', 'ls', 'cd', 'mkdir', and 'rmdir'.",
      },
      {
        what: "File Operations & Redirection",
        why: "To manage files efficiently and learn how to move data between commands using '>', '>>', and '|'.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Redirection & Piping (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Command_line#redirection_and_pipes" },
        ],
        practice: "Create a file using 'touch', write to it using 'echo', and use 'cat' to display it. Pipe 'ls' output into 'grep'.",
      },
      {
        what: "Permissions & Ownership (chmod, chown)",
        why: "Linux security is built on permissions. You must understand 'Read', 'Write', and 'Execute' for Users, Groups, and Others.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Linux Permissions Explained", url: "https://www.digitalocean.com/community/tutorials/linux-permissions-basics-and-how-to-use-umask-on-a-vps" },
        ],
        practice: "Create a script, try to run it, observe the 'Permission Denied' error, then fix it using 'chmod +x'.",
      },
      {
        what: "Variables & Quotes",
        why: "To store and reuse data. Understanding the difference between single quotes ('') and double quotes (\"\") is a common beginner pitfall.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Bash Variables Guide", url: "https://linuxize.com/post/bash-variables/" },
        ],
        practice: "Define variables for your name and age. Print a sentence using them, observing how quotes affect variable expansion.",
      },
      {
        what: "Conditionals (If/Else)",
        why: "Logic allows your scripts to make decisions. Essential for checking if a file exists or if a command succeeded.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Bash If Statements", url: "https://linuxize.com/post/bash-if-else-statement/" },
        ],
        practice: "Write a script that checks if a specific file exists and prints a message based on the result.",
      },
      {
        what: "Loops (For, While)",
        why: "To automate repetitive tasks like renaming 100 files or checking the status of 10 servers.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Bash For Loops", url: "https://linuxize.com/post/bash-for-loop/" },
        ],
        practice: "Write a loop that prints the numbers 1 to 10. Write another that iterates through all .txt files in a directory.",
      },
      {
        what: "Arguments & Input ($1, $2, read)",
        why: "To build interactive and flexible scripts that accept user input or command-line parameters.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Bash Script Arguments", url: "https://www.baeldung.com/linux/bash-variables-dollar-sign" },
        ],
        practice: "Create a script 'greet.sh' that takes a name as an argument and prints 'Hello, [name]'.",
      },
      {
        what: "Exit Codes & Logical Operators",
        why: "Every command returns a status (0 for success, non-zero for error). Mastering '&&' and '||' is key to script reliability.",
        time: "2 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Understanding Exit Codes", url: "https://www.baeldung.com/linux/bash-exit-status-codes" },
        ],
        practice: "Try to 'ls' a non-existent directory and then run 'echo $?' to see the error code.",
      },
      {
        what: "Basic Grep & Pattern Matching",
        why: "To find specific text within files or command output—the most used data filtering skill.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Grep Command Tutorial", url: "https://www.youtube.com/watch?v=VGgTmxXp7xQ" },
        ],
        practice: "Search for all occurrences of 'error' in a log file, ignoring case sensitivity.",
      },
      {
        what: "The Shebang & PATH",
        why: "To understand how the OS knows to use Bash to run your script and where it looks for executable files.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "What is the Shebang?", url: "https://www.baeldung.com/linux/shebang" },
        ],
        practice: "Add '#!/bin/bash' to your scripts and move one to a directory in your $PATH to run it from anywhere.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Automation & Logic",
    level: "Intermediate",
    steps: [
      {
        what: "Functions & Scope",
        why: "To organize your code into reusable blocks. Understanding local vs. global scope prevents variable name collisions.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Bash Functions Guide", url: "https://linuxize.com/post/bash-functions/" },
        ],
        practice: "Create a script with a 'check_status' function that is called multiple times for different services.",
      },
      {
        what: "Command Substitution & Subshells",
        why: "To capture the output of a command and use it as a variable value (e.g., current_date=$(date)).",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Bash Command Substitution", url: "https://www.baeldung.com/linux/bash-command-substitution" },
        ],
        practice: "Write a script that creates a backup folder named with the current timestamp.",
      },
      {
        what: "Arrays & Associative Arrays",
        why: "To manage complex lists of data. Associative arrays (available in Bash 4+) act like Key-Value maps.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Bash Arrays Tutorial", url: "https://linuxhint.com/bash_arrays/" },
        ],
        practice: "Create an array of server IPs and use a loop to ping each one, storing the results in a map.",
      },
      {
        what: "Regular Expressions (Regex) in Bash",
        why: "To perform complex string validation and extraction using the '=~' operator.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Bash Regex Guide", url: "https://www.linuxjournal.com/content/bash-regular-expressions" },
        ],
        practice: "Write a script that validates if a user input string is a valid email address.",
      },
      {
        what: "Stream Editing with Sed (Introduction)",
        why: "To transform text on the fly without opening an editor. Essential for automated configuration changes.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Sed Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=look-up-sed" },
        ],
        practice: "Replace all occurrences of 'localhost' with '127.0.0.1' in a config file using sed.",
      },
      {
        what: "Data Processing with AWK (Introduction)",
        why: "AWK is a powerful text processing language. It's the best tool for extracting data from columnar logs.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "AWK for Beginners", url: "https://www.youtube.com/watch?v=9YOZmI-zWok" },
        ],
        practice: "Use 'ps' and AWK to print only the PID and Name of all running processes.",
      },
      {
        what: "Error Handling & Signal Traps",
        why: "To build 'bulletproof' scripts that clean up temporary files even if they crash or are interrupted (Ctrl+C).",
        time: "5 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Bash Trap Command", url: "https://www.baeldung.com/linux/bash-trap-command" },
        ],
        practice: "Write a script that creates a temp file and use 'trap' to ensure the file is deleted on exit.",
      },
      {
        what: "Cron Jobs & Scheduling",
        why: "Automation is only useful if it runs automatically. Master the crontab for scheduled maintenance.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Crontab Guru (Interactive Tool)", url: "https://crontab.guru/" },
          { name: "Cron Job Guide", url: "https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804" },
        ],
        practice: "Schedule a script to run every night at 2 AM to clean up the /tmp directory.",
      },
      {
        what: "SSH & Remote Automation",
        why: "To manage remote servers. Learn key-based auth and how to run local scripts on remote machines.",
        time: "1 Week",
        prereqs: "Networking Basics",
        resources: [
          { name: "SSH Keys Tutorial", url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04" },
        ],
        practice: "Set up passwordless SSH and write a local script that checks disk space on 3 remote servers.",
      },
      {
        what: "Debugging Techniques (set -x, set -e)",
        why: "To find logic errors. 'set -x' prints every command before execution; 'set -e' stops the script on any error.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Debugging Bash Scripts", url: "https://www.baeldung.com/linux/bash-debug-mode" },
        ],
        practice: "Run a complex script with '-x' and trace the values of variables as it executes.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Engineering & Optimization",
    level: "Advanced",
    steps: [
      {
        what: "Advanced AWK: Control Flow & Math",
        why: "To perform complex data analysis and reporting on large log files directly from the shell.",
        time: "2 Weeks",
        prereqs: "Step 16",
        resources: [
          { name: "Advanced AWK Guide", url: "https://www.grymoire.com/Unix/Awk.html" },
        ],
        practice: "Write an AWK script that parses an access log and calculates the total bandwidth used by each IP.",
      },
      {
        what: "Parsing JSON with jq",
        why: "Modern APIs return JSON. 'jq' is the standard tool for filtering and transforming JSON in the terminal.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "jq Play (Interactive Sandbox)", url: "https://jqplay.org/" },
          { name: "jq Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=id-jq-bash" },
        ],
        practice: "Use 'curl' to get data from a GitHub API and use 'jq' to extract only the repository names.",
      },
      {
        what: "Networking with Socat & Netcat",
        why: "To troubleshoot network connectivity, transfer files, and even create simple server-side listeners.",
        time: "1 Week",
        prereqs: "Networking Basics",
        resources: [
          { name: "Netcat Guide", url: "https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections" },
        ],
        practice: "Use netcat to check if a specific port is open on a remote server.",
      },
      {
        what: "Process Concurrency & Paralellism",
        why: "To speed up scripts by running tasks in the background using '&' or 'xargs -P'.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Parallel Processing in Bash", url: "https://www.baeldung.com/linux/bash-parallel-processing" },
        ],
        practice: "Write a script that pings 50 different IPs simultaneously using background processes.",
      },
      {
        what: "Security Hardening Scripts",
        why: "To automate the configuration of firewalls, SSH policies, and user auditing for server security.",
        time: "2 Weeks",
        prereqs: "Permissions Mastery",
        resources: [
          { name: "Linux Server Hardening Guide", url: "https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04" },
        ],
        practice: "Write a 'lockdown.sh' script that disables root login over SSH and configures UFW firewall rules.",
      },
      {
        what: "CI/CD Pipeline Integration",
        why: "DevOps engineers use Bash to script build steps, health checks, and deployment triggers in tools like Jenkins or GitHub Actions.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "GitHub Actions Bash Steps", url: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswithrun" },
        ],
        practice: "Set up a GitHub Action that runs a Bash script to verify all links in your documentation aren't broken.",
      },
      {
        what: "Building CLI Tools with Gum / Dialog",
        why: "To create professional, interactive terminal interfaces with menus, spinners, and progress bars.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Charm Gum (TUI Library)", url: "https://github.com/charmbracelet/gum" },
        ],
        practice: "Create a setup script for your favorite project using Gum to show a multi-select menu for installation options.",
      },
      {
        what: "Performance Profiling & Bottlenecks",
        why: "To identify why a script is slow. Learn to use 'time', 'strace', and 'lsof' to diagnose system calls and file locks.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Bash Scripts", url: "https://www.youtube.com/watch?v=id-profiling-bash" },
        ],
        practice: "Use 'strace' on a simple script to see exactly which system calls are being made.",
      },
      {
        what: "Shell Scripting Portability (POSIX)",
        why: "To write scripts that run on any Unix system (macOS, FreeBSD, Alpine) without Bash-specific 'bashisms'.",
        time: "4 Days",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Common Bashisms to Avoid", url: "https://mywiki.wooledge.org/Bashism" },
        ],
        practice: "Rewrite one of your complex Bash scripts using only POSIX-compliant syntax (use 'sh' instead of 'bash').",
      },
      {
        what: "Final Mastery: System Orchestrator",
        why: "To synthesize all skills into a professional-grade automation engine.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Server Autoscale' simulator that monitors system load and simulates launching new instances when CPU > 80%.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Automated Log Cleaner", teaches: "File operations, wildcards, find, and cron.", tech: "Bash, Cron" },
  { level: "Beginner", title: "Personal To-Do CLI", teaches: "Variables, Input (read), appending to files.", tech: "Bash" },
  { level: "Beginner", title: "Directory Organizer", teaches: "Loops, conditionals, and file extensions.", tech: "Bash" },
  { level: "Intermediate", title: "System Health Dashboard", teaches: "Grep, AWK, command substitution, and ANSI colors.", tech: "Bash, AWK" },
  { level: "Intermediate", title: "Bulk Image Resizer (FFmpeg wrapper)", teaches: "External tool integration, parallel execution.", tech: "Bash, FFmpeg" },
  { level: "Intermediate", title: "Remote Server Auditor", teaches: "SSH, loops, and remote command execution.", tech: "Bash, SSH" },
  { level: "Intermediate", title: "GitHub Repo Backup Tool", teaches: "API interaction (curl), JSON (jq), and Git.", tech: "Bash, curl, jq" },
  { level: "Advanced", title: "Log Analyzer & Aggregator", teaches: "Advanced AWK, associative arrays, and complex reporting.", tech: "AWK, Bash" },
  { level: "Advanced", title: "Interactive Setup Wizard (TUI)", teaches: "TUI design, case statements, error handling.", tech: "Bash, Gum/Dialog" },
  { level: "Advanced", title: "Multi-Region Cloud Backup", teaches: "Cloud CLIs, encryption (GPG), and parallelism.", tech: "AWS/GCP CLI, GPG, Bash" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Automation Starter",
    description: "Focus on syntax and basic system tasks to get productive in a Linux environment.",
    schedule: [
      "Days 1-7: Terminal Navigation, File Ops, and Permissions.",
      "Days 8-15: Variables, Conditionals, and basic Loops.",
      "Days 16-23: Redirection, Grep, and simple Scripting.",
      "Days 24-30: Build 2 Beginner projects and learn Crontab basics.",
    ]
  },
  {
    title: "60-Day Standard Plan: The DevOps Engineer",
    description: "Balanced path for professional scripting and system management.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Functions, Sed, basic AWK, and SSH remoting.",
      "Days 46-60: Error handling, JSON (jq), and building a 'System Dashboard'.",
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
  "What is the difference between a Shell and a Kernel?",
  "How does the Pipeline work under the hood?",
  "Explain 'Single Quotes' vs 'Double Quotes' in Bash.",
  "What is the difference between 'exec' and 'fork'?",
  "How do you handle a script that keeps hanging? (Debugging).",
  "What is the significance of the Exit Code '0'?",
  "How can you pass data between two processes that are not related? (Named Pipes).",
  "Explain what a 'Deadly Embrace' (Deadlock) is in the context of concurrency.",
  "How do you prevent SQL Injection if your Bash script talks to a database?",
  "What is the role of the $PATH environment variable?",
];

const codingQuestions = [
  { question: "Write a script to find the top 5 largest files in a directory recursively.", topic: "File I/O" },
  { question: "How would you extract all 404 errors from an Apache log and count unique IPs?", topic: "AWK/Regex" },
  { question: "Write a function that calculates the sum of all numbers in an array.", topic: "Logic" },
  { question: "Create a one-liner to kill all processes belonging to a specific user.", topic: "Processes" },
];

const mcqs = [
  { question: "Which command is used to see the permissions of a file?", options: ["show-perm", "ls -l", "chmod", "check"], answer: "ls -l" },
  { question: "What symbol denotes the end of a line in a Regex pattern?", options: ["^", "$", "*", "#"], answer: "$" },
  { question: "Which variable stores the process ID of the last background command?", options: ["$!", "$?", "$#", "$$"], answer: "$!" },
];

const mistakes = [
  "Not using 'set -e': Failing to stop on errors causes silent, catastrophic script failure.",
  "Forgetting Double Quotes: Not quoting variables leads to word-splitting bugs.",
  "Using Aliases in Scripts: Aliases aren't expanded in non-interactive shells.",
  "Ignoring Case Sensitivity: Unix filesystems are case-sensitive; keep names consistent.",
  "Hardcoding Paths: Always use relative paths or environment variables like $HOME.",
  "Neglecting the Shebang: Without #!/bin/bash, the system might use an incorrect shell.",
  "Manual Data Cleaning: Trying to use 'Grep' for complex logic when 'AWK' is needed.",
  "Not Using ShellCheck: Every script should be run through ShellCheck before commit.",
  "Over-nesting Logic: Keep functions small and modular; don't write 500-line scripts.",
  "Hardcoding Secrets: Storing passwords in scripts instead of using Vaults or env files.",
];

export default function BashRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Bash & Shell Scripting Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the "Ground Truth" of systems automation. From your first terminal command to building complex, high-performance DevOps pipelines and secure server architectures.
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
              <CardDescription>Master the foundations and progress to the {stage.level} level.</CardDescription>
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
            <CardDescription>Master the topics required to land a role as a DevOps or Systems Engineer.</CardDescription>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Bash', 'Shell Scripting', 'AWK', 'Sed', 'jq', 'Automation', 'Linux Systems', 'Crontab', 'Regex', 'SSH', 'CI/CD', 'Security Hardening', 'POSIX'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain an active 'dotfiles' repository on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide 'Before and After' optimization metrics for automated tasks.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with shell-based security auditing.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate Your World</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Bash is the ultimate superpower for anyone working with servers. It rewards the curious and the lazy (who automate to avoid repetitive work!). Stay consistent, read the man pages, and remember: If you have to do it twice, script it. Your automation journey starts now!
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
