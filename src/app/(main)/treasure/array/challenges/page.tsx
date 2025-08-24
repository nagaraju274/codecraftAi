
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Challenge = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

const challenges: Challenge[] = [
  {
    id: "challenge-1",
    question: "What is the time complexity of inserting an element at the beginning of a dynamic array of size 'n'?",
    options: ["O(1)", "O(log n)", "O(n)"],
    correctAnswer: "O(n)",
    explanation: "Correct! Inserting at the beginning requires shifting all other elements to make room, which is an O(n) operation."
  },
  {
    id: "challenge-2",
    question: "In a zero-indexed array `[10, 20, 30, 40]`, what value is at index 2?",
    options: ["20", "30", "40", "Index out of bounds"],
    correctAnswer: "30",
    explanation: "Correct! Arrays are zero-indexed, so the third element is at index 2."
  },
  {
    id: "challenge-3",
    question: "If you have an array `arr = [5, 10, 15]` and you run `arr.pop()`, what is the new state of `arr`?",
    options: ["[5, 10]", "[10, 15]", "[5, 15]"],
    correctAnswer: "[5, 10]",
    explanation: "Correct! The `pop()` method removes and returns the last element of an array, modifying it in place."
  },
];

const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAnswer) return;

    setSubmitted(true);
    setIsCorrect(selectedAnswer === challenge.correctAnswer);
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setSubmitted(false);
    setIsCorrect(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{challenge.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <RadioGroup 
            value={selectedAnswer ?? ""} 
            onValueChange={setSelectedAnswer}
            disabled={submitted}
            className="space-y-2"
          >
            {challenge.options.map(option => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${challenge.id}-${option}`} />
                <Label htmlFor={`${challenge.id}-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          <div className="mt-6">
            {!submitted ? (
              <Button type="submit" disabled={!selectedAnswer}>Submit Answer</Button>
            ) : (
               <Button onClick={handleTryAgain} variant="secondary">Try Again</Button>
            )}
          </div>
        </form>
         {submitted && isCorrect !== null && (
            <div className={cn(
                "mt-4 p-4 rounded-md flex items-center gap-3",
                isCorrect ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300" : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"
            )}>
              {isCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
              <p>{isCorrect ? challenge.explanation : "Not quite, try again!"}</p>
            </div>
         )}
      </CardContent>
    </Card>
  );
};


export default function ArrayChallengesPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
        <Button asChild variant="ghost" className="mb-4 self-start">
            <Link href="/treasure/array">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Arrays
            </Link>
        </Button>
        <div className="text-center">
            <h1 className="text-3xl font-bold">Array: Interactive Mini-Challenges</h1>
            <p className="text-muted-foreground mt-2">Test your knowledge with these hands-on exercises.</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-8">
            {challenges.map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
        </div>
    </div>
  );
}
