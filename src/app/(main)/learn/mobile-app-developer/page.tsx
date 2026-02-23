
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
    title: "Beginner Stage: Flutter & Dart foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Dart & Tooling",
        why: "Dart is the language behind Flutter. Mastering its basics (syntax, types, compiler) is mandatory before writing a single line of UI.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Dart Tour (Official Docs)", url: "https://dart.dev/guides/language/language-tour" },
          { name: "Dart for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q" },
        ],
        practice: "Install Flutter SDK. Use DartPad to solve 10 logic puzzles. Set up VS Code with Flutter extension.",
      },
      {
        what: "Variables, Types & Sound Null Safety",
        why: "To write stable apps. Null safety prevents the 'billion dollar mistake' of null pointer crashes.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Understanding Null Safety", url: "https://dart.dev/null-safety" },
        ],
        practice: "Practice declaring nullable vs non-nullable variables. Use '?' and '!' operators correctly in DartPad.",
      },
      {
        what: "Control Flow & Functional Dart",
        why: "Logic allows apps to make decisions. Arrow functions and higher-order functions make code modern and clean.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Dart Control Flow", url: "https://dart.dev/language/control-flow" },
        ],
        practice: "Build a program that filters a list of objects based on multiple conditions using '.where()' and '.map()'.",
      },
      {
        what: "The Widget Tree & Core Widgets",
        why: "In Flutter, 'Everything is a Widget'. You must understand how UI is a nested tree of immutable objects.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Introduction to Widgets", url: "https://docs.flutter.dev/ui/widgets/basics" },
        ],
        practice: "Build a static UI layout using Scaffold, AppBar, Center, and Text widgets.",
      },
      {
        what: "Layout Mastery: Row & Column",
        why: "The primary ways to arrange UI. Mastering alignment and spacing is 80% of layout design.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Building Layouts in Flutter", url: "https://docs.flutter.dev/ui/layout" },
        ],
        practice: "Create a complex profile header with nested Rows and Columns using MainAxisAlignment and CrossAxisAlignment.",
      },
      {
        what: "Stateful vs Stateless Widgets",
        why: "To build interactivity. Learn when a widget needs to rebuild (Stateful) vs when it's static (Stateless).",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "State Management Intro", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/intro" },
        ],
        practice: "Build a counter app that also changes colors and text based on the count value using 'setState'.",
      },
      {
        what: "User Input: Buttons & TextFields",
        why: "Apps are interactive. You must know how to collect data and respond to taps.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Handling User Input", url: "https://docs.flutter.dev/ui/interactive" },
        ],
        practice: "Build a simple login screen with validation (check if email is valid and password length).",
      },
      {
        what: "Assets, Images & Custom Fonts",
        why: "Visuals define an app's identity. Learn to manage 'pubspec.yaml' and load resources.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Adding Assets", url: "https://docs.flutter.dev/ui/assets-and-images" },
        ],
        practice: "Add a local asset image and a custom Google Font to your app and use them in a custom theme.",
      },
      {
        what: "Lists & Scrolling (ListView.builder)",
        why: "Most apps are just lists of things. Mastering performant, dynamic lists is a daily requirement.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Working with Lists", url: "https://docs.flutter.dev/ui/widgets/scrolling" },
        ],
        practice: "Create an app that displays a list of 100 items using a builder pattern for efficient memory usage.",
      },
      {
        what: "Navigation & Simple Routing",
        why: "To move users through screens. Learn Navigator.push and standard Material routes.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Navigation Basics", url: "https://docs.flutter.dev/ui/navigation" },
        ],
        practice: "Build a two-screen app: A list of products that navigates to a detail page when an item is tapped.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Networking & State Management",
    level: "Intermediate",
    steps: [
      {
        what: "Async Dart: Futures & Await",
        why: "Mobile apps cannot freeze. All time-consuming tasks (API, DB) must happen asynchronously.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Asynchronous Programming", url: "https://dart.dev/codelabs/async-await" },
        ],
        practice: "Write a function that simulates a data fetch with Future.delayed and returns a result after 2 seconds.",
      },
      {
        what: "JSON Parsing & Data Models",
        why: "To turn raw data from the web into safe, typed Dart objects.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "JSON and Serialization", url: "https://docs.flutter.dev/data-and-backend/json" },
        ],
        practice: "Create a User model with 'fromJson' and 'toJson' methods for a typical API response.",
      },
      {
        what: "Networking with HTTP Package",
        why: "To fetch live data from external services (Weather, News, Finance).",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Fetch data from the internet", url: "https://docs.flutter.dev/cookbook/networking/fetch-data" },
        ],
        practice: "Build an app that fetches a list of titles from JSONPlaceholder and displays them in a list.",
      },
      {
        what: "Advanced State Management: Provider",
        why: "'setState' becomes unmanageable in large apps. Provider is the easiest professional way to share data across the app.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Provider Package Tutorial", url: "https://www.youtube.com/watch?v=look-up-provider" },
        ],
        practice: "Build a 'Shopping Cart' where adding items on one screen updates a counter in the navbar on all screens.",
      },
      {
        what: "Local Persistence: SQLite & Preferences",
        why: "To allow users to use your app offline or remember their settings.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Persist data with SQLite", url: "https://docs.flutter.dev/cookbook/persistence/sqlite" },
        ],
        practice: "Build a 'Notes' app where entries are saved to a local database and persist across restarts.",
      },
      {
        what: "Firebase Auth & Cloud Firestore",
        why: "To add user logins and real-time database syncing without building a custom backend.",
        time: "2 Weeks",
        prereqs: "Step 13",
        resources: [
          { name: "Firebase for Flutter", url: "https://firebase.google.com/docs/flutter/setup" },
        ],
        practice: "Implement a 'Sign in with Google' flow and allow users to post status updates to a live feed.",
      },
      {
        what: "Responsive & Adaptive UI",
        why: "Apps run on small phones, tablets, and web browsers. Learn to use LayoutBuilder and MediaQuery.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Adaptive Apps Guide", url: "https://docs.flutter.dev/ui/layout/adaptive-responsive" },
        ],
        practice: "Create a dashboard that shows a grid on tablets but a single-column list on phones.",
      },
      {
        what: "Implicit & Explicit Animations",
        why: "Animations make an app feel alive and high-quality. Learn AnimatedContainer and Hero transitions.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Introduction to Animations", url: "https://docs.flutter.dev/ui/animations" },
        ],
        practice: "Build a gallery where images expand smoothly from a thumbnail to a full-screen view.",
      },
    ],
  },
  {
    title: "Advanced Stage: Architecture & Performance",
    level: "Advanced",
    steps: [
      {
        what: "The BLoC Pattern",
        why: "The industry standard for large enterprise apps. It strictly separates business logic from the UI.",
        time: "2 Weeks",
        prereqs: "Step 14",
        resources: [
          { name: "BLoC Library Documentation", url: "https://bloclibrary.dev/" },
        ],
        practice: "Refactor a medium-sized project to use 'flutter_bloc' for all its state transitions.",
      },
      {
        what: "Unit, Widget & Integration Testing",
        why: "Professional apps must be tested. You cannot rely on manual clicks to ensure quality.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Testing Flutter Apps", url: "https://docs.flutter.dev/testing" },
        ],
        practice: "Write 10 unit tests for your models and 2 widget tests for your core UI screens.",
      },
      {
        what: "Streams & Reactive Programming",
        why: "To handle continuous data sources like user locations, chat messages, or stock tickers.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Streams in Dart", url: "https://dart.dev/tutorials/language/streams" },
        ],
        practice: "Build a simple real-time stock price tracker using a Stream that emits fake data every second.",
      },
      {
        what: "Isolates & Multithreading",
        why: "Heavy computations (like image processing) will freeze the UI thread. Isolates move tasks to separate CPU cores.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Concurrency in Dart", url: "https://dart.dev/language/concurrency" },
        ],
        practice: "Implement a function that calculates a large prime number in an Isolate without dropping any frames.",
      },
      {
        what: "Platform Channels (Native Code)",
        why: "To access phone features not yet in a plugin. You'll need basic knowledge of Swift (iOS) or Kotlin (Android).",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Platform-specific code", url: "https://docs.flutter.dev/platform-integration/platform-channels" },
        ],
        practice: "Write a bridge to fetch the device's battery level from native code and display it in Flutter.",
      },
      {
        what: "Custom Painter & Canvas API",
        why: "For unique, complex UIs and data visualizations that standard widgets can't handle.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "CustomPaint Class", url: "https://api.flutter.dev/flutter/widgets/CustomPaint-class.html" },
        ],
        practice: "Draw a custom 'Star' or 'Heart' shape using the Canvas API.",
      },
      {
        what: "App Performance & DevTools",
        why: "To detect 'jank' (stuttering) and memory leaks. Pro developers use DevTools to profile their apps.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Performance Profiling", url: "https://docs.flutter.dev/perf/rendering/ui-performance" },
        ],
        practice: "Use the 'Performance' tab in DevTools to find and fix a frame-drop in a long scrolling list.",
      },
      {
        what: "CI/CD & Deployment",
        why: "To automate the build and release process. Essential for team environments.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "Continuous Delivery", url: "https://docs.flutter.dev/deployment/cd" },
        ],
        practice: "Set up a GitHub Action that runs your tests and builds an APK/IPA on every push to main.",
      },
      {
        what: "App Store & Play Store Submission",
        why: "The final hurdle. You must master certificates, identifiers, and the review process.",
        time: "1 Week",
        prereqs: "A finished project",
        resources: [
          { name: "Release Guide", url: "https://docs.flutter.dev/deployment/android" },
        ],
        practice: "Generate a release build and upload it to TestFlight (iOS) or Internal Testing (Android).",
      },
      {
        what: "Flutter for Web & Desktop",
        why: "To leverage Flutter's 'multi-platform' power. One codebase for everything.",
        time: "Ongoing",
        prereqs: "Advanced Flutter",
        resources: [
          { name: "Flutter Multi-Platform", url: "https://docs.flutter.dev/platform-integration/web" },
        ],
        practice: "Run your finished project as a Web App and fix any layout issues using responsive patterns.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Budget Tracker", teaches: "CRUD, setState, simple lists, and basic forms.", tech: "Flutter, Dart" },
  { level: "Beginner", title: "Quiz Master", teaches: "Conditional logic, widget modularity, and theme data.", tech: "Flutter" },
  { level: "Beginner", title: "Tip Calculator", teaches: "Text editing controllers, arithmetic, and basic layouts.", tech: "Flutter" },
  { level: "Intermediate", title: "Weather Forecast Dashboard", teaches: "Networking (HTTP), JSON parsing, and async/await UI states.", tech: "Flutter, OpenWeather API" },
  { level: "Intermediate", title: "Recipe Finder", teaches: "Provider state management, image assets, and complex navigation.", tech: "Flutter, Provider" },
  { level: "Intermediate", title: "Real-time Chat App", teaches: "Firebase Auth, Firestore, and Streams for live messages.", tech: "Flutter, Firebase" },
  { level: "Intermediate", title: "Expense Tracker with Charts", teaches: "Local storage (SQLite) and data visualization.", tech: "Flutter, Sqflite, FL Charts" },
  { level: "Advanced", title: "E-commerce Store with Checkout", teaches: "Riverpod/BLoC architecture, payment integration, and Hero animations.", tech: "Flutter, Stripe, Riverpod" },
  { level: "Advanced", title: "Fitness Tracker with Sensors", teaches: "Platform channels, hardware access (GPS/Steps), and background tasks.", tech: "Flutter, Native Interop" },
  { level: "Advanced", title: "Social Media Platform", teaches: "Cloud storage, push notifications, pagination, and clean architecture.", tech: "Flutter, Firebase, BLoC" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Builder",
    description: "Focus on syntax and basic app building to get productive quickly.",
    schedule: [
      "Days 1-7: Dart Basics, Flutter Setup, and Layouts.",
      "Days 8-15: State management (setState), Forms, and Assets.",
      "Days 16-23: Networking (HTTP) and building the 'Weather App'.",
      "Days 24-30: Local Persistence and Deploying to a real device.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Junior Dev",
    description: "Balanced path for building a solid foundation and a portfolio.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage + 3 projects.",
      "Days 21-45: Mastering Provider, Firebase, and Animations.",
      "Days 46-60: Introduction to Testing and CI/CD.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Professional",
    description: "Comprehensive path for total career readiness and enterprise-level skills.",
    schedule: [
      "Days 1-30: Core Development & UI Layouts.",
      "Days 31-60: Professional Data handling, Architecture (BLoC), and Testing.",
      "Days 61-90: Performance, Security, Native Interop, and Job Prep.",
    ]
  }
];

