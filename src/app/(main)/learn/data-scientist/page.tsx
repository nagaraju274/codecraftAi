
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
    title: "Beginner Stage: Programming & Mathematical Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Python Programming Proficiency",
        why: "Python is the lingua franca of data science, with an unparalleled ecosystem of libraries for data analysis, machine learning, and visualization.",
        time: "3-4 Weeks",
        prereqs: "None",
        resources: [
          { name: "Python for Everybody (freeCodeCamp)", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
          { name: "Official Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
        ],
        practice: "Solve basic coding challenges on HackerRank. Write scripts to automate simple file tasks.",
      },
      {
        what: "Essential Mathematics: Linear Algebra, Calculus, and Probability",
        why: "Understanding the math behind the models is crucial for effective feature engineering, model tuning, and interpreting results.",
        time: "4-6 Weeks",
        prereqs: "High School Math",
        resources: [
          { name: "Khan Academy - Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra" },
          { name: "Khan Academy - Calculus", url: "https://www.khanacademy.org/math/calculus-1" },
          { name: "StatQuest with Josh Starmer (YouTube)", url: "https://www.youtube.com/user/joshstarmer" },
        ],
        practice: "Manually calculate matrix multiplications and derivatives. Solve probability puzzles to build intuition.",
      },
      {
        what: "Data Manipulation with NumPy and Pandas",
        why: "These are the workhorse libraries for any data scientist. NumPy for efficient numerical computation and Pandas for handling structured data.",
        time: "2-3 Weeks",
        prereqs: "Python Basics",
        resources: [
          { name: "freeCodeCamp - Data Analysis with Python", url: "https://www.freecodecamp.org/learn/data-analysis-with-python/" },
          { name: "Pandas Official Documentation", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
        ],
        practice: "Take a messy CSV file from a source like Kaggle. Use Pandas to clean it, handle missing values, and calculate summary statistics.",
      },
      {
        what: "Data Visualization with Matplotlib and Seaborn",
        why: "Visualizing data is key to uncovering patterns, communicating findings, and diagnosing model issues.",
        time: "2 Weeks",
        prereqs: "NumPy & Pandas",
        resources: [
          { name: "Matplotlib Official Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html" },
          { name: "Seaborn Official Tutorial", url: "https://seaborn.pydata.org/tutorial.html" },
        ],
        practice: "Create various plots (histograms, scatter plots, heatmaps) for a chosen dataset to explore relationships between variables.",
      },
      {
        what: "Core Machine Learning Concepts",
        why: "You need a strong theoretical foundation before you start building models.",
        time: "2 Weeks",
        prereqs: "Math Foundations",
        resources: [
          { name: "Google's Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
        ],
        practice: "Explain the difference between supervised, unsupervised, and reinforcement learning. Describe the bias-variance tradeoff.",
      },
      {
        what: "Introduction to Scikit-learn",
        why: "The essential library for implementing traditional machine learning algorithms in Python.",
        time: "2 Weeks",
        prereqs: "Core ML Concepts, Python Libraries",
        resources: [
            { name: "Scikit-learn Official Tutorials", url: "https://scikit-learn.org/stable/tutorial/index.html" },
        ],
        practice: "Train a simple Linear Regression model on a dataset. Then, train a Logistic Regression model for a classification task.",
      },
      {
        what: "SQL for Data Scientists",
        why: "Data almost always lives in databases. SQL is the language you'll use to extract and manipulate that data.",
        time: "2-3 Weeks",
        prereqs: "None",
        resources: [
          { name: "SQLBolt - Interactive SQL Tutorial", url: "https://sqlbolt.com/" },
        ],
        practice: "Write SQL queries to join multiple tables, filter results, and perform aggregations.",
      },
       {
        what: "Version Control with Git and GitHub",
        why: "Essential for tracking experiments, collaborating with others, and building a portfolio of your work.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Git & GitHub for Beginners - Crash Course (YouTube)", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
        ],
        practice: "Create a GitHub repository for a data analysis project. Add your Jupyter Notebook and commit your changes.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Building and Evaluating Models",
    level: "Intermediate",
    steps: [
      {
        what: "Feature Engineering and Selection",
        why: "The quality of your features often has a greater impact on model performance than the choice of algorithm.",
        time: "2 Weeks",
        prereqs: "Pandas, Scikit-learn",
        resources: [
          { name: "Kaggle - A Guide to Feature Engineering", url: "https://www.kaggle.com/code/ryanholbrook/a-guide-to-feature-engineering" },
        ],
        practice: "Create new features from a dataset (e.g., from date columns) and use Scikit-learn's feature selection methods to choose the most impactful ones.",
      },
      {
        what: "Advanced Supervised Learning Algorithms",
        why: "Go beyond basic models to understand more complex and powerful algorithms.",
        time: "3 Weeks",
        prereqs: "Scikit-learn",
        resources: [
            { name: "StatQuest - Decision Trees, Random Forests, Gradient Boosting (YouTube)", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" },
        ],
        practice: "Implement and compare the performance of Logistic Regression, Random Forests, and Gradient Boosting on a classification problem.",
      },
      {
        what: "Model Evaluation and Hyperparameter Tuning",
        why: "To build reliable models, you must know how to properly evaluate them and tune them for best performance.",
        time: "2 Weeks",
        prereqs: "Scikit-learn",
        resources: [
            { name: "StatQuest - Cross-Validation, ROC/AUC (YouTube)", url: "https://www.youtube.com/watch?v=fSytzG3bA-A" },
            { name: "Scikit-learn Guide - Hyperparameter Tuning", url: "https://scikit-learn.org/stable/modules/grid_search.html" },
        ],
        practice: "Use GridSearchCV or RandomizedSearchCV to find the best hyperparameters for a model. Plot the ROC curve.",
      },
      {
        what: "Introduction to Deep Learning Theory",
        why: "Understand the building blocks of neural networks, which power modern AI.",
        time: "2 Weeks",
        prereqs: "Core ML Concepts",
        resources: [
            { name: "3Blue1Brown - Neural Networks (YouTube)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
        ],
        practice: "Draw a simple neural network by hand and explain how backpropagation works conceptually.",
      },
      {
        what: "Deep Learning Frameworks (TensorFlow or PyTorch)",
        why: "These are the two dominant frameworks for building and training neural networks.",
        time: "3 Weeks",
        prereqs: "Deep Learning Theory",
        resources: [
            { name: "TensorFlow Core Tutorials", url: "https://www.tensorflow.org/tutorials" },
            { name: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/" },
        ],
        practice: "Build and train a simple image classifier for the MNIST dataset in either TensorFlow or PyTorch.",
      },
      {
        what: "Introduction to Natural Language Processing (NLP)",
        why: "Learn how machines process and understand human language, a huge field within AI.",
        time: "2 Weeks",
        prereqs: "ML Concepts",
        resources: [
            { name: "Hugging Face NLP Course", url: "https://huggingface.co/learn/nlp-course" },
        ],
        practice: "Perform sentiment analysis on a dataset of movie reviews using a simple Bag-of-Words model.",
      },
       {
        what: "Introduction to Computer Vision (CV)",
        why: "Learn how machines 'see' and interpret images and videos.",
        time: "2 Weeks",
        prereqs: "Deep Learning",
        resources: [
            { name: "CS231n - Stanford's CV Course (YouTube)", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" },
        ],
        practice: "Use a pre-trained model (like ResNet50) to classify images.",
      },
       {
        what: "Communication and Storytelling with Data",
        why: "A data scientist's impact is measured by their ability to influence decisions. Learn to translate complex findings into a clear and compelling narrative.",
        time: "1-2 Weeks",
        prereqs: "Data Visualization",
        resources: [
            { name: "Storytelling with Data (Blog)", url: "http://www.storytellingwithdata.com/blog" },
        ],
        practice: "Create a short slide deck (3-5 slides) that summarizes the findings from one of your analysis projects. Present it to a non-technical friend.",
      },
    ],
  },
  {
    title: "Advanced Stage: Specialization and Deployment",
    level: "Advanced",
    steps: [
      {
        what: "ML Operations (MLOps)",
        why: "Learn to build robust, reproducible, and automated pipelines for deploying and monitoring models in production.",
        time: "3-4 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
            { name: "MLOps Course by Chip Huyen", url: "https://cs329s.stanford.edu/" },
        ],
        practice: "Use MLflow to track experiments. Containerize a model with Docker.",
      },
      {
        what: "Cloud Computing Platforms (AWS, GCP, or Azure)",
        why: "Production ML models run on the cloud. You need to know how to use their dedicated ML services.",
        time: "3 Weeks",
        prereqs: "Basic ML",
        resources: [
            { name: "AWS SageMaker Documentation", url: "https://aws.amazon.com/sagemaker/" },
            { name: "Google's Vertex AI Documentation", url: "https://cloud.google.com/vertex-ai/docs" },
        ],
        practice: "Train and deploy a simple model using AWS SageMaker or Google's Vertex AI.",
      },
      {
        what: "Big Data Technologies (Spark)",
        why: "When data doesn't fit on a single machine, you need tools like Spark to process it in a distributed manner.",
        time: "2-3 Weeks",
        prereqs: "Python/Scala",
        resources: [
            { name: "Apache Spark Documentation", url: "https://spark.apache.org/docs/latest/" },
        ],
        practice: "Perform a simple data aggregation task on a large dataset using PySpark.",
      },
      {
        what: "Advanced NLP - Transformers",
        why: "Transformers (e.g., BERT, GPT) are the state-of-the-art architecture for nearly all modern NLP tasks.",
        time: "3 Weeks",
        prereqs: "NLP Basics, Deep Learning",
        resources: [
            { name: "The Illustrated Transformer", url: "http://jalammar.github.io/illustrated-transformer/" },
        ],
        practice: "Fine-tune a pre-trained BERT model on a specific text classification task.",
      },
       {
        what: "Causal Inference",
        why: "Move beyond correlation to understand causation, a highly valuable skill for making business recommendations.",
        time: "2 Weeks",
        prereqs: "Statistics",
        resources: [
          { name: "Causal Inference: The Mixtape (Book)", url: "https://mixtape.scunning.com/" },
        ],
        practice: "Analyze a dataset to estimate the causal effect of an intervention (e.g., a new feature) on a user outcome.",
      },
      {
        what: "Experimentation and A/B Testing",
        why: "The scientific method for making data-driven product decisions. A core skill in top tech companies.",
        time: "2 Weeks",
        prereqs: "Statistics",
        resources: [
            { name: "A/B Testing - A Complete Guide (HubSpot)", url: "https://blog.hubspot.com/marketing/a-b-testing" },
        ],
        practice: "Given sample data from an A/B test, calculate the conversion rates for each group and determine if the difference is statistically significant.",
      },
      {
        what: "Reinforcement Learning (RL)",
        why: "Learn to train agents that make decisions in an environment to maximize a reward.",
        time: "3 Weeks",
        prereqs: "ML Fundamentals",
        resources: [
            { name: "David Silver's Reinforcement Learning Course (YouTube)", url: "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-UYHyzD7bqsAa8i5T5alt" },
        ],
        practice: "Train a simple agent to solve a classic RL problem like CartPole using OpenAI Gym.",
      },
      {
        what: "Building a Portfolio of Projects",
        why: "Your portfolio is the single most important asset for getting a job. It proves you can apply your skills to real problems.",
        time: "Ongoing",
        prereqs: "All previous",
        resources: [
            { name: "How to Build a Data Science Portfolio (Kaggle)", url: "https://www.kaggle.com/code/dansbecker/building-a-data-science-portfolio" },
        ],
        practice: "Choose a unique dataset and complete an end-to-end project: data cleaning, EDA, modeling, and a blog post/presentation of your findings.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Titanic Survival Prediction", teaches: "Data cleaning, feature engineering, and basic classification models.", tech: "Python, Pandas, Scikit-learn" },
  { level: "Beginner", title: "Iris Species Classifier", teaches: "Basic classification, understanding features, and model evaluation.", tech: "Python, Scikit-learn" },
  { level: "Beginner", title: "Boston Housing Price Prediction", teaches: "Linear regression, feature importance, and regression metrics.", tech: "Python, Scikit-learn, Matplotlib" },
  { level: "Intermediate", title: "IMDb Movie Review Sentiment Analysis", teaches: "NLP fundamentals, text preprocessing, and classification.", tech: "Python, NLTK/Scikit-learn" },
  { level: "Intermediate", title: "Handwritten Digit Recognizer (MNIST)", teaches: "Intro to deep learning and Convolutional Neural Networks (CNNs).", tech: "Python, TensorFlow/PyTorch" },
  { level: "Intermediate", title: "Customer Churn Prediction", teaches: "Classification, feature importance, and model evaluation metrics (Precision, Recall, F1).", tech: "Python, Scikit-learn" },
  { level: "Intermediate", title: "Credit Card Fraud Detection", teaches: "Working with imbalanced datasets, anomaly detection, and advanced evaluation metrics.", tech: "Python, Scikit-learn" },
  { level: "Advanced", title: "Fake News Detection with NLP", teaches: "Advanced NLP, fine-tuning Transformer models (e.g., BERT), and text classification.", tech: "Python, PyTorch, Hugging Face" },
  { level: "Advanced", title: "Image Captioning", teaches: "Combining CNNs and RNNs (LSTMs) for a complex computer vision and NLP task.", tech: "Python, TensorFlow/PyTorch" },
  { level: "Advanced", title: "Deploy a Model as an API", teaches: "Model serialization, API creation with FastAPI/Flask, and containerization with Docker.", tech: "Python, FastAPI, Docker" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan focused on core skills to get you started with practical projects quickly.",
        schedule: [
            "Days 1-10: Python, NumPy, and Pandas fundamentals.",
            "Days 11-20: Data Visualization and core ML concepts with Scikit-learn.",
            "Days 21-30: Complete your first project (e.g., Titanic Survival Prediction) and learn SQL basics.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation in both traditional ML and an introduction to deep learning.",
        schedule: [
            "Days 1-20: Complete the entire Beginner Stage thoroughly.",
            "Days 21-40: Cover Intermediate topics: Feature Engineering, advanced supervised models, and model evaluation.",
            "Days 41-60: Learn the basics of Deep Learning frameworks (TensorFlow/PyTorch) and complete an intermediate project like the MNIST classifier.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge, specialization, and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages.",
            "Days 31-60: Deep dive into either NLP or Computer Vision, and start learning cloud ML services.",
            "Days 61-75: Learn MLOps fundamentals and Big Data technologies like Spark.",
            "Days 76-90: Build an advanced, end-to-end portfolio project and focus on interview preparation.",
        ]
    }
];

const interviewTopics = [
    "Explain the Bias-Variance Tradeoff.",
    "Difference between Supervised, Unsupervised, and Reinforcement Learning.",
    "How does a Decision Tree work? How does a Random Forest improve on it?",
    "Explain Logistic Regression vs. Linear Regression.",
    "What are Precision, Recall, F1-Score, and when would you use each?",
    "How does Gradient Descent work?",
    "What is Cross-Validation and why is it important?",
    "Explain how a Convolutional Neural Network (CNN) works.",
    "Difference between L1 and L2 regularization.",
    "How would you handle a highly imbalanced dataset?",
];

const codingQuestions = [
    { question: "Implement Linear Regression from scratch using NumPy.", topic: "ML Implementation" },
    { question: "Write a SQL query to get the top 5 customers by total spending.", topic: "SQL" },
    { question: "Given a list of numbers, find all pairs that sum to a specific target.", topic: "Algorithms" },
];

const mcqs = [
    { question: "Which of these is NOT a supervised learning task?", options: ["Regression", "Classification", "Clustering", "Time Series Forecasting"], answer: "Clustering" },
    { question: "Adding more data to a model is likely to...", options: ["Increase bias", "Increase variance", "Decrease bias", "Decrease variance"], answer: "Decrease variance" },
    { question: "What is the primary purpose of a validation set?", options: ["To train the model", "To tune hyperparameters", "To test the final model", "To gather more data"], answer: "To tune hyperparameters" },
];

const mistakes = [
    "Jumping into complex deep learning without a solid foundation in statistics and traditional ML.",
    "Ignoring data cleaning and feature engineering, which often have the biggest impact on performance.",
    "Looking at only one metric (like accuracy) without considering the business context.",
    "Not using a validation set and accidentally overfitting to the test set.",
    "Failing to understand the assumptions behind the models you are using.",
    "Not using version control (Git) for your code and experiments.",
    "Communicating results poorly with jargon instead of clear, actionable insights.",
    "Underestimating the difficulty of deploying and maintaining a model in production.",
    "Spending too much time on one project instead of building a diverse portfolio.",
    "Not being able to explain the 'why' behind your decisions in a project."
];

export default function DataScientistRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Data Scientist Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive guide to mastering the skills needed to become a data scientist, from programming and math to machine learning and deployment.
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
                <CardDescription>Key topics, questions, and resume tips to land a data scientist job.</CardDescription>
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
                        {['Python', 'SQL', 'Machine Learning', 'Deep Learning', 'Data Analysis', 'Statistics', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Data Visualization', 'A/B Testing', 'NLP', 'Computer Vision'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with the project's goal, dataset source, process, key findings, and results.</li>
                        <li>Include visualizations (plots, charts) directly in the README to showcase your results.</li>
                        <li>Organize your project into folders (e.g., `data`, `notebooks`, `src`, `reports`).</li>
                        <li>Ensure your code is clean, well-commented, and reproducible. Include a `requirements.txt` file.</li>
                        <li>Write a short blog post or a presentation to accompany your project, explaining the business impact.</li>
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
                Data science is a challenging but immensely rewarding field. This roadmap is your guide, but the real learning comes from curiosity, consistent practice, and building projects that you are passionate about. Stay curious, and never stop learning. Good luck!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}

