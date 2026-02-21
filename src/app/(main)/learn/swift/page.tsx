
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Swift & Xcode Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Swift & Xcode",
        why: "Xcode is the only IDE for Apple development, and Swift is the modern, safe language that powers it.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Swift Tour (Official Docs)", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/" },
          { name: "iOS Development for Beginners (YouTube - Hacking with Swift)", url: "https://www.youtube.com/watch?v=s2aW976-jrI" },
        ],
        practice: "Install Xcode. Create a 'Playground' and print your first 'Hello, World!'. Explore the Xcode interface.",
      },
      {
        what: "Variables, Constants, and Basic Types",
        why: "Understanding how to store data (Strings, Ints, Bools) is the start of any program.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Swift Variables (W3Schools)", url: "https://www.w3schools.com/swift/swift_variables.php" },
          { name: "Swift Types (Ray Wenderlich/Kodeco)", url: "https://www.kodeco.com/swift/learn" },
        ],
        practice: "Create a profile script using constants for your name and variables for your age.",
      },
      {
        what: "Control Flow (If/Else, Switch)",
        why: "Logic allows your app to make decisions based on data.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Swift Control Flow (Official)", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/" },
        ],
        practice: "Write a grading system that prints 'Pass' or 'Fail' based on a score variable.",
      },
      {
        what: "Optionals: Swift's Secret Sauce",
        why: "Optionals handle the absence of a value safely, preventing the 'Null Pointer' crashes common in other languages.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Swift Optionals Explained (YouTube)", url: "https://www.youtube.com/watch?v=KshQu6pyid4" },
        ],
        practice: "Practice using `if let` and `guard let` to safely unwrap an optional string.",
      },
      {
        what: "Collections (Arrays, Sets, Dictionaries)",
        why: "Apps manage groups of data constantly (like a list of contacts or a grid of images).",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Swift Collection Types", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/" },
        ],
        practice: "Create a shopping list array and a user-age dictionary. Practice adding and removing items.",
      },
      {
        what: "Loops (For-In, While)",
        why: "Automation through iteration is essential for processing large data sets.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Loops in Swift (Programiz)", url: "https://www.programiz.com/swift-programming/for-in-loop" },
        ],
        practice: "Write a loop that prints only the even numbers from 1 to 50.",
      },
      {
        what: "Functions and Parameters",
        why: "Functions group logic into reusable blocks, keeping code clean and organized.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Swift Functions Guide", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/" },
        ],
        practice: "Create a function that calculates the area of a rectangle given width and height parameters.",
      },
      {
        what: "Enumerations and Structs",
        why: "Structs are the building blocks of SwiftUI and are highly efficient for data modeling.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Swift Enums & Structs", url: "https://www.hackingwithswift.com/sixty/7/1/structs" },
        ],
        practice: "Define an enum for 'Weather' (sunny, rainy, cloudy) and a 'User' struct with properties.",
      },
      {
        what: "Classes and Inheritance",
        why: "Understand reference types and how objects share behavior in Object-Oriented Programming.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Swift Classes vs Structs", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/" },
        ],
        practice: "Create a base class 'Vehicle' and a subclass 'Car' that inherits from it.",
      },
      {
        what: "Properties and Initializers",
        why: "Every object needs to be set up correctly before it can be used.",
        time: "4 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Initialization in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/initialization/" },
        ],
        practice: "Write a custom initializer for a 'Book' struct that sets a default author if none is provided.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Building Interactive Apps",
    level: "Intermediate",
    steps: [
      {
        what: "Closures and Functional Patterns",
        why: "Closures are self-contained blocks of functionality that can be passed around, crucial for animations and completion handlers.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Swift Closures (Hacking with Swift)", url: "https://www.hackingwithswift.com/sixty/6/1/closures-part-one" },
        ],
        practice: "Use `.map` and `.filter` on an array using inline closures.",
      },
      {
        what: "Protocols and Extensions",
        why: "Protocol-Oriented Programming is the heart of Swift architecture, allowing for decoupled and testable code.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Protocols in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/" },
        ],
        practice: "Create a 'Flyable' protocol and implement it in 'Bird' and 'Airplane' structs.",
      },
      {
        what: "SwiftUI Basics (Declarative UI)",
        why: "SwiftUI is the modern way to build interfaces for all Apple platforms with much less code than UIKit.",
        time: "2 Weeks",
        prereqs: "Step 8",
        resources: [
          { name: "SwiftUI by Example", url: "https://www.hackingwithswift.com/quick-start/swiftui" },
          { name: "100 Days of SwiftUI", url: "https://www.hackingwithswift.com/100/swiftui" },
        ],
        practice: "Build a simple screen with a Text, Image, and Button using stacks (VStack, HStack).",
      },
      {
        what: "State Management (@State, @Binding)",
        why: "To make your UI react to data changes, you must understand the data flow in SwiftUI.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "State and Data Flow (Official)", url: "https://developer.apple.com/documentation/swiftui/state-management" },
        ],
        practice: "Build a toggle switch that changes the background color of the app when flipped.",
      },
      {
        what: "Error Handling",
        why: "Real apps fail. Learn to handle errors gracefully using `do-try-catch`.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Swift Error Handling", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/" },
        ],
        practice: "Write a function that throws an error if a division by zero is attempted.",
      },
      {
        what: "Networking with URLSession",
        why: "Most apps need to fetch data from the web (e.g., social feeds, weather, news).",
        time: "2 Weeks",
        prereqs: "Step 15",
        resources: [
          { name: "Networking in Swift Tutorial", url: "https://www.kodeco.com/backend/learn" },
        ],
        practice: "Fetch a sample JSON from an API and print the raw string to the console.",
      },
      {
        what: "JSON Parsing (Codable)",
        why: "Convert raw data from the web into Swift objects automatically.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Encoding and Decoding Custom Types", url: "https://developer.apple.com/documentation/foundation/archives_and_serialization/encoding_and_decoding_custom_types" },
        ],
        practice: "Map the JSON from the previous step into a Swift struct using the `Codable` protocol.",
      },
      {
        what: "Navigation in SwiftUI",
        why: "Move between screens and create complex app flows.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "NavigationStack Guide", url: "https://developer.apple.com/documentation/swiftui/navigationstack" },
        ],
        practice: "Create a list of items where clicking one takes you to a detailed view of that item.",
      },
      {
        what: "Swift Package Manager (SPM)",
        why: "Add third-party libraries (like Alamofire or Kingfisher) to your project easily.",
        time: "3 Days",
        prereqs: "Xcode Basics",
        resources: [
          { name: "Using SPM", url: "https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app" },
        ],
        practice: "Add a library like 'ConfettiSwiftUI' to your project and trigger a confetti effect.",
      },
      {
        what: "Debugging and Breakpoints",
        why: "Finding bugs is 50% of programming. Xcode has powerful tools to help.",
        time: "4 Days",
        prereqs: "Xcode Basics",
        resources: [
          { name: "Debugging in Xcode", url: "https://developer.apple.com/documentation/xcode/debugging-your-app" },
        ],
        practice: "Set a breakpoint in a function and inspect the values of variables as the code runs.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery and Performance",
    level: "Advanced",
    steps: [
      {
        what: "Concurrency (Async/Await, Actors)",
        why: "Modern Swift concurrency handles background tasks safely without the 'callback hell' of older methods.",
        time: "2 Weeks",
        prereqs: "Step 16",
        resources: [
          { name: "Swift Concurrency Guide", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" },
        ],
        practice: "Refactor your networking code to use `async/await` and use an `actor` to manage shared data.",
      },
      {
        what: "Memory Management (ARC)",
        why: "To prevent memory leaks and keep your app fast, you must understand Automatic Reference Counting and retain cycles.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "ARC in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/" },
        ],
        practice: "Identify a retain cycle between two classes and fix it using the `weak` keyword.",
      },
      {
        what: "Generics",
        why: "Write extremely flexible code that works with any data type, like Swift's own Array and Dictionary.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Generics in Swift", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/" },
        ],
        practice: "Write a generic function that swaps the values of any two variables.",
      },
      {
        what: "Local Persistence (SwiftData/Core Data)",
        why: "Allow users to use your app offline by saving data locally.",
        time: "2 Weeks",
        prereqs: "Step 8",
        resources: [
          { name: "SwiftData Tutorial", url: "https://www.hackingwithswift.com/quick-start/swiftdata" },
        ],
        practice: "Build a To-Do app where tasks are saved to the device and persist after the app is closed.",
      },
      {
        what: "Unit Testing (XCTest)",
        why: "Ensures your app doesn't break when you add new features. High-quality code requires tests.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Unit Testing for Beginners", url: "https://www.kodeco.com/710-ios-unit-testing-and-ui-testing-tutorial" },
        ],
        practice: "Write a test for a calculation function to ensure it returns the correct result for edge cases.",
      },
      {
        what: "Core Animation and Transitions",
        why: "Make your app feel high-quality with smooth, interactive animations.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "SwiftUI Animations", url: "https://developer.apple.com/documentation/swiftui/animations" },
        ],
        practice: "Create a hero transition where an image expands smoothly from a list to a detail view.",
      },
      {
        what: "Performance Profiling (Instruments)",
        why: "Professional developers use Instruments to find memory leaks and slow-running code.",
        time: "1 Week",
        prereqs: "Step 22",
        resources: [
          { name: "Instruments Help", url: "https://developer.apple.com/documentation/xcode/profiling-your-app-s-performance" },
        ],
        practice: "Run your app through the 'Leaks' instrument to check for memory mismanagement.",
      },
      {
        what: "Architecture Patterns (MVVM)",
        why: "Separating logic (Model) from view code (View) is the industry standard for scalable apps.",
        time: "2 Weeks",
        prereqs: "Advanced SwiftUI",
        resources: [
          { name: "MVVM in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/introducing-mvvm-into-your-project" },
        ],
        practice: "Create a 'ViewModel' for a screen that handles data fetching and logic, leaving the view purely for layout.",
      },
      {
        what: "App Store Connect and Publishing",
        why: "To actually get your app into the world, you need to understand the distribution process.",
        time: "1 Week",
        prereqs: "Completed App",
        resources: [
          { name: "App Store Submission Guide", url: "https://developer.apple.com/app-store/submissions/" },
        ],
        practice: "Create an App ID and a distribution certificate in the Apple Developer portal.",
      },
      {
        what: "Soft Skills: Portfolio and Networking",
        why: "Landing a job requires more than just code. You need a portfolio and a network.",
        time: "Ongoing",
        prereqs: "Advanced Stage",
        resources: [
          { name: "Building an iOS Portfolio", url: "https://www.swiftjectivec.com/ios-developer-portfolio/" },
        ],
        practice: "Clean up 3 projects on GitHub, write great READMEs, and create a LinkedIn profile showcasing your skills.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Tip Calculator", teaches: "Basic math logic, user input, and simple UI layout.", tech: "Swift, SwiftUI" },
  { level: "Beginner", title: "Daily Habit Tracker", teaches: "Lists, state management, and basic persistent storage (UserDefaults).", tech: "Swift, SwiftUI" },
  { level: "Beginner", title: "World Clock App", teaches: "Working with Dates, Timezones, and periodic UI updates.", tech: "Swift, Foundation" },
  { level: "Intermediate", title: "Weather Forecast App", teaches: "Networking, JSON parsing (Codable), and async data loading.", tech: "Swift, URLSession, SwiftUI" },
  { level: "Intermediate", title: "Recipe Book with Photos", teaches: "Camera usage, image picking, and grid layouts.", tech: "Swift, SwiftUI, PhotosUI" },
  { level: "Intermediate", title: "Personal Finance Manager", teaches: "Data persistence with SwiftData, complex forms, and filtering.", tech: "Swift, SwiftData, Charts" },
  { level: "Intermediate", title: "Stock Market Tracker", teaches: "Real-time API integration, graph drawing with Charts framework.", tech: "SwiftUI, Charts, API" },
  { level: "Advanced", title: "Full Social Media Feed", teaches: "Pagination, complex image caching, and real-time backend integration (Firebase).", tech: "Swift, SwiftUI, Firebase" },
  { level: "Advanced", title: "E-commerce App with Checkout", teaches: "Payment integration (Stripe/Apple Pay), cart management, and complex navigation.", tech: "SwiftUI, PassKit, Stripe SDK" },
  { level: "Advanced", title: "AI Photo Filter App", teaches: "Core Image, vision framework, and heavy performance optimization.", tech: "Swift, CoreImage, Metal" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "An intensive plan to get you comfortable with Swift syntax and basic app building.",
    schedule: [
      "Days 1-10: Complete the entire Beginner Stage fundamentals.",
      "Days 11-20: Focus on SwiftUI basics and simple layout components.",
      "Days 21-30: Build 2 beginner projects and learn basic Git for iOS.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "A balanced approach for a strong foundation and building functional, data-driven apps.",
    schedule: [
      "Days 1-20: Complete the Beginner Stage thoroughly.",
      "Days 21-45: Master Networking, JSON, and advanced SwiftUI state management.",
      "Days 46-60: Build 3 intermediate projects and learn unit testing.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "A comprehensive plan for in-depth knowledge and production-readiness for a professional role.",
    schedule: [
      "Days 1-30: Complete Beginner and Intermediate foundations.",
      "Days 31-60: Dive into Advanced topics: Concurrency, SwiftData, and MVVM architecture.",
      "Days 61-90: Build a large-scale advanced project, profile performance, and prepare for interviews.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between Structs and Classes.",
  "What is Automatic Reference Counting (ARC)?",
  "How do Optionals work and why are they used?",
  "Describe the difference between `@State`, `@ObservedObject`, and `@EnvironmentObject`.",
  "What is a Protocol and how does it enable polymorphism?",
  "Explain the difference between a synchronous and asynchronous function.",
  "What are Retain Cycles and how do you prevent them?",
  "Explain the lifecycle of a SwiftUI View.",
  "What is Dependency Injection and why is it useful?",
  "How do you handle background tasks in iOS?",
];

const codingQuestions = [
  { question: "Reverse a string without using the `.reversed()` method.", topic: "String Manipulation" },
  { question: "Check if a given string is a palindrome.", topic: "Strings" },
  { question: "Find the missing number in an array of 1 to 100.", topic: "Arrays/Math" },
  { question: "Implement a thread-safe Singleton pattern in Swift.", topic: "Design Patterns" },
];

const mcqs = [
  { question: "Which keyword is used to declare a constant in Swift?", options: ["var", "let", "const", "final"], answer: "let" },
  { question: "What is the return type of a function that doesn't return anything?", options: ["Null", "Void", "None", "Empty"], answer: "Void" },
  { question: "Which protocol is required for a struct to be automatically converted from JSON?", options: ["JSON", "Decodable", "Map", "Transform"], answer: "Decodable" },
];

const mistakes = [
  "Forgetting to use `weak self` in closures, causing memory leaks.",
  "Using `!` (Force Unwrapping) instead of safe optional binding.",
  "Overusing Classes when Structs would be more efficient.",
  "Putting too much logic inside the View file instead of a ViewModel.",
  "Not handling network failures or slow connections.",
  "Using `DispatchQueue.main.sync` on the main thread (deadlock risk).",
  "Ignoring compiler warnings.",
  "Trying to build complex UI without understanding Stacks (VStack/HStack).",
  "Not using Version Control (Git) from day one.",
  "Hardcoding strings instead of using Localizable strings for internationalization.",
];

export default function SwiftRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Smartphone className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Swift Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your journey to mastering Swift and building world-class apps for iPhone, iPad, Mac, and beyond.
          </p>
        </header>

        {stages.map((stage) => (
          <Card key={stage.title} className="border-2">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                {stage.title}
              </CardTitle>
              <CardDescription>Master the fundamentals and progress to advanced concepts.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs">{index + 1}</span>
                        {step.what}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p><strong>Why it’s important:</strong> {step.why}</p>
                            <p><strong>Time:</strong> {step.time}</p>
                            <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><Layout className="h-4 w-4"/> Practice Task:</h4>
                            <p className="text-sm">{step.practice}</p>
                          </div>
                        </div>
                        <h4 className="font-semibold mt-4">Free Resources:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.resources.map(res => (
                            <li key={res.url} className="list-none">
                              <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                                <Code className="h-3 w-3"/> {res.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
            <CardDescription>Apply your knowledge with these hands-on projects, from beginner to advanced.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <Card key={p.title} className="bg-muted/30">
                <CardHeader>
                  <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                  <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4"><strong>Teaches:</strong> {p.teaches}</p>
                  <p className="text-sm"><strong>Stack:</strong> {p.tech}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Choose a plan that fits your schedule and career goals.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="p-6 border rounded-xl bg-card">
                  <h3 className="font-bold text-xl mb-2">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.schedule.map(item => (
                      <li key={item} className="text-sm flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
            <CardDescription>Key topics and questions to land your first iOS developer job.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Key Concepts</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {interviewTopics.map(topic => <li key={topic} className="flex items-center gap-2">• {topic}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Coding Challenges</h3>
                <div className="space-y-3">
                  {codingQuestions.map(q => (
                    <div key={q.question} className="p-3 border rounded-lg bg-muted/20">
                      <p className="font-medium text-sm">[{q.topic}]</p>
                      <p className="text-sm">{q.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-6 border-t">
              <h3 className="font-bold text-lg mb-4">Resume & Portfolio Tips</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Resume Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Swift', 'SwiftUI', 'UIKit', 'Combine', 'SwiftData', 'Core Data', 'MVVM', 'Unit Testing', 'Git', 'App Store Connect', 'ARC', 'Rest APIs'].map(kw => <Badge key={kw} variant="outline">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Showcasing Projects</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Include high-quality screenshots or GIFs in GitHub READMEs.</li>
                    <li>• Link to the App Store if published.</li>
                    <li>• Write about technical challenges solved in the project description.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3"><Lightbulb className="h-6 w-6 text-destructive"/>Mistakes to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {mistakes.map((mistake, i) => (
                <li key={i} className="text-sm flex items-center gap-2 text-muted-foreground">
                  <span className="text-destructive font-bold">{i + 1}.</span> {mistake}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center py-12 bg-primary/10 rounded-3xl">
          <h2 className="text-3xl font-bold">The App Store is Waiting for You</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto px-4">
            iOS development is one of the most rewarding paths in tech. It blends high-level logic with visual creativity. Stay consistent, build daily, and remember: Every great app started with a single line of code. You've got this!
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full">
            <Link href="/projects">Start Building Your First App</Link>
          </Button>
        </div>
      </div>
    </AuthGuard>
  );
}
