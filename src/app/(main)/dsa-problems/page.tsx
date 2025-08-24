
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { problems as allProblems } from "@/lib/dsa-problems-data";

export default function DsaProblemsPage() {
    const [difficulty, setDifficulty] = useState("All");

    const filteredProblems = difficulty === "All" 
        ? allProblems 
        : allProblems.filter(p => p.difficulty === difficulty);

    return (
        <div className="container mx-auto py-10 space-y-8">
            <Button asChild variant="ghost" className="mb-4 self-start">
                <Link href="/dsa-learning-path">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Learning Path
                </Link>
            </Button>
            
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">300+ DSA Problems</CardTitle>
                    <CardDescription>
                        Sharpen your skills by solving a curated list of problems, ranging from easy to hard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="All" onValueChange={setDifficulty} className="w-full">
                        <TabsList className="mb-4">
                            <TabsTrigger value="All">All</TabsTrigger>
                            <TabsTrigger value="Easy">Easy</TabsTrigger>
                            <TabsTrigger value="Medium">Medium</TabsTrigger>
                            <TabsTrigger value="Hard">Hard</TabsTrigger>
                        </TabsList>
                        
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px]">#</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Difficulty</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredProblems.map((problem, index) => (
                                    <TableRow key={problem.id}>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell className="font-medium">{problem.title}</TableCell>
                                        <TableCell>
                                            <Badge variant={
                                                problem.difficulty === "Easy" ? "default" :
                                                problem.difficulty === "Medium" ? "secondary" : "destructive"
                                            }>{problem.difficulty}</Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button asChild variant="outline" size="sm">
                                                <a href={problem.href} target="_blank" rel="noopener noreferrer">
                                                    Solve Problem <ArrowRight className="ml-2 h-3 w-3"/>
                                                </a>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
