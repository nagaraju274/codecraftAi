
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  MessageSquare,
  Zap,
  GraduationCap,
  Lightbulb,
  BarChart3,
  PieChart,
  Database,
  Search,
  FileText,
  Calculator,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Monitor,
  History,
  Activity,
  Cpu,
  Layers,
  Code,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Data Entry & Descriptives",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to SPSS & Interface",
        why: "To understand the difference between 'Data View' and 'Variable View' and navigate the tool ribbons effectively.",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "SPSS for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=ADDR3_X3X_M" },
          { name: "Official SPSS Getting Started", url: "https://www.ibm.com/docs/en/spss-statistics/29.0.0?topic=getting-started" },
        ],
        practice: "Open SPSS, create 5 variables (Name, Age, Gender, Score, Date), and enter 10 rows of sample data.",
      },
      {
        what: "Defining Variable Properties",
        why: "Correctly setting 'Measure' (Nominal, Ordinal, Scale) and 'Value Labels' is critical for accurate calculations.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Setting Variable Levels (MDN-style Guide)", url: "https://www.spss-tutorials.com/spss-variable-types-and-measurement-levels/" },
        ],
        practice: "Set 'Gender' as Nominal with labels 1=Male, 2=Female. Set 'Education' as Ordinal.",
      },
      {
        what: "Importing Data (Excel, CSV)",
        why: "Real-world data usually comes from external sources. Mastering the import wizard is a daily necessity.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Importing Data into SPSS", url: "https://www.youtube.com/watch?v=import-data-spss" },
        ],
        practice: "Import a sample 'Sales' dataset from Excel and ensure all column headers are recognized.",
      },
      {
        what: "Data Cleaning: Missing Values & Outliers",
        why: "Incomplete data leads to biased results. Learn to use 'Analyze > Descriptive Statistics > Explore' to spot errors.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Handling Missing Data in SPSS", url: "https://www.spss-tutorials.com/spss-missing-values-tutorial/" },
        ],
        practice: "Identify outliers in a 'Salary' column using a Boxplot and decide whether to exclude or adjust them.",
      },
      {
        what: "Frequencies & Descriptive Statistics",
        why: "To summarize data using Mean, Median, Mode, Standard Deviation, and Skewness.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Descriptive Statistics Guide", url: "https://www.youtube.com/watch?v=descriptive-spss" },
        ],
        practice: "Run a Frequency analysis on 'Gender' and 'Age' to see the demographic breakdown of your sample.",
      },
      {
        what: "Data Transformation (Compute & Recode)",
        why: "To create new variables (e.g., BMI from height/weight) or group ages into brackets (e.g., 18-25, 26-35).",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Recoding Variables in SPSS", url: "https://www.spss-tutorials.com/spss-recode-into-different-variables-tutorial/" },
        ],
        practice: "Recode a continuous 'Score' variable into 'Pass' (>=50) and 'Fail' (<50).",
      },
      {
        what: "Cross-tabulation & Chi-Square",
        why: "To see the relationship between two categorical variables (e.g., Does 'Department' affect 'Job Satisfaction'?).",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Chi-Square Test in SPSS", url: "https://www.youtube.com/watch?v=chi-square-spss" },
        ],
        practice: "Create a 2x2 table of 'Gender' vs 'Promoted' and check for statistical significance.",
      },
      {
        what: "Visualizing Data (Chart Builder)",
        why: "To communicate insights visually using Bar charts, Pie charts, and Histograms.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "SPSS Chart Builder Tutorial", url: "https://www.spss-tutorials.com/spss-chart-builder-tutorial/" },
        ],
        practice: "Build a clustered bar chart showing 'Revenue' by 'Region' and 'Quarter'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Inferential Statistics",
    level: "Intermediate",
    steps: [
      {
        what: "T-Tests (Independent & Paired)",
        why: "To compare the means of two groups (e.g., Control vs. Treatment) or the same group at two time points.",
        time: "1 Week",
        prereqs: "Hypothesis Testing Basics",
        resources: [
          { name: "T-Test Explained (YouTube)", url: "https://www.youtube.com/watch?v=t-test-spss" },
        ],
        practice: "Conduct an Independent T-Test to see if Men and Women have different average 'Salaries'.",
      },
      {
        what: "One-Way ANOVA",
        why: "To compare means across three or more groups (e.g., Comparing scores across 4 different teaching methods).",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "One-Way ANOVA in SPSS", url: "https://www.spss-tutorials.com/spss-one-way-anova-tutorial/" },
        ],
        practice: "Run an ANOVA on 'Satisfaction Score' across 3 different 'Subscription Tiers'. Perform Post-Hoc tests.",
      },
      {
        what: "Correlation (Pearson & Spearman)",
        why: "To measure the strength and direction of the relationship between two continuous variables.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Bivariate Correlation Guide", url: "https://www.youtube.com/watch?v=correlation-spss" },
        ],
        practice: "Calculate the correlation between 'Years of Experience' and 'Job Performance Rating'.",
      },
      {
        what: "Linear Regression (Simple & Multiple)",
        why: "To predict the value of a dependent variable based on one or more independent variables.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Multiple Regression in SPSS", url: "https://www.spss-tutorials.com/spss-multiple-regression-tutorial/" },
        ],
        practice: "Build a model to predict 'House Price' based on 'Square Footage', 'Number of Bedrooms', and 'Location'.",
      },
      {
        what: "Non-Parametric Tests",
        why: "When your data isn't normally distributed, use Mann-Whitney U or Kruskal-Wallis tests.",
        time: "1 Week",
        prereqs: "Step 9, Step 10",
        resources: [
          { name: "Non-Parametric Tests Guide", url: "https://www.youtube.com/watch?v=non-parametric-spss" },
        ],
        practice: "Use Mann-Whitney U to compare 'Median Income' between two cities with highly skewed data.",
      },
      {
        what: "Reliability Analysis (Cronbach's Alpha)",
        why: "Essential for survey research to ensure that multiple questions are consistently measuring the same concept.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Reliability Analysis Tutorial", url: "https://www.spss-tutorials.com/spss-cronbachs-alpha-tutorial/" },
        ],
        practice: "Run a reliability check on a 10-item 'Psychological Stress' scale.",
      },
      {
        what: "Exploratory Factor Analysis (EFA)",
        why: "To identify underlying patterns or 'factors' in a large set of survey variables.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Factor Analysis in SPSS", url: "https://www.youtube.com/watch?v=factor-analysis-spss" },
        ],
        practice: "Reduce 20 customer feedback questions into 3 main factors (Quality, Price, Service).",
      },
      {
        what: "Binary Logistic Regression",
        why: "To predict a yes/no outcome (e.g., Will a customer churn? Will a student pass?).",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Logistic Regression Guide", url: "https://www.spss-tutorials.com/spss-logistic-regression-tutorial/" },
        ],
        practice: "Predict 'Patient Recovery' (Yes/No) based on 'Age', 'BMI', and 'Dosage'.",
      },
    ],
  },
  {
    title: "Advanced Stage: Multivariate & Automation",
    level: "Advanced",
    steps: [
      {
        what: "Multivariate Analysis of Variance (MANOVA)",
        why: "To compare groups across multiple dependent variables simultaneously.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "MANOVA Explained", url: "https://www.youtube.com/watch?v=manova-spss" },
        ],
        practice: "Compare 3 different 'Diets' on both 'Weight Loss' and 'Energy Level' at the same time.",
      },
      {
        what: "Cluster Analysis (K-Means & Hierarchical)",
        why: "To group similar observations (e.g., Market segmentation to find different types of customers).",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "Cluster Analysis in SPSS", url: "https://www.spss-tutorials.com/spss-k-means-cluster-analysis-tutorial/" },
        ],
        practice: "Group 'Counties' into 4 clusters based on 'Crime Rate', 'Education Level', and 'Income'.",
      },
      {
        what: "Survival Analysis (Kaplan-Meier)",
        why: "To analyze the time until an event occurs (e.g., Time until a machine fails or a patient relapses).",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Survival Analysis Guide", url: "https://www.youtube.com/watch?v=survival-spss" },
        ],
        practice: "Compare the 'Survival Curves' of two different cancer treatments over a 5-year period.",
      },
      {
        what: "Time Series Forecasting",
        why: "To predict future values based on historical trends (e.g., Sales forecasting for the next 12 months).",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Time Series in SPSS", url: "https://www.spss-tutorials.com/spss-time-series-forecasting-tutorial/" },
        ],
        practice: "Use the 'Expert Modeler' to forecast 'Monthly Airline Passengers' for the next year.",
      },
      {
        what: "SPSS Syntax: The Power of Automation",
        why: "Professional analysts use code (Syntax) to make their analysis reproducible and automated.",
        time: "1 Week",
        prereqs: "All Intermediate Steps",
        resources: [
          { name: "Introduction to SPSS Syntax", url: "https://www.spss-tutorials.com/spss-syntax-introduction/" },
        ],
        practice: "Perform a cleaning and analysis process using the 'Paste' button to generate and run a Syntax file.",
      },
      {
        what: "Advanced Chart Customization",
        why: "Default charts aren't publication-ready. Learn to use 'Chart Templates' and the 'Chart Editor' for professional looks.",
        time: "4 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Customizing SPSS Charts", url: "https://www.youtube.com/watch?v=custom-charts-spss" },
        ],
        practice: "Edit a scatter plot to add regression lines, change colors, and fix axis labels for a formal report.",
      },
      {
        what: "SPSS AMOS (Structural Equation Modeling)",
        why: "To analyze complex relationships between latent variables (e.g., How 'Leadership' affects 'Trust' which affects 'Performance').",
        time: "2 Weeks",
        prereqs: "Step 15",
        resources: [
          { name: "Intro to AMOS (YouTube)", url: "https://www.youtube.com/watch?v=amos-spss-intro" },
        ],
        practice: "Build a Path Diagram in AMOS and check for 'Model Fit' indices.",
      },
      {
        what: "Final Capstone: The Full Analysis",
        why: "To synthesize everything you've learned into a single, cohesive research report.",
        time: "2 Weeks",
        prereqs: "All previous steps",
        resources: [],
        practice: "Take a raw dataset, clean it, perform EDA, test 3 hypotheses, and generate a final report with visualizations.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Student Performance Report", teaches: "Variable definition, descriptive stats, and basic charts.", tech: "SPSS Base" },
  { level: "Beginner", title: "Customer Satisfaction Survey Audit", teaches: "Data cleaning, missing values, and frequencies.", tech: "SPSS Base" },
  { level: "Beginner", title: "Monthly Sales Trend Analysis", teaches: "Recoding variables, time-based grouping, and line charts.", tech: "SPSS Base" },
  { level: "Intermediate", title: "Employee Salary Benchmark Study", teaches: "Independent T-Tests, ANOVA, and clustered bar charts.", tech: "SPSS Statistics" },
  { level: "Intermediate", title: "Psychometric Test Validation", teaches: "Cronbach's Alpha, Bivariate Correlation, and reliability.", tech: "SPSS Statistics" },
  { level: "Intermediate", title: "Medical Trial Outcome Prediction", teaches: "Binary Logistic Regression and Cross-tabs.", tech: "SPSS Statistics" },
  { level: "Intermediate", title: "Marketing Strategy Factor Analysis", teaches: "Exploratory Factor Analysis (EFA) and data reduction.", tech: "SPSS Statistics" },
  { level: "Advanced", title: "Market Segmentation Profile", teaches: "K-Means Cluster Analysis and MANOVA.", tech: "SPSS Advanced" },
  { level: "Advanced", title: "Clinical Drug Survival Study", teaches: "Kaplan-Meier Survival curves and Cox Regression.", tech: "SPSS Advanced" },
  { level: "Advanced", title: "Automated Monthly Reporting Suite", teaches: "SPSS Syntax, ODS export, and reproducible workflows.", tech: "SPSS Syntax" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on data entry, cleaning, and descriptive reporting for basic research roles.",
    schedule: [
      "Days 1-7: Environment, Variable properties, and Data Entry.",
      "Days 8-15: Data cleaning and Frequency analysis.",
      "Days 16-23: Cross-tabs, Chi-Square, and basic Chart Builder.",
      "Days 24-30: Build the 'Student Performance' project and learn ODS export.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Analyst",
    description: "Balanced path for building solid inferential modeling and survey analysis skills.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage + 3 projects.",
      "Days 21-45: Mastering T-Tests, ANOVA, and Correlation.",
      "Days 46-60: Linear Regression, Reliability Analysis, and EFA basics.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Researcher",
    description: "Comprehensive path for professional data science and clinical research roles.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate foundations.",
      "Days 31-60: Advanced Modeling: Logistic Regression, MANOVA, and Cluster Analysis.",
      "Days 61-90: Survival Analysis, SPSS Syntax, and final Capstone project.",
    ]
  }
];

