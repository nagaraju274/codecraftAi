
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";

export default function StackPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
          <header>
              <div className="flex items-center gap-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                      Stack 📚
                  </h1>
              </div>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                A Last-In, First-Out (LIFO) data structure. Think of a stack of plates: you can only add a new plate to the top, and you can only remove the top plate.
              </p>
          </header>

          <Card>
              <CardHeader>
                  <CardTitle>Coming Soon!</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">This detailed guide to the Stack data structure is currently under construction. Please check back later!</p>
              </CardContent>
          </Card>

           <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                      <BrainCircuit className="h-6 w-6 text-primary" />
                      Interactive Mini-Challenges
                  </CardTitle>
                  <CardDescription>Ready to test your knowledge? Put these concepts into practice.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center items-center py-12">
                  <Button asChild size="lg">
                      <Link href="/treasure/stack/challenges">
                          Start Challenges
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </CardContent>
          </Card>

          <Card>
              <CardHeader><CardTitle>What's Next?</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                  <Link href="/treasure/queue" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Queue</h3>
                          <p className="text-sm text-muted-foreground">Explore the Queue, a FIFO (First-In, First-Out) data structure, the logical counterpart to the Stack.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/dsa-problems" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/70 transition-colors">
                      <div>
                          <h3 className="font-semibold text-primary">Practice Stack Problems</h3>
                          <p className="text-sm text-muted-foreground">Apply your knowledge by tackling common stack problems on LeetCode or HackerRank.</p>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                  </Link>
              </CardContent>
          </Card>

      </div>
    </AuthGuard>
  );
}
