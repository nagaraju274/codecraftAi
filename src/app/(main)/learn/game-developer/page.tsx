
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
    title: "Beginner Stage: Foundations & 2D Development",
    level: "Beginner",
    steps: [
      {
        what: "Intro to Game Engines (Unity) & C# Basics",
        why: "Unity is the most accessible engine for beginners. C# is the industry-standard scripting language for Unity.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Unity Learn: Essentials", url: "https://learn.unity.com/pathway/unity-essentials" },
          { name: "C# for Game Dev (YouTube)", url: "https://www.youtube.com/watch?v=gfkTfcpWqAY" },
        ],
        practice: "Install Unity Hub and Hub. Create a 'Hello World' project that prints to the Unity Console.",
      },
      {
        what: "Game Math: Vectors & Trigonometry",
        why: "To move objects, calculate distances, and handle rotations. Vectors are the language of 3D space.",
        time: "4 Days",
        prereqs: "Basic Algebra",
        resources: [
          { name: "Math for Game Dev (YouTube)", url: "https://www.youtube.com/watch?v=sKiw6M7GuKY" },
        ],
        practice: "Calculate the distance between two points manually and move an object towards a target vector.",
      },
      {
        what: "Transformations & Game Loop",
        why: "The Game Loop (Update vs FixedUpdate) is the heartbeat of every game. Understanding frames is critical.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "The Unity Game Loop", url: "https://docs.unity3d.com/Manual/ExecutionOrder.html" },
        ],
        practice: "Create a script that rotates a cube based on the time elapsed using 'Time.deltaTime'.",
      },
      {
        what: "2D Sprites & Layering",
        why: "To manage 2D visuals and handle the 'Order in Layer' to ensure graphics render correctly.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Unity 2D Sprites Guide", url: "https://docs.unity3d.com/Manual/Sprites.html" },
        ],
        practice: "Create a 2D scene with a background, player, and platforms using sorting layers.",
      },
      {
        what: "Physics 2D: Colliders & Rigidbody",
        why: "To handle gravity, friction, and collision detection without writing complex custom code.",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Unity 2D Physics Tutorial", url: "https://learn.unity.com/tutorial/2d-physics" },
        ],
        practice: "Build a 'Bouncing Ball' scene where a ball reacts to gravity and bounces off walls.",
      },
      {
        what: "Input System: Keyboard & Mouse",
        why: "To allow players to control the game. The new Unity Input System is versatile for all platforms.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Input System Introduction", url: "https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/QuickStartGuide.html" },
        ],
        practice: "Map WASD keys to move a square around the screen.",
      },
      {
        what: "Audio & Sound Effects",
        why: "Audio provides essential feedback and atmosphere. Master AudioSources and AudioListeners.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Unity Audio Guide", url: "https://docs.unity3d.com/Manual/AudioOverview.html" },
        ],
        practice: "Trigger a 'jump' sound effect whenever the player presses the spacebar.",
      },
      {
        what: "UI Canvas: Text & Buttons",
        why: "To build menus, HUDs, and inventory screens. UI is how you communicate state to the player.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Unity UI Tutorial", url: "https://learn.unity.com/tutorial/ui-components" },
        ],
        practice: "Build a Score HUD that updates whenever an object is collected.",
      },
      {
        what: "Prefab System & Instantiation",
        why: "To create reusable templates for game objects (bullets, enemies, coins).",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Unity Prefabs Guide", url: "https://docs.unity3d.com/Manual/Prefabs.html" },
        ],
        practice: "Create a 'Spawner' that creates coins at random positions every 2 seconds.",
      },
      {
        what: "Beginner Project: 2D Platformer",
        why: "To combine all foundations into a playable loop with movement, physics, and goals.",
        time: "1 Week",
        prereqs: "Steps 1-9",
        resources: [
          { name: "2D Platformer Tutorial", url: "https://learn.unity.com/project/2d-platformer-template" },
        ],
        practice: "Complete a platformer with a win/loss condition and export a build for desktop.",
      },
    ],
  },
  {
    title: "Intermediate Stage: 3D Mechanics & Systems",
    level: "Intermediate",
    steps: [
      {
        what: "3D Space & Viewports",
        why: "Moving from X/Y to X/Y/Z. Understanding local vs. world space is essential for 3D logic.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "3D Space in Unity", url: "https://learn.unity.com/tutorial/3d-space-and-coordinates" },
        ],
        practice: "Create a 3D compass that always points towards a specific target in world space.",
      },
      {
        what: "3D Physics: Raycasting",
        why: "Raycasting is used for shooting mechanics, line-of-sight AI, and environment detection.",
        time: "5 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Raycasting Explained (YouTube)", url: "https://www.youtube.com/watch?v=raycasting-unity" },
        ],
        practice: "Implement a 'Lazer Pointer' that prints the name of the object it's hitting.",
      },
      {
        what: "Lighting & Global Illumination",
        why: "To create mood and depth. Learn Real-time vs. Baked lighting and Shadow types.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Unity Lighting Docs", url: "https://docs.unity3d.com/Manual/LightingOverview.html" },
        ],
        practice: "Set up a day/night cycle using a rotating Directional Light and Skybox.",
      },
      {
        what: "Animation: Animator & Mecanim",
        why: "To bring characters to life. Master State Machines, Transitions, and Parameters.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Animator Controller Guide", url: "https://docs.unity3d.com/Manual/AnimatorControllers.html" },
        ],
        practice: "Set up a character that transitions from Idle to Run based on player movement speed.",
      },
      {
        what: "Intermediate C#: Events & Delegates",
        why: "To write clean, decoupled code. Events allow systems to talk without knowing about each other.",
        time: "1 Week",
        prereqs: "C# Basics",
        resources: [
          { name: "Events and Delegates (YouTube)", url: "https://www.youtube.com/watch?v=k4JlFxPiPHg" },
        ],
        practice: "Create a 'HealthSystem' that triggers a 'PlayerDied' event when health reaches zero.",
      },
      {
        what: "Game AI: Pathfinding (NavMesh)",
        why: "To allow enemies or NPCs to navigate complex 3D environments intelligently.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Unity NavMesh Tutorial", url: "https://learn.unity.com/tutorial/navmesh-basics" },
        ],
        practice: "Create a 'Follower' NPC that finds the shortest path to the player in a maze.",
      },
      {
        what: "Data Persistence (JSON/PlayerPrefs)",
        why: "To save player progress, settings, and high scores across sessions.",
        time: "4 Days",
        prereqs: "C# Basics",
        resources: [
          { name: "Saving Data in Unity", url: "https://learn.unity.com/tutorial/persistence-data-saving" },
        ],
        practice: "Save the current level and items collected to a local JSON file.",
      },
      {
        what: "Materials & Shader Graph",
        why: "To define how surfaces look. Shader Graph allows for visual coding of complex surface effects.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Intro to Shader Graph", url: "https://unity.com/features/shader-graph" },
        ],
        practice: "Build a glowing 'Hologram' shader using the Shader Graph tool.",
      },
      {
        what: "Camera Systems (Cinemachine)",
        why: "Cinemachine automates professional camera tracking, shaking, and transitions.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Cinemachine Guide", url: "https://unity.com/features/cinemachine" },
        ],
        practice: "Set up a 'Smart Camera' that follows the player smoothly and zooms in when stationary.",
      },
      {
        what: "Intermediate Project: 3D Top-Down Shooter",
        why: "To integrate 3D movement, AI, shooting, and UI into a cohesive loop.",
        time: "2 Weeks",
        prereqs: "Steps 11-19",
        resources: [
          { name: "3D Survival Project (Unity Learn)", url: "https://learn.unity.com/project/survival-shooter-tutorial" },
        ],
        practice: "Build a wave-based shooter with enemies, a shop system, and a score board.",
      },
    ],
  },
  {
    title: "Advanced Stage: Performance, Graphics & AI",
    level: "Advanced",
    steps: [
      {
        what: "Optimization & Profiling",
        why: "To ensure your game runs smoothly at 60 FPS. Learn to identify CPU/GPU bottlenecks.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Unity Profiler Guide", url: "https://docs.unity3d.com/Manual/Profiler.html" },
        ],
        practice: "Use the Profiler to identify and fix a 'memory leak' in a test scene.",
      },
      {
        what: "Advanced AI: Behavior Trees",
        why: "For complex, believable AI logic that goes beyond simple state machines.",
        time: "2 Weeks",
        prereqs: "Step 16",
        resources: [
          { name: "Behavior Trees Explained (YouTube)", url: "https://www.youtube.com/watch?v=aR6du5AfUyw" },
        ],
        practice: "Build a guard AI that patrols, investigates noises, and chases players.",
      },
      {
        what: "Multiplayer Foundations (Netcode)",
        why: "Building games that people can play together. Master sync, latency, and authority.",
        time: "2 Weeks",
        prereqs: "Intermediate C#",
        resources: [
          { name: "Unity Netcode for GameObjects", url: "https://docs-multiplayer.unity3d.com/" },
        ],
        practice: "Build a simple multiplayer lobby where players can see each other move.",
      },
      {
        what: "Custom Tools in Unity Editor",
        why: "To speed up your workflow by building custom inspectors and windows.",
        time: "1 Week",
        prereqs: "Intermediate C#",
        resources: [
          { name: "Extending the Editor", url: "https://docs.unity3d.com/Manual/ExtendingTheEditor.html" },
        ],
        practice: "Build a custom tool that automatically places trees randomly on a surface.",
      },
      {
        what: "Graphics API & HLSL",
        why: "To write low-level code for the GPU for maximum performance and unique visuals.",
        time: "2 Weeks",
        prereqs: "Shader Graph",
        resources: [
          { name: "The Book of Shaders", url: "https://thebookofshaders.com/" },
        ],
        practice: "Write a simple 'Water' shader using raw HLSL code.",
      },
      {
        what: "Asset Bundles & Addressables",
        why: "To manage large game sizes by downloading assets on-demand.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Unity Addressables Guide", url: "https://docs.unity3d.com/Packages/com.unity.addressables@1.17/manual/index.html" },
        ],
        practice: "Load a complex character model from a remote URL at runtime.",
      },
      {
        what: "Introduction to Unreal Engine & C++",
        why: "To expand your professional range. Unreal is the standard for high-end AAA development.",
        time: "3 Weeks",
        prereqs: "Programming Logic",
        resources: [
          { name: "Unreal Engine Basics (Official)", url: "https://dev.epicgames.com/community/unreal-engine/getting-started" },
        ],
        practice: "Recreate your 'Hello World' logic in Unreal using Blueprints and then C++.",
      },
      {
        what: "Mobile Optimization & XR",
        why: "Mobile and VR/AR have strict hardware limits. Learn to build performant mobile experiences.",
        time: "2 Weeks",
        prereqs: "Optimization",
        resources: [
          { name: "Mobile Optimization Guide", url: "https://docs.unity3d.com/Manual/MobileOptimization.html" },
        ],
        practice: "Optimize a 3D scene to run at a consistent 60 FPS on a low-end mobile device.",
      },
      {
        what: "Build Pipelines & CI/CD",
        why: "To automate the tedious process of building for multiple platforms (PC, Mobile, Web).",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Game Dev DevOps Basics", url: "https://unity.com/solutions/devops" },
        ],
        practice: "Set up a GitHub Action that builds your project automatically on every push.",
      },
      {
        what: "Advanced Project: Procedural Dungeon Crawler",
        why: "To master algorithmic level design, complex AI, and advanced architecture.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a game where every playthrough has a randomly generated, walkable map.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Endless Runner 2D", teaches: "Object pooling, simple input, scoring.", tech: "Unity, C#" },
  { level: "Beginner", title: "Breakout Clone", teaches: "Physics, ball mechanics, paddle logic.", tech: "Unity, C#" },
  { level: "Beginner", title: "Virtual Pet", teaches: "Persistence, Time-based logic, UI stats.", tech: "Unity, C#" },
  { level: "Intermediate", title: "3D Parkour Platformer", teaches: "Character controllers, raycasting, animations.", tech: "Unity, Cinemachine" },
  { level: "Intermediate", title: "Tower Defense", teaches: "Grid placement, AI pathfinding, projectile math.", tech: "Unity, NavMesh" },
  { level: "Intermediate", title: "Local Split-Screen Racer", teaches: "Multi-input, physics-based driving, camera splitting.", tech: "Unity, Rigidbody" },
  { level: "Intermediate", title: "Horror Flashlight Demo", teaches: "Lighting, atmosphere, custom shaders, jump scares.", tech: "Unity, Shader Graph" },
  { level: "Advanced", title: "Multiplayer Chess", teaches: "Netcode, turn-based logic, lobby management.", tech: "Unity, Netcode" },
  { level: "Advanced", title: "Procedural World Engine", teaches: "Noise algorithms, voxel rendering, multithreading.", tech: "Unity, C#, DOTS" },
  { level: "Advanced", title: "VR Escape Room", teaches: "Interaction SDKs, spatial audio, hardware constraints.", tech: "Unity, Meta XR SDK" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Prototype Builder",
    description: "Focus on syntax and 2D mechanics to build functional prototypes quickly.",
    schedule: [
      "Days 1-7: C# Basics & Unity Editor Essentials.",
      "Days 8-15: 2D Physics, Collisions, and Input.",
      "Days 16-23: UI, Audio, and Prefab management.",
      "Days 24-30: Build and deploy an 'Endless Runner' prototype.",
    ]
  },
  {
    title: "60-Day Standard Plan: The 3D Engineer",
    description: "Balanced path for building character-driven 3D games and basic AI.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: 3D Movement, Raycasting, and Lighting.",
      "Days 41-60: Animations, NavMesh AI, and saving data.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Technical Artist",
    description: "Comprehensive path including Shaders, Optimization, and Multiplayer.",
    schedule: [
      "Days 1-30: Core Engine & Scripting fundamentals.",
      "Days 31-60: Systems Design, AI, and intermediate mechanics.",
      "Days 61-90: Shaders, Performance Profiling, Netcode, and Portfolio building.",
    ]
  }
];

