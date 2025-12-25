
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const stages = [
  {
    title: "Beginner Stage: Foundations of Data",
    level: "Beginner",
    steps: [
      {
        what: "Statistics and Probability Fundamentals",
        why: "Data analysis is applied statistics. Understanding core statistical concepts is the non-negotiable foundation for interpreting data correctly.",
        time: "2-3 Weeks",
        prereqs: "High School Math",
        resources: [
          { name: "Khan Academy - Statistics and Probability", url: "https://www.khanacademy.org/math/statistics-probability" },
          { name: "StatQuest with Josh Starmer (YouTube)", url: "https://www.youtube.com/user/joshstarmer" },
        ],
        practice: "Calculate mean, median, and mode for a small dataset by hand. Explain the difference between correlation and causation.",
      },
      {
        what: "Master Spreadsheet Software (Excel/Google Sheets)",
        why: "Spreadsheets are the data analyst's Swiss Army knife for quick data entry, cleaning, and simple analysis.",
        time: "1-2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Excel for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=Vl0H-qTclOg" },
          { name: "Google Sheets 101 (YouTube)", url: "https://www.youtube.com/watch?v=d_el0d-bVAw" },
        ],
        practice: "Take a messy CSV file. Use functions like `TRIM`, `VLOOKUP`, and Pivot Tables to clean and summarize the data.",
      },
      {
        what: "SQL Fundamentals (Structured Query Language)",
        why: "SQL is the universal language for interacting with relational databases, where most business data lives.",
        time: "3-4 Weeks",
        prereqs: "None",
        resources: [
          { name: "SQLBolt - Interactive SQL Tutorial", url: "https://sqlbolt.com/" },
          { name: "freeCodeCamp - SQL for Beginners", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
        ],
        practice: "Write queries to SELECT specific columns, filter data with WHERE, and sort results with ORDER BY on a sample database.",
      },
      {
        what: "Intermediate SQL (Joins and Aggregations)",
        why: "To answer complex business questions, you must be able to combine data from multiple tables and perform calculations.",
        time: "2-3 Weeks",
        prereqs: "SQL Fundamentals",
        resources: [
          { name: "W3Schools - SQL Joins", url: "https://www.w3schools.com/sql/sql_join.asp" },
          { name: "SQL GROUP BY Explained", url: "https://www.youtube.com/watch?v=tS3yG-3E-k0" },
        ],
        practice: "Given 'customers' and 'orders' tables, write a query to find the total amount spent by each customer.",
      },
      {
        what: "Python Programming Basics",
        why: "Python is the most popular language for data analysis due to its simplicity and powerful libraries.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Python for Everybody (freeCodeCamp)", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
        ],
        practice: "Write simple Python scripts to work with variables, lists, and dictionaries.",
      },
      {
        what: "Data Analysis with Pandas",
        why: "Pandas is the primary Python library for data manipulation and analysis. It allows you to work with tabular data in a DataFrame.",
        time: "2-3 Weeks",
        prereqs: "Python Basics",
        resources: [
          { name: "Pandas Official Documentation - 10 minutes to pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
        ],
        practice: "Load a CSV into a Pandas DataFrame. Select specific columns, filter rows based on a condition, and calculate a new column.",
      },
      {
        what: "Data Visualization with Matplotlib & Seaborn",
        why: "To explore data visually, identify patterns, and communicate findings to others.",
        time: "2 Weeks",
        prereqs: "Pandas",
        resources: [
          { name: "Matplotlib Official Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html" },
          { name: "Seaborn Official Tutorial", url: "https://seaborn.pydata.org/tutorial.html" },
        ],
        practice: "Create a bar chart, a histogram, and a scatter plot from a dataset using Matplotlib or Seaborn.",
      },
      {
        what: "Version Control with Git",
        why: "To track changes in your analysis scripts, collaborate with others, and maintain a portfolio of your work.",
        time: "1 Week",
        prereqs: "None",
        resources: [
            { name: "Git & GitHub for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
        ],
        practice: "Create a GitHub repository for a small analysis project. Add your script and commit your changes.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Business Intelligence and Storytelling",
    level: "Intermediate",
    steps: [
      {
        what: "Business Intelligence (BI) Tools (Tableau/Power BI)",
        why: "BI tools are the industry standard for creating interactive dashboards and reports for business users.",
        time: "3-4 Weeks",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Tableau Public (Free Version)", url: "https://public.tableau.com/en-us/s/" },
          { name: "Microsoft Power BI Guided Learning", url: "https://learn.microsoft.com/en-us/power-bi/guided-learning/" },
        ],
        practice: "Connect a data source to Tableau or Power BI and build a simple dashboard with at least three connected charts.",
      },
      {
        what: "Advanced SQL (Window Functions & CTEs)",
        why: "To perform complex calculations that are difficult or impossible with basic aggregations, such as rankings and running totals.",
        time: "2 Weeks",
        prereqs: "Intermediate SQL",
        resources: [
          { name: "SQL Window Functions (Mode Analytics)", url: "https://mode.com/sql-tutorial/sql-window-functions/" },
        ],
        practice: "Write a query using `ROW_NUMBER()` to rank employees by salary within each department.",
      },
      {
        what: "Data Cleaning and Preparation",
        why: "Real-world data is messy. Knowing how to handle missing values, duplicates, and inconsistencies is a critical and time-consuming part of the job.",
        time: "2 Weeks",
        prereqs: "Pandas",
        resources: [
          { name: "Data Cleaning with Python (Kaggle)", url: "https://www.kaggle.com/learn/data-cleaning" },
        ],
        practice: "Find a dataset with missing values. Implement different strategies to handle them (e.g., fill with mean/median, or drop rows/columns).",
      },
      {
        what: "Exploratory Data Analysis (EDA)",
        why: "EDA is the process of systematically investigating data to discover patterns, spot anomalies, and test hypotheses before formal modeling.",
        time: "2-3 Weeks",
        prereqs: "Pandas, Visualization",
        resources: [
          { name: "EDA with Python (DataCamp)", url: "https://www.datacamp.com/tutorial/exploratory-data-analysis-python" },
        ],
        practice: "Take a new dataset, form three initial questions about it, and use a Jupyter Notebook to explore the data and answer your questions with code and visualizations.",
      },
      {
        what: "Data Storytelling and Communication",
        why: "An analysis is useless if it can't be understood. You must learn to translate your findings into a clear and compelling narrative for non-technical stakeholders.",
        time: "2 Weeks",
        prereqs: "EDA",
        resources: [
          { name: "Storytelling with Data (Blog)", url: "http://www.storytellingwithdata.com/blog" },
        ],
        practice: "Create a short slide deck (3-5 slides) that summarizes the findings from your EDA project. Present it to a friend.",
      },
      {
        what: "Web Scraping with BeautifulSoup",
        why: "To collect data from websites when a formal API is not available.",
        time: "1 Week",
        prereqs: "Python, HTML basics",
        resources: [
          { name: "Web Scraping with BeautifulSoup and Python (freeCodeCamp)", url: "https://www.freecodecamp.org/news/how-to-scrape-websites-with-python-and-beautifulsoup/" },
        ],
        practice: "Scrape the titles of all the articles from a news website's homepage.",
      },
      {
        what: "Introduction to A/B Testing",
        why: "A/B testing is a fundamental method used by companies to make data-driven decisions about product changes.",
        time: "1 Week",
        prereqs: "Statistics",
        resources: [
          { name: "A/B Testing - A Complete Guide (HubSpot)", url: "https://blog.hubspot.com/marketing/a-b-testing" },
        ],
        practice: "Given sample data from an A/B test, calculate the conversion rates for each group and determine if the difference is statistically significant.",
      },
      {
        what: "Building a Project Portfolio",
        why: "Your portfolio is the most important asset for getting a job. It proves you can apply your skills to real problems.",
        time: "Ongoing",
        prereqs: "All previous",
        resources: [
          { name: "How to Build a Data Science Portfolio (Kaggle)", url: "https://www.kaggle.com/code/dansbecker/building-a-data-science-portfolio" },
        ],
        practice: "Start a new end-to-end analysis project. Find a dataset, clean it, analyze it, and present your findings in a GitHub repository with a detailed README.",
      },
    ],
  },
  {
    title: "Advanced Stage: Specialization and Scalability",
    level: "Advanced",
    steps: [
      {
        what: "Advanced Data Visualization",
        why: "To create custom, interactive, and more sophisticated visualizations that go beyond the capabilities of standard BI tools.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Plotly Python Library", url: "https://plotly.com/python/" },
          { name: "Data Visualization with D3.js (for web)", url: "https://d3js.org/" },
        ],
        practice: "Build an interactive dashboard using Plotly Dash or Streamlit in Python.",
      },
      {
        what: "Introduction to Machine Learning Models",
        why: "To move from descriptive/diagnostic analysis to predictive analysis. Understanding basic ML models is a huge advantage.",
        time: "3-4 Weeks",
        prereqs: "Python, Pandas",
        resources: [
          { name: "Scikit-learn Official Tutorials", url: "https://scikit-learn.org/stable/tutorial/index.html" },
        ],
        practice: "Train a simple Linear Regression model to predict house prices and a Logistic Regression model for a classification task.",
      },
      {
        what: "Cloud Data Warehousing (BigQuery/Snowflake)",
        why: "Modern data analysis happens in the cloud. You need to be familiar with cloud data warehouses for handling large-scale data.",
        time: "2 Weeks",
        prereqs: "SQL",
        resources: [
          { name: "Google BigQuery Documentation", url: "https://cloud.google.com/bigquery/docs" },
          { name: "Snowflake Documentation", url: "https://docs.snowflake.com/en/" },
        ],
        practice: "Sign up for a free tier account and practice loading data and running queries in BigQuery or Snowflake.",
      },
      {
        what: "Data Pipelines and ETL (Airflow)",
        why: "To understand how data gets from its source into the data warehouse in an automated and reliable way.",
        time: "2-3 Weeks",
        prereqs: "Python, SQL",
        resources: [
          { name: "Apache Airflow Documentation", url: "https://airflow.apache.org/docs/" },
        ],
        practice: "Design a simple ETL (Extract, Transform, Load) process on paper. E.g., Extract data from an API, transform a column, and load it into a SQL table.",
      },
      {
        what: "Product Analytics (Mixpanel/Amplitude)",
        why: "To specialize in understanding user behavior within a digital product, a common role for data analysts in tech companies.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Mixpanel - Getting Started", url: "https://mixpanel.com/topics/getting-started-guide/" },
        ],
        practice: "Think about a mobile app you use. Define 5 key events you would want to track (e.g., 'User Signed Up', 'Photo Uploaded').",
      },
      {
        what: "Advanced Python (OOP, Packaging)",
        why: "To write cleaner, more reusable, and production-ready analysis code.",
        time: "2 Weeks",
        prereqs: "Python",
        resources: [
          { name: "Real Python - OOP in Python 3", url: "https://realpython.com/python3-object-oriented-programming/" },
        ],
        practice: "Refactor one of your analysis scripts by organizing your functions into a Python class.",
      },
      {
        what: "Contributing to Open Source / Kaggle",
        why: "To gain real-world experience, collaborate with others, and build a strong reputation in the community.",
        time: "Ongoing",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Kaggle Competitions", url: "https://www.kaggle.com/competitions" },
        ],
        practice: "Participate in a Kaggle competition. Start by exploring other people's public notebooks to learn from their approaches.",
      },
      {
        what: "Mentoring and Leadership",
        why: "To solidify your own knowledge by teaching others and to grow into a senior or lead analyst role.",
        time: "Ongoing",
        prereqs: "Strong domain knowledge",
        resources: [],
        practice: "Review a beginner's analysis project and provide constructive feedback.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Excel Sales Dashboard", teaches: "Data cleaning, pivot tables, and basic chart creation in a spreadsheet.", tech: "Excel or Google Sheets" },
  { level: "Beginner", title: "Movie Dataset Analysis with SQL", teaches: "Basic SQL queries, filtering with WHERE, and sorting with ORDER BY.", tech: "SQL" },
  { level: "Beginner", title: "Exploratory Analysis of a CSV with Python", teaches: "Loading data with Pandas, calculating descriptive statistics, and creating basic plots with Matplotlib.", tech: "Python, Pandas, Matplotlib" },
  { level: "Intermediate", title: "COVID-19 Data Tracker", teaches: "API integration, data manipulation with Pandas, and time series visualization.", tech: "Python, Pandas, API, Matplotlib" },
  { level: "Intermediate", title: "Interactive Business Intelligence Dashboard", teaches: "Connecting data sources, building interactive charts, and creating dashboards.", tech: "Tableau or Power BI" },
  { level: "Intermediate", title: "Customer Segmentation Analysis", teaches: "Data cleaning, exploratory data analysis, and basic clustering.", tech: "Python, Pandas, Scikit-learn" },
  { level: "Intermediate", title: "Web Scraping for Job Postings", teaches: "Collecting data from websites, cleaning HTML, and structuring scraped data.", tech: "Python, BeautifulSoup, Requests" },
  { level: "Advanced", title: "Predictive Modeling for Customer Churn", teaches: "Feature engineering, training a classification model, and evaluating model performance.", tech: "Python, Scikit-learn, Pandas" },
  { level: "Advanced", title: "A/B Test Analysis", teaches: "Statistical significance, hypothesis testing, and communicating results of an experiment.", tech: "Python, SciPy, StatsModels" },
  { level: "Advanced", title: "Building a Data Dashboard with Python", teaches: "Creating interactive web-based dashboards directly from Python code.", tech: "Python, Plotly Dash or Streamlit" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get job-ready for entry-level analyst roles.",
        schedule: [
            "Days 1-10: Master SQL Fundamentals and Excel/Google Sheets.",
            "Days 11-20: Learn Python basics and the fundamentals of the Pandas library.",
            "Days 21-30: Learn the basics of a BI Tool (Tableau or Power BI) and complete your first portfolio project.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation and practical skills.",
        schedule: [
            "Days 1-20: Complete the entire Beginner Stage thoroughly.",
            "Days 21-40: Cover Intermediate topics: BI Tools, Advanced SQL, and Data Cleaning.",
            "Days 41-60: Focus on Data Storytelling and complete two portfolio projects, one in SQL and one in Python.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and specialization.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages.",
            "Days 31-60: Deep dive into Exploratory Data Analysis, A/B testing, and an introduction to Machine Learning.",
            "Days 61-90: Build an advanced, end-to-end predictive modeling project, learn a cloud data warehouse, and prepare for interviews.",
        ]
    }
];

