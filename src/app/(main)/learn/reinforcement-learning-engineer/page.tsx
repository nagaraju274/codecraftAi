
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
  FileCode,
  ShieldAlert,
  Braces,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Markov Decision Processes & Classic RL",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to RL & Agent-Env Loop",
        why: "To understand the core paradigm of RL: an agent taking actions in an environment to maximize cumulative rewards.",
        time: "2 Days",
        prereqs: "Basic Probability",
        resources: [
          { name: "RL Course by David Silver (Lecture 1)", url: "https://www.youtube.com/watch?v=2pWv7GOvuf0" },
          { name: "OpenAI: Key Concepts in RL", url: "https://spinningup.openai.com/en/latest/spinningup/rl_intro.html" },
        ],
        practice: "Draw the agent-environment loop for a simple game like Tic-Tac-Toe.",
      },
      {
        what: "Markov Decision Processes (MDPs)",
        why: "To mathematically formalize the RL problem using States, Actions, Transitions, and Rewards.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "MDPs Explained (Sutton & Barto)", url: "http://incompleteideas.net/book/the-book-2nd.html" },
        ],
        practice: "Define the State, Action, and Reward space for a self-driving car in a 1D lane.",
      },
      {
        what: "The Bellman Equation",
        why: "The fundamental recursive equation that defines the value of a state based on future expected rewards.",
        time: "1 Week",
        prereqs: "Step 2, Linear Algebra",
        resources: [
          { name: "The Bellman Equation (YouTube)", url: "https://www.youtube.com/watch?v=14Bf_Onnt_E" },
        ],
        practice: "Calculate the value of a state in a 3x3 grid world manually using a discount factor.",
      },
      {
        what: "Dynamic Programming (Value & Policy Iteration)",
        why: "To solve small MDPs where the transition probabilities are known. Foundation for all RL algorithms.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Dynamic Programming in RL", url: "https://www.geeksforgeeks.org/dynamic-programming-in-reinforcement-learning/" },
        ],
        practice: "Implement Value Iteration in Python to solve a FrozenLake-like grid world.",
      },
      {
        what: "Monte Carlo Methods",
        why: "To learn from experience (episodes) when the environment model is unknown.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Monte Carlo in RL (YouTube)", url: "https://www.youtube.com/watch?v=id-look-up-mc-rl" },
        ],
        practice: "Write a script to estimate the value of a Blackjack strategy using random simulations.",
      },
      {
        what: "Temporal Difference (TD) Learning",
        why: "To update value estimates after every single step, rather than waiting for the end of an episode.",
        time: "5 Days",
        prereqs: "Step 3",
        resources: [
          { name: "TD Learning Basics", url: "https://towardsdatascience.com/reinforcement-learning-temporal-difference-learning-f2a18f84cc31" },
        ],
        practice: "Implement TD(0) to update state values in a linear walk environment.",
      },
      {
        what: "Q-Learning (Off-Policy)",
        why: "The most famous classic RL algorithm. It allows an agent to learn an optimal policy regardless of its current actions.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Q-Learning Explained (YouTube)", url: "https://www.youtube.com/watch?v=aCEvtRtNO-M" },
        ],
        practice: "Build a Q-table to solve the CliffWalking environment.",
      },
      {
        what: "SARSA (On-Policy)",
        why: "To understand the difference between learning the optimal path (Q-learning) vs. learning a safe path (SARSA).",
        time: "3 Days",
        prereqs: "Step 7",
        resources: [
          { name: "SARSA vs Q-Learning", url: "https://www.geeksforgeeks.org/sarsa-reinforcement-learning/" },
        ],
        practice: "Compare SARSA and Q-learning trajectories in a hazardous grid world.",
      },
      {
        what: "OpenAI Gymnasium (Gym)",
        why: "The standard toolkit for developing and comparing RL algorithms.",
        time: "2 Days",
        prereqs: "Python Basics",
        resources: [
          { name: "Gymnasium Documentation", url: "https://gymnasium.farama.org/" },
        ],
        practice: "Initialize the 'CartPole-v1' environment and take 100 random steps, logging the rewards.",
      },
      {
        what: "Exploration vs. Exploitation",
        why: "To balance trying new things (learning) vs. doing what works (maximizing score). Master Epsilon-Greedy and UCB.",
        time: "3 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Multi-Armed Bandits Guide", url: "https://towardsdatascience.com/the-multi-armed-bandit-problem-and-its-solutions-5b743d391114" },
        ],
        practice: "Implement an Epsilon-Greedy decay strategy for a Q-learning agent.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Deep RL & Policy Optimization",
    level: "Intermediate",
    steps: [
      {
        what: "Deep Q-Networks (DQN)",
        why: "To handle massive state spaces (like images) where tables are too small. This launched the modern RL era.",
        time: "2 Weeks",
        prereqs: "Beginner Stage, Deep Learning basics",
        resources: [
          { name: "Human-level Control via DRL (Atari Paper)", url: "https://www.nature.com/articles/nature14236" },
          { name: "DQN Tutorial (PyTorch)", url: "https://pytorch.org/tutorials/intermediate/reinforcement_q_learning.html" },
        ],
        practice: "Build a DQN agent to play 'LunarLander-v2'. Implement Experience Replay and Target Networks.",
      },
      {
        what: "Policy Gradient Methods (REINFORCE)",
        why: "To directly optimize the policy (actions) instead of values. Essential for continuous action spaces.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Policy Gradients (Spinning Up)", url: "https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html" },
        ],
        practice: "Implement the REINFORCE algorithm to solve CartPole.",
      },
      {
        what: "Actor-Critic Architectures (A2C/A3C)",
        why: "To combine the stability of Value methods (Critic) with the directness of Policy methods (Actor).",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Actor-Critic Explained (YouTube)", url: "https://www.youtube.com/watch?v=look-up-actor-critic" },
        ],
        practice: "Build an A2C agent for a continuous environment like 'Pendulum-v1'.",
      },
      {
        what: "Proximal Policy Optimization (PPO)",
        why: "The current 'industry standard' for stable and reliable RL training. Used by OpenAI for almost everything.",
        time: "2 Weeks",
        prereqs: "Step 13",
        resources: [
          { name: "PPO Documentation (Stable Baselines3)", url: "https://stable-baselines3.readthedocs.io/en/master/modules/ppo.html" },
          { name: "PPO Paper Walkthrough (YouTube)", url: "https://www.youtube.com/watch?v=5P7I-xPq8u8" },
        ],
        practice: "Use PPO from Stable Baselines3 to train an agent for a complex custom environment.",
      },
      {
        what: "Experience Replay & Buffers",
        why: "To break the correlation between consecutive samples and reuse past data for faster learning.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Prioritized Experience Replay", url: "https://arxiv.org/abs/1511.05952" },
        ],
        practice: "Implement a basic Prioritized Experience Replay buffer in Python.",
      },
      {
        what: "Stable Baselines3 (Framework)",
        why: "The primary framework for production RL. It provides high-quality implementations of DQN, PPO, SAC, and more.",
        time: "1 Week",
        prereqs: "PyTorch Basics",
        resources: [
          { name: "Stable Baselines3 Getting Started", url: "https://stable-baselines3.readthedocs.io/en/master/guide/quickstart.html" },
        ],
        practice: "Train and save a model using SB3, then load it and run a real-time evaluation loop.",
      },
      {
        what: "Reward Shaping & Design",
        why: "Designing the right reward function is the hardest part of RL. Poor design leads to 'reward hacking'.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "Reward Engineering Guide", url: "https://towardsdatascience.com/reward-engineering-in-reinforcement-learning-8fb086063466" },
        ],
        practice: "Design a reward function for a racing robot that prioritizes speed but penalizes crashing.",
      },
      {
        what: "Function Approximation & Feature Engineering",
        why: "To map raw observations (pixels, sensor data) into useful states for the neural network.",
        time: "1 Week",
        prereqs: "Deep Learning",
        resources: [
          { name: "Representations in RL", url: "https://www.youtube.com/watch?v=id-look-up-reps" },
        ],
        practice: "Use a pre-trained CNN as a feature extractor for an RL agent playing a custom game.",
      },
      {
        what: "Hyperparameter Tuning for RL",
        why: "RL is notoriously sensitive to learning rates, discount factors, and buffer sizes.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Optuna for RL Tuning", url: "https://optuna.org/" },
        ],
        practice: "Run an Optuna study to find the best 'learning_rate' and 'gamma' for a PPO agent.",
      },
      {
        what: "Monitoring with WandB",
        why: "To track rewards, entropy, and loss curves across hundreds of training hours.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Weights & Biases for RL", url: "https://docs.wandb.ai/guides/integrations/stable-baselines-3" },
        ],
        practice: "Integrate WandB with Stable Baselines3 and log a training run.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems, Scale & Real World",
    level: "Advanced",
    steps: [
      {
        what: "Multi-Agent RL (MARL)",
        why: "For scenarios with multiple competing or cooperating agents (e.g., traffic, multiplayer games).",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "MARL Course (OpenAI)", url: "https://www.youtube.com/watch?v=look-up-marl" },
        ],
        practice: "Implement a simple 'Predator-Prey' environment using the PettingZoo library.",
      },
      {
        what: "Distributed RL (Ray & RLLib)",
        why: "To scale training to thousands of CPU/GPU cores. This is how AlphaGo and ChatGPT were trained.",
        time: "2 Weeks",
        prereqs: "Linux basics",
        resources: [
          { name: "Ray RLLib Documentation", url: "https://docs.ray.io/en/latest/rllib/index.html" },
        ],
        practice: "Set up a local Ray cluster and run a distributed PPO training job.",
      },
      {
        what: "Offline RL & Decision Transformers",
        why: "To learn from fixed datasets without a simulator. Essential for healthcare and industrial systems.",
        time: "2 Weeks",
        prereqs: "Transformers basics",
        resources: [
          { name: "Decision Transformer (Paper Walkthrough)", url: "https://www.youtube.com/watch?v=look-up-dt-rl" },
        ],
        practice: "Fine-tune a Decision Transformer on a static dataset of robot trajectories.",
      },
      {
        what: "Sim-to-Real Transfer (Robotics)",
        why: "Robots are too expensive to train in the real world. Learn to use domain randomization to bridge the gap.",
        time: "2 Weeks",
        prereqs: "Physics Simulation knowledge",
        resources: [
          { name: "Nvidia Isaac Gym", url: "https://developer.nvidia.com/isaac-gym" },
        ],
        practice: "Train a quadruped robot to walk in Isaac Gym and analyze how it handles varying friction.",
      },
      {
        what: "Model-Based RL (World Models)",
        why: "To learn an internal model of the environment, allowing the agent to 'dream' and plan ahead.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "World Models (Ha & Schmidhuber)", url: "https://worldmodels.github.io/" },
        ],
        practice: "Implement a simple model-based predictor for a grid world.",
      },
      {
        what: "Hierarchical Reinforcement Learning",
        why: "To solve long-term tasks by breaking them into high-level goals and low-level actions.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "HRL Overview", url: "https://www.youtube.com/watch?v=look-up-hrl" },
        ],
        practice: "Design a two-level hierarchy for a robot navigating a large house to find a specific object.",
      },
      {
        what: "Inverse Reinforcement Learning (IRL)",
        why: "To learn the reward function by observing human experts, rather than designing it manually.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "IRL Fundamentals", url: "https://www.youtube.com/watch?v=id-irl-logic" },
        ],
        practice: "Research the 'GAIL' algorithm and how it's used for imitation learning.",
      },
      {
        what: "Deployment & MLOps for RL",
        why: "Deploying RL is unique due to statefulness and real-time inference requirements.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Serving RL Models", url: "https://stable-baselines3.readthedocs.io/en/master/guide/export.html" },
        ],
        practice: "Wrap an SB3 agent in a FastAPI endpoint and serve it as a real-time service.",
      },
      {
        what: "Safe Reinforcement Learning",
        why: "To ensure agents follow safety constraints (e.g., avoiding dangerous zones) while learning.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Safety Gym", url: "https://openai.com/blog/safety-gym/" },
        ],
        practice: "Train an agent in a constrained environment where touching 'red zones' results in a catastrophic penalty.",
      },
      {
        what: "Final Mastery Project: Autonomous Drone",
        why: "To synthesize all skills: Physics, Vision, Control, and Scaling into a final professional artifact.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a drone agent in simulation that avoids obstacles, tracks a moving target, and lands safely on a platform.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "FrozenLake Master", teaches: "Q-Learning, Epsilon-greedy, and Grid worlds.", tech: "Python, Gymnasium" },
  { level: "Beginner", title: "Blackjack Strategist", teaches: "Monte Carlo methods and episode-based learning.", tech: "Python" },
  { level: "Beginner", title: "MountainCar Hill Climber", teaches: "SARSA and continuous-to-discrete mapping.", tech: "Python, Gymnasium" },
  { level: "Intermediate", title: "Atari Game Agent (DQN)", teaches: "Deep Q-Learning, CNN feature extraction, and experience replay.", tech: "PyTorch, Gymnasium" },
  { level: "Intermediate", title: "Lunar Lander Autopilot", teaches: "Policy Gradients and continuous control logic.", tech: "Stable Baselines3, PPO" },
  { level: "Intermediate", title: "Trading Bot Agent", teaches: "Custom environment design and financial reward shaping.", tech: "Python, Pandas, Gym" },
  { level: "Intermediate", title: "Self-Driving 2D Lane Keep", teaches: "PID + RL hybrid control systems.", tech: "Python, Gymnasium" },
  { level: "Advanced", title: "Multiplayer Arena Bot", teaches: "Multi-Agent RL and zero-sum game theory.", tech: "PettingZoo, Ray RLLib" },
  { level: "Advanced", title: "Real-time Robotics Grasper", teaches: "Sim-to-Real, domain randomization, and high-Dof control.", tech: "Nvidia Isaac, PyTorch" },
  { level: "Advanced", title: "Offline Clinical Optimizer", teaches: "Batch RL and learning from historical logs.", tech: "d3rlpy, Decision Transformers" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Logic Dev",
    description: "Focus on syntax and classic RL to land an internship or start a research project.",
    schedule: [
      "Days 1-7: MDPs, Bellman, and Value Iteration.",
      "Days 8-15: Q-Learning and SARSA foundations.",
      "Days 16-23: OpenAI Gym and basic Deep RL (DQN).",
      "Days 24-30: Build 2 beginner projects and document on GitHub.",
    ]
  },
  {
    title: "60-Day Standard Plan: The RL Engineer",
    description: "Balanced path covering PPO, reward engineering, and professional frameworks.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Policy Gradients, PPO, and Stable Baselines3.",
      "Days 46-60: Reward Shaping, Hyperparameter tuning, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Autonomous Architect",
    description: "Comprehensive path for high-performance research and robotics engineering roles.",
    schedule: [
      "Days 1-30: Core RL & Math foundations.",
      "Days 31-60: Professional Systems (Ray, MARL, Tuning).",
      "Days 61-90: Sim-to-Real, Offline RL, and final capstone project.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between On-policy and Off-policy learning.",
  "Describe the 'Deadly Triad' in Reinforcement Learning.",
  "How does PPO ensure stable updates compared to standard Policy Gradients?",
  "Explain the significance of the Discount Factor (Gamma).",
  "What is the role of the Value function vs the Policy function?",
  "Describe how Experience Replay helps in DQN.",
  "What is 'Reward Hacking' and how do you prevent it?",
  "Explain the Exploration-Exploitation tradeoff with a real example.",
  "Difference between Model-free and Model-based RL.",
  "How do you handle high-dimensional continuous action spaces?",
];

const codingQuestions = [
  { question: "Implement a simple Epsilon-Greedy selection function.", topic: "Logic" },
  { question: "Write the Bellman update step for a Q-table in Python.", topic: "Math" },
  { question: "Calculate the discounted return for an episode given a reward list and gamma.", topic: "Fundamentals" },
  { question: "Write a custom Gymnasium environment wrapper that normalizes rewards.", topic: "Engineering" },
];

const mcqs = [
  { question: "Which algorithm is generally preferred for its sample efficiency in continuous spaces?", options: ["DQN", "PPO", "Soft Actor-Critic (SAC)", "Random Search"], answer: "Soft Actor-Critic (SAC)" },
  { question: "What happens if Gamma is set to 0?", options: ["Infinite horizon", "Agent only cares about immediate rewards", "Learning fails", "Random actions"], answer: "Agent only cares about immediate rewards" },
  { question: "Which layer is most commonly used as a feature extractor for pixel-based RL?", options: ["Dense", "LSTM", "CNN", "Dropout"], answer: "CNN" },
];

const mistakes = [
  "Ignoring the math: Trying to tune RL without understanding the Bellman equations leads to random results.",
  "Bad Reward Shaping: Giving rewards too often, which leads the agent to loop in place to 'farm' points.",
  "Not using a fixed seed: RL is highly stochastic; you must seed your environment for reproducible results.",
  "Neglecting the baseline: Always test against a random agent or simple heuristic first.",
  "Over-fitting to the simulator: The agent becomes a god in the sim but fails instantly in the real world.",
  "Tutorial Hell: Following scripts without understanding the underlying Markov chain.",
  "Ignoring the Entropy: Not monitoring the policy's randomness can lead to premature convergence to a bad path.",
  "Large Action Spaces: Trying to solve a 100-action problem with a basic Q-table.",
  "Hardcoding hyperparameters: RL parameters need to be adjusted for every unique environment.",
  "Ignoring the log: Not looking at the 'Value Loss' or 'Policy Entropy' charts in TensorBoard/WandB.",
];

export default function RLEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Brain className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Reinforcement Learning Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the science of autonomous decision-making. From the math of Bellman equations to training robots in 3D physics engines and managing multi-agent systems at scale.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional RL Engineer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream AI or Research role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & RL Challenges</h3>
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
                    {['Reinforcement Learning', 'Deep RL', 'PPO', 'DQN', 'Stable Baselines3', 'Ray RLLib', 'MARL', 'Sim-to-Real', 'Reward Shaping', 'Gymnasium', 'Markov Decision Processes', 'Actor-Critic'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include video recordings of your agents playing games or moving in sim.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase your ability to build 'Custom Environments' in Gymnasium.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with distributed training (Ray) for senior roles.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Train the Intelligent Agents of Tomorrow</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Reinforcement Learning is where intelligence becomes action. It's about more than just data; it's about decision-making in a complex world. Stay consistent, watch your agents learn, and remember: The most advanced autonomous systems in the world were built on the foundations you're learning today. Your RL journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Training Agents
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
