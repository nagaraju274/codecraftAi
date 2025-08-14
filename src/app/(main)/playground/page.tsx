
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Play, Trash2, Bot, Loader } from "lucide-react"
import { fixCodeError, explainCode, runPythonCode } from "@/ai/flows"
import { useToast } from "@/hooks/use-toast"
import { AuthGuard } from "@/components/auth/auth-guard"

type SupportedLanguage = "javascript" | "python" ;

const placeholderCode: Record<SupportedLanguage, string> = {
  javascript: `function greet(name) {\n  console.log('Hello, ' + name + '!');\n}\n\ngreet('Student');`,
  python: `def greet(name):\n  print(f"Hello, {name}!")\n\n\ngreet("Student")`,
}

export default function PlaygroundPage() {
  const [language, setLanguage] = useState<SupportedLanguage>("javascript")
  const [code, setCode] = useState(placeholderCode.javascript)
  const [output, setOutput] = useState<string[]>([])
  const [isAiLoading, setIsAiLoading] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const { toast } = useToast()

  const handleLanguageChange = (value: SupportedLanguage) => {
    setLanguage(value)
    setCode(placeholderCode[value])
    setOutput([])
  }

  const runCode = async () => {
    setOutput([]);
    setIsRunning(true);
    if (language === 'javascript') {
      const newOutput: string[] = [];
      const originalLog = console.log;
      newOutput.push(`> node main.js`);
      console.log = (...args) => {
        newOutput.push(args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' '));
      };
      try {
        new Function(code)();
      } catch (error: any) {
        newOutput.push(`Error: ${error.message}`);
      } finally {
        console.log = originalLog;
        setOutput(newOutput);
        setIsRunning(false);
      }
    } else if (language === 'python') {
        try {
            const result = await runPythonCode({ code });
            const newOutput = [`> python main.py`];
            if (result.stdout) {
                newOutput.push(...result.stdout.split('\n'));
            }
            if (result.stderr) {
                newOutput.push(...result.stderr.split('\n'));
            }
            setOutput(newOutput);
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to run Python code.",
            });
            setOutput([`> python main.py`, `Error running python code.`]);
        } finally {
            setIsRunning(false);
        }
    }
  }

  const handleFixCode = async () => {
    setIsAiLoading(true);
    try {
      const result = await fixCodeError({ code, language });
      setCode(result.fixedCode);
      toast({
        title: "AI Code Fix",
        description: result.explanation,
      });
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fix code with AI.",
      });
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleExplainCode = async () => {
    setIsAiLoading(true);
    try {
      const result = await explainCode({ code });
      toast({
        title: "AI Code Explanation",
        description: (<p className="whitespace-pre-wrap">{result.explanation}</p>),
      });
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get explanation from AI.",
      });
    } finally {
      setIsAiLoading(false);
    }
  };


  return (
    <AuthGuard>
      <div className="flex flex-col h-[calc(100vh-10rem)] gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold self-start">Code Playground</h1>
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <Select value={language} onValueChange={(value) => handleLanguageChange(value as SupportedLanguage)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 flex-1">
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-2">
              <CardTitle className="text-lg">Editor</CardTitle>
              <div className="flex items-center gap-2 flex-wrap">
                <Button onClick={runCode} size="sm" disabled={isRunning}>
                  {isRunning ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
                  Run
                </Button>
                <Button onClick={handleFixCode} size="sm" variant="secondary" disabled={isAiLoading}>
                  {isAiLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
                  Fix with AI
                </Button>
                <Button onClick={handleExplainCode} size="sm" variant="secondary" disabled={isAiLoading}>
                   {isAiLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
                  Explain
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Write your code here..."
                className="h-full flex-1 font-code text-sm resize-none"
              />
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Console</CardTitle>
              <Button onClick={() => setOutput([])} size="icon" variant="ghost"><Trash2 className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent className="flex-1 bg-muted/50 rounded-b-lg">
              <div className="h-full p-4 font-code text-sm text-foreground overflow-auto">
                {output.length > 0 ? output.map((line, index) => (
                  <p key={index} className={line.startsWith('>') ? 'text-muted-foreground' : ''}>{line}</p>
                )) : <p className="text-muted-foreground">Console output will appear here...</p>}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthGuard>
  )
}
