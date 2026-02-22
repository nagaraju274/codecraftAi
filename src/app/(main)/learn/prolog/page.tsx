
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
  Binary,
  Layers,
  Cpu,
  Globe,
  Database,
  ArrowLeft,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Logic Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & SWI-Prolog Setup",
        why: "Prolog is a declarative language based on formal logic. Setting up the SWI-Prolog environment is the first step to running logic programs.",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "SWI-Prolog Download", url: "https://www.swi-prolog.org/download/stable" },
          { name: "Prolog Tutorial 1 (YouTube)", url: "https://www.youtube.com/watch?v=SykxW7Ba9D4" },
        ],
        practice: "Install SWI-Prolog. Open the 'swipl' console and run 'halt.' to exit.",
      },
      {
        what: "Facts & Simple Queries",
        why: "Facts are the knowledge base of any Prolog program. Queries are how you ask the program questions about its knowledge.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Facts, Rules, and Queries", url: "http://www.learnprolognow.org/lpnpage.php?pagetype=html&pageid=lpn-htmlch1" },
        ],
        practice: "Create a knowledge base of fruits (e.g., fruit(apple).) and query 'fruit(apple).' and 'fruit(banana).'",
      },
      {
        what: "Variables & Unification",
        why: "Variables allow Prolog to find values that satisfy a query. Unification is the fundamental mechanism for matching data.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Unification in Prolog", url: "https://www.cpp.edu/~jrfisher/www/prolog_tutorial/2_2.html" },
        ],
        practice: "Query 'fruit(X).' to find all fruits in your knowledge base. Practice complex unification like 'f(X, a) = f(b, Y)'.",
      },
      {
        what: "Rules & Modus Ponens",
        why: "Rules allow you to derive new knowledge from existing facts. Modus Ponens is the logic principle used to conclude truths.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Prolog Rules Guide", url: "https://www.tutorialspoint.com/prolog/prolog_rules.htm" },
        ],
        practice: "Create a rule 'sibling(X, Y)' based on 'parent(P, X)' and 'parent(P, Y)'.",
      },
      {
        what: "Conjunctions (AND) & Disjunctions (OR)",
        why: "To build complex logic by combining multiple conditions using the comma (,) and semicolon (;).",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Logic Operators in Prolog", url: "https://en.wikibooks.org/wiki/Prolog/Basic_Control_Structures" },
        ],
        practice: "Write a rule 'can_vote(X)' that checks if X is a citizen AND age >= 18.",
      },
      {
        what: "Recursion Basics",
        why: "Prolog handles iteration through recursion. Mastering base cases and recursive steps is essential for complex logic.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Recursion in Prolog (YouTube)", url: "https://www.youtube.com/watch?v=SykxW7Ba9D4" },
        ],
        practice: "Write an 'ancestor(X, Y)' rule where an ancestor is a parent or an ancestor of a parent.",
      },
      {
        what: "Lists & Pattern Matching ([H|T])",
        why: "Lists are the primary collection type in Prolog. The Head/Tail notation is the standard way to process them.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "List Manipulation in Prolog", url: "http://www.learnprolognow.org/lpnpage.php?pagetype=html&pageid=lpn-htmlch4" },
        ],
        practice: "Write a predicate 'first_element(X, List)' that unifies X with the head of the list.",
      },
      {
        what: "Arithmetic & Comparisons",
        why: "While logic-focused, apps often need math. Learn to use the 'is' operator and comparison signs (<, >, =:=).",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Arithmetic in Prolog", url: "https://www.swi-prolog.org/pldoc/man?section=arith" },
        ],
        practice: "Write a predicate to calculate the factorial of a number using recursion and 'is'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Control & AI Logic",
    level: "Intermediate",
    steps: [
      {
        what: "The Cut (!) & Negation as Failure",
        why: "The cut operator prevents unnecessary backtracking, improving performance and controlling logic flow.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "The Cut Operator Explained", url: "https://www.cpp.edu/~jrfisher/www/prolog_tutorial/2_7.html" },
        ],
        practice: "Use the cut to create an 'if-then-else' structure in a predicate.",
      },
      {
        what: "List Processing: member, append, reverse",
        why: "To master the built-in predicates that handle most common list tasks.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Recursive List Operations", url: "https://www.tutorialspoint.com/prolog/prolog_lists.htm" },
        ],
        practice: "Implement 'my_append' and 'my_reverse' from scratch to understand the recursive logic.",
      },
      {
        what: "Definite Clause Grammars (DCG)",
        why: "DCGs are a powerful way to parse natural language or structured data strings directly in Prolog.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Introduction to DCGs", url: "http://www.learnprolognow.org/lpnpage.php?pagetype=html&pageid=lpn-htmlch7" },
        ],
        practice: "Write a DCG to parse simple English sentences like 'the cat eats the fish'.",
      },
      {
        what: "Higher-Order Predicates (findall, setof, bagof)",
        why: "To collect all solutions to a query into a list for further processing.",
        time: "5 Days",
        prereqs: "Step 10",
        resources: [
          { name: "All Solutions Predicates", url: "https://www.swi-prolog.org/pldoc/man?section=allsolutions" },
        ],
        practice: "Use 'findall' to get a list of all children of a specific parent in your knowledge base.",
      },
      {
        what: "Accumulators & Tail Recursion",
        why: "To write memory-efficient recursive functions that prevent stack overflow errors.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Accumulators in Prolog", url: "https://www.swi-prolog.org/pldoc/man?section=accumulators" },
        ],
        practice: "Rewrite your factorial predicate using an accumulator.",
      },
      {
        what: "Dynamic Database (assert/retract)",
        why: "To modify the knowledge base during program execution, allowing the program to 'learn' or store state.",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Dynamic Predicates", url: "https://www.swi-prolog.org/pldoc/man?section=dynamic" },
        ],
        practice: "Build a 'learning' program that asks the user for facts and adds them using 'assertz'.",
      },
      {
        what: "Structures & Terms (functor, arg, univ)",
        why: "To manipulate complex data structures and write meta-programming logic.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Term Manipulation", url: "https://www.swi-prolog.org/pldoc/man?section=manipterm" },
        ],
        practice: "Use '=..' (univ) to convert a list into a structure and vice versa.",
      },
      {
        what: "Debugging: trace & spy",
        why: "Prolog's execution is unique. Mastering the trace facility is the only way to debug complex backtracking issues.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Debugging Prolog", url: "https://www.swi-prolog.org/pldoc/man?section=debug" },
        ],
        practice: "Run 'trace.' before a recursive query to see the step-by-step resolution process.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery & Applications",
    level: "Advanced",
    steps: [
      {
        what: "Constraint Logic Programming (CLP)",
        why: "CLP allows you to solve optimization and constraint satisfaction problems (like Sudoku) much faster than standard search.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "CLP(FD) Introduction", url: "https://www.swi-prolog.org/man/clpfd.html" },
        ],
        practice: "Solve a Cryptarithmetic puzzle (e.g., SEND + MORE = MONEY) using CLP(FD).",
      },
      {
        what: "Meta-Interpreters",
        why: "Write code that interprets other Prolog code. This is the foundation for building custom expert systems and inference engines.",
        time: "2 Weeks",
        prereqs: "Step 15",
        resources: [
          { name: "Writing Meta-Interpreters", url: "https://www.metalevel.at/prolog/metainterpreters" },
        ],
        practice: "Write a 'vanilla' meta-interpreter that can resolve basic Prolog queries.",
      },
      {
        what: "Artificial Intelligence: State Space Search",
        why: "Implement classic AI search algorithms like BFS, DFS, and A* within the Prolog paradigm.",
        time: "2 Weeks",
        prereqs: "Step 6, Step 10",
        resources: [
          { name: "Search Algorithms in Prolog", url: "https://www.cpp.edu/~jrfisher/www/prolog_tutorial/2_15.html" },
        ],
        practice: "Solve the 'Missionaries and Cannibals' problem using a state space search.",
      },
      {
        what: "Natural Language Processing (NLP)",
        why: "Deepen your DCG knowledge to build complex natural language interfaces or translation tools.",
        time: "2 Weeks",
        prereqs: "Step 11",
        resources: [
          { name: "NLP with Prolog", url: "https://www.cs.utexas.edu/~mooney/cs388/prolog-nlp.html" },
        ],
        practice: "Build a program that parses queries and returns data from a knowledge base.",
      },
      {
        what: "Interfacing with Other Languages",
        why: "Prolog is often used as a logic engine embedded in apps written in Python, C, or Java.",
        time: "1 Week",
        prereqs: "Python/C Basics",
        resources: [
          { name: "PySwip (Python Interface)", url: "https://github.com/yuce/pyswip" },
        ],
        practice: "Call a Prolog predicate from a Python script to verify a logical condition.",
      },
      {
        what: "Web Development with SWI-Prolog",
        why: "Use Prolog as a high-performance web server for logic-heavy applications.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Prolog HTTP Server", url: "https://www.swi-prolog.org/pldoc/man?section=http" },
        ],
        practice: "Build a simple web server that serves a 'Hello World' page generated by Prolog.",
      },
      {
        what: "Expert Systems Development",
        why: "The ultimate application of Prolog. Learn how to structure knowledge, uncertainty, and user interfaces for decision support.",
        time: "2 Weeks",
        prereqs: "Step 18",
        resources: [
          { name: "Building Expert Systems", url: "https://www.metalevel.at/prolog/expertsystems" },
        ],
        practice: "Build a medical or tech-support expert system that identifies a problem based on symptoms.",
      },
      {
        what: "Performance Optimization & Indexing",
        why: "Learn how the Prolog compiler works under the hood to write high-performance logic code.",
        time: "1 Week",
        prereqs: "All previous",
        resources: [
          { name: "Prolog Performance", url: "https://www.swi-prolog.org/pldoc/man?section=performance" },
        ],
        practice: "Use 'time/1' to benchmark different implementations of the same algorithm.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Family Tree Knowledge Base", teaches: "Facts, rules, and recursive ancestry logic.", tech: "Prolog" },
  { level: "Beginner", title: "Simple Math Solver", teaches: "Arithmetic, recursion, and pattern matching.", tech: "Prolog" },
  { level: "Beginner", title: "Personal Knowledge Graph", teaches: "Relationships, basic queries, and variables.", tech: "Prolog" },
  { level: "Intermediate", title: "Maze Solver (DFS/BFS)", teaches: "State space search and pathfinding logic.", tech: "Prolog" },
  { level: "Intermediate", title: "Natural Language Sentence Parser", teaches: "DCGs and grammatical structure mapping.", tech: "Prolog (DCG)" },
  { level: "Intermediate", title: "Sudoku Solver", teaches: "Constraint satisfaction and backtracking control.", tech: "Prolog, CLP(FD)" },
  { level: "Intermediate", title: "Movie Recommendation Expert System", teaches: "Complex rule-based reasoning and findall.", tech: "Prolog" },
  { level: "Advanced", title: "Automated Theorem Prover", teaches: "Meta-interpreters and formal logic resolution.", tech: "Advanced Prolog" },
  { level: "Advanced", title: "Natural Language DB Interface", teaches: "NLP, DCGs, and dynamic database querying.", tech: "Prolog, SQL interop" },
  { level: "Advanced", title: "Rule-Based Web API", teaches: "HTTP serving and logical decision engines.", tech: "SWI-Prolog HTTP" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Intensive plan to master the core logic and build basic experts systems.",
    schedule: [
      "Days 1-7: Facts, Rules, and Queries.",
      "Days 8-15: Recursion and List manipulation.",
      "Days 16-23: Arithmetic, Cuts, and Negation.",
      "Days 24-30: Build the 'Family Tree' and 'Math Solver' projects.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for building AI search and grammar tools.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: DCGs, Higher-order predicates, and Accumulators.",
      "Days 46-60: Debugging techniques and 2 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for expert systems and research readiness.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: CLP(FD), Meta-interpreters, and NLP.",
      "Days 61-90: Web serving, interop, and final Expert System capstone.",
    ]
  }
];

