
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
  Monitor,
  Workflow,
  CheckCircle,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowLeft,
  ArrowRight,
  Database,
  History,
  Binary,
  Settings,
  HardDrive,
  Activity,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Machine Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Computer Architecture Basics",
        why: "To understand how the CPU, Registers, and RAM interact. Assembly is just a human-readable way to write machine code.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "How a CPU Works (YouTube)", url: "https://www.youtube.com/watch?v=cNN_tTXABUA" },
          { name: "Binary & Hexadecimal Guide", url: "https://www.mathsisfun.com/binary-number-system.html" },
        ],
        practice: "Explain the fetch-decode-execute cycle. Convert decimal 255 to Binary and Hex.",
      },
      {
        what: "Tooling: NASM & GDB Setup",
        why: "You need an assembler (NASM) to turn code into binaries and a debugger (GDB) to see what's happening in the CPU.",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "NASM Official Documentation", url: "https://www.nasm.us/docs.php" },
          { name: "Assembly Setup Guide", url: "https://asmtutor.com/#lesson1" },
        ],
        practice: "Install NASM and Binutils. Assemble a 'do-nothing' program and link it.",
      },
      {
        what: "Your First 'Hello World'",
        why: "To learn the structure of an assembly file (.data, .bss, .text sections) and the Linux entry point (_start).",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Hello World in x86-64", url: "https://www.youtube.com/watch?v=HgEGAaYdABA" },
        ],
        practice: "Write, assemble, and run a program that prints 'Hello, Assembly' to the terminal.",
      },
      {
        what: "CPU Registers Deep Dive",
        why: "Registers are the CPU's high-speed 'scratchpads'. You must master RAX, RBX, RCX, RDX, and their 32/16/8-bit parts.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "x86-64 Register Guide", url: "https://www.cs.uaf.edu/2017/fall/cs301/lecture/09_11_registers.html" },
        ],
        practice: "Write a script that moves different values into registers and view them in GDB.",
      },
      {
        what: "Moving Data (MOV & LEA)",
        why: "To transfer data between registers, memory, and constants. This is the most common operation in Assembly.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "The MOV Instruction", url: "https://www.tutorialspoint.com/assembly_programming/assembly_variables.htm" },
        ],
        practice: "Practice moving data from a variable in memory into RAX and back.",
      },
      {
        what: "Basic Arithmetic (ADD, SUB, INC, DEC)",
        why: "Calculations happen in registers. You need to handle carries and overflows using the FLAGS register.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Arithmetic Instructions", url: "https://www.tutorialspoint.com/assembly_programming/assembly_arithmetic_instructions.htm" },
        ],
        practice: "Write a program that adds two numbers and stores the result in a memory variable.",
      },
      {
        what: "Control Flow: Jumps & Comparisons",
        why: "To create logic. Master CMP (Compare) and JMP/JE/JNE (Jump) to build 'if' statements and loops.",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Conditional Jumps in x86", url: "https://www.youtube.com/watch?v=look-up-asm-jumps" },
        ],
        practice: "Write an 'is_positive' check that prints 'Yes' if a register is > 0.",
      },
      {
        what: "The Stack (PUSH & POP)",
        why: "The stack is a LIFO structure used for temporary storage and passing function arguments.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Understanding the Stack", url: "https://www.youtube.com/watch?v=look-up-asm-stack" },
        ],
        practice: "Push three numbers onto the stack and pop them in reverse order to verify LIFO behavior.",
      },
      {
        what: "Functions & Procedures (CALL & RET)",
        why: "To organize code. Learn how CALL pushes the return address and RET pops it to resume execution.",
        time: "4 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Functions in Assembly", url: "https://asmtutor.com/#lesson6" },
        ],
        practice: "Create a reusable function that calculates the square of a number in RAX.",
      },
      {
        what: "System Calls (Linux x64)",
        why: "To interact with the OS. Master sys_read, sys_write, and sys_exit using the syscall table.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Linux Syscall Table (x64)", url: "https://blog.rchapman.org/posts/Linux_System_Call_Table_for_x86_64/" },
        ],
        practice: "Write a program that takes user input (name) and prints it back with a greeting.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Logic & Memory Mastery",
    level: "Intermediate",
    steps: [
      {
        what: "Multiplication & Division (MUL, DIV)",
        why: "These instructions are more complex as they use specific registers (RAX/RDX) for input/output.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Advanced Arithmetic in ASM", url: "https://www.tutorialspoint.com/assembly_programming/assembly_arithmetic_instructions.htm" },
        ],
        practice: "Implement a program that performs long division and handles the remainder.",
      },
      {
        what: "Bitwise Operations (AND, OR, XOR, NOT)",
        why: "Essential for low-level optimizations and flags. XORing a register with itself is the standard way to clear it.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Bitwise Logic in Assembly", url: "https://www.youtube.com/watch?v=look-up-bitwise-asm" },
        ],
        practice: "Implement an encryption scheme using XOR (one-time pad).",
      },
      {
        what: "Addressing Modes (Indirect, Indexed)",
        why: "To handle complex data structures like arrays and structs by calculating memory offsets on the fly.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Addressing Modes Explained", url: "https://www.geeksforgeeks.org/addressing-modes/" },
        ],
        practice: "Sum all elements in an array of integers using indexed addressing.",
      },
      {
        what: "String Instructions (MOVS, SCAS, CMPS)",
        why: "For high-performance text processing. These instructions use the RSI and RDI registers.",
        time: "5 Days",
        prereqs: "Step 13",
        resources: [
          { name: "String Processing in ASM", url: "https://www.tutorialspoint.com/assembly_programming/assembly_strings.htm" },
        ],
        practice: "Write a 'strlen' function using the SCASB instruction.",
      },
      {
        what: "Macros & Preprocessor",
        why: "To reduce boilerplate code and create reusable assembly snippets.",
        time: "4 Days",
        prereqs: "Step 9",
        resources: [
          { name: "NASM Macros", url: "https://www.nasm.us/doc/nasmdoc4.html" },
        ],
        practice: "Create a 'print_string' macro that takes a label and length as arguments.",
      },
      {
        what: "Interfacing with C",
        why: "Professional systems code is often a mix of C and Assembly. Learn the ABI (Calling Convention).",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "Mixing C and Assembly", url: "https://www.youtube.com/watch?v=look-up-c-asm-interop" },
        ],
        practice: "Write an Assembly function that is called from a C program to perform a fast calculation.",
      },
      {
        what: "Debugging with GDB & Layout Regs",
        why: "To find subtle logic bugs. Master 'info registers' and 'x/gx' to inspect memory.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "GDB for Assembly", url: "https://www.youtube.com/watch?v=svG6S76STHA" },
        ],
        practice: "Debug a program that segfaults and identify exactly which register contains the invalid address.",
      },
      {
        what: "Binary Floating Point (FPU/SSE)",
        why: "Computers handle decimals differently than integers. Learn the XMM registers and floating point math.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Introduction to x64 Floating Point", url: "https://www.raywenderlich.com/books/assembly-unfolding-the-mystery" },
        ],
        practice: "Calculate the area of a circle using floating point instructions.",
      },
      {
        what: "Stack Frames & Local Variables",
        why: "To understand how high-level languages manage memory inside functions using RBP and RSP.",
        time: "1 Week",
        prereqs: "Step 8, Step 9",
        resources: [
          { name: "Stack Frames Explained", url: "https://www.youtube.com/watch?v=look-up-stack-frames" },
        ],
        practice: "Manually set up a stack frame with space for 3 local integers and clean it up correctly.",
      },
      {
        what: "Recursion in Assembly",
        why: "To understand the absolute limits of the stack and how recursive calls are structured at the lowest level.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "Recursive Functions in ASM", url: "https://www.youtube.com/watch?v=look-up-asm-recursion" },
        ],
        practice: "Implement the Fibonacci sequence or Factorial calculation recursively.",
      },
    ],
  },
  {
    title: "Advanced Stage: Performance & Systems",
    level: "Advanced",
    steps: [
      {
        what: "SIMD Optimization (SSE/AVX)",
        why: "Single Instruction Multiple Data. Process 4 or 8 numbers in a single CPU cycle. This is the 'Speed' of Assembly.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "SIMD with x86-64", url: "https://www.intel.com/content/www/us/en/developer/articles/technical/introduction-to-intel-advanced-vector-extensions.html" },
        ],
        practice: "Optimize an image grayscale filter or large array sum using AVX instructions.",
      },
      {
        what: "Buffer Overflows & Security",
        why: "To understand how vulnerable code is exploited at the machine level (Return-Oriented Programming).",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "Binary Exploitation (YouTube)", url: "https://www.youtube.com/playlist?list=PLhixgq36TVW6vv_ZNM-XoxpS8X8Zyt_ka" },
        ],
        practice: "Write a vulnerable C program and craft a simple 'overflow' to change its execution flow.",
      },
      {
        what: "Operating System Bootloaders",
        why: "To see how a computer starts. Writing a 16-bit bootsector that switches to 32/64-bit protected mode.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Write your own OS (GitHub)", url: "https://github.com/cfenollosa/os-tutorial" },
        ],
        practice: "Write a 512-byte bootloader that prints 'OS Loaded' and loops infinitely.",
      },
      {
        what: "Inline Assembly in C/C++",
        why: "To inject performance-critical assembly directly into your C projects without separate files.",
        time: "4 Days",
        prereqs: "Step 16",
        resources: [
          { name: "GCC Inline Assembly", url: "https://gcc.gnu.org/onlinedocs/gcc/Using-Assembly-Language-with-C.html" },
        ],
        practice: "Use `asm` blocks in C to read the CPU timestamp counter (RDTSC).",
      },
      {
        what: "Reverse Engineering Basics",
        why: "To understand how binary software works without source code. Essential for security and legacy maintenance.",
        time: "2 Weeks",
        prereqs: "All previous",
        resources: [
          { name: "Reverse Engineering Tutorial", url: "https://github.com/mytechnotalent/Reverse-Engineering" },
        ],
        practice: "Use a tool like Objdump or Ghidra to analyze a compiled binary and reconstruct its logic.",
      },
      {
        what: "Multi-core & Atomic Operations",
        why: "To handle shared memory across CPUs without race conditions using LOCK prefixes.",
        time: "1 Week",
        prereqs: "Intermediate Concurrency",
        resources: [
          { name: "Atomic Ops in x86", url: "https://en.wikipedia.org/wiki/Load-link/store-conditional" },
        ],
        practice: "Write a thread-safe incrementer using the `LOCK INC` instruction.",
      },
      {
        what: "ARM Architecture (Intro)",
        why: "The world is moving to ARM (Apple Silicon, Raspberry Pi). Understanding the differences (RISC vs CISC) is vital.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "ARM Assembly for Beginners", url: "https://www.youtube.com/watch?v=look-up-arm-asm" },
        ],
        practice: "Compare a simple loop in x86-64 vs ARM64 assembly.",
      },
      {
        what: "Building a Disassembler",
        why: "To master the binary format of instructions. Learn how bytes are parsed into opcodes.",
        time: "2 Weeks",
        prereqs: "Step 25",
        resources: [
          { name: "How to build a Disassembler", url: "https://www.youtube.com/watch?v=id-disasm" },
        ],
        practice: "Write a Python script that reads a .bin file and identifies basic MOV and JMP instructions.",
      },
      {
        what: "Cache Optimization & Branch Prediction",
        why: "High-performance code respects the CPU cache. Learn how memory alignment affects speed.",
        time: "1 Week",
        prereqs: "Step 21",
        resources: [
          { name: "What Every Programmer Should Know About Memory", url: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf" },
        ],
        practice: "Measure the speed difference between row-major and column-major array traversal in Assembly.",
      },
      {
        what: "Final Mastery: Custom JIT Compiler",
        why: "The ultimate systems project. Generate and execute machine code at runtime.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [
          { name: "How JIT Compilers Work", url: "https://eli.thegreenplace.net/2013/11/05/how-to-to-jit-in-python-with-mmap" },
        ],
        practice: "Write a program that takes a simple mathematical string (e.g. '2+3') and compiles it to machine code to execute.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Math Logic Calculator", teaches: "Arithmetic, Syscalls, User Input.", tech: "x86-64, NASM" },
  { level: "Beginner", title: "String Reverser", teaches: "Pointers, Loops, Memory sections.", tech: "NASM, GDB" },
  { level: "Beginner", title: "Binary-to-Hex Converter", teaches: "Bit manipulation, character mapping.", tech: "NASM" },
  { level: "Intermediate", title: "Fast Image Grayscale", teaches: "File I/O, Buffer processing, Performance.", tech: "Assembly, C wrapper" },
  { level: "Intermediate", title: "Base64 Encoder/Decoder", teaches: "Bitwise logic, complex indexing.", tech: "x86-64" },
  { level: "Intermediate", title: "Keylogger Prototype (Ethical)", teaches: "Interrupts, OS hooks, IO manipulation.", tech: "Assembly, Windows API / Linux Dev" },
  { level: "Intermediate", title: "Command-Line Shell Clone", teaches: "Process forking, Exec syscalls.", tech: "NASM, POSIX" },
  { level: "Advanced", title: "Simple Bootloader OS", teaches: "16-bit real mode, Interrupts, CPU switching.", tech: "NASM, QEMU" },
  { level: "Advanced", title: "SIMD Matrix Library", teaches: "AVX instructions, Cache alignment.", tech: "NASM, AVX-512" },
  { level: "Advanced", title: "Brainfuck-to-ASM Compiler", teaches: "Compiler design, Assembly generation.", tech: "Python/Rust, NASM" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on syntax, registers, and basic syscalls to understand binary logic.",
    schedule: [
      "Days 1-7: CPU Architecture, Tooling, and Hello World.",
      "Days 8-15: Registers, MOV, and Basic Arithmetic.",
      "Days 16-23: Jumps, Comparisons, and basic Loops.",
      "Days 24-30: Build the 'Math Calculator' and learn GDB basics.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Systems Dev",
    description: "Balanced path covering memory management, C interop, and strings.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Addressing modes, C interop, and the Stack.",
      "Days 46-60: Build 'Base64 Encoder' and explore FPU/Floating point.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Low-Level Architect",
    description: "Comprehensive path including SIMD, Security, and Bootloaders.",
    schedule: [
      "Days 1-30: Core Assembly and Memory fundamentals.",
      "Days 31-60: Professional C interop, Debugging, and advanced logic.",
      "Days 61-90: SIMD Optimization, Reverse Engineering, and final Bootloader project.",
    ]
  }
];

