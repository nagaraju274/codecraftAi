
"use client";

import { useParams, useSearchParams } from "next/navigation";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { serviceBasedMockTests, productBasedMockTests } from "@/lib/mock-tests-data";

export default function MockTestPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const { testId } = params;
    const type = searchParams.get('type');

    const allTests = [...serviceBasedMockTests, ...productBasedMockTests];
    const test = allTests.find(t => t.id === testId);

    return (
        <AuthGuard>
            <div className="container mx-auto py-10 space-y-8">
                <Button asChild variant="ghost" className="mb-4 self-start">
                    <Link href={`/placement/mock-tests${type ? `?type=${type}` : ''}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Mock Tests
                    </Link>
                </Button>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">
                            {test ? test.title : "Test not found"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {test ? (
                            <p>This is the page for the "{test.title}". The full test content is coming soon!</p>
                        ) : (
                            <p>The test you are looking for could not be found.</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AuthGuard>
    )
}
