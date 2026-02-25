
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
  Scale,
  Eye,
  Lock,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Foundations of AI & Moral Philosophy",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to AI & ML Systems",
        why: "To criticize AI, you must understand how it works. Learn the difference between supervised, unsupervised, and reinforcement learning.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Elements of AI (Free Course)", url: "https://www.elementsofai.com/" },
          { name: "Google's Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
        ],
        practice: "Explain how a simple recommendation algorithm works to a non-technical person.",
      },
      {
        what: "History of Algorithmic Bias",
        why: "To understand that bias isn't new. Study historical cases like COMPAS (sentencing) and Amazon's hiring tool.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Weapons of Math Destruction (Book Summary)", url: "https://www.youtube.com/watch?v=look-up-womd" },
          { name: "Coded Bias (Documentary/Talk)", url: "https://www.ajl.org/coded-bias" },
        ],
        practice: "Write a 500-word summary on how the COMPAS algorithm demonstrated racial bias.",
      },
      {
        what: "Ethics 101: Moral Frameworks",
        why: "AI ethics is applied philosophy. Learn about Utilitarianism, Deontology, and Virtue Ethics.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Justice with Michael Sandel (YouTube)", url: "https://www.youtube.com/playlist?list=PL30C13C7C277F0D63" },
          { name: "Stanford Encyclopedia of Philosophy: AI Ethics", url: "https://plato.stanford.edu/entries/ethics-ai/" },
        ],
        practice: "Apply 'The Trolley Problem' to self-driving car logic. What should the car prioritize?",
      },
      {
        what: "Algorithmic Fairness Metrics",
        why: "To measure bias mathematically. Learn about Demographic Parity, Equal Opportunity, and Predictive Parity.",
        time: "1 Week",
        prereqs: "Basic Probability",
        resources: [
          { name: "Fairness and Machine Learning (Book)", url: "https://fairmlbook.org/" },
        ],
        practice: "Calculate the 'Equal Opportunity' metric for a simulated loan approval dataset.",
      },
      {
        what: "Python for Ethics Research",
        why: "Python is the toolkit for auditing models. Master Pandas for data inspection and Scikit-learn for basic modeling.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Python for Data Analysis (Book)", url: "https://wesmckinney.com/book/" },
        ],
        practice: "Inspect a census dataset using Pandas to find class imbalances across race and gender.",
      },
      {
        what: "Data Privacy & Governance",
        why: "Ethics includes protecting user rights. Learn about GDPR, CCPA, and Differential Privacy.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Privacy in the Age of AI (Course)", url: "https://www.coursera.org/learn/privacy-ai" },
        ],
        practice: "List three ways 'Differential Privacy' protects individuals in a large dataset.",
      },
      {
        what: "Human-Centered Design (HCD)",
        why: "To ensure AI serves humans, not the other way around. Learn to prioritize user agency and feedback.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "People + AI Guidebook (Google)", url: "https://pair.withgoogle.com/guidebook/" },
        ],
        practice: "Audit a mobile app's AI feature (like predictive text) for how it handles user errors.",
      },
      {
        what: "Stakeholder Analysis",
        why: "AI impacts more than just the buyer. Learn to identify direct and indirect stakeholders.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Stakeholder Mapping for AI", url: "https://viterbischool.usc.edu/" },
        ],
        practice: "Map out the stakeholders for an AI-powered surveillance system in a public park.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Auditing & Explainability",
    level: "Intermediate",
    steps: [
      {
        what: "Fairness Toolkits (AIF360 & Fairlearn)",
        why: "Professional researchers use specialized tools to detect and mitigate bias in model pipelines.",
        time: "1 Week",
        prereqs: "Python Basics",
        resources: [
          { name: "AI Fairness 360 (IBM)", url: "https://aif360.res.ibm.com/" },
          { name: "Fairlearn Documentation", url: "https://fairlearn.org/" },
        ],
        practice: "Use Fairlearn to identify disparate impact in a standard classification model.",
      },
      {
        what: "Explainable AI (XAI) - SHAP & LIME",
        why: "To trust a model, we must understand 'Why' it made a decision. These tools reveal feature importance.",
        time: "1 Week",
        prereqs: "Machine Learning Basics",
        resources: [
          { name: "Interpretable Machine Learning (Book)", url: "https://christophm.github.io/interpretable-ml-book/" },
        ],
        practice: "Generate a SHAP waterfall plot for a credit score model to see which feature influenced a 'Deny' decision.",
      },
      {
        what: "Dataset Auditing & Documentation",
        why: "Models are only as good as their data. Learn about 'Datasheets for Datasets' to track provenance and bias.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Datasheets for Datasets (Paper)", url: "https://arxiv.org/abs/1803.09010" },
        ],
        practice: "Create a 'Datasheet' for a publicly available dataset on Kaggle.",
      },
      {
        what: "Adversarial Attacks & Robustness",
        why: "Hackers can trick AI. SRE-like monitoring for security is vital for safety research.",
        time: "1 Week",
        prereqs: "Deep Learning basics",
        resources: [
          { name: "Adversarial Robustness Toolbox (ART)", url: "https://github.com/Trusted-AI/adversarial-robustness-toolbox" },
        ],
        practice: "Simulate a 'Fast Gradient Sign Method' attack on an image classifier.",
      },
      {
        what: "LLM Safety & Jailbreaking",
        why: "Large Language Models can generate toxic or dangerous content. You must learn how they are secured.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Constitutional AI (Anthropic Paper)", url: "https://arxiv.org/abs/2212.08073" },
        ],
        practice: "Research three common 'Jailbreak' techniques and how developers patch them.",
      },
      {
        what: "Value Alignment (RLHF)",
        why: "To ensure AI goals match human values. Reinforcement Learning from Human Feedback is the current standard.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Illustrating Reinforcement Learning from Human Feedback", url: "https://huggingface.co/blog/rlhf" },
        ],
        practice: "Write a flow diagram of how a human labeler's input improves a chatbot's politeness.",
      },
      {
        what: "Corporate AI Ethics Frameworks",
        why: "Companies like Microsoft and Google have internal ethics boards. Learn how they operationalize ethics.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Microsoft Responsible AI Standard", url: "https://www.microsoft.com/en-us/ai/responsible-ai" },
        ],
        practice: "Critique a corporate AI ethics principle. Is it specific enough to be actionable?",
      },
      {
        what: "Technological Unemployment & Economy",
        why: "AI ethics extends to societal impact. Study the long-term effects of automation on the workforce.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "The Second Machine Age (Book excerpt)", url: "https://www.youtube.com/watch?v=look-up-machine-age" },
        ],
        practice: "Propose a policy measure (like UBI or retraining programs) to mitigate AI-induced job loss.",
      },
    ],
  },
  {
    title: "Advanced Stage: Red Teaming & Policy",
    level: "Advanced",
    steps: [
      {
        what: "Red Teaming LLMs",
        why: "The ultimate testing ground. Actively trying to make a model fail to find its boundaries.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "A Guide to Red Teaming AI", url: "https://www.youtube.com/watch?v=look-up-red-team" },
        ],
        practice: "Perform a mock 'Red Teaming' session on an open-source LLM to find bias in medical advice.",
      },
      {
        what: "Algorithmic Impact Assessments (AIA)",
        why: "Governments now require AIAs. Learn to evaluate the societal risks of a system before deployment.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Algorithmic Impact Assessment Framework", url: "https://ada-lovelace-institute.org/" },
        ],
        practice: "Conduct a full AIA for an AI system used in public housing allocation.",
      },
      {
        what: "AI Policy & Global Regulation (EU AI Act)",
        why: "The EU AI Act is the most important AI law. Understanding its risk tiers is mandatory for researchers.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "EU AI Act Compliance Tracker", url: "https://artificialintelligenceact.eu/" },
        ],
        practice: "Categorize 5 AI applications into the EU AI Act's risk categories (Unacceptable, High, Limited, Minimal).",
      },
      {
        what: "AI Forensics & Auditing",
        why: "When things go wrong, researchers must investigate the 'Black Box' to find the cause of failure.",
        time: "1 Week",
        prereqs: "Intermediate Tools",
        resources: [
          { name: "Auditing Algorithms (Course)", url: "https://www.youtube.com/watch?v=look-up-audit-algos" },
        ],
        practice: "Audit an open-source model's output for consistency across different cultural contexts.",
      },
      {
        what: "Cross-Cultural AI Ethics",
        why: "Western ethics are not universal. Study how Confucian, Ubuntu, and Islamic ethics view AI autonomy.",
        time: "1 Week",
        prereqs: "Ethics 101",
        resources: [
          { name: "Global AI Ethics (Berkman Klein Center)", url: "https://cyber.harvard.edu/" },
        ],
        practice: "Contrast the concept of 'Privacy' in individualist vs. collectivist societies.",
      },
      {
        what: "AI Safety & Existential Risk",
        why: "Master the long-term safety discussions (Alignment, Superintelligence).",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "AI Alignment (Center for AI Safety)", url: "https://www.safe.ai/alignment" },
        ],
        practice: "Summarize the 'Orthogonality Thesis' and its implications for AI goals.",
      },
      {
        what: "Academic Writing & Publication",
        why: "To contribute to the field. Learn to write research papers that influence policy and industry.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Writing a High-Impact Ethics Paper", url: "https://facctconference.org/" },
        ],
        practice: "Write a 4-page research proposal on a novel way to detect bias in multimodal (Image+Text) models.",
      },
      {
        what: "Final Capstone: Independent Ethics Audit",
        why: "To synthesize all technical and social skills into a professional-grade audit report.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Audit a popular open-source model (e.g., Llama or Stable Diffusion) for a specific harm and publish the findings on GitHub.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Bias Checker Dashboard", teaches: "Pandas, basic stats, and data visualization.", tech: "Python, Streamlit" },
  { level: "Beginner", title: "Privacy Policy Summarizer", teaches: "Text processing and extraction of rights.", tech: "Python, NLP" },
  { level: "Beginner", title: "AI Fairness Scorecard", teaches: "Fairness metrics (Demographic Parity).", tech: "Excel/Python" },
  { level: "Intermediate", title: "XAI Explainability App", teaches: "SHAP, LIME, and model transparency.", tech: "Python, SHAP, React" },
  { level: "Intermediate", title: "Dataset Bias Audit", teaches: "Datasheets for Datasets, statistical auditing.", tech: "Python, Jupyter" },
  { level: "Intermediate", title: "Red Teaming CLI", teaches: "Manual testing, prompt injection analysis.", tech: "Python, LLM API" },
  { level: "Intermediate", title: "Ethics Linter for Code", teaches: "Parsing code for sensitive keywords (race, gender).", tech: "Python, Regex" },
  { level: "Advanced", title: "Algorithmic Impact Assessment Tool", teaches: "Policy logic, risk scoring, and automation.", tech: "Next.js, Python" },
  { level: "Advanced", title: "Fair Generative Agent", teaches: "Constraint-based generation and RLHF logic.", tech: "Genkit, PyTorch" },
  { level: "Advanced", title: "Global AI Policy Tracker", teaches: "Data aggregation, legal parsing, and visualization.", tech: "Python, Web Scraping" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Ethics Reviewer",
    description: "Focus on bias detection and core philosophy to join ethics review boards.",
    schedule: [
      "Days 1-7: AI Foundations & Ethics 101.",
      "Days 8-15: History of Bias & Stakeholder Analysis.",
      "Days 16-23: Fairness Metrics & Python auditing.",
      "Days 24-30: Build a Bias Checker and learn GDPR basics.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Responsible AI Engineer",
    description: "Balanced path covering explainability, privacy, and technical auditing.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: XAI (SHAP/LIME), Privacy (DP), and Robustness.",
      "Days 46-60: LLM Safety, RLHF, and building an Explainability app.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Policy Architect",
    description: "Comprehensive path for professional research, auditing, and high-level policy advice.",
    schedule: [
      "Days 1-30: Core Ethics & Technical foundations.",
      "Days 31-60: Professional Auditing & Corporate Frameworks.",
      "Days 61-90: Red Teaming, EU AI Act, Research Publication, and final Capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between Fairness and Explainability.",
  "Describe the 'Black Box' problem in Deep Learning.",
  "How do you handle the tradeoff between Accuracy and Fairness?",
  "What is the EU AI Act and how does it affect US-based companies?",
  "Explain the difference between Demographic Parity and Equal Opportunity.",
  "How would you conduct a 'Blameless Post-mortem' for an AI failure?",
  "Describe a case where an AI system caused societal harm.",
  "What is 'Differential Privacy'?",
  "How do you ensure user agency in AI systems?",
  "Explain 'Value Alignment' in Large Language Models.",
];

const codingQuestions = [
  { question: "Write a function to calculate the Disparate Impact Ratio for a dataset.", topic: "Fairness Math" },
  { question: "Implement a simple filter that detects sensitive attributes in a CSV file.", topic: "Data Audit" },
  { question: "Using SHAP, identify the top 3 features contributing to a specific prediction.", topic: "Explainability" },
  { question: "Write a test case that checks for 'Prompt Injection' in a chatbot input.", topic: "Security" },
];

const mcqs = [
  { question: "Which framework focuses on 'The greatest good for the greatest number'?", options: ["Deontology", "Utilitarianism", "Virtue Ethics", "Nihilism"], answer: "Utilitarianism" },
  { question: "What does XAI stand for?", options: ["Extended AI", "Extreme AI", "Explainable AI", "Exterior AI"], answer: "Explainable AI" },
  { question: "Which EU law regulates AI based on risk categories?", options: ["GDPR", "Digital Services Act", "AI Act", "ePrivacy Directive"], answer: "AI Act" },
];

const mistakes = [
  "Assuming data is neutral: Data reflects the biases of the society that produced it.",
  "Treating ethics as a checklist: It's an ongoing process of inquiry, not a one-time task.",
  "Ignoring stakeholders: Not talking to the people actually impacted by the AI.",
  "Technical Solutionism: Believing that all ethical problems can be fixed with more code.",
  "Lack of diversity in Red Teams: Homogeneous teams miss cultural and social nuances.",
  "Ignoring the 'Quiet' harms: Focusing only on catastrophic failure and ignoring subtle daily bias.",
  "Tutorial Hell: Reading about ethics without looking at raw, messy datasets.",
  "Vague principles: Using words like 'Fairness' without defining the mathematical metric being used.",
  "Neglecting Privacy: Focusing so much on bias that you forget to protect individual data rights.",
  "Fear of the 'Black Box': Thinking models are too complex to understand—they aren't with XAI.",
];

export default function AiEthicsRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Scale className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            AI Ethics Researcher Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the bridge between technology and humanity. From mathematical fairness and explainability to global policy, AI safety, and corporate governance.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional AI Ethics Researcher.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream role in AI Safety or Ethics Research.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Ethics Challenges</h3>
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
                    {['Responsible AI', 'Explainable AI', 'SHAP', 'Fairlearn', 'AIF360', 'Bias Mitigation', 'EU AI Act', 'AI Safety', 'Red Teaming', 'LLM Alignment', 'Privacy by Design', 'Differential Privacy'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your ability to work at the intersection of 'Tech' and 'Society'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include links to published articles or audit reports in your READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with cross-disciplinary collaboration.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Ethical Heart of AI</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            AI is the most powerful tool ever created, but its power must be balanced with responsibility. As an AI Ethics Researcher, you are the navigator of this technological revolution. Stay consistent, read the papers, engage with affected communities, and remember: The most intelligent system is one that respects human dignity. Your journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Ethical AI
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
