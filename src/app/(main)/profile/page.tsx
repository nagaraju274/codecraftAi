import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpenCheck, FolderKanban, UserCircle } from "lucide-react";
import Link from "next/link";

const learningProgress = [
    { title: "Beginner's Guide to Python", completed: 5, total: 8, href: "/learn" },
    { title: "Web Development Foundations", completed: 2, total: 7, href: "/learn" },
];

const projectProgress = [
    { title: "To-Do List Application", completed: true, href: "/projects/todo-app" },
    { title: "Weather Forecast App", completed: false, href: "/projects/weather-app" },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col h-full gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Student! Here's a summary of your progress.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpenCheck className="w-5 h-5" />
                        Learning Progress
                    </CardTitle>
                    <CardDescription>Your progress in the learning paths.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {learningProgress.map(item => (
                        <div key={item.title}>
                            <div className="flex justify-between items-center mb-2">
                                <Link href={item.href} className="font-medium hover:underline">{item.title}</Link>
                                <span className="text-sm text-muted-foreground">{item.completed} / {item.total} topics</span>
                            </div>
                            <Progress value={(item.completed / item.total) * 100} />
                        </div>
                    ))}
                     <Button asChild variant="outline">
                        <Link href="/learn">View All Learning Paths</Link>
                    </Button>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FolderKanban className="w-5 h-5" />
                        Project Status
                    </CardTitle>
                    <CardDescription>An overview of your recent projects.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {projectProgress.map(item => (
                        <div key={item.title} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                                <Link href={item.href} className="font-medium hover:underline">{item.title}</Link>
                                <p className={`text-sm ${item.completed ? 'text-green-600' : 'text-blue-600'}`}>
                                    {item.completed ? 'Completed' : 'In Progress'}
                                </p>
                            </div>
                            <Button asChild size="sm">
                               <Link href={item.href}>{item.completed ? 'Review' : 'Continue'}</Link>
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

        </div>
        <div className="lg:col-span-1">
             <Card>
                <CardHeader className="flex flex-col gap-4 items-center text-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="https://placehold.co/96x96.png" alt="@student" data-ai-hint="user avatar" />
                      <AvatarFallback>
                        <UserCircle className="h-24 w-24" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl">Student</CardTitle>
                      <p className="text-muted-foreground">student@example.com</p>
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Customize your profile and manage account settings here.</p>
                </CardContent>
              </Card>
        </div>
      </div>

    </div>
  );
}
