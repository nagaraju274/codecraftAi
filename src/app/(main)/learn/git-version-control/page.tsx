
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
  GitBranch,
  Github,
  Terminal,
  Code,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Monitor,
  Workflow,
  History,
  Undo,
  Lock,
  Globe,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Git Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Version Control",
        why: "To understand why we need Git (tracking changes, collaboration, backup) and the difference between Local, Centralized, and Distributed systems.",
        time: "1 Day",
        prereqs: "Basic Computer Literacy",
        resources: [
          { name: "Git for Professionals (YouTube)", url: "https://www.youtube.com/watch?v=Uszj_k0DGsg" },
          { name: "About Version Control (Official Docs)", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" },
        ],
        practice: "Explain the difference between a local folder and a Git repository to a friend.",
      },
      {
        what: "Installation & Initial Configuration",
        why: "Every commit needs an author. Setting up your name, email, and default editor is the required first step for any environment.",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "Installing Git", url: "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" },
          { name: "First-Time Git Setup", url: "https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" },
        ],
        practice: "Install Git and run 'git config --global user.name' and 'git config --global user.email'.",
      },
      {
        what: "Initializing Repositories",
        why: "To turn an ordinary folder into a Git-tracked project. This creates the hidden .git directory.",
        time: "1 Day",
        prereqs: "Terminal Basics",
        resources: [
          { name: "git init Docs", url: "https://git-scm.com/docs/git-init" },
        ],
        practice: "Create a new folder and run 'git init' inside it. Observe the hidden files.",
      },
      {
        what: "The Core Workflow: Add & Commit",
        why: "This is 90% of what you do in Git. Learning to stage changes and create meaningful snapshots (commits).",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Git Basics - Recording Changes", url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" },
          { name: "Conventional Commits Guide", url: "https://www.conventionalcommits.org/" },
        ],
        practice: "Create a text file, stage it with 'git add', and commit it with a descriptive message.",
      },
      {
        what: "Inspecting History",
        why: "To see who changed what and when. Essential for auditing code and understanding project evolution.",
        time: "1 Day",
        prereqs: "Step 4",
        resources: [
          { name: "Viewing the Commit History", url: "https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History" },
        ],
        practice: "Run 'git log' and 'git log --oneline' to see your recent changes.",
      },
      {
        what: "Branching Basics",
        why: "Branching allows you to work on new features without breaking the main production code.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Git Branching - Basic Branching and Merging", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" },
        ],
        practice: "Create a branch named 'feature-test', switch to it, and make a commit.",
      },
      {
        what: "Merging & Fast-Forward",
        why: "To integrate your feature code back into the main branch.",
        time: "2 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Git Merging Explained (YouTube)", url: "https://www.youtube.com/watch?v=0S_vAbid_Vs" },
        ],
        practice: "Switch back to 'main' and merge your 'feature-test' branch.",
      },
      {
        what: "Ignoring Files (.gitignore)",
        why: "To keep your repository clean by excluding temporary files, logs, and sensitive environment variables.",
        time: "1 Day",
        prereqs: "Step 3",
        resources: [
          { name: "gitignore.io (Tool)", url: "https://www.toptal.com/developers/gitignore" },
          { name: "Ignoring Files Docs", url: "https://git-scm.com/docs/gitignore" },
        ],
        practice: "Create a '.gitignore' file and add a pattern to ignore all '.log' files.",
      },
      {
        what: "Remote Repositories & GitHub",
        why: "To share your code with the world and collaborate with others.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Git Basics - Working with Remotes", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes" },
          { name: "GitHub Introduction", url: "https://docs.github.com/en/get-started" },
        ],
        practice: "Create a GitHub account, a new remote repo, and push your local code to it.",
      },
      {
        what: "Cloning, Fetching & Pulling",
        why: "To download existing projects and stay up-to-date with changes made by teammates.",
        time: "2 Days",
        prereqs: "Step 9",
        resources: [
          { name: "git pull vs fetch (YouTube)", url: "https://www.youtube.com/watch?v=f1wnZ99id7I" },
        ],
        practice: "Clone a public repository from GitHub and run 'git fetch' to see latest changes.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Professional Workflows",
    level: "Intermediate",
    steps: [
      {
        what: "Merge Conflicts: Resolution",
        why: "Conflicts happen when two people change the same line. Resolving them manually is a vital skill.",
        time: "3 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Resolving Merge Conflicts", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line" },
        ],
        practice: "Intentionally create a conflict between two branches and resolve it manually in VS Code.",
      },
      {
        what: "Stashing Temporary Changes",
        why: "To quickly switch branches without committing unfinished work.",
        time: "2 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Git Stashing Docs", url: "https://git-scm.com/docs/git-stash" },
        ],
        practice: "Make a change, run 'git stash', switch branches, return, and run 'git stash pop'.",
      },
      {
        what: "Rebasing vs. Merging",
        why: "To keep a clean, linear project history. Essential for professional open-source contributions.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Git Rebasing", url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing" },
          { name: "Merging vs Rebasing (YouTube)", url: "https://www.youtube.com/watch?v=f1wnZ99id7I" },
        ],
        practice: "Rebase a feature branch onto main instead of merging.",
      },
      {
        what: "Undoing Changes (Reset & Revert)",
        why: "Everyone makes mistakes. Knowing how to safely undo commits or unstage files is mandatory.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Git Reset, Checkout, and Revert", url: "https://www.atlassian.com/git/tutorials/undoing-changes" },
        ],
        practice: "Use 'git revert' to undo a specific commit without deleting it from history.",
      },
      {
        what: "Cherry-Picking Commits",
        why: "To apply a specific commit from one branch onto another without merging the whole branch.",
        time: "2 Days",
        prereqs: "Step 6",
        resources: [
          { name: "git cherry-pick Docs", url: "https://git-scm.com/docs/git-cherry-pick" },
        ],
        practice: "Cherry-pick a single bug-fix commit from a dev branch into your main branch.",
      },
      {
        what: "Pull Requests & Code Reviews",
        why: "The standard way teams collaborate. Learn how to propose changes and review others' work.",
        time: "3 Days",
        prereqs: "Step 9",
        resources: [
          { name: "About Pull Requests", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" },
        ],
        practice: "Fork a public repository, make a change, and submit a dummy Pull Request.",
      },
      {
        what: "Tagging Releases",
        why: "To mark specific points in history as important (e.g., v1.0, v2.0).",
        time: "1 Day",
        prereqs: "Step 5",
        resources: [
          { name: "Git Tagging", url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging" },
        ],
        practice: "Create a lightweight and an annotated tag for your latest commit.",
      },
      {
        what: "SSH Keys & Security",
        why: "For more secure and convenient authentication with remotes compared to HTTPS passwords.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Generating a new SSH key", url: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" },
        ],
        practice: "Generate an SSH key and add it to your GitHub profile settings.",
      },
    ],
  },
  {
    title: "Advanced Stage: Git Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Interactive Rebasing",
        why: "To 'squash' multiple small commits into a single clean one before merging.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Rewriting History - Interactive Rebase", url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History" },
        ],
        practice: "Take 3 messy commits and squash them into 1 using 'git rebase -i'.",
      },
      {
        what: "Git Reflog: The Safety Net",
        why: "To recover commits or branches that were accidentally deleted or lost during a rebase.",
        time: "2 Days",
        prereqs: "Step 13",
        resources: [
          { name: "Git Reflog Guide", url: "https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog" },
        ],
        practice: "Intentionally delete a branch and then find its hash using 'git reflog' to restore it.",
      },
      {
        what: "Git Hooks: Automation",
        why: "To run scripts (like linting or tests) automatically before commits or pushes.",
        time: "4 Days",
        prereqs: "Scripting basics",
        resources: [
          { name: "Customizing Git - Git Hooks", url: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks" },
          { name: "Husky (Tool for JS)", url: "https://typicode.github.io/husky/" },
        ],
        practice: "Create a pre-commit hook that prevents committing if the word 'TODO' is found in code.",
      },
      {
        what: "Branching Strategies (Git Flow vs Trunk)",
        why: "To manage large teams and production releases effectively.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Gitflow Workflow", url: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow" },
          { name: "Trunk Based Development", url: "https://trunkbaseddevelopment.com/" },
        ],
        practice: "Draw a diagram showing how a hotfix is handled in Git Flow.",
      },
      {
        what: "Git Bisect: Finding Bugs",
        why: "To use binary search to quickly find the exact commit that introduced a bug.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Debugging with Git Bisect", url: "https://git-scm.com/docs/git-bisect" },
        ],
        practice: "Use 'git bisect' to find which of 10 commits 'broke' a simple test script.",
      },
      {
        what: "Submodules & Subtrees",
        why: "To manage dependencies or include other Git repositories within your own project.",
        time: "1 Week",
        prereqs: "Advanced Logic",
        resources: [
          { name: "Git Tools - Submodules", url: "https://git-scm.com/book/en/v2/Git-Tools-Submodules" },
        ],
        practice: "Add a common utility library repo as a submodule to your main project.",
      },
      {
        what: "Managing Large Files (Git LFS)",
        why: "Standard Git struggles with large binaries (images, videos). LFS handles them efficiently.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Git Large File Storage (LFS)", url: "https://git-lfs.com/" },
        ],
        practice: "Track a '.psd' or '.mp4' file using Git LFS.",
      },
      {
        what: "Git Internals: Objects & References",
        why: "To deeply understand how Git works under the hood (Blobs, Trees, Commits, Tags).",
        time: "1 Week",
        prereqs: "All previous",
        resources: [
          { name: "Git Internals - Git Objects", url: "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects" },
        ],
        practice: "Explore the contents of '.git/objects' and use 'git cat-file' to inspect them.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal 'About Me' Page", teaches: "Initialization, staging, committing, and basic GitHub hosting.", tech: "Git, HTML, GitHub Pages" },
  { level: "Beginner", title: "Collaborative Recipe Book", teaches: "Branching and simple merging with a partner.", tech: "Git, Markdown" },
  { level: "Beginner", title: "Git Command Cheat Sheet", teaches: "Markdown formatting and tracking history of a document.", tech: "Git, Markdown" },
  { level: "Intermediate", title: "Open Source Bug Fix", teaches: "Forking, cloning, proposing changes via Pull Request.", tech: "Git, GitHub, Any Language" },
  { level: "Intermediate", title: "Feature Flag Simulator", teaches: "Managing multiple long-lived feature branches.", tech: "Git, JavaScript" },
  { level: "Intermediate", title: "Automated Linter Hook", teaches: "Git Hooks (pre-commit) to ensure code quality.", tech: "Git, Husky, Shell" },
  { level: "Intermediate", title: "Versioned Database Migrations", teaches: "Tracking SQL changes over time using Git.", tech: "Git, SQL" },
  { level: "Advanced", title: "Custom Git CLI Wrapper", teaches: "Deep integration with Git commands via scripts.", tech: "Python/Node.js, Git CLI" },
  { level: "Advanced", title: "Complex Conflict Resolution Lab", teaches: "Solving deep architectural conflicts in a team setting.", tech: "Git, Multi-user simulation" },
  { level: "Advanced", title: "Full CI/CD Pipeline", teaches: "Triggering builds and deployments automatically on 'git push'.", tech: "Git, GitHub Actions, Docker" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Essential Contributor",
    description: "Focus on daily survival and contributing to teams effectively.",
    schedule: [
      "Days 1-7: Installation, Config, Add, Commit, and Log.",
      "Days 8-15: Branching, Merging, and GitHub Basics.",
      "Days 16-23: Pull Requests, Fetch/Pull, and basic Conflict resolution.",
      "Days 24-30: Build a Personal Portfolio repo and contribute a typo-fix to an Open Source project.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Workflow Pro",
    description: "Balanced path for professional developers handling complex projects.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Rebasing, Stashing, Undoing changes, and SSH security.",
      "Days 46-60: Git Flow strategy and building a project with automated Hooks.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Git Architect",
    description: "Comprehensive path for DevOps and Lead Engineers.",
    schedule: [
      "Days 1-30: Fundamentals and Professional workflows.",
      "Days 31-60: Interactive Rebasing, Reflog, and Debugging with Bisect.",
      "Days 61-90: Git Internals, LFS, Submodules, and advanced CI/CD integration.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between Git and GitHub?",
  "Explain the Git 'Three-Tree' architecture (Working, Staging, Repo).",
  "What is the difference between `git merge` and `git rebase`?",
  "How do you resolve a merge conflict?",
  "What does `git pull` actually do under the hood? (Fetch + Merge).",
  "How do you undo a commit that has already been pushed? (`revert`) vs. not pushed? (`reset`).",
  "What is a 'detached HEAD' state?",
  "Explain the purpose of the `.gitignore` file.",
  "What is a 'squash' merge and why is it used?",
  "How can you find a lost commit that isn't on any branch? (`reflog`).",
];

const codingQuestions = [
  { question: "Initialize a new repository and add all files in the current directory with one command.", topic: "CLI Basics" },
  { question: "Show the differences between the current working directory and the last commit.", topic: "Inspection" },
  { question: "Create a new branch and switch to it in a single command.", topic: "Branching" },
  { question: "Update your local branch with changes from the remote server without performing a merge.", topic: "Remotes" },
];

const mcqs = [
  { question: "Which command is used to record changes permanently in the version history?", options: ["git stage", "git add", "git commit", "git push"], answer: "git commit" },
  { question: "What is the correct command to switch to an existing branch named 'dev'?", options: ["git move dev", "git switch dev", "git branch dev", "git change dev"], answer: "git switch dev" },
  { question: "Which file is used to specify files that Git should always ignore?", options: ["config.git", ".gitconfig", ".gitignore", ".git-exclude"], answer: ".gitignore" },
];

const mistakes = [
  "Committing sensitive data (API keys, passwords) - use .env and .gitignore.",
  "Writing vague commit messages like 'fix' or 'update' - follow Conventional Commits.",
  "Working directly on the main/master branch - always use feature branches.",
  "Forgetting to pull latest changes before starting work, leading to massive conflicts.",
  "Force-pushing to a shared branch - this can delete your teammates' work.",
  "Committing large binary files (videos, high-res assets) - use Git LFS instead.",
  "Not using branches for experiments - 'git stash' or a new branch is safer.",
  "Committing broken code - use pre-commit hooks to run tests automatically.",
  "Trying to 'fix' history that has already been shared with others.",
  "Ignoring the powerful 'git help' command when stuck.",
];

export default function GitRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <GitBranch className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Git Mastery Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive guide to mastering version control. From your first commit to advanced history manipulation and professional team workflows.
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your GitHub profile.</CardDescription>
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
            <CardDescription>Choose a timeline that fits your schedule.</CardDescription>
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
            <CardDescription>Master the questions that prove you can handle real-world team development.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live CLI Challenges</h3>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Version Control', 'CI/CD', 'Branching Strategies', 'Code Review', 'Rebasing', 'Git Flow', 'Merge Conflict Resolution', 'Git Hooks', 'LFS', 'GitHub Actions'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Github className="h-5 w-5 text-primary"/> Showcase Your Profile</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Ensure your GitHub contributions graph shows consistent activity.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use professional 'README.md' files for every major project.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with 'Pull Requests' and 'Code Reviews'.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Commit to Your Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Git is the time machine of the software world. It gives you the freedom to experiment, the security to fail, and the power to collaborate globally. Stay consistent with your commits, learn from your conflicts, and remember that every great software architect was once a beginner fighting their first merge conflict. Your journey to mastery starts with one simple command: <code>git init</code>.
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
