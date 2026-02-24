
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
  Monitor,
  Code,
  Search,
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
  Terminal,
  Layout,
  FileCode,
  Package,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Logic & UI Foundations",
    level: "Beginner",
    steps: [
      {
        what: "C# Language Fundamentals",
        why: "C# is the primary language for professional desktop development via the .NET ecosystem.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "C# Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=GhQdlIFylQ8" },
          { name: "C# Documentation (Microsoft)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
        ],
        practice: "Solve 20 logic problems using C# console applications. Focus on data types and loops.",
      },
      {
        what: "Object-Oriented Programming (OOP) in C#",
        why: "Desktop frameworks are heavily class-based. You must understand Classes, Inheritance, and Interfaces.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "OOP in C# Explained", url: "https://www.youtube.com/watch?v=Ej_02ICOIgs" },
        ],
        practice: "Model a 'Library System' with classes for Books, Members, and Loans.",
      },
      {
        what: "Windows Forms (WinForms) Basics",
        why: "The simplest entry point into Windows desktop UI. Great for learning event-driven programming.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "WinForms for Beginners", url: "https://www.youtube.com/watch?v=mhr3Z8_vXIA" },
        ],
        practice: "Build a simple 'Login Form' that validates user credentials against hardcoded values.",
      },
      {
        what: "Event-Driven Programming",
        why: "Desktop apps respond to user actions (clicks, key presses). Mastering event handlers is vital.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Events and Delegates in C#", url: "https://www.youtube.com/watch?v=jQgwEsJISy0" },
        ],
        practice: "Create a 'Drawing App' where a circle follows the mouse cursor on a canvas.",
      },
      {
        what: "UI Layout & Standard Controls",
        why: "Learn to use Panels, Grids, and Containers to create organized, resizable user interfaces.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "WinForms Layout Guide", url: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/controls/layout" },
        ],
        practice: "Build a 'Calculator' with buttons arranged in a grid that handles resizing correctly.",
      },
      {
        what: "File System Operations",
        why: "Desktop apps often interact with the local machine to save settings or process documents.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "File I/O in C#", url: "https://www.youtube.com/watch?v=scS6_XREao8" },
        ],
        practice: "Build a 'Notepad Clone' that can Open, Edit, and Save text files to the disk.",
      },
      {
        what: "Exception Handling for Desktop",
        why: "Desktop apps run on local machines; you must handle crashes and show user-friendly error dialogs.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "C# Try-Catch Guide", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/exception-handling" },
        ],
        practice: "Add robust error handling to your Notepad app to catch 'File Not Found' or 'Permission Denied' errors.",
      },
      {
        what: "Version Control (Git)",
        why: "Essential for tracking changes and collaborating. Industry standard for all developers.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Git for Professionals", url: "https://www.youtube.com/watch?v=Uszj_k0DGsg" },
        ],
        practice: "Initialize a Git repo for your projects and push them to GitHub with a clean README.",
      },
    ],
  },
  {
    title: "Intermediate Stage: WPF & MVVM Pattern",
    level: "Intermediate",
    steps: [
      {
        what: "WPF & XAML Basics",
        why: "Windows Presentation Foundation (WPF) is the modern standard for Windows. XAML is the language for UI design.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "WPF Full Course (YouTube)", url: "https://www.youtube.com/watch?v=Vjldip84CXQ" },
          { name: "XAML Overview", url: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/" },
        ],
        practice: "Recreate your Calculator UI using XAML instead of the visual designer.",
      },
      {
        what: "The MVVM Pattern",
        why: "Model-View-ViewModel is the mandatory architecture for professional .NET desktop apps. It separates UI from logic.",
        time: "2 Weeks",
        prereqs: "Step 9",
        resources: [
          { name: "MVVM Pattern Explained", url: "https://www.youtube.com/watch?v=EnofreVInps" },
        ],
        practice: "Build a 'To-Do List' where the tasks are stored in a ViewModel, not directly in the UI code-behind.",
      },
      {
        what: "Data Binding & Commands",
        why: "The 'magic' of WPF. Data binding automatically syncs your data with the UI without manual updates.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "WPF Data Binding Tutorial", url: "https://www.youtube.com/watch?v=9ia_E6XInXQ" },
        ],
        practice: "Implement a 'Search Bar' that filters a list of items in real-time as you type using Data Binding.",
      },
      {
        what: "SQLite for Local Storage",
        why: "Desktop apps need lightweight databases to store large amounts of structured data locally.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "SQLite with C# Tutorial", url: "https://www.youtube.com/watch?v=ayp3tHEkRc0" },
        ],
        practice: "Create a 'Personal Finance Tracker' that saves income and expenses to a local SQLite database.",
      },
      {
        what: "Asynchronous Programming (Async/Await)",
        why: "Crucial for desktop apps. Long-running tasks (like DB queries) must run in the background to prevent the UI from freezing.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Async/Await in C#", url: "https://www.youtube.com/watch?v=2moh18sh5p4" },
        ],
        practice: "Modify your Finance Tracker to load data asynchronously, showing a loading spinner while the DB is busy.",
      },
      {
        what: "Styling & Custom Templates",
        why: "To move beyond default looks. Learn to use Styles, ControlTemplates, and Resources for a unique brand identity.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "WPF Styling & Skinning", url: "https://www.youtube.com/watch?v=look-up-wpf-styles" },
        ],
        practice: "Create a custom-styled button that changes color and glows when the mouse hovers over it.",
      },
      {
        what: "Consuming REST APIs",
        why: "Desktop apps often act as clients for web services. Learn to use HttpClient to fetch data.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Rest API with C#", url: "https://www.youtube.com/watch?v=Z_vwa69ljTo" },
        ],
        practice: "Build a 'Weather Desktop Widget' that fetches live weather data from an online API.",
      },
      {
        what: "Unit Testing for Desktop",
        why: "To ensure your ViewModel logic is correct and won't break during updates. Learn xUnit or MSTest.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Unit Testing C#", url: "https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test" },
        ],
        practice: "Write test cases for your Finance Tracker's calculation logic.",
      },
    ],
  },
  {
    title: "Advanced Stage: Distribution & Multi-Platform",
    level: "Advanced",
    steps: [
      {
        what: ".NET MAUI (Cross-platform)",
        why: "The successor to Xamarin. Build apps for Windows, macOS, Android, and iOS from a single C# codebase.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "NET MAUI Full Course", url: "https://www.youtube.com/watch?v=DuNLR_NJv8U" },
        ],
        practice: "Port your To-Do app to .NET MAUI so it runs on both Windows and a mobile simulator.",
      },
      {
        what: "Multi-threading & Thread Safety",
        why: "To handle complex parallel processing without causing 'Race Conditions' or 'Deadlocks'.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Threading in C# Guide", url: "https://www.youtube.com/watch?v=look-up-csharp-threading" },
        ],
        practice: "Build a 'File Hash Checker' that calculates MD5 hashes for multiple files simultaneously using multiple threads.",
      },
      {
        what: "Native System APIs (Win32 Interop)",
        why: "To access deep OS features like system trays, global hotkeys, or registry keys not covered by standard .NET libraries.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "P/Invoke.net", url: "https://www.pinvoke.net/" },
        ],
        practice: "Create a 'System Tray App' that minimizes to the clock area and shows notifications.",
      },
      {
        what: "Performance Profiling & Memory Leaks",
        why: "Desktop apps can stay open for weeks. You must identify memory leaks using the Visual Studio Profiler.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling .NET Apps", url: "https://learn.microsoft.com/en-us/visualstudio/profiling/profiling-feature-tour" },
        ],
        practice: "Use the Memory Profiler to find and fix a simulated memory leak in a large project.",
      },
      {
        what: "Packaging & Installers (MSIX)",
        why: "To get your app into users' hands. Learn to create installers and handle auto-updates with AppInstaller.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "MSIX Packaging Guide", url: "https://learn.microsoft.com/en-us/windows/msix/overview" },
        ],
        practice: "Create a signed installer for your Finance Tracker and test it on a clean virtual machine.",
      },
      {
        what: "Modern Cross-platform (Tauri / Rust)",
        why: "The newest alternative to Electron. It uses Rust for performance and system access, with a web frontend.",
        time: "2 Weeks",
        prereqs: "JS/TS Basics",
        resources: [
          { name: "Tauri Introduction", url: "https://tauri.app/v1/guides/getting-started/setup/" },
        ],
        practice: "Build a 'Markdown Editor' using Tauri and a web framework like React.",
      },
      {
        what: "CI/CD for Desktop Apps",
        why: "To automate the build, test, and signing process every time you push code.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "GitHub Actions for .NET", url: "https://learn.microsoft.com/en-us/dotnet/architecture/devops-for-aspnet-developers/actions" },
        ],
        practice: "Set up a GitHub Action that builds your WPF app and uploads the EXE as an artifact.",
      },
      {
        what: "Security & Code Signing",
        why: "Protect users from malware and ensure your app isn't flagged as 'Untrusted' by Windows SmartScreen.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Code Signing Overview", url: "https://learn.microsoft.com/en-us/windows/win32/seccrypto/code-signing" },
        ],
        practice: "Research how to obtain a code-signing certificate and the process of signing a binary.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Scientific Calculator", teaches: "Math logic, Grid layout, and event handling.", tech: "C#, WinForms" },
  { level: "Beginner", title: "Markdown-capable Notepad", teaches: "File I/O, string parsing, and menu systems.", tech: "C#, WinForms" },
  { level: "Beginner", title: "Stopwatch & Timer Suite", teaches: "Periodic UI updates and thread-based timing.", tech: "C#" },
  { level: "Intermediate", title: "Personal Finance Manager", teaches: "SQLite, MVVM architecture, and data binding.", tech: "C#, WPF, SQLite" },
  { level: "Intermediate", title: "Desktop RSS/News Reader", teaches: "Networking (HttpClient), XML/JSON parsing, and async loading.", tech: "C#, WPF" },
  { level: "Intermediate", title: "Image Browser & Resizer", teaches: "Media processing, multi-threading, and canvas rendering.", tech: "C#, WPF" },
  { level: "Intermediate", title: "System Task Manager Clone", teaches: "System diagnostics APIs and real-time monitoring.", tech: "C#, WPF" },
  { level: "Advanced", title: "Secure File Encryptor", teaches: "Cryptography (AES), byte-level file handling, and security UI.", tech: "C#, .NET MAUI" },
  { level: "Advanced", title: "Cross-platform Markdown Editor", teaches: "Rust interop, webview security, and packaging.", tech: "Tauri, Rust, React" },
  { level: "Advanced", title: "Video Converter (FFmpeg Wrapper)", teaches: "Process management, inter-process communication, and progress tracking.", tech: "C#, WPF, FFmpeg" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Tool Builder",
    description: "Focus on WinForms and core logic to build functional local tools quickly.",
    schedule: [
      "Days 1-7: C# Basics and OOP logic.",
      "Days 8-15: WinForms UI, Events, and Layouts.",
      "Days 16-23: File I/O and building the Notepad project.",
      "Days 24-30: Exception handling and Git distribution.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Modern Developer",
    description: "Balanced path covering WPF, MVVM, and local databases.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: WPF, XAML, and MVVM architectural deep dive.",
      "Days 41-60: SQLite integration, Async/Await, and 2 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Architect",
    description: "Comprehensive path including multi-platform frameworks and distribution.",
    schedule: [
      "Days 1-30: Core logic and WPF fundamentals.",
      "Days 31-60: Professional Architecture (MVVM), Testing, and SQLite.",
      "Days 61-90: MAUI Cross-platform, Tauri, Packaging, and Job Readiness.",
    ]
  }
];

