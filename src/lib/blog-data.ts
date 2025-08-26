
export interface Post {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content: string; // HTML content
}

export const blogPosts: Post[] = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React in 2024',
    description: 'A comprehensive guide to setting up your first React application and understanding the core concepts like components, props, and state.',
    author: 'Jane Doe',
    date: '2024-03-15',
    content: `
      <h2>Why Learn React?</h2>
      <p>React has become the most popular library for building modern, dynamic user interfaces. Its component-based architecture allows developers to build reusable UI pieces and manage complex application state with ease.</p>
      
      <h3>Setting Up Your First Project</h3>
      <p>The easiest way to start a new React project is by using a tool like Vite. Open your terminal and run the following command:</p>
      <pre><code class="language-bash">npm create vite@latest my-react-app -- --template react</code></pre>
      
      <h3>Core Concepts: Components</h3>
      <p>Everything in React is a component. A component is a self-contained, reusable piece of code that returns some JSX (JavaScript XML), which looks like HTML.</p>
      <pre><code class="language-jsx">
function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}
      </code></pre>

      <p>This tutorial provides a starting point. Dive into the official React documentation to learn more about state, props, and hooks!</p>
    `
  },
  {
    slug: 'understanding-apis-for-beginners',
    title: 'Understanding APIs for Beginners',
    description: 'What is an API? This post breaks down the fundamentals of Application Programming Interfaces and how they power the web.',
    author: 'John Smith',
    date: '2024-03-10',
    content: `
      <h2>What Does API Stand For?</h2>
      <p>API stands for <strong>Application Programming Interface</strong>. In simple terms, an API is a messenger that takes requests and tells a system what you want to do, and then returns a response back to you.</p>

      <h3>A Restaurant Analogy</h3>
      <p>Imagine you're at a restaurant. You (the client) want to order food. You don't go into the kitchen yourself; instead, you give your order to the waiter (the API). The waiter takes your order to the kitchen (the server), which prepares your food. The waiter then brings the food back to you. The waiter is the API, abstracting the complexity of the kitchen away from you.</p>
      
      <h3>Why are APIs important?</h3>
      <ul>
        <li>They allow different software systems to communicate with each other.</li>
        <li>They enable developers to use functionality from other services without having to build it themselves (e.g., using Google Maps API).</li>
        <li>They form the backbone of modern web and mobile applications.</li>
      </ul>
    `
  },
  {
    slug: 'css-flexbox-vs-grid',
    title: 'CSS Flexbox vs. Grid: Which One Should You Use?',
    description: 'A practical comparison between the two most powerful CSS layout models, Flexbox and Grid, with examples of when to use each.',
    author: 'Alex Johnson',
    date: '2024-03-05',
    content: `
      <h2>The Main Difference</h2>
      <p>The simplest way to think about it is:</p>
      <ul>
        <li><strong>Flexbox</strong> was designed for one-dimensional layouts (either a row or a column).</li>
        <li><strong>CSS Grid</strong> was designed for two-dimensional layouts (rows and columns at the same time).</li>
      </ul>

      <h3>When to Use Flexbox</h3>
      <p>Flexbox is ideal for aligning items within a container. Think about navigation bars, centering a single item in a div, or distributing items evenly in a row.</p>
      <pre><code class="language-css">
.container {
  display: flex;
  justify-content: space-between; /* Aligns items along the main axis */
  align-items: center; /* Aligns items along the cross axis */
}
      </code></pre>

      <h3>When to Use Grid</h3>
      <p>Grid shines when you need to create complex, full-page layouts with rows and columns. It allows you to precisely place items into a grid that you define.</p>
      <pre><code class="language-css">
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Creates three equal columns */
  gap: 1rem;
}
      </code></pre>
      
      <h3>Can They Work Together?</h3>
      <p>Absolutely! It's very common to use Grid for the main page layout and then use Flexbox to align the items within a specific grid cell. They are not competitors, but rather two tools for different jobs.</p>
    `
  },
  {
    slug: 'guide-to-prompt-engineering',
    title: "A Developer's Guide to Prompt Engineering",
    description: 'Learn how to write effective prompts to get the best results from Large Language Models (LLMs) and other GenAI tools.',
    author: 'AI Mentor',
    date: '2024-04-01',
    content: `
      <h2>Why Prompt Engineering Matters</h2>
      <p>As AI becomes more integrated into developer workflows, the ability to communicate effectively with AI models is a crucial skill. Prompt engineering is the art and science of designing inputs for AI to produce the most accurate, relevant, and useful outputs. A well-crafted prompt can be the difference between a generic answer and a perfect code snippet.</p>
      
      <h3>Key Principles of Effective Prompts</h3>
      <ol>
        <li><strong>Be Specific and Clear:</strong> Provide as much context as possible. Instead of asking "fix my code," provide the code, the error message, the programming language, and what you're trying to achieve.</li>
        <li><strong>Define the Persona:</strong> Tell the AI who it should be. For example, "You are an expert C++ developer specializing in memory optimization." This sets the context for the tone and depth of the response.</li>
        <li><strong>Provide Examples (Few-Shot Prompting):</strong> Show the AI exactly what you want. If you need code in a specific format, provide one or two examples of the input and the desired output.</li>
        <li><strong>Use Constraints:</strong> Guide the AI by telling it what *not* to do. For instance, "Provide only the JavaScript code without any explanation" or "Avoid using external libraries."</li>
      </ol>

      <h3>Example: From a Bad Prompt to a Good Prompt</h3>
      <p><strong>Bad Prompt:</strong> "Write a function to check if a word is a palindrome."</p>
      <p><strong>Good Prompt:</strong> "You are a Python programming expert. Write an efficient Python function called \`is_palindrome\` that takes a single string argument and returns \`True\` if the word is a palindrome and \`False\` otherwise. The function should be case-insensitive and should ignore non-alphanumeric characters. Include a brief explanation of how the code works."</p>
    `
  },
  {
    slug: 'zero-to-full-stack-nextjs',
    title: 'From Zero to Full-Stack with Next.js',
    description: 'A high-level overview of the technologies and steps required to build a modern, full-stack web application with Next.js.',
    author: 'John Smith',
    date: '2024-03-25',
    content: `
      <h2>What is a Full-Stack Application?</h2>
      <p>A full-stack application includes both a <strong>front-end</strong> (what the user sees and interacts with in their browser) and a <strong>back-end</strong> (the server, database, and logic that powers the application). As a full-stack developer, you are comfortable working on both sides.</p>
      
      <h3>The Core Components</h3>
      <ul>
        <li><strong>Front-End (The "View"):</strong> For a modern stack, this is typically built with a JavaScript framework like <strong>React</strong>. Next.js extends React with powerful features for building the front-end.</li>
        <li><strong>Back-End (The "Logic"):</strong> This is where your business logic lives. With Next.js, you can write your back-end logic directly within your project using API Routes (or Route Handlers in the App Router). This is powered by <strong>Node.js</strong>.</li>
        <li><strong>Database (The "State"):</strong> This is where your application's data is stored. Popular choices include PostgreSQL (SQL) or MongoDB (NoSQL). You'll need a way for your back-end to communicate with the database, often through a library called an ORM (like Prisma).</li>
      </ul>

      <h3>Steps to Build a Full-Stack App</h3>
      <ol>
        <li><strong>Project Setup:</strong> Initialize a new Next.js project.</li>
        <li><strong>Database Schema:</strong> Design your data models and set up your database tables.</li>
        <li><strong>API Routes:</strong> Create the back-end endpoints to perform CRUD (Create, Read, Update, Delete) operations on your data.</li>
        <li><strong>Front-End Components:</strong> Build the React components that will form your user interface.</li>
        <li><strong>Connect Front-End to Back-End:</strong> Write the client-side code to make API calls to your back-end routes and display the data.</li>
        <li><strong>Authentication:</strong> Add user login and registration to secure your application.</li>
        <li><strong>Deployment:</strong> Deploy your front-end and back-end to a hosting provider like Vercel or Netlify.</li>
      </ol>
      <p>Building a full-stack application can seem daunting, but by breaking it down into these components, you can tackle it one piece at a time. Our AI Project Builder is a great way to get started on this journey!</p>
    `
  }
];
