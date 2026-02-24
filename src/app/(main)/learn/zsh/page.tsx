
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
    title: "Beginner Stage: Shell Foundations & Interactive Zsh",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Zsh Setup",
        why: "Zsh is the default shell on macOS and many Linux distros. Understanding the .zshrc file is the first step to customization.",
        time: "2 Days",
        prereqs: "Basic Terminal usage",
        resources: [
          { name: "Zsh Official - Intro", url: "https://zsh.sourceforge.io/Intro/intro_1.html" },
          { name: "Zsh for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=MS9v_6ZIsio" },
        ],
        practice: "Install Zsh. Run 'zsh --version'. Create a simple '.zshrc' and add your first alias.",
      },
      {
        what: "Zsh Syntax & Variables",
        why: "To store and reuse data. Understanding scalar vs. array variables in Zsh is foundational for scripting.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Zsh Variable Guide", url: "https://zsh.sourceforge.io/Doc/Release/Parameters.html" },
        ],
        practice: "Declare local and global variables. Practice string interpolation with double quotes.",
      },
      {
        what: "Advanced Globbing (Wildcards)",
        why: "Zsh globbing is far more powerful than Bash. Learning recursive globbing (**) and qualifiers is a Zsh superpower.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Zsh Globbing Tutorial", url: "https://linuxhint.com/zsh-globbing-examples/" },
        ],
        practice: "Use 'ls **/*.txt' to find all text files recursively. Experiment with qualifiers like '*(.)' for files only.",
      },
      {
        what: "Control Flow: If, For, While",
        why: "Logic branching allows your shell scripts to make decisions and handle repetitive tasks efficiently.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Flow in Zsh", url: "https://zsh.sourceforge.io/Doc/Release/Shell-Grammar.html#Complex-Commands" },
        ],
        practice: "Write a script that iterates through a list of directories and checks if they contain a '.git' folder.",
      },
      {
        what: "Aliases & Global Aliases",
        why: "Global aliases (-g) can be used anywhere in a command line, not just at the start, making your workflow extremely fast.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Zsh Aliases Guide", url: "https://linuxize.com/post/zsh-aliases/" },
        ],
        practice: "Create a global alias like 'alias -g G=\"| grep\"' and use it like 'ls G pattern'.",
      },
      {
        what: "Redirection & Pipes",
        why: "To manage data streams. Zsh's multios option allows you to pipe output to multiple files simultaneously.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "I/O Redirection in Shell", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Command_line#redirection_and_pipes" },
        ],
        practice: "Use 'setopt multios' and run a command that sends output to two files at once: 'echo hi > file1 > file2'.",
      },
      {
        what: "Zsh Functions & Local Scope",
        why: "To keep logic modular. Understanding 'local' scope prevents variable collisions in complex shell setups.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Functions in Zsh", url: "https://zsh.sourceforge.io/Doc/Release/Functions.html" },
        ],
        practice: "Create a function 'mcd' that makes a directory and changes into it in one command.",
      },
      {
        what: "The Zsh Help System",
        why: "Zsh is self-documenting. Learning 'man zsh' and built-in help is vital for independent learning.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Navigating Zsh Manuals", url: "https://zsh.sourceforge.io/Doc/Release/zsh_toc.html" },
        ],
        practice: "Use 'man zshexpn' to look up parameter expansion rules.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Customization & Completion",
    level: "Intermediate",
    steps: [
      {
        what: "Oh My Zsh & Plugin Managers",
        why: "To leverage thousands of community-built plugins and themes. Understand managers like Zplug or Zinit for speed.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Oh My Zsh Official", url: "https://ohmyz.sh/" },
          { name: "Zinit (Advanced Plugin Manager)", url: "https://github.com/zdharma-continuum/zinit" },
        ],
        practice: "Install Oh My Zsh. Add the 'git' and 'docker' plugins. Try a custom theme like 'agnoster'.",
      },
      {
        what: "Zsh Completion System (compinit)",
        why: "Zsh has the most advanced completion system in the world. Mastering 'zstyle' configures how your shell suggests inputs.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Zsh Completion Guide", url: "https://github.com/zsh-users/zsh-completions/blob/master/zsh-completions-howto.md" },
        ],
        practice: "Configure your shell to show a menu for completions and handle case-insensitive matches.",
      },
      {
        what: "Prompt Customization (PROMPT & RPROMPT)",
        why: "To show vital info (git branch, exit code, time) directly in your shell line. RPROMPT adds info to the right side.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Customizing Zsh Prompt", url: "https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html" },
        ],
        practice: "Build a custom prompt that shows your username in green and the current directory in blue.",
      },
      {
        what: "Parameter Expansion Mastery",
        why: "To transform strings on the fly (e.g. changing case, search and replace) without calling external tools like sed.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Parameter Expansion Docs", url: "https://zsh.sourceforge.io/Doc/Release/Expansion.html#Parameter-Expansion" },
        ],
        practice: "Use '${var:u}' to uppercase a string and '${var/old/new}' for replacement.",
      },
      {
        what: "History Management & Search",
        why: "To quickly find and reuse past commands. Master shared history between terminal windows.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Zsh History Options", url: "https://zsh.sourceforge.io/Doc/Release/Options.html#History" },
        ],
        practice: "Set up 'HISTFILE' and 'SAVEHIST'. Use 'Ctrl+R' for reverse search.",
      },
      {
        what: "Zsh Line Editor (ZLE) & Key Bindings",
        why: "To customize keyboard shortcuts. ZLE allows you to map keys to functions, like 'Vi' or 'Emacs' mode.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Zsh Line Editor Guide", url: "https://zsh.sourceforge.io/Doc/Release/Zsh-Line-Editor.html" },
        ],
        practice: "Enable Vi-mode in your shell and create a custom binding to clear the screen.",
      },
      {
        what: "Shell Options (setopt)",
        why: "Zsh behavior is highly configurable. Options like 'AUTO_CD' or 'CORRECT' significantly improve UX.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Zsh Options Reference", url: "https://zsh.sourceforge.io/Doc/Release/Options.html" },
        ],
        practice: "Enable 'AUTO_CD' so you can just type a directory name to move into it.",
      },
      {
        what: "Intermediate Scripting: Portability",
        why: "To write scripts that run on any Zsh environment. Learn to use 'emulate' to handle cross-shell differences.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Zsh Emulation Modes", url: "https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html#index-emulate" },
        ],
        practice: "Write a script that uses 'emulate sh' to ensure compatibility with standard shell scripts.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Engineering & Performance",
    level: "Advanced",
    steps: [
      {
        what: "Advanced Glob Qualifiers & Modifiers",
        why: "For surgical file selection (e.g., select only symlinks older than 2 days). This replaces complex 'find' commands.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Advanced Glob Qualifiers", url: "https://zsh.sourceforge.io/Doc/Release/Expansion.html#Glob-Qualifiers" },
        ],
        practice: "Find the 5 largest files in a directory using glob qualifiers only.",
      },
      {
        what: "Zsh Modules (zmodload)",
        why: "To add features like networking (zsh/net/tcp), math (zsh/mathfunc), or system hooks directly to the shell.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Zsh Modules Guide", url: "https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html" },
        ],
        practice: "Load the 'zsh/datetime' module and print the current epoch time.",
      },
      {
        what: "Writing Custom Plugins",
        why: "To bundle your logic into a reusable package that can be shared or managed by plugin managers.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Developing Zsh Plugins", url: "https://github.com/unixorn/zsh-plugin-standard" },
        ],
        practice: "Convert a set of related functions into a single Zsh plugin with an init script.",
      },
      {
        what: "Performance Profiling (zprof)",
        why: "Slow terminal startups are a pain. 'zprof' identifies exactly which part of your .zshrc is taking time.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Profiling Zsh Startup", url: "https://github.com/romkatv/zsh-bench" },
        ],
        practice: "Profile your current shell startup and optimize the slowest plugin.",
      },
      {
        what: "Security & Taint Checking",
        why: "Automation scripts often handle untrusted input. Understanding Zsh's security flags prevents command injection.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Zsh Security Patterns", url: "https://zsh.sourceforge.io/Doc/Release/Zsh-Roadmap.html" },
        ],
        practice: "Audit a script to ensure that user-provided strings cannot execute malicious shell code.",
      },
      {
        what: "Zsh for Networking (TCP Sockets)",
        why: "To build simple network listeners or clients directly in the shell using zsh/net/tcp.",
        time: "1 Week",
        prereqs: "Networking Basics",
        resources: [
          { name: "TCP/IP with Zsh", url: "https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#The-zsh_002fnet_002ftcp-Module" },
        ],
        practice: "Build a simple TCP echo server that prints whatever a client sends to it.",
      },
      {
        what: "Advanced Metaprogramming (eval & alias)",
        why: "To generate functions or aliases dynamically at runtime based on the system state.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Zsh Advanced Scripting", url: "https://github.com/zsh-users/zsh/blob/master/Etc/FAQ.yo" },
        ],
        practice: "Write a loop that automatically generates a 'connect-server-X' alias for every IP in a config file.",
      },
      {
        what: "Final Mastery Project: The Shell Orchestrator",
        why: "To synthesize all skills: UI, Data, Networking, and Automation into a production-grade tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Production Monitor' that checks server health over TCP, parses logs with regex, and updates your RPROMPT with the status.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Automated Log Cleaner", teaches: "File operations, wildcards, and aliases.", tech: "Zsh, rm" },
  { level: "Beginner", title: "Personal To-Do CLI", teaches: "Variable storage, appending to files, and logic branching.", tech: "Zsh" },
  { level: "Beginner", title: "Directory Organizer", teaches: "Recursive globbing (**), mv command, and loops.", tech: "Zsh" },
  { level: "Intermediate", title: "System Health Dashboard", teaches: "PROMPT customization, terminal colors, and system calls.", tech: "Zsh, /proc" },
  { level: "Intermediate", title: "Dotfiles Manager", teaches: "Git integration, symlinking, and Zsh functions.", tech: "Zsh, Git" },
  { level: "Intermediate", title: "Interactive Setup Wizard", teaches: "User input (read), validation, and case statements.", tech: "Zsh" },
  { level: "Intermediate", title: "Advanced Log Parser", teaches: "Parameter expansion, regex, and redirection.", tech: "Zsh, awk" },
  { level: "Advanced", title: "Zsh-Native Plugin Library", teaches: "Plugin structure, zmodload, and distributions.", tech: "Zsh, Zplug" },
  { level: "Advanced", title: "TCP Monitor Sidecar", teaches: "zsh/net/tcp, background processes, and networking.", tech: "Zsh Modules" },
  { level: "Advanced", title: "Self-Healing Server Script", teaches: "Profiling, security tainting, and automated recovery.", tech: "Zsh, SRE principles" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Essential User",
    description: "Focus on interactive features and basic automation to master daily terminal usage.",
    schedule: [
      "Days 1-7: Installation, .zshrc, and Basic Aliases.",
      "Days 8-15: Master Globbing and Control Flow.",
      "Days 16-23: Redirection, Pipes, and Functions.",
      "Days 24-30: Build 2 beginner projects and learn Oh My Zsh.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Automation Pro",
    description: "Balanced path for professional scripting and complex environment configuration.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Completion system, Prompt customization, and Parameter expansion.",
      "Days 41-60: History management, ZLE bindings, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Engineer",
    description: "Comprehensive path for high-performance engineering and advanced shell architecture.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced logic: Glob qualifiers, Modules, and Plugins.",
      "Days 61-90: Performance tuning, Sockets, Security, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between Zsh and Bash? (Arrays, Globbing).",
  "Explain Global Aliases and their use cases.",
  "How does the Zsh completion system work? (compinit).",
  "Explain Parameter Expansion vs external tools like sed.",
  "What is the purpose of the .zshrc file?",
  "Describe Recursive Globbing (**).",
  "What is the Zsh Line Editor (ZLE)?",
  "How do you handle shared history across multiple terminals?",
  "Explain the significance of the 'multios' option.",
  "How do you profile a slow shell startup?",
];

const codingQuestions = [
  { question: "Write a one-liner to find all .log files modified in the last 24 hours.", topic: "Glob Qualifiers" },
  { question: "Implement a function that replaces spaces with underscores in all filenames in a directory.", topic: "Parameter Expansion" },
  { question: "Create a custom prompt that shows the current Git branch name.", topic: "Prompt Design" },
  { question: "Write a script that concurrently pings 5 servers and reports their status.", topic: "Concurrency" },
];

const mcqs = [
  { question: "Which command is used to enable a Zsh option?", options: ["enable", "setopt", "zopt", "config"], answer: "setopt" },
  { question: "What is the correct index for the first element of a Zsh array?", options: ["0", "1", "-1", "Depends on config"], answer: "1 (by default)" },
  { question: "Which module allows Zsh to open TCP sockets?", options: ["zsh/net", "zsh/tcp", "zsh/socket", "zsh/net/tcp"], answer: "zsh/net/tcp" },
];

const mistakes = [
  "Forgetting that Zsh arrays are 1-indexed by default (unlike Bash/Python).",
  "Treating Zsh exactly like Bash—missing out on superior globbing features.",
  "Installing too many Oh My Zsh plugins, leading to slow terminal startup.",
  "Vague variable names: Use 'local' inside functions to avoid global pollution.",
  "Ignoring the Log: Failing to check 'zprof' for performance bottlenecks.",
  "Tutorial Hell: Reading manual without writing scripts in the shell.",
  "Neglecting .zshrc backups: Use Git to manage your shell configuration.",
  "Hardcoding paths: Use relative paths or env variables like $HOME.",
  "Manual Data Cleaning: Using loops for string tasks that Parameter Expansion can do faster.",
  "Ignoring Security: Passing unsanitized user input into 'eval' or 'system' calls.",
];

export default function ZshRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Zsh Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most powerful shell in the world. From high-speed interactive shortcuts to building complex, high-performance automation suites and secure systems engineering.
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
                    {['Zsh', 'Oh My Zsh', 'Globbing', 'ZLE', 'Shell Scripting', 'Automation', 'Unix Shell', 'Regex', 'ETL', 'Log Analysis', 'Performance Tuning', 'Bash Emulation', 'POSIX'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain an active 'dotfiles' repository on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide 'Before and After' performance metrics for your shell startup.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate Your Success</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Zsh is more than just a shell; it's an engineering workstation. It rewards the curious and the lazy (who automate to avoid repetitive work!). Stay consistent, read the manual, and remember: If you have to do it twice, script it. Your automation journey starts now!
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
