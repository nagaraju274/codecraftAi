
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

const projects = [
  {
    id: "todo-app",
    title: "To-Do List Application",
    description: "Build a classic to-do list app to manage your daily tasks. This project is perfect for learning the fundamentals of state management in a React application.",
    image: "/images/project-todo.png",
    tags: ["React", "State Management", "UI/UX"],
    aiHint: "task list",
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    description: "Create an application that fetches and displays weather data from a third-party API. You'll learn how to handle asynchronous data and present it in a user-friendly interface.",
    image: "/images/project-weather.png",
    tags: ["React", "API Integration", "Async"],
    aiHint: "weather forecast",
  },
  {
    id: "blog-platform",
    title: "Personal Blog Platform",
    description: "Develop a simple but functional blog where you can create, edit, and delete posts. This project introduces concepts of routing and data persistence.",
    image: "/images/project-blog.png",
    tags: ["Next.js", "Routing", "Full-Stack"],
    aiHint: "writing blog",
  },
  {
    id: "image-recognizer",
    title: "AI Image Recognizer",
    description: "Dive into the world of AI by building an application that can identify objects in images using a machine learning model. A great introduction to GenAI.",
    image: "/images/project-ai.png",
    tags: ["Genkit", "AI", "Image Recognition"],
    aiHint: "artificial intelligence",
  },
    {
    id: "portfolio-generator",
    title: "AI Portfolio Generator",
    description: "Build a tool that generates a personal portfolio website based on user input. This project combines form handling with dynamic content generation using AI.",
    image: "/images/project-portfolio.png",
    tags: ["Next.js", "Genkit", "AI", "Web Development"],
    aiHint: "personal website",
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder App",
    description: "Create an app that helps users discover new recipes based on ingredients they have. This project focuses on searching, filtering, and displaying data from a collection.",
    image: "/images/project-recipe.png",
    tags: ["React", "Data Filtering", "UI Design"],
    aiHint: "cooking recipe",
  },
];


export default function ProjectsPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Project Builder</h1>
        <p className="text-muted-foreground">
          Choose a project and build it with AI-guided assistance. Learn by doing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 flex-1 overflow-y-auto pr-4">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
                <div className="aspect-video relative">
                    <Image 
                        src={`https://placehold.co/600x400.png?text=${encodeURIComponent(project.title)}`}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg"
                        data-ai-hint={project.aiHint}
                    />
                </div>
                <div className="p-6">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="pt-2 h-24 overflow-hidden">{project.description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/projects/${project.id}`}>
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
