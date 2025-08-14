
export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
}

export const glossaryData: GlossaryTerm[] = [
  {
    id: "api",
    term: "API (Application Programming Interface)",
    definition: "A set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information."
  },
  {
    id: "async-await",
    term: "Async/Await",
    definition: "A modern JavaScript feature that allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and manage operations like API calls."
  },
  {
    id: "branch",
    term: "Branch (Git)",
    definition: "A parallel version of a repository in Git. It allows you to work on different features or fixes in isolation without affecting the main codebase (often the 'main' or 'master' branch)."
  },
  {
    id: "component",
    term: "Component (React)",
    definition: "A reusable, self-contained piece of UI (User Interface) in React. Components can be 'class components' or 'functional components' and are the building blocks of a React application."
  },
  {
    id: "commit",
    term: "Commit (Git)",
    definition: "A snapshot of your staged changes in Git at a specific point in time. Each commit has a unique ID and a message describing the changes."
  },
  {
    id: "css",
    term: "CSS (Cascading Style Sheets)",
    definition: "The language used to describe the presentation and styling of a document written in a markup language like HTML. It controls colors, fonts, layout, and more."
  },
  {
    id: "dom",
    term: "DOM (Document Object Model)",
    definition: "A programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. JavaScript is often used to manipulate the DOM."
  },
  {
    id: "flexbox",
    term: "Flexbox",
    definition: "A CSS layout model that provides an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic."
  },
  {
    id: "git",
    term: "Git",
    definition: "A distributed version control system used for tracking changes in source code during software development. It allows multiple developers to collaborate on projects."
  },
  {
    id: "github",
    term: "GitHub",
    definition: "A web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features."
  },
  {
    id: "html",
    term: "HTML (HyperText Markup Language)",
    definition: "The standard markup language for documents designed to be displayed in a web browser. It forms the basic structure of a web page."
  },
  {
    id: "hook",
    term: "Hook (React)",
    definition: "A special function that lets you 'hook into' React features. For example, `useState` is a Hook that lets you add React state to functional components."
  },
  {
    id: "javascript",
    term: "JavaScript",
    definition: "A high-level, interpreted programming language that conforms to the ECMAScript specification. It is one of the core technologies of the World Wide Web, alongside HTML and CSS, and enables interactive web pages."
  },
  {
    id: "json",
    term: "JSON (JavaScript Object Notation)",
    definition: "A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used for transmitting data between a server and a web application."
  },
  {
    id: "jsx",
    term: "JSX (JavaScript XML)",
    definition: "A syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It is commonly used with React to describe what the UI should look like."
  },
   {
    id: "nextjs",
    term: "Next.js",
    definition: "A popular open-source React framework that enables functionalities such as server-side rendering and generating static websites for React based web applications."
  },
  {
    id: "node",
    term: "Node.js",
    definition: "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
  },
  {
    id: "npm",
    term: "npm (Node Package Manager)",
    definition: "The default package manager for the JavaScript runtime environment Node.js. It consists of a command-line client, also called npm, and an online database of public and paid-for private packages, called the npm registry."
  },
  {
    id: "props",
    term: "Props (React)",
    definition: "Short for 'properties', props are read-only arguments passed into React components. They are used to pass data from a parent component to a child component."
  },
  {
    id: "pull-request",
    term: "Pull Request (Git)",
    definition: "A mechanism for a developer to notify team members that they have completed a feature. It lets everyone involved review the code and discuss the changes before they become part of the main codebase."
  },
  {
    id: "react",
    term: "React",
    definition: "A free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
  },
  {
    id: "repository",
    term: "Repository (Git)",
    definition: "A central location in which data is stored and managed. In Git, it's a directory where your project's files and the entire history of changes are stored."
  },
  {
    id: "rest-api",
    term: "REST API",
    definition: "An architectural style for designing networked applications. A RESTful API is an API that adheres to the constraints of REST architecture, allowing for interoperability between computer systems on the Internet."
  },
  {
    id: "state",
    term: "State (React)",
    definition: "A built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders."
  },
  {
    id: "tailwind-css",
    term: "Tailwind CSS",
    definition: "A utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs."
  },
  {
    id: "typescript",
    term: "TypeScript",
    definition: "A free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript."
  },
  {
    id: "version-control",
    term: "Version Control",
    definition: "A system that records changes to a file or set of files over time so that you can recall specific versions later. Git is the most popular version control system."
  }
];
