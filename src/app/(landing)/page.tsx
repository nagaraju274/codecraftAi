
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Rocket, Target, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: "Prepare for Exams",
    description: "Subjects, Units, Exam Focus",
    href: "/academics",
    buttonText: "Start Studying"
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Build Career Skills",
    description: "Job-Based Learning Paths",
    href: "/learn",
    buttonText: "Explore Roadmaps",
    variant: "secondary"
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: "Placement Preparation",
    description: "Resume, Aptitude, DSA, Interview Prep",
    href: "/placement",
    buttonText: "Start Preparing"
  }
];

const platformHelps = [
  "Clear subject-wise syllabus & exam-focused notes",
  "Step-by-step career roadmaps (no confusion)",
  "Beginner-friendly explanations with examples",
  "Free and structured — no random content"
];

const whoIsThisFor = [
  "B.Tech / CSE / IT students",
  "Beginners with zero clarity",
  "Anyone preparing for placements",
  "Students confused about careers",
  "Free and structured — no random content"
];

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-muted/20">
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Everything a B.Tech Student Needs – <br />
            <span className="text-primary">Exams, Skills & Placements</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            A free learning platform to help you pass semesters, build industry skills, and prepare for placements — step by step.
          </p>
        </div>
      </section>
      
      <section className="py-16 -mt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col text-left p-6 bg-background shadow-lg hover:shadow-xl transition-shadow">
                  {feature.icon}
                  <CardTitle className="mt-4 text-2xl">{feature.title}</CardTitle>
                  <p className="text-muted-foreground mt-1 flex-grow">{feature.description}</p>
                <div className="mt-6">
                  <Button asChild className="w-full" variant={feature.variant === 'secondary' ? 'secondary' : 'default'}>
                    <Link href={feature.href}>
                      {feature.buttonText}
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-background p-8 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold mb-6">How this platform helps you:</h2>
                <ul className="space-y-4">
                    {platformHelps.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-lg text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div className="bg-background p-8 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Who is this for?</h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><span className="font-bold text-primary mt-1.5">•</span><span className="text-lg text-muted-foreground">B.Tech / CSE / IT students</span></li>
                        <li className="flex items-start gap-3"><span className="font-bold text-primary mt-1.5">•</span><span className="text-lg text-muted-foreground">Beginners with zero clarity</span></li>
                        <li className="flex items-start gap-3"><span className="font-bold text-primary mt-1.5">•</span><span className="text-lg text-muted-foreground">Anyone preparing for placements</span></li>
                    </ul>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-3"><span className="font-bold text-primary mt-1.5">•</span><span className="text-lg text-muted-foreground">Students confused about careers</span></li>
                        <li className="flex items-start gap-3"><span className="font-bold text-primary mt-1.5">•</span><span className="text-lg text-muted-foreground">Free and structured — no random content</span></li>
                    </ul>
                </div>
                <p className="mt-8 text-center font-semibold text-foreground/80">Built by students, for students. Focused on clarity, not content overload.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