const interviewTopics = [
    "Explain the difference between SQL and NoSQL databases.",
    "What is the difference between an INNER JOIN, LEFT JOIN, and FULL OUTER JOIN?",
    "What are descriptive statistics? (Mean, Median, Mode, Standard Deviation)",
    "Explain what a p-value is in the context of hypothesis testing.",
    "How would you handle missing data in a dataset? What are the pros and cons of different methods?",
    "What is the difference between correlation and causation?",
    "Describe a time you used data to solve a business problem.",
    "What is a primary key and a foreign key?",
    "What is a `GROUP BY` clause used for in SQL?",
    "Walk me through your process for a new data analysis project, from start to finish.",
];

const codingQuestions = [
    { question: "Write a SQL query to find the second highest salary from an 'employees' table.", topic: "SQL" },
    { question: "In Python with Pandas, how do you select all rows where the value in 'column_A' is greater than 50?", topic: "Python/Pandas" },
    { question: "Write a SQL query to find all employees who have a salary higher than their manager's salary.", topic: "SQL" },
];

const mcqs = [
    { question: "Which SQL clause is used to filter the results of an aggregate function?", options: ["WHERE", "FILTER", "HAVING", "GROUPBY"], answer: "HAVING" },
    { question: "Which chart is best suited for showing the distribution of a single continuous variable?", options: ["Bar Chart", "Pie Chart", "Scatter Plot", "Histogram"], answer: "Histogram" },
    { question: "Which of the following is NOT a measure of central tendency?", options: ["Mean", "Median", "Standard Deviation", "Mode"], answer: "Standard Deviation" },
];