const interviewTopics = [
  "Declarative vs. Procedural programming.",
  "How Unification works under the hood.",
  "Difference between green cuts and red cuts.",
  "Explain Negation as Failure (NAF).",
  "The 'Closed World Assumption' in Prolog.",
  "How backtracking works in the resolution process.",
  "When to use CLP(FD) over standard backtracking.",
  "Difference between member/2 and append/3 logic.",
  "Tail-call optimization in Prolog.",
  "How DCGs are converted to standard clauses.",
];

const codingQuestions = [
  { question: "Implement a predicate to find the last element of a list.", topic: "Lists" },
  { question: "Write a recursive rule to calculate the Nth Fibonacci number.", topic: "Recursion" },
  { question: "Implement a predicate to check if a list is a palindrome.", topic: "Logic" },
  { question: "Solve the N-Queens problem for N=8.", topic: "Constraint Satisfaction" },
];

const mcqs = [
  { question: "What symbol denotes 'logical AND' in a Prolog rule?", options: [";", ",", ".", "|"], answer: "," },
  { question: "Which operator is used for arithmetic evaluation?", options: ["=", "is", "==", "=:="], answer: "is" },
  { question: "What is the result of unifying [H|T] with [1, 2, 3]?", options: ["H=1, T=[2, 3]", "H=1, T=2", "H=[1, 2], T=3", "Failure"], answer: "H=1, T=[2, 3]" },
];