const interviewTopics = [
  "Stateless vs Stateful Widgets.",
  "How Flutter handles the 'build' method and tree reconciliation.",
  "Explaining the different State Management options (Provider, BLoC, Riverpod).",
  "How async/await works in Dart.",
  "What is the 'pubspec.yaml' file?",
  "Difference between Hot Reload and Hot Restart.",
  "Explaining 'Key' in Flutter and when to use them.",
  "How does Flutter talk to native code (Platform Channels)?",
  "The role of BuildContext.",
  "Unit vs Widget vs Integration testing.",
];

const codingQuestions = [
  { question: "Implement a counter using a StatefulWidget.", topic: "State Management" },
  { question: "Reverse a list in Dart without using built-in helper functions.", topic: "Dart Logic" },
  { question: "Write a function that fetches JSON and parses it into a model.", topic: "Networking" },
  { question: "Create a custom widget that takes a child and adds a shadow to it.", topic: "UI Design" },
];

const mcqs = [
  { question: "Which command installs project dependencies?", options: ["flutter add", "flutter sync", "flutter pub get", "flutter install"], answer: "flutter pub get" },
  { question: "What is the return type of a build method?", options: ["Widget", "void", "Element", "BuildContext"], answer: "Widget" },
  { question: "Which widget is used for absolute positioning?", options: ["Column", "Row", "Stack", "List"], answer: "Stack" },
];

