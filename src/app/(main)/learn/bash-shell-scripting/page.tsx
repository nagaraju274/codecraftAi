
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
  Terminal,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Monitor,
  Workflow,
  History,
  Cpu,
  Server,
  Search,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Shell Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Shell & CLI",
        why: "To understand the interface between the user and the kernel. Knowing the difference between Bash, Zsh, and other shells is fundamental.",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "Bash Scripting for Beginners (YouTube - freeCodeCamp)", url: "https://www.youtube.com/watch?v=tK9Oc6AEnR4" },
          { name: "Linux Journey - Shell", url: "https://linuxjourney.com/lesson/the-shell" },
        ],
        practice: "Open your terminal. Run 'echo $SHELL' to see what you're using. Run 'uname -a' to see system info.",
      },
      {
        what: "Navigation & File Management",
        why: "The command line is your primary tool. Mastering 'ls', 'cd', 'pwd', 'mkdir', and 'rm' is essential for survival.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Terminal Navigation Basics", url: "https://ryanstutorials.net/linuxtutorial/navigation.php" },
        ],
        practice: "Create a nested directory structure 'projects/bash/scripts'. Create an empty file, move it, rename it, and then delete the parent folder.",
      },
      {
        what: "File Permissions & Ownership",
        why: "Scripts won't run without the 'execute' permission. Understanding 'chmod' and 'chown' is critical for security and functionality.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Linux File Permissions Explained", url: "https://www.youtube.com/watch?v=5W_v_To68ls" },
        ],
        practice: "Create a file. Use 'ls -l' to view permissions. Use 'chmod +x' to make it executable and 'chmod 600' to restrict access.",
      },
      {
        what: "Variables & Strings",
        why: "To store and manipulate data. Learning how to declare variables and use string interpolation is core to any script.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Bash Variables Guide", url: "https://linuxhint.com/bash_variables/" },
        ],
        practice: "Write a script that stores your name in a variable and prints 'Hello, [Name]' using double quotes.",
      },
      {
        what: "User Input & Positional Arguments",
        why: "To make your scripts dynamic. Learn to use 'read' for interactive input and '$1', '$2' for command-line arguments.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "User Input in Bash", url: "https://ryanstutorials.net/bash-scripting-tutorial/bash-input.php" },
        ],
        practice: "Create a script that takes a username as an argument and greets them. If no argument is provided, prompt for input.",
      },
      {
        what: "Arithmetic Operations",
        why: "Scripts often need to perform calculations. Master the '$(( ))' syntax for integer math.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Bash Arithmetic", url: "https://linuxize.com/post/bash-arithmetic-operators/" },
        ],
        practice: "Write a script that takes two numbers as input and prints their sum, product, and remainder.",
      },
      {
        what: "Pipes & Redirection",
        why: "The 'Unix philosophy' is to combine small tools. Master '>', '>>', and '|' to chain commands together.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Redirection and Piping Explained", url: "https://www.youtube.com/watch?v=bKzonn6UK2E" },
        ],
        practice: "List all files in a directory, sort them alphabetically, and save the result to a file named 'file_list.txt'.",
      },
      {
        what: "Conditional Logic (If/Else)",
        why: "Decision making is the heart of automation. Learn the '[ ]' and '[[ ]]' test syntax for strings and numbers.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Bash If Statements", url: "https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php" },
        ],
        practice: "Write a script that checks if a file exists. If it does, print 'Found'; otherwise, create the file.",
      },
      {
        what: "Standard I/O Streams (0, 1, 2)",
        why: "To handle errors separately from output. Understanding 'stdout' and 'stderr' is vital for debugging.",
        time: "2 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Bash Stdout and Stderr", url: "https://linuxize.com/post/bash-redirect-stderr-stdout/" },
        ],
        practice: "Run a command that you know will fail. Redirect the error message to a file named 'error.log'.",
      },
      {
        what: "Shell Expansion & Wildcards",
        why: "To perform bulk operations. Master '*', '?', and '{}' to target multiple files efficiently.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Filename Expansion", url: "https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html" },
        ],
        practice: "Use a single command to create files named 'test1.txt', 'test2.txt', and 'test3.txt'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Automation & Logic",
    level: "Intermediate",
    steps: [
      {
        what: "Loops: For, While, Until",
        why: "To automate repetitive tasks over lists of files or data.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Bash Loops Tutorial", url: "https://ryanstutorials.net/bash-scripting-tutorial/bash-loops.php" },
        ],
        practice: "Write a loop that iterates through all '.txt' files in a folder and renames them to '.bak'.",
      },
      {
        what: "Bash Functions",
        why: "To organize your code into reusable blocks and keep scripts DRY (Don't Repeat Yourself).",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Functions in Bash", url: "https://linuxize.com/post/bash-functions/" },
        ],
        practice: "Create a function called 'log_msg' that appends a timestamped message to a log file.",
      },
      {
        what: "Arrays in Bash",
        why: "To store and manage indexed lists of data within your scripts.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Bash Arrays Guide", url: "https://opensource.com/article/18/5/you-dont-know-bash-intro-bash-arrays" },
        ],
        practice: "Create an array of server IPs. Write a loop that pings each server and reports if it's up or down.",
      },
      {
        what: "Text Processing: Grep & Regex",
        why: "To find patterns in massive log files or data streams. Grep is the industry standard tool.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Grep Command Tutorial", url: "https://www.youtube.com/watch?v=vqzN8_v_TYY" },
          { name: "Regex One - Interactive Practice", url: "https://regexone.com/" },
        ],
        practice: "Search for all lines in a log file that contain 'ERROR' but do NOT contain 'Timeout'.",
      },
      {
        what: "The Stream Editor: sed",
        why: "To perform find-and-replace or text transformations on the fly without opening a text editor.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Sed in 100 Seconds", url: "https://www.youtube.com/watch?v=mRS6S_YidZ4" },
        ],
        practice: "Use 'sed' to change every occurrence of 'localhost' to '127.0.0.1' in a config file.",
      },
      {
        what: "Pattern Scanning: awk",
        why: "A complete language for processing tabular data (CSV, TSV, logs). Perfect for generating reports.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Awk Command Tutorial", url: "https://www.youtube.com/watch?v=9YOZmI-zWok" },
        ],
        practice: "Given a system output, use 'awk' to print only the 2nd and 4th columns of data.",
      },
      {
        what: "Exit Codes & Command Substitution",
        why: "To make scripts react to success or failure. Use '$?' to check status and '$()' to capture command output.",
        time: "3 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Bash Exit Codes", url: "https://linuxize.com/post/bash-exit/" },
        ],
        practice: "Write a script that runs a command. If it fails (exit code != 0), send an email alert (or print an error).",
      },
      {
        what: "Environment & Config Files",
        why: "To customize your shell and set path variables. Understand '.bashrc' vs '.bash_profile'.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Understanding Bash Profile and Bashrc", url: "https://www.howtogeek.com/676598/linux-bashrc-vs-bash_profile-whats-the-difference/" },
        ],
        practice: "Add a custom 'alias' to your '.bashrc' file and reload it using 'source'.",
      },
      {
        what: "Debugging Your Scripts",
        why: "Scripts rarely work perfectly the first time. Master 'set -x' and 'set -e'.",
        time: "3 Days",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Debugging Bash Scripts", url: "https://www.baeldung.com/linux/bash-debug-script" },
        ],
        practice: "Take a script with multiple steps. Add 'set -x' at the top to watch the execution of each line.",
      },
      {
        what: "Crontab & Task Scheduling",
        why: "To run your scripts automatically at specific times (daily backups, weekly cleanups).",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Crontab Guru (Interactive Tool)", url: "https://crontab.guru/" },
          { name: "Scheduling with Cron", url: "https://www.youtube.com/watch?v=QZJ1ggayGuY" },
        ],
        practice: "Schedule a simple 'date' command to append the current time to a file every minute for 5 minutes.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Networking & Remote Interaction",
        why: "To manage remote servers. Learn 'curl', 'wget', 'ssh', and 'scp'.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "SSH and SCP Basics", url: "https://www.youtube.com/watch?v=hQWRp-FdTpc" },
        ],
        practice: "Write a script that logs into a remote server via SSH and reports its disk usage.",
      },
      {
        what: "Process Management",
        why: "To monitor and control running programs. Learn 'ps', 'top', 'kill', and background jobs '&'.",
        time: "5 Days",
        prereqs: "None",
        resources: [
          { name: "Linux Process Management", url: "https://www.youtube.com/watch?v=766_sh_vW3Y" },
        ],
        practice: "Start a long-running process in the background. Find its PID and terminate it safely.",
      },
      {
        what: "Handling JSON with jq",
        why: "Modern APIs return JSON. 'jq' is the essential tool for parsing this data in shell scripts.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "jq Tutorial", url: "https://stedolan.github.io/jq/tutorial/" },
        ],
        practice: "Fetch weather data from a JSON API using 'curl' and use 'jq' to extract only the current temperature.",
      },
      {
        what: "Signal Handling (trap)",
        why: "To make scripts 'graceful'. Catch signals like CTRL+C to perform cleanup before exiting.",
        time: "4 Days",
        prereqs: "Step 12",
        resources: [
          { name: "Using trap in Bash", url: "https://www.tutorialspoint.com/unix/unix-signals-traps.htm" },
        ],
        practice: "Write a script that creates temporary files. Use 'trap' to ensure those files are deleted even if the user cancels the script.",
      },
      {
        what: "Advanced String Manipulation",
        why: "Parameter expansion (${var%pattern}) is faster and cleaner than using external tools like 'sed'.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "Bash Parameter Expansion", url: "https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html" },
        ],
        practice: "Write a script that takes a file path and uses parameter expansion to print only the file extension.",
      },
      {
        what: "Building CLI Tools & Getopts",
        why: "To build professional tools with flags (e.g., -v, -f, --help).",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Bash getopts Tutorial", url: "https://sookocheff.com/post/bash/parsing-bash-script-arguments-with-getopts/" },
        ],
        practice: "Build a 'file-info' tool that accepts -f (file path) and -s (show size) flags.",
      },
      {
        what: "Secure Scripting & Quoting",
        why: "To prevent word splitting and globbing bugs. Proper quoting is the #1 way to avoid security holes.",
        time: "4 Days",
        prereqs: "All previous",
        resources: [
          { name: "Bash Pitfalls (Wiki)", url: "https://mywiki.wooledge.org/BashPitfalls" },
        ],
        practice: "Audit a previous script. Ensure all variables used in commands are wrapped in double quotes.",
      },
      {
        what: "Infrastructure as Code (Ansible/Terraform Intro)",
        why: "Shell scripts are the foundation of configuration management. Understanding this link leads to DevOps roles.",
        time: "Ongoing",
        prereqs: "Advanced Stage",
        resources: [
          { name: "Ansible for Absolute Beginners", url: "https://www.youtube.com/watch?v=gocwRvLhDfI" },
        ],
        practice: "Identify a repetitive task you've scripted and research how it would be handled in Ansible.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "System Info Summary", teaches: "Variables, command execution, and formatting output.", tech: "Bash, uname, free, df" },
  { level: "Beginner", title: "Automated Directory Organizer", teaches: "Loops, conditionals, and file movement.", tech: "Bash, mv, mkdir" },
  { level: "Beginner", title: "Personal Password Generator", teaches: "Randomness, string manipulation, and standard I/O.", tech: "Bash, /dev/urandom" },
  { level: "Intermediate", title: "Log File Analyzer", teaches: "Grep, awk, and generating reports from data.", tech: "Bash, grep, awk" },
  { level: "Intermediate", title: "Multi-Server Ping Monitor", teaches: "Arrays, loops, and basic networking.", tech: "Bash, ping" },
  { level: "Intermediate", title: "Automated MySQL Backup", teaches: "Database interaction and file compression.", tech: "Bash, mysqldump, tar" },
  { level: "Intermediate", title: "Website Status Checker", teaches: "Networking (curl), exit codes, and alerts.", tech: "Bash, curl" },
  { level: "Advanced", title: "GitHub Auto-Backup Tool", teaches: "APIs (curl/jq), Git interaction, and secure token handling.", tech: "Bash, Git, curl, jq" },
  { level: "Advanced", title: "Disk Space Alert System", teaches: "Cron jobs, system monitoring, and email notifications.", tech: "Bash, crontab, mail" },
  { level: "Advanced", title: "Automated Server Hardening Script", teaches: "User management, firewall config, and security best practices.", tech: "Bash, ufw, useradd" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Intensive plan to master CLI navigation and basic automation.",
    schedule: [
      "Days 1-7: Navigation, permissions, and basic syntax.",
      "Days 8-15: Redirection, pipes, and 'if' statements.",
      "Days 16-23: For/While loops and building simple cleanup scripts.",
      "Days 24-30: Build 'Automated Directory Organizer' and learn basic Git.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for solid text processing and reporting skills.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Deep dive into grep, sed, and awk for log analysis.",
      "Days 46-60: Functions, environment config, and building the 'Log Analyzer' project.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional System Admin and DevOps readiness.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate fundamentals.",
      "Days 31-60: Advanced Concurrency, SSH automation, and JSON parsing with jq.",
      "Days 61-90: Secure scripting, Cron scheduling, and final advanced server project.",
    ]
  }
];

