
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

const assessmentData = {
    dsaAndCoding: [
        { id: "dsa1", question: "Which data structure follows the Last-In, First-Out (LIFO) principle?", options: ["Queue", "Stack", "Linked List"], answer: "Stack" },
        { id: "dsa2", question: "What is the time complexity of a binary search on a sorted array of size 'n'?", options: ["O(n)", "O(log n)", "O(1)"], answer: "O(log n)" },
    ],
    coreSubjects: [
        { id: "core1", question: "In OOP, what is the term for bundling data and the methods that operate on that data into a single unit?", options: ["Inheritance", "Encapsulation", "Polymorphism"], answer: "Encapsulation" },
        { id: "core2", question: "Which layer of the OSI model is responsible for routing packets between networks?", options: ["Transport Layer", "Data Link Layer", "Network Layer"], answer: "Network Layer" },
    ],
    aptitudeAndReasoning: [
        { id: "apt1", question: "If a train travels at 60 km/h, how far will it travel in 45 minutes?", options: ["30 km", "45 km", "50 km"], answer: "45 km" },
        { id: "apt2", question: "If 5 men can do a piece of work in 10 days, how many days will 2 men take?", options: ["20 days", "25 days", "30 days"], answer: "25 days" },
    ],
    communicationSkills: [
        { id: "comm1", question: "Choose the correct verb to complete the sentence: The team ___ meeting right now.", options: ["is", "are", "be"], answer: "is" },
        { id: "comm2", question: "Which of the following is a synonym for 'ubiquitous'?", options: ["Rare", "Everywhere", "Complex"], answer: "Everywhere" },
    ]
};

type Answers = {
    [key: string]: string;
}

export default function AssessmentPage() {
    const [answers, setAnswers] = useState<Answers>({});
    const [submitted, setSubmitted] = useState(false);

    const totalQuestions = [
        ...assessmentData.dsaAndCoding, 
        ...assessmentData.coreSubjects, 
        ...assessmentData.aptitudeAndReasoning, 
        ...assessmentData.communicationSkills
    ].length;
    
    const answeredQuestions = Object.keys(answers).length;
    const progress = (answeredQuestions / totalQuestions) * 100;

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({...prev, [questionId]: value}));
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const calculateScore = () => {
        let score = 0;
        const allQuestions = [
            ...assessmentData.dsaAndCoding, 
            ...assessmentData.coreSubjects, 
            ...assessmentData.aptitudeAndReasoning, 
            ...assessmentData.communicationSkills
        ];
        for (const question of allQuestions) {
            if (answers[question.id] === question.answer) score++;
        }
        return score;
    };

    const score = submitted ? calculateScore() : 0;
    const scorePercentage = (score / totalQuestions) * 100;

    return (
        <AuthGuard>
            <div className="container mx-auto py-10 space-y-8">
                <Button asChild variant="ghost" className="mb-4 self-start">
                    <Link href="/placement">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Placement Prep
                    </Link>
                </Button>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">Job Ready Placement Assessment</CardTitle>
                        <CardDescription>Test your foundational knowledge in key areas required for placements.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {submitted ? (
                            <div className="text-center py-10">
                                <h2 className="text-2xl font-bold mb-4">Assessment Complete!</h2>
                                <p className="text-lg text-muted-foreground mb-6">Your Score:</p>
                                <p className="text-5xl font-bold text-primary">{score} / {totalQuestions}</p>
                                <Progress value={scorePercentage} className="w-full max-w-sm mx-auto mt-6" />
                                <Button onClick={() => { setSubmitted(false); setAnswers({}); }} className="mt-8">
                                    Retake Assessment
                                </Button>
                            </div>
                        ) : (
                            <Accordion type="multiple" defaultValue={["item-1"]} className="w-full space-y-6">
                                <Card>
                                    <Progress value={progress} className="w-full" />
                                </Card>
                                
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-xl font-semibold">DSA & Coding</AccordionTrigger>
                                    <AccordionContent className="pt-4 space-y-6">
                                        {assessmentData.dsaAndCoding.map((q, index) => (
                                            <Card key={q.id} className="p-4">
                                                <p className="font-medium mb-3">{index + 1}. {q.question}</p>
                                                <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)}>
                                                    {q.options.map(opt => (
                                                        <div key={opt} className="flex items-center space-x-2">
                                                            <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                                                            <Label htmlFor={`${q.id}-${opt}`}>{opt}</Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </Card>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-xl font-semibold">Core CS Subjects</AccordionTrigger>
                                    <AccordionContent className="pt-4 space-y-6">
                                        {assessmentData.coreSubjects.map((q, index) => (
                                            <Card key={q.id} className="p-4">
                                                <p className="font-medium mb-3">{index + 1}. {q.question}</p>
                                                <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)}>
                                                    {q.options.map(opt => (
                                                        <div key={opt} className="flex items-center space-x-2">
                                                            <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                                                            <Label htmlFor={`${q.id}-${opt}`}>{opt}</Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </Card>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-xl font-semibold">Aptitude & Logical Reasoning</AccordionTrigger>
                                    <AccordionContent className="pt-4 space-y-6">
                                        {assessmentData.aptitudeAndReasoning.map((q, index) => (
                                            <Card key={q.id} className="p-4">
                                                <p className="font-medium mb-3">{index + 1}. {q.question}</p>
                                                <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)}>
                                                    {q.options.map(opt => (
                                                        <div key={opt} className="flex items-center space-x-2">
                                                            <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                                                            <Label htmlFor={`${q.id}-${opt}`}>{opt}</Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </Card>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-xl font-semibold">Communication Skills</AccordionTrigger>
                                    <AccordionContent className="pt-4 space-y-6">
                                        {assessmentData.communicationSkills.map((q, index) => (
                                            <Card key={q.id} className="p-4">
                                                <p className="font-medium mb-3">{index + 1}. {q.question}</p>
                                                <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)}>
                                                    {q.options.map(opt => (
                                                        <div key={opt} className="flex items-center space-x-2">
                                                            <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                                                            <Label htmlFor={`${q.id}-${opt}`}>{opt}</Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </Card>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>

                                <Button onClick={handleSubmit} className="w-full mt-8" disabled={answeredQuestions < totalQuestions}>
                                    Submit Assessment
                                </Button>
                            </Accordion>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AuthGuard>
    )
}
