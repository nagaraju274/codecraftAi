
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
];