const interviewTopics = [
  "What is the Shebang (#!) and why is it used?",
  "Difference between '$*' and '$@'.",
  "How do you check the exit status of the last command?",
  "Explain the difference between 'source script.sh' and './script.sh'.",
  "What is the difference between '[ ]' and '[[ ]]'?",
  "How do you handle a script being cancelled by a user? (trap).",
  "Explain the difference between Hard Links and Symbolic Links.",
  "How would you find and replace a word in 100 files simultaneously?",
  "What are the 3 standard I/O streams?",
  "How do you pass arguments to a Bash function?",
];

const codingQuestions = [
  { question: "Write a script to find all files larger than 100MB in '/var/log'.", topic: "Find" },
  { question: "Count the number of occurrences of '404' in an Apache access log.", topic: "Grep" },
  { question: "Reverse the lines of a text file without using the 'rev' command.", topic: "Logic/Awk" },
  { question: "Write a script that kills a process given its name.", topic: "Process Mgmt" },
];

const mcqs = [
  { question: "Which command is used to see the current directory's path?", options: ["dir", "path", "pwd", "loc"], answer: "pwd" },
  { question: "How do you append the output of a command to an existing file?", options: [">", ">>", "|", "&"], answer: ">>" },
  { question: "Which character is used to comment out a line in Bash?", options: ["//", "--", "#", "/*"], answer: "#" },
];

