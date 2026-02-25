
export interface RoadmapStep {
  what: string;
  why: string;
  time: string;
  prereqs: string;
  resources: { name: string; url: string }[];
  practice: string;
}

export interface RoadmapStage {
  title: string;
  level: string;
  steps: RoadmapStep[];
}

export interface RoadmapProject {
  level: string;
  title: string;
  teaches: string;
  tech: string;
}

export interface RoadmapPlan {
  title: string;
  description: string;
  schedule: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  subCategory?: string;
  subCategories?: string[];
  iconType?: 'terminal' | 'code' | 'globe' | 'cpu' | 'database' | 'smartphone';
  stages?: RoadmapStage[];
  projects?: RoadmapProject[];
  plans?: RoadmapPlan[];
  interviewTopics?: string[];
  codingQuestions?: { question: string; topic: string }[];
  mistakes?: string[];
  assignments?: any[];
  topics?: any[];
}

export const learningPaths: LearningPath[] = [
  {
    id: "solidity",
    title: "Solidity",
    description: "Master the language of smart contracts. Build secure, decentralized applications on the Ethereum blockchain.",
    category: "Programming Languages",
    subCategory: "Blockchain / Smart Contract Languages",
    topics: [],
    assignments: []
  },
  {
    id: "hcl",
    title: "HCL",
    description: "Master the language of the modern cloud. Build, scale, and secure infrastructure with HCL.",
    category: "Programming Languages",
    subCategory: "DevOps / Configuration / Infra-as-Code",
    topics: [],
    assignments: []
  },
  {
    id: "fortran",
    title: "Fortran",
    description: "Master the language of numerical computing and high-performance engineering simulations.",
    category: "Programming Languages",
    subCategories: ["Data Science / Stats / Math-Oriented", "Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "bash",
    title: "Bash & Shell Scripting",
    description: "Master the foundation of systems automation. From terminal basics to complex DevOps pipelines.",
    category: "Programming Languages",
    subCategory: "Scripting & Automation Languages",
    iconType: "terminal",
    stages: [
      {
        title: "Beginner Stage: Terminal Foundations",
        level: "Beginner",
        steps: [
          {
            what: "Introduction to the Shell & CLI",
            why: "To understand the interface between you and the kernel.",
            time: "2 Days",
            prereqs: "None",
            resources: [{ name: "Linux Journey: The Shell", url: "https://linuxjourney.com/lesson/the-shell" }],
            practice: "Practice using 'pwd', 'ls', 'cd', 'mkdir'."
          },
          {
            what: "File Operations & Redirection",
            why: "To manage files and move data between commands using pipes.",
            time: "3 Days",
            prereqs: "Step 1",
            resources: [{ name: "Redirection & Piping (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Command_line#redirection_and_pipes" }],
            practice: "Pipe 'ls' output into 'grep'."
          }
        ]
      }
    ],
    projects: [
      { level: "Beginner", title: "Automated Log Cleaner", teaches: "File ops and cron.", tech: "Bash, Cron" }
    ],
    plans: [
      { title: "30-Day Fast Track", description: "Core essentials.", schedule: ["Day 1-7: Syntax", "Day 8-15: Logic"] }
    ],
    interviewTopics: ["Explain the Pipeline (|)", "What is a Shebang?"],
    codingQuestions: [{ question: "Write a script to find large files.", topic: "File I/O" }],
    mistakes: ["Not using 'set -e'", "Forgetting quotes around variables"]
  },
  {
    id: "python",
    title: "Python",
    description: "Learn the versatile Python language, from fundamentals to advanced specialization.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Scripting & Automation Languages", "AI, ML, & Research Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Master the language of the web, from basic interactivity to advanced asynchronous patterns.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Web Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "java",
    title: "Java",
    description: "Learn the robust, object-oriented Java programming language.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Mobile App Development Languages", "Enterprise / Backend / JVM Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "c",
    title: "C",
    description: "Learn the foundational language for systems and performance-critical programming.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Systems Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "c-plus-plus",
    title: "C++",
    description: "Learn the powerful, high-performance C++ language.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Systems Programming Languages", "Game Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "c-sharp",
    title: "C#",
    description: "Learn the modern, object-oriented C# language from Microsoft.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Web Development Languages", "Game Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "go",
    title: "Go (Golang)",
    description: "Learn Go, designed for building simple, reliable, and efficient software.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages"],
    topics: [],
    assignments: [],
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "Add static typing to JavaScript for scalable applications.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Web Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "swift",
    title: "Swift",
    description: "Learn Swift for building apps for Apple platforms.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Mobile App Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "kotlin",
    title: "Kotlin",
    description: "Learn Kotlin, the modern language for Android and more.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Mobile App Development Languages", "Enterprise / Backend / JVM Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "php",
    title: "PHP",
    description: "Learn the server-side language that powers much of the web.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Web Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "ruby",
    title: "Ruby",
    description: "Learn Ruby, focused on simplicity and productivity.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Web Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "rust",
    title: "Rust",
    description: "Learn Rust, a language empowering everyone to build reliable and efficient software.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Systems Programming Languages", "Blockchain / Smart Contract Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "dart",
    title: "Dart",
    description: "Learn Dart for building multi-platform applications.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Mobile App Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "scala",
    title: "Scala",
    description: "Master the most sophisticated language on the JVM, blending OO and Functional programming.",
    category: "Programming Languages",
    subCategories: ["Popular and Widely Used Languages", "Enterprise / Backend / JVM Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "assembly",
    title: "Assembly (ASM)",
    description: "Low-level programming interacting directly with the CPU.",
    category: "Programming Languages",
    subCategories: ["Systems Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "zig",
    title: "Zig",
    description: "A general-purpose programming language and toolchain for maintaining robust software.",
    category: "Programming Languages",
    subCategories: ["Systems Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "nim",
    title: "Nim",
    description: "Efficient, expressive, and elegant programming language.",
    category: "Programming Languages",
    subCategories: ["Systems Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "ada",
    title: "Ada",
    description: "Designed for high-integrity, mission-critical systems.",
    category: "Programming Languages",
    subCategories: ["Systems Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "modula-2",
    title: "Modula-2",
    description: "A systems programming language designed by Niklaus Wirth.",
    category: "Programming Languages",
    subCategories: ["Systems Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "oberon",
    title: "Oberon",
    description: "The successor to Modula-2, focusing on simplicity.",
    category: "Programming Languages",
    subCategories: ["Systems Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "vala",
    title: "Vala",
    description: "Modern language using the GNOME platform libraries.",
    category: "Programming Languages",
    subCategories: ["Systems Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "html",
    title: "HTML",
    description: "The standard markup language for web pages.",
    category: "Programming Languages",
    subCategories: ["Web Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "css",
    title: "CSS",
    description: "The language for styling web content.",
    category: "Programming Languages",
    subCategories: ["Web Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "elixir",
    title: "Elixir",
    description: "Dynamic, functional language for building scalable applications.",
    category: "Programming Languages",
    subCategories: ["Web Development Languages", "Functional Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "erlang",
    title: "Erlang",
    description: "Used to build massively scalable soft real-time systems.",
    category: "Programming Languages",
    subCategories: ["Web Development Languages", "Functional Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "hack",
    title: "Hack",
    description: "Programming language for the HipHop Virtual Machine by Meta.",
    category: "Programming Languages",
    subCategories: ["Web Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "asp-net",
    title: "ASP.NET (C#)",
    description: "Web framework for building modern web apps and services.",
    category: "Programming Languages",
    subCategories: ["Web Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "shell-script",
    title: "Shell Script (sh)",
    description: "Fundamental scripting for Unix-like systems.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "perl",
    title: "Perl",
    description: "Highly capable, feature-rich programming language.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "powershell",
    title: "PowerShell",
    description: "Task automation and configuration management framework.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "lua",
    title: "Lua",
    description: "Lightweight, high-level, multi-paradigm programming language.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages", "Game Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "groovy",
    title: "Groovy",
    description: "Powerful, multi-faceted language for the Java platform.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages", "Enterprise / Backend / JVM Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "rexx",
    title: "Rexx",
    description: "Structured, high-level programming language.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "tcl",
    title: "Tcl",
    description: "Tool Command Language, a powerful dynamic language.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "awk",
    title: "AWK",
    description: "Domain-specific language for text processing.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "zsh",
    title: "Zsh",
    description: "Shell designed for interactive use and scripting.",
    category: "Programming Languages",
    subCategories: ["Scripting & Automation Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "r",
    title: "R",
    description: "Language and environment for statistical computing.",
    category: "Programming Languages",
    subCategories: ["Data Science / Stats / Math-Oriented"],
    topics: [],
    assignments: []
  },
  {
    id: "matlab",
    title: "MATLAB",
    description: "Numerical computing environment and programming language.",
    category: "Programming Languages",
    subCategories: ["Data Science / Stats / Math-Oriented"],
    topics: [],
    assignments: []
  },
  {
    id: "julia",
    title: "Julia",
    description: "High-level, high-performance language for numerical computing.",
    category: "Programming Languages",
    subCategories: ["Data Science / Stats / Math-Oriented", "AI, ML, & Research Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "sas",
    title: "SAS",
    description: "Statistical software suite for data management and analysis.",
    category: "Programming Languages",
    subCategories: ["Data Science / Stats / Math-Oriented"],
    topics: [],
    assignments: []
  },
  {
    id: "octave",
    title: "Octave",
    description: "Scientific programming language, primarily for numerical computations.",
    category: "Programming Languages",
    subCategories: ["Data Science / Stats / Math-Oriented"],
    topics: [],
    assignments: []
  },
  {
    id: "spss-for-statistical-analysis",
    title: "SPSS",
    description: "Software package used for interactive statistical analysis.",
    category: "Programming Languages",
    subCategories: ["Data Science / Stats / Math-Oriented"],
    topics: [],
    assignments: []
  },
  {
    id: "lisp",
    title: "Lisp",
    description: "The second-oldest high-level programming language, based on symbolic computation.",
    category: "Programming Languages",
    subCategories: ["AI, ML, & Research Languages", "Functional Programming Languages", "Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "prolog",
    title: "Prolog",
    description: "Logic programming language associated with AI.",
    category: "Programming Languages",
    subCategories: ["AI, ML, & Research Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "haskell",
    title: "Haskell",
    description: "Standardized, general-purpose, purely functional language.",
    category: "Programming Languages",
    subCategories: ["AI, ML, & Research Languages", "Functional Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "ocaml",
    title: "OCaml",
    description: "General-purpose language with emphasis on expressiveness and safety.",
    category: "Programming Languages",
    subCategories: ["AI, ML, & Research Languages", "Functional Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "scheme",
    title: "Scheme",
    description: "Minimalist dialect of Lisp.",
    category: "Programming Languages",
    subCategories: ["AI, ML, & Research Languages", "Functional Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "gdscript",
    title: "GDScript",
    description: "High-level, dynamically typed language used in Godot Engine.",
    category: "Programming Languages",
    subCategories: ["Game Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "haxe",
    title: "Haxe",
    description: "Open-source high-level multi-platform programming language.",
    category: "Programming Languages",
    subCategories: ["Game Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "objective-c",
    title: "Objective-C",
    description: "Object-oriented language used for OS X and iOS.",
    category: "Programming Languages",
    subCategories: ["Mobile App Development Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "clojure",
    title: "Clojure",
    description: "Modern, dynamic, and functional dialect of the Lisp language on the JVM.",
    category: "Programming Languages",
    subCategories: ["Enterprise / Backend / JVM Languages", "Functional Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "f-sharp",
    title: "F#",
    description: "Strongly typed, multi-paradigm programming language for the .NET framework.",
    category: "Programming Languages",
    subCategories: ["Functional Programming Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "yaml",
    title: "YAML",
    description: "Human-friendly data serialization standard.",
    category: "Programming Languages",
    subCategories: ["DevOps / Configuration / Infra-as-Code"],
    topics: [],
    assignments: []
  },
  {
    id: "starlark",
    title: "Starlark",
    description: "Language used in Bazel build system.",
    category: "Programming Languages",
    subCategories: ["DevOps / Configuration / Infra-as-Code"],
    topics: [],
    assignments: []
  },
  {
    id: "terraform-scripts",
    title: "Terraform Scripts",
    description: "Infrastructure as Code using Terraform.",
    category: "Programming Languages",
    subCategories: ["DevOps / Configuration / Infra-as-Code"],
    topics: [],
    assignments: []
  },
  {
    id: "ansible-playbooks",
    title: "Ansible Playbooks",
    description: "Configuration management using Ansible.",
    category: "Programming Languages",
    subCategories: ["DevOps / Configuration / Infra-as-Code"],
    topics: [],
    assignments: []
  },
  {
    id: "vyper",
    title: "Vyper",
    description: "Pythonic smart contract language for Ethereum.",
    category: "Programming Languages",
    subCategories: ["Blockchain / Smart Contract Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "move",
    title: "Move",
    description: "Safe and programmable language for the Aptos and Sui blockchains.",
    category: "Programming Languages",
    subCategories: ["Blockchain / Smart Contract Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "michelson",
    title: "Michelson",
    description: "Stack-based smart contract language for Tezos.",
    category: "Programming Languages",
    subCategories: ["Blockchain / Smart Contract Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "cadence",
    title: "Cadence",
    description: "Resource-oriented programming language for smart contracts on Flow.",
    category: "Programming Languages",
    subCategories: ["Blockchain / Smart Contract Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "scratch",
    title: "Scratch",
    description: "Block-based visual programming language for education.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "blockly",
    title: "Blockly",
    description: "Library that adds a visual code editor to web and mobile apps.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "logo",
    title: "Logo",
    description: "Educational programming language known for turtle graphics.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "alice",
    title: "Alice",
    description: "Educational 3D programming environment.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "pico-8",
    title: "Pico-8",
    description: "Fantasy console for making, sharing, and playing tiny games.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "brainfuck",
    title: "Brainfuck",
    description: "Minimalist esoteric programming language.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "whitespace",
    title: "Whitespace",
    description: "Esoteric language that only uses whitespace characters.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "lolcode",
    title: "LOLCODE",
    description: "Esoteric language inspired by internet memes.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "befunge",
    title: "Befunge",
    description: "Two-dimensional stack-based esoteric language.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "intercal",
    title: "INTERCAL",
    description: "Parody esoteric programming language.",
    category: "Programming Languages",
    subCategories: ["Educational / Esoteric / Experimental"],
    topics: [],
    assignments: []
  },
  {
    id: "cobol",
    title: "COBOL",
    description: "Legacy language used in business, finance, and admin systems.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "pascal",
    title: "Pascal",
    description: "Influential imperative and procedural programming language.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "delphi",
    title: "Delphi",
    description: "Software development kit using the Object Pascal language.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "visual-basic",
    title: "Visual Basic (VB)",
    description: "Event-driven programming language and environment from Microsoft.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "smalltalk",
    title: "Smalltalk",
    description: "Purely object-oriented programming language.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "algol",
    title: "ALGOL",
    description: "Family of imperative computer programming languages.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "pl-i",
    title: "PL/I",
    description: "Procedural, imperative computer programming language.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "clipper",
    title: "Clipper",
    description: "Multiple-platform compiler for dBASE III databases.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "foxpro",
    title: "FoxPro",
    description: "Object-oriented relational database management system.",
    category: "Programming Languages",
    subCategories: ["Older / Legacy / Historical Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "elm",
    title: "Elm",
    description: "Functional language for building browser-based GUIs.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "crystal",
    title: "Crystal",
    description: "Compiled language with Ruby-like syntax and C-like performance.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "forth",
    title: "Forth",
    description: "Procedural, stack-based programming language.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "rebol",
    title: "Rebol",
    description: "Cross-platform data exchange language and multi-paradigm language.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "io",
    title: "Io",
    description: "Pure object-oriented programming language inspired by Smalltalk.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "ring",
    title: "Ring",
    description: "Practical multi-paradigm programming language.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "red",
    title: "Red",
    description: "Full-stack programming language inspired by REBOL.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "ballerina",
    title: "Ballerina",
    description: "Cloud-native programming language for integration.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "purescript",
    title: "PureScript",
    description: "Strongly-typed, purely-functional language that compiles to JS.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },
  {
    id: "nix",
    title: "Nix",
    description: "Purely functional package manager and configuration language.",
    category: "Programming Languages",
    subCategories: ["Other Noteworthy or Specialized Languages"],
    topics: [],
    assignments: []
  },

  // --- Frameworks & Libraries ---
  {
    id: "ruby-on-rails",
    title: "Ruby on Rails",
    description: "Master Rails, the powerful MVC framework for Ruby.",
    category: "Frameworks & Libraries",
    subCategory: "Backend Web Frameworks",
    topics: [],
    assignments: []
  },
  {
    id: "tensorflow",
    title: "TensorFlow",
    description: "Learn the leading library for machine learning and AI.",
    category: "Frameworks & Libraries",
    subCategory: "Data Science & ML Libraries",
    topics: [],
    assignments: []
  },
  {
    id: "pytorch",
    title: "PyTorch",
    description: "Master the preferred DL library for researchers and industry.",
    category: "Frameworks & Libraries",
    subCategory: "Data Science & ML Libraries",
    topics: [],
    assignments: []
  },
  {
    id: "flutter",
    title: "Flutter",
    description: "Build multi-platform apps with Google's UI toolkit.",
    category: "Frameworks & Libraries",
    subCategory: "Mobile Frameworks",
    topics: [],
    assignments: []
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework",
    description: "Master full-stack React with Next.js.",
    category: "Frameworks & Libraries",
    subCategory: "Frontend Web Frameworks",
    topics: [],
    assignments: [],
  },
  {
    id: "express-js",
    title: "Express.js",
    description: "The minimalist web framework for Node.js.",
    category: "Frameworks & Libraries",
    subCategory: "Backend Web Frameworks",
    topics: [],
    assignments: [],
  },

  // --- Data Structures & Algorithms ---
  {
    id: "dsa-with-java",
    title: "DSA in Java",
    description: "Master core algorithms using Java.",
    category: "Data Structures & Algorithms",
    topics: [],
    assignments: []
  },
  {
    id: "dsa-with-python",
    title: "DSA in Python",
    description: "Leverage Python for core problem-solving.",
    category: "Data Structures & Algorithms",
    topics: [],
    assignments: []
  },
  {
    id: "dsa-with-cpp",
    title: "DSA in C++",
    description: "High-performance problem solving with C++.",
    category: "Data Structures & Algorithms",
    topics: [],
    assignments: []
  },

  // --- Job Roles ---
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Become a professional software builder.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "front-end-developer",
    title: "Frontend Developer",
    description: "Build interfaces for the modern web.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "back-end-developer",
    title: "Backend Developer",
    description: "Build server-side infrastructure.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    description: "Master both ends of the web.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "mobile-app-development",
    title: "Mobile Developer",
    description: "Build iOS and Android applications.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "game-developer",
    title: "Game Developer",
    description: "Create interactive digital experiences.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "desktop-application-developer",
    title: "Desktop Developer",
    description: "Build software for Windows, Mac, and Linux.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "embedded-systems-developer",
    title: "Embedded Developer",
    description: "Program hardware and microcontrollers.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Automate and streamline development life cycles.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "site-reliability-engineer",
    title: "SRE",
    description: "Ensure massive systems stay reliable.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "system-programmer",
    title: "System Programmer",
    description: "Develop low-level core software.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "firmware-developer",
    title: "Firmware Developer",
    description: "Build the brains of hardware devices.",
    category: "Job Roles",
    subCategory: "Core Software Development Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "ai-ml-engineer",
    title: "ML Engineer",
    description: "Design and build AI systems.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Extract insights from complex data.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "ai-researcher",
    title: "AI Researcher",
    description: "Advance the field of AI through theory.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "deep-learning-engineer",
    title: "Deep Learning Engineer",
    description: "Build complex neural networks.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "nlp-engineer",
    title: "NLP Engineer",
    description: "Teach machines to understand language.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "computer-vision-engineer",
    title: "CV Engineer",
    description: "Teach machines to see the world.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "robotics-engineer-ai",
    title: "AI Robotics Engineer",
    description: "Design intelligent autonomous agents.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "ai-ethics-researcher",
    title: "AI Ethics Researcher",
    description: "Promote safe and fair AI development.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    description: "Master instruction crafting for LLMs.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "reinforcement-learning-engineer",
    title: "RL Engineer",
    description: "Train agents through trial and error.",
    category: "Job Roles",
    subCategory: "Artificial Intelligence & Machine Learning",
    topics: [],
    assignments: []
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Translate data into business decisions.",
    category: "Job Roles",
    subCategory: "Data & Database Roles",
    topics: [],
    assignments: []
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    description: "Build data pipelines and infrastructure.",
    category: "Job Roles",
    subCategory: "Data & Database Roles",
    topics: [],
    assignments: []
  },
  {
    id: "big-data-developer",
    title: "Big Data Developer",
    description: "Process and manage petabytes of info.",
    category: "Job Roles",
    subCategory: "Data & Database Roles",
    topics: [],
    assignments: []
  },
  {
    id: "bi-analyst",
    title: "BI Analyst",
    description: "Bridge data and business strategy.",
    category: "Job Roles",
    subCategory: "Data & Database Roles",
    topics: [],
    assignments: []
  },
  {
    id: "database-administrator",
    title: "DBA",
    description: "Guard and optimize the databases.",
    category: "Job Roles",
    subCategory: "Data & Database Roles",
    topics: [],
    assignments: []
  },
  {
    id: "etl-developer",
    title: "ETL Developer",
    description: "Master data integration processes.",
    category: "Job Roles",
    subCategory: "Data & Database Roles",
    topics: [],
    assignments: []
  },
  {
    id: "sql-developer",
    title: "SQL Developer",
    description: "Optimize queries and logic.",
    category: "Job Roles",
    subCategory: "Data & Database Roles",
    topics: [],
    assignments: []
  },
  {
    id: "web-development-foundations",
    title: "Web Developer",
    description: "Build the future of the internet.",
    category: "Job Roles",
    subCategory: "Web Technology Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "frontend-framework-developer",
    title: "Framework Developer",
    description: "Specialized in React, Angular, or Vue.",
    category: "Job Roles",
    subCategory: "Web Technology Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "ui-ux-web-designer",
    title: "Web Designer",
    description: "Focus on UI/UX for the web.",
    category: "Job Roles",
    subCategory: "Web Technology Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "webflow-no-code-developer",
    title: "No-code Developer",
    description: "Build web apps without manual code.",
    category: "Job Roles",
    subCategory: "Web Technology Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "wordpress-developer",
    title: "WordPress Developer",
    description: "Customizing the world's leading CMS.",
    category: "Job Roles",
    subCategory: "Web Technology Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "stack-developer",
    title: "MERN Stack Developer",
    description: "Full-stack JS development expertise.",
    category: "Job Roles",
    subCategory: "Web Technology Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    description: "Manage AWS, Azure, or GCP infrastructure.",
    category: "Job Roles",
    subCategory: "Cloud & Infrastructure Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    description: "Design enterprise-scale cloud systems.",
    category: "Job Roles",
    subCategory: "Cloud & Infrastructure Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "cloud-security-engineer",
    title: "Cloud Security Engineer",
    description: "Secure the cloud infrastructure.",
    category: "Job Roles",
    subCategory: "Cloud & Infrastructure Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "cloud-devops-engineer",
    title: "Cloud DevOps",
    description: "Modern deployment automation.",
    category: "Job Roles",
    subCategory: "Cloud & Infrastructure Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "platform-engineer",
    title: "Platform Engineer",
    description: "Build developer-facing infrastructure.",
    category: "Job Roles",
    subCategory: "Cloud & Infrastructure Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "iac-specialist",
    title: "IaC Specialist",
    description: "Infrastructure as Code mastery.",
    category: "Job Roles",
    subCategory: "Cloud & Infrastructure Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "cybersecurity-analyst",
    title: "Security Analyst",
    description: "Defend against digital threats.",
    category: "Job Roles",
    subCategory: "Cybersecurity Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "ethical-hacker",
    title: "Ethical Hacker",
    description: "Hack for good to find flaws.",
    category: "Job Roles",
    subCategory: "Cybersecurity Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    description: "Build impenetrable systems.",
    category: "Job Roles",
    subCategory: "Cybersecurity Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "soc-analyst",
    title: "SOC Analyst",
    description: "First line of defense in monitoring.",
    category: "Job Roles",
    subCategory: "Cybersecurity Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "digital-forensics-expert",
    title: "Forensics Expert",
    description: "Investigate digital crime evidence.",
    category: "Job Roles",
    subCategory: "Cybersecurity Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "malware-analyst",
    title: "Malware Analyst",
    description: "Reverse engineer malicious code.",
    category: "Job Roles",
    subCategory: "Cybersecurity Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "security-researcher",
    title: "Security Researcher",
    description: "Discover new zero-day flaws.",
    category: "Job Roles",
    subCategory: "Cybersecurity Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "network-security-engineer",
    title: "Network Security",
    description: "Protect the data lines.",
    category: "Job Roles",
    subCategory: "Cybersecurity Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "blockchain-developer",
    title: "Blockchain Developer",
    description: "Master decentralized protocols.",
    category: "Job Roles",
    subCategory: "Blockchain & Web3 Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "smart-contract-developer",
    title: "Smart Contract Developer",
    description: "Solidity and Vyper expertise.",
    category: "Job Roles",
    subCategory: "Blockchain & Web3 Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "crypto-research-analyst",
    title: "Crypto Analyst",
    description: "Deep dive into web3 tokens.",
    category: "Job Roles",
    subCategory: "Blockchain & Web3 Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "web3-developer",
    title: "Web3 Developer",
    description: "Bridge web2 and decentralized systems.",
    category: "Job Roles",
    subCategory: "Blockchain & Web3 Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "nft-app-developer",
    title: "NFT Developer",
    description: "Build non-fungible platforms.",
    category: "Job Roles",
    subCategory: "Blockchain & Web3 Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "defi-app-developer",
    title: "DeFi Developer",
    description: "Master decentralized finance.",
    category: "Job Roles",
    subCategory: "Blockchain & Web3 Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "blockchain-security-auditor",
    title: "Web3 Auditor",
    description: "Review contracts for safety.",
    category: "Job Roles",
    subCategory: "Blockchain & Web3 Jobs",
    topics: [],
    assignments: []
  },
  {
    id: "iot-developer",
    title: "IoT Developer",
    description: "Connect the physical world.",
    category: "Job Roles",
    subCategory: "Robotics, IoT & Hardware Integration",
    topics: [],
    assignments: []
  },
  {
    id: "iot-systems-engineer",
    title: "IoT Systems Engineer",
    description: "Manage complex IoT networks.",
    category: "Job Roles",
    subCategory: "Robotics, IoT & Hardware Integration",
    topics: [],
    assignments: []
  },
  {
    id: "embedded-systems-engineer",
    title: "Embedded Systems Engineer",
    description: "Design low-level hardware code.",
    category: "Job Roles",
    subCategory: "Robotics, IoT & Hardware Integration",
    topics: [],
    assignments: []
  },
  {
    id: "robotics-software-engineer",
    title: "Robotics Programmer",
    description: "Teach robots how to move.",
    category: "Job Roles",
    subCategory: "Robotics, IoT & Hardware Integration",
    topics: [],
    assignments: []
  },
  {
    id: "hardware-design-engineer",
    title: "Hardware Designer",
    description: "Design the circuits of the future.",
    category: "Job Roles",
    subCategory: "Robotics, IoT & Hardware Integration",
    topics: [],
    assignments: []
  },
  {
    id: "automation-engineer-rpa",
    title: "RPA Engineer",
    description: "Automate business with bots.",
    category: "Job Roles",
    subCategory: "Robotics, IoT & Hardware Integration",
    topics: [],
    assignments: []
  },
  {
    id: "cs-researcher",
    title: "CS Researcher",
    description: "Advance foundational computing theory.",
    category: "Job Roles",
    subCategory: "Research & Academia",
    topics: [],
    assignments: []
  },
  {
    id: "ai-research-intern",
    title: "AI Research Intern",
    description: "Gain lab-based AI experience.",
    category: "Job Roles",
    subCategory: "Research & Academia",
    topics: [],
    assignments: []
  },
  {
    id: "phd-fellow",
    title: "PhD Fellow",
    description: "Conduct deep doctoral research.",
    category: "Job Roles",
    subCategory: "Research & Academia",
    topics: [],
    assignments: []
  },
  {
    id: "teaching-assistant",
    title: "Teaching Assistant",
    description: "Support the next gen of coders.",
    category: "Job Roles",
    subCategory: "Research & Academia",
    topics: [],
    assignments: []
  },
  {
    id: "assistant-professor-lecturer",
    title: "Professor / Lecturer",
    description: "Teach and lead in academia.",
    category: "Job Roles",
    subCategory: "Research & Academia",
    topics: [],
    assignments: []
  },
  {
    id: "software-tester",
    title: "Software Tester",
    description: "Verify quality manually.",
    category: "Job Roles",
    subCategory: "Testing & Quality Assurance",
    topics: [],
    assignments: []
  },
  {
    id: "qa-engineer",
    title: "QA Engineer",
    description: "Manage quality automated logic.",
    category: "Job Roles",
    subCategory: "Testing & Quality Assurance",
    topics: [],
    assignments: []
  },
  {
    id: "sdet",
    title: "SDET",
    description: "Software Dev in Test mastery.",
    category: "Job Roles",
    subCategory: "Testing & Quality Assurance",
    topics: [],
    assignments: []
  },
  {
    id: "performance-tester",
    title: "Performance Tester",
    description: "Stress test the system limits.",
    category: "Job Roles",
    subCategory: "Testing & Quality Assurance",
    topics: [],
    assignments: []
  },
  {
    id: "security-penetration-tester",
    title: "Security Tester",
    description: "Identify software security flaws.",
    category: "Job Roles",
    subCategory: "Testing & Quality Assurance",
    topics: [],
    assignments: []
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "Craft modern user interfaces.",
    category: "Job Roles",
    subCategory: "Design & Product Roles",
    topics: [],
    assignments: []
  },
  {
    id: "product-designer",
    title: "Product Designer",
    description: "Holistic product experience design.",
    category: "Job Roles",
    subCategory: "Design & Product Roles",
    topics: [],
    assignments: []
  },
  {
    id: "ux-researcher",
    title: "UX Researcher",
    description: "Study users to inform design.",
    category: "Job Roles",
    subCategory: "Design & Product Roles",
    topics: [],
    assignments: []
  },
  {
    id: "design-systems-engineer",
    title: "Design Systems",
    description: "Build reusable design tokens.",
    category: "Job Roles",
    subCategory: "Design & Product Roles",
    topics: [],
    assignments: []
  },
  {
    id: "interaction-designer",
    title: "Interaction Designer",
    description: "Master user interaction logic.",
    category: "Job Roles",
    subCategory: "Design & Product Roles",
    topics: [],
    assignments: []
  },
  {
    id: "technical-project-manager",
    title: "Technical PM",
    description: "Lead technical project lifecycles.",
    category: "Job Roles",
    subCategory: "Management & Business Roles",
    topics: [],
    assignments: []
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Define the product vision and roadmaps.",
    category: "Job Roles",
    subCategory: "Management & Business Roles",
    topics: [],
    assignments: []
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    description: "Bridge business and technical teams.",
    category: "Job Roles",
    subCategory: "Management & Business Roles",
    topics: [],
    assignments: []
  },
  {
    id: "it-consultant",
    title: "IT Consultant",
    description: "Provide expert advisory services.",
    category: "Job Roles",
    subCategory: "Management & Business Roles",
    topics: [],
    assignments: []
  },
  {
    id: "agile-coach-scrum-master",
    title: "Agile Coach",
    description: "Lead teams in agile methodologies.",
    category: "Job Roles",
    subCategory: "Management & Business Roles",
    topics: [],
    assignments: []
  },
  {
    id: "customer-success-engineer",
    title: "Customer Success",
    description: "Help clients succeed with tech.",
    category: "Job Roles",
    subCategory: "Management & Business Roles",
    topics: [],
    assignments: []
  },
  {
    id: "it-support-engineer",
    title: "IT Support",
    description: "Solve technical issues for users.",
    category: "Job Roles",
    subCategory: "Technical Support & Infrastructure",
    topics: [],
    assignments: []
  },
  {
    id: "network-administrator",
    title: "Network Admin",
    description: "Manage organization-wide networks.",
    category: "Job Roles",
    subCategory: "Technical Support & Infrastructure",
    topics: [],
    assignments: []
  },
  {
    id: "system-administrator",
    title: "SysAdmin",
    description: "Ensure systems remain stable.",
    category: "Job Roles",
    subCategory: "Technical Support & Infrastructure",
    topics: [],
    assignments: []
  },
  {
    id: "technical-support-specialist",
    title: "Technical Support",
    description: "Provide high-level assistance.",
    category: "Job Roles",
    subCategory: "Technical Support & Infrastructure",
    topics: [],
    assignments: []
  },
  {
    id: "helpdesk-analyst",
    title: "Helpdesk Analyst",
    description: "First contact for tech support.",
    category: "Job Roles",
    subCategory: "Technical Support & Infrastructure",
    topics: [],
    assignments: []
  },
  {
    id: "bioinformatics-developer",
    title: "Bioinformatics",
    description: "Code for biological research.",
    category: "Job Roles",
    subCategory: "Interdisciplinary & Specialized Roles",
    topics: [],
    assignments: []
  },
  {
    id: "fintech-developer",
    title: "Fintech Developer",
    description: "Build financial technologies.",
    category: "Job Roles",
    subCategory: "Interdisciplinary & Specialized Roles",
    topics: [],
    assignments: []
  },
  {
    id: "quantitative-analyst",
    title: "Quantitative Analyst",
    description: "Apply math to financial risk.",
    category: "Job Roles",
    subCategory: "Interdisciplinary & Specialized Roles",
    topics: [],
    assignments: []
  },
  {
    id: "xr-developer",
    title: "XR Developer",
    description: "Build AR/VR experiences.",
    category: "Job Roles",
    subCategory: "Interdisciplinary & Specialized Roles",
    topics: [],
    assignments: []
  },
  {
    id: "game-physics-programmer",
    title: "Physics Programmer",
    description: "Master game physics logic.",
    category: "Job Roles",
    subCategory: "Interdisciplinary & Specialized Roles",
    topics: [],
    assignments: []
  },
  {
    id: "graphics-programmer",
    title: "Graphics Programmer",
    description: "Write code for visual rendering.",
    category: "Job Roles",
    subCategory: "Interdisciplinary & Specialized Roles",
    topics: [],
    assignments: []
  },
  {
    id: "simulation-engineer",
    title: "Simulation Engineer",
    description: "Model complex physical events.",
    category: "Job Roles",
    subCategory: "Interdisciplinary & Specialized Roles",
    topics: [],
    assignments: []
  },
  {
    id: "open-source-contributor",
    title: "OSS Contributor",
    description: "Code for global open projects.",
    category: "Job Roles",
    subCategory: "Other Opportunities",
    topics: [],
    assignments: []
  },
  {
    id: "tech-educator",
    title: "Tech Educator",
    description: "Share knowledge through content.",
    category: "Job Roles",
    subCategory: "Other Opportunities",
    topics: [],
    assignments: []
  },
  {
    id: "freelancer-consultant",
    title: "Freelancer",
    description: "Work independently for clients.",
    category: "Job Roles",
    subCategory: "Other Opportunities",
    topics: [],
    assignments: []
  },
  {
    id: "startup-founder",
    title: "Startup Founder",
    description: "Launch your own tech venture.",
    category: "Job Roles",
    subCategory: "Other Opportunities",
    topics: [],
    assignments: []
  },
  {
    id: "tech-internship",
    title: "Big Tech Intern",
    description: "Gain experience at top giants.",
    category: "Job Roles",
    subCategory: "Other Opportunities",
    topics: [],
    assignments: []
  },
  {
    id: "isro-drdo-scientist",
    title: "Govt Scientist",
    description: "R&D for space and defense.",
    category: "Job Roles",
    subCategory: "Government & Public Sector",
    topics: [],
    assignments: []
  },
  {
    id: "upsc-ssc-specialization",
    title: "UPSC / SSC Specialist",
    description: "Enter govt through CS logic.",
    category: "Job Roles",
    subCategory: "Government & Public Sector",
    topics: [],
    assignments: []
  },
  {
    id: "nic-scientist",
    title: "NIC Scientist",
    description: "Guard govt IT infrastructure.",
    category: "Job Roles",
    subCategory: "Government & Public Sector",
    topics: [],
    assignments: []
  },
  {
    id: "psu-gate-hiring",
    title: "PSU hiring through GATE",
    description: "Join BARC, BEL, etc via GATE.",
    category: "Job Roles",
    subCategory: "Government & Public Sector",
    topics: [],
    assignments: []
  },
];
