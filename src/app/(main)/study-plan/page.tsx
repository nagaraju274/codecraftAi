
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateStudyPlan } from '@/ai/flows/generate-study-plan';
import { useToast } from '@/hooks/use-toast';
import { Loader2, BookOpen } from 'lucide-react';
import { AuthGuard } from '@/components/auth/auth-guard';

interface StudyPlanWeek {
    week: number;
    topic: string;
    tasks: string[];
    resources: string[];
}

export default function StudyPlanPage() {
    const [topic, setTopic] = useState('');
    const [hoursPerWeek, setHoursPerWeek] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [plan, setPlan] = useState<StudyPlanWeek[] | null>(null);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic || !hoursPerWeek || !skillLevel) {
            toast({
                variant: 'destructive',
                title: 'Missing Information',
                description: 'Please fill out all fields to generate a plan.',
            });
            return;
        }

        setLoading(true);
        setPlan(null);

        try {
            const result = await generateStudyPlan({
                topic,
                hoursPerWeek: parseInt(hoursPerWeek, 10),
                skillLevel,
            });
            setPlan(result.weeks);
        } catch (error) {
            console.error("Failed to generate study plan:", error);
            toast({
                variant: 'destructive',
                title: 'Generation Failed',
                description: 'There was an error generating your study plan. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <AuthGuard>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Study Plan Generator</CardTitle>
                                <CardDescription>Tell us what you want to learn, and we'll create a custom plan for you.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="topic">Topic</Label>
                                        <Input
                                            id="topic"
                                            placeholder="E.g., React, Python, Data Science"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="hours">Hours per Week</Label>
                                        <Input
                                            id="hours"
                                            type="number"
                                            placeholder="E.g., 5"
                                            value={hoursPerWeek}
                                            onChange={(e) => setHoursPerWeek(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="skill-level">Skill Level</Label>
                                        <Select onValueChange={setSkillLevel} value={skillLevel}>
                                            <SelectTrigger id="skill-level">
                                                <SelectValue placeholder="Select your skill level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Beginner">Beginner</SelectItem>
                                                <SelectItem value="Intermediate">Intermediate</SelectItem>
                                                <SelectItem value="Advanced">Advanced</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Button type="submit" className="w-full" disabled={loading}>
                                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                        {loading ? 'Generating...' : 'Generate Plan'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="md:col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Your Custom Plan</CardTitle>
                                <CardDescription>Follow this plan week by week to master {topic || 'your topic'}.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {loading && (
                                    <div className="flex justify-center items-center h-64">
                                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                    </div>
                                )}
                                {!loading && !plan && (
                                     <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                                        <BookOpen className="h-12 w-12 mb-4" />
                                        <p>Your generated study plan will appear here.</p>
                                    </div>
                                )}
                                {plan && (
                                    <div className="space-y-8">
                                        {plan.map((week, index) => (
                                            <div key={index}>
                                                <h3 className="text-lg font-semibold text-primary">Week {week.week}: {week.topic}</h3>
                                                <div className="pl-4 mt-2">
                                                    <h4 className="font-semibold">Tasks:</h4>
                                                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-1">
                                                        {week.tasks.map((task, i) => <li key={i}>{task}</li>)}
                                                    </ul>
                                                     <h4 className="font-semibold mt-3">Suggested Resources:</h4>
                                                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-1">
                                                        {week.resources.map((resource, i) => <li key={i}>{resource}</li>)}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthGuard>
    );
}