const interviewTopics = [
  "The Game Loop: Update vs FixedUpdate vs LateUpdate.",
  "Draw Calls and Batching (Static vs Dynamic).",
  "Object Pooling: Why and how to use it.",
  "Physics: Rigidbodies, Colliders, and Triggers.",
  "Quaternions vs Euler Angles for rotation.",
  "Garbage Collection in C# and its impact on FPS.",
  "Unity ECS (Entity Component System) fundamentals.",
  "Managing scene changes and persistent data.",
  "Shader Graph vs HLSL coding.",
  "Multiplayer: Authority, Latency, and Prediction.",
];

const codingQuestions = [
  { question: "Implement a basic smooth follow camera logic without using Cinemachine.", topic: "Interpolation" },
  { question: "Write a script to spawn 100 enemies at random locations within a defined radius.", topic: "Randomness" },
  { question: "How would you detect if a player is looking at a specific object? (Raycasting).", topic: "Physics" },
  { question: "Implement a simple inventory system using C# Dictionaries.", topic: "Data Structures" },
];

const mcqs = [
  { question: "Which method is best for physics-related updates?", options: ["Update", "LateUpdate", "FixedUpdate", "Start"], answer: "FixedUpdate" },
  { question: "What is the purpose of a 'Prefab' in Unity?", options: ["To store textures", "To act as a reusable template", "To handle lighting", "To play audio"], answer: "To act as a reusable template" },
  { question: "Which component is required for an object to be moved by gravity?", options: ["Box Collider", "Mesh Filter", "Rigidbody", "Mesh Renderer"], answer: "Rigidbody" },
];

