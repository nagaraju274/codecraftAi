
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
  Network,
  Lock,
} from "lucide-react";
import Link from "next/link";

const glassGradients = [
  "from-red-500/50 to-red-500/20 border-red-500/40 text-red-950 dark:text-red-50",
  "from-orange-500/50 to-orange-500/20 border-orange-500/40 text-orange-950 dark:text-orange-50",
  "from-amber-500/50 to-amber-500/20 border-amber-500/40 text-amber-950 dark:text-amber-50",
  "from-yellow-500/50 to-yellow-500/20 border-yellow-500/40 text-yellow-950 dark:text-yellow-50",
  "from-lime-500/50 to-lime-500/20 border-lime-500/40 text-lime-950 dark:text-lime-50",
  "from-green-500/50 to-green-500/20 border-green-500/40 text-green-950 dark:text-green-50",
  "from-emerald-500/50 to-emerald-500/20 border-emerald-500/40 text-emerald-950 dark:text-emerald-50",
  "from-teal-500/50 to-teal-500/20 border-teal-500/40 text-teal-950 dark:text-teal-50",
  "from-cyan-500/50 to-cyan-500/20 border-cyan-500/40 text-cyan-950 dark:text-cyan-50",
  "from-sky-500/50 to-sky-500/20 border-sky-500/40 text-sky-950 dark:text-sky-50",
  "from-blue-500/50 to-blue-500/20 border-blue-500/40 text-blue-950 dark:text-blue-50",
  "from-indigo-500/50 to-indigo-500/20 border-indigo-500/40 text-indigo-950 dark:text-indigo-50",
  "from-violet-500/50 to-violet-500/20 border-violet-500/40 text-violet-950 dark:text-violet-50",
  "from-purple-500/50 to-purple-500/20 border-purple-500/40 text-purple-950 dark:text-purple-50",
  "from-fuchsia-500/50 to-fuchsia-500/20 border-fuchsia-500/40 text-fuchsia-950 dark:text-fuchsia-50",
  "from-pink-500/50 to-pink-500/20 border-pink-500/40 text-pink-950 dark:text-pink-50",
  "from-rose-500/50 to-rose-500/20 border-rose-500/40 text-rose-950 dark:text-rose-50",
];