const interviewTopics = [
  "The Model-View-ViewModel (MVVM) architecture.",
  "Difference between WinForms and WPF.",
  "Managed vs Unmanaged code in .NET.",
  "How to keep the UI thread responsive during long tasks.",
  "XAML Data Binding and Dependency Properties.",
  "The life cycle of a desktop application.",
  "Handling High DPI and different screen resolutions.",
  "Local data persistence options (SQLite vs File vs Registry).",
  "Software distribution patterns: Installers vs Portable EXEs.",
  "Security considerations for desktop applications.",
];

const codingQuestions = [
  { question: "Implement a thread-safe Singleton pattern in C#.", topic: "Design Patterns" },
  { question: "Write a method to recursively find all files of a specific type in a directory.", topic: "File I/O" },
  { question: "How would you implement INotifyPropertyChanged for a ViewModel property?", topic: "WPF/MVVM" },
  { question: "Perform a thread-safe update to a UI element from a background task.", topic: "Concurrency" },
];

const mcqs = [
  { question: "Which property in XAML is used to bind a ViewModel property to a UI element?", options: ["Data", "Link", "Binding", "Source"], answer: "Binding" },
  { question: "What is the primary advantage of MSIX over traditional installers?", options: ["Faster download", "Cleaner uninstalls/updates", "No need for admin rights", "Smallest file size"], answer: "Cleaner uninstalls/updates" },
  { question: "Which keyword is used to wait for a Task to complete without blocking the thread?", options: ["wait", "yield", "await", "defer"], answer: "await" },
];

