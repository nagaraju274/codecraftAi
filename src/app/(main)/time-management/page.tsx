
import { AuthGuard } from "@/components/auth/auth-guard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Timer, GanttChartSquare, Forward } from "lucide-react";

const techniques = [
    {
        icon: <Timer className="w-8 h-8 text-primary" />,
        title: "The Pomodoro Technique",
        description: "A method that uses a timer to break down work into focused intervals, traditionally 25 minutes in length, separated by short breaks.",
        steps: [
            "Choose a task to be accomplished.",
            "Set a timer for 25 minutes.",
            "Work on the task until the timer rings.",
            "Take a short break (about 5 minutes).",
            "After four 'pomodoros', take a longer break (15-30 minutes)."
        ]
    },
    {
        icon: <GanttChartSquare className="w-8 h-8 text-primary" />,
        title: "The Eisenhower Matrix",
        description: "A framework for prioritizing tasks by urgency and importance, resulting in four quadrants: Do First, Schedule, Delegate, and Don't Do.",
        steps: [
            "List all your tasks.",
            "Categorize each task into one of four quadrants: Urgent/Important, Not Urgent/Important, Urgent/Not Important, Not Urgent/Not Important.",
            "Focus on tasks that are Important and Urgent first.",
            "Schedule time for tasks that are Important but Not Urgent.",
            "Delegate or minimize tasks that are Urgent but Not Important."
        ]
    },
    {
        icon: <Forward className="w-8 h-8 text-primary" />,
        title: "Time Blocking",
        description: "A method where you schedule out every part of your day, assigning specific 'blocks' of time to accomplish particular tasks.",
        steps: [
            "At the start of the day or week, list everything you need to do.",
            "Estimate how long each task will take.",
            "Open your calendar and schedule blocks of time for each task.",
            "Treat these blocks as appointments you have to keep.",
            "Include blocks for breaks, meals, and administrative tasks."
        ]
    }
]

export default function TimeManagementPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Time Management for Developers
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Effective strategies to help you focus, prioritize, and make the most of your coding time.
          </p>
        </header>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {techniques.map((technique) => (
              <Card key={technique.title} className="flex flex-col">
                  <CardHeader className="flex-row items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                          {technique.icon}
                      </div>
                      <div>
                          <CardTitle>{technique.title}</CardTitle>
                          <CardDescription className="pt-1">{technique.description}</CardDescription>
                      </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-sm">How it works:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                        {technique.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                  </CardContent>
              </Card>
          ))}
        </div>

        <Card className="mt-12 bg-muted/50">
          <CardHeader>
              <CardTitle className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <span>General Productivity Tips</span>
              </CardTitle>
              <CardDescription>Simple habits that can make a big difference.</CardDescription>
          </CardHeader>
          <CardContent>
              <ul className="list-disc list-inside space-y-3">
                  <li>
                      <strong>Turn Off Notifications:</strong> Silence your phone and close unnecessary browser tabs and applications to minimize distractions.
                  </li>
                  <li>
                      <strong>Plan Your Day:</strong> Before you start coding, take 5-10 minutes to define what you want to accomplish. This creates a clear roadmap.
                  </li>
                  <li>
                      <strong>Batch Similar Tasks:</strong> Group similar activities together, like responding to all your emails at once, to reduce context switching.
                  </li>
                  <li>
                      <strong>Take Regular Breaks:</strong> Step away from the screen to rest your eyes and mind. A short walk can often solve a difficult coding problem.
                  </li>
                  <li>
                      <strong>Stay Hydrated and Nourished:</strong> Your brain needs fuel to perform at its best. Don't skip meals or forget to drink water.
                  </li>
              </ul>
          </CardContent>
        </Card>

      </div>
    </AuthGuard>
  );
}