const stages = [
  {
    title: "Beginner Stage: Low-Level Foundations",
    level: "Beginner",
    steps: [
      {
        what: "C Programming Mastery",
        why: "C is the language of systems. You must master pointers, structs, and memory-mapped I/O to talk to hardware.",
        time: "3 Weeks",
        prereqs: "None",
        resources: [
          { name: "C Programming Full Course (YouTube)", url: "https://www.youtube.com/watch?v=KJgsSAhyaso" },
          { name: "Modern C (Book/Guide)", url: "https://modernc.gforge.inria.fr/" },
        ],
        practice: "Implement a dynamic array and a linked list from scratch in C.",
      },
      {
        what: "Computer Architecture & X86/ARM",
        why: "To write efficient code, you must understand registers, stack frames, and the fetch-decode-execute cycle.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Computer Architecture (Coursera/YouTube)", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" },
        ],
        practice: "Write a simple 'Hello World' in Assembly (NASM) and assemble it.",
      },
      {
        what: "Linux/UNIX Fundamentals",
        why: "Systems programming happens in the shell. Master terminal navigation, pipes, and file permissions.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com/" },
        ],
        practice: "Write a Bash script to automate the backup of a directory to a remote server.",
      },
      {
        what: "The Compilation Process",
        why: "Understand how source code becomes a binary (Preprocessing -> Compilation -> Assembly -> Linking).",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "C Compilation Process Explained", url: "https://www.geeksforgeeks.org/compiling-a-c-program-behind-the-scenes/" },
        ],
        practice: "Use 'gcc -S' to output assembly code and 'gcc -E' to see preprocessor output.",
      },
      {
        what: "System Calls Introduction",
        why: "System calls are the gateway to the kernel. Learn 'read', 'write', 'open', and 'close' (unistd.h).",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "The Linux Syscall Reference", url: "https://man7.org/linux/man-pages/man2/syscalls.2.html" },
        ],
        practice: "Write a C program that copies a file using only low-level system calls (no printf/fopen).",
      },
      {
        what: "Process Management (fork, exec, wait)",
        why: "Operating systems manage multiple processes. You must learn how they are created and managed.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Process Management in C", url: "https://www.youtube.com/watch?v=94uS0hEf3Z8" },
        ],
        practice: "Build a program that forks 5 child processes, each printing their PID.",
      },
      {
        what: "Memory Layout of a Process",
        why: "Understand the Stack, Heap, Data, and Text segments. This is vital for security and performance.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Memory Layout of C Programs", url: "https://www.geeksforgeeks.org/memory-layout-of-c-program/" },
        ],
        practice: "Print the memory addresses of local vs. global variables to see where they live.",
      },
      {
        what: "Static vs Dynamic Linking",
        why: "Learn how programs use libraries (.a vs .so). Crucial for optimizing binary size and updates.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Linking in C", url: "https://www.youtube.com/watch?v=look-up-linking" },
        ],
        practice: "Create your own library and link it statically and dynamically to a test app.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Systems Interactivity",
    level: "Intermediate",
    steps: [
      {
        what: "Signals & Handling",
        why: "Signals are the primary way the OS communicates with your process (e.g., Ctrl+C, SIGSEGV).",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Signal Handling in C", url: "https://www.geeksforgeeks.org/signals-c-language/" },
        ],
        practice: "Write a program that catches SIGINT and asks for a confirmation before exiting.",
      },
      {
        what: "Inter-Process Communication (IPC)",
        why: "To allow separate processes to exchange data. Master Pipes, FIFOs, and Shared Memory.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "IPC in Linux", url: "https://www.tutorialspoint.com/inter_process_communication/index.htm" },
        ],
        practice: "Create two processes that communicate using a named pipe (FIFO).",
      },
      {
        what: "Multithreading with Pthreads",
        why: "To utilize multi-core CPUs. Threads share memory, unlike processes, which requires careful sync.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Pthreads Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=itRLRfuL_PQ" },
        ],
        practice: "Write a multithreaded prime number finder using Pthreads.",
      },
      {
        what: "Synchronization: Mutex & Semaphores",
        why: "To prevent 'Race Conditions'. Synchronization ensures data integrity in multi-threaded apps.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Mutex and Semaphores Explained", url: "https://www.youtube.com/watch?v=look-up-sync" },
        ],
        practice: "Solve the 'Producer-Consumer' problem using a shared buffer and mutexes.",
      },
      {
        what: "Low-level Network Programming (Sockets)",
        why: "The basis of the internet. Learn TCP/UDP socket programming from the ground up.",
        time: "2 Weeks",
        prereqs: "Step 5, Step 11",
        resources: [
          { name: "Beej's Guide to Network Programming", url: "https://beej.us/guide/bgnet/" },
        ],
        practice: "Build a basic TCP echo server and a client that connects to it.",
      },
      {
        what: "The Build System: Make & CMake",
        why: "Manual compilation fails at scale. Automation with Makefiles is industry standard.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Makefile Tutorial", url: "https://makefiletutorial.com/" },
        ],
        practice: "Write a Makefile that compiles multiple .c files and handles header dependencies.",
      },
      {
        what: "Debugging with GDB",
        why: "Professional systems engineers don't use 'printf' for everything. GDB allows deep inspection.",
        time: "5 Days",
        prereqs: "Step 1",
        resources: [
          { name: "GDB Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=Dq8l1v84jVk" },
        ],
        practice: "Debug a segfaulting program and find the exact line using a stack trace.",
      },
      {
        what: "Memory Profiling with Valgrind",
        why: "Memory leaks and invalid accesses are the bane of C. Valgrind detects them automatically.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Valgrind Quick Start", url: "https://valgrind.org/docs/manual/quick-start.html" },
        ],
        practice: "Run your linked list implementation through Valgrind and fix all reported leaks.",
      },
    ],
  },
  {
    title: "Advanced Stage: Kernel & Architecture",
    level: "Advanced",
    steps: [
      {
        what: "Linux Kernel Module Basics",
        why: "To run code in privileged mode (Ring 0). This is how you build drivers and file systems.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Linux Kernel Module Programming Guide", url: "https://sysprog21.github.io/lkmpg/" },
        ],
        practice: "Write a 'Hello World' kernel module and load it using 'insmod'.",
      },
      {
        what: "Device Driver Development",
        why: "To allow the OS to interact with custom hardware (Character, Block, Network devices).",
        time: "3 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "Writing a Character Device Driver", url: "https://www.youtube.com/watch?v=id-char-driver" },
        ],
        practice: "Create a virtual character device that returns 'Hello from Kernel' when read.",
      },
      {
        what: "Modern Systems Programming: Rust",
        why: "Rust provides C-level performance with compile-time memory safety. It's the future of systems code.",
        time: "2 Weeks",
        prereqs: "Step 1",
        resources: [
          { name: "The Rust Programming Language (Book)", url: "https://doc.rust-lang.org/book/" },
        ],
        practice: "Re-implement your multithreaded prime finder in Rust and observe its safety features.",
      },
      {
        what: "Virtualization & Hypervisors (KVM/QEMU)",
        why: "To understand how the cloud works. Learn about CPU virtualization extensions.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Introduction to KVM", url: "https://www.linux-kvm.org/page/Main_Page" },
        ],
        practice: "Run a minimal Linux image using QEMU from the command line.",
      },
      {
        what: "System Security & Hardening",
        why: "Learn about buffer overflows, ROP chains, and OS protections like ASLR and DEP.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Binary Exploitation Course (YouTube)", url: "https://www.youtube.com/playlist?list=PLhixgq36TVW6vv_ZNM-XoxpS8X8Zyt_ka" },
        ],
        practice: "Exploit a simple buffer overflow in a local test program.",
      },
      {
        what: "Distributed System Foundations",
        why: "Systems aren't isolated anymore. Learn about CAP Theorem, RPC, and consensus.",
        time: "2 Weeks",
        prereqs: "Step 13",
        resources: [
          { name: "Distributed Systems (MIT/YouTube)", url: "https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_8E" },
        ],
        practice: "Build a simple client-server key-value store using gRPC.",
      },
      {
        what: "File System Internals",
        why: "Understand how data is physically laid out on disk (Inodes, Superblocks, Journaling).",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Practical File System Design", url: "https://www.nobius.org/~dbg/practical-file-system-design.pdf" },
        ],
        practice: "Write a script that traverses a directory and prints the Inode number for each file.",
      },
      {
        what: "Project Documentation & Soft Skills",
        why: "Systems code is complex. You must communicate architecture and risks clearly to stakeholders.",
        time: "Ongoing",
        prereqs: "None",
        resources: [],
        practice: "Write a high-level design doc for your final capstone project.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Custom UNIX Shell", teaches: "Forking, Execvp, signals, and CLI parsing.", tech: "C, POSIX" },
  { level: "Beginner", title: "High-Performance File Copier", teaches: "Low-level system calls, block buffers.", tech: "C, unistd.h" },
  { level: "Beginner", title: "CPU Info Dash", teaches: "Parsing /proc filesystem, string manipulation.", tech: "C, Bash" },
  { level: "Intermediate", title: "Multi-threaded Web Server", teaches: "Sockets, Pthreads, HTTP protocol basics.", tech: "C, Sockets" },
  { level: "Intermediate", title: "IPC Chat Application", teaches: "Pipes, FIFOs, Shared memory synchronization.", tech: "C, IPC" },
  { level: "Intermediate", title: "Custom Malloc Implementation", teaches: "Heap management, sbrk/mmap, memory pools.", tech: "C" },
  { level: "Intermediate", title: "Process Tree Visualizer", teaches: "Process hierarchy, system diagnostics.", tech: "C, Graphviz" },
  { level: "Advanced", title: "Character Device Kernel Driver", teaches: "Kernel modules, Ring 0 code, I/O registers.", tech: "C, Kbuild" },
  { level: "Advanced", title: "Secure File Encryptor (Rust)", teaches: "Rust safety, AES encryption, bit manipulation.", tech: "Rust" },
  { level: "Advanced", title: "High-Perf Distributed Log Search", teaches: "Networking, parallel search, consensus.", tech: "Rust, gRPC" },
];

