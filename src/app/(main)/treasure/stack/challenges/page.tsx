
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AuthGuard } from "@/components/auth/auth-guard";

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
    question: "Which principle does a Stack follow?",
    options: ["FIFO (First-In, First-Out)", "LIFO (Last-In, First-Out)", "Random Access"],
    correctAnswer: "LIFO (Last-In, First-Out)",
    explanation: "Correct! A Stack operates on the Last-In, First-Out principle, meaning the last element added is the first one to be removed."
  },
  {
    id: "challenge-2",
    question: "What is the time complexity of the `push` and `pop` operations on a standard stack implementation?",
    options: ["O(n)", "O(log n)", "O(1)"],
    correctAnswer: "O(1)",
    explanation: "Correct! Adding to and removing from the top of a stack are constant time operations."
  },
  {
    id: "challenge-3",
    question: "If you push the numbers 1, then 2, then 3 onto a stack and then perform two `pop` operations, what will the top element of the stack be?",
    options: ["1", "2", "The stack will be empty"],
    correctAnswer: "1",
    explanation: "Correct! After pushing 1, 2, 3, the stack is [1, 2, 3]. Popping 3 leaves [1, 2]. Popping 2 leaves [1]. The top element is now 1."
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


export default function StackChallengesPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-8">
          <Button asChild variant="ghost" className="mb-4 self-start">
              <Link href="/treasure/stack">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Stacks
              </Link>
          </Button>
          <div className="text-center">
              <h1 className="text-3xl font-bold">Stack: Interactive Mini-Challenges</h1>
              <p className="text-muted-foreground mt-2">Test your knowledge with these hands-on exercises.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
              {challenges.map(challenge => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
          </div>
      </div>
    </AuthGuard>
  );
}
