
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
  ArrowRight,
  Brain,
  ChevronRight,
  Code,
  Database,
  Github,
  GraduationCap,
  Lightbulb,
  Link as LinkIcon,
  MessageSquare,
  Server,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Foundations of AI/ML",
    level: "Beginner",
    steps: [
      {
        what: "Python Programming Proficiency",
        why: "Python is the dominant language in AI/ML due to its extensive libraries and simple syntax.",
        time: "3-4 Weeks",
        prereqs: "None",
        resources: [
          { name: "Python for Everybody (YouTube)", url: "https://www.youtube.com/playlist?list=PLlRFEj9H3Oj7Bp8-nK1fI3wG_P4h5aW2I" },
          { name: "FreeCodeCamp - Python for Beginners", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
          { name: "Official Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
        ],
        practice: "Solve basic coding challenges on HackerRank or LeetCode. Write small scripts for file organization.",
      },
      {
        what: "Mathematics for Machine Learning",
        why: "Understanding the math behind algorithms is crucial for model tuning and advanced work.",
        time: "4-5 Weeks",
        prereqs: "High School Math",
        resources: [
            { name: "Khan Academy - Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra" },
            { name: "Khan Academy - Calculus", url: "https://www.khanacademy.org/math/calculus-1" },
            { name: "Khan Academy - Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability" },
        ],
        practice: "Manually calculate matrix multiplications and derivatives. Solve probability puzzles.",
      },
      {
        what: "Data Analysis Libraries: NumPy & Pandas",
        why: "These are the workhorses for data manipulation, cleaning, and preparation.",
        time: "2-3 Weeks",
        prereqs: "Python Basics",
        resources: [
          { name: "Pandas Official Documentation", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
          { name: "NumPy Official Documentation", url: "https://numpy.org/doc/stable/user/quickstart.html" },
          { name: "freeCodeCamp - Data Analysis with Python", url: "https://www.freecodecamp.org/learn/data-analysis-with-python/" },
        ],
        practice: "Clean a messy CSV file. Calculate summary statistics for a dataset.",
      },
      {
        what: "Data Visualization: Matplotlib & Seaborn",
        why: "Visualizing data helps you understand patterns, outliers, and relationships before modeling.",
        time: "1-2 Weeks",
        prereqs: "NumPy & Pandas",
        resources: [
            { name: "Matplotlib Official Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html" },
            { name: "Seaborn Official Tutorial", url: "https://seaborn.pydata.org/tutorial.html" },
        ],
        practice: "Create various plots (histograms, scatter plots, bar charts) for a chosen dataset.",
      },
      {
        what: "Core Machine Learning Concepts",
        why: "You need to understand the theory before implementing models.",
        time: "2 Weeks",
        prereqs: "Math, Python",
        resources: [
            { name: "StatQuest with Josh Starmer (YouTube)", url: "https://www.youtube.com/user/joshstarmer" },
            { name: "Google's Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
        ],
        practice: "Explain the difference between supervised, unsupervised, and reinforcement learning to a friend.",
      },
       {
        what: "Version Control with Git and GitHub",
        why: "Essential for tracking experiments, collaborating with others, and managing code.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Git & GitHub for Beginners - Crash Course (YouTube)", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
          { name: "Official Git Documentation", url: "https://git-scm.com/doc" },
        ],
        practice: "Create a GitHub repository, add a project, and practice committing changes.",
      },
      {
        what: "Introduction to Scikit-learn",
        why: "A user-friendly library for implementing traditional ML algorithms.",
        time: "2 Weeks",
        prereqs: "Core ML Concepts, Python Libraries",
        resources: [
            { name: "Scikit-learn Official Tutorials", url: "https://scikit-learn.org/stable/tutorial/index.html" },
            { name: "Scikit-learn Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=0B5eG_m5k_A" },
        ],
        practice: "Train a simple Linear Regression model on a dataset.",
      },
       {
        what: "Jupyter Notebooks / Google Colab",
        why: "The standard environment for interactive data science and ML experimentation.",
        time: "1 Week",
        prereqs: "Python Basics",
        resources: [
          { name: "Jupyter Notebook for Beginners", url: "https://www.dataquest.io/blog/jupyter-notebook-tutorial/" },
          { name: "Google Colab Introduction", url: "https://colab.research.google.com/" },
        ],
        practice: "Re-run your Pandas data cleaning and Scikit-learn model training in a Jupyter Notebook.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Building and Tuning Models",
    level: "Intermediate",
    steps: [
      {
        what: "Deep Dive into Supervised Learning",
        why: "Understand the trade-offs between different models for regression and classification tasks.",
        time: "4 Weeks",
        prereqs: "Beginner Stage",
        resources: [
            { name: "StatQuest - Decision Trees, SVMs, Logistic Regression (YouTube)", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" },
            { name: "Scikit-learn documentation for each algorithm", url: "https://scikit-learn.org/stable/user_guide.html" },
        ],
        practice: "Implement and compare the performance of Logistic Regression, SVMs, and Decision Trees on a classification problem.",
      },
       {
        what: "Deep Dive into Unsupervised Learning",
        why: "Learn to find hidden patterns in data without labeled outcomes.",
        time: "3 Weeks",
        prereqs: "Beginner Stage",
        resources: [
            { name: "StatQuest - Clustering, PCA (YouTube)", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUIEUwB5a_i3s2e_v-2-A2s6" },
            { name: "Scikit-learn User Guide - Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html" },
        ],
        practice: "Use K-Means clustering to segment customers in a dataset. Use PCA for dimensionality reduction.",
      },
       {
        what: "Feature Engineering & Selection",
        why: "The quality of your features often has a greater impact on model performance than the choice of algorithm.",
        time: "2 Weeks",
        prereqs: "Pandas, Scikit-learn",
        resources: [
            { name: "Feature Engineering for Machine Learning (Book, free online)", url: "https://feis.world/" },
            { name: "Kaggle - Comprehensive Guide to Feature Engineering", url: "https://www.kaggle.com/code/ryanholbrook/a-guide-to-feature-engineering" },
        ],
        practice: "Create new features from a dataset (e.g., from date columns) and use Scikit-learn's feature selection methods to choose the most impactful ones.",
      },
      {
        what: "Model Evaluation & Hyperparameter Tuning",
        why: "To build reliable models, you must know how to properly evaluate them and tune them for best performance.",
        time: "3 Weeks",
        prereqs: "Scikit-learn",
        resources: [
            { name: "StatQuest - Cross-Validation, ROC/AUC (YouTube)", url: "https://www.youtube.com/watch?v=fSytzG3bA-A" },
            { name: "Scikit-learn Guide - Model evaluation", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
            { name: "Scikit-learn Guide - Hyperparameter Tuning", url: "https://scikit-learn.org/stable/modules/grid_search.html" },
        ],
        practice: "Use GridSearchCV or RandomizedSearchCV to find the best hyperparameters for a model.",
      },
       {
        what: "Introduction to Deep Learning Theory",
        why: "Understand the building blocks of neural networks, which power modern AI.",
        time: "2 Weeks",
        prereqs: "Core ML Concepts",
        resources: [
            { name: "3Blue1Brown - Neural Networks (YouTube)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
            { name: "StatQuest - Neural Networks (YouTube)", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDL8A63_iNJ5b3F-5s3s" },
        ],
        practice: "Draw a simple neural network by hand and explain how backpropagation works conceptually.",
      },
      {
        what: "Deep Learning Frameworks: TensorFlow & PyTorch",
        why: "These are the two dominant frameworks for building and training neural networks.",
        time: "4 Weeks",
        prereqs: "Deep Learning Theory",
        resources: [
            { name: "TensorFlow Core Tutorials", url: "https://www.tensorflow.org/tutorials" },
            { name: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/" },
            { name: "freeCodeCamp - PyTorch for Deep Learning", url: "https://www.youtube.com/watch?v=V_xro1bcAuA" },
        ],
        practice: "Build and train a simple image classifier for the MNIST dataset in both TensorFlow and PyTorch.",
      },
      {
        what: "Introduction to Natural Language Processing (NLP)",
        why: "Learn how machines process and understand human language, a huge field within AI.",
        time: "3 Weeks",
        prereqs: "ML Concepts",
        resources: [
            { name: "Stanford NLP Course (YouTube)", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z" },
            { name: "Hugging Face NLP Course", url: "https://huggingface.co/learn/nlp-course" },
        ],
        practice: "Perform sentiment analysis on a dataset of movie reviews using a simple Bag-of-Words model.",
      },
       {
        what: "Introduction to Computer Vision (CV)",
        why: "Learn how machines 'see' and interpret images and videos.",
        time: "3 Weeks",
        prereqs: "Deep Learning",
        resources: [
            { name: "CS231n - Stanford's CV Course (YouTube)", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" },
            { name: "PyImageSearch Blog", url: "https://pyimagesearch.com/start-here/" },
        ],
        practice: "Use a pre-trained model (like ResNet50) to classify images.",
      },
    ],
  },
  {
    title: "Advanced Stage: Deployment and Specialization",
    level: "Advanced",
    steps: [
      {
        what: "ML Operations (MLOps)",
        why: "Learn to build robust, reproducible, and automated pipelines for deploying and monitoring models in production.",
        time: "4 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
            { name: "MLOps Course by Chip Huyen", url: "https://cs329s.stanford.edu/" },
            { name: "Google Cloud - What is MLOps?", url: "https://cloud.google.com/mlops" },
        ],
        practice: "Use MLflow to track experiments. Containerize a model with Docker.",
      },
      {
        what: "Containerization with Docker",
        why: "Package your ML application and its dependencies into a portable container for consistent deployment.",
        time: "2 Weeks",
        prereqs: "Basic Command Line",
        resources: [
            { name: "Docker Official Get Started Guide", url: "https://docs.docker.com/get-started/" },
            { name: "Docker for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
        ],
        practice: "Write a Dockerfile for a simple Flask/FastAPI application that serves a Scikit-learn model.",
      },
      {
        what: "Cloud Computing Platforms (AWS, GCP, Azure)",
        why: "Production ML models run on the cloud. You need to know how to use their services.",
        time: "4 Weeks",
        prereqs: "Basic ML",
        resources: [
            { name: "AWS SageMaker Documentation", url: "https://aws.amazon.com/sagemaker/" },
            { name: "Google AI Platform Documentation", url: "https://cloud.google.com/ai-platform/docs" },
            { name: "freeCodeCamp - AWS for Beginners", url: "https://www.youtube.com/watch?v=k1xpn7n-s4g" },
        ],
        practice: "Train and deploy a simple model using AWS SageMaker or Google's Vertex AI.",
      },
      {
        what: "Model Deployment & Serving",
        why: "A model is useless if it's not accessible. Learn to serve your model via an API.",
        time: "2 Weeks",
        prereqs: "Python, Docker",
        resources: [
            { name: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/" },
            { name: "Building a ML API with Flask", url: "https://www.youtube.com/watch?v=s-i6b2V4hcc" },
        ],
        practice: "Wrap a trained model in a FastAPI or Flask API and interact with it using `curl` or Postman.",
      },
      {
        what: "Advanced NLP - Transformers",
        why: "Transformers (e.g., BERT, GPT) are the state-of-the-art architecture for nearly all modern NLP tasks.",
        time: "4 Weeks",
        prereqs: "NLP Basics, Deep Learning",
        resources: [
            { name: "The Illustrated Transformer", url: "http://jalammar.github.io/illustrated-transformer/" },
            { name: "Hugging Face Transformers Documentation", url: "https://huggingface.co/docs/transformers/index" },
        ],
        practice: "Fine-tune a pre-trained BERT model on a specific text classification task.",
      },
      {
        what: "Advanced CV - Object Detection & Segmentation",
        why: "Go beyond classification to identify the location and boundaries of objects in an image.",
        time: "4 Weeks",
        prereqs: "CV Basics, Deep Learning",
        resources: [
            { name: "CS231n Lectures on Object Detection", url: "https://www.youtube.com/watch?v=nDPW_x_s-vM" },
            { name: "PyTorch Official Object Detection Tutorial", url: "https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html" },
        ],
        practice: "Fine-tune a pre-trained model like Faster R-CNN or YOLO on a custom dataset.",
      },
       {
        what: "Reinforcement Learning (RL)",
        why: "Learn to train agents that make decisions in an environment to maximize a reward.",
        time: "4 Weeks",
        prereqs: "ML Fundamentals",
        resources: [
            { name: "David Silver's Reinforcement Learning Course (YouTube)", url: "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-UYHyzD7bqsAa8i5T5alt" },
            { name: "OpenAI Gym Documentation", url: "https://gymnasium.farama.org/" },
        ],
        practice: "Train a simple agent to solve a classic RL problem like CartPole using OpenAI Gym.",
      },
      {
        what: "Big Data Technologies (Spark)",
        why: "When data doesn't fit on a single machine, you need tools like Spark to process it in a distributed manner.",
        time: "3 Weeks",
        prereqs: "Python/Scala",
        resources: [
            { name: "Apache Spark Documentation", url: "https://spark.apache.org/docs/latest/" },
            { name: "Spark Tutorial (freeCodeCamp)", url: "https://www.youtube.com/watch?v=gr5eLhI5h_E" },
        ],
        practice: "Perform a simple data aggregation task on a large dataset using PySpark.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Iris Species Classifier", teaches: "Basic classification, Scikit-learn, data loading.", tech: "Python, Scikit-learn, Pandas" },
  { level: "Beginner", title: "Boston Housing Price Predictor", teaches: "Linear regression, feature importance, model evaluation.", tech: "Python, Scikit-learn, Matplotlib" },
  { level: "Beginner", title: "Titanic Survival Prediction", teaches: "Data cleaning, feature engineering, classification models.", tech: "Python, Pandas, Scikit-learn, Seaborn" },
  { level: "Intermediate", title: "IMDb Movie Review Sentiment Analysis", teaches: "NLP fundamentals, text preprocessing, Bag-of-Words, classification.", tech: "Python, NLTK/Scikit-learn, Pandas" },
  { level: "Intermediate", title: "Handwritten Digit Recognizer (MNIST)", teaches: "Intro to deep learning, convolutional neural networks (CNNs).", tech: "Python, TensorFlow/PyTorch" },
  { level: "Intermediate", title: "Customer Churn Prediction", teaches: "Classification, model evaluation metrics (Precision, Recall, F1-score), feature engineering.", tech: "Python, Scikit-learn, Pandas" },
  { level: "Intermediate", title: "Music Genre Classification", teaches: "Audio processing, feature extraction (MFCCs), classification.", tech: "Python, Librosa, Scikit-learn" },
  { level: "Advanced", title: "Face Mask Detection in Images", teaches: "Object detection, fine-tuning pre-trained models, computer vision.", tech: "Python, TensorFlow/PyTorch, OpenCV" },
  { level: "Advanced", title: "Question Answering with Transformers", teaches: "Advanced NLP, fine-tuning BERT/GPT models, Transformers library.", tech: "Python, PyTorch, Hugging Face" },
  { level: "Advanced", title: "Stock Price Prediction with LSTMs", teaches: "Time series analysis, Recurrent Neural Networks (RNNs), LSTMs.", tech: "Python, TensorFlow/Keras, Pandas" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan focusing on core concepts and practical application to get you started quickly.",
        schedule: [
            "Days 1-7: Python & Math Foundations (Linear Algebra, basic calculus).",
            "Days 8-14: Data Analysis & Visualization (NumPy, Pandas, Matplotlib).",
            "Days 15-21: Core ML Concepts & Scikit-learn (Regression, Classification, Evaluation).",
            "Days 22-30: Intro to Deep Learning & First Project (Neural Network theory, MNIST project).",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach covering fundamentals and intermediate topics in-depth.",
        schedule: [
            "Days 1-15: All of 30-Day 'Beginner' content.",
            "Days 16-30: Deep dive into Supervised & Unsupervised Learning algorithms.",
            "Days 31-45: Feature Engineering, Model Evaluation, and Intro to Deep Learning.",
            "Days 46-60: Deep Learning frameworks (TensorFlow/PyTorch) and complete an intermediate project.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge, specialization, and production-readiness.",
        schedule: [
            "Days 1-45: All of 60-Day 'Standard' content, with more depth.",
            "Days 46-60: Specialization in NLP or Computer Vision.",
            "Days 61-75: MLOps, Docker, and Cloud Deployment fundamentals.",
            "Days 76-90: Advanced project, interview preparation, and portfolio building.",
        ]
    }
];

const interviewTopics = [
    "Explain the Bias-Variance Tradeoff.",
    "Difference between Supervised, Unsupervised, and Reinforcement Learning.",
    "How does a Decision Tree / Random Forest / Gradient Boosting work?",
    "Explain Logistic Regression vs. Linear Regression.",
    "What are Precision, Recall, F1-Score, and AUC-ROC curve?",
    "How does Backpropagation in a Neural Network work?",
    "Explain different types of regularization (L1, L2, Dropout).",
    "What is Cross-Validation and why is it important?",
    "Difference between a CNN and an RNN.",
    "How would you handle a highly imbalanced dataset?",
];

const codingQuestions = [
    { question: "Implement K-Means clustering from scratch.", topic: "Unsupervised Learning" },
    { question: "Write a function to calculate the gradient of a simple linear regression cost function.", topic: "Linear Algebra/Calculus" },
    { question: "Given a confusion matrix, calculate precision and recall.", topic: "Model Evaluation" },
];

const mcqs = [
    { question: "Which of the following is NOT a supervised learning task?", options: ["Regression", "Classification", "Clustering", "Time Series Forecasting"], answer: "Clustering" },
    { question: "What is the primary purpose of a validation set?", options: ["To train the model", "To tune hyperparameters", "To test the final model", "To gather more data"], answer: "To tune hyperparameters" },
    { question: "Overfitting occurs when a model...", options: ["Performs well on test data", "Is too simple", "Learns the noise in the training data", "Has high bias"], answer: "Learns the noise in the training data" },
];

const mistakes = [
    "Jumping into complex deep learning without understanding ML fundamentals.",
    "Ignoring the importance of data cleaning and feature engineering.",
    "Not using a validation set and overfitting to the test set.",
    "Focusing only on model accuracy and ignoring other metrics.",
    "Not understanding the math behind the algorithms you use.",
    "Failing to version control code and experiments with Git.",
    "Training on data that you won't have at prediction time (data leakage).",
    "Not properly communicating results to a non-technical audience.",
    "Underestimating the difficulty of deploying a model to production.",
    "Spending too much time on one project instead of building a diverse portfolio."
]

export default function AiMlEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The AI/ML Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive, step-by-step guide to becoming a proficient
            AI/ML Engineer.
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
                <CardDescription>Key topics, questions, and resume tips to land the job.</CardDescription>
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
                        {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analysis', 'Feature Engineering', 'Model Deployment', 'AWS', 'GCP', 'Docker', 'MLOps'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, installation steps, and usage instructions.</li>
                        <li>Include a link to a live demo if applicable (e.g., using Streamlit Cloud or Hugging Face Spaces).</li>
                        <li>Add visuals: screenshots, architecture diagrams, and plots of your results.</li>
                        <li>Organize your code logically into folders (e.g., `data`, `notebooks`, `src`).</li>
                        <li>Include a `requirements.txt` or `environment.yml` file to list dependencies.</li>
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
                This roadmap is a guide, not a rigid set of rules. The most important thing is to stay curious, be consistent, and enjoy the process of learning. Start with the first step, build projects you're passionate about, and never be afraid to ask questions. You have what it takes to succeed. Good luck!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
