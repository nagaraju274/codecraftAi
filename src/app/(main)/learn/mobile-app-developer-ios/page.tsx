
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
  Box,
  Infinity,
  FlaskConical,
  Lock,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Swift & Xcode Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to iOS Ecosystem & Xcode",
        why: "Xcode is the primary tool for all Apple development. Understanding the environment is the first step.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Xcode Overview (Apple)", url: "https://developer.apple.com/xcode/" },
          { name: "iOS Development for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=s2aW976-jrI" },
        ],
        practice: "Install Xcode. Create a new project and run the 'Hello World' app on an iOS Simulator.",
      },
      {
        what: "Swift Basics: Variables & Constants",
        why: "To store and manage data. Swift's distinction between 'let' and 'var' is core to its safety.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "The Swift Programming Language (Official Book)", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/" },
        ],
        practice: "In a Swift Playground, calculate the area of a circle using a constant for Pi and a variable for radius.",
      },
      {
        what: "Control Flow & Optionals",
        why: "Optionals are Swift's way of handling missing data safely, preventing the most common app crashes.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Swift Optionals Explained (YouTube)", url: "https://www.youtube.com/watch?v=KshQu6pyid4" },
        ],
        practice: "Write a script that safely unwraps a username optional using 'if let' and 'guard let'.",
      },
      {
        what: "Collections & Basic Loops",
        why: "Apps manage groups of data (contacts, settings). Loops allow you to process these collections efficiently.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Swift Collection Types", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/" },
        ],
        practice: "Create a grocery list manager that adds, removes, and prints items using a 'for-in' loop.",
      },
      {
        what: "Functions & Closures",
        why: "Functions modularize code. Closures are self-contained code blocks used heavily in animations and networking.",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Functions in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/" },
        ],
        practice: "Write a function that greets a user and a closure that filters an array of numbers.",
      },
      {
        what: "Structs vs Classes",
        why: "Swift is built on value types (Structs). Understanding when to use a Class (Reference Type) is essential for memory management.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Classes and Structures", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/" },
        ],
        practice: "Model a 'Bank Account' using a Class and a 'Transaction' using a Struct.",
      },
      {
        what: "Protocols & Extensions",
        why: "Swift is a 'Protocol-Oriented' language. This enables clean, decoupled architecture.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Protocols in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/" },
        ],
        practice: "Create a 'Playable' protocol and implement it in 'Music' and 'Video' structs.",
      },
      {
        what: "Error Handling & Guard",
        why: "To build robust apps that don't crash when things go wrong (e.g., failed file reads).",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Error Handling Guide", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/" },
        ],
        practice: "Write a function that throws an error if an input is invalid and use 'do-catch' to handle it.",
      },
      {
        what: "Memory Management (ARC)",
        why: "To prevent memory leaks. You must understand Automatic Reference Counting and retain cycles.",
        time: "4 Days",
        prereqs: "Step 6",
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
        what: "SwiftUI Declarative UI Basics",
        why: "SwiftUI is the modern, faster way to build UIs for all Apple platforms.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "SwiftUI by Example", url: "https://www.hackingwithswift.com/quick-start/swiftui" },
        ],
        practice: "Build a simple profile screen with an avatar and bio using VStack and HStack.",
      },
      {
        what: "State & Data Flow (@State, @Binding)",
        why: "To make your UI reactive. The view updates automatically when the state changes.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "State and Data Flow", url: "https://developer.apple.com/documentation/swiftui/state-management" },
        ],
        practice: "Create a toggle that changes the background color of the whole app.",
      },
      {
        what: "Observable Objects & MVVM",
        why: "The standard architecture for iOS. Separates business logic (ViewModel) from layout (View).",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "MVVM in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/introducing-mvvm-into-your-project" },
        ],
        practice: "Build a shopping list where the logic is moved to a separate ViewModel class.",
      },
      {
        what: "Networking with URLSession",
        why: "Most apps fetch data from the internet. URLSession is the native way to make HTTP requests.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Networking in Swift Tutorial", url: "https://www.kodeco.com/backend/learn" },
        ],
        practice: "Fetch a list of users from a public JSON API and print them to the console.",
      },
      {
        what: "JSON Parsing with Codable",
        why: "To turn raw web data into safe Swift objects automatically.",
        time: "4 Days",
        prereqs: "Step 13",
        resources: [
          { name: "Codable Guide", url: "https://developer.apple.com/documentation/foundation/archives_and_serialization/encoding_and_decoding_custom_types" },
        ],
        practice: "Map your fetched user data into a Swift struct using the Codable protocol.",
      },
      {
        what: "Local Persistence: SwiftData",
        why: "To allow users to use your app offline by saving data permanently to the device.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "SwiftData Tutorial", url: "https://www.hackingwithswift.com/quick-start/swiftdata" },
        ],
        practice: "Create a 'Notes' app that saves and persists entries between app restarts.",
      },
      {
        what: "Navigation & Modals",
        why: "To move users through your app's screens and show focused content using sheets.",
        time: "5 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Navigation in SwiftUI", url: "https://developer.apple.com/documentation/swiftui/navigationstack" },
        ],
        practice: "Build a 3-screen app: Home -> List -> Details.",
      },
      {
        what: "Gestures & Custom Modifiers",
        why: "To make your app feel natural. Custom modifiers keep your UI code clean and reusable.",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "SwiftUI Gestures", url: "https://developer.apple.com/documentation/swiftui/gestures" },
        ],
        practice: "Animate an image to scale when tapped and rotate when swiped.",
      },
      {
        what: "Dependency Injection Basics",
        why: "To write testable and modular code by decoupling components from their dependencies.",
        time: "5 Days",
        prereqs: "Step 12",
        resources: [
          { name: "DI in Swift", url: "https://www.avanderlee.com/swift/dependency-injection/" },
        ],
        practice: "Inject a 'MockDataService' into your ViewModel instead of creating it inside.",
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
        what: "Actors & Sendable",
        why: "To prevent 'Data Races' when multiple background tasks access the same data.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "Swift Actors Guide", url: "https://www.avanderlee.com/swift/actors/" },
        ],
        practice: "Protect a shared 'Bank' class using an Actor.",
      },
      {
        what: "Unit & UI Testing (XCTest)",
        why: "Professional apps must be tested to ensure reliability. Tests prevent bugs from re-appearing.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Unit Testing for Beginners", url: "https://www.kodeco.com/710-ios-unit-testing-and-ui-testing-tutorial" },
        ],
        practice: "Write 10 unit tests for your app's core logic and 2 UI tests for the login flow.",
      },
      {
        what: "Advanced Animations & Transitions",
        why: "To create 'magical' user experiences that set your app apart in the App Store.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "SwiftUI Animations", url: "https://developer.apple.com/documentation/swiftui/animations" },
        ],
        practice: "Build a hero transition where an image expands smoothly from a list to a detail screen.",
      },
      {
        what: "Combine Framework (Reactive)",
        why: "To handle streams of data over time (e.g., real-time search filters or complex event chains).",
        time: "2 Weeks",
        prereqs: "Step 11",
        resources: [
          { name: "Combine Official Docs", url: "https://developer.apple.com/documentation/combine" },
        ],
        practice: "Implement a search bar that debounces user input to avoid too many API calls.",
      },
      {
        what: "Push Notifications & CloudKit",
        why: "To engage users when the app is closed and sync data across their Apple devices.",
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
        practice: "Build a 'Safe Box' feature that requires FaceID to unlock.",
      },
      {
        what: "App Store Connect & TestFlight",
        why: "To get your app to the public. You must learn the submission and beta testing process.",
        time: "1 Week",
        prereqs: "A completed app",
        resources: [
          { name: "App Store Submission Guide", url: "https://developer.apple.com/app-store/submissions/" },
        ],
        practice: "Generate a distribution certificate and upload a build to TestFlight.",
      },
      {
        what: "CI/CD with Fastlane",
        why: "To automate building, testing, and uploading your app, saving hours of manual work.",
        time: "1 Week",
        prereqs: "Step 26",
        resources: [
          { name: "Fastlane Official Docs", url: "https://docs.fastlane.tools/" },
        ],
        practice: "Set up a GitHub Action that runs your tests automatically on every push.",
      },
      {
        what: "App Performance Profiling (Instruments)",
        why: "To find memory leaks and slow code. Essential for high-quality, professional apps.",
        time: "1 Week",
        prereqs: "Step 9, Step 22",
        resources: [
          { name: "Profiling with Instruments", url: "https://developer.apple.com/documentation/xcode/profiling-your-app-s-performance" },
        ],
        practice: "Run your app through the 'Leaks' instrument to check for memory mismanagement.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Tip Calculator", teaches: "Basic math logic, user input, and simple SwiftUI layout.", tech: "Swift, SwiftUI" },
  { level: "Beginner", title: "Daily Habit Tracker", teaches: "Lists, state management, and basic persistence (UserDefaults).", tech: "Swift, SwiftUI" },
  { level: "Beginner", title: "Dice Roll Game", teaches: "Randomness, conditional UI, and image assets.", tech: "SwiftUI" },
  { level: "Intermediate", title: "Weather Forecast Dashboard", teaches: "Networking (URLSession), JSON parsing, and async UI updates.", tech: "Swift, Codable, API" },
  { level: "Intermediate", title: "Personal Finance Manager", teaches: "Data persistence with SwiftData, complex forms, and Charts.", tech: "Swift, SwiftData, Swift Charts" },
  { level: "Intermediate", title: "Movie Explorer", teaches: "Complex navigation, image caching, and search logic.", tech: "TMDB API, AsyncImage" },
  { level: "Intermediate", title: "Location-based Reminders", teaches: "CoreLocation, permissions, and local notifications.", tech: "CoreLocation, UserNotifications" },
  { level: "Advanced", title: "E-commerce Store with Checkout", teaches: "Payment integration (Apple Pay), cart logic, and advanced animations.", tech: "Stripe SDK, SwiftUI" },
  { level: "Advanced", title: "Real-time Chat App", teaches: "WebSockets or Firebase, user presence, and media sharing.", tech: "Firebase, SwiftUI" },
  { level: "Advanced", title: "AR Measurement Tool", teaches: "ARKit basics, 3D coordinate math, and camera scene management.", tech: "ARKit, SwiftUI" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax and basic building to get comfortable with the tools.",
    schedule: [
      "Days 1-7: Swift Basics & Xcode Navigation.",
      "Days 8-15: SwiftUI fundamentals and simple layouts.",
      "Days 16-23: Networking (Fetch data) and JSON Parsing.",
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
  { question: "Reverse a string without using built-in helper functions.", topic: "Logic" },
  { question: "Detect a cycle in a linked list.", topic: "Data Structures" },
  { question: "Flatten a nested array of integers.", topic: "Recursion" },
  { question: "Implement a thread-safe counter using an Actor.", topic: "Concurrency" },
];

const mcqs = [
  { question: "Which keyword is used to declare a constant?", options: ["var", "val", "let", "const"], answer: "let" },
  { question: "What is the primary way to build UIs in modern iOS development?", options: ["UIKit", "Interface Builder", "SwiftUI", "CocoaPods"], answer: "SwiftUI" },
  { question: "Which protocol is used for automated JSON conversion?", options: ["JSON", "Map", "Codable", "Convertible"], answer: "Codable" },
];

const mistakes = [
  "Using '!' (force unwrap) everywhere - this leads to inevitable crashes.",
  "Mixing business logic with UI code (the #1 junior developer mistake).",
  "Ignoring memory management (causing retain cycles and memory leaks).",
  "Not using 'let' (constants) by default - use 'var' only when necessary.",
  "Over-engineering simple UIs with too many nested stacks.",
  "Not handling network errors or slow internet connections.",
  "Forgetting to add 'Accessibility' labels for users with disabilities.",
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
            Your definitive journey to mastering the Apple ecosystem. Build, test, and deploy beautiful apps for iPhone, iPad, and beyond.
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
            <CardDescription>Pick a timeline that matches your goals.</CardDescription>
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
            <CardDescription>Master the topics and questions required to land a role at Apple or a top-tier tech company.</CardDescription>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Swift', 'SwiftUI', 'MVVM', 'SwiftData', 'Core Data', 'Combine', 'Async/Await', 'Unit Testing', 'App Store Connect', 'TestFlight', 'Git', 'Fastlane', 'Accessibility', 'REST APIs', 'ARC'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality GIFs or screenshots of your UIs in GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose MVVM over MVC').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Link to the App Store if your app is live or provides a public TestFlight link.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Future of Mobile</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            The Apple ecosystem is premium, powerful, and constantly evolving. Mastering Swift and SwiftUI opens doors to a career building apps that reach millions. Stay consistent, keep building, and remember that every great app started with a single line of code. Your journey to mastery starts today!
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
