

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BotMessageSquare } from "lucide-react";
import Link from "next/link";


const learningPath = [
    { text: "Master basic syntax in C++, Java, or Python" },
    { text: "Learn core data structures" },
    { text: "Practice common patterns (Sliding Window, Two Pointers)" },
    { text: "Master recursion & dynamic programming" },
    { text: "Study graphs & trees in depth" },
    { text: "Participate in contests (Codeforces, AtCoder)" },
    { text: "Solve 300+ DSA problems across difficulty levels", href: "/dsa-problems" }
];

export default function DsaLearningPathPage() {
  return (
    <div className="container mx-auto py-10">
       <Button asChild variant="ghost" className="mb-8">
            <Link href="/treasure">
            <ArrowRight className="mr-2 h-4 w-4" />
            Back to Treasure Trove
            </Link>
        </Button>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          DSA Learning Path
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your step-by-step roadmap to mastering Data Structures and Algorithms, from beginner to pro.
        </p>
      </header>

      <Card>
        <CardHeader>
            <CardTitle>Recommended Path to Mastery</CardTitle>
            <CardDescription>Follow these steps sequentially to build a strong and comprehensive foundation.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
                {learningPath.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg">
                           {index + 1}
                        </div>
                        <div className="pt-1">
                            {step.href ? (
                                <Link href={step.href} className="font-medium text-lg hover:underline hover:text-primary">
                                    {step.text}
                                </Link>
                            ) : (
                                <p className="font-medium text-lg">{step.text}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
      
      <Card className="mt-12 text-center bg-primary/10">
        <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3">
                <BotMessageSquare className="h-8 w-8 text-primary"/>
                <span>Ready to Start?</span>
            </CardTitle>
            <CardDescription className="text-base">
                Our guided learning paths can help you master these concepts.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Button asChild size="lg">
                <Link href="/dsa-mastery">
                    Explore DSA Learning Paths
                </Link>
            </Button>
        </CardContent>
      </Card>

    </div>
  );
}
