
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
  Smartphone,
  Layers3,
  Box,
  Key,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Syntax & Messaging Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Objective-C & Xcode",
        why: "Xcode is the essential IDE for Apple development. Understanding the 'Messaging' philosophy (Smalltalk style) distinguishes Objective-C from C++.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Objective-C for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=s2aW976-jrI" },
          { name: "Apple: Programming with Objective-C", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html" },
        ],
        practice: "Install Xcode. Create a 'Command Line Tool' project and print 'Hello, Objective-C!' using NSLog.",
      },
      {
        what: "C Foundations for Objective-C",
        why: "Objective-C is a strict superset of C. You must master C pointers, primitive types, and basic memory concepts.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "C Programming for Beginners", url: "https://www.youtube.com/watch?v=KJgsSAhyaso" },
        ],
        practice: "Write a C-style script in an Objective-C project that calculates prime numbers using pointers.",
      },
      {
        what: "Classes, Objects & Messaging",
        why: "Objective-C uses square bracket syntax [object message] for method calls. This is the heart of the language's dynamic nature.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Objective-C Classes & Objects", url: "https://www.tutorialspoint.com/objective_c/objective_c_classes_objects.htm" },
        ],
        practice: "Create a 'Person' class with name and age fields. Instantiate it and call a 'greet' method using the [obj msg] syntax.",
      },
      {
        what: "Properties (@property & @synthesize)",
        why: "Properties manage access to instance variables. Understanding atomic vs non-atomic and strong vs weak is vital for memory safety.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Declared Properties Guide", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html" },
        ],
        practice: "Define properties for a 'Car' class using different attributes (nonatomic, copy, strong).",
      },
      {
        what: "Methods: Instance vs Class",
        why: "To distinguish between behavior tied to an instance (-) and behavior tied to the class itself (+).",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Defining Classes", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html" },
        ],
        practice: "Add a class method to 'Person' that returns the total count of instances created.",
      },
      {
        what: "Memory Management: ARC Basics",
        why: "Automatic Reference Counting (ARC) handles memory for you, but you must understand 'Retain Cycles' to prevent app crashes.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Transitioning to ARC", url: "https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitionARC/Introduction/Introduction.html" },
        ],
        practice: "Identify a circular reference between a 'User' and an 'Account' object and fix it using 'weak'.",
      },
      {
        what: "Foundation Framework: Collections",
        why: "NSArray, NSDictionary, and NSSet are the workhorses of iOS apps. You must master immutable vs mutable variants.",
        time: "5 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Collections Programming Topics", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html" },
        ],
        practice: "Build a program that stores a list of tasks in an NSMutableArray and filters them.",
      },
      {
        what: "Protocols & Delegates",
        why: "The primary design pattern in Apple's ecosystem. Delegates allow objects to communicate without being tightly coupled.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Protocols & Delegates Explained", url: "https://www.youtube.com/watch?v=look-up-objc-delegates" },
        ],
        practice: "Implement a simple 'DownloadManager' that notifies a delegate when a file download is finished.",
      },
    ],
  },
  {
    title: "Intermediate Stage: App Logic & System Integration",
    level: "Intermediate",
    steps: [
      {
        what: "Categories & Class Extensions",
        why: "To 'add' methods to existing classes (even system ones) without inheritance. A powerful tool for code organization.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Customizing Existing Classes", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html" },
        ],
        practice: "Add a 'isValidEmail' method to the built-in NSString class using a category.",
      },
      {
        what: "Blocks & Closures",
        why: "Blocks are self-contained code segments. They are used extensively for animations, networking, and multi-threading.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "A Short Guide to Objective-C Blocks", url: "http://fuckingblocksyntax.com/" },
        ],
        practice: "Write a function that takes a block as an argument to perform a calculation on an array.",
      },
      {
        what: "Key-Value Coding (KVC) & Observing (KVO)",
        why: "To access properties dynamically and react to data changes automatically. Essential for reactive-style UIs.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "KVC/KVO Introduction", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html" },
        ],
        practice: "Create an object that updates its 'Status' label automatically whenever its 'Progress' property changes.",
      },
      {
        what: "Introduction to UIKit (Views & VCs)",
        why: "To build actual graphical apps. Master UIView and UIViewController lifecycles.",
        time: "2 Weeks",
        prereqs: "Step 8",
        resources: [
          { name: "UIKit Documentation", url: "https://developer.apple.com/documentation/uikit" },
        ],
        practice: "Build a single-screen 'Profile' app with an image, name, and a 'Connect' button.",
      },
      {
        what: "Grand Central Dispatch (GCD)",
        why: "To perform heavy tasks in the background without freezing the UI. Mastery of the 'Main Thread' is critical.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "GCD Deep Dive", url: "https://www.youtube.com/watch?v=id-gcd-objc" },
        ],
        practice: "Fetch a large image in the background and update a UIImageView on the main thread.",
      },
      {
        what: "Networking with NSURLSession",
        why: "To communicate with web APIs. Learn to handle GET/POST requests and JSON serialization.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Networking in Objective-C", url: "https://www.kodeco.com/backend/learn" },
        ],
        practice: "Build an app that fetches and displays a random quote from an online API.",
      },
      {
        what: "Persistence: NSUserDefaults & Plists",
        why: "To save small amounts of user data like settings or themes locally.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Persistent Data in iOS", url: "https://developer.apple.com/documentation/foundation/userdefaults" },
        ],
        practice: "Save the user's last login date and display it on the next app launch.",
      },
      {
        what: "Error Handling (NSError)",
        why: "Objective-C uses 'pass-by-reference' pointers for errors. You must learn to check for nil and handle failure states.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Error Handling Guide", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/ErrorHandling/ErrorHandling.html" },
        ],
        practice: "Implement a file-saving method that returns an NSError if the write fails.",
      },
    ],
  },
  {
    title: "Advanced Stage: Internals & Modernization",
    level: "Advanced",
    steps: [
      {
        what: "Objective-C Runtime & Swizzling",
        why: "To understand how messages are dispatched and how to intercept system calls at runtime. A 'superpower' for debugging.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Objective-C Runtime Reference", url: "https://developer.apple.com/documentation/objectivec/objective-c_runtime" },
        ],
        practice: "Use 'Method Swizzling' to log every time a UIViewController's 'viewWillAppear' is called.",
      },
      {
        what: "Advanced Memory: MRC & Autorelease",
        why: "While ARC is standard, maintaining legacy apps requires knowledge of Manual Retain-Release (MRR) and Autorelease Pools.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Manual Memory Management", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html" },
        ],
        practice: "Disable ARC for a specific file and implement manual 'retain' and 'release' calls.",
      },
      {
        what: "Swift & Objective-C Interoperability",
        why: "Most modern iOS jobs require working in mixed codebases. Learn to use Bridging Headers and @objc markers.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Swift & Obj-C Interop", url: "https://developer.apple.com/documentation/swift/importing-objective-c-into-swift" },
        ],
        practice: "Create a project where a Swift class calls a method from an Objective-C class and vice-versa.",
      },
      {
        what: "Core Data for Large Apps",
        why: "The standard database framework for Apple platforms. Master entities, relationships, and predicate logic.",
        time: "2 Weeks",
        prereqs: "Step 15",
        resources: [
          { name: "Core Data Guide", url: "https://developer.apple.com/documentation/coredata" },
        ],
        practice: "Build a 'Personal Library' app that stores thousands of books with search functionality.",
      },
      {
        what: "Performance Profiling (Instruments)",
        why: "To identify CPU bottlenecks and memory leaks using the professional Xcode tools.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling with Instruments", url: "https://developer.apple.com/documentation/xcode/profiling-your-app-s-performance" },
        ],
        practice: "Run your Library app through the 'Leaks' and 'Time Profiler' instruments to find slow code.",
      },
      {
        what: "Unit & UI Testing (XCTest)",
        why: "Reliability is key for enterprise apps. Learn to write unit tests for your ViewModels and UI tests for user flows.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Testing in Xcode", url: "https://developer.apple.com/documentation/xcode/testing-your-app" },
        ],
        practice: "Write a test suite that verifies the logic of your 'isValidEmail' category.",
      },
      {
        what: "CocoaPods & SPM Distribution",
        why: "To manage and distribute libraries. Learn to create a Podspec and package code for others.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "CocoaPods Guide", url: "https://guides.cocoapods.org/making/making-a-cocoapod.html" },
        ],
        practice: "Package your 'Email Validator' category into a local CocoaPod.",
      },
      {
        what: "Mastery Project: Legacy Modernization",
        why: "To synthesize all skills: Maintenance, Interop, Performance, and Design Patterns.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Take a raw Objective-C open-source app, modernize it with ARC, add unit tests, and bridge it to a new Swift feature.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Finance Calculator", teaches: "C logic, Objective-C classes, and input handling.", tech: "Objective-C, Foundation" },
  { level: "Beginner", title: "Personal Address Book", teaches: "Mutable collections, data types, and NSLog debugging.", tech: "Objective-C" },
  { level: "Beginner", title: "Unit Converter (UIKit)", teaches: "Simple views, view controllers, and delegate patterns.", tech: "Objective-C, UIKit" },
  { level: "Intermediate", title: "Weather Forecast Dashboard", teaches: "NSURLSession, JSON parsing, and async UI updates.", tech: "Objective-C, JSON" },
  { level: "Intermediate", title: "Interactive Todo List", teaches: "KVO, local storage (Plists), and custom protocols.", tech: "Objective-C, Foundation" },
  { level: "Intermediate", title: "RSS News Reader", teaches: "XML parsing, table views, and networking.", tech: "Objective-C, UIKit" },
  { level: "Intermediate", title: "Memory Management Lab", teaches: "ARC, Retain cycles, and weak vs strong.", tech: "Objective-C" },
  { level: "Advanced", title: "Local Database App", teaches: "Core Data, complex relationships, and fetch results controllers.", tech: "Objective-C, Core Data" },
  { level: "Advanced", title: "C-Library Wrapper (FFI)", teaches: "Low-level C interop and custom VAPI-style logic.", tech: "Objective-C, C" },
  { level: "Advanced", title: "Hybrid Swift/Obj-C App", teaches: "Bridging headers, interoperability, and modern build pipelines.", tech: "Objective-C, Swift" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Maintenance Hero",
    description: "Focus on syntax and Foundation to be productive in a legacy codebase quickly.",
    schedule: [
      "Days 1-7: C Foundations, Xcode, and Basic Syntax.",
      "Days 8-15: Classes, Properties, and Memory (ARC).",
      "Days 16-23: Foundation Collections and basic UIKit.",
      "Days 24-30: Build a CLI tool and learn basic debugging.",
    ]
  },
  {
    title: "60-Day Standard Plan: The iOS Engineer",
    description: "Balanced path covering professional app logic and system integration.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Networking, KVO, Blocks, and GCD.",
      "Days 46-60: Core Data basics and building 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Architect",
    description: "Comprehensive path for professional systems, interoperability, and performance roles.",
    schedule: [
      "Days 1-30: Core Language & UI foundations.",
      "Days 31-60: Professional Systems (Testing, Database, Swift Interop).",
      "Days 61-90: Runtime Internals, Swizzling, Performance, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between a Class and a Category.",
  "How does ARC work compared to Garbage Collection?",
  "What is a Retain Cycle and how do you find one?",
  "Explain the significance of 'atomic' vs 'nonatomic'.",
  "What is the 'id' type and how is it different from 'NSObject *'?",
  "Describe the MVC (Model-View-Controller) design pattern.",
  "What is Method Swizzling and when should you use it?",
  "How does the Objective-C runtime handle messaging?",
  "Difference between a protocol and an interface.",
  "How do you bridge Objective-C code to Swift?",
];

const codingQuestions = [
  { question: "Implement a thread-safe Singleton pattern in Objective-C.", topic: "Design Patterns" },
  { question: "Write a function that reverses an array in-place without using 'reverseObjectEnumerator'.", topic: "Collections" },
  { question: "How would you implement a custom Delegate protocol for a network manager?", topic: "Protocols" },
  { question: "Detect if a string is a palindrome using only Foundation methods.", topic: "Strings" },
];

const mcqs = [
  { question: "Which symbol is used to denote a class method?", options: ["-", "+", "*", "@"], answer: "+" },
  { question: "What is the default attribute for a property if not specified?", options: ["strong, atomic", "weak, nonatomic", "strong, nonatomic", "assign, atomic"], answer: "strong, atomic" },
  { question: "Which file extension is used for an Objective-C header file?", options: [".m", ".mm", ".h", ".cpp"], answer: ".h" },
];

const mistakes = [
  "Forgetting the square brackets [] for messaging.",
  "Mixing up '=' (assignment) and '@property' synthesis.",
  "Using 'id' when a specific type would provide better safety.",
  "Tutorial Hell: Reading about UIKit for weeks without writing basic C logic.",
  "Not using 'weak' for delegates, leading to memory leaks.",
  "Forgetting to import header files (.h) into implementation files (.m).",
  "Using legacy 'retain/release' in an ARC-enabled project.",
  "Ignoring compiler warnings about potential nil objects in dictionaries.",
  "Hardcoding strings instead of using NSLocalizedString for translation.",
  "Ignoring the powerful 'Instruments' profiler until the app starts crashing.",
];

export default function ObjectiveCRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Smartphone className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Objective-C Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language that built the iPhone. From Smalltalk-inspired messaging and C foundations to advanced runtime mastery and modern Swift interoperability.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Mobile App Development Languages">
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
            <CardDescription>Apply your knowledge with these 10 hands-on Objective-C projects.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Apple-ecosystem role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Runtime Challenges</h3>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers3 className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Objective-C', 'Foundation', 'UIKit', 'GObject', 'ARC', 'Manual Retain-Release', 'Runtime', 'Swizzling', 'KVC/KVO', 'Grand Central Dispatch', 'Core Data', 'Swift Interop'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with 'Legacy Code Maintenance'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests using XCTest in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Mixed Codebases' (Swift/Obj-C).</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Language of Apple History</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Objective-C is more than just a language; it's the foundation of the modern mobile revolution. While Swift is the future, Objective-C is the deep magic that keeps the legacy of Apple's systems alive. Stay consistent, embrace the square brackets, and remember: Every expert architect started with their first message. Your journey starts now!
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