const mistakes = [
  "Not using 'Time.deltaTime' in Update, making movement speed depend on frame rate.",
  "Using 'GameObject.Find' inside Update()—it's extremely slow.",
  "Neglecting the Profiler: Guessing where lag is instead of measuring it.",
  "Ignoring Version Control: Losing weeks of work because of a corrupted project file.",
  "Deeply nesting hierarchies, which complicates physics and math.",
  "Not using Object Pooling for frequent spawns (like bullets), leading to GC lag.",
  "Hardcoding strings for tags and layers—use constants instead.",
  "Ignoring Mobile hardware limits when building for phones.",
  "Over-engineering a simple game before finishing the core loop.",
  "Neglecting consistent folder structure (messy projects lead to bugs).",
];

export default function GameDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Gamepad2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Game Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive guide to mastering the craft of game development. From basic logic and 2D sprites to advanced 3D shaders, AI, and production deployment.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Game Developer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream game development role.</CardDescription>
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
                    {['Unity', 'Unreal Engine', 'C#', 'C++', 'Physics', 'Shaders', 'Mobile Optimization', 'GLSL', 'HLSL', 'NavMesh AI', 'Netcode', 'Vector Math', 'Git LFS'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain an active Itch.io or personal website with playable demos.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain the technical challenges (e.g., performance tuning) in your READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality video walkthroughs of your game mechanics.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build Worlds, Craft Fun</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Game development is the ultimate combination of art and science. It's about bringing logic to life and creating experiences that people will remember. Stay consistent, build something playable every day, and never stop iterating. Your journey into the game industry starts with one simple object—go make it move!
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