const mistakes = [
  "Confusing '=' (unification) with 'is' (arithmetic evaluation).",
  "Infinite recursion due to a missing or incorrect base case.",
  "Forgetting the full stop (.) at the end of every statement.",
  "Over-using the cut (!) operator, which makes code hard to read and debug.",
  "Trying to write 'procedural' loops instead of using recursion.",
  "Not using 'my' variables correctly (all atoms starting with uppercase are variables).",
  "Ordering rules poorly (Prolog reads top-to-bottom, left-to-right).",
  "Ignoring the 'Singleton Variable' warnings from the compiler.",
  "Hardcoding data instead of using dynamic database predicates when necessary.",
  "Failing to use the trace facility when debugging complex logic.",
];

export default function PrologRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Brain className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Prolog Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the foundation of logic programming and AI. From your first facts to building complex expert systems and natural language parsers.
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
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
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
            <CardDescription>Apply your knowledge with these hands-on logic projects.</CardDescription>
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
            <CardDescription>Choose a timeline that matches your availability.</CardDescription>
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
            <CardDescription>Guidance to help you land your first role in Logic or AI development.</CardDescription>
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
                    {['Prolog', 'Logic Programming', 'Expert Systems', 'Natural Language Processing', 'DCG', 'Constraint Logic Programming', 'Backtracking', 'Knowledge Representation', 'AI Search Algorithms', 'Meta-Programming'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of formal logic and reasoning.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Host your Prolog projects on GitHub with clear documentation on how to run them.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with AI-specific problems solved using Prolog.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Logic of AI</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Prolog isn't just a language; it's a way of thinking. It forces you to define what a problem is, rather than how to solve it. Stay consistent, embrace recursion, and soon you'll be building intelligent systems that can reason and learn. Your logical journey starts today!
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
