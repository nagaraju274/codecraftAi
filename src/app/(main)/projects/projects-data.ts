
export const projects = [
  {
    id: "todo-app",
    title: "To-Do List Application",
    description: "Build a classic to-do list app to manage your daily tasks. This project is perfect for learning the fundamentals of state management in a React application.",
    imageUrl: "/to-do list image.png",
    aiHint: "task list",
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
    description: "Create an application that fetches and displays weather data from a third-party API. You'll learn how to handle asynchronous data and present it in a user-friendly interface.",
    imageUrl: "/Weather Forecast App image.jpg",
    aiHint: "weather forecast",
    tags: ["React", "API Integration", "Async"],
    steps: [
        {
            title: "Project Setup",
            description: "Initialize the page for the weather application.",
            details: "<p>We will create a new page for our Weather App. This will be the main container for all the UI elements and logic.</p><ul><li>Create a new file at <code>src/app/weather/page.tsx</code>.</li><li>Add the basic component structure.</li></ul>",
            code: `// src/app/weather/page.tsx
"use client";
import { useState } from 'react';

export default function WeatherPage() {
  return <h1>Weather Forecast App</h1>
}`,
            hint: "Start with a simple heading to make sure your new page is routing and displaying correctly before adding more complex components."
        },
        {
            title: "Build the UI",
            description: "Create the user interface for searching a city and displaying weather data.",
            details: "<p>Let's design the user interface. We need an input field for the city name, a search button, and a dedicated area to display the weather information once it's fetched.</p>",
            code: `// src/app/weather/page.tsx
"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function WeatherPage() {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    // API call logic will go here
  };

  return (
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Weather Forecast</CardTitle>
          <CardDescription>Enter a city name to get the latest forecast.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input 
              placeholder="E.g., London, New York" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={handleSearch}><Search className="h-4 w-4 mr-2" /> Search</Button>
          </div>
          {/* Weather data will be displayed here */}
        </CardContent>
      </Card>
    </div>
  )
}`,
            hint: "Use state to manage the input field's value. This makes it a controlled component and gives you easy access to the city name when you're ready to make the API call."
        },
        {
            title: "Fetch Weather Data",
            description: "Use an API to get weather data for the specified city.",
            details: "<p>This is where we connect to the outside world. We'll use the <code>fetch</code> API to make a request to a public weather API. We will need to manage loading and error states to give the user a good experience.</p><p>For this example, we'll use the OpenWeatherMap API. You'll need to sign up for a free API key on their website.</p>",
            code: `// Add these state variables
const [weatherData, setWeatherData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleSearch = async () => {
  if (city.trim() === "") return;
  setLoading(true);
  setError(null);
  setWeatherData(null);
  
  // IMPORTANT: Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
  const API_KEY = 'YOUR_API_KEY';
  const API_URL = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('City not found or API error.');
    }
    const data = await response.json();
    setWeatherData(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};`,
            hint: "Always handle loading and error states when fetching data. Show a spinner while loading and a clear message if something goes wrong. This greatly improves the user experience."
        },
        {
            title: "Display Weather Data",
            description: "Render the fetched weather information in the UI.",
            details: "<p>Now that we have the data, let's display it! We'll show the city name, temperature, weather conditions, and other useful information. We will use conditional rendering to show the data only when it's available.</p>",
            code: `// Inside CardContent, after the input div
{loading && <p>Loading...</p>}
{error && <p className="text-destructive">{error}</p>}
{weatherData && (
  <div className="mt-4 space-y-4">
    <h2 className="text-2xl font-bold">{weatherData.name}, {weatherData.sys.country}</h2>
    <div className="flex items-center gap-4">
      <img 
        src={\`http://openweathermap.org/img/wn/\${weatherData.weather[0].icon}@2x.png\`}
        alt={weatherData.weather[0].description}
      />
      <div>
        <p className="text-4xl font-bold">{Math.round(weatherData.main.temp)}°C</p>
        <p className="text-muted-foreground capitalize">{weatherData.weather[0].description}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="flex items-center gap-2"><span>Feels like:</span> <strong>{Math.round(weatherData.main.feels_like)}°C</strong></div>
      <div className="flex items-center gap-2"><span>Humidity:</span> <strong>{weatherData.main.humidity}%</strong></div>
      <div className="flex items-center gap-2"><span>Wind:</span> <strong>{weatherData.wind.speed} m/s</strong></div>
      <div className="flex items-center gap-2"><span>Pressure:</span> <strong>{weatherData.main.pressure} hPa</strong></div>
    </div>
  </div>
)}`,
            hint: "Break down the display of complex data into smaller components or sections. This makes your code cleaner and easier to read. For example, have one section for the main temperature and another for additional details."
        }
    ]
  },
  {
    id: "blog-platform",
    title: "Personal Blog Platform",
    description: "Develop a simple but functional blog where you can create, edit, and delete posts. This project introduces concepts of routing and data persistence.",
    imageUrl: "/Personal Blog Platform image.jpg",
    aiHint: "writing blog",
    tags: ["Next.js", "Routing", "Full-Stack"],
    steps: [
        {
            title: "Setup Blog Pages",
            description: "Create the necessary pages for the blog, including the main posts list and a page for individual posts.",
            details: "<p>First, we need to set up the routing for our blog. We'll create a main page to list all blog posts and a dynamic route to display a single post based on its ID.</p><ul><li>Create a new folder <code>src/app/blog</code>.</li><li>Inside, create <code>page.tsx</code> for the list and <code>[postId]/page.tsx</code> for individual posts.</li></ul>",
            code: `// src/app/blog/page.tsx
import Link from 'next/link';
// We'll use mock data for now
const posts = [{ id: '1', title: 'My First Post' }]; 

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={\`/blog/\${post.id}\`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// src/app/blog/[postId]/page.tsx
export default function PostPage({ params }: { params: { postId: string }}) {
  return <h1>Post: {params.postId}</h1>
}
`,
            hint: "Next.js uses a file-system based router. Folders define routes, and `page.tsx` files define the UI for that route. A folder name in square brackets, like `[postId]`, creates a dynamic route segment."
        },
        {
            title: "Create Mock Data",
            description: "Set up a temporary data source to simulate having a database of blog posts.",
            details: "<p>Before building a real backend, it's helpful to work with mock data. We'll create an array of post objects that our application can use. This allows us to build out the frontend UI completely before worrying about the database.</p>",
            code: `// src/lib/blog-data.ts
export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

export const posts: Post[] = [
  { id: '1', title: 'Getting Started with Next.js', content: 'This is a post about Next.js.', author: 'John Doe', date: '2023-10-27' },
  { id: '2', title: 'Understanding React Hooks', content: 'Hooks are a powerful feature in React.', author: 'Jane Smith', date: '2023-10-28' },
];
`,
            hint: "Defining an interface (like `Post`) for your data structure from the beginning is a great practice. It provides type safety and makes your code easier to understand and maintain."
        },
        {
            title: "Display List of Posts",
            description: "Fetch the mock data and display it on the main blog page.",
            details: "<p>Now, let's use our mock data. We'll import the posts into our main blog page and map over them to create a styled list of blog entries, each linking to its own page.</p>",
            code: `// src/app/blog/page.tsx
import Link from 'next/link';
import { posts } from '@/lib/blog-data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <Link href={\`/blog/\${post.id}\`} key={post.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>By {post.author} on {post.date}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
`,
            hint: "Wrapping interactive elements like `Card` inside a Next.js `Link` component is the standard way to create clickable, navigational items."
        },
        {
            title: "Display Single Post",
            description: "Create the page to display the full content of a single blog post.",
            details: "<p>Let's make the individual post pages work. We'll use the dynamic `postId` from the URL to find the correct post in our mock data and then display its title and full content.</p>",
            code: `// src/app/blog/[postId]/page.tsx
import { posts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';

export default function PostPage({ params }: { params: { postId: string }}) {
  const post = posts.find(p => p.id === params.postId);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-muted-foreground mb-8">By {post.author} on {post.date}</p>
      <div className="prose dark:prose-invert">
        <p>{post.content}</p>
      </div>
    </article>
  )
}
`,
            hint: "In a dynamic route page, always handle the case where the requested item doesn't exist. Next.js provides the `notFound()` function to render a standard 404 page, which is the correct approach."
        }
    ]
  },
  {
    id: "image-recognizer",
    title: "AI Image Recognizer",
    description: "Dive into the world of AI by building an application that can identify objects in images using a machine learning model.",
    imageUrl: "/AI Image Recognizer image.png",
    aiHint: "artificial intelligence",
    tags: ["Genkit", "AI", "Image Recognition"],
    steps: [
      {
          title: "Setup Genkit Flow",
          description: "Create a Genkit flow that takes an image and returns a description.",
          details: "<p>First, we need to define the AI logic. We'll create a Genkit flow that accepts an image as a data URI and a prompt, and then uses a generative model to describe what it sees in the image.</p><ul><li>Create a new file at <code>src/ai/flows/recognize-image.ts</code></li><li>Define input and output schemas using Zod.</li><li>Create the prompt and the flow.</li></ul>",
          code: `// src/ai/flows/recognize-image.ts
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const RecognizeImageInputSchema = z.object({
  image: z.string().describe("A photo of an object, as a data URI."),
  prompt: z.string().describe("The prompt to guide the AI."),
});
export type RecognizeImageInput = z.infer<typeof RecognizeImageInputSchema>;

export const RecognizeImageOutputSchema = z.object({
  description: z.string().describe('The AI-generated description of the image.'),
});
export type RecognizeImageOutput = z.infer<typeof RecognizeImageOutputSchema>;

const recognizeImagePrompt = ai.definePrompt({
    name: 'recognizeImagePrompt',
    input: { schema: RecognizeImageInputSchema },
    output: { schema: RecognizeImageOutputSchema },
    prompt: \`
      You are an image recognition expert. 
      Based on the user's prompt, describe the following image.
      Prompt: {{{prompt}}}
      Image: {{media url=image}}
    \`,
});

export const recognizeImageFlow = ai.defineFlow(
  {
    name: 'recognizeImageFlow',
    inputSchema: RecognizeImageInputSchema,
    outputSchema: RecognizeImageOutputSchema,
  },
  async (input) => {
    const { output } = await recognizeImagePrompt(input);
    return output!;
  }
);
`,
          hint: "When working with images in Genkit, passing them as data URIs is a reliable method. The prompt can then reference the image using `{{media url=...}}`."
      },
      {
          title: "Build the Frontend",
          description: "Create the user interface for uploading an image and displaying the AI's analysis.",
          details: "<p>Now, let's build the interface. We need a file input to allow users to upload an image, a text input for a custom prompt, and an area to display the result from our Genkit flow.</p>",
          code: `// src/app/recognizer/page.tsx
"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import { recognizeImageFlow } from '@/ai/flows/recognize-image'; // This will be created in the next step

export default function RecognizerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("What is in this image?");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleRecognize = async () => {
    if (!file) return;
    setLoading(true);
    setResult("");

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result as string;
      try {
        const response = await recognizeImageFlow({ image: base64Image, prompt });
        setResult(response.description);
      } catch (error) {
        setResult("Failed to analyze image.");
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>AI Image Recognizer</CardTitle>
          <CardDescription>Upload an image and ask the AI to describe it.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="file" accept="image/*" onChange={handleFileChange} />
          {previewUrl && <Image src={previewUrl} alt="Preview" width={500} height={300} className="rounded-md object-contain" />}
          <Textarea 
            placeholder="E.g., What is in this image?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={handleRecognize} disabled={!file || loading}>
            {loading ? "Analyzing..." : "Recognize Image"}
          </Button>
          {result && (
            <div className="pt-4">
              <h3 className="font-semibold">AI Analysis:</h3>
              <p className="text-muted-foreground">{result}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
`,
          hint: "To show an image preview on the client-side before uploading, you can use `URL.createObjectURL()` to create a temporary URL from the selected file object."
      },
      {
        title: "Connect Frontend to Backend",
        description: "Wire up the UI to call the Genkit flow and display the results.",
        details: "<p>The final step is to connect our UI to the AI flow. When the user clicks the 'Recognize' button, we will read the image file as a Base64 string and send it along with the prompt to our Genkit flow. The returned description will then be displayed on the page.</p>",
        code: `// This logic is already included in the previous step's code.
const handleRecognize = async () => {
  if (!file) return;
  setLoading(true);
  setResult("");

  // FileReader converts the file to a Base64 string
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async () => {
    const base64Image = reader.result as string; // This is the data URI
    try {
      // Call the Genkit flow
      const response = await recognizeImageFlow({ image: base64Image, prompt });
      setResult(response.description);
    } catch (error) {
      console.error(error);
      setResult("Failed to analyze image.");
    } finally {
      setLoading(false);
    }
  };
  reader.onerror = () => {
    setLoading(false);
    setResult("Failed to read file.");
  }
};
`,
        hint: "The `FileReader` API in browsers is asynchronous. The result is only available inside the `onload` event handler, so you must place your API call logic there."
    }
    ]
  },
  {
    id: "portfolio-generator",
    title: "AI Portfolio Generator",
    description: "Build a tool that generates a personal portfolio website based on user input. This project combines form handling with dynamic content generation using AI.",
    imageUrl: "/AI Portfolio Generator image.png",
    aiHint: "personal website",
    tags: ["Next.js", "Genkit", "AI", "Web Development"],
    steps: [
       {
            title: "Setup AI Flow",
            description: "Create a Genkit flow to generate portfolio content.",
            details: "<p>The core of our app is an AI flow that takes user details and generates HTML for a portfolio. We'll use Zod to define a structured input schema for user information.</p>",
            code: `// src/ai/flows/generate-portfolio.ts
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const PortfolioInputSchema = z.object({
  name: z.string().describe("The user's full name."),
  bio: z.string().describe("A short biography about the user."),
  skills: z.array(z.string()).describe("A list of the user's skills."),
});
export type PortfolioInput = z.infer<typeof PortfolioInputSchema>;

export const PortfolioOutputSchema = z.object({
  htmlContent: z.string().describe('The full HTML content of the portfolio page.'),
});
export type PortfolioOutput = z.infer<typeof PortfolioOutputSchema>;

const portfolioPrompt = ai.definePrompt({
    name: 'portfolioPrompt',
    input: { schema: PortfolioInputSchema },
    output: { schema: PortfolioOutputSchema },
    prompt: \`
      You are an expert web designer. Create a professional, single-page portfolio HTML using TailwindCSS classes.
      The portfolio is for:
      - Name: {{{name}}}
      - Bio: {{{bio}}}
      - Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

      Generate a complete HTML document, including <!DOCTYPE>, <html>, <head> with a title, and <body>.
      Use modern design principles and make it visually appealing.
    \`,
});

export const generatePortfolioFlow = ai.defineFlow(
  {
    name: 'generatePortfolioFlow',
    inputSchema: PortfolioInputSchema,
    outputSchema: PortfolioOutputSchema,
  },
  async (input) => {
    const { output } = await portfolioPrompt(input);
    return output!;
  }
);
`,
            hint: "In your prompt, be very specific about the expected output format. Asking for a 'complete HTML document' including the doctype and head ensures the AI provides a full, ready-to-use file."
        },
        {
            title: "Create Input Form",
            description: "Build the user interface for inputting portfolio details.",
            details: "<p>We need a form for users to enter their name, biography, and skills. We'll use React state to manage the form inputs.</p>",
            code: `// src/app/portfolio-generator/page.tsx
"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PortfolioGeneratorPage() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  
  const handleGenerate = () => {
    // AI call will go here
  };

  return (
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>AI Portfolio Generator</CardTitle>
          <CardDescription>Fill in your details and let AI build your website.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
          <Textarea placeholder="Short Bio" value={bio} onChange={e => setBio(e.target.value)} />
          <Input placeholder="Skills (comma-separated)" value={skills} onChange={e => setSkills(e.target.value)} />
          <Button onClick={handleGenerate}>Generate Portfolio</Button>
        </CardContent>
      </Card>
    </div>
  )
}
`,
            hint: "For a list of items like skills, accepting them as a single comma-separated string in the input field is a simple and effective approach for the user."
        },
        {
            title: "Generate and Display Portfolio",
            description: "Call the AI flow and display the generated HTML.",
            details: "<p>When the user clicks 'Generate', we'll call our Genkit flow with the form data. The AI will return a full HTML page as a string. We will then display this HTML in a new browser tab for the user to see and save.</p>",
            code: `// Add to PortfolioGeneratorPage component
import { generatePortfolioFlow } from '@/ai/flows/generate-portfolio';
const [loading, setLoading] = useState(false);

const handleGenerate = async () => {
  setLoading(true);
  try {
    const skillsArray = skills.split(',').map(s => s.trim());
    const result = await generatePortfolioFlow({ name, bio, skills: skillsArray });
    
    // Open the generated HTML in a new tab
    const newTab = window.open();
    newTab?.document.write(result.htmlContent);
    newTab?.document.close();

  } catch (error) {
    console.error("Failed to generate portfolio:", error);
    alert("Sorry, something went wrong.");
  } finally {
    setLoading(false);
  }
};
`,
            hint: "You can use `window.open()` and `document.write()` to dynamically create and display new HTML content in a new browser tab. This is a great way to preview the generated page."
        }
    ]
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder App",
    description: "Create an app that helps users discover new recipes based on ingredients they have. This project focuses on searching, filtering, and displaying data from a collection.",
    imageUrl: "/Recipe Finder App image.webp",
    aiHint: "cooking recipe",
    tags: ["React", "Data Filtering", "UI Design"],
    steps: [
        {
            title: "Setup Project and Data",
            description: "Create the main page and mock data for recipes.",
            details: "<p>First, we'll set up the page for our app and create a mock data file containing a list of recipes. Each recipe will have a title, description, and a list of ingredients.</p>",
            code: `// src/lib/recipe-data.ts
export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
}
export const recipes: Recipe[] = [
  { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', ingredients: ['pasta', 'eggs', 'parmesan', 'bacon'] },
  { id: 2, title: 'Chicken Curry', description: 'A flavorful and spicy curry.', ingredients: ['chicken', 'onion', 'garlic', 'coconut milk', 'curry powder'] },
  { id: 3, title: 'Classic Omelette', description: 'A simple and quick breakfast.', ingredients: ['eggs', 'milk', 'cheese', 'butter'] },
  // ...add more recipes
];

// src/app/recipes/page.tsx
export default function RecipesPage() {
  return <h1>Recipe Finder</h1>
}
`,
            hint: "Creating a clear data structure with a TypeScript interface from the start will make it much easier to work with your recipe data throughout the project."
        },
        {
            title: "Build the UI",
            description: "Create the interface for searching and displaying recipes.",
            details: "<p>Let's build the UI. We need a search bar to filter recipes by title or ingredients, and a grid to display the recipe cards.</p>",
            code: `// src/app/recipes/page.tsx
"use client";
import { useState } from 'react';
import { recipes, Recipe } from '@/lib/recipe-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Recipe Finder</h1>
      <Input 
        placeholder="Search by recipe or ingredient..." 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="mb-8"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <Card key={recipe.id}>
            <CardHeader>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {recipe.ingredients.map(ing => <Badge key={ing} variant="secondary">{ing}</Badge>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
`,
            hint: "For a simple search, you can filter your data array directly in the render method based on a state variable tied to your search input. This is efficient for small-to-medium sized datasets."
        },
        {
            title: "Implement Complex Filtering",
            description: "Add filtering logic based on ingredients.",
            details: "<p>The core feature is finding recipes based on ingredients. We'll implement the logic that filters the recipe list to show only the ones that can be made with the ingredients the user types in.</p>",
            code: `// Inside the RecipesPage component
// The filtering logic is already included in the previous step's code.

const filteredRecipes = searchQuery.trim() === '' 
  ? recipes // Show all recipes if search is empty
  : recipes.filter(recipe => 
      // Check if title matches
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // Check if any ingredient matches
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()))
    );
`,
            hint: "The `.some()` array method is very useful here. It checks if at least one element in the array passes the test implemented by the provided function, which is perfect for checking if any ingredient matches the search query."
        },
        {
            title: "Handle No Results",
            description: "Display a message when no recipes match the search criteria.",
            details: "<p>A good user experience includes handling cases where there are no results. We'll add a message that appears only when the `filteredRecipes` array is empty.</p>",
            code: `// Inside the main div, after the grid div
{filteredRecipes.length === 0 && (
  <div className="text-center text-muted-foreground mt-10">
    <p>No recipes found for "{searchQuery}".</p>
    <p>Try searching for a different ingredient or recipe name.</p>
  </div>
)}`,
            hint: "Conditional rendering is key here. A simple check like `array.length === 0` is all you need to decide whether to show the results grid or the 'no results' message."
        }
    ]
  },
  {
    id: "ecommerce-cart",
    title: "E-commerce Shopping Cart",
    description: "Build a functional shopping cart for an e-commerce site. Learn how to manage state for products, cart items, and totals.",
    imageUrl: "/E-commerce Shopping Cart image.png",
    aiHint: "online shopping",
    tags: ["React", "State Management", "E-commerce"],
    steps: [
      {
        title: "Project Setup",
        description: "Create the main page and mock data for products.",
        details: "<p>First, we'll set up the page for our app and create a mock data file containing a list of products. Each product will have an id, name, and price.</p>",
        code: `// src/lib/product-data.ts
export interface Product {
  id: number;
  name: string;
  price: number;
}
export const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 99.99 },
  { id: 2, name: 'Smartwatch', price: 199.99 },
  { id: 3, name: 'Portable Speaker', price: 49.99 },
  { id: 4, name: 'Coffee Maker', price: 79.99 },
];

// src/app/cart/page.tsx
export default function CartPage() {
  return <h1>E-commerce Cart</h1>
}
`,
        hint: "Start by defining a clear `Product` interface. This will help ensure your data is consistent and prevent common errors as your application grows."
      },
      {
        title: "Display Products",
        description: "Create the UI to display the list of available products.",
        details: "<p>Let's build the UI to show the products for sale. We will map over our products data and display each one in a card with its name, price, and an 'Add to Cart' button.</p>",
        code: `// src/app/cart/page.tsx
"use client";
import { useState } from 'react';
import { products, Product } from '@/lib/product-data';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function CartPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">\${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}`,
        hint: "Use `toFixed(2)` to ensure your prices are always displayed in a standard currency format, like `49.99` instead of `49.9`."
      },
      {
        title: "Manage Cart State",
        description: "Use the `useState` hook to manage the items in the shopping cart.",
        details: "<p>Now for the core logic. We need to create a state variable to hold the items in the cart. This will be an array of objects, where each object contains the product and its quantity.</p>",
        code: `// Inside CartPage component
interface CartItem {
  product: Product;
  quantity: number;
}

const [cartItems, setCartItems] = useState<CartItem[]>([]);
`,
        hint: "It's a good idea to create a separate interface for `CartItem`. This makes it clear that a cart item is different from a product, as it includes additional information like quantity."
      },
      {
        title: "Implement 'Add to Cart'",
        description: "Write the logic to add products to the cart or update their quantity if already present.",
        details: "<p>Let's make the 'Add to Cart' button functional. When clicked, it should check if the product is already in the cart. If it is, we increase the quantity. If not, we add it as a new item.</p>",
        code: `const handleAddToCart = (product: Product) => {
  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.product.id === product.id);
    if (existingItem) {
      return prevItems.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prevItems, { product, quantity: 1 }];
  });
};

// Update the button's onClick in the product mapping:
// <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
`,
        hint: "When updating state based on the previous state, always use the callback form of the state setter function (e.g., `setMyState(prevState => ...)`). This prevents issues with stale state."
      },
      {
        title: "Display Shopping Cart",
        description: "Create a separate section to display the items currently in the cart.",
        details: "<p>Users need to see what's in their cart. We'll create a new section that lists all the items in `cartItems`, showing their name, price, quantity, and a subtotal for each item. We'll also calculate and display the grand total.</p>",
        code: `// Add this section below the products grid
<div className="mt-12">
  <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
  <Card>
    <CardContent className="p-6 space-y-4">
      {cartItems.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.product.id} className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{item.product.name}</p>
              <p className="text-sm text-muted-foreground">
                \${item.product.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <p className="font-semibold">\${(item.product.price * item.quantity).toFixed(2)}</p>
          </div>
        ))
      )}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between font-bold text-lg">
          <p>Total:</p>
          <p>\${cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
`,
        hint: "The `reduce` array method is perfect for calculating the total price. It iterates over the cart items and accumulates a single value (the total)."
      }
    ]
  },
  {
    id: "markdown-editor",
    title: "Markdown Note-Taker",
    description: "Create a real-time Markdown editor with a live preview pane. A great way to learn about text processing and UI updates.",
    imageUrl: "/Markdown-Note-Taker-image.png",
    aiHint: "writing notes",
    tags: ["React", "UI", "Text Editing"],
    steps: [
      {
        title: "Project Setup",
        description: "Create the main page for the Markdown editor.",
        details: "<p>We'll start by setting up the main page for our application. This will serve as the container for our editor and preview components.</p>",
        code: `// src/app/markdown/page.tsx
"use client";
import { useState } from 'react';

export default function MarkdownPage() {
  return <h1>Markdown Editor</h1>
}
`,
        hint: "Keep the initial setup simple. A single page component is all you need to get started before building out the more complex editor UI."
      },
      {
        title: "Build the Layout",
        description: "Create a two-pane layout for the editor and the live preview.",
        details: "<p>The core of this application is a side-by-side view. We'll create a layout with two main sections: a `Textarea` for users to write Markdown, and a `div` where the rendered HTML will be displayed.</p>",
        code: `// src/app/markdown/page.tsx
"use client";
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function MarkdownPage() {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');

  return (
    <div className="container mx-auto py-10 h-[calc(100vh-5rem)] flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Real-time Markdown Editor</h1>
      <div className="grid md:grid-cols-2 gap-6 flex-1">
        <Card className="flex flex-col">
          <CardContent className="p-0 flex-1">
            <Textarea 
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="h-full w-full resize-none border-0 rounded-md p-4"
              placeholder="Type your markdown here..."
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            {/* Rendered HTML will go here */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
`,
        hint: "Using a CSS Grid layout (`grid-cols-2`) is a simple and robust way to create the two-pane view. Make sure the parent container has a defined height so the panes can fill the available space."
      },
      {
        title: "Add Markdown Parsing",
        description: "Integrate a library to convert the Markdown text to HTML.",
        details: "<p>To convert the user's text into formatted HTML, we need a Markdown parser. We'll add the `react-markdown` library to our project, which is a popular and easy-to-use solution for this.</p>",
        code: `// You will need to install react-markdown:
// npm install react-markdown

// src/app/markdown/page.tsx
// ...
import ReactMarkdown from 'react-markdown';

// ... inside MarkdownPage component
// ... inside the second CardContent
<div className="prose dark:prose-invert max-w-none">
  <ReactMarkdown>{markdown}</ReactMarkdown>
</div>
`,
        hint: "The `prose` classes from the `@tailwindcss/typography` plugin are fantastic for instantly styling the HTML output of a Markdown parser. It provides sensible defaults for headings, paragraphs, lists, and more."
      },
      {
        title: "Style the Preview Pane",
        description: "Apply styling to the rendered HTML to make it look like a formatted document.",
        details: "<p>Raw HTML doesn't look great. We will use the `@tailwindcss/typography` plugin to automatically style the output from `react-markdown`. This will give us clean, readable formatting for headings, lists, code blocks, and more, without writing custom CSS.</p>",
        code: `// This is already done in the previous step's code.
// The key is adding the "prose" class to the container of the rendered markdown.

<div className="prose dark:prose-invert max-w-none">
  <ReactMarkdown>{markdown}</ReactMarkdown>
</div>
`,
        hint: "`prose-invert` is a useful variant that automatically adjusts the typography colors for dark mode, ensuring your preview looks great in either theme."
      }
    ]
  },
  {
    id: "ai-chat-app",
    title: "AI Chat Application",
    description: "Build a simple chat interface that communicates with an AI chatbot using Genkit. Learn about managing conversational state.",
    imageUrl: "/AI Chat Application image.png",
    aiHint: "chatbot conversation",
    tags: ["Genkit", "AI", "Chat", "State Management"],
    steps: [
      {
        title: "Setup Chat AI Flow",
        description: "Create a Genkit flow for handling chat conversations.",
        details: "<p>First, we need the AI brain. We'll create a Genkit flow that takes a user's message and returns a conversational response. This flow will be the backend for our chatbot.</p>",
        code: `// src/ai/flows/chat.ts
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const ChatInputSchema = z.object({
  message: z.string().describe("The user's message."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export const ChatOutputSchema = z.object({
  response: z.string().describe("The AI's response."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

const chatPrompt = ai.definePrompt({
    name: 'chatPrompt',
    input: { schema: ChatInputSchema },
    output: { schema: ChatOutputSchema },
    prompt: \`
      You are a helpful assistant. Respond to the user's message in a conversational way.
      User: {{{message}}}
      AI: 
    \`,
});

export const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await chatPrompt(input);
    return output!;
  }
);
`,
        hint: "A good prompt is key. Clearly define the AI's persona ('You are a helpful assistant') and provide a structure for the conversation (User: ..., AI: ...) to guide the model's responses."
      },
      {
        title: "Build the Chat UI",
        description: "Create the user interface for sending and displaying chat messages.",
        details: "<p>Now, let's build the chat window. We need a message display area that shows the conversation history and an input area at the bottom for the user to type and send new messages.</p>",
        code: `// src/app/chat/page.tsx
"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ChatPage() {
  return (
    <div className="flex justify-center items-center h-full pt-10">
      <Card className="w-full max-w-2xl h-[70vh] flex flex-col">
        <CardHeader>
          <CardTitle>AI Chatbot</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            {/* Messages will go here */}
          </ScrollArea>
        </CardContent>
        <CardFooter className="pt-4">
          <div className="flex w-full items-center space-x-2">
            <Input placeholder="Type a message..." />
            <Button>Send</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
`,
        hint: "For a chat window, it's important that the message area is scrollable. Wrapping the message list in ShadCN's `<ScrollArea>` component is an easy way to achieve this."
      },
      {
        title: "Manage Conversation State",
        description: "Use `useState` to manage the list of messages and the user's input.",
        details: "<p>A chat app needs to keep track of the conversation. We'll use a state variable to store an array of message objects. Each object will contain the text of the message and who sent it (the user or the AI).</p>",
        code: `// Inside ChatPage component
interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const [messages, setMessages] = useState<Message[]>([]);
const [input, setInput] = useState('');

// Update the input to be a controlled component:
// <Input value={input} onChange={e => setInput(e.target.value)} ... />
`,
        hint: "Creating a `Message` interface helps keep your state organized and makes it easier to style messages differently based on the `sender`."
      },
      {
        title: "Implement Send Message",
        description: "Write the logic to send a user's message to the AI and display the response.",
        details: "<p>This is where we connect the UI to our AI flow. When the user sends a message, we'll add it to our messages state, then call the Genkit flow. When the AI responds, we'll add its message to the state as well.</p>",
        code: `// Add to ChatPage component
import { chatFlow } from '@/ai/flows/chat'; // Update this import
const [loading, setLoading] = useState(false);

const handleSendMessage = async () => {
  if (input.trim() === '') return;

  const userMessage: Message = { text: input, sender: 'user' };
  setMessages(prev => [...prev, userMessage]);
  setInput('');
  setLoading(true);

  try {
    const result = await chatFlow({ message: input });
    const aiMessage: Message = { text: result.response, sender: 'ai' };
    setMessages(prev => [...prev, aiMessage]);
  } catch (error) {
    const errorMessage: Message = { text: 'Sorry, I had a problem responding.', sender: 'ai' };
    setMessages(prev => [...prev, errorMessage]);
  } finally {
    setLoading(false);
  }
};

// Add to Send button's onClick and Input's onKeyDown for Enter key
`,
        hint: "To provide a good user experience, add the user's message to the UI immediately, before you even get a response from the AI. This makes the chat feel instant."
      },
      {
        title: "Display the Conversation",
        description: "Map over the messages array to render the conversation in the UI.",
        details: "<p>Let's display the messages. We will map over the `messages` state array and render each message, styling them differently based on whether the sender is the 'user' or the 'ai'.</p>",
        code: `// Inside the <ScrollArea>
<div className="space-y-4">
  {messages.map((msg, index) => (
    <div key={index} className={\`flex \${msg.sender === 'user' ? 'justify-end' : 'justify-start'}\`}>
      <div className={\`rounded-lg px-4 py-2 \${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}\`}>
        {msg.text}
      </div>
    </div>
  ))}
  {loading && (
    <div className="flex justify-start">
      <div className="rounded-lg px-4 py-2 bg-muted">
        Typing...
      </div>
    </div>
  )}
</div>
`,
        hint: "Use conditional classes with `justify-end` or `justify-start` to easily align user and AI messages to the right and left sides of the chat window, respectively."
      }
    ]
  },
];
