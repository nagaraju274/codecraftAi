
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
  Code,
  Layout,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Smartphone,
  Terminal,
  Monitor,
  Workflow,
  ShieldCheck,
  Activity,
  Globe,
  Cpu,
  Layers,
  Search,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Flutter & Dart Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Flutter & Installation",
        why: "To set up your environment correctly and understand the 'Write Once, Run Anywhere' promise.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Flutter Official - Get Started", url: "https://docs.flutter.dev/get-started/install" },
          { name: "Flutter Installation Guide (YouTube)", url: "https://www.youtube.com/watch?v=I9ceqw5Ny-4" },
        ],
        practice: "Install Flutter SDK and run 'flutter doctor'. Set up VS Code or Android Studio. Run the default 'Counter' app.",
      },
      {
        what: "Dart Basics for Flutter",
        why: "Flutter apps are written in Dart. Mastering its basic syntax, types, and functions is mandatory.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Dart Language Tour", url: "https://dart.dev/language" },
          { name: "Dart for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q" },
        ],
        practice: "Solve 10+ logic problems in DartPad. Experiment with nullable types and 'var' vs 'final'.",
      },
      {
        what: "The Widget Tree Concept",
        why: "In Flutter, 'Everything is a Widget'. Understanding how the UI is built as a nested tree is the key to everything.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Introduction to Widgets", url: "https://docs.flutter.dev/ui/widgets/basics" },
        ],
        practice: "Draw a UI on paper and map it to a hierarchy of widgets (Scaffold, AppBar, Center, Text).",
      },
      {
        what: "Layout Widgets (Row & Column)",
        why: "To arrange elements horizontally and vertically. These are the most used widgets in any app.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Building Layouts in Flutter", url: "https://docs.flutter.dev/ui/layout" },
          { name: "Layout Widgets Explained", url: "https://www.youtube.com/watch?v=look-up-flutter-layouts" },
        ],
        practice: "Build a simple profile header with an avatar, name, and bio using Row and Column.",
      },
      {
        what: "Stateful vs. Stateless Widgets",
        why: "To understand how to build static interfaces vs. interactive ones that change data over time.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "State Management Intro", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/intro" },
        ],
        practice: "Convert a static Text widget into a dynamic one that changes when a Button is pressed using 'setState'.",
      },
      {
        what: "Assets & Custom Fonts",
        why: "Visuals and branding are core to mobile apps. Learn to load images from local folders and 'pubspec.yaml'.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Adding Assets and Images", url: "https://docs.flutter.dev/ui/assets-and-images" },
        ],
        practice: "Add a custom font and a PNG image to your project and display them on the home screen.",
      },
      {
        what: "User Input & Buttons",
        why: "To collect data and respond to user actions. Learn ElevatedButton, TextField, and Checkbox.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Handling User Input", url: "https://docs.flutter.dev/ui/interactive" },
        ],
        practice: "Build a simple login screen with two TextFields and a Login button.",
      },
      {
        what: "Building Lists (ListView & GridView)",
        why: "Most apps display collections of data. Mastering efficient lists is a daily requirement.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Working with Lists", url: "https://docs.flutter.dev/ui/widgets/scrolling" },
        ],
        practice: "Create a contact list app that displays 50 names using 'ListView.builder' for performance.",
      },
      {
        what: "Navigation & Routing",
        why: "To allow users to move between different screens. Learn 'Navigator.push' and 'pushNamed'.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Navigation Basics", url: "https://docs.flutter.dev/ui/navigation" },
        ],
        practice: "Build a 2-screen app where the first screen passes a string to the second screen.",
      },
      {
        what: "Basic Theming",
        why: "To maintain a consistent look across the app. Learn to use 'ThemeData' for colors and text styles.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Using Themes to share colors", url: "https://docs.flutter.dev/cookbook/design/themes" },
        ],
        practice: "Set a global primary color and apply different 'TextThemes' to your app.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Data & Architecture",
    level: "Intermediate",
    steps: [
      {
        what: "Async Dart: Futures & Await",
        why: "Apps need to fetch data from the web without freezing the UI. Async programming is non-negotiable.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Asynchronous Programming", url: "https://dart.dev/codelabs/async-await" },
        ],
        practice: "Write a function that 'waits' 2 seconds and then returns a success message.",
      },
      {
        what: "Networking with HTTP",
        why: "To fetch live data from external APIs (Weather, News, Users).",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Fetch data from the internet", url: "https://docs.flutter.dev/cookbook/networking/fetch-data" },
        ],
        practice: "Fetch a list of users from 'https://jsonplaceholder.typicode.com/users' and display them.",
      },
      {
        what: "JSON Parsing & Models",
        why: "To turn raw data from the web into safe, type-safe Dart objects.",
        time: "4 Days",
        prereqs: "Step 12",
        resources: [
          { name: "JSON and Serialization", url: "https://docs.flutter.dev/data-and-backend/json" },
        ],
        practice: "Create a 'User' model with a 'fromJson' factory method for the data you fetched.",
      },
      {
        what: "State Management: Provider",
        why: "'setState' is not enough for complex apps. Provider is the easiest professional way to share state.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Simple App State Management", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/simple" },
          { name: "Provider Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=look-up-provider" },
        ],
        practice: "Build a shopping cart where multiple screens share the same list of added items.",
      },
      {
        what: "Local Storage (Shared Preferences)",
        why: "To remember user settings (like Dark Mode) even after the app is closed.",
        time: "3 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Store Key-Value Data", url: "https://docs.flutter.dev/cookbook/persistence/key-value" },
        ],
        practice: "Save the user's name locally and display it on the next app launch.",
      },
      {
        what: "Responsive Layouts",
        why: "To make your app look good on small phones, tablets, and even web browsers.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Adaptive and Responsive Apps", url: "https://docs.flutter.dev/ui/layout/adaptive-responsive" },
        ],
        practice: "Use 'LayoutBuilder' to show a different UI when the screen width is greater than 600px.",
      },
      {
        what: "Forms & Complex Validation",
        why: "To build secure and user-friendly registration and data entry flows.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Build a form with validation", url: "https://docs.flutter.dev/cookbook/forms/validation" },
        ],
        practice: "Create a registration form that validates password length and email format.",
      },
      {
        what: "Animations: Implicit & Hero",
        why: "Subtle animations (like screen transitions or button fades) make an app feel high-quality.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Introduction to Animations", url: "https://docs.flutter.dev/ui/animations" },
        ],
        practice: "Build a gallery where clicking an image smoothly expands it into a new screen (Hero).",
      },
      {
        what: "Firebase Integration (Auth & Firestore)",
        why: "To build real apps with user logins and real-time databases without a custom backend.",
        time: "2 Weeks",
        prereqs: "Step 12",
        resources: [
          { name: "Firebase for Flutter", url: "https://firebase.flutter.dev/docs/overview" },
        ],
        practice: "Build a simple app where users can sign in with Google and post 'Status Updates' to a cloud DB.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery & Scalability",
    level: "Advanced",
    steps: [
      {
        what: "The BLoC Pattern",
        why: "The industry standard for large-scale enterprise apps. Separates business logic from UI completely.",
        time: "2 Weeks",
        prereqs: "Step 14",
        resources: [
          { name: "BLoC Library Documentation", url: "https://bloclibrary.dev/" },
        ],
        practice: "Refactor your shopping cart app to use 'flutter_bloc'.",
      },
      {
        what: "Advanced Networking (Interceptors & Cache)",
        why: "To handle complex auth tokens (JWT), auto-retry logic, and offline data caching.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Dio - Advanced HTTP Client", url: "https://pub.dev/packages/dio" },
        ],
        practice: "Set up a global logger and auth-header interceptor using the Dio package.",
      },
      {
        what: "Unit & Widget Testing",
        why: "Professional apps must be tested. Learn to ensure your logic doesn't break during updates.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Testing Flutter Apps", url: "https://docs.flutter.dev/testing" },
        ],
        practice: "Write unit tests for your model parsing and a widget test for your Login button.",
      },
      {
        what: "Custom Painter & Rive",
        why: "To build unique, custom-drawn UIs and complex vector animations.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "CustomPaint Class", url: "https://api.flutter.dev/flutter/widgets/CustomPaint-class.html" },
          { name: "Rive Flutter Runtime", url: "https://rive.app/community/doc/flutter/getting-started" },
        ],
        practice: "Draw a custom 'Star' or 'Pie Chart' using the Canvas API.",
      },
      {
        what: "Platform Channels (Native Interop)",
        why: "To access phone features (like Battery level or Bluetooth) not yet available in a plugin.",
        time: "1 Week",
        prereqs: "Kotlin/Swift Basics",
        resources: [
          { name: "Writing Platform-specific Code", url: "https://docs.flutter.dev/platform-integration/platform-channels" },
        ],
        practice: "Call a native Kotlin/Swift function from Flutter and display the result.",
      },
      {
        what: "App Performance Profiling",
        why: "To identify slow frames, memory leaks, and jank using the Flutter DevTools.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Performance Profiling", url: "https://docs.flutter.dev/perf/rendering/ui-performance" },
        ],
        practice: "Use the 'Performance' tab in DevTools to find why a long list is lagging.",
      },
      {
        what: "CI/CD & Deployment",
        why: "To automate building and testing for every code push. Get your app to the App Store.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "Continuous Delivery with Flutter", url: "https://docs.flutter.dev/deployment/cd" },
        ],
        practice: "Set up a GitHub Action to run your tests automatically on every push to main.",
      },
      {
        what: "Flutter for Web & Desktop",
        why: "Take your skills beyond mobile to build high-performance web and desktop apps.",
        time: "1 Week",
        prereqs: "All previous",
        resources: [
          { name: "Flutter for Web", url: "https://docs.flutter.dev/platform-integration/web" },
        ],
        practice: "Build and deploy a simple 'Dashboard' as a web app using Flutter.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Portfolio App", teaches: "Widgets, Layouts, Images, and basic Theming.", tech: "Flutter, Dart" },
  { level: "Beginner", title: "Tip Calculator", teaches: "User input, arithmetic logic, and 'setState'.", tech: "Flutter" },
  { level: "Beginner", title: "Quiz Master", teaches: "Lists, conditional UI, and model structures.", tech: "Flutter" },
  { level: "Intermediate", title: "Weather Forecast Dashboard", teaches: "Networking (HTTP), JSON parsing, and async UI.", tech: "Flutter, OpenWeather API" },
  { level: "Intermediate", title: "Movie Explorer", teaches: "Complex lists, search logic, and Navigation.", tech: "Flutter, TMDB API" },
  { level: "Intermediate", title: "Daily Expense Tracker", teaches: "Local storage (SQLite/Sqflite), Charts, and Forms.", tech: "Flutter, fl_chart" },
  { level: "Intermediate", title: "Real-time Chat Prototype", teaches: "Firebase Auth & Firestore, Streams, and UI updates.", tech: "Flutter, Firebase" },
  { level: "Advanced", title: "E-commerce App with Checkout", teaches: "BLoC/Riverpod, Payment integration, advanced animations.", tech: "Flutter, Stripe, Riverpod" },
  { level: "Advanced", title: "Task Management SaaS (KMP)", teaches: "Clean architecture, Unit testing, and multi-platform deployment.", tech: "Flutter, Git, CI/CD" },
  { level: "Advanced", title: "Fitness Tracker with Sensors", teaches: "Platform channels, hardware access, and high-perf background tasks.", tech: "Flutter, HealthKit/GoogleFit" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Intensive plan to get you building and deploying your first functional app.",
    schedule: [
      "Days 1-7: Dart Basics, Flutter Setup, and Core Widgets.",
      "Days 8-15: State management (setState), Forms, and Navigation.",
      "Days 16-23: Networking (HTTP) and building the 'Weather App'.",
      "Days 24-30: Persistence (SharedPrefs) and Deploying to a device.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for a solid foundation and a strong portfolio.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage + 3 projects.",
      "Days 21-45: Mastering Intermediate concepts, Provider, and Firebase.",
      "Days 46-60: Introduction to Animations and Testing.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for total professional readiness and enterprise skills.",
    schedule: [
      "Days 1-30: Fundamentals and UI Layout mastery.",
      "Days 31-60: Professional Data handling, State management (BLoC), and testing.",
      "Days 61-90: Performance, Security, Native Interop, and Job Prep.",
    ]
  }
];