const mistakes = [
  "Blocking the UI Thread: Doing heavy work on the main thread makes the app 'Not Responding'.",
  "Hardcoding UI Sizes: Use Grids and StackPanels so the app looks good on all screen sizes.",
  "Ignoring MVVM: Writing all code in the code-behind file makes testing and maintenance impossible.",
  "Not Disposing Resources: Failing to close DB connections or file streams leads to memory leaks.",
  "Poor Error Feedback: Showing a raw stack trace to a user instead of a helpful message.",
  "Neglecting Accessibility: Forgetting to add labels for screen readers or tab-indexing for keyboards.",
  "Hardcoding Strings: Makes translating the app (Internationalization) extremely difficult later.",
  "Ignoring High DPI: The app will look blurry on modern high-resolution monitors.",
  "Massive Installer Sizes: Including unnecessary dependencies makes the app a pain to download.",
  "Lack of Auto-Updates: Users will be stuck on buggy versions if you don't automate updates.",
];

export default function DesktopDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Monitor className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            Desktop Application Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive guide to mastering the craft of building powerful, native, and cross-platform software for the computer desktop.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to roadmaps
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your portfolio.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream desktop developer role.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Profile Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['C#', 'WPF', 'WinForms', 'MVVM', 'XAML', 'SQLite', '.NET MAUI', 'Multi-threading', 'Async/Await', 'Code Signing', 'MSIX', 'Tauri', 'Rust', 'Native APIs'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide high-quality GIFs or video recordings of your app interfaces in GitHub READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose WPF over WinForms').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include 'Release' sections in GitHub with downloadable EXE/DMG/AppImage files.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Core of Computing</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Desktop applications are the workhorses of productivity. Mastering C# and modern cross-platform tools gives you the ability to build high-performance software that feels like home on any OS. Stay consistent, keep building even when the threading gets tough, and always stay curious. The world runs on desktop software—go build the next essential tool!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Desktop Apps
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
