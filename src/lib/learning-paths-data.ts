

export const learningPaths = [
  {
    id: "beginners-guide-to-python",
    title: "Beginner's Guide to Python",
    description: "These tutorials will provide you with a solid foundation in Python and prepare you for your career goals.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
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
    assignments: [
        { title: "Simple Calculator", description: "Create a command-line program that takes two numbers and an operator (+, -, *, /) as input and prints the result." },
        { title: "Guess the Number Game", description: "Write a program where the computer picks a random number and the user has to guess it. The program should give hints like 'too high' or 'too low'." },
        { title: "To-Do List Manager", description: "Build a simple to-do list application that can add tasks, view all tasks, and mark tasks as complete. Store the tasks in a list." }
    ]
  },
  {
    id: "javascript-for-beginners",
    title: "JavaScript for Beginners",
    description: "Start your web development journey by mastering the fundamentals of JavaScript, the language of the web.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
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
    assignments: [
        { title: "Tip Calculator", description: "Build a simple UI with an input for the bill amount and buttons for different tip percentages. Calculate and display the tip amount and total bill." },
        { title: "Simple Quiz App", description: "Create a quiz with multiple-choice questions. Use JavaScript to check the answers and display the final score at the end." },
        { title: "Basic Image Carousel", description: "Build an image slider with 'Next' and 'Previous' buttons to cycle through a collection of images using DOM manipulation." }
    ]
  },
  {
    id: "c-plus-plus",
    title: "C++",
    description: "Learn the powerful, high-performance C++ language, used in game development, systems programming, and financial applications.",
    category: "Programming Languages",
    subCategory: "Systems & Embedded Programming",
    topics: [
      {
        title: "Introduction to C++",
        points: [
          { text: "Understand C++'s history as an extension of C and its role in performance-critical applications.", resources: [{ name: "C++ History", url: "https://en.cppreference.com/w/cpp/language/history" }] },
          { text: "Set up a C++ development environment with a compiler like G++ (part of GCC) and a code editor like Visual Studio Code.", resources: [{ name: "C++ on VS Code", url: "https://code.visualstudio.com/docs/languages/cpp" }] },
          { text: "Compile and run a 'Hello, World!' program to learn the basic structure, including the `main` function and using `iostream` for I/O.", resources: [{ name: "C++ 'Hello, World!'", url: "https://www.w3schools.com/cpp/cpp_getstarted.asp" }] },
        ],
      },
      {
        title: "C++ Fundamentals",
        points: [
          { text: "Learn about variables and fundamental data types like `int`, `double`, `char`, and `bool`.", resources: [{ name: "C++ Data Types", url: "https://www.w3schools.com/cpp/cpp_data_types.asp" }] },
          { text: "Master operators for arithmetic, assignment, comparison, and logical operations.", resources: [{ name: "C++ Operators", url: "https://www.w3schools.com/cpp/cpp_operators.asp" }] },
          { text: "Understand how to work with strings using the `std::string` class.", resources: [{ name: "C++ Strings", url: "https://www.w3schools.com/cpp/cpp_strings.asp" }] },
        ],
      },
      {
        title: "Control Flow",
        points: [
          { text: "Use `if-else` and `switch` statements to make decisions and control the flow of your program.", resources: [{ name: "C++ Conditions", url: "https://www.w3schools.com/cpp/cpp_conditions.asp" }] },
          { text: "Learn to use `while` and `for` loops to execute blocks of code repeatedly.", resources: [{ name: "C++ Loops", url: "https://www.w3schools.com/cpp/cpp_while_loop.asp" }] },
        ],
      },
      {
        title: "Functions and Pointers",
        points: [
          { text: "Define and call functions to structure your code into reusable blocks. Understand function overloading.", resources: [{ name: "C++ Functions", url: "https://www.w3schools.com/cpp/cpp_functions.asp" }] },
          { text: "Grasp the concept of pointers for direct memory manipulation and learn about references as safer aliases to existing variables.", resources: [{ name: "C++ Pointers", url: "https://www.w3schools.com/cpp/cpp_pointers.asp" }] },
        ],
      },
      {
        title: "Object-Oriented Programming (OOP)",
        points: [
          { text: "Learn how to define classes to create your own types. Understand members (attributes) and methods (functions).", resources: [{ name: "C++ Classes", url: "https://www.w3schools.com/cpp/cpp_classes.asp" }] },
          { text: "Understand constructors and destructors for object initialization and cleanup.", resources: [{ name: "C++ Constructors", url: "https://www.w3schools.com/cpp/cpp_constructors.asp" }] },
          { text: "Master the core OOP principles: Encapsulation, Inheritance, and Polymorphism.", resources: [{ name: "OOP Principles", url: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/" }] },
        ],
      },
      {
        title: "Standard Template Library (STL)",
        points: [
          { text: "Learn to use STL containers like `std::vector` (dynamic array), `std::list`, `std::stack`, and `std::queue`.", resources: [{ name: "STL Containers", url: "https://www.geeksforgeeks.org/containers-in-c-stl/" }] },
          { text: "Explore associative containers like `std::map` (key-value pairs) and `std::set` (unique keys).", resources: [{ name: "std::map", url: "https://cplusplus.com/reference/map/map/" }] },
          { text: "Understand how to use iterators to navigate through containers and how to use algorithms like `sort` and `find` to manipulate data.", resources: [{ name: "STL Algorithms", url: "https://www.geeksforgeeks.org/c-magicians-stl-algorithms/" }] },
        ],
      },
      {
        title: "Error Handling",
        points: [
          { text: "Learn to handle errors using `try`, `catch`, and `throw` blocks for exception handling.", resources: [{ name: "C++ Exceptions", url: "https://www.w3schools.com/cpp/cpp_exceptions.asp" }] },
        ],
      },
      {
        title: "Modern C++ (C++11 and beyond)",
        points: [
          { text: "Explore features from modern C++ standards, such as `auto` for type inference, range-based for loops, and smart pointers (`std::unique_ptr`, `std::shared_ptr`) for safer memory management.", resources: [{ name: "C++11 Features", url: "https://www.geeksforgeeks.org/c11-features-in-cpp/" }] },
        ],
      },
    ],
    assignments: [
      { title: "Vector Statistics", description: "Write a C++ program that uses a `std::vector<double>` to store a list of numbers. Calculate and print the sum, mean, and standard deviation of the numbers in the vector." },
      { title: "Simple Bank Account Class", description: "Create a `BankAccount` class with private member variables for the account holder's name and balance. Implement public methods to deposit money, withdraw money, and check the balance. Ensure the balance cannot become negative." },
      { title: "Word Frequency Counter", description: "Write a program that reads text from a file, and uses a `std::map` to count the frequency of each word. Print the word counts to the console." }
    ]
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
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    description: "Become a full-stack developer by mastering both front-end and back-end technologies.",
    category: "Job Roles",
    subCategory: "Core Software Development",
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
    assignments: [
        { title: "Blog API", description: "Build a RESTful API using Node.js and Express that allows users to create, read, update, and delete blog posts. Store the posts in memory or a JSON file." },
        { title: "Full-Stack To-Do App", description: "Create a React frontend and a Node.js backend for a to-do list application. The frontend should make API calls to the backend to manage tasks, which are stored in a database like PostgreSQL." },
        { title: "User Authentication Service", description: "Implement a simple user login and registration system. Build an API with endpoints for signup and login, and protect another endpoint that can only be accessed by authenticated users using JWTs." }
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Learn to collect, clean, and interpret data sets to answer a question or solve a problem.",
    category: "Job Roles",
    subCategory: "Data & AI",
    topics: [
      {
        title: "Foundational Skills",
        points: [
          { text: "Develop a strong understanding of fundamental statistics concepts, including descriptive statistics (mean, median, mode), probability, and hypothesis testing.", resources: [{ name: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" }] },
          { text: "Master spreadsheet software like Microsoft Excel or Google Sheets for data entry, cleaning, basic calculations, and creating simple charts.", resources: [{ name: "Excel for Beginners", url: "https://www.excel-easy.com/" }] },
          { text: "Learn the core principles of data management and how to structure data effectively in tables.", resources: [] },
        ],
      },
      {
        title: "SQL for Data Analysis",
        points: [
          { text: "Learn the basics of SQL (Structured Query Language) to extract data from relational databases.", resources: [{ name: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/" }] },
          { text: "Master intermediate SQL concepts like `JOINs`, `GROUP BY`, and aggregate functions to combine and summarize data.", resources: [{ name: "SQL Joins", url: "https://www.w3schools.com/sql/sql_join.asp" }] },
          { text: "Explore advanced SQL topics like subqueries and window functions for more complex data analysis tasks.", resources: [{ name: "SQL Window Functions", url: "https://learnsql.com/blog/sql-window-functions-tutorial/" }] },
        ],
      },
      {
        title: "Python for Data Analysis",
        points: [
          { text: "Learn the fundamentals of Python, the most popular programming language for data analysis.", resources: [{ name: "Python for Beginners", url: "https://www.learnpython.org/" }] },
          { text: "Master the Pandas library for data manipulation and analysis. Learn to work with DataFrames, clean data, and handle missing values.", resources: [{ name: "Pandas Tutorial", url: "https://pandas.pydata.org/docs/user_guide/10min.html" }] },
          { text: "Explore NumPy for efficient numerical computations and working with arrays.", resources: [{ name: "NumPy Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html" }] },
          { text: "Learn to create static data visualizations using Matplotlib and Seaborn to explore data and present findings.", resources: [{ name: "Matplotlib Tutorial", url: "https://matplotlib.org/stable/tutorials/index.html" }, { name: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html" }] },
        ],
      },
      {
        title: "Business Intelligence (BI) and Visualization Tools",
        points: [
          { text: "Learn to use a leading BI tool like Tableau or Power BI to create interactive dashboards and compelling data visualizations.", resources: [{ name: "Tableau Training", url: "https://www.tableau.com/learn/training" }, { name: "Power BI Guided Learning", url: "https://learn.microsoft.com/en-us/power-bi/guided-learning/" }] },
          { text: "Understand the principles of effective data visualization to communicate insights clearly and effectively.", resources: [{ name: "Fundamentals of Data Visualization", url: "https://clauswilke.com/dataviz/" }] },
        ],
      },
      {
        title: "Communication and Storytelling",
        points: [
          { text: "Learn how to interpret your findings and translate them into actionable business insights.", resources: [] },
          { text: "Develop your presentation skills to effectively communicate your analysis to both technical and non-technical stakeholders.", resources: [] },
          { text: "Master the art of data storytelling to create a compelling narrative around your data that drives decision-making.", resources: [{ name: "Storytelling with Data", url: "http://www.storytellingwithdata.com/blog" }] },
        ],
      },
      {
        title: "Domain Knowledge",
        points: [
          { text: "Understand the importance of domain knowledge (e.g., in finance, marketing, healthcare) to conduct meaningful analysis.", resources: [] },
          { text: "Learn how to apply your data analysis skills to solve specific problems within a particular industry.", resources: [] },
        ],
      },
    ],
    assignments: [
        { title: "Sales Data Analysis in SQL", description: "Given a sample database of sales transactions, write SQL queries to find the total revenue per product, the top 5 customers by sales, and the best-selling product in each month." },
        { title: "Data Cleaning with Pandas", description: "Take a messy CSV file with missing values and inconsistent formatting. Use the Python Pandas library to clean the data, handle missing values, and standardize the formats into a clean, usable dataset." },
        { title: "Create a BI Dashboard", description: "Using Tableau or Power BI, connect to a sample dataset and build an interactive dashboard with at least three different charts that visualizes key insights from the data." }
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Build applications for iOS and Android using modern cross-platform frameworks.",
    category: "Job Roles",
    subCategory: "Web & UI",
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
    assignments: [
        { title: "Multi-Screen App", description: "Build a simple two-screen app using either React Native or Flutter. The first screen should have a button that navigates to the second screen, passing a piece of data to be displayed." },
        { title: "Quote of the Day App", description: "Create an app that fetches a random quote from a public API and displays it. Include a button to fetch a new quote." },
        { title: "Basic Contact List", description: "Design an app that displays a list of contacts (from a hardcoded array). Tapping on a contact should navigate to a detail screen showing more information about that person." }
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Learn the practices and tools to automate and streamline the software development lifecycle.",
    category: "Job Roles",
    subCategory: "DevOps & Cloud",
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
    assignments: [
        { title: "Dockerize an Application", description: "Take a simple web application (e.g., a Node.js or Python app) and write a Dockerfile to containerize it. Build the image and run it locally." },
        { title: "Simple CI Pipeline", description: "Using GitHub Actions, create a basic Continuous Integration (CI) pipeline for a project. The pipeline should trigger on a push, install dependencies, and run tests." },
        { title: "Automated Backup Script", description: "Write a Bash or Python script that creates a compressed archive of a specified directory and saves it to a backup folder with a timestamp in the filename." }
    ]
  },
  {
    id: "front-end-developer",
    title: "Front-End Developer",
    description: "Learn to build beautiful and interactive user interfaces for the web.",
    category: "Job Roles",
    subCategory: "Web & UI",
    topics: [
      {
        title: "Core Web Technologies",
        points: [
            { text: "Master HTML for structuring web pages. This includes understanding tags, attributes, and the overall document structure.", resources: [{ name: "HTML Tutorial", url: "https://www.w3schools.com/html/" }, { name: "MDN HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" }] },
            { text: "Learn CSS for styling web pages. This covers everything from colors and fonts to complex layouts and animations.", resources: [{ name: "CSS Tutorial", url: "https://www.w3schools.com/css/" }, { name: "MDN CSS First Steps", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" }] },
            { text: "Understand JavaScript for adding interactivity. Learn the fundamentals of the language to bring your web pages to life.", resources: [{ name: "JavaScript Tutorial", url: "https://www.w3schools.com/js/" }, { name: "MDN JavaScript basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" }] },
        ],
      },
      {
        title: "Advanced CSS and Layout",
        points: [
            { text: "Learn modern layout techniques with Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts.", resources: [{ name: "CSS Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }, { name: "CSS Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }] },
            { text: "Master responsive design to ensure your websites look great on all devices, from mobile phones to desktops.", resources: [{ name: "Responsive Design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" }] },
            { text: "Explore CSS preprocessors like Sass or LESS to write more maintainable and powerful CSS with features like variables, nesting, and mixins.", resources: [{ name: "Sass Basics", url: "https://sass-lang.com/guide" }] },
        ],
      },
      {
        title: "JavaScript Deep Dive",
        points: [
          { text: "Grasp core JavaScript concepts like scope, closures, and the 'this' keyword to write more predictable and robust code.", resources: [{ name: "JavaScript Scope", url: "https://www.w3schools.com/js/js_scope.asp" }] },
          { text: "Learn how to manipulate the Document Object Model (DOM) to dynamically update the content and structure of your web pages.", resources: [{ name: "DOM Introduction", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }] },
          { text: "Understand asynchronous JavaScript using Promises and async/await to handle operations like API calls without blocking the main thread.", resources: [{ name: "Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" }] },
        ],
      },
      {
        title: "Frameworks and Libraries",
        points: [
            { text: "Learn a modern front-end framework like React (the most popular), Angular, or Vue to build complex, component-based user interfaces.", resources: [{ name: "React", url: "https://reactjs.org/" }, { name: "Angular", url: "https://angular.io/" }, { name: "Vue.js", url: "https://vuejs.org/" }] },
            { text: "Explore component libraries and UI frameworks like Material-UI, Ant Design, or ShadCN UI to quickly build beautiful and consistent UIs.", resources: [{ name: "ShadCN UI", url: "https://ui.shadcn.com/" }] },
            { text: "Get comfortable with a CSS framework like Bootstrap or Tailwind CSS to streamline your styling workflow.", resources: [{ name: "Bootstrap", url: "https://getbootstrap.com/" }, { name: "Tailwind CSS", url: "https://tailwindcss.com/" }] },
        ],
      },
      {
        title: "Build Tools and Tooling",
        points: [
            { text: "Understand the role of package managers like npm or Yarn for managing project dependencies.", resources: [{ name: "npm Docs", url: "https://docs.npmjs.com/" }] },
            { text: "Learn to use build tools and bundlers like Vite or Webpack to compile, bundle, and optimize your code for production.", resources: [{ name: "Vite", url: "https://vitejs.dev/" }, { name: "Webpack", url: "https://webpack.js.org/" }] },
            { text: "Use linters like ESLint and formatters like Prettier to enforce code quality and maintain a consistent style across your projects.", resources: [{ name: "ESLint", url: "https://eslint.org/" }, { name: "Prettier", url: "https://prettier.io/" }] },
        ],
      },
      {
        title: "Web Performance and Accessibility",
        points: [
            { text: "Learn techniques for optimizing website performance, such as code splitting, lazy loading, and image optimization.", resources: [{ name: "Web Performance", url: "https://developer.mozilla.org/en-US/docs/Learn/Performance" }] },
            { text: "Understand the importance of web accessibility (a11y) and learn how to write semantic HTML and use ARIA attributes to make your sites usable for everyone.", resources: [{ name: "Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility" }] },
        ],
      },
    ],
    assignments: [
        { title: "Responsive Landing Page", description: "Build a single landing page for a fictional product from scratch using HTML and CSS. It must be fully responsive on mobile, tablet, and desktop screens using Flexbox or Grid." },
        { title: "JavaScript Quiz App", description: "Create a multiple-choice quiz using vanilla JavaScript. The app should display questions, track the user's score, and show the final result at the end." },
        { title: "React API Data Display", description: "Build a React application that fetches data from a public API (e.g., a movie or character API) and displays the results in a nicely styled grid or list." }
    ]
  },
  {
    id: "back-end-developer",
    title: "Back-End Developer",
    description: "Learn to build the server-side logic and infrastructure that powers web applications.",
    category: "Job Roles",
    subCategory: "Core Software Development",
    topics: [
        {
            title: "Choose a Language and Framework",
            points: [
                { text: "Select a primary back-end programming language. Popular choices include Node.js (JavaScript), Python, Java, Ruby, Go, and PHP. Your choice will influence the frameworks and libraries you use.", resources: [{ name: "Back-End Developer Languages", url: "https://www.geeksforgeeks.org/best-backend-web-development-frameworks/" }] },
                { text: "Learn a corresponding framework for your chosen language to streamline development. Examples: Express for Node.js, Django or Flask for Python, Spring for Java, Ruby on Rails for Ruby.", resources: [{ name: "Express.js", url: "https://expressjs.com/" }, { name: "Django", url: "https://www.djangoproject.com/" }, { name: "Spring", url: "https://spring.io/" }] },
            ],
        },
        {
            title: "Databases",
            points: [
                { text: "Understand the fundamentals of relational databases (SQL) and learn how to model data with tables, columns, and relationships.", resources: [{ name: "SQL Tutorial", url: "https://www.w3schools.com/sql/" }] },
                { text: "Gain practical experience with a specific SQL database like PostgreSQL or MySQL. Learn to write queries to create, read, update, and delete data (CRUD).", resources: [{ name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" }] },
                { text: "Explore non-relational (NoSQL) databases like MongoDB to understand document-based data models, which are often used in modern web applications.", resources: [{ name: "MongoDB University", url: "https://learn.mongodb.com/" }] },
                { text: "Learn about Object-Relational Mapping (ORM) or Object-Document Mapping (ODM) libraries (e.g., Sequelize for Node.js, SQLAlchemy for Python) to interact with databases using your programming language.", resources: [{ name: "Sequelize", url: "https://sequelize.org/" }, { name: "SQLAlchemy", url: "https://www.sqlalchemy.org/" }] },
            ],
        },
        {
            title: "APIs (Application Programming Interfaces)",
            points: [
                { text: "Learn the principles of REST (Representational State Transfer) to design clean, scalable, and predictable APIs.", resources: [{ name: "What is REST?", url: "https://www.redhat.com/en/topics/api/what-is-rest-api" }] },
                { text: "Master the use of standard HTTP methods (GET, POST, PUT, DELETE) to represent CRUD operations and understand HTTP status codes for communicating request outcomes.", resources: [{ name: "HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" }] },
                { text: "Build API endpoints (routes) that your front-end application or other services can use to access and manipulate data.", resources: [] },
                { text: "Explore alternative API architectures like GraphQL, which allows clients to request exactly the data they need.", resources: [{ name: "GraphQL", url: "https://graphql.org/" }] },
            ],
        },
        {
            title: "Authentication and Security",
            points: [
                { text: "Implement secure user registration and login systems. Learn to hash and salt user passwords to protect them from breaches.", resources: [{ name: "Password Storage", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" }] },
                { text: "Understand authentication strategies like session-based authentication (using cookies) and token-based authentication (using JSON Web Tokens - JWT).", resources: [{ name: "JWT Introduction", url: "https://jwt.io/introduction" }] },
                { text: "Learn how to create protected routes that require users to be authenticated and authorized to access specific resources.", resources: [] },
                { text: "Familiarize yourself with common web security vulnerabilities (like SQL injection, XSS) and how to prevent them.", resources: [{ name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }] },
            ],
        },
        {
            title: "Deployment and DevOps",
            points: [
                { text: "Learn to use containerization tools like Docker to package your application and its dependencies into a portable container.", resources: [{ name: "Docker Overview", url: "https://docs.docker.com/get-started/overview/" }] },
                { text: "Get comfortable with a cloud hosting platform like AWS (Amazon Web Services), Google Cloud Platform (GCP), or Heroku to deploy your back-end application.", resources: [{ name: "Deploying with Heroku", url: "https://devcenter.heroku.com/start" }] },
                { text: "Understand the basics of setting up a web server like Nginx or Apache to act as a reverse proxy for your application.", resources: [{ name: "Nginx Beginner's Guide", url: "https://nginx.org/en/docs/beginners_guide.html" }] },
                { text: "Learn about Continuous Integration and Continuous Deployment (CI/CD) to automate the process of testing and deploying your code.", resources: [{ name: "What is CI/CD?", url: "https://aws.amazon.com/devops/what-is-cicd/" }] },
            ],
        },
    ],
    assignments: [
        { title: "URL Shortener API", description: "Using Node.js/Express or Python/Flask, build a REST API that takes a long URL and returns a unique short URL. When a user visits the short URL, they should be redirected to the original long URL." },
        { title: "Database-Backed Blog API", description: "Create a REST API for a blog. It should have endpoints for creating, reading, updating, and deleting posts. All post data must be stored in a SQL database like PostgreSQL." },
        { title: "Basic User Authentication", description: "Build an API with two endpoints: `/register` and `/login`. The register endpoint should save a new user with a hashed password to a database. The login endpoint should authenticate the user and return a JWT." }
    ]
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    description: "Learn to manage and maintain databases to ensure data is secure, accessible, and performs efficiently.",
    category: "Job Roles",
    subCategory: "Data & AI",
    topics: [
      {
        title: "Database Fundamentals",
        points: [
          { text: "Understand the core concepts of relational databases, including tables, keys, and relationships, and how they differ from non-relational (NoSQL) models.", resources: [{ name: "Database Concepts", url: "https://www.tutorialspoint.com/dbms/dbms_overview.htm" }] },
          { text: "Learn data modeling techniques to design efficient and logical database structures.", resources: [{ name: "Data Modeling", url: "https://www.vertabelo.com/blog/data-modeling-basics/" }] },
          { text: "Master database normalization (1NF, 2NF, 3NF) to organize data, reduce redundancy, and improve data integrity.", resources: [{ name: "Database Normalization", url: "https://www.guru99.com/database-normalization.html" }] },
        ],
      },
      {
        title: "Proficiency in SQL",
        points: [
          { text: "Become an expert in writing complex SQL queries, including advanced joins, subqueries, and window functions.", resources: [{ name: "Advanced SQL", url: "https://www.sql-tutorial.ru/en/book" }] },
          { text: "Learn Data Definition Language (DDL) to create and manage database objects and Data Manipulation Language (DML) for data handling.", resources: [{ name: "SQL DDL and DML", url: "https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/" }] },
          { text: "Write and optimize stored procedures and triggers to automate tasks and enforce business rules at the database level.", resources: [{ name: "Stored Procedures", url: "https://www.postgresqltutorial.com/postgresql-stored-procedures/" }] },
        ],
      },
      {
        title: "Database Management Systems (DBMS)",
        points: [
          { text: "Gain deep knowledge of a major relational DBMS like PostgreSQL, MySQL, SQL Server, or Oracle, including their specific architecture and features.", resources: [{ name: "PostgreSQL", url: "https://www.postgresql.org/" }, { name: "MySQL", url: "https://www.mysql.com/" }] },
          { text: "Get familiar with a leading NoSQL database like MongoDB or Cassandra to handle unstructured data and large-scale applications.", resources: [{ name: "MongoDB", url: "https://www.mongodb.com/" }, { name: "Cassandra", url: "https://cassandra.apache.org/_/index.html" }] },
        ],
      },
      {
        title: "Backup and Recovery",
        points: [
          { text: "Design and implement robust backup strategies (full, differential, incremental) to prevent data loss.", resources: [{ name: "Backup and Recovery", url: "https://www.sqlshack.com/sql-server-backup-and-restore-strategies/" }] },
          { text: "Master database recovery techniques to restore data quickly and efficiently in case of failure.", resources: [{ name: "Recovery Models", url: "https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/recovery-models-sql-server" }] },
          { text: "Regularly test your backup and recovery procedures to ensure they are reliable and meet business requirements (RTO/RPO).", resources: [] },
        ],
      },
      {
        title: "Database Security",
        points: [
          { text: "Implement strong user authentication and access control measures to protect sensitive data.", resources: [{ name: "Database Security", url: "https://www.geeksforgeeks.org/database-security/" }] },
          { text: "Learn to manage database permissions and roles to enforce the principle of least privilege.", resources: [{ name: "Database Roles", url: "https://www.postgresql.org/docs/current/database-roles.html" }] },
          { text: "Conduct regular security audits to identify and address vulnerabilities. Learn about data encryption for data at rest and in transit.", resources: [{ name: "OWASP Database Security", url: "https://owasp.org/www-community/Database_Security_Cheat_Sheet" }] },
        ],
      },
      {
        title: "Performance Tuning and Optimization",
        points: [
          { text: "Learn how to read and interpret query execution plans to identify performance bottlenecks.", resources: [{ name: "Query Optimization", url: "https://www.red-gate.com/simple-talk/databases/sql-server/performance-sql-server/query-optimization-techniques-in-sql-server-the-basics/" }] },
          { text: "Master the art of index management—creating, using, and maintaining indexes to speed up query performance.", resources: [{ name: "Database Indexes", url: "https://www.essentialsql.com/what-is-a-database-index/" }] },
          { text: "Proactively monitor database performance using system views and specialized monitoring tools. Learn how to configure server parameters for optimal efficiency.", resources: [] },
        ],
      },
      {
        title: "Cloud Database Management",
        points: [
          { text: "Gain experience with managed cloud database services like Amazon RDS, Azure SQL Database, or Google Cloud SQL.", resources: [{ name: "Amazon RDS", url: "https://aws.amazon.com/rds/" }, { name: "Google Cloud SQL", url: "https://cloud.google.com/sql" }] },
          { text: "Understand the architecture and benefits of Database-as-a-Service (DBaaS).", resources: [{ name: "What is DBaaS?", url: "https://www.oracle.com/database/what-is-dbaas/" }] },
          { text: "Learn to manage databases in a cloud environment, focusing on scalability, high availability, and disaster recovery.", resources: [] },
        ],
      },
    ],
    assignments: [
        { title: "Design a University Database", description: "Create a data model (ER diagram) for a university system, including tables for Students, Courses, and Instructors. Define primary keys, foreign keys, and relationships. Write the SQL `CREATE TABLE` statements for your design." },
        { title: "Backup and Restore Simulation", description: "Using a local PostgreSQL or MySQL instance, create a sample database with a few tables and some data. Perform a full backup of the database. Then, delete a table and practice restoring the database from your backup file." },
        { title: "Query Optimization Challenge", description: "Given a sample database with a poorly performing query, use the `EXPLAIN` command to analyze its execution plan. Then, add an appropriate index to the table to improve the query's performance and verify the improvement." }
    ]
  },
  {
    id: "git-version-control",
    title: "Git Version Control",
    description: "Master Git for tracking changes in your code and collaborating with others.",
    category: "Programming Languages",
    subCategory: "Scripting & Automation",
    topics: [
        {
            title: "Git Basics",
            points: [
                { text: "Understand what version control is and why Git is the most popular system for it. Learn about the difference between centralized and distributed version control.", resources: [{ name: "About Version Control", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }] },
                { text: "Install Git on your operating system and perform initial configuration of your user name and email.", resources: [{ name: "Getting Started - Installing Git", url: "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" }] },
                { text: "Create your first local repository with `git init` and learn the fundamental workflow of staging changes with `git add` and committing them with `git commit`.", resources: [{ name: "Git Basics - Getting a Git Repository", url: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository" }] },
                { text: "Use `git status` to check the state of your working directory and staging area, and `git log` to view the history of commits.", resources: [{ name: "Git Basics - Recording Changes", url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" }] },
            ],
        },
        {
            title: "Branching and Merging",
            points: [
                { text: "Grasp the concept of branching, which allows you to diverge from the main line of development and work on new features or fixes in isolation.", resources: [{ name: "Git Branching - Branches in a Nutshell", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" }] },
                { text: "Learn how to create new branches with `git branch`, switch between them with `git checkout` (or the newer `git switch`), and merge changes from one branch into another with `git merge`.", resources: [{ name: "Basic Branching and Merging", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" }] },
                { text: "Understand what merge conflicts are, why they happen, and learn the process for manually resolving them when they occur.", resources: [{ name: "Basic Merge Conflicts", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts" }] },
            ],
        },
        {
            title: "Working with Remote Repositories",
            points: [
                { text: "Learn how to connect your local repository to a remote one (like on GitHub or GitLab) using `git remote add`.", resources: [{ name: "Working with Remotes", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes" }] },
                { text: "Use `git clone` to create a local copy of a remote repository on your machine.", resources: [{ name: "Cloning an Existing Repository", url: "https://git-scm.com/book/en-v2/Git-Basics-Getting-a-Git-Repository#_cloning_an_existing_repository" }] },
                { text: "Use `git push` to upload your local commits to a remote repository, and `git pull` (which is a `git fetch` followed by a `git merge`) to download and integrate changes from a remote repository.", resources: [{ name: "Pushing to Your Remotes", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_pushing_to_your_remotes" }, { name: "Fetching and Pulling", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_fetching_and_pulling_from_your_remotes" }] },
            ],
        },
        {
            title: "Inspecting History and Undoing Changes",
            points: [
                { text: "Learn advanced `git log` options to view commit history in various formats, filter by author or date, and visualize the branch history.", resources: [{ name: "Viewing the Commit History", url: "https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History" }] },
                { text: "Use `git diff` to see the exact changes between commits, branches, or your working directory and the staging area.", resources: [{ name: "git-diff Documentation", url: "https://git-scm.com/docs/git-diff" }] },
                { text: "Understand how to undo changes. Use `git checkout -- <file>` to discard changes in your working directory, `git reset` to unstage files or reset a branch to a previous commit, and `git revert` to create a new commit that undoes the changes of a previous one.", resources: [{ name: "Undoing Things", url: "https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things" }] },
            ],
        },
        {
            title: "Advanced Git",
            points: [
                { text: "Learn to use `git rebase` as an alternative to merging for integrating changes, allowing you to maintain a cleaner, more linear project history.", resources: [{ name: "Git Branching - Rebasing", url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing" }] },
                { text: "Use `git stash` to temporarily save changes that are not ready to be committed, so you can switch branches and work on something else.", resources: [{ name: "Git Tools - Stashing and Cleaning", url: "https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning" }] },
                { text: "Learn to use `git tag` to create permanent markers for specific commits, typically used for version releases.", resources: [{ name: "Git Basics - Tagging", url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging" }] },
            ],
        },
    ],
    assignments: [
        { title: "Create and Manage a Repository", description: "Initialize a new Git repository for a project, create a file, stage it, and commit it with a message. Then, create a new branch, make a change, commit it, and merge it back into the main branch." },
        { title: "Collaborate with a Remote Repository", description: "Create a repository on GitHub. Push your local repository to GitHub. Then, make a change on the GitHub website and pull that change back down to your local machine." },
        { title: "Fix a Mistake", description: "In your local repository, make a commit that you 'regret'. Then, use `git revert` to create a new commit that undoes the changes from the previous one, preserving the project history." }
    ]
  },
  {
    id: "sql",
    title: "SQL",
    description: "Learn the standard language for managing and querying relational databases.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [
      {
        title: "Introduction to SQL and Databases",
        points: [
          { text: "Understand the role of SQL as the standard language for relational database management systems (RDBMS).", resources: [{ name: "What is SQL?", url: "https://www.codecademy.com/articles/what-is-sql" }] },
          { text: "Learn about the core concepts of relational databases: tables, rows (records), columns (attributes), primary keys, and foreign keys.", resources: [{ name: "Relational Database Concepts", url: "https://www.oracle.com/database/what-is-a-relational-database/" }] },
          { text: "Set up a local SQL database environment (like PostgreSQL or SQLite) or use an online SQL playground to practice your queries.", resources: [{ name: "SQL Fiddle", url: "http://sqlfiddle.com/" }, { name: "DB Fiddle", url: "https://www.db-fiddle.com/" }] },
        ],
      },
      {
        title: "Basic Queries with SELECT",
        points: [
          { text: "Master the `SELECT` statement to retrieve data from one or more columns in a table.", resources: [{ name: "SQL SELECT Statement", url: "https://www.w3schools.com/sql/sql_select.asp" }] },
          { text: "Use `WHERE` to filter records based on specific conditions, allowing you to fetch only the data you need.", resources: [{ name: "SQL WHERE Clause", url: "https://www.w3schools.com/sql/sql_where.asp" }] },
          { text: "Learn to combine filtering conditions using `AND`, `OR`, and `NOT` to create more complex and precise queries.", resources: [{ name: "SQL AND, OR and NOT Operators", url: "https://www.w3schools.com/sql/sql_and_or.asp" }] },
        ],
      },
      {
        title: "Sorting and Limiting Results",
        points: [
          { text: "Use `ORDER BY` to sort the results of your query in ascending (ASC) or descending (DESC) order based on one or more columns.", resources: [{ name: "SQL ORDER BY Keyword", url: "https://www.w3schools.com/sql/sql_orderby.asp" }] },
          { text: "Learn to use `LIMIT` (or `TOP` / `FETCH FIRST` in other SQL dialects) to restrict the number of rows returned by your query.", resources: [{ name: "SQL LIMIT Clause", url: "https://www.w3schools.com/sql/sql_top.asp" }] },
        ],
      },
      {
        title: "Aggregate Functions",
        points: [
          { text: "Understand how to use aggregate functions to perform a calculation on a set of values and return a single summary value.", resources: [{ name: "SQL Aggregate Functions", url: "https://www.datacamp.com/tutorial/sql-aggregate-functions" }] },
          { text: "Learn to use `COUNT` to count the number of rows, `SUM` to get the total sum of a numeric column, and `AVG` to calculate the average.", resources: [{ name: "SQL COUNT, AVG and SUM Functions", url: "https://www.w3schools.com/sql/sql_count_avg_sum.asp" }] },
          { text: "Use `MIN` and `MAX` to find the smallest and largest values in a column, respectively.", resources: [{ name: "SQL MIN and MAX Functions", url: "https://www.w3schools.com/sql/sql_min_max.asp" }] },
        ],
      },
      {
        title: "Grouping Data",
        points: [
          { text: "Master the `GROUP BY` statement to group rows that have the same values in specified columns into summary rows.", resources: [{ name: "SQL GROUP BY Statement", url: "https://www.w3schools.com/sql/sql_groupby.asp" }] },
          { text: "Learn to use `HAVING` to filter groups based on conditions, which is like a `WHERE` clause for `GROUP BY`.", resources: [{ name: "SQL HAVING Clause", url: "https://www.w3schools.com/sql/sql_having.asp" }] },
        ],
      },
      {
        title: "Joining Tables",
        points: [
          { text: "Understand the concept of joining tables to combine rows from two or more tables based on a related column between them.", resources: [{ name: "SQL Joins", url: "https://www.w3schools.com/sql/sql_join.asp" }] },
          { text: "Learn `INNER JOIN` to retrieve records that have matching values in both tables.", resources: [{ name: "SQL INNER JOIN", url: "https://www.w3schools.com/sql/sql_join_inner.asp" }] },
          { text: "Use `LEFT JOIN` (or `LEFT OUTER JOIN`) to retrieve all records from the left table, and the matched records from the right table. The result is NULL from the right side if there is no match.", resources: [{ name: "SQL LEFT JOIN", url: "https://www.w3schools.com/sql/sql_join_left.asp" }] },
          { text: "Use `RIGHT JOIN` (or `RIGHT OUTER JOIN`) to retrieve all records from the right table, and the matched records from the left table. The result is NULL from the left side when there is no match.", resources: [{ name: "SQL RIGHT JOIN", url: "https://www.w3schools.com/sql/sql_join_right.asp" }] },
          { text: "Learn `FULL OUTER JOIN` to return all records when there is a match in either left or right table records.", resources: [{ name: "SQL FULL OUTER JOIN", url: "https://www.w3schools.com/sql/sql_join_full.asp" }] },
        ],
      },
      {
        title: "Subqueries and CTEs",
        points: [
          { text: "Learn to write subqueries (a query nested inside another query) to perform more complex data retrieval.", resources: [{ name: "SQL Subqueries", url: "https://www.essentialsql.com/sql-subquery/" }] },
          { text: "Understand Common Table Expressions (CTEs) using the `WITH` clause to create temporary result sets that you can reference within another SQL statement, improving readability and organization.", resources: [{ name: "SQL WITH Clause (CTEs)", url: "https://www.sqlservertutorial.net/sql-server-basics/sql-server-cte/" }] },
        ],
      },
      {
        title: "Data Manipulation (DML)",
        points: [
          { text: "Use the `INSERT INTO` statement to add new rows of data to a table.", resources: [{ name: "SQL INSERT INTO Statement", url: "https://www.w3schools.com/sql/sql_insert.asp" }] },
          { text: "Learn the `UPDATE` statement to modify existing records in a table.", resources: [{ name: "SQL UPDATE Statement", url: "https://www.w3schools.com/sql/sql_update.asp" }] },
          { text: "Master the `DELETE` statement to remove existing records from a table.", resources: [{ name: "SQL DELETE Statement", url: "https://www.w3schools.com/sql/sql_delete.asp" }] },
        ],
      },
      {
        title: "Data Definition (DDL)",
        points: [
          { text: "Learn `CREATE TABLE` to create a new table in your database, defining its columns and data types.", resources: [{ name: "SQL CREATE TABLE", url: "https://www.w3schools.com/sql/sql_create_table.asp" }] },
          { text: "Use `ALTER TABLE` to add, delete, or modify columns in an existing table.", resources: [{ name: "SQL ALTER TABLE", url: "https://www.w3schools.com/sql/sql_alter.asp" }] },
          { text: "Understand `DROP TABLE` to remove a table from the database.", resources: [{ name: "SQL DROP TABLE", url: "https://www.w3schools.com/sql/sql_drop_table.asp" }] },
          { text: "Learn about constraints like `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY`, and `CHECK` to enforce rules on the data in a table.", resources: [{ name: "SQL Constraints", url: "https://www.w3schools.com/sql/sql_constraints.asp" }] },
        ],
      },
      {
        title: "Advanced SQL",
        points: [
          { text: "Explore window functions (like `ROW_NUMBER`, `RANK`, `LEAD`, `LAG`) that perform calculations across a set of table rows that are somehow related to the current row.", resources: [{ name: "SQL Window Functions", url: "https://learnsql.com/blog/sql-window-functions-tutorial/" }] },
          { text: "Understand what database transactions are and learn the importance of `COMMIT` and `ROLLBACK` for ensuring data integrity.", resources: [{ name: "SQL Transactions", url: "https://www.geeksforgeeks.org/sql-transaction/" }] },
          { text: "Learn about database indexing and how `CREATE INDEX` can significantly speed up the performance of your queries.", resources: [{ name: "SQL Indexing", url: "https://www.tutorialspoint.com/sql/sql-indexes.htm" }] },
        ],
      },
    ],
    assignments: [
        { title: "Query a Sample Database", description: "Given a sample database (e.g., of customers and orders), write SQL queries to find: all customers from a specific country, the total number of orders, and the customer who has spent the most money." },
        { title: "Create and Populate Tables", description: "Write the SQL `CREATE TABLE` statements for a 'Products' table and a 'Categories' table. The Products table should have a foreign key that links to the Categories table. Then, write `INSERT` statements to add a few sample products and categories." },
        { title: "Analyze Data with GROUP BY", description: "Using a sample database, write a query that uses `GROUP BY` and an aggregate function (like `COUNT` or `AVG`) to find the number of products in each category or the average product price per category." }
    ]
  },
  {
    id: "c",
    title: "C",
    description: "Learn the foundational C programming language, known for its performance and low-level memory access.",
    category: "Programming Languages",
    subCategory: "Systems & Embedded Programming",
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
    assignments: [
        { title: "String Reverser", description: "Write a C function that takes a string (a character array) as input and reverses it in place without creating a new array." },
        { title: "Simple Linked List", description: "Implement a basic singly linked list using structs and pointers. Write functions to add a new node to the end of the list and to print all the values in the list." },
        { title: "File Word Count", description: "Write a program that opens a text file, reads its contents, and counts the total number of words in the file. A word can be defined as any sequence of characters separated by whitespace." }
    ]
  },
  {
    id: "r",
    title: "R",
    description: "Learn R, the premier language for statistical computing, data analysis, and graphical representation.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [
      {
        title: "Foundations of R (Beginner)",
        points: [
          { text: "Install R and RStudio, the premier integrated development environment (IDE) that makes working with R much more efficient.", resources: [{ name: "Install R", url: "https://cran.r-project.org/" }, { name: "Install RStudio", url: "https://posit.co/download/rstudio-desktop/" }] },
          { text: "Familiarize yourself with the RStudio interface, including the console, script editor, environment pane, and plots pane.", resources: [{ name: "RStudio IDE", url: "https://r-for-beginners.com/rstudio-ide" }] },
          { text: "Learn to execute basic commands and run scripts.", resources: [{ name: "R Basic Syntax", url: "https://www.tutorialspoint.com/r/r_basic_syntax.htm" }] },
          { text: "Understand variables and R's main data types, including numeric, character, and logical.", resources: [{ name: "R Data Types", url: "https://www.w3schools.com/r/r_data_types.asp" }] },
          { text: "Master R's fundamental data structures: vectors, lists, matrices, arrays, and factors.", resources: [{ name: "R Data Structures", url: "https://www.datamentor.io/r-programming/data-structures/" }] },
          { text: "Learn to use arithmetic, logical, and relational operators to perform calculations and comparisons.", resources: [{ name: "R Operators", url: "https://www.w3schools.com/r/r_operators.asp" }] },
        ],
      },
      {
        title: "Control Flow and Functions",
        points: [
          { text: "Control program execution with conditional statements like `if`, `else`, and `ifelse`.", resources: [{ name: "R if...else", url: "https://www.w3schools.com/r/r_if_else.asp" }] },
          { text: "Learn to use `for`, `while`, and `repeat` loops to iterate and perform repetitive tasks.", resources: [{ name: "R Loops", url: "https://www.w3schools.com/r/r_for_loop.asp" }] },
          { text: "Use `break` and `next` to control loop execution.", resources: [{ name: "R break/next", url: "https://www.w3schools.com/r/r_break.asp" }] },
          { text: "Write your own custom functions to make your code modular. Understand function arguments and return values.", resources: [{ name: "R Functions", url: "https://www.w3schools.com/r/r_functions.asp" }] },
        ],
      },
      {
        title: "Data Input & Output",
        points: [
          { text: "Learn to read data from various file formats like CSV, Excel, and JSON.", resources: [] },
          { text: "Use functions like `read.csv()`, `read.table()`, `readxl::read_excel()`, and `jsonlite::fromJSON()` to import data.", resources: [{ name: "Data Import", url: "https://r-coder.com/data-import-r/" }] },
          { text: "Learn to save your data into different formats using functions like `write.csv()`.", resources: [{ name: "Data Export", url: "https://r-coder.com/data-export-r/" }] },
        ],
      },
      {
        title: "Data Manipulation (Intermediate)",
        points: [
          { text: "Master the use of Data Frames and Tibbles, the primary data structures for analysis in R.", resources: [{ name: "R Data Frames", url: "https://www.w3schools.com/r/r_data_frames.asp" }] },
          { text: "Learn the core verbs of the `dplyr` package for data manipulation: `filter()`, `select()`, `mutate()`, `arrange()`, `summarise()`, and `group_by()`.", resources: [{ name: "dplyr Tutorial", url: "https://www.datacamp.com/tutorial/dplyr-tutorial-for-beginners" }] },
          { text: "Use the `tidyr` package to reshape your data with functions like `pivot_longer()` and `pivot_wider()`.", resources: [{ name: "Tidy Data", url: "https://tidyr.tidyverse.org/" }] },
          { text: "Clean your data by handling missing values (`na.omit()`, `is.na()`) and performing string operations with `stringr`.", resources: [{ name: "stringr", url: "https://stringr.tidyverse.org/" }] },
          { text: "Handle date and time data effectively using the `lubridate` package.", resources: [{ name: "lubridate", url: "https://lubridate.tidyverse.org/" }] },
        ],
      },
      {
        title: "Data Visualization",
        points: [
          { text: "Learn the basics of plotting with R's built-in plotting functions.", resources: [{ name: "Base R Plotting", url: "https://www.datacamp.com/tutorial/r-base-plot" }] },
          { text: "Master `ggplot2` and its 'Grammar of Graphics' to create complex, layered visualizations.", resources: [{ name: "ggplot2", url: "https://ggplot2.tidyverse.org/" }] },
          { text: "Learn to use various geoms like `geom_point()`, `geom_bar()`, and `geom_histogram()`, and facet your plots with `facet_wrap()`.", resources: [{ name: "ggplot2 Geoms", url: "https://ggplot2.tidyverse.org/reference/index.html#section-geoms" }] },
        ],
      },
      {
        title: "Statistical Analysis & ML (Advanced)",
        points: [
          { text: "Calculate descriptive statistics to summarize your data.", resources: [{ name: "Descriptive Statistics", url: "http://www.sthda.com/english/articles/2-r-basics/28-r-basics-easy-and-fast/" }] },
          { text: "Perform hypothesis testing, including t-tests and chi-square tests, and conduct Analysis of Variance (ANOVA).", resources: [{ name: "Hypothesis Testing", url: "https://www.datacamp.com/tutorial/hypothesis-testing-in-r" }] },
          { text: "Build linear and logistic regression models to understand relationships in your data.", resources: [{ name: "Linear Regression", url: "http://www.sthda.com/english/articles/40-regression-analysis/167-simple-linear-regression-in-r/" }] },
          { text: "Get introduced to machine learning in R using frameworks like `caret` or `tidymodels`.", resources: [{ name: "tidymodels", url: "https://www.tidymodels.org/" }] },
          { text: "Build supervised models (Random Forest, SVM) and unsupervised models (k-means clustering, PCA).", resources: [{ name: "Machine Learning in R", url: "https://www.datacamp.com/tutorial/machine-learning-in-r" }] },
          { text: "Evaluate your models using metrics like the confusion matrix, ROC curves, and AUC.", resources: [{ name: "Model Evaluation", url: "https://www.datacamp.com/tutorial/roc-curves-and-auc-r" }] },
        ],
      },
      {
        title: "Specializations & Projects",
        points: [
          { text: "Build interactive web applications directly from your code using the `Shiny` package.", resources: [{ name: "Shiny", url: "https://shiny.posit.co/" }] },
          { text: "Learn to create dynamic reports and documents with R Markdown and `knitr`.", resources: [{ name: "R Markdown", url: "https://rmarkdown.rstudio.com/" }] },
          { text: "Explore using R with big data technologies like Apache Spark via `sparklyr`.", resources: [{ name: "sparklyr", url: "https://spark.rstudio.com/" }] },
          { text: "Apply your skills to real-world datasets. Perform an Exploratory Data Analysis (EDA), build a predictive model, and create a data visualization dashboard.", resources: [{ name: "Kaggle", url: "https://www.kaggle.com/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Explore a Dataset with dplyr", description: "Using a built-in R dataset like `iris` or `mtcars`, use `dplyr` verbs to find the average measurement for each species/category, filter for specific conditions, and arrange the results." },
        { title: "Create a Custom Plot with ggplot2", description: "Choose a dataset and create a scatter plot or bar chart using `ggplot2`. Customize the plot by adding a title, changing axis labels, and applying a different color scheme." },
        { title: "Write a Data Cleaning Function", description: "Write an R function that takes a data frame as input and returns a cleaned version. The function should replace all missing values (NA) in a specific column with the mean or median of that column." }
    ]
  },
  {
    id: "java",
    title: "Java",
    description: "Learn the robust, object-oriented Java programming language, a mainstay in enterprise-level applications, Android development, and large-scale systems.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [
      {
        title: "Introduction to Java",
        points: [
          { text: "Understand the 'Write Once, Run Anywhere' philosophy of Java, thanks to the Java Virtual Machine (JVM). Learn its history and why it's a top choice for enterprise applications.", resources: [{ name: "What is Java?", url: "https://www.oracle.com/java/what-is-java/" }] },
          { text: "Set up your development environment by installing the Java Development Kit (JDK) and an Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse.", resources: [{ name: "Install Java JDK", url: "https://www.oracle.com/java/technologies/downloads/" }, { name: "IntelliJ IDEA", url: "https://www.jetbrains.com/idea/" }] },
          { text: "Compile and run your first 'Hello, World!' application to understand the basic syntax, the `public static void main(String[] args)` method, and the compilation process.", resources: [{ name: "Your First Java Program", url: "https://www.geeksforgeeks.org/java-hello-world-program/" }] },
        ],
      },
      {
        title: "Java Fundamentals",
        points: [
          { text: "Learn about primitive data types (e.g., `int`, `double`, `boolean`, `char`) for storing simple values and reference types for objects.", resources: [{ name: "Java Data Types", url: "https://www.w3schools.com/java/java_data_types.asp" }] },
          { text: "Understand how to declare and initialize variables. Learn about operators for performing arithmetic, relational, and logical operations.", resources: [{ name: "Variables", url: "https://www.w3schools.com/java/java_variables.asp" }, { name: "Operators", url: "https://www.w3schools.com/java/java_operators.asp" }] },
          { text: "Master control flow statements like `if-else`, `switch`, `for`, `while`, and `do-while` loops to make decisions and repeat actions in your code.", resources: [{ name: "Java If...Else", url: "https://www.w3schools.com/java/java_if_else.asp" }, { name: "Java Loops", url: "https://www.w3schools.com/java/java_while_loop.asp" }] },
        ],
      },
      {
        title: "Object-Oriented Programming (OOP) in Java",
        points: [
          { text: "Learn to define your own data types by creating classes. Understand how to instantiate objects from classes and the role of constructors.", resources: [{ name: "Java Classes/Objects", url: "https://www.w3schools.com/java/java_classes.asp" }] },
          { text: "Grasp the four pillars of OOP: Encapsulation (bundling data and methods), Inheritance (creating a new class from an existing one), Polymorphism (an object taking many forms), and Abstraction (hiding complex implementation details).", resources: [{ name: "OOP Concepts", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" }] },
          { text: "Understand how to use interfaces and abstract classes to define contracts and create flexible, extensible code designs.", resources: [{ name: "Interfaces", url: "https://www.w3schools.com/java/java_interface.asp" }, { name: "Abstract Classes", url: "https://www.w3schools.com/java/java_abstract.asp" }] },
        ],
      },
      {
        title: "The Collections Framework",
        points: [
          { text: "Learn to use the `List` interface and its implementations like `ArrayList` and `LinkedList` for ordered collections of elements.", resources: [{ name: "Java ArrayList", url: "https://www.w3schools.com/java/java_arraylist.asp" }] },
          { text: "Understand the `Set` interface and its implementations like `HashSet` for storing unique, unordered elements.", resources: [{ name: "Java HashSet", url: "https://www.w3schools.com/java/java_hashset.asp" }] },
          { text: "Explore the `Map` interface and its implementations like `HashMap` for storing key-value pairs, allowing for efficient data retrieval.", resources: [{ name: "Java HashMap", url: "https://www.w3schools.com/java/java_hashmap.asp" }] },
        ],
      },
      {
        title: "Exception Handling",
        points: [
          { text: "Learn to manage runtime errors gracefully using `try-catch` blocks to prevent your application from crashing.", resources: [{ name: "Java Try...Catch", url: "https://www.w3schools.com/java/java_try_catch.asp" }] },
          { text: "Understand the difference between checked exceptions (which must be handled) and unchecked exceptions (runtime errors).", resources: [{ name: "Checked vs. Unchecked Exceptions", url: "https://www.geeksforgeeks.org/checked-vs-unchecked-exceptions-in-java/" }] },
          { text: "Use the `finally` block to ensure that critical cleanup code (like closing a file or database connection) is always executed, whether an exception occurred or not.", resources: [] },
        ],
      },
      {
        title: "Java I/O",
        points: [
          { text: "Learn to read from and write to files using classes from the `java.io` package, such as `FileReader`, `FileWriter`, and the more modern `Files` and `Paths` classes.", resources: [{ name: "Java Files", url: "https://www.w3schools.com/java/java_files.asp" }] },
          { text: "Understand how to work with input and output streams for handling data flow from various sources, not just files.", resources: [{ name: "I/O Streams", url: "https://docs.oracle.com/javase/tutorial/essential/io/streams.html" }] },
        ],
      },
      {
        title: "Concurrency and Multithreading",
        points: [
          { text: "Grasp the fundamentals of multithreading by extending the `Thread` class or implementing the `Runnable` interface to perform multiple operations simultaneously.", resources: [{ name: "Java Threads", url: "https://www.w3schools.com/java/java_threads.asp" }] },
          { text: "Learn about thread synchronization and how to use the `synchronized` keyword to prevent race conditions and ensure data consistency in concurrent applications.", resources: [{ name: "Synchronization", url: "https://www.baeldung.com/java-synchronization" }] },
        ],
      },
      {
        title: "Modern Java (Lambda & Streams)",
        points: [
          { text: "Learn to use lambda expressions, a key feature from Java 8, to write more concise and functional code, especially with collections.", resources: [{ name: "Java Lambda Expressions", url: "https://www.w3schools.com/java/java_lambda.asp" }] },
          { text: "Master the Stream API to perform powerful, SQL-like operations on collections of data. Learn to use methods like `filter`, `map`, and `reduce` to write clean and efficient code.", resources: [{ name: "Java Stream API Tutorial", url: "https://www.baeldung.com/java-8-streams" }] },
        ],
      },
    ],
    assignments: [
        { title: "Bank Account Class", description: "Create a `BankAccount` class with properties for account number and balance, and methods for `deposit()` and `withdraw()`. Ensure that the balance cannot go below zero." },
        { title: "Word Frequency Counter", description: "Write a Java program that reads a text file and uses a `HashMap` to count the frequency of each word. Print the words and their counts." },
        { title: "Contact List", description: "Create a `Contact` class and then write a program that manages a list of contacts in an `ArrayList`. The program should allow adding a new contact and displaying all contacts." }
    ]
  },
  {
    id: "c-sharp",
    title: "C#",
    description: "Learn the modern, object-oriented C# language from Microsoft.",
    category: "Programming Languages",
    subCategory: "General-Purpose Languages",
    topics: [
      {
        title: "Stage 1: Beginner - C# and .NET Foundations",
        points: [
          { text: "Understand the .NET ecosystem (including .NET Core/5+), the Common Language Runtime (CLR), and how C# code is compiled and executed.", resources: [{ name: ".NET introduction", url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" }] },
          { text: "Set up your environment with the .NET SDK and an IDE like Visual Studio or VS Code with the C# extension.", resources: [{ name: "Install .NET SDK", url: "https://dotnet.microsoft.com/en-us/download" }, { name: "Visual Studio", url: "https://visualstudio.microsoft.com/" }] },
          { text: "Write your first 'Hello, World!' console application. Learn about the `Main` method, namespaces, and basic program structure.", resources: [{ name: "C# Hello World", url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/hello-world" }] },
          { text: "Master variables, built-in value types (`int`, `double`, `bool`), and reference types (`string`, `object`).", resources: [{ name: "C# Data Types", url: "https://www.w3schools.com/cs/cs_data_types.php" }] },
          { text: "Learn control flow statements like `if-else`, `switch`, and loops (`for`, `foreach`, `while`) to add logic to your applications.", resources: [{ name: "Control Flow", url: "https://www.w3schools.com/cs/cs_if_else.php" }] },
        ],
      },
      {
        title: "Stage 2: Intermediate - Object-Oriented Programming",
        points: [
          { text: "Deeply understand classes and objects. Learn about constructors, properties, methods, and the `this` keyword.", resources: [{ name: "Classes and Objects", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes" }] },
          { text: "Master the four pillars of OOP: Inheritance (creating class hierarchies), Encapsulation (controlling access to data), Polymorphism (using virtual methods and interfaces), and Abstraction.", resources: [{ name: "OOP in C#", url: "https://www.tutorialsteacher.com/csharp/csharp-object-oriented-programming" }] },
          { text: "Learn to use interfaces to define contracts for classes and abstract classes for creating base classes that cannot be instantiated.", resources: [{ name: "Interfaces", url: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface" }] },
          { text: "Understand how to handle runtime errors gracefully using `try-catch-finally` blocks.", resources: [{ name: "Exception Handling", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/" }] },
        ],
      },
      {
        title: "Stage 3: Advanced - Modern C# and .NET Core",
        points: [
          { text: "Master Language Integrated Query (LINQ) to write powerful, declarative queries over collections and databases.", resources: [{ name: "LINQ Tutorial", url: "https://www.tutorialsteacher.com/linq/linq-tutorials" }] },
          { text: "Learn asynchronous programming with `async` and `await` to write responsive and non-blocking I/O operations.", resources: [{ name: "Async/Await", url: "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios" }] },
          { text: "Understand delegates and events, which form the basis for event-driven programming in .NET.", resources: [{ name: "Delegates", url: "https://www.w3schools.com/cs/cs_delegates.php" }] },
          { text: "Learn about generics to create reusable, type-safe classes and methods that can work with any data type.", resources: [{ name: "Generics", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics" }] },
          { text: "Get familiar with NuGet, the package manager for .NET, to add third-party libraries to your projects.", resources: [{ name: "Intro to NuGet", url: "https://learn.microsoft.com/en-us/nuget/what-is-nuget" }] },
        ],
      },
      {
        title: "Stage 4: Specializations & Frameworks",
        points: [
          { text: "Build web applications and APIs with ASP.NET Core MVC and Razor Pages.", resources: [{ name: "ASP.NET Core", url: "https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core" }] },
          { text: "Learn to build interactive client-side web UI with C# using Blazor.", resources: [{ name: "Blazor", url: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" }] },
          { text: "Use Entity Framework (EF) Core, an object-relational mapper (ORM), to interact with databases using C# objects.", resources: [{ name: "EF Core", url: "https://learn.microsoft.com/en-us/ef/core/" }] },
          { text: "Build cross-platform desktop and mobile apps with .NET MAUI.", resources: [{ name: "MAUI", url: "https://dotnet.microsoft.com/en-us/apps/maui" }] },
          { text: "Explore game development by learning the Unity engine, which uses C# for scripting.", resources: [{ name: "Unity Learn", url: "https://learn.unity.com/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Student and Course Classes", description: "Create a `Student` class and a `Course` class. A student should have a name and a list of courses they are enrolled in. A course should have a name and a list of enrolled students. Create methods to enroll a student in a course." },
        { title: "LINQ Query Practice", description: "Given a list of numbers, use LINQ to find all the even numbers, sort them in descending order, and select the top 5." },
        { title: "Simple Web API", description: "Using ASP.NET Core, create a minimal API with two endpoints. One endpoint should return 'Hello, World!', and the other should accept a name in the URL and return 'Hello, [name]!'." }
    ]
  },
  {
    id: "swift",
    title: "Swift",
    description: "Learn Swift, the modern, powerful, and intuitive language for building apps for Apple platforms (iOS, macOS, watchOS, and tvOS).",
    category: "Programming Languages",
    subCategory: "Mobile App Development",
    topics: [
        {
            title: "Swift Fundamentals",
            points: [
                { text: "Learn the basics of Swift, including constants, variables, and data types like Int, Double, String, and Bool.", resources: [{ name: "The Basics", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics" }] },
                { text: "Master control flow with conditional statements (if, switch) and loops (for-in, while) to control the execution of your code.", resources: [{ name: "Control Flow", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow" }] },
                { text: "Understand how to work with collection types, including Arrays, Sets, and Dictionaries, for storing collections of values.", resources: [{ name: "Collection Types", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes" }] },
                { text: "Grasp the concept of optionals and learn how to safely work with values that might be absent using optional binding and optional chaining.", resources: [{ name: "Optionals", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics#Optionals" }] },
            ],
        },
        {
            title: "Functions and Closures",
            points: [
                { text: "Learn to define and call functions to create reusable blocks of code. Understand parameters, return values, and function argument labels.", resources: [{ name: "Functions", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions" }] },
                { text: "Explore closures, which are self-contained blocks of functionality that can be passed around and used in your code, similar to lambdas in other languages.", resources: [{ name: "Closures", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures" }] },
            ],
        },
        {
            title: "Object-Oriented Swift",
            points: [
                { text: "Learn to define custom types using Classes and Structures. Understand their differences and when to use each.", resources: [{ name: "Classes and Structures", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures" }] },
                { text: "Define properties to store values and computed properties to calculate values. Also, understand how to use property observers.", resources: [{ name: "Properties", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties" }] },
                { text: "Understand inheritance to build class hierarchies, and learn how to use protocols to define a 'blueprint' of methods, properties, and other requirements.", resources: [{ name: "Inheritance", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance" }, { name: "Protocols", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols" }] },
            ],
        },
        {
            title: "Introduction to SwiftUI",
            points: [
                { text: "Learn the fundamentals of SwiftUI, Apple's declarative UI framework for building apps on all Apple platforms.", resources: [{ name: "SwiftUI Tutorials", url: "https://developer.apple.com/tutorials/swiftui" }] },
                { text: "Build user interfaces using a hierarchy of Views, such as Text, Image, and Button. Learn to compose complex views from simple ones.", resources: [{ name: "Views and Controls", url: "https://developer.apple.com/documentation/swiftui/views-and-controls" }] },
                { text: "Use stacks (VStack, HStack, ZStack) and spacers to arrange views and create sophisticated layouts.", resources: [{ name: "Layout and Presentation", url: "https://developer.apple.com/documentation/swiftui/layout-and-presentation" }] },
            ],
        },
        {
            title: "State Management in SwiftUI",
            points: [
                { text: "Learn to manage the state of your views using property wrappers like @State, @Binding, @StateObject, and @ObservedObject.", resources: [{ name: "State and Data Flow", url: "https://developer.apple.com/documentation/swiftui/state-and-data-flow" }] },
                { text: "Understand how SwiftUI automatically updates the view when the state changes, keeping your UI consistent with your data.", resources: [] },
            ],
        },
        {
            title: "Navigation and Data Flow",
            points: [
                { text: "Implement navigation in your app using `NavigationStack` to create hierarchical navigation and `TabView` for tab-based interfaces.", resources: [{ name: "Navigation", url: "https://developer.apple.com/documentation/swiftui/navigation" }] },
                { text: "Learn how to pass data between views, present modal sheets, and show alerts to the user.", resources: [] },
            ],
        },
        {
            title: "Networking and Concurrency",
            points: [
                { text: "Learn to fetch data from a remote API using `URLSession`.", resources: [{ name: "Fetching Website Data", url: "https://developer.apple.com/documentation/foundation/urlsession" }] },
                { text: "Understand modern concurrency in Swift with `async/await` to write asynchronous code that is easy to read and maintain.", resources: [{ name: "Concurrency", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" }] },
                { text: "Parse JSON data from an API into your Swift data models using the `Codable` protocol.", resources: [{ name: "Encoding and Decoding", url: "https://developer.apple.com/documentation/swift/encoding-and-decoding-custom-types" }] },
            ],
        },
    ],
    assignments: [
        { title: "Tip Calculator UI", description: "Using SwiftUI, build a user interface for a tip calculator. It should have a text field for the bill amount, a picker for the tip percentage, and a text view to display the total amount." },
        { title: "To-Do List App", description: "Create a simple to-do list app. Users should be able to add new tasks to a list and see them displayed on the screen. Manage the list of tasks using an array and the `@State` property wrapper." },
        { title: "Simple Master-Detail View", description: "Build an app that displays a list of items (e.g., names of cities). When a user taps an item, it should navigate to a new screen that shows more details about that item." }
    ]
  },
  {
    id: "kotlin",
    title: "Kotlin",
    description: "Learn Kotlin, the modern, official language for Android development.",
    category: "Programming Languages",
    subCategory: "Mobile App Development",
    topics: [
        {
            title: "Kotlin Fundamentals",
            points: [
                { text: "Learn about Kotlin's advantages, such as its conciseness and null safety, and set up your development environment with IntelliJ IDEA or Android Studio.", resources: [{ name: "Get Started with Kotlin", url: "https://kotlinlang.org/docs/home.html" }] },
                { text: "Master basic syntax, variables (val vs. var), and fundamental types like Int, Double, String, and Boolean.", resources: [{ name: "Basic Syntax", url: "https://kotlinlang.org/docs/basic-syntax.html" }] },
                { text: "Understand Kotlin's powerful null safety features, including nullable types (?) and the safe call operator (?.) to prevent null pointer exceptions.", resources: [{ name: "Null Safety", url: "https://kotlinlang.org/docs/null-safety.html" }] },
            ],
        },
        {
            title: "Control Flow and Functions",
            points: [
                { text: "Use conditional expressions like if-else and when to control the flow of your program.", resources: [{ name: "Control Flow", url: "https://kotlinlang.org/docs/control-flow.html" }] },
                { text: "Learn to use for and while loops for iteration. Discover how to work with ranges and progressions.", resources: [] },
                { text: "Define functions with default arguments and named parameters. Explore higher-order functions and lambda expressions.", resources: [{ name: "Functions", url: "https://kotlinlang.org/docs/functions.html" }, { name: "Lambdas", url: "https://kotlinlang.org/docs/lambdas.html" }] },
            ],
        },
        {
            title: "Object-Oriented Kotlin",
            points: [
                { text: "Learn to create classes and objects. Understand constructors, properties, and initialization.", resources: [{ name: "Classes", url: "https://kotlinlang.org/docs/classes.html" }] },
                { text: "Explore inheritance and learn how to use open classes and override methods. Understand the role of abstract classes.", resources: [{ name: "Inheritance", url: "https://kotlinlang.org/docs/inheritance.html" }] },
                { text: "Grasp the power of data classes for creating concise, immutable data holders and sealed classes for representing restricted class hierarchies.", resources: [{ name: "Data Classes", url: "https://kotlinlang.org/docs/data-classes.html" }, { name: "Sealed Classes", url: "https://kotlinlang.org/docs/sealed-classes.html" }] },
            ],
        },
        {
            title: "Advanced Features",
            points: [
                { text: "Learn how to work with collections like lists, sets, and maps, and use powerful extension functions to manipulate them.", resources: [{ name: "Collections", url: "https://kotlinlang.org/docs/collections-overview.html" }] },
                { text: "Understand generics to create reusable, type-safe components.", resources: [{ name: "Generics", url: "https://kotlinlang.org/docs/generics.html" }] },
                { text: "Explore delegation to easily reuse and compose behavior in your classes.", resources: [{ name: "Delegation", url: "https://kotlinlang.org/docs/delegation.html" }] },
            ],
        },
        {
            title: "Coroutines and Concurrency",
            points: [
                { text: "Grasp the basics of asynchronous programming with Kotlin Coroutines to write non-blocking code in a sequential style.", resources: [{ name: "Coroutines Basics", url: "https://kotlinlang.org/docs/coroutines-basics.html" }] },
                { text: "Learn about suspending functions, coroutine builders (like launch and async), and dispatchers for controlling execution threads.", resources: [] },
                { text: "Understand how to manage coroutine lifecycles and handle exceptions effectively.", resources: [{ name: "Coroutine Context and Dispatchers", url: "https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html" }] },
            ],
        },
        {
            title: "Android Development with Kotlin",
            points: [
                { text: "Get started with Android development by setting up Android Studio and creating your first Kotlin-based Android project.", resources: [{ name: "Build your first Android app", url: "https://developer.android.com/training/basics/firstapp" }] },
                { text: "Learn to build modern, declarative UIs for your Android apps using Jetpack Compose.", resources: [{ name: "Jetpack Compose", url: "https://developer.android.com/jetpack/compose" }] },
                { text: "Explore the fundamentals of the Android Architecture Components (ViewModel, LiveData, Room) to build robust and maintainable apps.", resources: [{ name: "Guide to app architecture", url: "https://developer.android.com/jetpack/guide" }] },
            ],
        },
    ],
    assignments: [
        { title: "Filter a List of Objects", description: "Create a `data class` for a `Person` (with name and age). Then, create a list of `Person` objects and use a collection function (like `.filter()`) to find all the people who are 18 or older." },
        { title: "Simple Counter App", description: "Using Jetpack Compose, build a simple Android app with a button and a text field. Each time the button is clicked, the number in the text field should increment." },
        { title: "Asynchronous Data Fetch", description: "Write a function that simulates a network call using `delay()` inside a coroutine. The function should return a string after 2 seconds, and your main code should launch the coroutine and print the result." }
    ]
  },
  {
    id: "php-for-web-development",
    title: "PHP for Web Development",
    description: "A comprehensive guide to learning PHP, from the basics to building dynamic web applications with a modern framework.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
    topics: [
      {
        title: "Introduction to PHP",
        points: [
          { text: "Learn about the history of PHP and its role in server-side web development.", resources: [{ name: "What is PHP?", url: "https://www.php.net/manual/en/intro-whatis.php" }] },
          { text: "Set up a local development environment using tools like XAMPP, MAMP, or Docker to run a web server, database, and PHP.", resources: [{ name: "PHP Installation", url: "https://www.php.net/manual/en/install.php" }] },
          { text: "Write your first PHP script to understand basic syntax, tags, and how to display output in the browser.", resources: [{ name: "Basic Syntax", url: "https://www.php.net/manual/en/language.basic-syntax.php" }] },
        ],
      },
      {
        title: "PHP Fundamentals",
        points: [
          { text: "Understand how to declare and use variables, and learn about PHP's data types, including strings, integers, floats, booleans, and arrays.", resources: [{ name: "Variables", url: "https://www.php.net/manual/en/language.variables.php" }, { name: "Types", url: "https://www.php.net/manual/en/language.types.php" }] },
          { text: "Master operators for performing arithmetic, assignment, comparison, and logical operations.", resources: [{ name: "Operators", url: "https://www.php.net/manual/en/language.operators.php" }] },
          { text: "Learn about associative arrays for key-value pair storage and indexed arrays for ordered lists.", resources: [{ name: "Arrays", url: "https://www.php.net/manual/en/language.types.array.php" }] },
        ],
      },
      {
        title: "Control Structures and Functions",
        points: [
          { text: "Use conditional statements like `if`, `elseif`, `else`, and `switch` to make decisions in your code.", resources: [{ name: "Control Structures", url: "https://www.php.net/manual/en/language.control-structures.php" }] },
          { text: "Learn how to use loops like `for`, `foreach`, `while`, and `do-while` to execute repetitive tasks.", resources: [{ name: "Loops", url: "https://www.php.net/manual/en/language.control-structures.php" }] },
          { text: "Define and call your own functions to create reusable and organized code. Understand parameters, return values, and variable scope.", resources: [{ name: "Functions", url: "https://www.php.net/manual/en/language.functions.php" }] },
        ],
      },
      {
        title: "Working with Forms and Superglobals",
        points: [
          { text: "Learn how to build HTML forms and process the submitted data in PHP.", resources: [{ name: "Handling Forms", url: "https://www.w3schools.com/php/php_forms.asp" }] },
          { text: "Understand and use PHP's superglobal arrays like `$_GET`, `$_POST`, and `$_SESSION` to access user input and manage session data.", resources: [{ name: "Superglobals", url: "https://www.php.net/manual/en/language.variables.superglobals.php" }] },
          { text: "Learn the importance of validating and sanitizing user input to prevent common security vulnerabilities.", resources: [{ name: "Data Filtering", url: "https://www.php.net/manual/en/book.filter.php" }] },
        ],
      },
      {
        title: "Object-Oriented PHP (OOP)",
        points: [
          { text: "Learn to define classes and create objects. Understand properties, methods, and constructors.", resources: [{ name: "Classes and Objects", url: "https://www.php.net/manual/en/language.oop5.basic.php" }] },
          { text: "Grasp key OOP concepts like inheritance, encapsulation (public, private, protected), and polymorphism.", resources: [{ name: "Inheritance", url: "https://www.php.net/manual/en/language.oop5.inheritance.php" }] },
          { text: "Explore advanced OOP features like interfaces, abstract classes, and traits to write robust and maintainable code.", resources: [{ name: "Interfaces", url: "https://www.php.net/manual/en/language.oop5.interfaces.php" }, { name: "Traits", url: "https://www.php.net/manual/en/language.oop5.traits.php" }] },
        ],
      },
      {
        title: "Working with Databases",
        points: [
          { text: "Learn how to connect to a MySQL or MariaDB database from PHP using modern extensions like PDO or MySQLi.", resources: [{ name: "PDO", url: "https://www.php.net/manual/en/book.pdo.php" }] },
          { text: "Master performing CRUD (Create, Read, Update, Delete) operations on your database.", resources: [{ name: "MySQL with PHP", url: "https://www.w3schools.com/php/php_mysql_intro.asp" }] },
          { text: "Understand the importance of using prepared statements to prevent SQL injection attacks.", resources: [{ name: "Prepared Statements", url: "https://www.php.net/manual/en/pdo.prepared-statements.php" }] },
        ],
      },
      {
        title: "Dependency Management with Composer",
        points: [
          { text: "Learn about Composer, the standard dependency manager for PHP, and why it's essential for modern development.", resources: [{ name: "Composer", url: "https://getcomposer.org/" }] },
          { text: "Understand how to use the `composer.json` file to declare project dependencies and manage autoloading.", resources: [{ name: "Basic Usage", url: "https://getcomposer.org/doc/01-basic-usage.md" }] },
        ],
      },
      {
        title: "Introduction to a Modern Framework (Laravel)",
        points: [
          { text: "Understand the benefits of using a PHP framework like Laravel for building web applications.", resources: [{ name: "Laravel", url: "https://laravel.com/" }] },
          { text: "Learn the fundamentals of Laravel, including routing, controllers, and Blade templates for building views.", resources: [{ name: "Laravel The Basics", url: "https://laravel.com/docs/11.x/routing" }] },
          { text: "Explore Eloquent, Laravel's powerful Object-Relational Mapper (ORM), for interacting with your database in an object-oriented way.", resources: [{ name: "Eloquent ORM", url: "https://laravel.com/docs/11.x/eloquent" }] },
        ],
      },
    ],
    assignments: [
        { title: "Simple Contact Form", description: "Create an HTML form with fields for name, email, and message. Write a PHP script that validates the input and displays the submitted data back to the user." },
        { title: "PHP Function for Factorial", description: "Write a PHP function that takes an integer as input and returns its factorial. Include error handling for negative numbers." },
        { title: "Basic 'Guestbook' Page", description: "Using PHP and PDO, create a simple guestbook. It should have a form to submit a name and a message, which gets saved to a MySQL database. The page should also display all the messages from the database." }
    ]
  },
  {
    id: "ruby-on-rails",
    title: "Ruby on Rails",
    description: "Learn Ruby, the dynamic, open-source programming language with a focus on simplicity and productivity, and its most popular framework, Rails.",
    category: "Frameworks & Libraries",
    subCategory: "Backend Web Frameworks",
    topics: [
        {
            title: "Ruby Fundamentals",
            points: [
                { text: "Learn the basic syntax of Ruby, including variables, data types (numbers, strings, booleans), and how to work with the interactive Ruby shell (IRB).", resources: [{ name: "Ruby in Twenty Minutes", url: "https://www.ruby-lang.org/en/documentation/quickstart/" }] },
                { text: "Understand control flow structures like `if/else` conditionals and loops (`while`, `for`, `.each`) to add logic to your programs.", resources: [] },
                { text: "Master Ruby's core data structures: Arrays for ordered lists and Hashes for key-value pairs.", resources: [{ name: "Ruby Arrays", url: "https://ruby-doc.org/core-3.1.2/Array.html" }, { name: "Ruby Hashes", url: "https://ruby-doc.org/core-3.1.2/Hash.html" }] },
            ],
        },
        {
            title: "Object-Oriented Programming in Ruby",
            points: [
                { text: "Grasp the concept that everything in Ruby is an object. Learn to define your own classes and create instances (objects).", resources: [{ name: "Ruby Classes", url: "https://www.ruby-lang.org/en/documentation/ruby-from-other-languages/to-ruby-from-python/" }] },
                { text: "Understand how to use inheritance to create specialized classes from more general ones and how to use modules (mixins) to share functionality between classes.", resources: [{ name: "Inheritance", url: "https://www.learnrubyonline.org/en/Inheritance" }] },
            ],
        },
        {
            title: "Blocks, Procs, and Lambdas",
            points: [
                { text: "Learn about Ruby's powerful and unique feature: blocks. Understand how they are used with methods like `.each` and `.map` to iterate and transform data.", resources: [{ name: "Ruby Blocks", url: "https://www.rubyguides.com/2016/02/ruby-blocks-procs-lambdas/" }] },
                { text: "Understand the difference between Procs and Lambdas, which allow you to store blocks of code in variables and pass them around.", resources: [] },
            ],
        },
        {
            title: "Introduction to Ruby on Rails",
            points: [
                { text: "Understand the Model-View-Controller (MVC) architecture, the core design pattern behind Rails.", resources: [{ name: "Rails MVC", url: "https://guides.rubyonrails.org/getting_started.html#the-mvc-architecture" }] },
                { text: "Set up a new Rails application and learn the function of the key files and directories.", resources: [{ name: "Getting Started with Rails", url: "https://guides.rubyonrails.org/getting_started.html" }] },
            ],
        },
        {
            title: "Routing, Controllers, and Views",
            points: [
                { text: "Learn how to define routes in `config/routes.rb` to map incoming requests to controller actions.", resources: [{ name: "Rails Routing", url: "https://guides.rubyonrails.org/routing.html" }] },
                { text: "Create controller actions to handle requests, interact with models, and render views.", resources: [] },
                { text: "Use Embedded Ruby (ERB) to write dynamic views, combining HTML with Ruby code to display data.", resources: [{ name: "Action View Overview", url: "https://guides.rubyonrails.org/action_view_overview.html" }] },
            ],
        },
        {
            title: "Active Record (Models)",
            points: [
                { text: "Learn the basics of Active Record, the Object-Relational Mapping (ORM) library in Rails that connects your Ruby objects to database tables.", resources: [{ name: "Active Record Basics", url: "https://guides.rubyonrails.org/active_record_basics.html" }] },
                { text: "Use database migrations to manage your database schema in a version-controlled way.", resources: [{ name: "Active Record Migrations", url: "https://guides.rubyonrails.org/active_record_migrations.html" }] },
                { text: "Define associations (like `has_many`, `belongs_to`) to create relationships between your models.", resources: [{ name: "Active Record Associations", url: "https://guides.rubyonrails.org/association_basics.html" }] },
            ],
        },
    ],
    assignments: [
        { title: "Ruby Word Counter", description: "Write a Ruby script that reads a sentence and returns a hash where the keys are the words and the values are their frequencies." },
        { title: "Simple Blog with Rails", description: "Generate a new Rails application with a 'Post' model (with title and body attributes). Create the necessary routes, controller actions, and views to allow users to create new posts and see a list of all posts." },
        { title: "Two-Model Association", description: "In a Rails app, create two models: `Author` and `Book`. Set up a `has_many` / `belongs_to` association between them. Use the Rails console to create an author and assign a new book to them." }
    ]
  },
  {
    id: "rust",
    title: "Rust",
    description: "Learn Rust, a language empowering everyone to build reliable and efficient software.",
    category: "Programming Languages",
    subCategory: "Systems & Embedded Programming",
    topics: [
      {
        title: "Getting Started with Rust",
        points: [
          { text: "Understand Rust's core strengths: performance, reliability, and productivity. Learn about its key features like the ownership system.", resources: [{ name: "What is Rust?", url: "https://www.rust-lang.org/learn" }] },
          { text: "Install Rust using `rustup`, the official toolchain installer, and set up your development environment.", resources: [{ name: "Installation", url: "https://www.rust-lang.org/tools/install" }] },
          { text: "Write, compile, and run your first 'Hello, World!' program using Cargo, Rust's build system and package manager.", resources: [{ name: "Hello, World!", url: "https://doc.rust-lang.org/book/ch01-02-hello-world.html" }] },
        ],
      },
      {
        title: "Common Programming Concepts",
        points: [
          { text: "Learn about variables, mutability, and how Rust handles constants and shadowing.", resources: [{ name: "Variables and Mutability", url: "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html" }] },
          { text: "Explore Rust's scalar data types (integers, floats, booleans, characters) and compound types (tuples, arrays).", resources: [{ name: "Data Types", url: "https://doc.rust-lang.org/book/ch03-02-data-types.html" }] },
          { text: "Understand how to define and call functions, including functions with parameters and return values.", resources: [{ name: "Functions", url: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html" }] },
          { text: "Master control flow using `if` expressions and various loops (`loop`, `while`, `for`).", resources: [{ name: "Control Flow", url: "https://doc.rust-lang.org/book/ch03-05-control-flow.html" }] },
        ],
      },
      {
        title: "Understanding Ownership",
        points: [
          { text: "Grasp Rust's most unique feature: the ownership system. Learn about the stack, the heap, and Rust's rules for managing memory safety.", resources: [{ name: "What is Ownership?", url: "https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html" }] },
          { text: "Learn how to pass data without transferring ownership using references and borrowing.", resources: [{ name: "References and Borrowing", url: "https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html" }] },
          { text: "Understand slices, which let you reference a contiguous sequence of elements in a collection rather than the whole collection.", resources: [{ name: "The Slice Type", url: "https://doc.rust-lang.org/book/ch04-03-slices.html" }] },
        ],
      },
      {
        title: "Using Structs",
        points: [
          { text: "Learn to create custom data types by defining and instantiating structs.", resources: [{ name: "Defining and Instantiating Structs", url: "https://doc.rust-lang.org/book/ch05-01-defining-structs.html" }] },
          { text: "Define methods on structs using `impl` blocks to specify the behavior associated with a struct type.", resources: [{ name: "Method Syntax", url: "https://doc.rust-lang.org/book/ch05-03-method-syntax.html" }] },
        ],
      },
      {
        title: "Enums and Pattern Matching",
        points: [
          { text: "Learn how to use enums to define a type that can have one of a few different variants.", resources: [{ name: "Enums", url: "https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html" }] },
          { text: "Master the powerful `match` control flow operator that allows you to compare a value against a series of patterns and execute code based on which pattern matches.", resources: [{ name: "The match Control Flow Construct", url: "https://doc.rust-lang.org/book/ch06-02-match.html" }] },
          { text: "Use `if let` for a more concise way to handle a single pattern from a `match`.", resources: [{ name: "Concise Control Flow with if let", url: "https://doc.rust-lang.org/book/ch06-03-if-let.html" }] },
        ],
      },
      {
        title: "Error Handling",
        points: [
          { text: "Understand Rust's approach to error handling, distinguishing between recoverable errors with `Result<T, E>` and unrecoverable errors with the `panic!` macro.", resources: [{ name: "Unrecoverable Errors with panic!", url: "https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html" }] },
          { text: "Learn to return and handle recoverable errors using the `Result` enum.", resources: [{ name: "Recoverable Errors with Result", url: "https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html" }] },
        ],
      },
      {
        title: "Advanced Topics",
        points: [
          { text: "Explore generics to reduce code duplication by writing code that can work over a variety of concrete data types.", resources: [{ name: "Generic Data Types", url: "https://doc.rust-lang.org/book/ch10-01-syntax.html" }] },
          { text: "Learn about traits, which define shared functionality that different types can implement.", resources: [{ name: "Traits: Defining Shared Behavior", url: "https://doc.rust-lang.org/book/ch10-02-traits.html" }] },
          { text: "Understand lifetimes, which are a way of ensuring that references are valid for as long as we need them to be.", resources: [{ name: "Validating References with Lifetimes", url: "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html" }] },
          { text: "Learn how to use Rust's concurrency features to run code in parallel, including using threads and message-passing.", resources: [{ name: "Fearless Concurrency", url: "https://doc.rust-lang.org/book/ch16-00-concurrency.html" }] },
        ],
      },
    ],
    assignments: [
        { title: "Temperature Converter", description: "Write a Rust function that takes a temperature in Celsius and returns the equivalent in Fahrenheit. Practice using functions and basic data types." },
        { title: "Area of a Rectangle", description: "Define a `Rectangle` struct with `width` and `height` fields. Implement a method on the struct called `area` that calculates and returns the rectangle's area." },
        { title: "Traffic Light Enum", description: "Create an `enum` called `TrafficLight` with variants `Red`, `Yellow`, and `Green`. Write a function that takes a `TrafficLight` and returns how long a car should wait (e.g., 60 for Red, 5 for Yellow, 0 for Green) using a `match` expression." }
    ]
  },
  {
    id: "dart-for-cross-platform-development",
    title: "Dart for Cross-Platform Development",
    description: "Learn Dart, the language for building mobile, desktop, and web applications with Flutter.",
    category: "Programming Languages",
    subCategory: "Mobile App Development",
    topics: [
      {
        title: "Dart Fundamentals",
        points: [
            { text: "Understand Dart's core principles, including its type system, variables (var, final, const), and basic operators.", resources: [{ name: "A Tour of the Dart Language", url: "https://dart.dev/guides/language/language-tour" }] },
            { text: "Learn about control flow statements like if/else, for loops, and while loops to add logic to your applications.", resources: [{ name: "Control Flow Statements", url: "https://dart.dev/language/control-flow" }] },
            { text: "Explore Dart's collection types: Lists, Sets, and Maps, for storing groups of objects.", resources: [{ name: "Collections", url: "https://dart.dev/language/collections" }] },
            { text: "Grasp Dart's powerful null safety features to prevent null reference errors.", resources: [{ name: "Null Safety", url: "https://dart.dev/null-safety" }] },
        ],
      },
      {
        title: "Functions and Object-Oriented Programming",
        points: [
          { text: "Learn how to define and use functions. Understand parameters, return values, and anonymous functions (lambdas).", resources: [{ name: "Functions", url: "https://dart.dev/language/functions" }] },
          { text: "Grasp the fundamentals of Object-Oriented Programming in Dart, including classes, objects, and constructors.", resources: [{ name: "Classes", url: "https://dart.dev/language/classes" }] },
          { text: "Explore inheritance, abstract classes, and mixins to create reusable and well-structured code.", resources: [{ name: "Inheritance", url: "https://dart.dev/language/inheritance" }] },
        ],
      },
      {
        title: "Asynchronous Programming",
        points: [
          { text: "Understand how to write asynchronous code using Futures and the `async` and `await` keywords.", resources: [{ name: "Asynchrony support", url: "https://dart.dev/language/async" }] },
          { text: "Learn about Streams for handling sequences of asynchronous events, such as user input or file I/O.", resources: [] },
        ],
      },
      {
        title: "Introduction to Flutter",
        points: [
          { text: "Learn what Flutter is and why it's a powerful framework for building cross-platform applications from a single codebase.", resources: [{ name: "What is Flutter?", url: "https://docs.flutter.dev/overview" }] },
          { text: "Set up your development environment for Flutter, including the Flutter SDK and an editor like VS Code or Android Studio.", resources: [{ name: "Install Flutter", url: "https://docs.flutter.dev/get-started/install" }] },
          { text: "Build your first Flutter app and understand the basic project structure and the 'everything is a widget' concept.", resources: [{ name: "Write your first Flutter app", url: "https://docs.flutter.dev/get-started/codelab" }] },
        ],
      },
      {
        title: "Flutter Widgets and Layouts",
        points: [
            { text: "Explore fundamental widgets like `Text`, `Image`, `Icon`, and `Container`.", resources: [{ name: "Basic Widgets", url: "https://docs.flutter.dev/ui/widgets/basics" }] },
            { text: "Learn how to arrange widgets on the screen using layout widgets like `Row`, `Column`, `Stack`, and `Expanded`.", resources: [{ name: "Layouts in Flutter", url: "https://docs.flutter.dev/ui/layout" }] },
            { text: "Build interactive elements using widgets like `Button` and `TextField` to handle user input.", resources: [{ name: "Interactive Widgets", url: "https://docs.flutter.dev/ui/widgets/interactive" }] },
        ],
      },
      {
        title: "State Management in Flutter",
        points: [
            { text: "Understand the difference between stateless and stateful widgets and when to use each.", resources: [{ name: "Adding interactivity", url: "https://docs.flutter.dev/ui/interactive" }] },
            { text: "Learn about lifting state up and using callbacks to manage state in simple applications.", resources: [] },
            { text: "Explore popular state management solutions like Provider and Riverpod for more complex applications.", resources: [{ name: "State Management Options", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" }] },
        ],
      },
      {
        title: "Navigation and Routing",
        points: [
            { text: "Learn to navigate between different screens (or 'routes') using the `Navigator` widget.", resources: [{ name: "Navigation and Routing", url: "https://docs.flutter.dev/ui/navigation" }] },
            { text: "Understand how to pass data between screens to build multi-page applications.", resources: [] },
            { text: "Explore named routes for a more organized approach to navigation in larger apps.", resources: [] },
        ],
      },
      {
        title: "Working with Device Features",
        points: [
            { text: "Learn how to make HTTP requests to a web server to fetch data.", resources: [{ name: "Networking", url: "https://docs.flutter.dev/data-and-backend/networking" }] },
            { text: "Use packages from pub.dev to access device hardware like the camera or GPS.", resources: [{ name: "Packages", url: "https://pub.dev/" }] },
            { text: "Learn how to store data locally on the device using shared_preferences or a local database like SQLite.", resources: [{ name: "Data persistence", url: "https://docs.flutter.dev/data-and-backend/persistence" }] },
        ],
      },
    ],
    assignments: [
        { title: "Sum of a List", description: "Write a Dart function that takes a `List<int>` and returns the sum of all its elements." },
        { title: "User Profile Class", description: "Create a `User` class in Dart with properties for `name` (String) and `age` (int). Add a method `sayHello()` that prints 'Hello, my name is [name]'. Create an instance of the class and call the method." },
        { title: "Static Flutter Layout", description: "Using Flutter, build a simple screen layout that displays a user profile picture (using a `CircleAvatar`), with their name and a short bio underneath. Use a `Column` to arrange the widgets vertically." }
    ]
  },
  {
    id: "html-the-language-of-the-web",
    title: "HTML: The Language of the Web",
    description: "Master the fundamental language for creating and structuring web pages.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
    topics: [
      {
        title: "Introduction to HTML",
        points: [
          { text: "Understand what HTML is and its essential role in creating web pages.", resources: [{ name: "HTML Introduction", url: "https://www.w3schools.com/html/html_intro.asp" }] },
          { text: "Learn about the history of HTML and its evolution over the years.", resources: [{ name: "HTML History", url: "https://en.wikipedia.org/wiki/HTML#History" }] },
          { text: "Set up a basic HTML file and understand the essential document structure, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags.", resources: [{ name: "HTML Basic", url: "https://www.w3schools.com/html/html_basic.asp" }] },
        ],
      },
      {
        title: "Essential HTML Tags",
        points: [
          { text: "Learn to use heading tags (`<h1>` to `<h6>`) for structuring content and paragraph tags (`<p>`) for text.", resources: [{ name: "Headings & Paragraphs", url: "https://www.w3schools.com/html/html_headings.asp" }] },
          { text: "Understand how to create links with the anchor tag (`<a>`) and add images to your page with the image tag (`<img>`).", resources: [{ name: "Links", url: "https://www.w3schools.com/html/html_links.asp" }, { name: "Images", url: "https://www.w3schools.com/html/html_images.asp" }] },
          { text: "Master creating ordered (`<ol>`), unordered (`<ul>`), and description (`<dl>`) lists.", resources: [{ name: "Lists", url: "https://www.w3schools.com/html/html_lists.asp" }] },
        ],
      },
      {
        title: "Semantic HTML",
        points: [
          { text: "Understand the importance of semantic HTML for accessibility, SEO, and maintainability.", resources: [{ name: "Semantic HTML", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" }] },
          { text: "Learn to use structural elements like `<header>`, `<footer>`, `<nav>`, `<main>`, `<article>`, and `<section>` to define the layout of your page.", resources: [{ name: "Layout Elements", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure" }] },
          { text: "Use other semantic elements like `<figure>`, `<figcaption>`, and `<aside>` to give more meaning to your content.", resources: [] },
        ],
      },
      {
        title: "HTML Forms",
        points: [
          { text: "Learn how to create forms using the `<form>` tag and various input types like text, password, checkbox, radio, and submit.", resources: [{ name: "HTML Forms", url: "https://www.w3schools.com/html/html_forms.asp" }] },
          { text: "Use the `<label>` tag to associate text with form controls for better accessibility.", resources: [{ name: "Form Elements", url: "https://www.w3schools.com/html/html_form_elements.asp" }] },
          { text: "Explore more advanced form elements like `<textarea>`, `<select>`, `<option>`, and `<button>`.", resources: [] },
        ],
      },
      {
        title: "Tables",
        points: [
          { text: "Learn how to structure tabular data using `<table>`, `<tr>` (table row), `<th>` (table header), and `<td>` (table data) tags.", resources: [{ name: "HTML Tables", url: "https://www.w3schools.com/html/html_tables.asp" }] },
          { text: "Understand how to use `<thead>`, `<tbody>`, and `<tfoot>` for better table structure.", resources: [] },
          { text: "Explore how to merge cells using the `colspan` and `rowspan` attributes.", resources: [] },
        ],
      },
      {
        title: "Multimedia",
        points: [
          { text: "Learn how to embed audio and video content in your web pages using the `<audio>` and `<video>` tags.", resources: [{ name: "HTML Media", url: "https://www.w3schools.com/html/html_media.asp" }] },
          { text: "Understand how to provide different source files for better browser compatibility and how to add controls and subtitles.", resources: [] },
          { text: "Learn how to embed content from other websites (like YouTube videos) using the `<iframe>` tag.", resources: [{ name: "Iframes", url: "https://www.w3schools.com/html/html_iframe.asp" }] },
        ],
      },
    ],
    assignments: [
        { title: "Simple Recipe Page", description: "Create an HTML page for a recipe. It should include a main heading for the recipe name, an image of the dish, an unordered list for ingredients, and an ordered list for the steps." },
        { title: "Basic Contact Form", description: "Build an HTML form that collects a user's name, email, and a message. Use appropriate `<label>` tags for all inputs." },
        { title: "Recreate a Simple Table", description: "Find a simple table of data online (e.g., a list of countries and their capitals) and recreate its structure using HTML `<table>`, `<tr>`, `<th>`, and `<td>` tags." }
    ]
  },
  {
    id: "css-styling-the-web",
    title: "CSS: Styling the Web",
    description: "Learn the language for styling and laying out web pages, from basic selectors to advanced layouts and animations.",
    category: "Programming Languages",
    subCategory: "Web Development Languages",
    topics: [
      {
        title: "CSS Fundamentals",
        points: [
          { text: "Learn how to apply CSS to HTML using different methods: inline, internal, and external stylesheets.", resources: [{ name: "How to Add CSS", url: "https://www.w3schools.com/css/css_howto.asp" }] },
          { text: "Master CSS selectors (element, class, ID, attribute) to target specific HTML elements for styling.", resources: [{ name: "CSS Selectors", url: "https://www.w3schools.com/cssref/css_selectors.php" }] },
          { text: "Grasp the core concept of the CSS box model, understanding how margin, border, padding, and content define the space an element occupies.", resources: [{ name: "The Box Model", url: "https://www.w3schools.com/css/css_boxmodel.asp" }] },
        ],
      },
      {
        title: "Colors, Backgrounds, and Borders",
        points: [
          { text: "Learn how to apply colors to text and element backgrounds using various formats like keywords, hexadecimal, RGB, and HSL.", resources: [{ name: "CSS Colors", url: "https://www.w3schools.com/css/css_colors.asp" }] },
          { text: "Explore how to set background images, control their repetition, and position them within an element.", resources: [{ name: "Backgrounds", url: "https://www.w3schools.com/css/css_background.asp" }] },
          { text: "Master styling borders by controlling their width, style (solid, dashed, etc.), and color.", resources: [{ name: "Borders", url: "https://www.w3schools.com/css/css_border.asp" }] },
        ],
      },
      {
        title: "Typography and Text Styling",
        points: [
          { text: "Learn how to control the appearance of text, including font family, size, weight, and style.", resources: [{ name: "CSS Fonts", url: "https://www.w3schools.com/css/css_font.asp" }] },
          { text: "Master text alignment, decoration (like underline), transformation (like uppercase), and spacing (letter and word spacing).", resources: [{ name: "Text Styling", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text" }] },
        ],
      },
      {
        title: "Modern CSS Layouts",
        points: [
          { text: "Learn Flexbox for creating efficient, one-dimensional layouts. Align and distribute items in a row or a column with ease.", resources: [{ name: "Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }] },
          { text: "Use CSS Grid to build complex, two-dimensional layouts, allowing you to control the position of items in both rows and columns simultaneously.", resources: [{ name: "CSS Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }] },
          { text: "Understand the different positioning schemes in CSS: static, relative, absolute, fixed, and sticky.", resources: [{ name: "Positioning", url: "https://www.w3schools.com/css/css_positioning.asp" }] },
        ],
      },
      {
        title: "Responsive Design",
        points: [
          { text: "Learn the principles of responsive design and use media queries to apply different styles for different screen sizes and devices.", resources: [{ name: "Media Queries", url: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp" }] },
          { text: "Understand the mobile-first approach to design, where you start with styles for small screens and add complexity for larger ones.", resources: [{ name: "Mobile-First", url: "https://www.freecodecamp.org/news/taking-a-mobile-first-approach-to-responsive-web-design/" }] },
          { text: "Use responsive units like percentages, `vw` (viewport width), and `vh` (viewport height) to create fluid layouts.", resources: [{ name: "Responsive Units", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" }] },
        ],
      },
      {
        title: "Transitions and Animations",
        points: [
          { text: "Add smooth visual effects to property changes using the `transition` property.", resources: [{ name: "Transitions", url: "https://www.w3schools.com/css/css3_transitions.asp" }] },
          { text: "Create complex, multi-step animations using `@keyframes` rules.", resources: [{ name: "Animations", url: "https://www.w3schools.com/css/css3_animations.asp" }] },
          { text: "Learn to use the `transform` property to translate, rotate, scale, and skew elements in 2D and 3D space.", resources: [{ name: "Transforms", url: "https://www.w3schools.com/css/css3_2d_transforms.asp" }] },
        ],
      },
    ],
    assignments: [
        { title: "Style a Blog Post", description: "Take a simple HTML structure for a blog post and use CSS to style it. Set the font sizes for headings and paragraphs, add colors, and control the spacing to make it readable." },
        { title: "Create a Centered Card Layout", description: "Using Flexbox, create a layout that perfectly centers a card element (a `div` with a border and shadow) both horizontally and vertically on the page." },
        { title: "Button Hover Effect", description: "Style a button element. Then, use CSS transitions and the `:hover` pseudo-class to make its background color and text color change smoothly when the user hovers over it." }
    ]
  },
  {
    id: "bash-shell-scripting",
    title: "Bash/Shell Scripting",
    description: "Learn to automate tasks, manage systems, and master the command line with Bash.",
    category: "Programming Languages",
    subCategory: "Scripting & Automation",
    topics: [
      {
        title: "Introduction to the Command Line",
        points: [
          { text: "Understand what a shell is and the basics of the command-line interface (CLI). Learn about the Bash shell.", resources: [{ name: "What is the Shell?", url: "https://linuxcommand.org/lc3_lts0020.php" }] },
          { text: "Master essential navigation commands like `ls` (list files), `cd` (change directory), and `pwd` (print working directory).", resources: [{ name: "Basic Navigation", url: "https://www.digitalocean.com/community/tutorials/basic-linux-navigation-and-file-management" }] },
          { text: "Learn how to create, view, move, copy, and delete files and directories using `touch`, `cat`, `less`, `mv`, `cp`, `rm`, and `mkdir`.", resources: [{ name: "File Manipulation", url: "https://www.geeksforgeeks.org/basic-file-manipulation-commands-in-linux/" }] },
        ],
      },
      {
        title: "Pipes, Redirection, and Permissions",
        points: [
          { text: "Learn to chain commands together using pipes (`|`) to create powerful command combinations.", resources: [{ name: "Pipes in Linux", url: "https://www.geeksforgeeks.org/piping-in-linux/" }] },
          { text: "Understand how to redirect standard output (`>`), standard error (`2>`), and append output (`>>`) to files.", resources: [{ name: "I/O Redirection", url: "https://www.tldp.org/LDP/abs/html/io-redirection.html" }] },
          { text: "Grasp the Linux file permission system and learn how to use `chmod` to change permissions.", resources: [{ name: "File Permissions", url: "https://www.linux.com/training-tutorials/understanding-linux-file-permissions/" }] },
        ],
      },
      {
        title: "Scripting Fundamentals",
        points: [
          { text: "Learn how to write your first shell script, including the `shebang` (`#!/bin/bash`), and how to make it executable.", resources: [{ name: "Writing Your First Script", url: "https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_02_01.html" }] },
          { text: "Understand how to declare and use variables. Learn the difference between single and double quotes for variable expansion.", resources: [{ name: "Variables", url: "https://www.shellscript.sh/variables.html" }] },
          { text: "Learn to read input from the user and how to work with command-line arguments (`$1`, `$2`, etc.).", resources: [{ name: "Command Line Arguments", url: "https://www.geeksforgeeks.org/command-line-arguments-in-shell-script/" }] },
        ],
      },
      {
        title: "Control Structures",
        points: [
          { text: "Use `if`, `else`, and `elif` statements, along with test conditions (`[ ]` and `[[ ]]`), to make decisions in your scripts.", resources: [{ name: "Conditional Statements", url: "https://www.geeksforgeeks.org/bash-scripting-if-else-statements/" }] },
          { text: "Learn to use `for` loops to iterate over a list of items and `while` loops to repeat actions as long as a condition is true.", resources: [{ name: "For Loops", url: "https://www.cyberciti.biz/faq/bash-for-loop/" }, { name: "While Loops", url: "https://www.cyberciti.biz/faq/bash-while-loop/" }] },
          { text: "Use the `case` statement as a cleaner alternative to complex `if-elif-else` structures.", resources: [{ name: "Case Statement", url: "https://www.geeksforgeeks.org/case-statement-in-shell-scripting/" }] },
        ],
      },
      {
        title: "Functions and Text Processing",
        points: [
          { text: "Learn to define and call functions to make your scripts more modular and reusable.", resources: [{ name: "Bash Functions", url: "https://www.shellscript.sh/functions.html" }] },
          { text: "Master text processing utilities like `grep` for searching text, `sed` for stream editing, and `awk` for pattern scanning and processing.", resources: [{ name: "grep", url: "https://www.gnu.org/software/grep/manual/grep.html" }, { name: "sed", url: "https://www.gnu.org/software/sed/manual/sed.html" }, { name: "awk", url: "https://www.gnu.org/software/gawk/manual/gawk.html" }] },
        ],
      },
      {
        title: "Advanced Scripting",
        points: [
          { text: "Learn how to handle errors and debug your scripts using techniques like setting `set -e` (exit on error) and `set -x` (debug mode).", resources: [{ name: "Debugging Bash Scripts", url: "https://www.shellscript.sh/debugging.html" }] },
          { text: "Understand process management commands like `ps` (list processes), `kill` (terminate processes), and how to run commands in the background (`&`).", resources: [{ name: "Process Management", url: "https://www.geeksforgeeks.org/process-management-in-linux/" }] },
          { text: "Explore job scheduling with `cron` to automate running your scripts at specific times.", resources: [{ name: "Cron Jobs", url: "https://www.ostechnix.com/a-beginners-guide-to-cron-jobs-in-linux/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Greeting Script", description: "Write a Bash script that takes a person's name as a command-line argument and prints a personalized greeting, e.g., 'Hello, [Name]!'." },
        { title: "File Backup Script", description: "Write a script that creates a new directory named 'backups' if it doesn't exist. Then, it should copy a specified file into that backup directory." },
        { title: "Numbered Line Printer", description: "Create a script that reads a text file and prints each line preceded by its line number. Use a `while` loop and the `read` command." }
    ]
  },
  {
    id: "perl",
    title: "Perl",
    description: "Learn Perl, the versatile, high-level 'Swiss Army chainsaw' of scripting languages, renowned for its powerful text processing capabilities.",
    category: "Programming Languages",
    subCategory: "Scripting & Automation",
    topics: [
      {
        title: "Introduction to Perl",
        points: [
          { text: "Discover Perl's history and its design philosophy of 'There's More Than One Way To Do It' (TMTOWTDI).", resources: [{ name: "What is Perl?", url: "https://www.perl.org/about.html" }] },
          { text: "Install Perl on your system and set up a development environment.", resources: [{ name: "Get Perl", url: "https://www.perl.org/get.html" }] },
          { text: "Write your first 'Hello, World!' script to understand basic syntax, the `print` function, and how to execute a Perl program.", resources: [{ name: "Perl Hello World", url: "https://www.geeksforgeeks.org/hello-world-in-perl/" }] },
        ],
      },
      {
        title: "Perl Fundamentals",
        points: [
          { text: "Learn about Perl's three main data types: scalars (`$`), arrays (`@`), and hashes (`%`).", resources: [{ name: "Perl Data Types", url: "https://www.tutorialspoint.com/perl/perl_data_types.htm" }] },
          { text: "Understand the difference between lexical (`my`) and global (`our`) variables.", resources: [{ name: "Variable Scoping", url: "https://learn.perl.org/docs/perl-best-practices/variables.html" }] },
          { text: "Master Perl's rich set of operators, including string, numeric, and logical operators.", resources: [{ name: "Perl Operators", url: "https://www.tutorialspoint.com/perl/perl_operators.htm" }] },
        ],
      },
      {
        title: "Control Flow",
        points: [
          { text: "Control program flow with `if`, `elsif`, `else`, and `unless` conditional statements.", resources: [{ name: "Perl Conditionals", url: "https://www.perltutorial.org/perl-if/" }] },
          { text: "Use loops like `for`, `foreach`, `while`, and `until` to perform repetitive tasks.", resources: [{ name: "Perl Loops", url: "https://www.perltutorial.org/perl-for-loop/" }] },
          { text: "Learn about loop control statements like `next` (continue) and `last` (break).", resources: [] },
        ],
      },
      {
        title: "Subroutines (Functions)",
        points: [
          { text: "Learn how to define and call your own subroutines to create modular and reusable code.", resources: [{ name: "Perl Subroutines", url: "https://www.perltutorial.org/perl-subroutine/" }] },
          { text: "Understand how to pass arguments to subroutines and how to return values.", resources: [{ name: "Arguments & Return Values", url: "https://learn.perl.org/docs/perl-for-beginners/subroutines.html" }] },
        ],
      },
      {
        title: "Regular Expressions",
        points: [
          { text: "Grasp the basics of regular expressions, one of Perl's most powerful features for pattern matching and text manipulation.", resources: [{ name: "Perl Regex Tutorial", url: "https://www.perltutorial.org/perl-regular-expression/" }] },
          { text: "Learn to use the match (`m//`), substitute (`s///`), and transliterate (`tr///`) operators.", resources: [{ name: "Regex Operators", url: "https://www.tutorialspoint.com/perl/perl_regular_expressions.htm" }] },
        ],
      },
      {
        title: "File I/O",
        points: [
          { text: "Learn how to open, read from, write to, and close files using filehandles.", resources: [{ name: "Perl File I/O", url: "https://www.perltutorial.org/perl-file-io/" }] },
          { text: "Understand the diamond operator (`<>`) for reading from multiple files specified on the command line.", resources: [] },
        ],
      },
      {
        title: "Object-Oriented Perl",
        points: [
          { text: "Learn the basics of object-oriented programming in Perl, including creating classes (packages), objects (blessed references), and methods.", resources: [{ name: "Perl OOP Tutorial", url: "https://www.perltutorial.org/perl-oop/" }] },
          { text: "Explore modern OO systems for Perl like Moo or Moose for more advanced features.", resources: [{ name: "Moo/Moose", url: "https://metacpan.org/pod/Moo" }] },
        ],
      },
      {
        title: "Using CPAN Modules",
        points: [
          { text: "Discover the Comprehensive Perl Archive Network (CPAN), a vast repository of reusable Perl modules.", resources: [{ name: "CPAN", url: "https://www.cpan.org/" }] },
          { text: "Learn how to use the `cpan` client to install and manage modules for your projects.", resources: [{ name: "Installing Modules", url: "https://www.cpan.org/modules/INSTALL.html" }] },
        ],
      },
    ],
    assignments: [
        { title: "Array Sum", description: "Write a Perl subroutine that takes an array of numbers as an argument and returns their sum." },
        { title: "Count Log Entries", description: "Write a Perl script that reads a log file and uses a regular expression to count how many lines contain the word 'Error'." },
        { title: "Hash to Key-Value String", description: "Write a script that takes a hash and prints its contents as a formatted string, e.g., 'key1=value1, key2=value2'." }
    ]
  },
  {
    id: "powershell-for-automation-and-administration",
    title: "PowerShell for Automation and Administration",
    description: "Learn the command-line shell and scripting language from Microsoft to automate tasks and manage systems.",
    category: "Programming Languages",
    subCategory: "Scripting & Automation",
    topics: [
      {
        title: "Introduction to PowerShell",
        points: [
          { text: "Understand what PowerShell is, its core concepts (cmdlets, objects, pipeline), and its role in system administration.", resources: [{ name: "What is PowerShell?", url: "https://learn.microsoft.com/en-us/powershell/scripting/overview" }] },
          { text: "Learn to use the integrated help system with `Get-Help` to discover commands and understand their usage.", resources: [{ name: "Discovering commands", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/05-discovering-commands" }] },
        ],
      },
      {
        title: "Core Concepts",
        points: [
          { text: "Master working with cmdlets and understanding the Verb-Noun naming convention.", resources: [{ name: "Understanding cmdlets", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/04-cmdlets" }] },
          { text: "Grasp the power of the pipeline to chain commands together, passing objects from one cmdlet to the next.", resources: [{ name: "The Pipeline", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/06-pipeline" }] },
          { text: "Learn how to filter (`Where-Object`) and select (`Select-Object`) objects in the pipeline.", resources: [{ name: "Filtering and Selecting", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/07-working-with-objects" }] },
        ],
      },
      {
        title: "PowerShell Scripting",
        points: [
          { text: "Learn how to declare and use variables, and understand PowerShell's data types.", resources: [{ name: "Variables", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_variables" }] },
          { text: "Use control flow operators like `if`, `else`, and `switch` to make decisions in your scripts.", resources: [{ name: "If/Else", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_if" }] },
          { text: "Learn to use loops like `ForEach-Object`, `for`, and `while` to perform repetitive tasks.", resources: [{ name: "Loops", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_loops" }] },
          { text: "Write your own functions to create reusable and modular scripts.", resources: [{ name: "Functions", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions" }] },
        ],
      },
      {
        title: "Advanced Topics",
        points: [
          { text: "Learn to handle errors in your scripts using `Try-Catch-Finally` blocks.", resources: [{ name: "Error Handling", url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally" }] },
          { text: "Explore PowerShell Remoting to run commands and scripts on remote computers.", resources: [{ name: "Running Remote Commands", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/08-running-remote-commands" }] },
          { text: "Understand how to work with different data formats like CSV, JSON, and XML.", resources: [{ name: "Working with data", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/13-working-with-data" }] },
        ],
      },
      {
        title: "Administration and Modules",
        points: [
          { text: "Learn how to find, install, and use modules from the PowerShell Gallery to extend PowerShell's capabilities.", resources: [{ name: "PowerShellGet", url: "https://learn.microsoft.com/en-us/powershell/module/powershellget" }] },
          { text: "Use PowerShell to manage Windows systems, including working with services, processes, and the event log.", resources: [] },
          { text: "Get an introduction to managing Active Directory with the dedicated PowerShell module.", resources: [{ name: "Active Directory Cmdlets", url: "https://learn.microsoft.com/en-us/powershell/module/activedirectory" }] },
        ],
      },
    ],
    assignments: [
        { title: "Get Running Processes", description: "Write a PowerShell script that gets all the running processes on your computer, filters them to show only those consuming more than 100MB of memory, and sorts the result by memory usage." },
        { title: "Check Service Status", description: "Create a script that checks if a specific Windows service (e.g., 'Spooler') is running. If it's running, it should print 'Service is running'; otherwise, it should print 'Service is stopped'." },
        { title: "Export Data to CSV", description: "Write a script that retrieves a list of all services on the system and exports their Name, Status, and StartType to a CSV file." }
    ]
  },
  {
    id: "matlab-for-engineers-and-scientists",
    title: "MATLAB for Engineers and Scientists",
    description: "Learn the high-performance language for technical computing, used extensively by engineers and scientists.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [
      {
        title: "Introduction to the MATLAB Environment",
        points: [
          { text: "Familiarize yourself with the MATLAB desktop, including the Command Window, Workspace, Current Folder, and Editor.", resources: [{ name: "MATLAB Environment", url: "https://www.mathworks.com/help/matlab/learn_matlab/desktop.html" }] },
          { text: "Learn how to use MATLAB as a calculator, defining variables and using basic arithmetic operators.", resources: [{ name: "Entering Commands", url: "https://www.mathworks.com/help/matlab/learn_matlab/entering-commands.html" }] },
        ],
      },
      {
        title: "Matrices and Arrays",
        points: [
          { text: "Understand that the fundamental data type in MATLAB is the array. Learn how to create row vectors, column vectors, and matrices.", resources: [{ name: "Creating Matrices", url: "https://www.mathworks.com/help/matlab/learn_matlab/creating-matrices-and-arrays.html" }] },
          { text: "Perform matrix and array operations, including addition, subtraction, and element-wise operations.", resources: [{ name: "Array Indexing", url: "https://www.mathworks.com/help/matlab/learn_matlab/array-indexing.html" }] },
          { text: "Learn about matrix multiplication, division, and inverse operations, which are fundamental to linear algebra.", resources: [{ name: "Matrix Operations", url: "https://www.mathworks.com/help/matlab/learn_matlab/matrix-and-array-operations.html" }] },
        ],
      },
      {
        title: "Data Visualization",
        points: [
          { text: "Create 2-D plots using the `plot` function to visualize your data. Learn to add titles, labels, and legends to your graphs.", resources: [{ name: "2-D Plots", url: "https://www.mathworks.com/help/matlab/learn_matlab/plots.html" }] },
          { text: "Explore other types of plots, including bar charts, histograms, and scatter plots, to represent different kinds of data.", resources: [] },
          { text: "Learn to create 3-D plots using functions like `surf` and `mesh` to visualize data in three dimensions.", resources: [{ name: "3-D Plots", url: "https://www.mathworks.com/help/matlab/visualize/creating-3-d-plots.html" }] },
        ],
      },
      {
        title: "Programming with MATLAB",
        points: [
          { text: "Learn to write scripts to automate sequences of commands. Understand the difference between scripts and functions.", resources: [{ name: "Scripts and Functions", url: "https://www.mathworks.com/help/matlab/learn_matlab/scripts-and-functions.html" }] },
          { text: "Use relational and logical operators to make decisions in your code.", resources: [{ name: "Logical Operations", url: "https://www.mathworks.com/help/matlab/learn_matlab/logical-operations.html" }] },
          { text: "Control the flow of your programs with conditional statements (`if/else`) and loops (`for`, `while`).", resources: [{ name: "Control Flow", url: "https://www.mathworks.com/help/matlab/control-flow.html" }] },
        ],
      },
      {
        title: "Data Analysis",
        points: [
          { text: "Learn to import data from various file types, such as text files, spreadsheets, and MAT-files.", resources: [{ name: "Data Import and Export", url: "https://www.mathworks.com/help/matlab/import_export/supported-file-formats.html" }] },
          { text: "Perform basic statistical analysis, including calculating mean, standard deviation, and correlation.", resources: [{ name: "Descriptive Statistics", url: "https://www.mathworks.com/help/matlab/data_analysis/descriptive-statistics.html" }] },
          { text: "Explore data fitting techniques to model the relationship between variables, including polynomial and linear regression.", resources: [{ name: "Curve Fitting", url: "https://www.mathworks.com/help/curvefit/curve-fitting.html" }] },
        ],
      },
    ],
    assignments: [
        { title: "Vector Operations", description: "Create two vectors in MATLAB. Calculate their sum, the element-wise product, and the dot product." },
        { title: "Plot a Sine Wave", description: "Create a vector of values from 0 to 2*pi. Calculate the sine of these values and create a 2D plot of the results. Add a title and labels for the x and y axes." },
        { title: "Simple MATLAB Function", description: "Write a MATLAB function that takes a vector of numbers as input and returns the average of those numbers without using the built-in `mean` function." }
    ]
  },
  {
    id: "sas-programming-for-data-analysis",
    title: "SAS Programming for Data Analysis",
    description: "Learn the fundamentals of SAS, the powerful software suite for advanced analytics, business intelligence, data management, and predictive analytics.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [
      {
        title: "Introduction to the SAS Environment",
        points: [
          { text: "Understand the SAS Windowing Environment (Editor, Log, Output) and the modern SAS Studio interface.", resources: [{ name: "Getting Started with SAS", url: "https://www.sas.com/en_us/training/offers/free-sas-training.html" }] },
          { text: "Learn basic concepts like SAS libraries (librefs), datasets, variables, and observations.", resources: [] },
          { text: "Write and submit your first simple SAS program and learn how to interpret the SAS log to check for errors and notes.", resources: [] },
        ],
      },
      {
        title: "The DATA Step",
        points: [
          { text: "Master the DATA step, the core of SAS programming used for creating and modifying datasets.", resources: [{ name: "DATA Step Concepts", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/lesteps/n1iud5c010w90nn1q28p8a4yq2s0.htm" }] },
          { text: "Learn to read raw data files (e.g., CSV, text) into SAS datasets using the `INFILE` and `INPUT` statements.", resources: [{ name: "INPUT Statement", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/lestmts/n06e1exz6p8j68n1m9gftf0e8a71.htm" }] },
          { text: "Create and modify variables, use assignment statements, and apply formats and informats to your data.", resources: [] },
        ],
      },
      {
        title: "Data Manipulation and Functions",
        points: [
          { text: "Learn to filter data using `IF-THEN/ELSE` logic and the `WHERE` statement or dataset option.", resources: [{ name: "IF-THEN/ELSE", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/lestmts/n0nrclpsxvpf2qn171nwws5o3jve.htm" }] },
          { text: "Explore SAS's extensive library of functions for character, numeric, and date manipulation.", resources: [{ name: "SAS Functions", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/lefunctions/titlepage.htm" }] },
          { text: "Understand how to combine datasets by concatenating (stacking) and merging (joining).", resources: [{ name: "Merging Data", url: "https://stats.idre.ucla.edu/sas/modules/how-to-merge-datasets/" }] },
        ],
      },
      {
        title: "SAS Procedures (PROCs)",
        points: [
          { text: "Understand the role of procedures (PROCs) in SAS for analyzing and presenting data.", resources: [] },
          { text: "Learn essential procedures like `PROC PRINT` to display data, `PROC SORT` to order data, and `PROC CONTENTS` to view dataset metadata.", resources: [{ name: "Base SAS Procedures", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/proc/titlepage.htm" }] },
          { text: "Use `PROC FREQ` to create frequency tables and `PROC MEANS` or `PROC SUMMARY` to calculate descriptive statistics.", resources: [{ name: "PROC FREQ", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/proc/n02z7pdrqj8i0un1i3y6ytw1v5n1.htm" }] },
        ],
      },
      {
        title: "Output and Reporting",
        points: [
          { text: "Learn to generate detailed reports with `PROC REPORT` and `PROC TABULATE`.", resources: [{ name: "PROC REPORT", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/proc/p1wgi5td0un60qn1n0g9x4l6plqj.htm" }] },
          { text: "Use the Output Delivery System (ODS) to create high-quality output in formats like HTML, PDF, and RTF.", resources: [{ name: "ODS Basics", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/odsuser/n1v6dy4bku04oan1kfis8rxr6i19.htm" }] },
        ],
      },
      {
        title: "Advanced Topics: Macros and SQL",
        points: [
          { text: "Get an introduction to the SAS Macro facility for writing flexible and reusable code and automating repetitive tasks.", resources: [{ name: "SAS Macro Language", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/mcrolref/titlepage.htm" }] },
          { text: "Learn how to use `PROC SQL` to query and combine your data using the syntax of Structured Query Language within SAS.", resources: [{ name: "PROC SQL", url: "https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/sqlproc/titlepage.htm" }] },
        ],
      },
    ],
    assignments: [
        { title: "Create and Print a Dataset", description: "Write a DATA step to create a SAS dataset with a few variables (e.g., Name, Age, Score). Then, use `PROC PRINT` to display the contents of your new dataset." },
        { title: "Filter with IF and WHERE", description: "Using a built-in SAS dataset like `sashelp.class`, create a new dataset that includes only the female students who are older than 13. Do this once using an `IF` statement in a DATA step, and once using a `WHERE` statement in a PROC step." },
        { title: "Calculate Descriptive Statistics", description: "Using `sashelp.cars`, run `PROC MEANS` to calculate the mean, median, minimum, and maximum horsepower for all cars. Then, use a `BY` statement to get the same statistics for each car `Type` (e.g., Sedan, SUV)." }
    ]
  },
  {
    id: "spss-for-statistical-analysis",
    title: "SPSS for Statistical Analysis",
    description: "Learn to use SPSS, the powerful software package for statistical analysis, through its user-friendly interface and syntax-based commands.",
    category: "Programming Languages",
    subCategory: "Data Science & Analytics",
    topics: [
      {
        title: "SPSS Fundamentals",
        points: [
          { text: "Familiarize yourself with the SPSS interface, including the Data View and Variable View, and learn how to enter data manually.", resources: [{ name: "SPSS Interface Tour", url: "https://www.spss-tutorials.com/spss-data-editor-window/" }] },
          { text: "Understand how to define variable properties, such as variable type, labels, and value labels for categorical data.", resources: [{ name: "SPSS Variable View", url: "https://www.spss-tutorials.com/spss-variable-view-a-quick-tour/" }] },
          { text: "Learn how to import data from other formats like Excel and CSV files.", resources: [{ name: "Importing Data", url: "https://www.spss-tutorials.com/importing-data-into-spss/" }] },
        ],
      },
      {
        title: "Data Management and Manipulation",
        points: [
          { text: "Learn to compute new variables based on existing ones using the 'Compute Variable' dialog.", resources: [{ name: "Computing Variables", url: "https://www.spss-tutorials.com/spss-compute-command/" }] },
          { text: "Recode variables to group values or reverse-code scales using the 'Recode into Different Variables' feature.", resources: [{ name: "Recoding Variables", url: "https://www.spss-tutorials.com/spss-recode-command/" }] },
          { text: "Learn how to select a subset of cases for analysis using the 'Select Cases' functionality.", resources: [{ name: "Selecting Cases", url: "https://www.spss-tutorials.com/spss-select-cases-command/" }] },
        ],
      },
      {
        title: "Descriptive Statistics",
        points: [
          { text: "Generate frequency tables and bar charts for categorical variables to understand their distributions.", resources: [{ name: "Frequency Tables", url: "https://www.spss-tutorials.com/spss-frequencies-command/" }] },
          { text: "Calculate descriptive statistics (mean, median, standard deviation) and create histograms for continuous variables.", resources: [{ name: "Descriptive Statistics", url: "https://www.spss-tutorials.com/spss-descriptives-command/" }] },
          { text: "Use the 'Explore' procedure to examine distributions and test for normality.", resources: [{ name: "Explore Command", url: "https://www.spss-tutorials.com/spss-explore-command/" }] },
        ],
      },
      {
        title: "Common Statistical Tests",
        points: [
          { text: "Perform Independent and Paired-Samples T-Tests to compare the means of two groups.", resources: [{ name: "T-Tests", url: "https://www.spss-tutorials.com/spss-t-test/" }] },
          { text: "Conduct a One-Way ANOVA to compare the means of three or more groups.", resources: [{ name: "One-Way ANOVA", url: "https://www.spss-tutorials.com/spss-one-way-anova/" }] },
          { text: "Use the Chi-Square test to examine the relationship between two categorical variables.", resources: [{ name: "Chi-Square Test", url: "https://www.spss-tutorials.com/spss-chi-square-independence-test/" }] },
          { text: "Learn to calculate Pearson correlations to measure the linear relationship between two continuous variables.", resources: [{ name: "Correlations", url: "https://www.spss-tutorials.com/spss-correlation-analysis/" }] },
        ],
      },
      {
        title: "Introduction to Regression",
        points: [
          { text: "Perform a simple linear regression to model the relationship between a predictor and an outcome variable.", resources: [{ name: "Simple Linear Regression", url: "https://www.spss-tutorials.com/spss-simple-linear-regression-tutorial/" }] },
          { text: "Conduct a multiple linear regression to model the relationship between multiple predictors and an outcome variable.", resources: [{ name: "Multiple Regression", url: "https://www.spss-tutorials.com/spss-multiple-regression-analysis/" }] },
        ],
      },
      {
        title: "Using SPSS Syntax",
        points: [
          { text: "Understand the basics of SPSS command syntax for automating your analyses.", resources: [{ name: "SPSS Syntax Introduction", url: "https://www.spss-tutorials.com/spss-syntax-a-brief-introduction/" }] },
          { text: "Learn how to paste syntax from the dialog boxes to create a record of your analysis and make it reproducible.", resources: [] },
          { text: "Write and run basic syntax commands to perform data management and analysis tasks.", resources: [] },
        ],
      },
    ],
    assignments: [
        { title: "Enter and Define Data", description: "Create a new SPSS data file. Define three variables: `ID` (Numeric), `Gender` (String, with value labels for 'Male' and 'Female'), and `Score` (Numeric). Manually enter data for 5 fictional participants." },
        { title: "Analyze Frequencies and Descriptives", description: "Using your created dataset, run the 'Frequencies' procedure on the `Gender` variable and the 'Descriptives' procedure on the `Score` variable. Interpret the output tables." },
        { title: "Run an Independent-Samples T-Test", description: "Using the same dataset, perform an independent-samples t-test to see if there is a statistically significant difference in `Score` between the male and female groups." }
    ]
  },
  {
    id: "prolog",
    title: "Prolog",
    description: "Learn the logic programming language, renowned for its role in artificial intelligence and computational linguistics.",
    category: "Programming Languages",
    subCategory: "Functional Programming",
    topics: [
      {
        title: "Introduction to Logic Programming",
        points: [
          { text: "Understand the declarative nature of logic programming and how it differs from imperative languages.", resources: [] },
          { text: "Learn about the history of Prolog and its applications in AI, expert systems, and natural language processing.", resources: [{ name: "History of Prolog", url: "https://en.wikipedia.org/wiki/Prolog#History" }] },
          { text: "Set up a Prolog environment, such as SWI-Prolog, and learn how to use the interactive interpreter.", resources: [{ name: "SWI-Prolog", url: "https://www.swi-prolog.org/" }] },
        ],
      },
      {
        title: "Facts, Rules, and Queries",
        points: [
          { text: "Learn to define facts, which are the basic truths of a Prolog program.", resources: [] },
          { text: "Understand how to create rules to define relationships and make logical inferences.", resources: [{ name: "Learn Prolog Now!", url: "http://www.learnprolognow.org/lpnpage.php?pagetype=html&pageid=lpn-htmlse4" }] },
          { text: "Master the art of asking questions (queries) to the Prolog system to retrieve information.", resources: [] },
        ],
      },
      {
        title: "Unification and Backtracking",
        points: [
          { text: "Grasp the concept of unification, the process by which Prolog matches queries with facts and rules.", resources: [] },
          { text: "Understand backtracking, Prolog's mechanism for exploring different possible solutions to a query.", resources: [{ name: "Backtracking", url: "https://www.youtube.com/watch?v=S-yX_Q3xY6E" }] },
        ],
      },
      {
        title: "Recursion",
        points: [
          { text: "Learn how to use recursion to define complex relationships and solve problems that have a repetitive structure.", resources: [{ name: "Recursion in Prolog", url: "https://www.cs.toronto.edu/~hoey/csc384/s07/lectures/l9-prolog2.pdf" }] },
          { text: "Understand how to define a base case and a recursive step to ensure that your recursive rules terminate.", resources: [] },
        ],
      },
      {
        title: "Lists and Data Structures",
        points: [
          { text: "Learn to work with lists, one of the most common data structures in Prolog.", resources: [{ name: "Lists in Prolog", url: "http://www.learnprolognow.org/lpnpage.php?pagetype=html&pageid=lpn-htmlse17" }] },
          { text: "Understand how to use the head/tail pattern `[H|T]` for recursive list processing.", resources: [] },
          { text: "Explore how to implement common list operations like `append`, `member`, and `reverse`.", resources: [] },
        ],
      },
      {
        title: "Controlling Backtracking with Cut",
        points: [
          { text: "Learn about the 'cut' operator (`!`) and how it can be used to prune the search space and control backtracking.", resources: [{ name: "The Cut", url: "http://www.learnprolognow.org/lpnpage.php?pagetype=html&pageid=lpn-htmlse25" }] },
          { text: "Understand the difference between green cuts (for efficiency) and red cuts (which change the logic of the program).", resources: [] },
        ],
      },
    ],
    assignments: [
        { title: "Family Tree", description: "Create a set of Prolog facts representing a family tree (e.g., `parent(charles, william)`). Write rules to define relationships like `grandparent`, `sibling`, and `ancestor`." },
        { title: "List Membership", description: "Write a recursive Prolog rule `is_member(X, List)` that succeeds if `X` is an element of `List`." },
        { title: "Sum of a List", description: "Write a recursive rule `sum_list(List, Sum)` that calculates the sum of a list of numbers." }
    ]
  },
  {
    id: "tensorflow",
    title: "TensorFlow",
    description: "Learn the open-source library for machine learning and artificial intelligence.",
    category: "Frameworks & Libraries",
    subCategory: "Data Science & ML Libraries",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand tensors, building models with Keras, and training/evaluation.", resources: [{ name: "TensorFlow Core", url: "https://www.tensorflow.org/guide" }] },
        ],
      },
    ],
    assignments: [
        { title: "Create a Tensor", description: "Create a 2x2 TensorFlow tensor with constant values and print it." },
        { title: "Simple Keras Model", description: "Define a simple sequential model using Keras with one dense layer." }
    ]
  },
  {
    id: "pytorch",
    title: "PyTorch",
    description: "Learn the open-source machine learning library based on the Torch library.",
    category: "Frameworks & Libraries",
    subCategory: "Data Science & ML Libraries",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand tensors, building neural networks with `torch.nn`, and automatic differentiation.", resources: [{ name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Tensor Operations", description: "Create two 2x2 PyTorch tensors and perform addition and matrix multiplication." },
        { title: "Basic Neural Network", description: "Define a simple neural network class in PyTorch that inherits from `torch.nn.Module`." }
    ]
  },
  {
    id: "flutter",
    title: "Flutter",
    description: "Learn Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    category: "Frameworks & Libraries",
    subCategory: "Mobile Frameworks",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand widgets, layouts, and state management.", resources: [{ name: "Flutter Docs", url: "https://docs.flutter.dev/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Build a Layout", description: "Create a simple Flutter screen with a column containing an icon, some text, and a button." },
        { title: "Stateful Counter", description: "Build a stateful widget that displays a number and a button. Pressing the button should increment the number." }
    ]
  },
  {
    id: "dsa-with-java",
    title: "Data Structures & Algorithms in Java",
    description: "Master fundamental data structures and algorithms using Java to prepare for technical interviews and build efficient software.",
    category: "Data Structures & Algorithms",
    topics: [
      {
        title: "Arrays and Strings",
        points: [
          { text: "Review Java arrays for fixed-size collections and explore common operations.", resources: [{ name: "Java Arrays", url: "https://www.geeksforgeeks.org/arrays-in-java/" }] },
          { text: "Learn string manipulation techniques and understand the immutability of Java Strings.", resources: [{ name: "Java String", url: "https://www.w3schools.com/java/java_strings.asp" }] },
          { text: "Implement common array/string problems like two-pointer algorithms and sliding windows.", resources: [{ name: "Two Pointer Technique", url: "https://www.geeksforgeeks.org/two-pointers-technique/" }] },
        ],
      },
      {
        title: "Linked Lists",
        points: [
          { text: "Understand Singly and Doubly Linked Lists, their structure, and their advantages over arrays.", resources: [{ name: "Linked List in Java", url: "https://www.geeksforgeeks.org/linked-list-in-java/" }] },
          { text: "Implement core operations: insertion, deletion, and traversal.", resources: [] },
          { text: "Solve classic problems like cycle detection and list reversal.", resources: [{ name: "Detect Loop in a linked list", url: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/" }] },
        ],
      },
      {
        title: "Stacks and Queues",
        points: [
          { text: "Learn the LIFO (Last-In, First-Out) principle of Stacks and FIFO (First-In, First-Out) principle of Queues.", resources: [] },
          { text: "Implement these data structures using both arrays and linked lists.", resources: [{ name: "Stack in Java", url: "https://www.geeksforgeeks.org/stack-in-java/" }, { name: "Queue in Java", url: "https://www.geeksforgeeks.org/queue-interface-java/" }] },
          { text: "Use Stacks and Queues to solve problems like parenthesis balancing and breadth-first search.", resources: [] },
        ],
      },
      {
        title: "Trees and Heaps",
        points: [
          { text: "Understand tree terminology and master Binary Trees and Binary Search Trees (BSTs).", resources: [{ name: "Binary Tree", url: "https://www.geeksforgeeks.org/binary-tree-data-structure/" }] },
          { text: "Implement tree traversal algorithms: in-order, pre-order, post-order, and level-order.", resources: [{ name: "Tree Traversal", url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" }] },
          { text: "Learn about Heaps (Min-Heap, Max-Heap) and their use as Priority Queues.", resources: [{ name: "Heap Data Structure", url: "https://www.geeksforgeeks.org/heap-data-structure/" }] },
        ],
      },
      {
        title: "Hash Tables",
        points: [
          { text: "Grasp the concept of hashing and how `HashMap` and `HashSet` provide efficient lookups, insertions, and deletions.", resources: [{ name: "HashMap in Java", url: "https://www.geeksforgeeks.org/java-util-hashmap-in-java-with-examples/" }] },
          { text: "Understand collision resolution techniques like chaining.", resources: [{ name: "Collision Resolution", url: "https://www.geeksforgeeks.org/hashing-collision-resolution/" }] },
          { text: "Solve problems involving finding duplicates, grouping items, and caching.", resources: [] },
        ],
      },
      {
        title: "Sorting and Searching Algorithms",
        points: [
          { text: "Learn and implement fundamental sorting algorithms like Bubble Sort, Insertion Sort, and Selection Sort (O(n^2)).", resources: [{ name: "Sorting Algorithms", url: "https://www.geeksforgeeks.org/sorting-algorithms/" }] },
          { text: "Master efficient, divide-and-conquer sorting algorithms: Merge Sort and Quick Sort (O(n log n)).", resources: [] },
          { text: "Implement Binary Search on sorted arrays for fast lookups (O(log n)).", resources: [{ name: "Binary Search", url: "https://www.geeksforgeeks.org/binary-search/" }] },
        ],
      },
      {
        title: "Graphs",
        points: [
          { text: "Understand graph representations: Adjacency Matrix and Adjacency List.", resources: [{ name: "Graph Representations", url: "https://www.geeksforgeeks.org/graph-and-its-representations/" }] },
          { text: "Implement graph traversal algorithms: Breadth-First Search (BFS) and Depth-First Search (DFS).", resources: [{ name: "BFS and DFS", url: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/" }] },
          { text: "Explore advanced concepts like Dijkstra's algorithm for finding the shortest path.", resources: [{ name: "Dijkstra's Algorithm", url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Valid Parentheses", description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Use a Stack." },
        { title: "Binary Search Tree Insertion", description: "Implement a function to insert a new value into a Binary Search Tree while maintaining its properties." },
        { title: "Two Sum", description: "Given an array of integers and a target, return indices of the two numbers such that they add up to the target. Use a HashMap for an efficient O(n) solution." }
    ]
  },
  {
    id: "dsa-with-python",
    title: "Data Structures & Algorithms in Python",
    description: "Leverage Python's simplicity to master core data structures and algorithms, a crucial skill for any software engineer.",
    category: "Data Structures & Algorithms",
    topics: [
      {
        title: "Lists and Strings",
        points: [
          { text: "Explore Python's dynamic arrays (lists) and their time complexities.", resources: [{ name: "Python Lists", url: "https://www.geeksforgeeks.org/python-list/" }] },
          { text: "Master string slicing and manipulation.", resources: [{ name: "Python Strings", url: "https://www.geeksforgeeks.org/python-strings/" }] },
          { text: "Implement common array/string problems like two-pointer algorithms and sliding windows.", resources: [{ name: "Sliding Window Technique", url: "https://www.geeksforgeeks.org/window-sliding-technique/" }] },
        ],
      },
      {
        title: "Linked Lists",
        points: [
          { text: "Implement a Node and a LinkedList class from scratch in Python.", resources: [{ name: "Linked List in Python", url: "https://www.geeksforgeeks.org/data-structures/linked-list/python/" }] },
          { text: "Implement core operations: insertion, deletion, and traversal.", resources: [] },
          { text: "Solve classic problems like cycle detection and list reversal.", resources: [{ name: "Reverse a Linked List", url: "https://www.geeksforgeeks.org/reverse-a-linked-list/" }] },
        ],
      },
      {
        title: "Stacks and Queues",
        points: [
          { text: "Use Python lists as simple stacks (with `append` and `pop`).", resources: [] },
          { text: "Use `collections.deque` for an efficient implementation of both stacks and queues.", resources: [{ name: "collections.deque", url: "https://www.geeksforgeeks.org/deque-in-python/" }] },
          { text: "Use these structures to solve problems like parenthesis balancing and breadth-first search.", resources: [] },
        ],
      },
      {
        title: "Trees and Heaps",
        points: [
          { text: "Implement a TreeNode and build Binary Trees and Binary Search Trees (BSTs).", resources: [{ name: "Binary Search Tree", url: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/" }] },
          { text: "Implement tree traversal algorithms: in-order, pre-order, post-order, and level-order.", resources: [{ name: "Tree Traversals", url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" }] },
          { text: "Learn about Python's `heapq` module for implementing Min-Heaps and Priority Queues.", resources: [{ name: "heapq in Python", url: "https://www.geeksforgeeks.org/heap-queue-or-heapq-in-python/" }] },
        ],
      },
      {
        title: "Dictionaries and Sets",
        points: [
          { text: "Leverage Python's dictionaries (hash maps) and sets for efficient O(1) average time complexity lookups.", resources: [{ name: "Python Dictionary", url: "https://www.geeksforgeeks.org/python-dictionary/" }] },
          { text: "Understand the underlying hash table implementation.", resources: [] },
          { text: "Solve problems involving finding duplicates, grouping items, and caching.", resources: [] },
        ],
      },
      {
        title: "Sorting and Searching Algorithms",
        points: [
          { text: "Learn and implement fundamental sorting algorithms like Bubble Sort and Insertion Sort (O(n^2)).", resources: [{ name: "Sorting Algorithms in Python", url: "https://www.geeksforgeeks.org/sorting-algorithms-in-python/" }] },
          { text: "Master efficient sorting algorithms: Merge Sort and Quick Sort (O(n log n)).", resources: [] },
          { text: "Implement Binary Search on sorted lists for fast lookups (O(log n)).", resources: [{ name: "Binary Search in Python", url: "https://www.geeksforgeeks.org/python-program-for-binary-search/" }] },
        ],
      },
      {
        title: "Graphs",
        points: [
          { text: "Represent graphs using dictionaries or adjacency lists in Python.", resources: [{ name: "Graph Representation", url: "https://www.geeksforgeeks.org/graph-and-its-representations/" }] },
          { text: "Implement Breadth-First Search (BFS) and Depth-First Search (DFS).", resources: [{ name: "BFS and DFS in Python", url: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/" }] },
          { text: "Explore pathfinding algorithms like Dijkstra's.", resources: [{ name: "Dijkstra's Algorithm in Python", url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Valid Parentheses", description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Use a list as a stack." },
        { title: "Binary Search Tree Insertion", description: "Implement a function to insert a new value into a Binary Search Tree while maintaining its properties." },
        { title: "Two Sum", description: "Given a list of integers and a target, return indices of the two numbers such that they add up to the target. Use a dictionary for an efficient O(n) solution." }
    ]
  },
  {
    id: "dsa-with-cpp",
    title: "Data Structures & Algorithms in C++",
    description: "Build a strong foundation in high-performance programming by mastering DSA with C++ and the Standard Template Library (STL).",
    category: "Data Structures & Algorithms",
    topics: [
      {
        title: "Arrays, Vectors, and Strings",
        points: [
          { text: "Understand C-style arrays vs. `std::vector` and when to use each.", resources: [{ name: "Vectors in C++ STL", url: "https://www.geeksforgeeks.org/vector-in-cpp-stl/" }] },
          { text: "Learn string manipulation with `std::string`.", resources: [{ name: "std::string in C++", url: "https://www.geeksforgeeks.org/stdstring-in-cpp/" }] },
          { text: "Implement common array/string problems like two-pointer algorithms and sliding windows.", resources: [] },
        ],
      },
      {
        title: "Linked Lists",
        points: [
          { text: "Implement Singly and Doubly Linked Lists using structs/classes and pointers.", resources: [{ name: "Linked List in C++", url: "https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/" }] },
          { text: "Implement core operations: insertion, deletion, and traversal.", resources: [] },
          { text: "Solve classic problems like cycle detection and list reversal.", resources: [{ name: "Detecting a Cycle", url: "https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/" }] },
        ],
      },
      {
        title: "Stacks and Queues",
        points: [
          { text: "Use the Standard Template Library (STL) containers `std::stack` and `std::queue`.", resources: [{ name: "Stack in C++ STL", url: "https://www.geeksforgeeks.org/stack-in-cpp-stl/" }, { name: "Queue in C++ STL", url: "https://www.geeksforgeeks.org/queue-in-cpp-stl/" }] },
          { text: "Understand the underlying container used (like `std::deque`) and its performance implications.", resources: [] },
          { text: "Use these structures to solve problems like parenthesis balancing and breadth-first search.", resources: [] },
        ],
      },
      {
        title: "Trees and Heaps",
        points: [
          { text: "Implement tree nodes with pointers and build Binary Trees and Binary Search Trees (BSTs).", resources: [{ name: "Binary Search Tree in C++", url: "https://www.geeksforgeeks.org/binary-search-tree-in-c-plus-plus/" }] },
          { text: "Implement tree traversal algorithms: in-order, pre-order, post-order, and level-order.", resources: [{ name: "Tree Traversals", url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" }] },
          { text: "Learn to use `std::priority_queue` for an efficient heap implementation.", resources: [{ name: "priority_queue in C++", url: "https://www.geeksforgeeks.org/priority-queue-in-cpp-stl/" }] },
        ],
      },
      {
        title: "Hash Tables",
        points: [
          { text: "Master the STL containers `std::unordered_map` and `std::unordered_set` for O(1) average time complexity operations.", resources: [{ name: "unordered_map in C++", url: "https://www.geeksforgeeks.org/unordered_map-in-cpp-stl/" }] },
          { text: "Understand the importance of a good hash function.", resources: [] },
          { text: "Solve problems involving finding duplicates, grouping items, and caching.", resources: [] },
        ],
      },
      {
        title: "Sorting and Searching Algorithms",
        points: [
          { text: "Learn and implement fundamental sorting algorithms like Bubble Sort and Insertion Sort (O(n^2)).", resources: [{ name: "Sorting Algorithms in C++", url: "https://www.geeksforgeeks.org/sorting-algorithms/" }] },
          { text: "Master efficient sorting algorithms: Merge Sort and Quick Sort (O(n log n)). Use `std::sort` for a highly optimized implementation.", resources: [{ name: "std::sort in C++", url: "https://www.geeksforgeeks.org/sort-c-stl/" }] },
          { text: "Implement Binary Search or use `std::binary_search` on sorted containers (O(log n)).", resources: [{ name: "Binary Search in C++", url: "https://www.geeksforgeeks.org/binary-search-in-c/" }] },
        ],
      },
      {
        title: "Graphs",
        points: [
          { text: "Represent graphs using an adjacency matrix or an adjacency list (`std::vector<std::vector<int>>`).", resources: [{ name: "Graph Representation", url: "https://www.geeksforgeeks.org/graph-and-its-representations/" }] },
          { text: "Implement Breadth-First Search (BFS) and Depth-First Search (DFS).", resources: [{ name: "BFS and DFS in C++", url: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/" }] },
          { text: "Explore pathfinding algorithms like Dijkstra's.", resources: [{ name: "Dijkstra's Algorithm in C++", url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" }] },
        ],
      },
    ],
    assignments: [
        { title: "Valid Parentheses", description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Use `std::stack`." },
        { title: "Binary Search Tree Insertion", description: "Implement a function to insert a new value into a Binary Search Tree while maintaining its properties." },
        { title: "Two Sum", description: "Given an array of integers and a target, return indices of the two numbers such that they add up to the target. Use `std::unordered_map` for an efficient O(n) solution." }
    ]
  },
  {
    id: "service-based-placement-prep",
    title: "Service-Based Companies Placement Prep",
    description: "A focused guide to cracking interviews at top service-based IT companies.",
    category: "On-Campus Service-Based",
    topics: [
      {
        title: "Aptitude and Reasoning",
        points: [
          { text: "Quantitative Aptitude: Time & Work, Speed & Distance, Percentages, Profit & Loss.", resources: [{ name: "IndiaBIX Quants", url: "https://www.indiabix.com/aptitude/questions-and-answers/"}] },
          { text: "Logical Reasoning: Seating Arrangements, Blood Relations, Coding-Decoding, Data Interpretation.", resources: [{ name: "IndiaBIX Reasoning", url: "https://www.indiabix.com/logical-reasoning/questions-and-answers/"}] }
        ]
      },
      {
        title: "Verbal Ability",
        points: [
            { text: "Improve reading comprehension skills.", resources: [] },
            { text: "Practice grammar, sentence correction, and vocabulary.", resources: [] }
        ]
      },
      {
        title: "Technical Fundamentals",
        points: [
            { text: "Review core concepts of one programming language (C++, Java, or Python).", resources: [] },
            { text: "Study basics of Data Structures (Arrays, Strings, Linked Lists).", resources: [] },
            { text: "Understand core Object-Oriented Programming (OOP) principles.", resources: [] },
            { text: "Learn fundamentals of Database Management Systems (DBMS) and SQL.", resources: [] },
            { text: "Review basics of Computer Networks and Operating Systems.", resources: [] }
        ]
      }
    ]
  },
  {
    id: "product-based-placement-prep",
    title: "Product-Based Companies Placement Prep",
    description: "A comprehensive roadmap to prepare for technical roles at leading product-based companies.",
    category: "On-Campus Product-Based",
    topics: [
      {
        title: "Data Structures & Algorithms (DSA)",
        points: [
          { text: "Master arrays, strings, linked lists, stacks, and queues.", resources: [] },
          { text: "Deep dive into trees, heaps, hash tables, and graphs.", resources: [] },
          { text: "Practice common algorithmic patterns: Two Pointers, Sliding Window, Recursion, Dynamic Programming.", resources: [] }
        ]
      },
      {
        title: "System Design",
        points: [
          { text: "Learn the fundamentals of designing scalable systems (CAP theorem, Load Balancing, Caching).", resources: [] },
          { text: "Practice designing common systems like a URL shortener, a social media feed, or a ride-sharing service.", resources: [] }
        ]
      },
      {
        title: "Core CS Subjects",
        points: [
          { text: "Ensure a strong understanding of Operating Systems, Computer Networks, and DBMS.", resources: [] }
        ]
      }
    ]
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "A comprehensive path to becoming a proficient software engineer, covering fundamentals, frontend, backend, databases, and DevOps.",
    category: "Job Roles",
    subCategory: "Core Software Development",
    topics: [
        {
            title: "Programming Fundamentals",
            points: [
                { text: "Choose a primary programming language (e.g., Python, JavaScript, Java, C++).", resources: [{ name: "Choosing a Language", url: "https://www.freecodecamp.org/news/how-to-choose-your-first-programming-language/" }] },
                { text: "Master core concepts: variables, data types, control flow (if/else, loops), and functions.", resources: [] },
                { text: "Learn Object-Oriented Programming (OOP) principles: encapsulation, inheritance, polymorphism.", resources: [] },
            ],
        },
        {
            title: "Data Structures & Algorithms",
            points: [
                { text: "Understand fundamental data structures: Arrays, Linked Lists, Stacks, Queues, Hash Tables.", resources: [{ name: "DSA Path", url: "/dsa-learning-path" }] },
                { text: "Learn common algorithms: Sorting (Merge Sort, Quick Sort), Searching (Binary Search), and graph traversals (BFS, DFS).", resources: [] },
                { text: "Practice solving problems on platforms like LeetCode or HackerRank.", resources: [{ name: "LeetCode", url: "https://leetcode.com/" }] },
            ],
        },
        {
            title: "Web Development Foundations",
            points: [
                { text: "Learn HTML for structure, CSS for styling, and JavaScript for interactivity.", resources: [{ name: "Web Dev Foundations", url: "/learn/web-development-foundations" }] },
                { text: "Understand how the internet works: HTTP/HTTPS, DNS, and the client-server model.", resources: [] },
                { text: "Master version control with Git and host your code on GitHub.", resources: [{ name: "Git Guide", url: "/learn/git-version-control" }] },
            ],
        },
        {
            title: "Front-End Development",
            points: [
                { text: "Learn a modern JavaScript framework like React.", resources: [{ name: "React Docs", url: "https://react.dev/" }] },
                { text: "Build powerful web applications with a React framework like Next.js.", resources: [{ name: "Next.js Docs", url: "https://nextjs.org/docs" }] },
            ],
        },
        {
            title: "Back-End Development",
            points: [
                { text: "Learn a back-end language and framework, such as Node.js with Express.", resources: [{ name: "Node.js Guide", url: "https://nodejs.org/en/docs/guides" }] },
                { text: "Build RESTful APIs to serve data to your front-end application.", resources: [] },
            ],
        },
        {
            title: "Databases",
            points: [
                { text: "Understand and use SQL databases like PostgreSQL.", resources: [{ name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" }] },
                { text: "Learn about NoSQL databases like MongoDB.", resources: [{ name: "MongoDB University", url: "https://learn.mongodb.com/" }] },
            ],
        },
        {
            title: "DevOps & Deployment",
            points: [
                { text: "Learn to containerize your applications with Docker.", resources: [{ name: "Docker Get Started", url: "https://docs.docker.com/get-started/" }] },
                { text: "Understand CI/CD principles to automate your build and deployment pipeline.", resources: [] },
                { text: "Deploy your applications on a cloud platform like AWS, Google Cloud, or Vercel.", resources: [{ name: "Vercel", url: "https://vercel.com/docs" }] },
            ],
        },
    ],
    assignments: [
        { title: "Build a Full-Stack Blog", description: "Create a complete blog application with a React frontend, a Node.js/Express backend API, and a PostgreSQL database. Users should be able to create, read, update, and delete posts." },
        { title: "Containerize an Application", description: "Take a simple web application you've built and write a Dockerfile for it. Then, use Docker Compose to run the application along with its database in separate containers." },
        { title: "Set Up a CI/CD Pipeline", description: "Create a project on GitHub and set up a basic CI/CD pipeline using GitHub Actions that automatically runs tests every time you push a new commit." }
    ]
  },
];