const mistakes = [
    "Ignoring Statistics: Jumping into tools without understanding the statistical concepts behind them leads to incorrect conclusions.",
    "Not Cleaning Data: Assuming data is clean is a huge mistake. Real-world data is almost always messy.",
    "Communicating Poorly: Creating a complex analysis that no one can understand is useless. Focus on clear, simple communication.",
    "Confusing Correlation with Causation: Just because two variables move together doesn't mean one causes the other.",
    "Using the Wrong Visualization: Choosing an inappropriate chart type (like a pie chart for many categories) can obscure insights.",
    "Not Documenting Your Work: Your analysis should be reproducible. Comment your code and document your steps.",
    "Ignoring Domain Knowledge: Failing to understand the business context of your data can lead to naive or incorrect analysis.",
    "Analysis Paralysis: Spending too much time on analysis and not enough time on delivering actionable insights.",
    "Not Building a Portfolio: You must have projects to show potential employers.",
    "Focusing Only on Tools: Being an expert in a tool is less important than being an expert problem-solver who uses tools."
];

export default function DataAnalystRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Data Analyst Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to collecting, cleaning, analyzing, and visualizing data to drive business decisions.
          </p>
        </header>

        {stages.map((stage) => (
          <Card key={stage.title}>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                {stage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold">
                      Step {index + 1}: {step.what}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <p><strong>Why it’s important:</strong> {step.why}</p>
                        <p><strong>Time to complete:</strong> {step.time}</p>
                        <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                        <h4 className="font-semibold">Free Resources:</h4>
                        <ul>
                          {step.resources.map(res => (
                            <li key={res.url}><a href={res.url} target="_blank" rel="noopener noreferrer">{res.name}</a></li>
                          ))}
                        </ul>
                         <h4 className="font-semibold">Practice Tasks:</h4>
                        <p>{step.practice}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
         <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
                <CardDescription>Apply your knowledge with these hands-on projects, from beginner to advanced.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(p => (
                     <Card key={p.title}>
                        <CardHeader>
                            <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                            <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4"><strong>What it teaches:</strong> {p.teaches}</p>
                            <p className="text-sm"><strong>Tech:</strong> {p.tech}</p>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
                <CardDescription>Choose a plan that fits your schedule and goals.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    {plans.map((plan, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-semibold">{plan.title}</AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <p className="text-muted-foreground mb-4">{plan.description}</p>
                             <ul className="list-disc pl-5 space-y-2">
                                {plan.schedule.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
                <CardDescription>Key topics, questions, and resume tips to land a data analyst job.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Important Interview Topics</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {interviewTopics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Coding Questions</h3>
                     {codingQuestions.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">[{q.topic}] {q.question}</p>
                        </div>
                    ))}
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Multiple Choice Questions (MCQs)</h3>
                     {mcqs.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">{q.question}</p>
                            <p className="text-sm text-muted-foreground">Correct Answer: {q.answer}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Resume Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {['SQL', 'Python', 'Pandas', 'Tableau', 'Power BI', 'Excel', 'Data Analysis', 'Data Visualization', 'Statistics', 'A/B Testing', 'ETL', 'Business Intelligence'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` that explains the project's goal, the process, and the key findings.</li>
                        <li>Include visualizations directly in the README to showcase your results.</li>
                        <li>Organize your project into folders for data, notebooks, and scripts.</li>
                        <li>Ensure your code is clean and well-commented so a recruiter can understand your thought process.</li>
                        <li>Link to a live dashboard on Tableau Public if you created one.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Lightbulb className="h-8 w-8 text-primary"/>10 Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    {mistakes.map(mistake => <li key={mistake}>{mistake}</li>)}
                </ol>
            </CardContent>
        </Card>

        <div className="text-center pt-8">
            <h2 className="text-2xl font-bold">Your Journey Starts Now</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Becoming a data analyst is a rewarding journey of curiosity and problem-solving. This roadmap is your guide. Be consistent, stay curious, and focus on building real projects. The world is full of data; go find its stories. Good luck!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
