
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
  Fingerprint,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Foundation & Core Techniques",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to LLMs & Tokenization",
        why: "To understand how Large Language Models process text into mathematical tokens and why word choice impacts context window usage.",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "How LLMs Work (YouTube - 3Blue1Brown)", url: "https://www.youtube.com/watch?v=wjZofJX0v4M" },
          { name: "OpenAI: What are Tokens?", url: "https://platform.openai.com/tokenizer" },
        ],
        practice: "Use a tokenizer tool to see how a complex sentence is broken into sub-word tokens.",
      },
      {
        what: "Persona & Role Prompting",
        why: "To guide the AI's tone, style, and domain expertise. Telling the AI it is an 'Expert Cardiologist' changes the medical nuance of its answers.",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "Role Prompting Guide", url: "https://www.promptingguide.ai/techniques/persona" },
        ],
        practice: "Ask the AI to explain quantum physics as a pirate, then as a NASA scientist. Compare the results.",
      },
      {
        what: "Zero-Shot vs. Few-Shot Prompting",
        why: "Few-shot (providing examples) is the most powerful way to improve accuracy without fine-tuning a model.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Few-Shot Prompting (Official)", url: "https://help.openai.com/en/articles/6654003-best-practices-for-prompt-engineering-with-openai-api" },
        ],
        practice: "Create a prompt that categorizes news headlines using 3 examples of category-headline pairs.",
      },
      {
        what: "Delimiters & Structured Output",
        why: "To prevent instructions from bleeding into data. Using tags like <input> or --- ensures the AI follows the correct flow.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Structured Output Best Practices", url: "https://docs.anthropic.com/claude/docs/use-xml-tags" },
        ],
        practice: "Write a prompt that takes raw text and outputs a valid JSON object containing only names and dates found.",
      },
      {
        what: "Negative Prompting & Constraints",
        why: "Telling the AI what NOT to do is as important as telling it what to do (e.g., 'Do not use jargon').",
        time: "1 Day",
        prereqs: "Step 3",
        resources: [
          { name: "Prompting Constraints", url: "https://www.promptingguide.ai/introduction/basics" },
        ],
        practice: "Ask the AI to write a summary of a movie WITHOUT mentioning any character names.",
      },
      {
        what: "Temperature & Top-P Parameters",
        why: "To control the balance between creativity (high temperature) and predictability (low temperature).",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "OpenAI: Model Parameters", url: "https://platform.openai.com/docs/guides/text-generation/reproducible-outputs" },
        ],
        practice: "Use the OpenAI Playground to run the same creative prompt at temp 0.1 vs temp 1.5.",
      },
      {
        what: "Iterative Prompt Development",
        why: "Prompts are rarely perfect on the first try. Mastering the cycle of test -> evaluate -> refine is the core job.",
        time: "2 Days",
        prereqs: "All previous steps",
        resources: [
          { name: "Iterative Prompting Strategy", url: "https://docs.anthropic.com/claude/docs/test-and-iterate" },
        ],
        practice: "Take a complex task (like writing a legal contract) and refine the prompt through 5 versions until it's perfect.",
      },
      {
        what: "Prompting Tools: Playgrounds & Workbenches",
        why: "Professional engineers use IDEs for AI. Master the Anthropic Workbench and OpenAI Playground.",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "Anthropic Workbench Guide", url: "https://console.anthropic.com/workbench" },
        ],
        practice: "Save a library of your 5 most useful prompts in a workbench environment.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Logic & Contextual Engineering",
    level: "Intermediate",
    steps: [
      {
        what: "Chain-of-Thought (CoT) Prompting",
        why: "To force the AI to 'think step-by-step', which significantly reduces errors in math, logic, and reasoning tasks.",
        time: "3 Days",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Chain-of-Thought Prompting Paper (Summary)", url: "https://www.promptingguide.ai/techniques/cot" },
        ],
        practice: "Solve a complex word problem by asking the AI to 'think step by step' vs a standard direct question.",
      },
      {
        what: "Self-Consistency & Reflection",
        why: "To improve reliability. Ask the AI to check its own work or generate multiple answers and pick the best one.",
        time: "3 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Self-Reflection in Prompting", url: "https://docs.anthropic.com/claude/docs/ask-claude-to-reflect" },
        ],
        practice: "Write a prompt that asks the AI to solve a logic puzzle, then re-evaluate its own solution for errors.",
      },
      {
        what: "Retrieval-Augmented Generation (RAG) Concepts",
        why: "To connect LLMs to external data (PDFs, Databases). Understanding the 'Prompt + Context' flow is vital.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "What is RAG? (Amazon)", url: "https://aws.amazon.com/what-is/retrieval-augmented-generation/" },
        ],
        practice: "Paste a long Wikipedia article into a prompt and ask the AI specific questions based only on that text.",
      },
      {
        what: "Prompt Templating (Jinja2/Handlebars)",
        why: "To build apps that dynamically inject user data into prompts. Programmers use templates to manage complex strings.",
        time: "2 Days",
        prereqs: "Basic Coding",
        resources: [
          { name: "Jinja2 for Prompting", url: "https://jinja.palletsprojects.com/en/3.1.x/templates/" },
        ],
        practice: "Create a template where {{name}} and {{current_issue}} are replaced dynamically by a script.",
      },
      {
        what: "Security: Injection & Jailbreaking",
        why: "To protect your AI apps. You must learn how users try to bypass instructions (e.g., 'ignore all previous instructions').",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "OWASP Top 10 for LLMs", url: "https://genai.owasp.org/llm-top-10/" },
        ],
        practice: "Attempt to 'jailbreak' a simple chatbot you built to make it reveal its secret system prompt.",
      },
      {
        what: "Vector Databases for Context (Chroma/Pinecone)",
        why: "To manage the 'R' in RAG. You need to know how embeddings are stored and retrieved for huge datasets.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Vector Database Explained (YouTube)", url: "https://www.youtube.com/watch?v=klTvEwg3oJ4" },
        ],
        practice: "Research how 'Semantic Search' differs from keyword search in prompting.",
      },
      {
        what: "LangChain & LlamaIndex Basics",
        why: "The industry frameworks for prompt orchestration. They automate the chaining of multiple prompts and data sources.",
        time: "1 Week",
        prereqs: "Python Basics",
        resources: [
          { name: "LangChain for Beginners", url: "https://python.langchain.com/docs/get_started/introduction" },
        ],
        practice: "Build a simple sequential chain where the output of Prompt A becomes the input for Prompt B.",
      },
      {
        what: "Evaluation Metrics (LLM-as-a-judge)",
        why: "Subjective feelings aren't enough. Learn to use an LLM to automatically score the outputs of another model.",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "RAG Evaluation (RAGAS)", url: "https://docs.ragas.io/en/stable/" },
        ],
        practice: "Create a rubric (1-5 score) and ask GPT-4 to grade the summaries generated by a smaller model.",
      },
    ],
  },
  {
    title: "Advanced Stage: Programmatic & Agentic Prompting",
    level: "Advanced",
    steps: [
      {
        what: "Automated Prompt Optimization (APO)",
        why: "Using algorithms to automatically find the best prompt string. This is the 'Deep Learning' phase of prompting.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "DSPy: Programmatic Prompting", url: "https://github.com/stanfordnlp/dspy" },
        ],
        practice: "Use DSPy to optimize a prompt for a multi-choice question task.",
      },
      {
        what: "Function Calling & Tool Use",
        why: "To build 'Agents' that can perform actions (like sending emails or running code) based on a prompt.",
        time: "1 Week",
        prereqs: "API Basics",
        resources: [
          { name: "OpenAI: Function Calling Guide", url: "https://platform.openai.com/docs/guides/function-calling" },
        ],
        practice: "Write a prompt that enables an AI to call a 'get_weather()' function when asked about the temperature.",
      },
      {
        what: "Multi-modal Prompting (Vision/Audio)",
        why: "Prompts aren't just text anymore. Master prompting with images (GPT-4V) and audio (Gemini).",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Multi-modal Prompt Engineering", url: "https://www.promptingguide.ai/applications/multimodal" },
        ],
        practice: "Write a prompt that takes an image of a receipt and outputs a structured expense report.",
      },
      {
        what: "Context Window Optimization",
        why: "LLMs have limits. Learn to compress long histories and use 'Lost in the Middle' techniques to keep accuracy high.",
        time: "3 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Lost in the Middle Paper (Summary)", url: "https://arxiv.org/abs/2307.03172" },
        ],
        practice: "Implement a sliding window strategy for a chat history that spans 50+ messages.",
      },
      {
        what: "Autonomous Agents (AutoGPT/BabyAGI)",
        why: "To build systems that can break a goal into sub-tasks and execute them independently without user input.",
        time: "1 Week",
        prereqs: "Step 18",
        resources: [
          { name: "Introduction to AI Agents", url: "https://blog.langchain.dev/open-source-autonomous-agents/" },
        ],
        practice: "Set up a local agent that can research a topic on the web and write a 1000-word blog post.",
      },
      {
        what: "Ethics, Bias & Hallucination Mitigation",
        why: "Ensuring safety and truthfulness is the hallmark of a Senior Prompt Engineer. You are the safety guardrail.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Mitigating Hallucinations", url: "https://docs.anthropic.com/claude/docs/prevent-hallucinations" },
        ],
        practice: "Build a prompt that forces the AI to provide source citations for every claim it makes.",
      },
      {
        what: "Prompt versioning & CI/CD",
        why: "Prompts change over time. Learn to treat them like code: version them in Git and run regression tests.",
        time: "5 Days",
        prereqs: "Git basics",
        resources: [
          { name: "Prompt Registry & Versioning", url: "https://www.langchain.com/hub" },
        ],
        practice: "Create a GitHub repository where you track the performance of a prompt across 3 different model versions.",
      },
      {
        what: "DSPy: Declarative Programming for LLMs",
        why: "The peak of the field. Moving away from 'string-hacking' to structured, algorithmic prompt generation.",
        time: "1 Week",
        prereqs: "Advanced Logic",
        resources: [
          { name: "DSPy Tutorial (official)", url: "https://dspy-docs.vercel.app/docs/quick-start" },
        ],
        practice: "Implement a RAG pipeline where the prompt signature is automatically generated by DSPy.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "AI Email Persona Drafter", teaches: "Persona prompting, Tone control, and basic input handling.", tech: "ChatGPT/Claude" },
  { level: "Beginner", title: "Automatic SQL Generator", teaches: "Few-shot prompting and structured data output.", tech: "OpenAI Playground" },
  { level: "Beginner", title: "Smart Study Summarizer", teaches: "Constraints and summary formatting.", tech: "Prompt Library" },
  { level: "Intermediate", title: "RAG Knowledge Assistant", teaches: "Context injection, RAG architecture, and citations.", tech: "Python, LangChain, PDF data" },
  { level: "Intermediate", title: "LinkedIn Content Engine", teaches: "Prompt templating and style consistency.", tech: "Handlebars, Claude API" },
  { level: "Intermediate", title: "Code Review Guardrail", teaches: "Instruction compliance and error detection.", tech: "GitHub Actions, GPT API" },
  { level: "Intermediate", title: "Nuanced Language Translator", teaches: "Multi-step logic and linguistic nuance.", tech: "Few-shot, CoT" },
  { level: "Advanced", title: "Autonomous Research Agent", teaches: "Agentic loops, sub-tasking, and web-tool use.", tech: "AutoGPT / LangChain Agents" },
  { level: "Advanced", title: "Prompt Red-Team Guard", teaches: "Security patterns and injection prevention.", tech: "Python, LlamaIndex" },
  { level: "Advanced", title: "DSPy Optimized Search Bot", teaches: "Algorithmic prompt optimization and evaluation.", tech: "DSPy, ChromaDB" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Prompt User",
    description: "Focus on core techniques and manual crafting to landing high-quality outputs immediately.",
    schedule: [
      "Days 1-7: Persona, Zero-shot, and Few-shot foundations.",
      "Days 8-15: Delimiters, JSON output, and Parameter tuning.",
      "Days 16-23: Chain-of-Thought and basic RAG workflows.",
      "Days 24-30: Build 2 beginner projects and document them on GitHub.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Prompt Engineer",
    description: "Balanced path for building AI-powered applications and professional pipelines.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Templating, LangChain basics, and Security (Injection).",
      "Days 46-60: Evaluation frameworks and 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The AI Architect",
    description: "Comprehensive path for programmatic prompting, autonomous agents, and production scaling.",
    schedule: [
      "Days 1-30: Core Prompt Craft foundations.",
      "Days 31-60: Orchestration, Vector DBs, and RAG systems.",
      "Days 61-90: DSPy, Autonomous Agents, Ethics, and Job Readiness.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between Zero-shot and Few-shot prompting?",
  "How does Chain-of-Thought (CoT) reduce hallucinations?",
  "Describe a strategy to prevent prompt injection in a user-facing chatbot.",
  "What is RAG, and why is the quality of the prompt context so important?",
  "How do you handle 'context window' limitations in long-running chats?",
  "Explain the impact of Temperature and Top-P on output diversity.",
  "How would you evaluate the performance of a new prompt quantitatively?",
  "What is 'persona prompting' and how does it affect domain accuracy?",
  "When would you choose Prompt Engineering over Fine-tuning?",
  "What is programmatic prompting (e.g. DSPy) and why is it useful?",
];

const codingQuestions = [
  { question: "Write a Python script using Jinja2 to generate a dynamic prompt template.", topic: "Templating" },
  { question: "Implement a simple 'Self-Correction' loop where an LLM checks its own JSON output.", topic: "Logic" },
  { question: "Write a LangChain 'SequentialChain' that summarizes a text then translates it.", topic: "Orchestration" },
  { question: "Implement a basic string sanitizer to detect the 'Ignore all previous instructions' pattern.", topic: "Security" },
];

const mistakes = [
  "Being too vague: General prompts lead to general (and often useless) answers.",
  "Ignoring the Context Window: Overloading the prompt with too much data, causing the AI to lose focus.",
  "Not using Delimiters: Instructions and data getting mixed up, confusing the AI.",
  "Assuming 100% Accuracy: LLMs are probabilistic; never trust an output without verification.",
  "Tutorial Hell: Reading about prompting techniques without actually testing them in a playground.",
  "Hardcoding API Keys: A major security risk—always use environmental variables.",
  "Neglecting Evaluation: Relying on 'vibe checks' instead of structured scoring rubrics.",
  "Ignoring Model Specifics: What works for GPT-4 might fail for Claude or Llama.",
  "Over-engineering: Using a 500-word prompt for a task that needs 10 words.",
  "Neglecting Ethics: Failing to check if prompts generate biased or harmful content.",
];

export default function PromptEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Prompt Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of whispering to machines. From basic instruction crafting to architecting complex autonomous agents, RAG systems, and programmatic AI pipelines.
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
            <CardDescription>Apply your knowledge with these 10 hands-on Prompt Engineering projects.</CardDescription>
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
            <CardDescription>Pick a timeline that matches your availability and career goals.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream AI or Prompt Engineering role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Prompting Challenges</h3>
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
                    {['Prompt Engineering', 'LLMs', 'RAG', 'Chain-of-Thought', 'Few-shot Learning', 'DSPy', 'LangChain', 'LlamaIndex', 'Token Optimization', 'AI Security', 'Autonomous Agents', 'Vector Databases'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain a 'Prompt Library' on GitHub with documented test cases.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase 'Before and After' results showing accuracy gains from CoT or Few-shot.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your evaluation strategy (e.g. LLM-as-a-judge rubrics).</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Language of Tomorrow</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Prompt Engineering is the bridge between human thought and machine action. It's about more than just strings; it's about logic, psychology, and systems design. Stay consistent, experiment every day, and remember: The most powerful AI in the world is only as good as the person who knows how to ask. Your AI journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Prompting Projects
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
