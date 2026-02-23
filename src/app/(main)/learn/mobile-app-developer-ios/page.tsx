
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
  Smartphone,
  Code,
  Layout,
  Database,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Monitor,
  Workflow,
  Server,
  History,
  Activity,
  Search,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Swift & Xcode Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to iOS Ecosystem & Xcode",
        why: "Xcode is the only IDE for Apple development. Understanding the ecosystem (iOS, iPadOS, macOS) and the tools is the first step.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Xcode Overview (Apple)", url: "https://developer.apple.com/xcode/" },
          { name: "iOS Development for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=s2aW976-jrI" },
        ],
        practice: "Install Xcode. Create your first project and run the 'Hello World' app on an iOS Simulator.",
      },
      {
        what: "Swift Fundamentals: Variables & Constants",
        why: "To store and manage data. Understanding the difference between 'let' (constant) and 'var' (variable) is a core Swift safety feature.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "The Swift Programming Language (Official Book)", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/" },
        ],
        practice: "Write a script in an Xcode Playground that calculates the area of a circle using constants and variables.",
      },
      {
        what: "Control Flow (If/Else, Switch, Loops)",
        why: "Logic allows your app to make decisions and handle repetitive tasks. Swift's 'switch' is uniquely powerful.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Swift Control Flow Guide", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/" },
        ],
        practice: "Create a grading system that prints 'Excellent', 'Good', or 'Fail' based on a score variable.",
      },
      {
        what: "Swift Optionals: Safety First",
        why: "Optionals handle the absence of a value safely, preventing 'Null Pointer' crashes which are common in other languages.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Swift Optionals Explained (YouTube)", url: "https://www.youtube.com/watch?v=KshQu6pyid4" },
        ],
        practice: "Practice safe unwrapping using 'if let' and 'guard let' in a playground.",
      },
      {
        what: "Collections: Arrays, Sets, Dictionaries",
        why: "To manage groups of data like contact lists, settings, or user-generated content.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Swift Collection Types", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/" },
        ],
        practice: "Build a simple grocery list manager that supports adding, removing, and sorting items.",
      },
      {
        what: "Functions & Closures",
        why: "Functions group logic into reusable blocks. Closures are self-contained blocks of code that can be passed around (critical for animations and networking).",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Functions in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/" },
        ],
        practice: "Write a function that takes a name and returns a greeting. Create a closure that sorts a list of numbers.",
      },
      {
        what: "Structs & Classes (OOP & Value Types)",
        why: "To define custom data types. Understanding when to use a Struct (Value Type) vs. a Class (Reference Type) is essential for Swift performance.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Classes and Structures", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/" },
        ],
        practice: "Model a 'Library' system with 'Book' structs and a 'Library' class to manage them.",
      },
      {
        what: "Protocols & Extensions",
        why: "Swift is a 'Protocol-Oriented' language. Protocols define contracts, and Extensions allow you to add features to existing types.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Protocols in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/" },
        ],
        practice: "Create a 'Flyable' protocol and implement it in 'Bird' and 'Airplane' structs.",
      },
      {
        what: "Memory Management (ARC)",
        why: "To prevent memory leaks and keep your app fast. You must understand Automatic Reference Counting and retain cycles.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "ARC in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/" },
        ],
        practice: "Identify a retain cycle between two classes and fix it using 'weak' references.",
      },
    ],
  },
  {
    title: "Intermediate Stage: SwiftUI & App Logic",
    level: "Intermediate",
    steps: [
      {
        what: "SwiftUI: Declarative UI Basics",
        why: "SwiftUI is the modern, preferred way to build UIs for all Apple platforms with much less code than UIKit.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "SwiftUI by Example", url: "https://www.hackingwithswift.com/quick-start/swiftui" },
          { name: "100 Days of SwiftUI", url: "https://www.hackingwithswift.com/100/swiftui" },
        ],
        practice: "Build a simple profile screen with an avatar, name, and bio using Stacks (VStack, HStack).",
      },
      {
        what: "State Management (@State, @Binding)",
        why: "To make your UI reactive. These wrappers tell SwiftUI to update the view whenever the data changes.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "State and Data Flow (Apple)", url: "https://developer.apple.com/documentation/swiftui/state-management" },
        ],
        practice: "Create a toggle switch that changes the background color of the entire app.",
      },
      {
        what: "Observable Objects & @Published",
        why: "To share state between multiple screens or handle complex logic outside of the view file (MVVM).",
        time: "5 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Working with Observable Objects", url: "https://www.hackingwithswift.com/books/ios-swiftui/manually-publishing-observable-object-changes" },
        ],
        practice: "Build a shopping cart where items added on one screen update a total count on the main screen.",
      },
      {
        what: "Networking with URLSession",
        why: "Most apps need to fetch data from the internet. URLSession is the native way to make HTTP requests.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Networking in Swift Tutorial", url: "https://www.kodeco.com/backend/learn" },
        ],
        practice: "Fetch a list of users from a public JSON API and print them to the console.",
      },
      {
        what: "JSON Parsing with Codable",
        why: "To turn raw data from the web into safe Swift objects automatically.",
        time: "4 Days",
        prereqs: "Step 13",
        resources: [
          { name: "Codable Guide", url: "https://developer.apple.com/documentation/foundation/archives_and_serialization/encoding_and_decoding_custom_types" },
        ],
        practice: "Map the JSON from the previous step into a Swift struct using the Codable protocol.",
      },
      {
        what: "Local Persistence: SwiftData",
        why: "To allow users to use your app offline by saving data permanently to the device.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "SwiftData Tutorial", url: "https://www.hackingwithswift.com/quick-start/swiftdata" },
        ],
        practice: "Create a simple 'Notes' app where notes are saved and persist even after the app is closed.",
      },
      {
        what: "Navigation & Modals",
        why: "To move users through your app's screens and show focused content using sheets and alerts.",
        time: "5 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Navigation in SwiftUI", url: "https://developer.apple.com/documentation/swiftui/navigationstack" },
        ],
        practice: "Build a 3-screen app: List -> Detail -> Settings (Modal).",
      },
      {
        what: "Gestures & Custom Modifiers",
        why: "To make your app feel natural and interactive. Custom modifiers keep your code DRY (Don't Repeat Yourself).",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "SwiftUI Gestures", url: "https://developer.apple.com/documentation/swiftui/gestures" },
        ],
        practice: "Create an image that can be zoomed with a pinch gesture and rotated with two fingers.",
      },
      {
        what: "App Architecture: MVVM",
        why: "Separating logic (Model) from view code (View) via a ViewModel is the industry standard for clean, testable code.",
        time: "1 Week",
        prereqs: "All Intermediate steps",
        resources: [
          { name: "MVVM in SwiftUI Guide", url: "https://www.hackingwithswift.com/books/ios-swiftui/introducing-mvvm-into-your-project" },
        ],
        practice: "Refactor your Notes app to follow the MVVM pattern.",
      },
    ],
  },
  {
    title: "Advanced Stage: Professional Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Swift Concurrency (Async/Await)",
        why: "The modern way to handle background tasks safely without the 'callback hell' of older methods.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Modern Concurrency in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" },
        ],
        practice: "Update your networking code to use 'async' and 'await' for cleaner syntax.",
      },
      {
        what: "Unit & UI Testing (XCTest)",
        why: "Professional apps must be tested to ensure reliability. Tests prevent bugs from re-appearing during updates.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Unit Testing for Beginners", url: "https://www.kodeco.com/710-ios-unit-testing-and-ui-testing-tutorial" },
        ],
        practice: "Write 10 unit tests for your app's business logic and 2 UI tests for the login flow.",
      },
      {
        what: "Core Animation & Custom Transitions",
        why: "To create high-quality, 'magical' user experiences that set your app apart in the App Store.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "SwiftUI Animations", url: "https://developer.apple.com/documentation/swiftui/animations" },
        ],
        practice: "Build a hero transition where an image expands smoothly from a list to a detail screen.",
      },
      {
        what: "Combine Framework (Reactive)",
        why: "To handle streams of values over time (e.g., real-time search filters or complex event chains).",
        time: "2 Weeks",
        prereqs: "Step 11, Step 12",
        resources: [
          { name: "Combine Official Docs", url: "https://developer.apple.com/documentation/combine" },
        ],
        practice: "Implement a search-as-you-type feature that debounces user input to avoid too many API calls.",
      },
      {
        what: "Push Notifications & CloudKit",
        why: "To engage users even when the app is closed and sync data across their devices.",
        time: "1 Week",
        prereqs: "Networking basics",
        resources: [
          { name: "Push Notifications Guide", url: "https://developer.apple.com/documentation/usernotifications" },
        ],
        practice: "Set up a local notification that triggers at a specific time tomorrow.",
      },
      {
        what: "Security: Keychain & Biometrics",
        why: "Protecting user data is critical. Learn to store secrets securely and use FaceID/TouchID.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "Keychain Services", url: "https://developer.apple.com/documentation/security/keychain_services" },
        ],
        practice: "Build a 'Safe Box' app that requires FaceID to unlock and view hidden text.",
      },
      {
        what: "App Store Connect & TestFlight",
        why: "To get your app to the public. You must learn the submission, review, and beta testing process.",
        time: "1 Week",
        prereqs: "A completed app",
        resources: [
          { name: "App Store Submission Guide", url: "https://developer.apple.com/app-store/submissions/" },
        ],
        practice: "Create an App ID and a distribution certificate in the Apple Developer portal.",
      },
      {
        what: "CI/CD for iOS (Fastlane)",
        why: "To automate building, testing, and uploading your app, saving hours of manual work.",
        time: "1 Week",
        prereqs: "Step 25",
        resources: [
          { name: "Fastlane Official Docs", url: "https://docs.fastlane.tools/" },
        ],
        practice: "Set up a GitHub Action that runs your tests automatically on every push.",
      },
      {
        what: "Soft Skills & Portfolio",
        why: "Landing a job requires clear communication and a professional presence.",
        time: "Ongoing",
        prereqs: "None",
        resources: [
          { name: "Building an iOS Portfolio", url: "https://www.swiftjectivec.com/ios-developer-portfolio/" },
        ],
        practice: "Clean up your 3 best projects on GitHub, write great READMEs, and create a LinkedIn profile.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Tip Calculator", teaches: "Basic math, user input, and simple layout.", tech: "Swift, SwiftUI" },
  { level: "Beginner", title: "Habit Tracker", teaches: "Lists, state management, and basic persistence.", tech: "Swift, SwiftUI" },
  { level: "Beginner", title: "Dice Roll Game", teaches: "Random numbers, images, and button actions.", tech: "SwiftUI" },
  { level: "Intermediate", title: "Real-time Weather App", teaches: "Networking (API), JSON parsing, and async UI.", tech: "URLSession, Codable" },
  { level: "Intermediate", title: "Finance Manager", teaches: "SwiftData, Charts, and complex form handling.", tech: "SwiftData, Swift Charts" },
  { level: "Intermediate", title: "Movie Discovery", teaches: "Complex navigation, image caching, and searching.", tech: "TMDB API, AsyncImage" },
  { level: "Intermediate", title: "Location-based Reminder", teaches: "CoreLocation, Permissions, and local notifications.", tech: "CoreLocation" },
  { level: "Advanced", title: "E-commerce Store", teaches: "Payment integration, cart logic, and advanced animations.", tech: "Stripe SDK, SwiftUI" },
  { level: "Advanced", title: "Real-time Chat", teaches: "WebSockets or Firebase, user presence, and media sharing.", tech: "Firebase, SwiftUI" },
  { level: "Advanced", title: "AR Measurement Tool", teaches: "ARKit basics, 3D coordinate math, and scene management.", tech: "ARKit, SwiftUI" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax and basic app building to get comfortable with the tools.",
    schedule: [
      "Days 1-7: Swift Basics & Xcode Navigation.",
      "Days 8-15: SwiftUI fundamentals and simple layout.",
      "Days 16-23: Networking (Fetch data) and JSON.",
      "Days 24-30: Build a 'Weather App' and deploy to a device.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for a solid foundation and a strong portfolio.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Mastering SwiftUI, Networking, and SwiftData.",
      "Days 46-60: Learn MVVM, Testing, and build 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for total professional readiness and App Store skills.",
    schedule: [
      "Days 1-30: Core Development & Swift Mastery.",
      "Days 31-60: Professional Data handling, Architecture, and Testing.",
      "Days 61-90: Advanced Features, Security, Deployment, and Job Prep.",
    ]
  }
];

