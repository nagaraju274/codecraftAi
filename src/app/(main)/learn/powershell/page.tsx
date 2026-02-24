
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
  Cloud,
  Lock,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Shell Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Environment Setup",
        why: "To understand what PowerShell is (a task-based command-line shell and scripting language built on .NET) and set up PowerShell 7 (the modern cross-platform version).",
        time: "2 Days",
        prereqs: "Basic Windows usage",
        resources: [
          { name: "PowerShell 101 (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started" },
          { name: "PowerShell Tutorial for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=UV32jwD6yS8" },
        ],
        practice: "Install PowerShell 7 and VS Code with the PowerShell extension. Run '$PSVersionTable' to verify your installation.",
      },
      {
        what: "The Help System (Get-Help)",
        why: "PowerShell is self-documenting. Learning how to find commands and examples is the most important skill for a beginner.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Using Get-Help", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/02-help-system" },
        ],
        practice: "Run 'Update-Help'. Use 'Get-Help Get-Service -Examples' to see how to manage services.",
      },
      {
        what: "Cmdlets & Verb-Noun Syntax",
        why: "PowerShell uses a consistent naming convention (Verb-Noun) making it predictable and easy to learn.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Get-Command Basics", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/03-discovering-objects" },
        ],
        practice: "Use 'Get-Command -Verb Get' to list all commands that retrieve information.",
      },
      {
        what: "The Pipeline (|) & Objects",
        why: "Unlike Linux shells that pass text, PowerShell passes rich Objects. This allows you to filter and manipulate data without complex string parsing.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Understanding the Pipeline", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/04-pipelines" },
          { name: "Objects in PowerShell (YouTube)", url: "https://www.youtube.com/watch?v=look-up-ps-objects" },
        ],
        practice: "Run 'Get-Service | Get-Member' to see the properties and methods available for service objects.",
      },
      {
        what: "Variables & Data Types",
        why: "To store and reuse information. PowerShell is dynamically typed but strongly typed behind the scenes via .NET.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Variables & Scoping", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/06-variables" },
        ],
        practice: "Declare variables for a computer name and a process list. Practice using $() for sub-expressions.",
      },
      {
        what: "Filtering & Selecting (Where-Object)",
        why: "To narrow down large amounts of data to exactly what you need.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Filtering with Where-Object", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/04-pipelines#filtering-objects-out-of-the-pipeline" },
        ],
        practice: "Get all running processes that are using more than 100MB of memory.",
      },
      {
        what: "Control Flow (If, Switch)",
        why: "Logic allows your scripts to make decisions based on system states or user input.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "PowerShell Logic Guide", url: "https://www.tutorialspoint.com/powershell/powershell_operators.htm" },
        ],
        practice: "Write a script that checks if a specific service is running and outputs a message based on the status.",
      },
      {
        what: "Loops (For, Foreach, While)",
        why: "Automation requires repeating tasks across many items (e.g., thousands of users or files).",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Looping in PowerShell", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/07-looping" },
        ],
        practice: "Iterate through a list of folder paths and print the size of each folder.",
      },
      {
        what: "File System Operations",
        why: "Managing files and folders is a core task for any automation engineer.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Working with Files & Folders", url: "https://learn.microsoft.com/en-us/powershell/scripting/samples/working-with-files-and-folders" },
        ],
        practice: "Recursively find all .log files in a directory that are older than 30 days.",
      },
      {
        what: "Modules & Package Management",
        why: "Modules extend PowerShell's capabilities. Learn to find, install, and update them from the PSGallery.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "PowerShell Gallery", url: "https://www.powershellgallery.com/" },
        ],
        practice: "Install the 'SqlServer' or 'ActiveDirectory' module and explore its commands.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Automation & Scripting",
    level: "Intermediate",
    steps: [
      {
        what: "Functions & Parameters",
        why: "To write reusable tools. Mastering parameters (Mandatory, Position, Default values) makes your scripts professional.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Creating Functions", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/09-functions" },
        ],
        practice: "Create a function 'Get-HardwareSummary' that returns CPU and RAM info for a computer.",
      },
      {
        what: "Advanced Functions (CmdletBinding)",
        why: "To make your functions behave like native cmdlets, supporting common parameters like -Verbose and -ErrorAction.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Advanced Functions Overview", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced" },
        ],
        practice: "Add '[CmdletBinding()]' to your hardware summary function and implement 'Write-Verbose' logs.",
      },
      {
        what: "Error Handling (Try/Catch/Finally)",
        why: "Automation must be reliable. Catching errors prevents your scripts from failing silently or causing damage.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Error Handling in PS", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-cuts/error-handling" },
        ],
        practice: "Wrap a file-copy task in a Try/Catch block to handle 'Access Denied' errors gracefully.",
      },
      {
        what: "Working with JSON, CSV & XML",
        why: "PowerShell is excellent at data translation. These formats are the standard for modern APIs and configurations.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Import-Csv and Export-Csv", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/import-csv" },
          { name: "Converting JSON in PS", url: "https://www.youtube.com/watch?v=look-up-json-ps" },
        ],
        practice: "Fetch a JSON response from a web API using 'Invoke-RestMethod' and export it to a CSV file.",
      },
      {
        what: "PSRemoting (WinRM & SSH)",
        why: "The 'Power' in PowerShell. Manage 1,000 servers from a single console using 'Invoke-Command'.",
        time: "1 Week",
        prereqs: "Networking Basics",
        resources: [
          { name: "Introduction to PSRemoting", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/08-remoting" },
        ],
        practice: "Enable PSRemoting on two machines and run a command on the remote machine to check its uptime.",
      },
      {
        what: "Active Directory Automation",
        why: "A massive use case for PowerShell. Automating user onboarding and auditing saves hundreds of hours of manual work.",
        time: "2 Weeks",
        prereqs: "Step 15, AD Knowledge",
        resources: [
          { name: "Active Directory with PowerShell (YouTube)", url: "https://www.youtube.com/playlist?list=PL6Dgjgu398zgZls_9itbiyp2Z_shat9_i" },
        ],
        practice: "Write a script that creates 50 test users in a specific OU using an input CSV file.",
      },
      {
        what: "Regular Expressions (Regex)",
        why: "To find patterns in complex strings or logs where standard wildcards aren't enough.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "PowerShell Regex Guide", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_regular_expressions" },
        ],
        practice: "Use the '-match' operator to extract IP addresses from a text log file.",
      },
      {
        what: "Pester: Unit Testing for Scripts",
        why: "Professional automation requires verification. Pester is the testing framework for PowerShell code.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Pester - Getting Started", url: "https://pester.dev/docs/quick-start" },
        ],
        practice: "Write a Pester test to verify that your 'Get-HardwareSummary' function returns the expected object properties.",
      },
      {
        what: "Custom Objects (PSCustomObject)",
        why: "To create your own data structures that can be passed through the pipeline seamlessly.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Everything you wanted to know about PSCustomObject", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-cuts/pscustomobject" },
        ],
        practice: "Run a query against multiple system settings and combine them into a single PSCustomObject for a clean report.",
      },
      {
        what: "PowerShell Scripting Best Practices",
        why: "To write code that others (including your future self) can read, maintain, and trust.",
        time: "Ongoing",
        prereqs: "None",
        resources: [
          { name: "PowerShell Practice & Style Guide", url: "https://poshcode.gitbook.io/powershell-practice-and-style-guide/" },
        ],
        practice: "Refactor an old script to use proper indentation, full cmdlet names (no aliases), and meaningful variable names.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Engineering & Cloud",
    level: "Advanced",
    steps: [
      {
        what: "PowerShell Classes",
        why: "To use real object-oriented patterns within PowerShell, useful for complex modules and DSC resources.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "About Classes", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_classes" },
        ],
        practice: "Model a 'Server' class with properties like 'OS', 'IP', and methods like 'Restart()'.",
      },
      {
        what: "Desired State Configuration (DSC)",
        why: "Infrastructure as Code for Windows. Define how a server *should* be, and let PowerShell keep it that way.",
        time: "2 Weeks",
        prereqs: "Step 21",
        resources: [
          { name: "DSC Overview", url: "https://learn.microsoft.com/en-us/powershell/scripting/dsc/overview" },
        ],
        practice: "Write a DSC configuration to ensure Nginx is installed and started on a target node.",
      },
      {
        what: "Jobs, Runspaces & Concurrency",
        why: "To run tasks in parallel. Essential for speeding up long-running scripts across many targets.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "PowerShell ForEach-Object Parallel", url: "https://devblogs.microsoft.com/powershell/powershell-foreach-object-parallel-feature/" },
        ],
        practice: "Pinging 100 servers using '-Parallel' and compare the time to a traditional 'foreach' loop.",
      },
      {
        what: "Interacting with .NET Directly",
        why: "When a cmdlet doesn't exist, you can call the underlying .NET classes for maximum power.",
        time: "1 Week",
        prereqs: "C# Basics (Optional)",
        resources: [
          { name: "PowerShell & .NET", url: "https://www.youtube.com/watch?v=look-up-ps-dotnet" },
        ],
        practice: "Use '[System.IO.Path]::GetRandomFileName()' to generate a secure random string.",
      },
      {
        what: "Building & Publishing Modules",
        why: "To package your tools for your team or the world. Learn about Module Manifests (.psd1).",
        time: "1 Week",
        prereqs: "Step 11, Step 20",
        resources: [
          { name: "How to write a module", url: "https://learn.microsoft.com/en-us/powershell/scripting/developer/module/writing-a-powershell-module" },
        ],
        practice: "Organize your helper functions into a '.psm1' file and create a valid '.psd1' manifest.",
      },
      {
        what: "Azure PowerShell (Az Module)",
        why: "The premier way to manage Azure resources (VMs, SQL, AD) at scale.",
        time: "2 Weeks",
        prereqs: "Cloud Basics",
        resources: [
          { name: "Azure PowerShell Docs", url: "https://learn.microsoft.com/en-us/powershell/azure/" },
        ],
        practice: "Use 'New-AzVm' to provision a virtual machine and tag it automatically using a script.",
      },
      {
        what: "Microsoft Graph API & SDK",
        why: "The modern interface for Office 365, Azure AD, and Windows 10 management.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Microsoft Graph PowerShell SDK", url: "https://learn.microsoft.com/en-us/graph/powershell/get-started" },
        ],
        practice: "Write a script to list all members of a specific Microsoft 365 group using the Graph SDK.",
      },
      {
        what: "PowerShell Security (JEA & Constrained Language)",
        why: "To lock down administration. Learn to provide admins with 'Just Enough Administration' to do their jobs without full root access.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "Just Enough Administration (JEA)", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/remoting/jea/overview" },
        ],
        practice: "Configure a JEA endpoint that allows a user to only restart one specific service.",
      },
      {
        what: "CI/CD with PowerShell",
        why: "Integrate your automation into modern DevOps pipelines using GitHub Actions or Azure DevOps.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "GitHub Actions for PowerShell", url: "https://github.com/marketplace/actions/powershell-action" },
        ],
        practice: "Set up a GitHub Action that runs Pester tests on your module every time you push code.",
      },
      {
        what: "Performance Profiling & Optimization",
        why: "To write efficient scripts that handle big data without consuming massive system resources.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Measuring Script Performance", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/measure-command" },
        ],
        practice: "Use 'Measure-Command' to compare the speed of 'Where-Object' vs. '.Where()' extension method.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Automated File Organizer", teaches: "File system handling, loops, and conditions.", tech: "PowerShell CLI" },
  { level: "Beginner", title: "System Health Report", teaches: "WMI/CIM calls, Get-Process, and string formatting.", tech: "PowerShell" },
  { level: "Beginner", title: "User Lookup Tool", teaches: "Variables, Input, and basic AD logic.", tech: "PowerShell, AD Module" },
  { level: "Intermediate", title: "Bulk AD User Creator", teaches: "CSV processing, Error handling, and loops.", tech: "PowerShell, Active Directory" },
  { level: "Intermediate", title: "Server Uptime Monitor", teaches: "Remoting, Try/Catch, and automated email alerts.", tech: "PowerShell, WinRM" },
  { level: "Intermediate", title: "Log Parser & Analyzer", teaches: "Regex, HashMaps, and data export.", tech: "PowerShell, Regex" },
  { level: "Intermediate", title: "Winget Software Installer", teaches: "External CLI interaction and package management.", tech: "PowerShell, Winget" },
  { level: "Advanced", title: "Azure Resource Auditor", teaches: "Cloud SDKs, Authentication, and JSON reports.", tech: "PowerShell, Azure Az" },
  { level: "Advanced", title: "Custom Module Library", teaches: "Module manifests, Scoping, and Unit Testing.", tech: "PowerShell, Pester" },
  { level: "Advanced", title: "JEA Secure Endpoint", teaches: "RBAC, Security configurations, and Remoting.", tech: "PowerShell Security" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Admin Helper",
    description: "Focus on syntax and basic system tasks to get productive in a Windows environment.",
    schedule: [
      "Days 1-7: Installation, Get-Help, and Cmdlet basics.",
      "Days 8-15: The Pipeline, Objects, and Variables.",
      "Days 16-23: Filtering, Loops, and File System tasks.",
      "Days 24-30: Build 2 Beginner projects and learn basic Git.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Automation pro",
    description: "Balanced path for professional scripting and Active Directory management.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Functions, Error Handling, and AD Automation.",
      "Days 46-60: PSRemoting, JSON handling, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Engineer",
    description: "Comprehensive path for Cloud, DevOps, and high-scale Infrastructure roles.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced logic: Classes, DSC, and Testing.",
      "Days 61-90: Azure PowerShell, Graph API, CI/CD, and Portfolio building.",
    ]
  }
];