const plans = [
  {
    title: "30-Day Fast Track: The C Systems Dev",
    description: "Focus on the absolute core: C, Memory, and the Linux API.",
    schedule: [
      "Days 1-10: C Programming and Memory Mastery.",
      "Days 11-20: System Calls, Processes, and File I/O.",
      "Days 21-30: Build a Custom Shell and learn basic Git.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Systems Engineer",
    description: "Balanced path covering multithreading, networking, and debugging tools.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Pthreads, IPC, Sockets, and GDB/Valgrind.",
      "Days 46-60: Build a Multithreaded Server and learn Build systems (Make).",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Kernel & Architecture Pro",
    description: "Comprehensive path including Kernel dev, Rust, and Security.",
    schedule: [
      "Days 1-30: Core C & Linux fundamentals.",
      "Days 31-60: Professional Multithreading and Networking.",
      "Days 61-90: Kernel Modules, Rust interop, and Security hardening.",
    ]
  }
];

const interviewTopics = [
  "Difference between a Process and a Thread.",
  "How does 'malloc' work under the hood? (sbrk/mmap).",
  "Explain the difference between a mutex and a semaphore.",
  "What happens during a context switch?",
  "Describe the TCP 3-way handshake in detail.",
  "What is an Inode in a Linux filesystem?",
  "How do you prevent a deadlock in a multithreaded app?",
  "What is the difference between a stack overflow and a heap overflow?",
  "Explain the significance of the 'volatile' keyword in C.",
  "Describe the Ring 0 vs Ring 3 CPU protection model.",
];

const codingQuestions = [
  { question: "Implement a thread-safe circular buffer in C.", topic: "Sync" },
  { question: "Write a function to detect memory leaks manually (mock).", topic: "Memory" },
  { question: "Implement a basic version of 'ls -l' using system calls.", topic: "File API" },
  { question: "Write a program to reverse a linked list using only pointers.", topic: "C Logic" },
];

const mcqs = [
  { question: "Which system call is used to create a new process?", options: ["exec()", "fork()", "spawn()", "new()"], answer: "fork()" },
  { question: "What is the size of a pointer on a 64-bit system?", options: ["4 bytes", "8 bytes", "16 bytes", "Depends on OS"], answer: "8 bytes" },
  { question: "Which protocol is stateless?", options: ["TCP", "UDP", "FTP", "SSH"], answer: "UDP" },
];

const mistakes = [
  "Ignoring warnings: Compilers catch memory errors before you do.",
  "Not freeing memory: malloc() without free() is a time-bomb.",
  "Using 'gets()': It is insecure; use 'fgets()' instead.",
  "Hardcoding buffer sizes: Leads to inevitable buffer overflows.",
  "Neglecting 'errno': System calls return codes; check them!",
  "Thinking threads are free: They add massive complexity and overhead.",
  "Ignoring Big-Endian vs Little-Endian in network code.",
  "Not using a debugger: Printf is too slow for race conditions.",
  "Ignoring the documentation: Man pages are your best friend.",
  "Writing Java-style C: Systems code requires manual control, not abstractions.",
];

export default function SystemProgrammerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            System Programmer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of building the foundation of modern computing. From manual memory management and process synchronization to kernel drivers and high-performance networking.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to roadmaps
          </Link>
        </Button>

        {stages.map((stage, sIdx) => (
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
            <CardDescription>Build your portfolio with these 10 hands-on system projects.</CardDescription>
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
            <CardDescription>Master the topics and challenges required for senior system roles.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding Challenges</h3>
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
                    {['C', 'Rust', 'Linux Kernel', 'System Calls', 'Pthreads', 'IPC', 'Sockets', 'Memory Management', 'x86/ARM', 'GDB', 'CMake', 'Distributed Systems'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide high-quality benchmark results for your optimized code.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include detailed architecture diagrams in your GitHub READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with 'Valgrind' and 'GDB' debugging.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Digital Backbone</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            System programming is the ultimate mastery of the machine. You aren't just using tools; you are building them. Stay consistent, read the manual (man pages are your friend!), and never stop asking "How does this actually work?". Your journey to becoming a world-class system engineer starts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Build System Projects
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
