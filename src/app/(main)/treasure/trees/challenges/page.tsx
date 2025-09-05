
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TreeChallengesPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-8">
          <Button asChild variant="ghost" className="mb-4 self-start">
              <Link href="/treasure/trees">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Trees
              </Link>
          </Button>
          <Card>
            <CardHeader>
                <CardTitle>Tree Challenges</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Interactive challenges are coming soon!</p>
            </CardContent>
          </Card>
      </div>
    </AuthGuard>
  );
}