const interviewTopics = [
  "Objects vs Text: Why is PowerShell different from Bash?",
  "Left-side Filtering vs Right-side Filtering: Which is better and why?",
  "What is the difference between $_ and $PSItem?",
  "Explain Scoping: Global vs. Script vs. Local.",
  "How does the Pipeline work in PowerShell?",
  "What is the 'Execution Policy' and how does it affect security?",
  "WinRM vs SSH for PSRemoting.",
  "The significance of the 'ErrorAction' parameter.",
  "When to use a PSCustomObject over a Hash Table.",
  "How do you handle secrets (passwords) securely in scripts?",
];

const codingQuestions = [
  { question: "Write a script to find the top 5 largest files in a folder.", topic: "File I/O" },
  { question: "Create a function that pings a list of servers and returns a report.", topic: "Networking" },
  { question: "How would you find all members of an AD group recursively?", topic: "Active Directory" },
  { question: "Write a try/catch block that handles a specific 'DivideByZero' exception.", topic: "Error Handling" },
];

const mcqs = [
  { question: "Which command is used to see all properties of an object in the pipeline?", options: ["Get-Property", "Get-Member", "Show-Object", "List-All"], answer: "Get-Member" },
  { question: "What is the default execution policy on Windows Servers?", options: ["Unrestricted", "AllSigned", "RemoteSigned", "Restricted"], answer: "RemoteSigned" },
  { question: "Which operator is used for pattern matching with wildcards?", options: ["-match", "-like", "-contains", "-eq"], answer: "-like" },
];

