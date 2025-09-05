
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
    question: "Which principle does a Queue follow?",
    options: ["FIFO (First-In, First-Out)", "LIFO (Last-In, First-Out)", "Random Access"],
    correctAnswer: "FIFO (First-In, First-Out)",
    explanation: "Correct! A Queue operates on the First-In, First-Out principle, meaning the first element added is the first one to be removed."
  },
  {
    id: "challenge-2",
    question: "What are the standard names for adding and removing elements from a queue?",
    options: ["Push and Pop", "Enqueue and Dequeue", "Add and Remove", "Insert and Delete"],
    correctAnswer: "Enqueue and Dequeue",
    explanation: "Correct! 'Enqueue' means to add an item to the back of the queue, and 'Dequeue' means to remove an item from the front."
  },
  {
    id: "challenge-3",
    question: "If you enqueue the numbers 1, then 2, then 3 into a queue and then perform one dequeue operation, what is the new front element?",
    options: ["1", "2", "3"],
    correctAnswer: "2",
    explanation: "Correct! After enqueuing 1, 2, 3, the queue is [1, 2, 3]. Dequeuing removes the front element (1), leaving [2, 3]. The new front element is 2."
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


export default function QueueChallengesPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-8">
          <Button asChild variant="ghost" className="mb-4 self-start">
              <Link href="/treasure/queue">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Queues
              </Link>
          </Button>
          <div className="text-center">
              <h1 className="text-3xl font-bold">Queue: Interactive Mini-Challenges</h1>
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
