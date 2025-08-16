
"use client";

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Target, BrainCircuit, FolderKanban, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

const userStats = {
    roadmapsCompleted: 2,
    projectsStarted: 3,
    conceptsMastered: 24,
    overallProgress: 45,
};

const recentActivity = {
    type: "Learning Path",
    title: "Full Stack Web Development",
    href: "/learn/full-stack-web-development",
    progress: 60,
};

const recommendedForYou = [
    {
        type: 'Project',
        title: "AI Image Recognizer",
        description: "Dive into AI by building an app that can identify objects in images.",
        href: "/projects/image-recognizer"
    },
    {
        type: 'Learn',
        title: "DevOps Engineer",
        description: "Automate and streamline the software development lifecycle.",
        href: "/learn/devops-engineer"
    }
];

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto py-10 space-y-8">
        <div>
            <h1 className="text-4xl font-bold tracking-tight">My Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              {loading ? "Loading your details..." : `Welcome back, ${user?.displayName || user?.email}! Here's a snapshot of your learning journey.`}
            </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Roadmaps Completed</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{userStats.roadmapsCompleted}</div>
                    <p className="text-xs text-muted-foreground">Keep up the great work!</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projects Started</CardTitle>
                    <FolderKanban className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{userStats.projectsStarted}</div>
                    <p className="text-xs text-muted-foreground">Practice makes perfect.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Concepts Mastered</CardTitle>
                    <BrainCircuit className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{userStats.conceptsMastered}</div>
                    <p className="text-xs text-muted-foreground">Knowledge is power.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Daily Goal</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                     <div className="text-2xl font-bold mb-1">75%</div>
                     <Progress value={75} aria-label="Daily goal progress" />
                </CardContent>
            </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {/* Continue Learning */}
            <Card className="md:col-span-2 flex flex-col">
                <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                    <CardDescription>Pick up where you left off.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="p-4 rounded-lg bg-muted/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{recentActivity.type}</p>
                            <h3 className="font-semibold text-lg">{recentActivity.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <Progress value={recentActivity.progress} className="w-full sm:w-48" />
                                <span className="text-sm font-medium">{recentActivity.progress}%</span>
                            </div>
                        </div>
                         <Button asChild>
                            <Link href={recentActivity.href}>
                                Resume <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Account Info/Profile */}
             <Card>
                <CardHeader>
                    <CardTitle>My Account</CardTitle>
                    <CardDescription>Manage your profile and settings.</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex items-center gap-4">
                       <Skeleton className="w-16 h-16 rounded-full" />
                       <div className="space-y-2">
                         <Skeleton className="h-4 w-24" />
                         <Skeleton className="h-4 w-32" />
                       </div>
                    </div>
                  ) : user ? (
                     <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <Image src={user.photoURL || `https://placehold.co/64x64.png`} alt="User avatar" width={64} height={64} className="rounded-full" data-ai-hint="user avatar" />
                        </div>
                        <div>
                            <p className="font-semibold">{user.displayName || 'User'}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Not logged in.</p>
                  )}
                </CardContent>
                 <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                        Edit Profile
                    </Button>
                </CardFooter>
            </Card>
        </div>

        {/* Recommended For You */}
         <div>
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Recommended For You
            </h2>
            <p className="text-muted-foreground mt-1">Based on your progress, here are some next steps.</p>
             <div className="grid md:grid-cols-2 gap-6 mt-6">
                {recommendedForYou.map(item => (
                    <Card key={item.href} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="mt-auto">
                            <Button asChild className="w-full">
                                <Link href={item.href}>
                                    {item.type === 'Project' ? 'Start Project' : 'Start Learning'}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>

    </div>
  );
}

    
