
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const stages = [
  {
    title: "Beginner Stage: Flutter and Dart Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Dart Programming Fundamentals",
        why: "Dart is the language used by Flutter. A strong foundation in its syntax, types, and control flow is essential before building apps.",
        time: "2 Weeks",
        prereqs: "Basic programming concepts",
        resources: [
          { name: "Dart Language Tour (Official)", url: "https://dart.dev/guides/language/language-tour" },
          { name: "freeCodeCamp - Dart for Beginners", url: "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q" },
        ],
        practice: "Write simple Dart console applications to practice variables, loops, and functions. Solve basic problems on a platform like Exercism.",
      },
      {
        what: "Introduction to Mobile Development",
        why: "To understand the landscape and choose the right tools. Learn the difference between native, web, and cross-platform development.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Native vs. Cross-Platform (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/native-vs-cross-platform-app-development/" },
        ],
        practice: "Write a short summary comparing the pros and cons of building an app natively versus using a cross-platform framework like Flutter.",
      },
      {
        what: "Setting Up Your Flutter Environment",
        why: "A correct setup is crucial for a smooth development experience. This includes the Flutter SDK, an editor, and device emulators/simulators.",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "Flutter Installation Docs (Official)", url: "https://docs.flutter.dev/get-started/install" },
          { name: "VS Code Setup for Flutter", url: "https://docs.flutter.dev/get-started/editor?tab=vscode" },
        ],
        practice: "Install the Flutter SDK, set up either Android Studio or VS Code with the Flutter extension, and successfully run `flutter doctor` with no errors.",
      },
      {
        what: "Understanding Widgets",
        why: "In Flutter, 'everything is a widget.' Understanding this core concept is the key to building any UI.",
        time: "1 Week",
        prereqs: "Dart Basics",
        resources: [
          { name: "Introduction to Widgets (Official)", url: "https://docs.flutter.dev/ui/widgets/basics" },
          { name: "Flutter Widget of the Week (YouTube Playlist)", url: "https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz38rZeyCFNcVM3KFo" },
        ],
        practice: "Build a simple 'Hello World' app. Experiment with basic widgets like `Container`, `Text`, `Icon`, and `Scaffold`.",
      },
      {
        what: "Building Layouts",
        why: "To arrange your widgets on the screen. `Row` and `Column` are the most fundamental layout widgets.",
        time: "1 Week",
        prereqs: "Flutter Widgets",
        resources: [
          { name: "Building Layouts in Flutter (Official)", url: "https://docs.flutter.dev/ui/layout" },
        ],
        practice: "Create a simple user profile layout with an `Image` at the top, followed by a `Text` widget for the name, and another `Text` widget for a bio, all arranged vertically in a `Column`.",
      },
      {
        what: "Handling User Input and Gestures",
        why: "To make your app interactive and respond to user actions like taps, drags, and swipes.",
        time: "1 Week",
        prereqs: "Layouts",
        resources: [
          { name: "Adding Interactivity (Official)", url: "https://docs.flutter.dev/ui/interactive" },
        ],
        practice: "Create a button that, when pressed, prints a message to the console. Wrap a `Container` in a `GestureDetector` to handle tap events.",
      },
      {
        what: "State Management: `StatefulWidget`",
        why: "To build UIs that can change dynamically over time. Learn the difference between `StatelessWidget` and `StatefulWidget`.",
        time: "1 Week",
        prereqs: "User Input",
        resources: [
          { name: "State management Introduction (Official)", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/intro" },
        ],
        practice: "Build a simple counter app. The screen should display a number and a button. Each time the button is pressed, the number should increment.",
      },
      {
        what: "Version Control with Git",
        why: "Essential for tracking changes, managing different versions of your app, and collaborating with others.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Git & GitHub for Beginners - Crash Course (YouTube)", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
        ],
        practice: "Create a new GitHub repository for your Flutter counter app and push your code to it.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Building Functional Apps",
    level: "Intermediate",
    steps: [
      {
        what: "Navigation and Routing",
        why: "To allow users to move between different screens in your app.",
        time: "1 Week",
        prereqs: "StatefulWidgets",
        resources: [
          { name: "Navigation and routing (Official)", url: "https://docs.flutter.dev/ui/navigation" },
          { name: "Flutter Navigation 2.0 (YouTube)", url: "https://www.youtube.com/watch?v=1g0_l4i_T44" },
        ],
        practice: "Create a two-screen app. The first screen has a button that, when pressed, navigates to the second screen. The second screen has a back button.",
      },
      {
        what: "Networking with HTTP",
        why: "To fetch data from the internet, which is a requirement for most modern apps.",
        time: "2 Weeks",
        prereqs: "Dart Async",
        resources: [
          { name: "Fetch data from the internet (Official)", url: "https://docs.flutter.dev/cookbook/networking/fetch-data" },
          { name: "Flutter HTTP Requests (freeCodeCamp)", url: "https://www.youtube.com/watch?v=8GG_dGz1n40" },
        ],
        practice: "Build an app that fetches a list of posts from the JSONPlaceholder API and displays their titles in a `ListView`.",
      },
      {
        what: "Working with JSON",
        why: "JSON is the standard format for data exchange on the web. You need to know how to parse it into usable Dart objects.",
        time: "1 Week",
        prereqs: "Networking",
        resources: [
          { name: "JSON and serialization (Official)", url: "https://docs.flutter.dev/data-and-backend/json" },
        ],
        practice: "Create Dart model classes for the data you fetched in the previous step and parse the JSON response into a list of these objects.",
      },
      {
        what: "Advanced State Management (Provider/Riverpod)",
        why: "`setState` is not suitable for complex apps. Learning a dedicated state management solution is crucial for scalability.",
        time: "2 Weeks",
        prereqs: "StatefulWidgets",
        resources: [
          { name: "State management options (Official)", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" },
          { name: "Riverpod Official Documentation", url: "https://riverpod.dev/" },
        ],
        practice: "Refactor your counter app to use Provider or Riverpod instead of `setState`.",
      },
      {
        what: "Data Persistence (Shared Preferences/SQLite)",
        why: "To save data locally on the user's device so it persists between app launches.",
        time: "1 Week",
        prereqs: "Dart Basics",
        resources: [
          { name: "Store key-value data (shared_preferences)", url: "https://docs.flutter.dev/cookbook/persistence/key-value" },
          { name: "Persist data with SQLite (sqflite)", url: "https://docs.flutter.dev/cookbook/persistence/sqlite" },
        ],
        practice: "Create a simple notes app where the notes are saved locally using SQLite.",
      },
      {
        what: "Working with Forms",
        why: "To collect and validate user input for things like login, registration, or settings.",
        time: "1 Week",
        prereqs: "Widgets",
        resources: [
          { name: "Build a form with validation (Official)", url: "https://docs.flutter.dev/cookbook/forms/validation" },
        ],
        practice: "Build a login screen with email and password fields, including validation to ensure the fields are not empty and the email is in a valid format.",
      },
      {
        what: "Using Device Hardware (Camera, GPS)",
        why: "To build rich applications that leverage the phone's native capabilities.",
        time: "2 Weeks",
        prereqs: "Basic Flutter",
        resources: [
          { name: "Take a picture using the camera (Official)", url: "https://docs.flutter.dev/cookbook/plugins/picture-using-camera" },
          { name: "Fetching location (geolocator package)", url: "https://pub.dev/packages/geolocator" },
        ],
        practice: "Build an app with a button that, when pressed, opens the camera. Once a picture is taken, display it on the screen.",
      },
      {
        what: "Testing Fundamentals",
        why: "To ensure your app is reliable and to catch bugs before they reach users.",
        time: "1 Week",
        prereqs: "Dart, Flutter",
        resources: [
          { name: "Testing Flutter apps (Official)", url: "https://docs.flutter.dev/testing" },
        ],
        practice: "Write a unit test for a simple Dart function and a widget test for your counter app to verify that tapping the button increments the count.",
      },
    ],
  },
  {
    title: "Advanced Stage: Production and Polish",
    level: "Advanced",
    steps: [
      {
        what: "Advanced UI and Animations",
        why: "To create beautiful, fluid, and engaging user experiences that set your app apart.",
        time: "2-3 Weeks",
        prereqs: "Intermediate Flutter",
        resources: [
          { name: "Introduction to animations (Official)", url: "https://docs.flutter.dev/ui/animations" },
          { name: "Flutter animations tutorials (Fireship)", url: "https://www.youtube.com/watch?v=j_mQ-sA0g54" },
        ],
        practice: "Create a loading spinner animation. Animate a widget's properties (like size or color) when a user taps it.",
      },
      {
        what: "App Architecture Patterns (BLoC, Clean Architecture)",
        why: "To structure large and complex applications in a way that is scalable, testable, and maintainable.",
        time: "2 Weeks",
        prereqs: "State Management",
        resources: [
          { name: "BLoC Library Official Documentation", url: "https://bloclibrary.dev/" },
          { name: "Clean Architecture for Flutter (YouTube)", url: "https://www.youtube.com/watch?v=KjE27w-h2kU" },
        ],
        practice: "Refactor a small project to use the BLoC pattern for state management.",
      },
      {
        what: "Push Notifications",
        why: "To engage and retain users by sending them timely and relevant information.",
        time: "1 Week",
        prereqs: "Networking",
        resources: [
          { name: "Firebase Cloud Messaging for Flutter", url: "https://firebase.flutter.dev/docs/messaging/overview" },
        ],
        practice: "Integrate Firebase into your app and set up a basic system to receive a test notification.",
      },
      {
        what: "Firebase Integration",
        why: "Firebase provides a powerful backend-as-a-service platform for authentication, databases, storage, and more, significantly speeding up development.",
        time: "2 Weeks",
        prereqs: "Networking",
        resources: [
          { name: "Get started with Firebase for Flutter", url: "https://firebase.flutter.dev/docs/overview" },
        ],
        practice: "Add Firebase Authentication to your app to allow users to sign up and log in with email and password.",
      },
      {
        what: "CI/CD for Mobile",
        why: "To automate the process of building, testing, and deploying your app, ensuring faster and more reliable releases.",
        time: "1 Week",
        prereqs: "Git, Testing",
        resources: [
          { name: "Continuous delivery with Flutter (Official)", url: "https://docs.flutter.dev/deployment/cd" },
          { name: "Codemagic CI/CD for Flutter", url: "https://codemagic.io/" },
        ],
        practice: "Set up a GitHub Actions workflow that automatically builds your Flutter app and runs tests on every push.",
      },
      {
        what: "Performance Optimization",
        why: "To ensure your app runs smoothly, avoids dropping frames, and provides a great user experience.",
        time: "1 Week",
        prereqs: "Intermediate Flutter",
        resources: [
          { name: "Flutter performance best practices (Official)", url: "https://docs.flutter.dev/perf" },
        ],
        practice: "Use Flutter's DevTools to profile a list-based app and identify performance bottlenecks.",
      },
      {
        what: "Platform-Specific Code (Platform Channels)",
        why: "To access native device APIs that are not available through a Flutter package.",
        time: "1 Week",
        prereqs: "Native (Kotlin/Swift) basics",
        resources: [
          { name: "Writing platform-specific code (Official)", url: "https://docs.flutter.dev/platform-integration/platform-channels" },
        ],
        practice: "Create a simple platform channel to get the device's battery level from the native side and display it in your Flutter UI.",
      },
      {
        what: "Publishing to App Stores",
        why: "The final step to get your app into the hands of users.",
        time: "1 Week",
        prereqs: "Completed App",
        resources: [
          { name: "Publishing to Google Play Store (Official)", url: "https://docs.flutter.dev/deployment/android" },
          { name: "Publishing to Apple App Store (Official)", url: "https://docs.flutter.dev/deployment/ios" },
        ],
        practice: "Go through the entire process of creating app store listings, generating necessary certificates and build files, and submitting a simple app for review.",
      },
    ],
  },
];

