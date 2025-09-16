
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TimerIcon, BookOpen, Lightbulb } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
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

type SectionId = keyof typeof assessmentData;

type Answers = {
    [key: string]: string;
}

type SectionResult = {
    id: SectionId;
    title: string;
    score: number;
    total: number;
    percentage: number;
}

const ASSESSMENT_DURATION = 60 * 60; // 60 minutes in seconds

export default function AssessmentPage() {
    const [answers, setAnswers] = useState<Answers>({});
    const [submitted, setSubmitted] = useState(false);
    const [testStarted, setTestStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(ASSESSMENT_DURATION);
    const [results, setResults] = useState<SectionResult[]>([]);

    const allQuestions = Object.values(assessmentData).flat();
    const totalQuestions = allQuestions.length;
    
    const answeredQuestions = Object.keys(answers).length;
    const progress = (answeredQuestions / totalQuestions) * 100;

    useEffect(() => {
        if (!testStarted || submitted) return;

        if (timeLeft <= 0) {
            handleSubmit();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [testStarted, timeLeft, submitted]);

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({...prev, [questionId]: value}));
    };

    const calculateResults = () => {
        const sectionResults: SectionResult[] = [];
        let totalScore = 0;

        for (const [section, questions] of Object.entries(assessmentData)) {
            let sectionScore = 0;
            for (const question of questions) {
                if(answers[question.id] === question.answer) {
                    sectionScore++;
                }
            }
            totalScore += sectionScore;
            sectionResults.push({
                id: section as SectionId,
                title: getSectionTitle(section as SectionId),
                score: sectionScore,
                total: questions.length,
                percentage: (sectionScore / questions.length) * 100,
            })
        }
        setResults(sectionResults);
    }

    const handleSubmit = () => {
        setSubmitted(true);
        calculateResults();
    };

    const handleStart = () => {
        setTestStarted(true);
        setSubmitted(false);
        setAnswers({});
        setTimeLeft(ASSESSMENT_DURATION);
        setResults([]);
    }

    const getSectionTitle = (id: SectionId) => {
        switch(id) {
            case 'dsaAndCoding': return 'DSA & Coding';
            case 'coreSubjects': return 'Core CS Subjects';
            case 'aptitudeAndReasoning': return 'Aptitude & Reasoning';
            case 'communicationSkills': return 'Communication Skills';
            default: return 'Section';
        }
    }

    const overallScore = results.reduce((acc, r) => acc + r.score, 0);
    const overallPercentage = totalQuestions > 0 ? (overallScore / totalQuestions) * 100 : 0;
    
    const getReadinessLevel = () => {
        if (overallPercentage >= 75) return { level: 'Ready for Product Companies', color: 'text-green-500' };
        if (overallPercentage >= 50) return { level: 'Intermediate', color: 'text-yellow-500' };
        return { level: 'Beginner', color: 'text-red-500' };
    }

    const getSuggestions = () => {
        const suggestions = [];
        if (results.find(r => r.id === 'dsaAndCoding' && r.percentage < 60)) {
            suggestions.push({ text: 'Your DSA skills need improvement. Check out our DSA Mastery paths.', href: '/dsa-mastery'});
        }
         if (results.find(r => r.id === 'coreSubjects' && r.percentage < 60)) {
            suggestions.push({ text: 'Strengthen your core CS fundamentals by exploring the Academics section.', href: '/academics'});
        }
        if (results.find(r => r.id === 'aptitudeAndReasoning' && r.percentage < 60)) {
            suggestions.push({ text: 'Practice more aptitude questions in the On-Campus roadmap.', href: '/placement'});
        }
        if (suggestions.length === 0 && submitted) {
            suggestions.push({ text: "Great job! You have strong fundamentals. Keep practicing with our DSA problems.", href: '/dsa-problems' });
        }
        return suggestions;
    }


    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

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
                    <CardHeader className="flex flex-row justify-between items-start">
                        <div>
                            <CardTitle className="text-3xl">Job Ready Placement Assessment</CardTitle>
                            <CardDescription>Test your foundational knowledge in key areas required for placements.</CardDescription>
                        </div>
                        {testStarted && !submitted && (
                            <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                                <TimerIcon className="h-6 w-6"/>
                                <span>{formatTime(timeLeft)}</span>
                            </div>
                        )}
                    </CardHeader>
                    <CardContent>
                        {!testStarted ? (
                            <div className="text-center py-20">
                                <h2 className="text-2xl font-bold mb-4">Start Your Assessment</h2>
                                <p className="text-muted-foreground mb-8">You will have 60 minutes to complete all sections.</p>
                                <Button size="lg" onClick={handleStart}>Start Assessment</Button>
                            </div>
                        ) : submitted ? (
                             <div className="text-center py-10 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Assessment Complete!</h2>
                                    <p className="text-lg text-muted-foreground mb-4">Your Overall Score:</p>
                                    <p className="text-6xl font-bold text-primary">{overallScore} / {totalQuestions}</p>
                                    <Progress value={overallPercentage} className="w-full max-w-sm mx-auto mt-6" />
                                    <p className="text-lg font-semibold mt-4">
                                        Placement Readiness Level: <span className={getReadinessLevel().color}>{getReadinessLevel().level}</span>
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 text-left">
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Section-wise Breakdown</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {results.map(result => (
                                                <div key={result.id}>
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="font-medium">{result.title}</span>
                                                        <span className="text-sm text-muted-foreground">{result.score}/{result.total}</span>
                                                    </div>
                                                    <Progress value={result.percentage} />
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2"><Lightbulb className="text-yellow-400"/> Personalized Suggestions</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                           {getSuggestions().map((suggestion, index) => (
                                                <Button key={index} asChild variant="outline" className="w-full justify-start text-left h-auto py-2">
                                                    <Link href={suggestion.href}>
                                                        <BookOpen className="mr-3 h-4 w-4 flex-shrink-0" />
                                                        <span>{suggestion.text}</span>
                                                    </Link>
                                                </Button>
                                           ))}
                                        </CardContent>
                                    </Card>
                                </div>
                                <Button onClick={handleStart} className="mt-8">
                                    Retake Assessment
                                </Button>
                            </div>
                        ) : (
                            <Accordion type="multiple" defaultValue={["item-dsaAndCoding"]} className="w-full space-y-6">
                                <Card>
                                    <Progress value={progress} className="w-full" />
                                </Card>
                                
                                <AccordionItem value="item-dsaAndCoding">
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

                                <AccordionItem value="item-coreSubjects">
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

                                <AccordionItem value="item-aptitudeAndReasoning">
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

                                <AccordionItem value="item-communicationSkills">
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

                                <Button onClick={handleSubmit} className="w-full mt-8" disabled={answeredQuestions === 0}>
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

    