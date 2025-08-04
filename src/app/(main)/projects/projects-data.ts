
export const projects = [
  {
    id: "todo-app",
    title: "To-Do List Application",
    description: "Build a classic to-do list app to manage your daily tasks. This project is perfect for learning the fundamentals of state management in a React application.",
    tags: ["React", "State Management", "UI/UX"],
    steps: [
      {
        title: "Project Setup",
        description: "Initialize a new Next.js application and clean up the boilerplate code.",
        details: `<p>First, we need a clean slate. We will start by creating a new page for our To-Do application and removing the default content. This sets up the foundation for us to build upon.</p>
                   <ul>
                    <li>Create a new file at <code>src/app/todo/page.tsx</code>.</li>
                    <li>Add basic functional component structure.</li>
                   </ul>`,
        code: `// src/app/todo/page.tsx
"use client";
import { useState } from 'react';

export default function TodoPage() {
  return <h1>My To-Do App</h1>
}
`,
        hint: "Every React component needs to return a single root element. Make sure your component renders a main container like a <div> or a Fragment <>."
      },
      {
        title: "Create UI Components",
        description: "Build the basic user interface for adding and displaying tasks.",
        details: `<p>Let's build the visual parts of our app. We'll use ShadCN UI components for a consistent and professional look. We need an input field to add new tasks, a button to submit them, and a list to display them.</p>
                   <ul>
                     <li>Import <code>Card</code>, <code>Input</code>, <code>Button</code>, and <code>ul</code> for the structure.</li>
                     <li>Lay out the components in a logical order on the page.</li>
                   </ul>
                  `,
        code: `// src/app/todo/page.tsx
"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export default function TodoPage() {
  return (
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>My To-Do List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input placeholder="Add a new task..." />
            <Button><Plus className="h-4 w-4" /> Add</Button>
          </div>
          <ul>
            {/* Tasks will be rendered here */}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
`,
        hint: "Think about how you want to structure your page. A 'Card' component can be a great way to contain your application and give it a clean, defined look."
      },
      {
        title: "Manage State for Tasks",
        description: "Use React's useState hook to manage the list of tasks and the input field.",
        details: `<p>An application needs to remember things. We'll use the <code>useState</code> hook to store the list of tasks and to keep track of what the user is typing into the input field. This is the core of the app's interactivity.</p>
                   <ol>
                    <li>Create a state variable called <code>tasks</code>, initialized to an empty array. This will hold our list of to-do items.</li>
                    <li>Create another state variable called <code>newTask</code>, initialized to an empty string. This will be bound to the input field.</li>
                   </ol>`,
        code: `// ... imports
export default function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // ... rest of the JSX
  // Make sure to connect the state to the JSX elements:
  // <Input 
  //   value={newTask} 
  //   onChange={(e) => setNewTask(e.target.value)} 
  //   placeholder="Add a new task..." 
  // />
}
`,
        hint: "Remember that `useState` returns an array with two elements: the current state value and a function to update it. Use array destructuring like `const [myState, setMyState] = useState(initialValue);` to easily access them."
      },
      {
        title: "Implement Add Task Functionality",
        description: "Write the logic to add a new task to the list when the user clicks the 'Add' button.",
        details: `<p>Now let's make the 'Add' button work. We'll create a function that takes the current text from the input field, creates a new task object, and adds it to our list of tasks. We also need to clear the input field afterwards for a better user experience.</p>`,
        code: `const handleAddTask = () => {
  if (newTask.trim() === "") return; // Don't add empty tasks
  const task = { id: Date.now(), text: newTask, completed: false };
  setTasks([...tasks, task]);
  setNewTask("");
};

// Add this to the button's onClick event:
// <Button onClick={handleAddTask}>...</Button>
`,
        hint: "When updating state that is an array or object, it's best practice to create a new array or object rather than modifying the existing one directly. Using the spread syntax `[...oldArray, newItem]` is a great way to do this."
      },
      {
        title: "Display the List of Tasks",
        description: "Map over the tasks array to render each task on the screen.",
        details: `<p>It's time to see our tasks! We will map over the <code>tasks</code> array in our state. For each task object in the array, we'll render a list item. This will dynamically update the UI whenever the tasks list changes.</p>`,
        code: `// Inside the <ul> element:
{tasks.map(task => (
  <li key={task.id} className="flex items-center gap-2 p-2 border-b">
    <span>{task.text}</span>
  </li>
))}
`,
        hint: "When rendering a list of elements in React, always remember to add a unique `key` prop to the outermost element in the loop. This helps React identify which items have changed, are added, or are removed."
      },
      {
        title: "Implement Task Completion",
        description: "Allow users to mark tasks as complete by clicking on them.",
        details: `<p>A to-do list isn't very useful if you can't check things off. We'll add a checkbox and a function to toggle the 'completed' status of a task. This will also visually distinguish completed tasks.</p>`,
        code: `import { Checkbox } from "@/components/ui/checkbox";

const handleToggleComplete = (id) => {
  setTasks(tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
};

// Inside the tasks.map() loop:
<li key={task.id} className="...">
  <Checkbox 
    checked={task.completed} 
    onCheckedChange={() => handleToggleComplete(task.id)}
    id={\`task-\${task.id}\`}
  />
  <label 
    htmlFor={\`task-\${task.id}\`}
    className={\`flex-1 cursor-pointer \${task.completed ? 'line-through text-muted-foreground' : ''}\`}
  >
    {task.text}
  </label>
</li>
`,
        hint: "To change a specific item in an array in state, `map` is your best friend. It lets you create a new array while allowing you to transform the one item you want to change."
      },
      {
        title: "Implement Task Deletion",
        description: "Add a button to allow users to delete tasks from the list.",
        details: `<p>Finally, let's add the ability to remove tasks. We will add a delete button to each task item and write a function that filters the tasks array, removing the task with the matching ID.</p>`,
        code: `import { X } from "lucide-react";

const handleDeleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

// Inside the tasks.map() loop, after the label:
<Button 
  variant="ghost" 
  size="icon" 
  className="ml-auto"
  onClick={() => handleDeleteTask(task.id)}
>
  <X className="h-4 w-4" />
</Button>
`,
        hint: "The `filter` array method is perfect for removing items from an array in state. It returns a new array containing only the elements that pass the test implemented by the provided function."
      }
    ]
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    description: "Create an application that fetches and displays weather data from a third-party API.",
    tags: ["React", "API Integration", "Async"],
    steps: [],
    aiHint: "weather forecast",
  },
  {
    id: "blog-platform",
    title: "Personal Blog Platform",
    description: "Develop a simple but functional blog where you can create, edit, and delete posts.",
    tags: ["Next.js", "Routing", "Full-Stack"],
    steps: [],
    aiHint: "writing blog",
  },
  {
    id: "image-recognizer",
    title: "AI Image Recognizer",
    description: "Dive into the world of AI by building an application that can identify objects in images using a machine learning model.",
    tags: ["Genkit", "AI", "Image Recognition"],
    steps: [],
    aiHint: "artificial intelligence",
  },
  {
    id: "portfolio-generator",
    title: "AI Portfolio Generator",
    description: "Build a tool that generates a personal portfolio website based on user input.",
    tags: ["Next.js", "Genkit", "AI", "Web Development"],
    steps: [],
    aiHint: "personal website",
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder App",
    description: "Create an app that helps users discover new recipes based on ingredients they have.",
    tags: ["React", "Data Filtering", "UI Design"],
    steps: [],
    aiHint: "cooking recipe",
  },
];