const projects = [
    { level: "Beginner", title: "Tip Calculator", teaches: "Basic widgets, layout, state management with `setState`.", tech: "Dart, Flutter" },
    { level: "Beginner", title: "Simple To-Do List", teaches: "Managing a list in state, user input, updating UI based on state changes.", tech: "Dart, Flutter" },
    { level: "Beginner", title: "Quiz App", teaches: "Handling user interaction, conditional UI rendering, state management.", tech: "Dart, Flutter" },
    { level: "Intermediate", title: "Weather App", teaches: "Networking, parsing JSON, asynchronous programming, displaying data from an API.", tech: "Dart, Flutter, HTTP, API" },
    { level: "Intermediate", title: "Recipe Finder App", teaches: "Building complex UIs with lists/grids, navigation between screens, passing data.", tech: "Dart, Flutter, Navigation" },
    { level: "Intermediate", title: "Expense Tracker", teaches: "Forms, data persistence with SQLite or Shared Preferences, creating charts.", tech: "Dart, Flutter, sqflite" },
    { level: "Intermediate", title: "Simple Chat App", teaches: "Real-time database integration (Firebase Firestore), stream-based UI updates.", tech: "Dart, Flutter, Firebase" },
    { level: "Advanced", title: "E-commerce App", teaches: "Complex state management, user authentication, payment gateway integration, advanced UI.", tech: "Dart, Flutter, Firebase, BLoC/Riverpod" },
    { level: "Advanced", title: "Social Media App Clone", teaches: "User profiles, photo uploads (Firebase Storage), feeds, notifications, clean architecture.", tech: "Dart, Flutter, Firebase, Clean Architecture" },
    { level: "Advanced", title: "Ride-Sharing App (UI Clone)", teaches: "Google Maps integration, real-time location tracking, advanced UI with stacked widgets.", tech: "Dart, Flutter, Google Maps API" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get you from zero to building your first simple app.",
        schedule: [
            "Days 1-10: Master Dart Fundamentals and Flutter's basic widgets and layouts.",
            "Days 11-20: Focus on state management with `StatefulWidget`, navigation, and build the To-Do List project.",
            "Days 21-30: Learn networking by building the Weather App project. Deploy it to a device.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach covering core concepts and preparing you for junior developer roles.",
        schedule: [
            "Days 1-20: Complete the entire Beginner Stage, building all practice projects.",
            "Days 21-40: Dive deep into the Intermediate Stage, focusing on networking, advanced state management (Provider/Riverpod), and data persistence.",
            "Days 41-60: Build a more complex project like the Expense Tracker or Chat App, and learn the basics of testing and Firebase integration.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge, specialization, and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 31-60: Focus on the Advanced Stage, mastering app architecture (BLoC), performance optimization, and animations.",
            "Days 61-75: Build an advanced, portfolio-worthy project like the E-commerce or Social Media app.",
            "Days 76-90: Focus on CI/CD, publishing to app stores, and interview preparation.",
        ]
    }
];

const interviewTopics = [
    "What is the difference between a `StatelessWidget` and a `StatefulWidget`?",
    "Explain the widget tree, element tree, and render object tree in Flutter.",
    "What are keys in Flutter and when should you use them?",
    "Explain the difference between `main()` and `runApp()`.",
    "What is the purpose of the `pubspec.yaml` file?",
    "Describe different state management approaches you have used (setState, Provider, BLoC, Riverpod, etc.).",
    "How does `async/await` work in Dart?",
    "Explain the difference between hot reload and hot restart.",
,"What are mixins in Dart and why are they useful?",
,"How do you handle different screen sizes and densities in Flutter?",
];

const mcqs = [
    { question: "In Flutter, what is the primary function of a `StatefulWidget`?", options: ["To create a widget with a fixed appearance", "To manage mutable state that can change over the lifetime of the widget", "To perform animations", "To handle user gestures only"], answer: "To manage mutable state that can change over the lifetime of the widget" },
    { question: "Which layout widget arranges its children in a vertical line?", options: ["Row", "Stack", "Column", "Container"], answer: "Column" },
    { question: "In Dart, what keyword is used to declare a variable that can hold a null value?", options: ["`nullable`", "`optional`", "`?` (question mark)", "`!` (exclamation mark)"], answer: "`?` (question mark)" },
];

const mistakes = [
    "Overusing `setState`, leading to poor performance and complex widget trees.",
    "Not understanding the difference between `Row`/`Column`'s `mainAxisAlignment` and `crossAxisAlignment`.",
    "Building deeply nested widget trees without breaking them down into smaller, reusable widgets.",
    "Ignoring state management solutions for anything beyond a very simple app.",
    "Making network or database calls directly in the build method.",
    "Not handling loading and error states when fetching data from an API.",
    "Forgetting to dispose of controllers (like `TextEditingController` or `AnimationController`) to prevent memory leaks.",
    "Using `Row` or `Column` inside another `Row` or `Column` without wrapping the inner one in an `Expanded` or `Flexible` widget, causing layout overflows.",
    "Not using `const` constructors for widgets that don't change, which prevents performance optimizations.",
    "Ignoring the power of Flutter DevTools for debugging layouts and performance."
];

export default function MobileAppDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Mobile App Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive, step-by-step guide to building beautiful, natively compiled applications for mobile with Flutter.
          </p>
        </header>

        {stages.map((stage) => (
          <Card key={stage.title}>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                {stage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold">
                      Step {index + 1}: {step.what}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <p><strong>Why it’s important:</strong> {step.why}</p>
                        <p><strong>Time to complete:</strong> {step.time}</p>
                        <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                        <h4 className="font-semibold">Free Resources:</h4>
                        <ul>
                          {step.resources.map(res => (
                            <li key={res.url}><a href={res.url} target="_blank" rel="noopener noreferrer">{res.name}</a></li>
                          ))}
                        </ul>
                         <h4 className="font-semibold">Practice Tasks:</h4>
                        <p>{step.practice}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
         <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
                <CardDescription>Apply your knowledge with these hands-on projects, from beginner to advanced.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(p => (
                     <Card key={p.title}>
                        <CardHeader>
                            <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                            <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4"><strong>What it teaches:</strong> {p.teaches}</p>
                            <p className="text-sm"><strong>Tech:</strong> {p.tech}</p>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
                <CardDescription>Choose a plan that fits your schedule and goals.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    {plans.map((plan, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-semibold">{plan.title}</AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <p className="text-muted-foreground mb-4">{plan.description}</p>
                             <ul className="list-disc pl-5 space-y-2">
                                {plan.schedule.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
                <CardDescription>Key topics, questions, and resume tips to land a mobile developer job.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Important Interview Topics</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {interviewTopics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Multiple Choice Questions (MCQs)</h3>
                     {mcqs.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">{q.question}</p>
                            <p className="text-sm text-muted-foreground">Correct Answer: {q.answer}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Resume Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Flutter', 'Dart', 'Mobile App Development', 'iOS', 'Android', 'Cross-Platform', 'State Management', 'BLoC', 'Riverpod', 'Firebase', 'REST APIs', 'UI/UX'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, features, and setup instructions.</li>
                        <li>Include animated GIFs or screenshots to quickly demonstrate what your app does. A GIF is more effective than a static image.</li>
                        <li>Ensure your code is well-organized into logical folders (e.g., `lib/src`, `lib/widgets`, `lib/models`).</li>
                        <li>Provide a link to the app on the Google Play Store or Apple App Store if it's published.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Lightbulb className="h-8 w-8 text-primary"/>10 Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    {mistakes.map(mistake => <li key={mistake}>{mistake}</li>)}
                </ol>
            </CardContent>
        </Card>

        <div className="text-center pt-8">
            <h2 className="text-2xl font-bold">Your Journey Starts Now</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Building mobile apps is a challenging but incredibly rewarding journey. This roadmap is your guide, but the real learning happens when you start building and solving problems. Stay curious, be persistent, and celebrate your progress along the way. Happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
