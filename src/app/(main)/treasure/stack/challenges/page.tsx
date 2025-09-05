
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";


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
          </div>
          <Card>
              <CardHeader>
                  <CardTitle>Coming Soon!</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">Interactive challenges for the Stack data structure are being developed. Please check back later!</p>
              </CardContent>
          </Card>
      </div>
    </AuthGuard>
  );
}
