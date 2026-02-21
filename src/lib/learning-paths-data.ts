
export const learningPaths = [
  {
    id: "python",
    title: "Python",
    description: "Learn the versatile Python language, from fundamentals to advanced specialization.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Master the language of the web, from basic interactivity to advanced asynchronous patterns and performance optimization.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
    topics: [],
    assignments: []
  },
  {
    id: "c-plus-plus",
    title: "C++",
    description: "Learn the powerful, high-performance C++ language, used in game development, systems programming, and financial applications.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "web-development-foundations",
    title: "Web Development Foundations",
    description: "Learn the core technologies for building modern websites and web applications.",
    category: "Job Roles",
    subCategory: "Web & UI",
    topics: [
      {
        title: "HTML5: Structuring the Web",
        points: [
          { text: "Learn the fundamental boilerplate required for every HTML page, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags.", resources: [{ name: "HTML basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" }] },
          { text: "Use semantic tags like `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>` to give your web content meaning and improve SEO.", resources: [{ name: "Semantic HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning" }] },
          { text: "Build interactive forms to collect user data using various input types, labels for accessibility, and buttons for submission.", resources: [{ name: "HTML Forms", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" }] },
        ],
      },
      {
        title: "CSS3: Styling and Layouts",
        points: [
          { text: "Target HTML elements with CSS using a variety of selectors, including class, ID, attribute, and pseudo-class selectors.", resources: [{ name: "CSS Selectors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors" }] },
          { text: "Grasp the core concept of the CSS box model, understanding how margin, border, padding, and content work together to size and space elements.", resources: [{ name: "The Box Model", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" }] },
          { text: "Learn to control the appearance of text on your website, including font families, sizes, colors, and spacing.", resources: [{ name: "Styling text", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text" }] },
        ],
      },
      {
        title: "Responsive Design with Flexbox and Grid",
        points: [
          { text: "Learn the principles of responsive design and use media queries to create websites that look great on desktops, tablets, and mobile devices.", resources: [{ name: "Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" }] },
          { text: "Master Flexbox for creating efficient, one-dimensional layouts. Align and distribute items in a row or a column with ease.", resources: [{ name: "Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" }] },
          { text: "Use CSS Grid to build complex, two-dimensional layouts, allowing you to control the position of items in both rows and columns simultaneously.", resources: [{ name: "CSS Grid", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids" }] },
        ],
      },
      {
        title: "Introduction to React",
        points: [
          { text: "Understand the core philosophy of React: building user interfaces by breaking them down into small, reusable pieces called components.", resources: [{ name: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" }] },
          { text: "Get your development environment ready for React development. Learn about modern build tools like Vite and the classic Create React App.", resources: [{ name: "Start a New React Project", url: "https://react.dev/learn/start-a-new-react-project" }] },
          { text: "Learn JSX, a syntax extension for JavaScript that allows you to write HTML-like markup inside your JavaScript code.", resources: [{ name: "Writing Markup with JSX", url: "https://react.dev/learn/writing-markup-with-jsx" }] },
        ],
      },
      {
        title: "Components, Props, and State",
        points: [
          { text: "Learn to create and compose your own React components, which are the fundamental building blocks of a React application.", resources: [{ name: "Your First Component", url: "https://react.dev/learn/your-first-component" }] },
          { text: "Understand how to pass data from a parent component to a child component using 'props', making your components dynamic and reusable.", resources: [{ name: "Passing Props to a Component", url: "https://react.dev/learn/passing-props-to-a-component" }] },
          { text: "Manage data that changes over time within a component using the `useState` hook. Learn how state triggers re-renders to update the UI.", resources: [{ name: "State: A Component's Memory", url: "https://react.dev/learn/state-a-components-memory" }] },
        ],
      },
      {
        title: "React Hooks",
        points: [
          { text: "Use the `useEffect` hook to perform side effects in your components, such as fetching data from an API or setting up subscriptions.", resources: [{ name: "useEffect", url: "https://react.dev/reference/react/useEffect" }] },
          { text: "Manage application-wide state that needs to be shared between many components without prop drilling by using the `useContext` hook.", resources: [{ name: "useContext", url: "https://react.dev/reference/react/useContext" }] },
          { text: "Explore other essential hooks like `useRef` for accessing DOM elements directly and `useReducer` for managing complex state logic.", resources: [{ name: "useRef", url: "https://react.dev/reference/react/useRef" }, { name: "useReducer", url: "https://react.dev/reference/react/useReducer" }] },
        ],
      },
      {
        title: "Building a Simple Web App",
        points: [
          { text: "Before writing code, learn to plan your application by breaking down the UI into a component hierarchy.", resources: [] },
          { text: "Combine your individual components to build out the full user interface of your application, from simple buttons to complex pages.", resources: [] },
          { text: "Learn how to make HTTP requests from your React app to a public API to fetch and display dynamic data.", resources: [{ name: "Fetching data in React", url: "https://www.robinwieruch.de/react-fetching-data/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Personal Portfolio Page", description: "Build a single-page portfolio using HTML and CSS. Use Flexbox or Grid to create a responsive layout for your projects and contact information." },
        { title: "Interactive To-Do List", description: "Create a to-do list application using React. Users should be able to add tasks, mark them as complete, and delete them. Manage the list of tasks using the `useState` hook." },
        { title: "Simple Weather App", description: "Build a React component that fetches and displays the current weather for a city using a free weather API. Use the `useEffect` hook to handle the data fetching." }
    ]
  },
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    description: "Become a full-stack developer by mastering both front-end and back-end technologies.",
    category: "Job Roles",
    subCategory: "Core Software Development",
    topics: [],
    assignments: []
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Learn to collect, clean, and interpret data sets to answer a question or solve a problem.",
    category: "Job Roles",
    subCategory: "Data & AI",
    topics: [],
    assignments: []
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Learn to build and deploy machine learning models, and use data to make predictions and drive business decisions.",
    category: "Job Roles",
    subCategory: "Data & AI",
    topics: [],
    assignments: []
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Developer",
    description: "Build applications for iOS and Android using modern cross-platform frameworks.",
    category: "Job Roles",
    subCategory: "Mobile App Development",
    topics: [],
    assignments: []
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Learn the practices and tools to automate and streamline the software development lifecycle.",
    category: "Job Roles",
    subCategory: "DevOps & Cloud",
    topics: [],
    assignments: []
  },
  {
    id: "front-end-developer",
    title: "Front-End Developer",
    description: "Learn to build beautiful and interactive user interfaces for the web.",
    category: "Job Roles",
    subCategory: "Web & UI",
    topics: [],
    assignments: []
  },
  {
    id: "back-end-developer",
    title: "Back-End Developer",
    description: "Learn to build the server-side logic and infrastructure that powers web applications.",
    category: "Job Roles",
    subCategory: "Core Software Development",
    topics: [],
    assignments: []
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    description: "Learn to manage and maintain databases to ensure data is secure, accessible, and performs efficiently.",
    category: "Job Roles",
    subCategory: "Data & AI",
    topics: [],
    assignments: []
  },
  {
    id: "git-version-control",
    title: "Git Version Control",
    description: "Master Git for tracking changes in your code and collaborating with others.",
    category: "Programming Languages",
    subCategory: "Scripting & Automation",
    topics: [],
    assignments: []
  },
  {
    id: "sql",
    title: "SQL",
    description: "Learn the standard language for managing and querying relational databases.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [],
    assignments: []
  },
  {
    id: "c",
    title: "C",
    description: "Learn the foundational C programming language, known for its performance and low-level memory access.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "r",
    title: "R",
    description: "Learn R, the premier language for statistical computing, data analysis, and graphical representation.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [],
    assignments: []
  },
  {
    id: "java",
    title: "Java",
    description: "Learn the robust, object-oriented Java programming language, a mainstay in enterprise-level applications, Android development, and large-scale systems.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "c-sharp",
    title: "C#",
    description: "Learn the modern, object-oriented C# language from Microsoft.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "swift",
    title: "Swift",
    description: "Learn Swift, the modern, powerful, and intuitive language for building apps for Apple platforms (iOS, macOS, watchOS, and tvOS).",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "kotlin",
    title: "Kotlin",
    description: "Learn Kotlin, the modern, official language for Android development and a powerful alternative for server-side programming.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "php",
    title: "PHP",
    description: "Learn the server-side language that powers much of the web, from simple scripts to the Laravel framework.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
    topics: [],
    assignments: []
  },
  {
    id: "ruby-on-rails",
    title: "Ruby on Rails",
    description: "Learn Ruby, the dynamic, open-source programming language with a focus on simplicity and productivity, and its most popular framework, Rails.",
    category: "Frameworks & Libraries",
    subCategory: "Backend Web Frameworks",
    topics: [],
    assignments: []
  },
  {
    id: "rust",
    title: "Rust",
    description: "Learn Rust, a language empowering everyone to build reliable and efficient software.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "dart",
    title: "Dart",
    description: "Learn Dart, the language for building mobile, desktop, and web applications with Flutter.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "html",
    title: "HTML: The Language of the Web",
    description: "Master the fundamental language for creating and structuring web pages.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
    topics: [],
    assignments: []
  },
  {
    id: "css-styling-the-web",
    title: "CSS: Styling the Web",
    description: "Learn the language for styling and laying out web pages, from basic selectors to advanced layouts and animations.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
    topics: [],
    assignments: []
  },
  {
    id: "bash-shell-scripting",
    title: "Bash/Shell Scripting",
    description: "Learn to automate tasks, manage systems, and master the command line with Bash.",
    category: "Programming Languages",
    subCategory: "Scripting & Automation",
    topics: [],
    assignments: []
  },
  {
    id: "perl",
    title: "Perl",
    description: "Learn Perl, the versatile, high-level 'Swiss Army chainsaw' of scripting languages, renowned for its powerful text processing capabilities.",
    category: "Programming Languages",
    subCategory: "Scripting & Automation",
    topics: [],
    assignments: []
  },
  {
    id: "sas-programming-for-data-analysis",
    title: "SAS Programming for Data Analysis",
    description: "Learn the fundamentals of SAS, the powerful software suite for advanced analytics, business intelligence, data management, and predictive analytics.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [],
    assignments: []
  },
  {
    id: "spss-for-statistical-analysis",
    title: "SPSS for Statistical Analysis",
    description: "Learn to use SPSS, the powerful software package for statistical analysis, through its user-friendly interface and syntax-based commands.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [],
    assignments: []
  },
  {
    id: "prolog",
    title: "Prolog",
    description: "Learn the logic programming language, renowned for its role in artificial intelligence and computational linguistics.",
    category: "Programming Languages",
    subCategory: "Functional Programming",
    topics: [],
    assignments: []
  },
  {
    id: "tensorflow",
    title: "TensorFlow",
    description: "Learn the open-source library for machine learning and artificial intelligence.",
    category: "Frameworks & Libraries",
    subCategory: "Data Science & ML Libraries",
    topics: [],
    assignments: []
  },
  {
    id: "pytorch",
    title: "PyTorch",
    description: "Learn the open-source machine learning library based on the Torch library.",
    category: "Frameworks & Libraries",
    subCategory: "Data Science & ML Libraries",
    topics: [],
    assignments: []
  },
  {
    id: "flutter",
    title: "Flutter",
    description: "Learn Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    category: "Frameworks & Libraries",
    subCategory: "Mobile Frameworks",
    topics: [],
    assignments: []
  },
  {
    id: "dsa-with-java",
    title: "Data Structures & Algorithms in Java",
    description: "Master fundamental data structures and algorithms using Java to prepare for technical interviews and build efficient software.",
    category: "Data Structures & Algorithms",
    topics: [],
    assignments: []
  },
  {
    id: "dsa-with-python",
    title: "Data Structures & Algorithms in Python",
    description: "Leverage Python's simplicity to master core data structures and algorithms, a crucial skill for any software engineer.",
    category: "Data Structures & Algorithms",
    topics: [],
    assignments: []
  },
  {
    id: "dsa-with-cpp",
    title: "Data Structures & Algorithms in C++",
    description: "Build a strong foundation in high-performance programming by mastering DSA with C++ and the Standard Template Library (STL).",
    category: "Data Structures & Algorithms",
    topics: [],
    assignments: []
  },
  {
    id: "service-based-placement-prep",
    title: "Service-Based Companies Placement Prep",
    description: "A focused guide to cracking interviews at top service-based IT companies.",
    category: "On-Campus Service-Based",
    topics: []
  },
  {
    id: "product-based-placement-prep",
    title: "Product-Based Companies Placement Prep",
    description: "A comprehensive roadmap to prepare for technical roles at leading product-based companies.",
    category: "On-Campus Product-Based",
    topics: []
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "A comprehensive path to becoming a proficient software engineer, covering fundamentals, frontend, backend, databases, and DevOps.",
    category: "Job Roles",
    subCategory: "Core Software Development",
    topics: [],
    assignments: []
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    description: "Learn to design, build, and deploy machine learning models to solve real-world problems.",
    category: "Job Roles",
    subCategory: "Data & AI",
    topics: [],
    assignments: []
  },
    {
    id: "ai-researcher",
    title: "AI Researcher",
    description: "Dive deep into the theory and mathematics of AI to create novel algorithms and advance the field.",
    category: "Job Roles",
    subCategory: "Research & Academia",
    topics: [],
    assignments: []
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework",
    description: "Master the features of Next.js to build fast, scalable, and SEO-friendly React applications.",
    category: "Frameworks & Libraries",
    subCategory: "Frontend Web Frameworks",
    topics: [],
    assignments: [],
  },
  {
    id: "express-js",
    title: "Express.js",
    description: "Learn the fast, unopinionated, minimalist web framework for Node.js.",
    category: "Frameworks & Libraries",
    subCategory: "Backend Web Frameworks",
    topics: [],
    assignments: [],
  },
  {
    id: "go",
    title: "Go (Golang)",
    description: "Learn Go, the open-source programming language designed for building simple, reliable, and efficient software.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "ruby",
    title: "Ruby",
    description: "Learn Ruby, the dynamic, open-source programming language with a focus on simplicity and productivity.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [],
    assignments: []
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "Add static typing to JavaScript to build scalable and robust applications with fewer bugs.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
    topics: [],
    assignments: []
  },
];
