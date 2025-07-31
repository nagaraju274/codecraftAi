
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

const learningPaths = [
  {
    title: "Beginner's Guide to Python",
    description: "These tutorials will provide you with a solid foundation in Python and prepare you for your career goals.",
    topics: [
      {
        title: "Introduction",
        points: [
            { text: "Explore the origins of Python, its evolution since the late 1980s, and understand its design philosophy emphasizing code readability and simplicity. Discover key features like dynamic typing, automatic memory management, and its extensive standard library.", resources: [{ name: "Python History", url: "https://en.wikipedia.org/wiki/History_of_Python" }] },
            { text: "Delve into the reasons for Python's widespread adoption, including its versatility in web development, data science, AI, and automation. Learn about its large and supportive community.", resources: [{ name: "Why Python?", url: "https://www.python.org/doc/essays/blurb/" }] },
            { text: "Get everything you need to start coding in Python on your computer. This includes installing the Python interpreter and setting up a code editor like VS Code with helpful extensions.", resources: [{ name: "Download Python", url: "https://www.python.org/downloads/" }, { name: "VS Code Setup", url: "https://code.visualstudio.com/docs/python/python-tutorial" }] },
        ],
      },
      {
        title: "Python Fundamentals",
        points: [
            { text: "Understand how to store and manage different kinds of information. You'll learn about fundamental data types such as integers for whole numbers, floats for decimal numbers, strings for text, and booleans for true/false values.", resources: [{ name: "Data Types", url: "https://www.w3schools.com/python/python_datatypes.asp" }] },
            { text: "Learn to make your programs interactive by getting input from the user and displaying information back to them in the console.", resources: [{ name: "Input and Output", url: "https://www.geeksforgeeks.org/taking-input-in-python/" }] },
            { text: "Master the basic building blocks of Python expressions. This includes arithmetic operators (+, -, *, /), string concatenation, and comparison operators (==, !=, <, >).", resources: [{ name: "Operators", url: "https://www.w3schools.com/python/python_operators.asp" }] },
        ],
      },
      {
        title: "Python Flow Control",
        points: [
            { text: "Learn how to make decisions in your code. Use 'if', 'elif' (else if), and 'else' statements to execute different blocks of code based on specific conditions.", resources: [{ name: "If...Else", url: "https://www.w3schools.com/python/python_conditions.asp" }] },
            { text: "Discover how to perform repetitive tasks efficiently. You'll learn about 'for' loops, which are great for iterating over a sequence of items, and 'while' loops, which continue as long as a condition is true.", resources: [{ name: "For Loops", url: "https://www.w3schools.com/python/python_for_loops.asp" }, { name: "While Loops", url: "https://www.w3schools.com/python/python_while_loops.asp" }] },
            { text: "Gain more control over your loops. The 'break' statement allows you to exit a loop early, while 'continue' lets you skip the current iteration and move to the next.", resources: [{ name: "Break and Continue", url: "https://www.w3schools.com/python/python_for_loops.asp" }] },
        ],
      },
      {
        title: "Python Data Types",
        points: [
            { text: "Learn to use lists to store collections of items that can be changed (mutable). You'll practice adding, removing, and accessing elements in a list.", resources: [{ name: "Lists", url: "https://www.w3schools.com/python/python_lists.asp" }] },
            { text: "Understand tuples, which are similar to lists but cannot be changed (immutable). They are useful for storing data that should not be modified.", resources: [{ name: "Tuples", url: "https://www.w3schools.com/python/python_tuples.asp" }] },
            { text: "Explore dictionaries for storing data in key-value pairs, allowing for fast lookups. Also, learn about sets for storing unique elements and performing mathematical set operations.", resources: [{ name: "Dictionaries", url: "https://www.w3schools.com/python/python_dictionaries.asp" }, { name: "Sets", url: "https://www.w3schools.com/python/python_sets.asp" }] },
        ],
      },
      {
        title: "Python Functions",
        points: [
            { text: "Learn to write reusable blocks of code called functions. This helps in organizing your code and making it more modular and readable.", resources: [{ name: "Functions", url: "https://www.w3schools.com/python/python_functions.asp" }] },
            { text: "Understand how to pass information into functions using arguments and how to get results back using return values.", resources: [{ name: "Function Arguments", url: "https://www.w3schools.com/python/python_functions.asp#Arguments" }] },
            { text: "Grasp the concept of variable scope, which determines where variables can be accessed. Also, learn about lambda functions for creating small, anonymous functions.", resources: [{ name: "Scope", url: "https://www.w3schools.com/python/python_scope.asp" }, { name: "Lambda", url: "https://www.w3schools.com/python/python_lambda.asp" }] },
        ],
      },
      {
        title: "Python Files",
        points: [
            { text: "Learn how to open and read data from text files, allowing your programs to work with external data sources.", resources: [{ name: "Read Files", url: "https://www.w3schools.com/python/python_file_read.asp" }] },
            { text: "Discover how to write new data to files or append content to existing ones, enabling you to save program output and create logs.", resources: [{ name: "Write/Create Files", url: "https://www.w3schools.com/python/python_file_write.asp" }] },
            { text: "Understand the different modes for file handling (read, write, append) and learn best practices, such as using the 'with' statement to ensure files are closed properly.", resources: [{ name: "File Handling", url: "https://www.w3schools.com/python/python_file_handling.asp" }] },
        ],
      },
      {
        title: "Python Exception Handling",
        points: [
            { text: "Learn to anticipate and manage errors in your code using 'try...except' blocks. This prevents your program from crashing and allows you to handle issues gracefully.", resources: [{ name: "Try...Except", url: "https://www.w3schools.com/python/python_try_except.asp" }] },
            { text: "Go beyond generic error handling by catching specific types of exceptions. This allows you to respond differently to different error scenarios.", resources: [{ name: "Exception Handling", url: "https://realpython.com/python-exceptions/" }] },
            { text: "Understand the 'finally' clause, which lets you execute cleanup code (like closing a file) regardless of whether an error occurred or not.", resources: [{ name: "Finally", url: "https://www.w3schools.com/python/python_try_except.asp#Finally" }] },
        ],
      },
      {
        title: "Python Object and Class",
        points: [
            { text: "Get an introduction to the core principles of Object-Oriented Programming (OOP), a powerful paradigm for structuring your code.", resources: [{ name: "Python OOP", url: "https://www.w3schools.com/python/python_oop.asp" }] },
            { text: "Learn how to define your own custom data types using classes and how to create instances of those classes, called objects.", resources: [{ name: "Classes/Objects", url: "https://www.w3schools.com/python/python_classes.asp" }] },
            { text: "Explore advanced OOP concepts like inheritance (creating new classes from existing ones), encapsulation (bundling data and methods), and polymorphism (using a single interface for different data types).", resources: [{ name: "Inheritance", url: "https://www.w3schools.com/python/python_inheritance.asp" }] },
        ],
      },
    ],
  },
  {
    title: "JavaScript for Beginners",
    description: "Start your web development journey by mastering the fundamentals of JavaScript, the language of the web.",
    topics: [
        {
            title: "Introduction to JavaScript",
            points: [
                { text: "Grasp the essential role JavaScript plays in creating interactive and dynamic web pages, making the modern web possible.", resources: [{ name: "What is JavaScript?", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" }] },
                { text: "Understand how JavaScript code is executed by the browser's engine and how it interacts with HTML and CSS.", resources: [{ name: "How JavaScript works", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction" }] },
                { text: "Get hands-on by writing your first line of JavaScript and learn how to use the browser's developer console for debugging and testing.", resources: [{ name: "Hello World", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Hello_world" }] },
            ],
        },
        {
            title: "Variables and Data Types",
            points: [
                { text: "Learn the differences between `var`, `let`, and `const` and when to use each for declaring variables in your code.", resources: [{ name: "Variables", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables" }] },
                { text: "Explore the fundamental data types in JavaScript, including strings, numbers, booleans, and the special values null and undefined.", resources: [{ name: "Data Types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" }] },
                { text: "Master working with arrays, which are special variables that can hold more than one value at a time.", resources: [{ name: "Arrays", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }] },
            ],
        },
        {
            title: "Operators and Expressions",
            points: [
                { text: "Perform mathematical calculations in your code using arithmetic operators like `+`, `-`, `*`, and `/`.", resources: [{ name: "Arithmetic Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators" }] },
                { text: "Learn how to assign values, compare them, and use logical operators (`&&`, `||`, `!`) to create conditions in your code.", resources: [{ name: "Comparison and Logical Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators" }] },
                { text: "Combine variables, values, and operators to create expressions that evaluate to a single value, forming the building blocks of your program's logic.", resources: [] },
            ],
        },
        {
            title: "Control Flow (If/Else, Loops)",
            points: [
                { text: "Use `if...else` statements to control the flow of your program and execute different code blocks based on conditions.", resources: [{ name: "if...else", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" }] },
                { text: "Learn to use `for` and `while` loops to repeat actions, saving you from writing the same code over and over.", resources: [{ name: "for loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for" }, { name: "while loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while" }] },
                { text: "Discover efficient ways to loop through arrays and other data structures to process each item individually.", resources: [{ name: "Iterating over arrays", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" }] },
            ],
        },
        {
            title: "Functions",
            points: [
                { text: "Define and call functions to encapsulate reusable pieces of code, making your programs more organized and maintainable.", resources: [{ name: "Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }] },
                { text: "Learn the modern ES6 arrow function syntax as well as traditional function declarations and expressions.", resources: [{ name: "Arrow functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" }] },
                { text: "Understand how to pass data into functions via parameters and how to get data out using the `return` statement.", resources: [] },
            ],
        },
        {
            title: "Objects and Arrays",
            points: [
                { text: "Learn to use objects to group related data and functions together, representing real-world entities in your code.", resources: [{ name: "Objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" }] },
                { text: "Access and modify the properties of an object using both dot notation (`.`) and bracket notation (`[]`).", resources: [{ name: "Property accessors", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors" }] },
                { text: "Explore powerful built-in methods for arrays, such as `push`, `pop`, `forEach`, and `map`, to manipulate and transform data.", resources: [{ name: "Array methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods" }] },
            ],
        },
        {
            title: "DOM Manipulation",
            points: [
                { text: "Learn how to select and target specific HTML elements on your page using various methods like `querySelector` and `getElementById`.", resources: [{ name: "Introduction to the DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }] },
                { text: "Dynamically change the text content, CSS styles, and HTML attributes of elements in response to user actions.", resources: [{ name: "Modifying the document", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" }] },
                { text: "Create new HTML elements from scratch using JavaScript and add them to the webpage, building dynamic interfaces.", resources: [{ name: "createElement", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement" }, { name: "appendChild", url: "https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild" }] },
            ],
        },
        {
            title: "Asynchronous JavaScript (Promises, async/await)",
            points: [
                { text: "Understand why asynchronous programming is crucial for tasks like fetching data from a server without freezing the user interface.", resources: [{ name: "Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" }] },
                { text: "Learn to use Promises to manage asynchronous operations and handle their success or failure gracefully.", resources: [{ name: "Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" }] },
                { text: "Master the modern `async/await` syntax, which allows you to write asynchronous code that looks and reads like synchronous code.", resources: [{ name: "async/await", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" }] },
            ],
        },
    ],
  },
  {
    title: "Web Development Foundations",
    description: "Learn the core technologies for building modern websites and web applications.",
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
  },
  {
    title: "Full Stack Web Development",
    description: "Become a full-stack developer by mastering both front-end and back-end technologies.",
    topics: [
      {
        title: "Frontend Frameworks (React, Next.js)",
        points: [
            { text: "Build dynamic and interactive user interfaces using the component-based architecture of React.", resources: [{ name: "React Docs", url: "https://react.dev/" }] },
            { text: "Learn Next.js, a powerful React framework that adds features like server-side rendering, static site generation, and file-based routing.", resources: [{ name: "Next.js Docs", url: "https://nextjs.org/docs" }] },
            { text: "Explore state management solutions like Zustand (simple) or Redux (for large-scale apps) to handle complex application state.", resources: [{ name: "Zustand", url: "https://zustand-demo.pmnd.rs/" }, { name: "Redux", url: "https://redux.js.org/" }] },
        ],
      },
      {
        title: "Backend Development (Node.js, Express)",
        points: [
            { text: "Use the Node.js runtime environment to build fast and scalable server-side applications with JavaScript.", resources: [{ name: "Node.js Intro", url: "https://nodejs.org/en/about" }] },
            { text: "Build robust and flexible RESTful APIs using Express, a minimal and unopinionated web framework for Node.js.", resources: [{ name: "Express.js", url: "https://expressjs.com/" }] },
            { text: "Understand the request/response cycle and how to handle different HTTP methods (GET, POST, PUT, DELETE) on your server.", resources: [{ name: "HTTP Requests", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }] },
        ],
      },
      {
        title: "Databases (SQL, NoSQL)",
        points: [
            { text: "Learn the fundamental differences between relational (SQL) and non-relational (NoSQL) databases and when to choose one over the other.", resources: [{ name: "SQL vs NoSQL", url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql" }] },
            { text: "Get hands-on with a SQL database like PostgreSQL, learning essential commands for creating tables, querying data, and establishing relationships.", resources: [{ name: "PostgreSQL", url: "https://www.postgresql.org/" }] },
            { text: "Explore a popular NoSQL database like MongoDB, understanding its document-based data model and flexible schema.", resources: [{ name: "MongoDB", url: "https://www.mongodb.com/" }] },
        ],
      },
      {
        title: "APIs and RESTful services",
        points: [
            { text: "Learn the principles of REST (Representational State Transfer) to design clean, predictable, and scalable APIs.", resources: [{ name: "REST API Best Practices", url: "https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/" }] },
            { text: "Master the standard HTTP verbs (GET, POST, PUT, DELETE) and status codes to create a well-defined API.", resources: [{ name: "HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" }] },
            { text: "Create the API endpoints (routes) that your frontend application will communicate with to fetch, create, update, and delete data.", resources: [] },
        ],
      },
      {
        title: "Authentication and Authorization",
        points: [
            { text: "Implement secure user registration and login functionality, including password hashing and session management.", resources: [{ name: "Authentication Guide", url: "https://supertokens.com/blog/the-best-way-to-secure-your-website-with-http-only-cookies" }] },
            { text: "Use JSON Web Tokens (JWT) as a stateless, secure way to authenticate users and protect your API endpoints.", resources: [{ name: "JWT", url: "https://jwt.io/" }] },
            { text: "Create middleware to protect specific routes in your application, ensuring that only authenticated and authorized users can access them.", resources: [] },
        ],
      },
      {
        title: "Deployment and Hosting",
        points: [
            { text: "Deploy your frontend React/Next.js application to a global CDN for optimal performance using platforms like Vercel or Netlify.", resources: [{ name: "Vercel", url: "https://vercel.com/" }, { name: "Netlify", url: "https://www.netlify.com/" }] },
            { text: "Host your Node.js backend server on a cloud platform like Heroku, AWS (EC2, Lambda), or Google Cloud Run.", resources: [{ name: "Heroku", url: "https://www.heroku.com/" }, { name: "AWS", url: "https://aws.amazon.com/" }] },
            { text: "Set up and manage a production-ready database using cloud services like Amazon RDS, MongoDB Atlas, or Heroku Postgres.", resources: [] },
        ],
      },
      {
        title: "Version Control with Git",
        points: [
            { text: "Learn the fundamentals of Git, a distributed version control system, to track changes in your code over time.", resources: [{ name: "Git Introduction", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }] },
            { text: "Use platforms like GitHub or GitLab to host your Git repositories, collaborate with other developers, and manage projects.", resources: [{ name: "GitHub", url: "https://github.com/" }, { name: "GitLab", url: "https://about.gitlab.com/" }] },
            { text: "Master essential Git commands like `commit`, `push`, `pull`, `branch`, and `merge` to effectively manage your codebase.", resources: [{ name: "Basic Git commands", url: "https://www.atlassian.com/git/tutorials/setting-up-a-repository" }] },
        ],
      },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Build applications for iOS and Android using modern cross-platform frameworks.",
    topics: [
      {
        title: "Introduction to Mobile Development",
        points: [
            { text: "Understand the pros and cons of native development (Swift for iOS, Kotlin for Android) versus cross-platform frameworks like React Native or Flutter.", resources: [{ name: "Native vs Cross-Platform", url: "https://www.geeksforgeeks.org/native-vs-cross-platform-app-development/" }] },
            { text: "Get an overview of the mobile app landscape, including app stores, design guidelines (Material Design, Human Interface Guidelines), and monetization strategies.", resources: [] },
            { text: "Learn how to evaluate project requirements to choose the most suitable technology stack for your mobile app.", resources: [] },
        ],
      },
      {
        title: "React Native or Flutter Fundamentals",
        points: [
            { text: "Install the necessary tools, SDKs, and emulators/simulators for your chosen framework (React Native or Flutter).", resources: [{ name: "React Native Setup", url: "https://reactnative.dev/docs/environment-setup" }, { name: "Flutter Setup", url: "https://docs.flutter.dev/get-started/install" }] },
            { text: "Learn the core concepts of building UIs. In React Native, you'll use components like `<View>` and `<Text>`. In Flutter, you'll work with widgets.", resources: [{ name: "React Native Components", url: "https://reactnative.dev/docs/components-and-apis" }, { name: "Flutter Widgets", url: "https://docs.flutter.dev/ui" }] },
            { text: "Implement touch controls and gestures to make your app interactive and responsive to user input.", resources: [{ name: "React Native Gestures", url: "https://reactnative.dev/docs/handling-touches" }, { name: "Flutter Gestures", url: "https://docs.flutter.dev/development/ui/advanced/gestures" }] },
        ],
      },
      {
        title: "State Management",
        points: [
            { text: "Grasp the concept of state in a mobile app and why it's crucial for building dynamic and interactive UIs.", resources: [{ name: "React State", url: "https://react.dev/learn/managing-state" }, { name: "Flutter State Management", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" }] },
            { text: "Explore popular state management libraries like Redux or Zustand for React Native, and Riverpod or Provider for Flutter.", resources: [{ name: "Redux", url: "https://redux.js.org/" }, { name: "Riverpod", url: "https://riverpod.dev/" }] },
            { text: "Learn techniques to ensure your UI automatically updates whenever the underlying application data changes.", resources: [] },
        ],
      },
      {
        title: "Navigation",
        points: [
            { text: "Learn to manage navigation between different screens using libraries like React Navigation for React Native or Flutter's built-in Navigator.", resources: [{ name: "React Navigation", url: "https://reactnavigation.org/" }, { name: "Flutter Navigation", url: "https://docs.flutter.dev/ui/navigation" }] },
            { text: "Implement common navigation patterns like stack navigators (for sequential screens), tab navigators (for bottom tabs), and drawer navigators (for side menus).", resources: [] },
            { text: "Understand how to pass data and parameters between different screens in your application.", resources: [] },
        ],
      },
      {
        title: "Working with APIs",
        points: [
            { text: "Use libraries like `fetch` or `axios` in React Native, or `http` in Flutter, to make network requests to a backend server.", resources: [{ name: "React Native Networking", url: "https://reactnative.dev/docs/network" }, { name: "Flutter Networking", url: "https://docs.flutter.dev/cookbook/networking/fetch-data" }] },
            { text: "Learn how to parse JSON responses from an API and display the data in your app's UI.", resources: [] },
            { text: "Implement loading indicators and error messages to provide a smooth user experience while fetching data.", resources: [] },
        ],
      },
      {
        title: "Push Notifications",
        points: [
            { text: "Learn the importance of push notifications for user engagement and retention.", resources: [] },
            { text: "Integrate services like Firebase Cloud Messaging (FCM) to send and receive push notifications on both iOS and Android.", resources: [{ name: "Firebase Cloud Messaging", url: "https://firebase.google.com/docs/cloud-messaging" }] },
            { text: "Learn to handle user interactions with notifications, whether the app is in the foreground, background, or closed.", resources: [] },
        ],
      },
      {
        title: "Publishing to App Stores",
        points: [
            { text: "Generate the necessary build artifacts (APK/AAB for Android, IPA for iOS) and prepare app store listings with screenshots and descriptions.", resources: [{ name: "React Native Publishing", url: "https://reactnative.dev/docs/publishing-to-app-store" }, { name: "Flutter Publishing", url: "https://docs.flutter.dev/deployment/android" }] },
            { text: "Familiarize yourself with the specific review guidelines and policies for both the Apple App Store and Google Play Store to avoid rejection.", resources: [{ name: "App Store Guidelines", url: "https://developer.apple.com/app-store/review/guidelines/" }, { name: "Play Store Policies", url: "https://play.google.com/about/developer-distribution-agreement.html" }] },
            { text: "Go through the process of creating a developer account, submitting your app for review, and managing its release.", resources: [] },
        ],
      },
    ],
  },
  {
    title: "DevOps Engineer",
    description: "Learn the practices and tools to automate and streamline the software development lifecycle.",
    topics: [
      {
        title: "CI/CD Pipelines (Jenkins, GitHub Actions)",
        points: [
            { text: "Learn the core DevOps principles of Continuous Integration (CI) and Continuous Delivery/Deployment (CD) to improve development velocity and quality.", resources: [{ name: "What is CI/CD?", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" }] },
            { text: "Create automated workflows that build, test, and deploy your applications whenever code is pushed to a repository.", resources: [] },
            { text: "Get hands-on experience with popular CI/CD tools like the versatile GitHub Actions or the industry-standard Jenkins.", resources: [{ name: "Jenkins", url: "https://www.jenkins.io/" }, { name: "GitHub Actions", url: "https://github.com/features/actions" }] },
        ],
      },
      {
        title: "Infrastructure as Code (Terraform, Ansible)",
        points: [
            { text: "Understand the benefits of Infrastructure as Code (IaC) for managing and provisioning infrastructure through machine-readable definition files.", resources: [{ name: "What is IaC?", url: "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac" }] },
            { text: "Use Terraform to declaratively define and provision cloud and on-prem resources across multiple providers (AWS, GCP, Azure).", resources: [{ name: "Terraform", url: "https://www.terraform.io/" }] },
            { text: "Use Ansible for configuration management, application deployment, and task automation, using YAML-based playbooks.", resources: [{ name: "Ansible", url: "https://www.ansible.com/" }] },
        ],
      },
      {
        title: "Containerization (Docker, Kubernetes)",
        points: [
            { text: "Learn to use Docker to package applications and their dependencies into standardized, portable units called containers.", resources: [{ name: "Docker", url: "https://www.docker.com/" }] },
            { text: "Master Kubernetes (K8s) to automate the deployment, scaling, and management of containerized applications at a massive scale.", resources: [{ name: "Kubernetes", url: "https://kubernetes.io/" }] },
            { text: "Understand how containers communicate with each other (networking) and how they handle persistent data (storage) in a Kubernetes environment.", resources: [] },
        ],
      },
      {
        title: "Cloud Platforms (AWS, GCP, Azure)",
        points: [
            { text: "Develop proficiency in one of the major cloud providers: Amazon Web Services (AWS), Google Cloud Platform (GCP), or Microsoft Azure.", resources: [{ name: "AWS", url: "https://aws.amazon.com/" }, { name: "GCP", url: "https://cloud.google.com/" }, { name: "Azure", url: "https://azure.microsoft.com/" }] },
            { text: "Learn about essential cloud services for compute (like EC2, VMs), storage (like S3, Blob Storage), networking, and databases.", resources: [] },
            { text: "Grasp the fundamentals of cloud security best practices, identity and access management (IAM), and strategies for managing cloud costs effectively.", resources: [] },
        ],
      },
      {
        title: "Monitoring and Logging",
        points: [
            { text: "Learn the importance of monitoring system health, performance, and application metrics to ensure reliability and identify issues proactively.", resources: [] },
            { text: "Use Prometheus for time-series data monitoring and alerting, and Grafana to create powerful, interactive dashboards for visualization.", resources: [{ name: "Prometheus", url: "https://prometheus.io/" }, { name: "Grafana", url: "https://grafana.com/" }] },
            { text: "Implement a centralized logging solution using the ELK Stack (Elasticsearch, Logstash, Kibana) to collect, process, and search logs from all your services.", resources: [{ name: "ELK Stack", url: "https://www.elastic.co/what-is/elk-stack" }] },
        ],
      },
      {
        title: "Scripting (Bash, Python)",
        points: [
            { text: "Develop scripting skills to automate routine administrative tasks, deployments, and other repetitive processes.", resources: [] },
            { text: "Learn Bash scripting for powerful command-line automation and system administration tasks on Linux-based systems.", resources: [{ name: "Bash Scripting", url: "https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html" }] },
            { text: "Use Python for more advanced scripting, interacting with APIs, and building complex automation tools.", resources: [{ name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" }] },
        ],
      },
      {
        title: "Networking Fundamentals",
        points: [
            { text: "Understand the basics of the TCP/IP protocol suite, how DNS resolution works, and the difference between HTTP and HTTPS.", resources: [{ name: "Computer Networking Tutorial", url: "https://www.geeksforgeeks.org/computer-network-tutorial/" }] },
            { text: "Learn to design and configure isolated network environments in the cloud using Virtual Private Clouds (VPCs) and subnets.", resources: [{ name: "VPC", url: "https://aws.amazon.com/vpc/" }] },
            { text: "Implement network security by configuring firewalls, network access control lists (ACLs), and security groups to control inbound and outbound traffic.", resources: [] },
        ],
      },
    ],
  },
  {
    title: "Front-End Developer",
    description: "Learn to build beautiful and interactive user interfaces for the web.",
    topics: [
      {
        title: "Core Technologies",
        points: [
          { text: "Master HTML for structuring web pages.", resources: [{ name: "HTML Tutorial", url: "https://www.w3schools.com/html/" }] },
          { text: "Learn CSS for styling web pages.", resources: [{ name: "CSS Tutorial", url: "https://www.w3schools.com/css/" }] },
          { text: "Understand JavaScript for adding interactivity.", resources: [{ name: "JavaScript Tutorial", url: "https://www.w3schools.com/js/" }] },
        ],
      },
      {
        title: "Frameworks and Libraries",
        points: [
          { text: "Learn a modern front-end framework like React, Angular, or Vue.", resources: [{ name: "React", url: "https://reactjs.org/" }, { name: "Angular", url: "https://angular.io/" }, { name: "Vue.js", url: "https://vuejs.org/" }] },
          { text: "Explore CSS frameworks like Bootstrap or Tailwind CSS.", resources: [{ name: "Bootstrap", url: "https://getbootstrap.com/" }, { name: "Tailwind CSS", url: "https://tailwindcss.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Back-End Developer",
    description: "Learn to build the server-side logic and infrastructure that powers web applications.",
    topics: [
      {
        title: "Server-Side Languages",
        points: [
          { text: "Choose a language like Node.js (JavaScript), Python, Java, or Ruby.", resources: [{ name: "Node.js", url: "https://nodejs.org/" }, { name: "Python", url: "https://www.python.org/" }] },
        ],
      },
      {
        title: "Databases and APIs",
        points: [
          { text: "Understand how to work with SQL and NoSQL databases.", resources: [{ name: "SQL Tutorial", url: "https://www.w3schools.com/sql/" }, { name: "MongoDB", url: "https://www.mongodb.com/" }] },
          { text: "Learn to build RESTful APIs.", resources: [{ name: "REST API Tutorial", url: "https://www.restapitutorial.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Database Administrator",
    description: "Learn to manage and maintain databases to ensure data is secure, accessible, and performs efficiently.",
    topics: [
        {
            title: "Database Fundamentals",
            points: [
                { text: "Understand the core concepts of relational (SQL) and non-relational (NoSQL) databases.", resources: [{ name: "SQL vs NoSQL", url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql" }] },
                { text: "Learn about database design, normalization, and data modeling.", resources: [{ name: "Database Normalization", url: "https://www.guru99.com/database-normalization.html" }] },
            ]
        },
        {
            title: "SQL and NoSQL Databases",
            points: [
                { text: "Gain proficiency in a specific SQL database like PostgreSQL, MySQL, or SQL Server.", resources: [{ name: "PostgreSQL", url: "https://www.postgresql.org/" }, { name: "MySQL", url: "https://www.mysql.com/" }] },
                { text: "Learn a NoSQL database like MongoDB, Cassandra, or Redis.", resources: [{ name: "MongoDB", url: "https://www.mongodb.com/" }, { name: "Cassandra", url: "https://cassandra.apache.org/_/index.html" }] },
            ]
        }
    ]
  },
  {
    title: "Git Version Control",
    description: "Master Git for tracking changes in your code and collaborating with others.",
    topics: [
      {
        title: "Git Basics",
        points: [
          { text: "Learn basic commands like `git init`, `git add`, `git commit`, and `git push`.", resources: [{ name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" }] },
          { text: "Understand branching and merging.", resources: [{ name: "Learn Git Branching", url: "https://learngitbranching.js.org/" }] },
        ],
      },
    ],
  },
  {
    title: "SQL",
    description: "Learn the standard language for managing and querying relational databases.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand tables, rows, columns, and data types.", resources: [{ name: "SQLBolt", url: "https://sqlbolt.com/" }] },
          { text: "Learn to write queries with `SELECT`, `FROM`, `WHERE`, `GROUP BY`, and `JOIN`.", resources: [{ name: "W3Schools SQL", url: "https://www.w3schools.com/sql/" }] },
        ],
      },
    ],
  },
  {
    title: "C",
    description: "Learn the foundational C programming language, known for its performance and low-level memory access.",
    topics: [
      {
        title: "Introduction to C",
        points: [
          { text: "Discover the history of C, its influence on other languages, and its common use cases in systems programming, embedded systems, and high-performance computing.", resources: [{ name: "History of C", url: "https://en.wikipedia.org/wiki/C_(programming_language)#History" }] },
          { text: "Set up a C development environment by installing a compiler like GCC (GNU Compiler Collection) and a text editor or IDE like VS Code.", resources: [{ name: "GCC, the GNU Compiler Collection", url: "https://gcc.gnu.org/" }, { name: "C/C++ for Visual Studio Code", url: "https://code.visualstudio.com/docs/languages/cpp" }] },
          { text: "Compile and run your first 'Hello, World!' program to understand the basic structure of a C program and the compilation process.", resources: [{ name: "C - Hello, World!", url: "https://www.geeksforgeeks.org/c-hello-world-program/" }] },
        ],
      },
      {
        title: "C Fundamentals",
        points: [
          { text: "Learn about C's basic syntax, including statements, comments, and the importance of the semicolon.", resources: [{ name: "C - Basic Syntax", url: "https://www.tutorialspoint.com/cprogramming/c_basic_syntax.htm" }] },
          { text: "Understand how to declare variables and use C's fundamental data types, such as `int`, `char`, `float`, `double`, and their modifiers (`short`, `long`, `signed`, `unsigned`).", resources: [{ name: "C - Data Types", url: "https://www.geeksforgeeks.org/c-data-types/" }] },
          { text: "Master C's operators, including arithmetic, relational, logical, bitwise, and assignment operators.", resources: [{ name: "C - Operators", url: "https://www.w3schools.com/c/c_operators.php" }] },
        ],
      },
      {
        title: "Control Flow",
        points: [
          { text: "Control the flow of your program with conditional statements like `if`, `else`, and `else if` to execute different code blocks based on conditions.", resources: [{ name: "C - if...else Statement", url: "https://www.w3schools.com/c/c_if_else.php" }] },
          { text: "Use the `switch` statement for multi-way branching, providing a clean alternative to a series of `if-else if` statements.", resources: [{ name: "C - switch Statement", url: "https://www.w3schools.com/c/c_switch.php" }] },
          { text: "Learn how to repeat actions using `for`, `while`, and `do-while` loops.", resources: [{ name: "C - for Loop", url: "https://www.w3schools.com/c/c_for_loop.php" }, { name: "C - while Loop", url: "https://www.w3schools.com/c/c_while_loop.php" }] },
          { text: "Control loop behavior with the `break` statement to exit a loop early and the `continue` statement to skip to the next iteration.", resources: [{ name: "C - break and continue", url: "https://www.w3schools.com/c/c_break_continue.php" }] },
        ],
      },
      {
        title: "Functions",
        points: [
          { text: "Learn how to define and call functions to create modular, reusable code. Understand the purpose of function prototypes.", resources: [{ name: "C - Functions", url: "https://www.geeksforgeeks.org/c-functions/" }] },
          { text: "Understand variable scope (local vs. global) and how it affects a variable's visibility and lifetime within a program.", resources: [{ name: "Scope Rules in C", url: "https://www.geeksforgeeks.org/scope-rules-in-c/" }] },
          { text: "Explore recursion, where a function calls itself to solve a problem. Understand the base case and recursive step.", resources: [{ name: "Recursion in C", url: "https://www.w3schools.com/c/c_recursion.php" }] },
        ],
      },
      {
        title: "Arrays and Strings",
        points: [
          { text: "Learn how to declare, initialize, and access elements in one-dimensional and multi-dimensional arrays.", resources: [{ name: "C - Arrays", url: "https://www.w3schools.com/c/c_arrays.php" }] },
          { text: "Understand how strings are represented in C as null-terminated character arrays and learn to use common string manipulation functions from the `<string.h>` library.", resources: [{ name: "C - Strings", url: "https://www.w3schools.com/c/c_strings.php" }] },
        ],
      },
      {
        title: "Pointers",
        points: [
          { text: "Grasp the core concept of pointers: variables that store memory addresses. Learn how to declare, initialize, and dereference pointers.", resources: [{ name: "C - Pointers", url: "https://www.w3schools.com/c/c_pointers.php" }] },
          { text: "Understand the close relationship between pointers and arrays, and learn how to use pointer arithmetic to navigate arrays.", resources: [{ name: "C - Pointers and Arrays", url: "https://www.geeksforgeeks.org/c-pointers-and-arrays/" }] },
          { text: "Explore function pointers, which allow you to treat functions as arguments to other functions, enabling dynamic function calls.", resources: [{ name: "Function Pointer in C", url: "https://www.geeksforgeeks.org/function-pointer-in-c/" }] },
        ],
      },
      {
        title: "Memory Management",
        points: [
          { text: "Learn to allocate memory dynamically on the heap using `malloc`, `calloc`, and `realloc`.", resources: [{ name: "Dynamic Memory Allocation in C", url: "https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/" }] },
          { text: "Understand the importance of freeing dynamically allocated memory using `free` to prevent memory leaks.", resources: [] },
          { text: "Learn about the stack and heap, the two main memory regions where a C program stores its data.", resources: [{ name: "Stack vs Heap Memory Allocation", url: "https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/" }] },
        ],
      },
      {
        title: "Structures and Unions",
        points: [
          { text: "Learn how to use `struct` to group different data types together into a single, custom data type.", resources: [{ name: "C - struct", url: "https://www.w3schools.com/c/c_structs.php" }] },
          { text: "Understand `union`, which allows you to store different data types in the same memory location (but not at the same time).", resources: [{ name: "C - union", url: "https://www.geeksforgeeks.org/union-in-c/" }] },
          { text: "Use `typedef` to create aliases for complex data types, making your code more readable.", resources: [{ name: "C - typedef", url: "https://www.w3schools.com/c/c_typedef.php" }] },
        ],
      },
      {
        title: "File I/O",
        points: [
          { text: "Learn how to perform file operations, including opening a file with `fopen`, reading with `fscanf` or `fgets`, writing with `fprintf` or `fputs`, and closing with `fclose`.", resources: [{ name: "C - Files I/O", url: "https://www.w3schools.com/c/c_files.php" }] },
          { text: "Understand how to handle file-related errors by checking the return values of I/O functions and using `perror` and `errno`.", resources: [{ name: "Error Handling in C", url: "https://www.tutorialspoint.com/cprogramming/c_error_handling.htm" }] },
        ],
      },
      {
        title: "The Preprocessor",
        points: [
          { text: "Learn about the C preprocessor and how it processes your source code before compilation.", resources: [{ name: "The C Preprocessor", url: "https://www.geeksforgeeks.org/the-c-preprocessor/" }] },
          { text: "Use preprocessor directives like `#include` to add header files, `#define` to create macros and symbolic constants, and conditional directives like `#ifdef` and `#endif` for conditional compilation.", resources: [{ name: "C - Preprocessors", url: "https://www.tutorialspoint.com/cprogramming/c_preprocessors.htm" }] },
        ],
      },
    ],
  },
  {
    title: "R",
    description: "Learn R for statistical computing and data analysis.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand R data structures like vectors, matrices, and data frames.", resources: [{ name: "R for Data Science", url: "https://r4ds.had.co.nz/" }] },
          { text: "Learn to use packages like dplyr and ggplot2 for data manipulation and visualization.", resources: [{ name: "ggplot2", url: "https://ggplot2.tidyverse.org/" }] },
        ],
      },
    ],
  },
  {
    title: "Java",
    description: "Learn the robust, object-oriented Java programming language.",
    topics: [
      {
        title: "Core Java",
        points: [
          { text: "Understand the JVM, syntax, OOP concepts, and collections framework.", resources: [{ name: "Oracle Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/" }] },
          { text: "Learn about exception handling, multithreading, and I/O.", resources: [{ name: "Baeldung Java", url: "https://www.baeldung.com/java-tutorial" }] },
        ],
      },
    ],
  },
  {
    title: "C++",
    description: "Learn the powerful and high-performance C++ programming language.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand syntax, data types, and control structures.", resources: [{ name: "LearnCpp.com", url: "https://www.learncpp.com/" }] },
          { text: "Master object-oriented programming, templates, and the Standard Template Library (STL).", resources: [{ name: "C++ Reference", url: "https://en.cppreference.com/w/" }] },
        ],
      },
    ],
  },
  {
    title: "C#",
    description: "Learn the modern, object-oriented C# language from Microsoft.",
    topics: [
      {
        title: "Core C#",
        points: [
          { text: "Understand the .NET framework, C# syntax, and OOP.", resources: [{ name: "C# Docs", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" }] },
          { text: "Learn about LINQ, async programming, and building applications with .NET.", resources: [{ name: "C# Station", url: "http://www.csharp-station.com/Tutorial/CSharp/Lesson01" }] },
        ],
      },
    ],
  },
  {
    title: "TypeScript",
    description: "Learn TypeScript to add static types to your JavaScript projects.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand basic types, interfaces, classes, and modules.", resources: [{ name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" }] },
          { text: "Learn about generics, decorators, and advanced types.", resources: [{ name: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" }] },
        ],
      },
    ],
  },
  {
    title: "Swift",
    description: "Learn Swift, the modern language for building apps for Apple platforms.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand Swift syntax, optionals, and control flow.", resources: [{ name: "A Swift Tour", url: "https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html" }] },
          { text: "Learn about UIKit/SwiftUI for building user interfaces.", resources: [{ name: "Hacking with Swift", url: "https://www.hackingwithswift.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Kotlin",
    description: "Learn Kotlin, the modern language for building Android apps.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand Kotlin syntax, null safety, and coroutines for async programming.", resources: [{ name: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html" }] },
          { text: "Learn to build Android apps with Kotlin.", resources: [{ name: "Android Kotlin Fundamentals", url: "https://developer.android.com/kotlin/fundamentals" }] },
        ],
      },
    ],
  },
  {
    title: "PHP",
    description: "Learn the popular server-side scripting language for web development.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand PHP syntax, variables, and control structures.", resources: [{ name: "PHP The Right Way", url: "https://phptherightway.com/" }] },
          { text: "Learn about working with databases and a framework like Laravel or Symfony.", resources: [{ name: "Laravel", url: "https://laravel.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Ruby",
    description: "Learn the dynamic, open-source programming language with a focus on simplicity and productivity.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand Ruby syntax and its object-oriented nature.", resources: [{ name: "Ruby in 20 Minutes", url: "https://www.ruby-lang.org/en/documentation/quickstart/" }] },
          { text: "Learn the Ruby on Rails framework for web development.", resources: [{ name: "Ruby on Rails Guides", url: "https://guides.rubyonrails.org/" }] },
        ],
      },
    ],
  },
  {
    title: "Rust",
    description: "Learn Rust for building reliable and efficient software.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand ownership, borrowing, and lifetimes.", resources: [{ name: "The Rust Book", url: "https://doc.rust-lang.org/book/" }] },
          { text: "Learn about concurrency, error handling, and building command-line tools.", resources: [{ name: "Rust by Example", url: "https://doc.rust-lang.org/rust-by-example/" }] },
        ],
      },
    ],
  },
  {
    title: "Dart",
    description: "Learn Dart, the language for building mobile, desktop, and web applications with Flutter.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand Dart syntax, types, and asynchronous programming.", resources: [{ name: "A Tour of the Dart Language", url: "https://dart.dev/guides/language/language-tour" }] },
          { text: "Learn about building UIs with Flutter.", resources: [{ name: "Flutter Docs", url: "https://docs.flutter.dev/" }] },
        ],
      },
    ],
  },
  {
    title: "HTML",
    description: "Learn the standard markup language for creating web pages.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand elements, tags, and attributes.", resources: [{ name: "MDN HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" }] },
          { text: "Learn about semantic HTML, forms, and multimedia.", resources: [{ name: "HTML Dog", url: "https://htmldog.com/guides/html/beginner/" }] },
        ],
      },
    ],
  },
  {
    title: "CSS",
    description: "Learn the language for styling and laying out web pages.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand selectors, the box model, and typography.", resources: [{ name: "MDN CSS Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" }] },
          { text: "Learn about Flexbox, Grid, and responsive design.", resources: [{ name: "CSS-Tricks", url: "https://css-tricks.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Bash/Shell Scripting",
    description: "Learn to automate tasks on the command line.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand commands, pipes, and redirection.", resources: [{ name: "The Bash Guide", url: "https://guide.bash.academy/" }] },
          { text: "Learn to write scripts with variables, loops, and conditional logic.", resources: [{ name: "Learn Shell", url: "https://www.learnshell.org/" }] },
        ],
      },
    ],
  },
  {
    title: "Perl",
    description: "Learn the versatile, high-level programming language.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand Perl syntax, regular expressions, and data structures.", resources: [{ name: "Learn Perl", url: "https://www.learn-perl.org/" }] },
        ],
      },
    ],
  },
  {
    title: "PowerShell",
    description: "Learn the command-line shell and scripting language from Microsoft.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand cmdlets, pipelines, and the object-based nature of PowerShell.", resources: [{ name: "PowerShell Docs", url: "https://docs.microsoft.com/en-us/powershell/" }] },
        ],
      },
    ],
  },
  {
    title: "MATLAB",
    description: "Learn the programming platform for engineers and scientists.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand matrices, plotting, and writing scripts and functions.", resources: [{ name: "MATLAB Onramp", url: "https://www.mathworks.com/learn/tutorials/matlab-onramp.html" }] },
        ],
      },
    ],
  },
  {
    title: "SAS",
    description: "Learn the software suite for advanced analytics and data management.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand the DATA step, procedures, and the SAS macro language.", resources: [{ name: "SAS Tutorials", url: "https://www.sas.com/en_us/training/offers/free-sas-training.html" }] },
        ],
      },
    ],
  },
  {
    title: "SPSS",
    description: "Learn the software package for statistical analysis.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand data entry, variable types, and running statistical tests through the UI and syntax.", resources: [{ name: "SPSS Tutorials", url: "https://www.spss-tutorials.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Prolog",
    description: "Learn the logic programming language.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand facts, rules, and queries.", resources: [{ name: "Learn Prolog Now!", url: "http://www.learnprolognow.org/" }] },
        ],
      },
    ],
  },
  {
    title: "TensorFlow",
    description: "Learn the open-source library for machine learning and artificial intelligence.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand tensors, building models with Keras, and training/evaluation.", resources: [{ name: "TensorFlow Core", url: "https://www.tensorflow.org/guide" }] },
        ],
      },
    ],
  },
  {
    title: "PyTorch",
    description: "Learn the open-source machine learning library based on the Torch library.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand tensors, building neural networks with `torch.nn`, and automatic differentiation.", resources: [{ name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" }] },
        ],
      },
    ],
  },
  {
    title: "Flutter",
    description: "Learn Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand widgets, layouts, and state management.", resources: [{ name: "Flutter Docs", url: "https://docs.flutter.dev/" }] },
        ],
      },
    ],
  },
];


export default function LearnPage() {
  return (
    <div className="flex flex-col h-full gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
        <p className="text-muted-foreground">
          Our structured learning paths will help you master new skills and advance your career.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {learningPaths.map((path) => (
          <Card key={path.title} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{path.title}</CardTitle>
              <p className="text-muted-foreground pt-2 text-sm">{path.description}</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {path.topics.map((topic, index) => (
                  <AccordionItem value={`item-${index}`} key={topic.title}>
                    <AccordionTrigger>
                        {topic.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-4">
                            {topic.points.map((point, i) => (
                                <li key={i}>
                                    <span>{point.text}</span>
                                    {point.resources && point.resources.length > 0 && (
                                        <div className="mt-2 space-x-4">
                                            {point.resources.map((resource, j) => (
                                                <a href={resource.url} key={j} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                                                    <Link className="h-3 w-3 shrink-0" />
                                                    {resource.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
