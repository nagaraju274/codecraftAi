
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, GraduationCap } from "lucide-react";
import { AuthGuard } from '@/components/auth/auth-guard';

const branches = [
  { value: "cse", label: "Computer Science & Engineering (CSE)" },
  { value: "ece", label: "Electronics & Communication Engineering (ECE)" },
  { value: "it", label: "Information Technology (IT)" },
  { value: "me", label: "Mechanical Engineering (ME)" },
  { value: "ce", label: "Civil Engineering (CE)" },
  { value: "eee", label: "Electrical & Electronics Engineering (EEE)" },
];

const semesters = Array.from({ length: 8 }, (_, i) => ({
  value: `${i + 1}`,
  label: `Year ${Math.ceil((i + 1) / 2)}, Semester ${i + 1}`,
}));

export default function AcademicsPage() {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const handleProceed = () => {
    if (branch && semester) {
      // In the next step, we will navigate to a dynamic page
      // For now, we'll just alert the selection
      alert(`Proceeding to Branch: ${branch}, Semester: ${semester}`);
    }
  };

  return (
    <AuthGuard>
      <div className="container mx-auto py-10 flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl">Welcome to Academics</CardTitle>
            <CardDescription className="text-lg">
              Select your branch and semester to get started with your personalized learning journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="branch-select" className="text-base">Branch</Label>
                <Select value={branch} onValueChange={setBranch}>
                  <SelectTrigger id="branch-select" className="w-full h-12 text-base">
                    <SelectValue placeholder="Select your branch of engineering" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((b) => (
                      <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="semester-select" className="text-base">Semester</Label>
                <Select value={semester} onValueChange={setSemester}>
                  <SelectTrigger id="semester-select" className="w-full h-12 text-base">
                    <SelectValue placeholder="Select your current semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {semesters.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={handleProceed} 
                disabled={!branch || !semester} 
                className="w-full h-12 text-lg"
              >
                View Subjects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthGuard>
  );
}