const interviewTopics = [
  "Structs vs. Classes (Value vs. Reference types).",
  "How Automatic Reference Counting (ARC) works.",
  "What is an Optional? Explain 'if let' vs 'guard let'.",
  "The SwiftUI view lifecycle.",
  "MVVM vs. MVC architecture.",
  "Difference between synchronous and asynchronous functions.",
  "What is a Protocol? (Protocol-Oriented Programming).",
  "Explaining retain cycles and how to avoid them.",
  "Unit testing best practices in iOS.",
  "How do you handle background tasks?",
];

const codingQuestions = [
  { question: "Reverse a string without using .reversed().", topic: "Logic" },
  { question: "Detect a cycle in a linked list.", topic: "Data Structures" },
  { question: "Flatten a nested array of integers.", topic: "Recursion" },
  { question: "Check if a binary tree is a valid BST.", topic: "Trees" },
];

const mcqs = [
  { question: "Which keyword is used to declare a constant?", options: ["var", "val", "let", "const"], answer: "let" },
  { question: "What is the primary way to build UIs in modern iOS development?", options: ["UIKit", "Interface Builder", "SwiftUI", "CocoaPods"], answer: "SwiftUI" },
  { question: "Which protocol is used for JSON conversion?", options: ["JSON", "Map", "Codable", "Convertible"], answer: "Codable" },
];

