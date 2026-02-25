
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
  Binary,
  Settings,
  HardDrive,
  Box,
  CircuitBoard,
  Waves,
  ShieldAlert,
  Bot,
  Route,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Hardware & Software Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Robotics & Physics",
        why: "To understand the physical constraints of robots. You must master Newton's laws, torque, friction, and basic rigid-body dynamics.",
        time: "1 Week",
        prereqs: "High School Physics",
        resources: [
          { name: "Modern Robotics Course (YouTube)", url: "https://www.youtube.com/playlist?list=PLggLeLDwK6pX2_v_asInlsZAn6X6Z_Z6_" },
          { name: "Intro to Robotics (MIT OpenCourseWare)", url: "https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/" },
        ],
        practice: "Calculate the force needed for a robotic arm to lift a 1kg load at a specific distance.",
      },
      {
        what: "C++ for Robotics (Performance)",
        why: "C++ is the industry standard for robotics due to its real-time performance and low-level memory control.",
        time: "3 Weeks",
        prereqs: "None",
        resources: [
          { name: "C++ for Robotics (The Construct)", url: "https://www.theconstruct.ai/robotics-c-programming-course/" },
          { name: "C++ Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
        ],
        practice: "Implement a basic PID controller logic in C++ using a console application.",
      },
      {
        what: "Linux for Robotics (Ubuntu & CLI)",
        why: "ROS2 and most robotics tools run on Linux. Mastering the terminal and process management is vital.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Linux for Robotics (YouTube)", url: "https://www.youtube.com/watch?v=look-up-linux-robotics" },
          { name: "Linux Journey", url: "https://linuxjourney.com/" },
        ],
        practice: "Install Ubuntu (or use WSL2). Navigate the filesystem, manage permissions, and write a simple bash script to launch a simulation.",
      },
      {
        what: "ROS2 Basics (Nodes, Topics, Services)",
        why: "Robot Operating System (ROS2) is the 'plumbing' of modern robotics. It allows different parts of a robot to communicate.",
        time: "2 Weeks",
        prereqs: "Step 2, Step 3",
        resources: [
          { name: "ROS2 Humble Documentation", url: "https://docs.ros.org/en/humble/index.html" },
          { name: "ROS2 for Beginners (YouTube - Articulated Robotics)", url: "https://www.youtube.com/watch?v=Gg25GfA456o" },
        ],
        practice: "Create two nodes: a 'Publisher' that sends a message and a 'Subscriber' that prints it.",
      },
      {
        what: "Sensors & Actuators",
        why: "To understand how robots perceive and move. Learn about LIDAR, IMUs, Encoders, and DC/Servo motors.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Robot Sensors Overview", url: "https://www.youtube.com/watch?v=id-sensors-robotics" },
        ],
        practice: "Read a simulated distance sensor value and print 'Obstacle Detected' if the value is < 10cm.",
      },
      {
        what: "Basic Kinematics (Forward & Inverse)",
        why: "Kinematics is the math of motion. Forward tells you where the hand is; Inverse tells you how to move the joints to get there.",
        time: "1 Week",
        prereqs: "Step 1, Linear Algebra",
        resources: [
          { name: "Robotics: Kinematics (YouTube)", url: "https://www.youtube.com/watch?v=look-up-kinematics" },
        ],
        practice: "Calculate the position of a 2-joint arm end-effector given two angles.",
      },
      {
        what: "Microcontroller Interfacing (Arduino/ESP32)",
        why: "To bridge the gap between high-level code (ROS2) and low-level hardware (motors/sensors).",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Interfacing Sensors with Arduino", url: "https://www.arduino.cc/en/Tutorial/HomePage" },
        ],
        practice: "Connect a physical servo motor to a microcontroller and control its angle via a serial command.",
      },
      {
        what: "Simulation with Gazebo",
        why: "To test your code without breaking expensive physical hardware. Gazebo is the standard physics engine for ROS2.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Gazebo Sim Documentation", url: "https://gazebosim.org/docs" },
        ],
        practice: "Spawn a simple robot model in Gazebo and use a ROS2 node to move it forward.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Intelligence & Autonomy",
    level: "Intermediate",
    steps: [
      {
        what: "Computer Vision for Robotics (OpenCV)",
        why: "To allow robots to 'see'. Learn image processing, thresholding, and basic object tracking.",
        time: "1 Week",
        prereqs: "Python Basics",
        resources: [
          { name: "OpenCV Python Course (YouTube)", url: "https://www.youtube.com/watch?v=oXlwWbaUp8o" },
        ],
        practice: "Write a script that tracks a specific colored ball in a video feed.",
      },
      {
        what: "Deep Learning for Vision (PyTorch)",
        why: "To perform advanced tasks like object detection and semantic segmentation for autonomous navigation.",
        time: "2 Weeks",
        prereqs: "Step 9",
        resources: [
          { name: "PyTorch for Deep Learning", url: "https://www.youtube.com/watch?v=V_xro1bcAuA" },
        ],
        practice: "Fine-tune a YOLOv8 model to detect specific obstacles like 'Traffic Cones'.",
      },
      {
        what: "SLAM (Simultaneous Localization & Mapping)",
        why: "To allow a robot to build a map of an unknown environment while keeping track of its own position.",
        time: "2 Weeks",
        prereqs: "Step 4, Step 5",
        resources: [
          { name: "SLAM Course (Cyrill Stachniss)", url: "https://www.youtube.com/watch?v=look-up-slam-cyrill" },
        ],
        practice: "Run a LIDAR-based SLAM package (like Slam Toolbox) in a simulated office environment in Gazebo.",
      },
      {
        what: "Path Planning & Navigation (Nav2)",
        why: "To find the best way from Point A to Point B while avoiding obstacles.",
        time: "2 Weeks",
        prereqs: "Step 11",
        resources: [
          { name: "Nav2 Documentation", url: "https://navigation.ros.org/" },
        ],
        practice: "Configure the Nav2 stack to make your robot drive autonomously to a goal location on a map.",
      },
      {
        what: "URDF Modeling & Rviz",
        why: "To create digital representations of your robots. URDF defines the joints and links; Rviz visualizes them.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "URDF Tutorial", url: "https://docs.ros.org/en/humble/Tutorials/Intermediate/URDF/URDF-Main.html" },
        ],
        practice: "Create a URDF file for a 4-wheeled mobile robot and view it in Rviz.",
      },
      {
        what: "Control Systems (PID, LQR)",
        why: "To ensure smooth and accurate motion. Control theory allows you to handle errors and external disturbances.",
        time: "1 Week",
        prereqs: "Calculus",
        resources: [
          { name: "Control Boot Camp (YouTube - Steve Brunton)", url: "https://www.youtube.com/playlist?list=PLMrJAkhIeNNR20Mz-VpzgfQs5zrYi085m" },
        ],
        practice: "Implement a PID controller to keep a drone at a specific height in simulation.",
      },
      {
        what: "State Estimation (Kalman Filters)",
        why: "Sensors are noisy. Kalman filters fuse data from multiple sources (GPS, IMU) to find the 'true' state.",
        time: "1 Week",
        prereqs: "Probability & Stats",
        resources: [
          { name: "Kalman Filter Explained (YouTube)", url: "https://www.youtube.com/watch?v=look-up-kalman" },
        ],
        practice: "Use a simple Kalman filter to predict the position of a moving object from noisy sensor data.",
      },
      {
        what: "Reinforcement Learning for Robotics",
        why: "To teach robots complex behaviors (like walking or grasping) that are hard to program manually.",
        time: "2 Weeks",
        prereqs: "Deep Learning basics",
        resources: [
          { name: "Deep RL for Robotics (YouTube)", url: "https://www.youtube.com/watch?v=look-up-rl-robotics" },
        ],
        practice: "Train a simple agent to solve a 'Pick and Place' task using OpenAI Gym and a robotics environment.",
      },
    ],
  },
  {
    title: "Advanced Stage: Real-World Systems & Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Edge AI & Optimization (Nvidia Jetson)",
        why: "Robots have limited power and CPU. You must optimize models to run at high speed on local hardware.",
        time: "1 Week",
        prereqs: "Deep Learning",
        resources: [
          { name: "Nvidia Jetson AI Course", url: "https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-ai" },
        ],
        practice: "Convert a PyTorch model to TensorRT format and run it on an edge device (or emulator).",
      },
      {
        what: "Behavior Trees & Task Planning",
        why: "For complex missions. Behavior Trees manage high-level logic (e.g., 'If battery is low, find charging dock').",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Behavior Trees in Robotics", url: "https://www.behaviortree.dev/" },
        ],
        practice: "Design a behavior tree for a delivery robot that handles 'door blocked' and 'package delivered' scenarios.",
      },
      {
        what: "Multi-Robot Systems (Swarm)",
        why: "To coordinate multiple robots working together on a single task.",
        time: "2 Weeks",
        prereqs: "Step 4, Step 12",
        resources: [
          { name: "Swarm Robotics Overview", url: "https://www.youtube.com/watch?v=look-up-swarm" },
        ],
        practice: "Simulate two robots performing a 'follow the leader' behavior in Gazebo.",
      },
      {
        what: "Human-Robot Interaction (HRI)",
        why: "To build robots that can safely and effectively interact with people in shared spaces.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Intro to HRI", url: "https://hri-book.net/" },
        ],
        practice: "Research 'Social Force Model' for crowd navigation and implement a simple version.",
      },
      {
        what: "Hardware-in-the-loop (HIL) Testing",
        why: "To verify that your software works on the actual flight/drive controllers before final assembly.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "HIL Simulation Basics", url: "https://www.youtube.com/watch?v=id-hil-testing" },
        ],
        practice: "Connect a flight controller (like Pixhawk) to your PC and run a simulation where the hardware controls the virtual drone.",
      },
      {
        what: "Robotics Security & Safety",
        why: "Robots can be dangerous. You must understand cybersecurity threats and safety standards like ISO 10218.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Cybersecurity for Robotics", url: "https://www.youtube.com/watch?v=look-up-robot-security" },
        ],
        practice: "Audit a ROS2 network for open ports and implement secure communication (SROS2).",
      },
      {
        what: "System Design for Autonomous Vehicles",
        why: "The peak of robotics engineering. Understanding the full stack: Perception, Planning, and Control at scale.",
        time: "2 Weeks",
        prereqs: "All previous steps",
        resources: [
          { name: "Self-Driving Cars Specialization (Coursera/YouTube)", url: "https://www.youtube.com/playlist?list=PLMCXHnjXn7yXPbPyvAnclAtIn_996To6x" },
        ],
        practice: "Diagram the full architecture of a self-driving car system, including data flows and redundancy.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Hardware interop, AI perception, and autonomous navigation into a final Vertical Slice.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build an 'Autonomous Warehouse Robot' in simulation that navigates a map, identifies a specific box, and 'picks' it up.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Line-Following Robot", teaches: "Sensors, Basic Control, and C++ Logic.", tech: "Arduino, IR Sensors" },
  { level: "Beginner", title: "ROS2 Chat System", teaches: "Nodes, Topics, and IPC architecture.", tech: "ROS2, Python/C++" },
  { level: "Beginner", title: "Blinking LED via ROS2", teaches: "Hardware-Software interface and Micro-ROS.", tech: "ROS2, ESP32" },
  { level: "Intermediate", title: "Autonomous Maze Solver", teaches: "LIDAR, Path Planning, and Navigation.", tech: "ROS2, Gazebo, Nav2" },
  { level: "Intermediate", title: "Object-Tracking Drone", teaches: "Computer Vision and PID Control.", tech: "Python, OpenCV, Tello Drone" },
  { level: "Intermediate", title: "2D SLAM Mapping Tool", teaches: "Mapping, Localization, and Data Fusion.", tech: "ROS2, Slam Toolbox" },
  { level: "Intermediate", title: "Robotic Arm Controller", teaches: "Inverse Kinematics and MoveIt2.", tech: "ROS2, MoveIt2" },
  { level: "Advanced", title: "Self-Driving Delivery Bot", teaches: "Deep Learning, RAG-like navigation, and Edge AI.", tech: "Nvidia Jetson, PyTorch, ROS2" },
  { level: "Advanced", title: "Swarm Surveillance System", teaches: "Multi-agent coordination and networking.", tech: "ROS2, Gazebo, Python" },
  { level: "Advanced", title: "RL-Powered Bipedal Walker", teaches: "Reinforcement Learning and Physics Engines.", tech: "PyTorch, Isaac Sim" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Simulation Engineer",
    description: "Focus on ROS2 and Gazebo to build intelligent behaviors in virtual environments.",
    schedule: [
      "Days 1-7: Linux CLI & C++ for Systems.",
      "Days 8-15: ROS2 Core (Nodes, Topics, Services).",
      "Days 16-23: Gazebo Simulation & Basic Movement.",
      "Days 24-30: Build an 'Autonomous Maze Solver' in simulation.",
    ]
  },
  {
    title: "60-Day Standard Plan: The AI Integrator",
    description: "Balanced path covering computer vision and advanced navigation stacks.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Computer Vision, Deep Learning, and SLAM Mapping.",
      "Days 46-60: Nav2 Navigation stack and building a 3D Shooter logic.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Robotics Architect",
    description: "Comprehensive path for professional readiness in Industrial or Autonomous Vehicle roles.",
    schedule: [
      "Days 1-30: Core Robotics & ROS2 foundations.",
      "Days 31-60: AI Perception, SLAM, and Control Systems.",
      "Days 61-90: Edge AI, Security, System Design, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between Forward and Inverse Kinematics.",
  "How does a PID controller work? What does each term do?",
  "Describe the ROS2 Node communication model (DDS).",
  "Difference between SLAM and simple Localization.",
  "Explain the significance of the 'delta' parameter in a game/physics loop.",
  "What is a Kalman Filter and why is it used in robotics?",
  "How do you handle 'Sensor Noise' in an autonomous system?",
  "Explain Global vs. Local Path Planning.",
  "Describe the 'Wait for Interrupt' power-saving pattern.",
  "How do you secure a robot against remote takeover?",
];

const codingQuestions = [
  { question: "Implement a simple 1D Kalman filter in Python.", topic: "Math/Estimation" },
  { question: "Write a C++ class for a PID controller.", topic: "Control Systems" },
  { question: "Write a ROS2 node that averages distance data from a LIDAR topic.", topic: "Frameworks" },
  { question: "Calculate the rotation matrix for a 90-degree turn on the Z-axis.", topic: "Math" },
];

const mcqs = [
  { question: "Which protocol is the default for ROS2 communications?", options: ["TCP", "UDP", "DDS", "HTTP"], answer: "DDS" },
  { question: "What is the primary coordinate system for most mobile robots?", options: ["Cartesian", "Polar", "Right-handed Z-up", "Spherical"], answer: "Right-handed Z-up" },
  { question: "Which sensor is most critical for SLAM?", options: ["Camera", "LIDAR", "Thermometer", "Buzzer"], answer: "LIDAR" },
];

const mistakes = [
  "Ignoring the math: Trying to build robots without understanding linear algebra leads to broken logic.",
  "Manual loops: Using 'while(true)' for tasks that should be event-driven in ROS2.",
  "Hardcoding paths: Makes your scripts fail on different machines or environments.",
  "Tutorial Hell: Watching robot builds without actually writing code or running simulations.",
  "Neglecting Safety: Testing motor code on physical hardware without a kill-switch.",
  "Ignoring Version Control: Losing weeks of work due to a corrupted SD card.",
  "Over-engineering: Using a deep neural network for a task a simple IR sensor could solve.",
  "Ignoring Unit Tests: Firmware is hard to debug; test your logic blocks on PC first.",
  "Hardcoding credentials: Put API keys and DB strings in a secret vault, not the script.",
  "Neglecting the log: ROS2 logs contain vital clues about why a node isn't communicating.",
];

export default function RoboticsEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Bot className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The AI Robotics Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the future of autonomous systems. From silicon and physics foundations to advanced SLAM, AI perception, and industrial-scale robotic orchestration.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/roles?section=item-Artificial Intelligence & Machine Learning">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Job Roles
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
            <CardDescription>Apply your knowledge with these hands-on robotics projects designed for your portfolio.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream role in AI or Autonomous Systems.</CardDescription>
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
                    {['ROS2', 'C++', 'SLAM', 'Autonomous Systems', 'Path Planning', 'Deep Learning', 'PyTorch', 'Gazebo', 'Micro-ROS', 'Computer Vision', 'Control Systems', 'Kalman Filters'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Safety-Critical' standards.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality videos of your simulations or hardware in action.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with hardware-software integration.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <ShieldAlert className="h-6 w-6"/>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Intelligence That Moves.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            AI Robotics is the ultimate engineering challenge. It bridges the gap between digital intelligence and physical reality. Stay consistent, read the papers, and build daily. The future of automation is yours to create!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Robotics
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