const interviewTopics = [
  "Difference between a StatelessWidget and a StatefulWidget.",
  "Explain the BuildContext and why it matters.",
  "What is the difference between hot reload and hot restart?",
  "How does Flutter handle rendering? (Skia/Impeller).",
  "Explain the difference between 'main()' and 'runApp()'.",
  "What is the purpose of keys in Flutter?",
  "How do you share state across multiple screens?",
  "Explain the async/await pattern in Dart.",
  "What is a Mixin in Dart?",
  "Difference between Navigator 1.0 and Router (Navigator 2.0).",
];

const codingQuestions = [
  { question: "Implement a counter using a StatefulWidget.", topic: "State Management" },
  { question: "Reverse a list in Dart without using .reversed.", topic: "Dart Logic" },
  { question: "Create a custom widget that takes a child and adds a shadow to it.", topic: "UI Design" },
  { question: "Write a function that fetches JSON and parses it into a model.", topic: "Networking" },
];

const mcqs = [
  { question: "Which command is used to install project dependencies?", options: ["flutter add", "flutter sync", "flutter pub get", "flutter install"], answer: "flutter pub get" },
  { question: "In Flutter, what is the default unit of measurement for layout?", options: ["Pixels", "Rem", "Points", "Logical Pixels"], answer: "Logical Pixels" },
  { question: "Which widget is used to arrange children one on top of another?", options: ["Column", "Row", "Stack", "List"], answer: "Stack" },
];

