
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import { projects } from './projects-data';


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
                    <CardDescription className="pt-2">{project.description}</CardDescription>
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