const mistakes = [
  "Using Aliases in Scripts: (e.g. using 'ls' instead of 'Get-ChildItem'). This makes scripts hard to maintain.",
  "Left-side Filtering: Filtering data at the end of a pipeline instead of the source (slow performance).",
  "Hardcoding Paths: Not using $PSScriptRoot or relative paths.",
  "Ignoring the Help System: Trying to guess parameters instead of using 'Get-Help'.",
  "Hardcoding Credentials: Not using Get-Credential or a secure Vault.",
  "Polluting the Global Scope: Not using local variables in functions.",
  "Not using 'WhatIf': Deleting files without testing the command first with -WhatIf.",
  "Assuming everything is a string: Forgetting that PowerShell works with rich objects.",
  "Neglecting Error Handling: Building scripts that stop working the moment one tiny thing fails.",
  "Not using Version Control: Overwriting good code with bugs and having no way to revert.",
];

export default function PowershellRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The PowerShell Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most powerful shell for enterprise automation. From desktop tasks to global-scale cloud infrastructure and security management.
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PowerShell', 'Automation', 'Active Directory', 'Azure PowerShell', 'PSRemoting', 'CI/CD', 'GitHub Actions', 'Unit Testing', 'Pester', 'JSON/CSV', 'Security Hardening', 'DSC'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Object-Oriented' piping over string parsing.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include Pester test results in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase experience with Azure or Microsoft 365 automation.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate Everything.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            PowerShell is the key to mastering the modern enterprise. It rewards the curious and the lazy (who automate to avoid work!). Stay consistent, read the official docs, and remember: The most powerful systems are the ones that manage themselves. Your journey to automation legend starts now!
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