const mistakes = [
  "Overusing 'setState' everywhere, leading to poor performance and messy code.",
  "Not using 'const' constructors for widgets that never change.",
  "Mixing business logic with UI code (the #1 junior developer mistake).",
  "Ignoring Sound Null Safety by using '!' (force unwrap) too often.",
  "Not handling error cases in network requests (app crashes on slow internet).",
  "Deeply nesting widgets instead of breaking them into smaller, reusable ones.",
  "Forgetting to dispose of controllers (Animation, Text) causing memory leaks.",
  "Hardcoding strings instead of using localization from the start.",
  "Ignoring Flutter DevTools during development.",
  "Trying to build a complex app before mastering Dart fundamentals.",
];

export default function FlutterRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Smartphone className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Flutter Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive guide to mastering the world's most popular cross-platform UI toolkit. Build beautiful apps for mobile, web, and desktop from a single codebase.
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
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded">
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Flutter', 'Dart', 'BLoC', 'Riverpod', 'Firebase', 'REST APIs', 'Unit Testing', 'Widget Testing', 'CI/CD', 'Git', 'Clean Architecture', 'Animations', 'Material Design', 'Adaptive Layouts'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide high-quality GIF recordings or live links to your apps.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose BLoC for state management').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight cross-functional contributions (e.g. 'Reduced build time by 30% using CI/CD').</li>
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
            Flutter is more than just a toolkit; it's a playground for your creativity. Stay consistent, keep building even when it gets hard, and always stay curious. The future of cross-platform apps is in your hands. You've got this!
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