const interviewTopics = [
  "General Purpose Registers vs. Segment Registers.",
  "Difference between Little-Endian and Big-Endian.",
  "The Calling Convention (ABI) for x86-64 Linux.",
  "Stack vs. Heap at the binary level.",
  "How does a Buffer Overflow work?",
  "What is the role of the FLAGS register?",
  "RISC (ARM) vs CISC (x86) architectures.",
  "Virtual Memory and Page Tables (High Level).",
  "Explain the difference between a syscall and a function call.",
  "How does SIMD improve performance?",
];

const codingQuestions = [
  { question: "Swap two register values without using a third register (XOR trick).", topic: "Bitwise" },
  { question: "Implement 'memcpy' using string instructions (MOVSB).", topic: "Strings" },
  { question: "Write code to find the highest bit set in a register.", topic: "Logic" },
  { question: "Write a recursive Fibonacci function in Assembly.", topic: "Stack/Functions" },
];

const mcqs = [
  { question: "Which register is typically used for the return value of a function?", options: ["RBX", "RCX", "RAX", "RDX"], answer: "RAX" },
  { question: "Which instruction is used to compare two values?", options: ["MOV", "CMP", "JMP", "ADD"], answer: "CMP" },
  { question: "What is the standard size of a 'word' in a 64-bit architecture?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], answer: "8 bytes" },
];

const mistakes = [
  "Forgetting the NULL terminator when handling strings.",
  "Mismatched PUSH and POP operations (Stack corruption).",
  "Using 'MOV' instead of 'LEA' for address calculation.",
  "Ignoring the difference between Signed and Unsigned jumps (JG vs JA).",
  "Not checking for NULL pointers before dereferencing.",
  "Hardcoding syscall numbers instead of using constants.",
  "Writing Java-style complex logic instead of simple, atomic steps.",
  "Ignoring alignment (memory addresses should be multiples of 8 or 16).",
  "Not using a debugger (GDB) and relying only on 'print' debugging.",
  "Over-optimizing before the code even works correctly.",
];

export default function AssemblyRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Binary className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Assembly Language Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the "Ground Truth" of computing. From bit-flipping and register manipulation to building OS bootloaders and high-performance SIMD pipelines.
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
            <CardDescription>Build your portfolio with these 10 hands-on systems projects.</CardDescription>
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
            <CardDescription>Master the topics required to land a role in Security, Embedded, or High-Perf computing.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Binary Logic Challenges</h3>
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
                    {['x86-64', 'ARM64', 'NASM', 'GDB', 'Reverse Engineering', 'SIMD', 'AVX-512', 'Memory Management', 'Syscalls', 'Kernel Modules', 'Binary Exploitation', 'Firmware'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><HardDrive className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide 'Before and After' optimization metrics for Assembly optimizations.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include detailed GDB session screenshots in your GitHub READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with 'C/C++ Interoperability'.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Hardware Soul</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Assembly language is the ultimate mastery of the machine. You aren't just using tools; you are communicating with the silicon itself. Stay consistent, read the manuals, and never stop asking "How does the CPU actually do this?". Your journey to becoming a low-level legend starts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Binary Projects
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