const mistakes = [
  "Not quoting variables (leads to issues with spaces in filenames).",
  "Forgetting the Shebang line at the top of the script.",
  "Using 'rm -rf' without double-checking the target path.",
  "Hardcoding passwords or sensitive tokens directly in scripts.",
  "Not handling error conditions (scripts that keep running after a failure).",
  "Writing complex logic in Bash when Python or another language would be more readable.",
  "Ignoring shell check tools (like 'shellcheck') during development.",
  "Confusing the '=' assignment operator with '==' comparison.",
  "Not cleaning up temporary files created during script execution.",
  "Writing long, monolithic scripts instead of using functions.",
];

export default function BashRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Bash & Shell Scripting Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the terminal and the art of automation. From basic commands to complex system administration and DevOps workflows.
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
            <CardDescription>Apply your knowledge with these hands-on automation projects.</CardDescription>
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
                    <Cpu className="h-3 w-3"/> {p.tech}
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
            <CardDescription>Guidance to help you land System Admin or DevOps roles.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Bash', 'Linux', 'Shell Scripting', 'Automation', 'Grep', 'Awk', 'Sed', 'Cron Jobs', 'Process Management', 'RegEx', 'DevOps', 'CI/CD'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Server className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain a 'scripts' repository on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use 'ShellCheck' to show your code is high-quality.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Document every script with a clear README and usage examples.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate the Boring Stuff</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Bash is the glue that holds the internet together. Mastering it means you can control servers, automate complex workflows, and process data with unmatched speed. Stay consistent, keep typing, and soon the terminal will feel like your home. You've got this!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Build Automation Projects
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
