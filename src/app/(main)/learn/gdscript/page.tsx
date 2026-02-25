
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
  Gamepad2,
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
  Terminal,
  Box,
  Binary,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Godot Basics & GDScript Fundamentals",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Godot & GDScript",
        why: "To understand the 'Node & Scene' architecture and set up the lightweight Godot editor. GDScript is optimized for Godot's unique structure.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Godot Docs: Getting Started", url: "https://docs.godotengine.org/en/stable/getting_started/introduction/index.html" },
          { name: "GDScript in 100 Seconds (YouTube)", url: "https://www.youtube.com/watch?v=look-up-gdscript-intro" },
        ],
        practice: "Install Godot 4.x. Create a 'Main' scene and print 'Hello, Game Dev!' to the Output window.",
      },
      {
        what: "Variables, Data Types & @onready",
        why: "To store game data like player health or speed. '@onready' is a critical keyword for referencing other nodes in the scene tree.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "GDScript Basics: Variables", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html#variables" },
        ],
        practice: "Declare variables for a player's score and health. Use @onready to get a reference to a Sprite2D node.",
      },
      {
        what: "Game Math: Vector2 & Vector3",
        why: "To move objects in 2D or 3D space. Vectors are the language of position, direction, and velocity.",
        time: "4 Days",
        prereqs: "Basic Algebra",
        resources: [
          { name: "Vector Math in Godot", url: "https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html" },
        ],
        practice: "Calculate the direction vector between a player and an enemy. Implement simple movement logic.",
      },
      {
        what: "Control Flow: if, match, and loops",
        why: "Logic branching allows your game to react to player choices. 'match' is GDScript's powerful version of 'switch'.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Flow in GDScript", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html#control-flow" },
        ],
        practice: "Write a script that changes a character's state (Idle, Running, Jumping) using a 'match' statement.",
      },
      {
        what: "The _process vs _physics_process",
        why: "To understand the difference between frame-rate-dependent logic and consistent physics-based updates. This prevents 'jittery' movement.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "The Scripting Lifecycle", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/idle_and_physics_processing.html" },
        ],
        practice: "Move a node using 'delta' in _process. Observe how it behaves when the frame rate changes.",
      },
      {
        what: "Signals & The Observer Pattern",
        why: "The #1 concept for clean Godot architecture. Signals allow nodes to talk to each other without being tightly coupled.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Using Signals", url: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html" },
        ],
        practice: "Create a button that emits a custom signal 'was_clicked' and have a separate UI element react to it.",
      },
      {
        what: "CharacterBody2D & Basic Physics",
        why: "To build playable characters. Master 'move_and_slide()' and 'velocity' management.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "CharacterBody2D Documentation", url: "https://docs.godotengine.org/en/stable/classes/class_characterbody2d.html" },
        ],
        practice: "Build a top-down movement script with keyboard input (W, A, S, D).",
      },
      {
        what: "Scenes & Instancing",
        why: "To create reusable game objects like bullets, coins, or enemies. Mastering 'instantiate()' is essential for dynamic games.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Instancing Basics", url: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/instancing.html" },
        ],
        practice: "Build a 'Spawner' node that creates 5 enemy instances at random positions when the game starts.",
      },
      {
        what: "User Input Map",
        why: "To abstract keyboard/controller keys into logical actions (e.g., 'jump', 'fire'). This makes your game easy to reconfigure.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Input Actions Guide", url: "https://docs.godotengine.org/en/stable/tutorials/inputs/input_examples.html" },
        ],
        practice: "Define a 'jump' action in Project Settings and use 'Input.is_action_just_pressed' in your script.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Systems & Data Management",
    level: "Intermediate",
    steps: [
      {
        what: "Classes, Inheritance & 'extends'",
        why: "To write DRY (Don't Repeat Yourself) code. Create a base 'Enemy' class and extend it into 'Orc' or 'Goblin'.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Classes in GDScript", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html#classes" },
        ],
        practice: "Refactor your enemy logic so all common behaviors live in a shared 'BaseEnemy.gd' script.",
      },
      {
        what: "Singletons & Autoloads",
        why: "To manage global game state (like high scores or player inventory) that persists across scene changes.",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Singletons (Autoload)", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html" },
        ],
        practice: "Create a 'GameManager' singleton that tracks how many coins the player has collected.",
      },
      {
        what: "UI Canvas & Layouts",
        why: "To build menus, HUDs, and inventory screens. Mastering Control nodes (Grid, HBox, VBox) is vital for UI dev.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Design Interfaces in Godot", url: "https://docs.godotengine.org/en/stable/tutorials/ui/index.html" },
        ],
        practice: "Build a responsive main menu with 'Start', 'Options', and 'Quit' buttons.",
      },
      {
        what: "Resources (.tres files)",
        why: "A powerful way to store data (e.g., item stats, enemy levels) as objects. Resources are much cleaner than hardcoding large dictionaries.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "The Resource Class", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/resources.html" },
        ],
        practice: "Create an 'ItemData' custom resource and use it to define three different weapons with unique stats.",
      },
      {
        what: "AnimationPlayer & AnimationTree",
        why: "To bring your sprites to life. Learn to sync code with visual states using parameters.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Intro to AnimationPlayer", url: "https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html" },
        ],
        practice: "Create an animation for a player character and trigger 'footstep' sounds via code-called functions within the animation.",
      },
      {
        what: "File I/O: JSON & Save Systems",
        why: "To save player progress locally. Learn to read/write JSON files safely using the 'FileAccess' class.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Saving Games in Godot", url: "https://docs.godotengine.org/en/stable/tutorials/io/saving_games.html" },
        ],
        practice: "Implement a 'Save Game' button that writes the current player score to a local .json file.",
      },
      {
        what: "Raycasting & Line-of-Sight",
        why: "Essential for shooting mechanics, enemy AI detection, and complex environmental interactions.",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Raycasting 2D", url: "https://docs.godotengine.org/en/stable/tutorials/physics/ray-casting.html" },
        ],
        practice: "Build an enemy that only chases the player when it has a clear line-of-sight (no walls in between).",
      },
      {
        what: "Shaders & Visual Effects",
        why: "To create glowing, flashing, or distorted effects. Shaders run on the GPU and are extremely efficient.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Intro to Shaders (Godot)", url: "https://docs.godotengine.org/en/stable/tutorials/shading/your_first_shader.html" },
        ],
        practice: "Write a simple shader that makes a sprite flash white when it takes damage.",
      },
      {
        what: "Unit Testing with GUT",
        why: "Professional games need automated tests to ensure mechanics don't break as the code grows.",
        time: "5 Days",
        prereqs: "Step 10",
        resources: [
          { name: "GUT (Godot Unit Test) Wiki", url: "https://github.com/bitwes/Gut/wiki" },
        ],
        practice: "Write a test that verifies your health system correctly reduces HP and triggers a signal on death.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery & High-Performance",
    level: "Advanced",
    steps: [
      {
        what: "Performance Profiling & Optimization",
        why: "To maintain 60+ FPS. Learn to identify bottlenecks using the built-in Profiler and Monitor tools.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Optimization Guide", url: "https://docs.godotengine.org/en/stable/tutorials/performance/general_optimization_tips.html" },
        ],
        practice: "Use the Monitor to find which script is consuming the most CPU and optimize its loops.",
      },
      {
        what: "Multiplayer Netcode (ENet)",
        why: "Building games that people play together. Master Sync, Authority, and RPCs (Remote Procedure Calls).",
        time: "3 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "High-Level Multiplayer", url: "https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html" },
        ],
        practice: "Build a simple lobby where two players can connect and see each other's movement in real-time.",
      },
      {
        what: "Tool Scripting (@tool)",
        why: "To extend the Godot Editor. Build custom inspectors, visualizers, and level-editing tools to speed up your workflow.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Running Code in the Editor", url: "https://docs.godotengine.org/en/stable/tutorials/plugins/running_code_in_the_editor.html" },
        ],
        practice: "Create a tool script that automatically arranges a grid of sprites in the editor window as you move them.",
      },
      {
        what: "Advanced AI: Behavior Trees",
        why: "For complex, believable NPC logic that goes beyond simple state machines.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Behavior Trees Explained (YouTube)", url: "https://www.youtube.com/watch?v=look-up-behavior-trees" },
        ],
        practice: "Build an AI that patrols, investigates noises, and calls for backup when it sees the player.",
      },
      {
        what: "Procedural Content Generation (PCG)",
        why: "To create endless variety in levels, items, or terrain using algorithms like Perlin Noise.",
        time: "2 Weeks",
        prereqs: "Math Stage",
        resources: [
          { name: "Procedural Generation in Godot", url: "https://www.youtube.com/watch?v=id-procedural-godot" },
        ],
        practice: "Write a script that generates a random but walkable tile-based maze.",
      },
      {
        what: "Multi-threading & ThreadPools",
        why: "To perform heavy tasks (like PCG or complex math) without freezing the UI or dropping frames.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "Thread-Safe Scripting", url: "https://docs.godotengine.org/en/stable/tutorials/performance/thread_safe_apis.html" },
        ],
        practice: "Move a long-running calculation into a separate thread and signal the main thread when finished.",
      },
      {
        what: "Native Interop: GDExtension (Introduction)",
        why: "When GDScript is too slow, move critical logic to C++ or Rust for near-native performance.",
        time: "2 Weeks",
        prereqs: "C++ or Rust Basics",
        resources: [
          { name: "GDExtension Overview", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/index.html" },
        ],
        practice: "Research how to link a simple C++ math function into a Godot project.",
      },
      {
        what: "Project Organization & Architecture",
        why: "To manage projects with 100+ scenes. Learn about decoupled systems and clean API boundaries.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Godot Style Guide", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_styleguide.html" },
        ],
        practice: "Audit an old project and reorganize folders into a modular, professional structure.",
      },
      {
        what: "Deployment & Build Pipelines",
        why: "To automate the release of your game for PC, Web, and Mobile. Essential for indie professional workflows.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "Exporting Projects", url: "https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html" },
        ],
        practice: "Set up a GitHub Action that builds your project for Windows and HTML5 on every git push.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Architecture, UI, AI, Networking, and Performance into a production-ready vertical slice.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Co-op Roguelike' vertical slice with procedural levels, persistent saves, and a polished HUD.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Cookie Clicker Clone", teaches: "UI Buttons, Signals, and basic Variables.", tech: "Godot, GDScript" },
  { level: "Beginner", title: "Classic Pong", teaches: "Physics, Input, and simple AI logic.", tech: "CharacterBody2D" },
  { level: "Beginner", title: "Top-down Maze Game", teaches: "Tilemaps, Collisions, and Movement.", tech: "Godot, GDScript" },
  { level: "Intermediate", title: "RPG Inventory System", teaches: "Resources (.tres), UI Grids, and Drag-and-drop.", tech: "Control Nodes, Resources" },
  { level: "Intermediate", title: "Sidescrolling Platformer", teaches: "AnimationTrees, Gravity, and Jump logic.", tech: "Godot, AnimationPlayer" },
  { level: "Intermediate", title: "Quest & Dialogue System", teaches: "JSON parsing, Save/Load, and String management.", tech: "FileAccess, JSON" },
  { level: "Intermediate", title: "Tower Defense with AI", teaches: "Pathfinding (NavMesh), Signals, and Spawners.", tech: "NavigationAgent2D" },
  { level: "Advanced", title: "Multiplayer Battle Arena", teaches: "Netcode, Synchronization, and Server Authority.", tech: "ENetMultiplayerPeer" },
  { level: "Advanced", title: "Procedural Planet Generator", teaches: "Noise algorithms, Meshes, and optimization.", tech: "FastNoiseLite, MeshInstance3D" },
  { level: "Advanced", title: "Custom Level Editor Tool", teaches: "@tool scripts, Editor plugins, and workflow.", tech: "Godot Editor API" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Indie Jammer",
    description: "Focus on syntax and core engine nodes to get your first game running quickly.",
    schedule: [
      "Days 1-7: Godot Editor, Nodes, and Basic Logic.",
      "Days 8-15: Physics (move_and_slide), Input, and Signals.",
      "Days 16-23: UI, Audio, and Scene management.",
      "Days 24-30: Build and publish a '2D Platformer' to itch.io.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Professional Developer",
    description: "Balanced path covering data management, animation, and intermediate systems.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Resources, Save Systems, and AnimationTrees.",
      "Days 46-60: Navigation AI and building a 'Tower Defense' project.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Technical Lead",
    description: "Comprehensive path for professional systems, networking, and performance roles.",
    schedule: [
      "Days 1-30: Core Engine & Scripting foundations.",
      "Days 31-60: Professional Systems (Testing, Shaders, UI).",
      "Days 61-90: Netcode, Optimization, Tool scripting, and final Capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between _process and _physics_process.",
  "What are Signals? Why use them over direct function calls?",
  "Explain the 'Node and Scene' architecture.",
  "What is @onready and how does it prevent errors?",
  "Describe how Godot handles memory (Reference Counting vs Garbage Collection).",
  "Explain the 'Autoload' feature and when to use Singletons.",
  "How do you optimize a game with 1000+ moving objects?",
  "What are Resources (.tres) and how do they differ from Nodes?",
  "Explain Server Authority in Multiplayer Netcode.",
  "What does the '@tool' keyword do in GDScript?",
];

const codingQuestions = [
  { question: "Implement a smooth 'Follow' logic for a camera using lerp().", topic: "Math/Interp" },
  { question: "Write a script to save a dictionary of data to a local file safely.", topic: "File I/O" },
  { question: "How would you implement a simple finite state machine for a player?", topic: "Architecture" },
  { question: "Write a generic 'Spawner' function that takes a PackedScene as a parameter.", topic: "Instancing" },
];

const mcqs = [
  { question: "Which node is best for a physics-based player character?", options: ["Node2D", "StaticBody2D", "CharacterBody2D", "Area2D"], answer: "CharacterBody2D" },
  { question: "What is the result of '1 / 2' in GDScript 4?", options: ["0", "0.5", "1", "Runtime Error"], answer: "0.5 (In v4, it is float by default)" },
  { question: "Which keyword allows code to run in the editor?", options: ["@edit", "@tool", "@run", "@active"], answer: "@tool" },
];

const mistakes = [
  "Hardcoding paths: Use '$' or '%Exported' variables instead of string paths.",
  "Not using 'delta': This makes game speed depend on hardware speed.",
  "Polluting the global scope: Avoid putting everything in Singletons.",
  "Tutorial Hell: Watching without typing. Build something unique every day.",
  "Ignoring the official docs: Godot has one of the best manuals in tech.",
  "Neglecting naming conventions: Stick to snake_case for functions/vars.",
  "Massive Scripts: Break large nodes into smaller, reusable sub-scenes.",
  "Ignoring the Profiler: Guessing where lag is instead of measuring it.",
  "Not using Type Hints: (var x: int = 5) prevents subtle bugs.",
  "Forgetting to connect signals: Always check the 'Node' tab in the editor.",
];

export default function GdscriptRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Gamepad2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The GDScript Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the heartbeat of the Godot Engine. From absolute foundations of nodes and scenes to advanced systems engineering, shaders, and professional netcode.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Game Development Languages">
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your game portfolio.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream role in game development.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Game Logic Challenges</h3>
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
                    {['Godot 4', 'GDScript', 'Signals', 'Scene Tree', 'Resource Management', 'ENet Netcode', 'Shaders', 'Physics2D/3D', 'Performance Profiling', 'Tool Scripting', 'C# Interop', 'Git'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Component-based Design'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase playable demos on itch.io or your personal site.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with performance-critical game loops.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Create the Fun. Build the Code.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            GDScript is more than just a language; it's the creative gateway to making your game ideas real. It rewards the precise, the curious, and the playful. Stay consistent, read the source code of the engines you love, and remember: The greatest games ever played started with a single node. Your journey to game dev mastery starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Games
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