const mistakes = [
  "Using '!' (force unwrap) everywhere - this leads to crashes.",
  "Mixing business logic with UI code (the #1 junior mistake).",
  "Ignoring memory management (retain cycles).",
  "Not using 'const' (let) by default.",
  "Over-engineering simple UIs with too many nested stacks.",
  "Not handling network errors or slow connections.",
  "Forgetting to add 'Accessibility' labels for blind users.",
  "Not using Version Control (Git) from day one.",
  "Hardcoding strings instead of using localization files.",
  "Skipping Unit Tests for critical app logic.",
];

export default function MobileAppDeveloperIosRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Smartphone className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            iOS Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the Apple ecosystem. Build, test, and deploy beautiful apps for iPhone, iPad, and Apple Watch.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional iOS Developer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream iOS role.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Swift', 'SwiftUI', 'MVVM', 'SwiftData', 'Core Data', 'Combine', 'Async/Await', 'Unit Testing', 'App Store Connect', 'TestFlight', 'Git', 'Fastlane', 'Accessibility', 'REST APIs'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality GIFs or screenshots of your UIs in GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose MVVM').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Link to the App Store if your app is live.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Future of iOS</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            The Apple ecosystem is premium, powerful, and constantly evolving. Mastering Swift and SwiftUI opens doors to a career building apps that reach millions. Stay consistent, keep building even when the borrow checker fights you, and always stay curious. The App Store is waiting for your contribution.
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