const mistakes = [
  "Overusing 'setState' everywhere, leading to poor performance.",
  "Not using 'const' for widgets that never change.",
  "Mixing business logic with UI code (keep them separate!).",
  "Ignoring Sound Null Safety by using '!' force-unwraps too often.",
  "Forgetting to handle error cases in network requests (loading/error states).",
  "Deeply nesting widgets instead of breaking them into smaller, reusable ones.",
  "Forgetting to dispose of controllers (Animation, Text) causing memory leaks.",
  "Ignoring Flutter DevTools during development.",
  "Hardcoding strings instead of using localization.",
  "Trying to build a complex app before mastering Dart logic.",
];

export default function MobileAppDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Smartphone className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Mobile App Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive journey to mastering the art of building natively compiled applications for mobile, web, and desktop from a single codebase using Flutter.
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
            <CardDescription>Expert guidance to help you land your dream mobile developer role.</CardDescription>
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
                    {['Flutter', 'Dart', 'BLoC', 'Riverpod', 'Firebase', 'REST APIs', 'Unit Testing', 'CI/CD', 'Git', 'Clean Architecture', 'Adaptive UI', 'SQLite', 'Streams', 'Async/Await'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide high-quality GIFs of your app animations in GitHub READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose BLoC for state management').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Link to live App Store/Play Store apps if available.</li>
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
            Mobile development is a journey of creativity and precision. You are building tools that people will carry in their pockets and use every day. Stay consistent, keep building even when the state gets complex, and always stay curious. The world is waiting for your next great app. You've got this!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Apps
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