const interviewTopics = [
  "Difference between Nominal, Ordinal, and Scale measures.",
  "How do you identify and handle missing values in SPSS?",
  "When would you use a T-Test versus an ANOVA?",
  "Explain the difference between a P-value and a Correlation Coefficient (r).",
  "What is the purpose of a Post-Hoc test in ANOVA?",
  "How do you check for the 'Normality' assumption in your data?",
  "What does Cronbach's Alpha measure?",
  "Explain the difference between a DATA step and a Syntax command.",
  "When is it appropriate to use Non-Parametric tests?",
  "How do you interpret an Odds Ratio in Logistic Regression?",
];

const codingQuestions = [
  { question: "Write the SPSS syntax to calculate a new variable 'Total_Score' as the sum of 'Math' and 'Science'.", topic: "Syntax" },
  { question: "Query to show the mean of 'Salary' for each 'Department' using Syntax.", topic: "Syntax" },
  { question: "Using Syntax, how would you recode 'Age' (18 thru 25=1) (26 thru 35=2) into 'Age_Group'?", topic: "Recoding" },
  { question: "Write syntax to filter the dataset to only include cases where 'Score' > 70.", topic: "Filtering" },
];

const mcqs = [
  { question: "Which measure of central tendency is most affected by extreme outliers?", options: ["Median", "Mode", "Mean", "Range"], answer: "Mean" },
  { question: "What is the shortcut key to open the SPSS Syntax window?", options: ["Ctrl+N", "Ctrl+O", "Ctrl+S", "Alt+S"], answer: "Ctrl+N" },
  { question: "Which test is used to compare the means of exactly two related groups?", options: ["Independent T-Test", "Paired T-Test", "One-way ANOVA", "Pearson Correlation"], answer: "Paired T-Test" },
];

