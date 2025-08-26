
import { AuthGuard } from "@/components/auth/auth-guard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, TrendingUp, Heart, Code } from "lucide-react";

const principles = [
    {
        icon: <BrainCircuit className="w-8 h-8 text-primary" />,
        title: "Believe in Neuroplasticity",
        description: "Understand that your brain is not fixed. Every time you learn something new or overcome a challenge, you are physically rewiring your brain to be smarter and more capable.",
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-primary" />,
        title: "Embrace Challenges",
        description: "View difficult problems not as threats, but as opportunities to grow. The feeling of being stuck is often a prerequisite for a breakthrough in learning.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        title: "Focus on Process, Not Just Outcome",
        description: "Instead of only celebrating a successful deployment, value the effort, strategies, and learning that went into it. The journey of solving the problem is where the real growth happens.",
    },
     {
        icon: <Heart className="w-8 h-8 text-primary" />,
        title: "Learn from Criticism",
        description: "Treat feedback and code reviews as valuable data for improvement, not as a personal judgment. Separate your identity from your code to learn objectively.",
    },
];

const strategies = [
    {
        title: "Use the Power of 'Yet'",
        description: "Instead of saying 'I can't figure out this bug,' say 'I haven't figured out this bug yet.' This simple word shift reframes the problem from a permanent roadblock to a temporary state."
    },
    {
        title: "Seek Out Difficult Problems",
        description: "Intentionally pick up a task or learn a technology that is just outside your comfort zone. This is the sweet spot for rapid skill development."
    },
    {
        title: "Document Your Learning Journey",
        description: "Keep a small journal or a digital doc of the problems you've solved. Looking back at how you overcame past challenges is a powerful reminder of your ability to grow."
    },
    {
        title: "Teach What You Learn",
        description: "Explaining a concept to someone else (or even just writing a blog post about it) is one of the best ways to solidify your own understanding."
    }
]

export default function GrowthMindsetPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Growth Mindset & Motivation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            In a field that changes daily, your mindset is your most valuable asset. Learn to embrace challenges, persist through setbacks, and see failure as a stepping stone to mastery.
          </p>
        </header>
        
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Fixed vs. Growth Mindset</CardTitle>
            <CardDescription>Understanding the core difference is the first step.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-muted/40 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Fixed Mindset</h3>
              <p className="text-muted-foreground mb-4">"I'm either good at it or I'm not."</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Avoids challenges to avoid failure.</li>
                  <li>Gives up easily when faced with obstacles.</li>
                  <li>Sees effort as pointless.</li>
                  <li>Ignores useful negative feedback.</li>
                  <li>Feels threatened by the success of others.</li>
              </ul>
            </div>
            <div className="p-6 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-primary">Growth Mindset</h3>
              <p className="text-muted-foreground mb-4">"I can learn to do anything I want."</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Embraces challenges as opportunities.</li>
                  <li>Persists in the face of setbacks.</li>
                  <li>Sees effort as the path to mastery.</li>
                  <li>Learns from criticism and feedback.</li>
                  <li>Finds lessons and inspiration in others' success.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Core Principles for Developers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <Card key={p.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                      {p.icon}
                  </div>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Actionable Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
              {strategies.map(s => (
                  <Card key={s.title}>
                      <CardHeader>
                          <CardTitle className="text-lg">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">{s.description}</p>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </section>

        <Card className="mt-12 bg-muted/50">
          <CardHeader>
              <CardTitle className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary" />
                  <span>A Developer's Mantra</span>
              </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                  "This bug is not a reflection of my intelligence. It's a puzzle, and I have the tools and the capacity to solve it. Every error message is a clue, and every attempt is progress."
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                  "I am not a 'JavaScript developer' or a 'Python developer'. I am a problem solver who uses technology as a tool. The languages and frameworks will change, but my ability to learn and adapt is my greatest asset."
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                  "Code that is 'good enough' and shipped is infinitely more valuable than 'perfect' code that never gets deployed. I will embrace iteration and continuous improvement over the illusion of perfection."
              </blockquote>
          </CardContent>
        </Card>
      </div>
    </AuthGuard>
  );
}