const mistakes = [
  "Ignoring the 'Measure' type: Treating a Scale variable as Nominal results in errors.",
  "Not checking the LOG: The output viewer shows results, but the log explains why a query failed.",
  "Mixing up 'Recode into Same' vs 'Recode into Different': Always choose 'Different' to avoid losing original data.",
  "Forgetting to save the SYNTAX: If your computer crashes, you lose your entire sequence of steps.",
  "Ignoring the 'N' size: Running complex tests on very small samples leads to unreliable results.",
  "Over-interpreting non-significant results: A p-value > 0.05 means you cannot reject the null hypothesis.",
  "Failing to check assumptions: Running a T-test on non-normal data without checking.",
  "Messy Variable View: Not using 'Labels' makes output tables impossible to read.",
  "Not using 'Split File': Trying to compare groups by manually running tests multiple times.",
  "Assuming Correlation equals Causation: Just because two variables move together doesn't mean one causes the other.",
];

export default function SpssRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Calculator className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            SPSS for Statistical Analysis Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the industry standard for statistical research. From data entry to advanced multivariate modeling and syntax automation.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to roadmaps
          </Link>
        </Button>

        {stages.map((stage) => (
          <Card key={stage.title} className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3 text-primary">
                <Brain className="h-8 w-8" />
                {stage.title}
              </CardTitle>
              <CardDescription>Follow these {stage.steps.length} steps to progress from {stage.level}.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs shrink-0">{index + 1}</span>
                        {step.what}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <p><strong>Why it’s important:</strong> {step.why}</p>
                            <p><strong>Time Estimate:</strong> {step.time}</p>
                            <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-xl border border-border">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-primary"><Monitor className="h-4 w-4"/> Practice Task:</h4>
                            <p className="text-sm leading-relaxed">{step.practice}</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3 text-sm flex items-center gap-2"><Code className="h-4 w-4 text-primary"/> Free Resources:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.resources.map(res => (
                              <li key={res.url} className="list-none">
                                <a href={res.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                  <div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20">
                                    <Zap className="h-3 w-3 text-primary"/>
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{res.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        <Card className="border-2 border-primary/20 bg-primary/[0.02]">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
            <CardDescription>Apply your knowledge with these hands-on analytical projects.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <Card key={p.title} className="bg-card hover:shadow-md transition-all border-2">
                <CardHeader className="pb-3">
                  <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                  <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p className="text-muted-foreground line-clamp-2"><strong>Teaches:</strong> {p.teaches}</p>
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded text-primary">
                    <Database className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Pick a timeline that matches your availability.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="p-6 border-2 rounded-2xl bg-card shadow-sm hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-xl mb-3 text-primary">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.schedule.map(item => (
                      <li key={item} className="text-sm flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent bg-accent/5">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
            <CardDescription>Expert guidance to help you land your dream analytical role.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Critical Interview Topics</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {interviewTopics.map(topic => (
                    <li key={topic} className="flex items-center gap-2 text-sm bg-background p-2 rounded-lg border shadow-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Syntax Challenges</h3>
                <div className="space-y-3">
                  {codingQuestions.map(q => (
                    <div key={q.question} className="p-4 border rounded-xl bg-card hover:border-primary/30 transition-colors">
                      <p className="font-semibold text-xs uppercase tracking-wider text-primary mb-1">{q.topic}</p>
                      <p className="text-sm leading-relaxed">{q.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t space-y-6">
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['SPSS Statistics', 'ANOVA', 'Regression Analysis', 'Hypothesis Testing', 'Data Cleaning', 'SPSS Syntax', 'Factor Analysis', 'Logistic Regression', 'Survey Analysis', 'Reporting', 'AMOS', 'Survival Analysis'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><FileText className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide 'before and after' screenshots of cleaned datasets.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Host your Syntax scripts on GitHub to show reproducibility.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include a link to a professional research report (PDF).</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <Lightbulb className="h-6 w-6"/>
              10 Mistakes to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {mistakes.map((mistake, i) => (
                <li key={i} className="text-sm flex items-start gap-3 text-foreground/80">
                  <span className="text-destructive font-black shrink-0">{i + 1}.</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center py-16 bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[3rem] border-2 shadow-inner">
          <h2 className="text-4xl font-black tracking-tight mb-6">Let the Data Tell Its Story</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            SPSS is more than just a calculation tool; it's a window into human behavior and trends. Mastering it allows you to find certainty in numbers and provide the insights that drive the world forward. Stay consistent, keep questioning your data, and remember: every expert was once a beginner fighting their first 'Measurement' error. Your journey into data mastery starts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Analysis Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2">
              <Link href="/learn">
                Explore Other Roadmaps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
