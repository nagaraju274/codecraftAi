
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
  Terminal,
  Code,
  Search,
  Monitor,
  Workflow,
  CheckCircle,
  ShieldCheck,
  Cpu,
  Layers,
  Globe,
  Activity,
  ArrowLeft,
  ArrowRight,
  Database,
  History,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Neural Foundations & Framework Basics",
    level: "Beginner",
    steps: [
      {
        what: "Math Foundations (Linear Algebra & Calculus)",
        why: "Deep learning is fundamentally applied math. You need to understand vectors, matrices, derivatives, and the chain rule to grasp how models learn.",
        time: "2 Weeks",
        prereqs: "High School Math",
        resources: [
          { name: "Essence of Linear Algebra (3Blue1Brown)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
          { name: "Calculus for Machine Learning (Khan Academy)", url: "https://www.khanacademy.org/math/multivariable-calculus" },
        ],
        practice: "Solve 10 matrix multiplication problems manually. Implement a simple derivative function in Python.",
      },
      {
        what: "Python for Deep Learning (NumPy & Pandas)",
        why: "Python is the dominant language. NumPy is the backbone for numerical operations, and Pandas is essential for data handling.",
        time: "1 Week",
        prereqs: "Basic Python",
        resources: [
          { name: "NumPy for Data Science (YouTube)", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI" },
          { name: "Pandas 10-Minute Guide", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
        ],
        practice: "Create a 3D tensor in NumPy and perform various reshaping and slicing operations.",
      },
      {
        what: "The Biological to Artificial Neuron",
        why: "To understand the inspiration behind Deep Learning and the simplest unit of a network: the Perceptron.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Neural Networks Part 1 (StatQuest)", url: "https://www.youtube.com/watch?v=look-up-statquest-nn" },
        ],
        practice: "Draw a single neuron with inputs, weights, and a bias. Calculate the output for a simple XOR logic gate manually.",
      },
      {
        what: "Gradient Descent & Backpropagation",
        why: "This is how networks actually 'learn'. Backprop is the algorithm that updates weights to minimize the error (loss).",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Backpropagation Calculus (3Blue1Brown)", url: "https://www.youtube.com/watch?v=Ilg3gGewQ5U" },
        ],
        practice: "Manually perform one step of gradient descent for a simple 1-variable function.",
      },
      {
        what: "PyTorch or TensorFlow Basics",
        why: "You need a library to handle the heavy lifting of tensor math and automatic differentiation.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "PyTorch for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=V_xro1bcAuA" },
          { name: "TensorFlow 2.0 Intro", url: "https://www.tensorflow.org/tutorials/quickstart/beginner" },
        ],
        practice: "Initialize a project, create a tensor, and verify GPU acceleration with CUDA/MPS.",
      },
      {
        what: "Building your first Multi-Layer Perceptron (MLP)",
        why: "To move beyond single neurons to deep networks capable of learning non-linear patterns.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "MNIST Digit Classifier (PyTorch)", url: "https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html" },
        ],
        practice: "Build a model to classify handwritten digits (MNIST) with at least 2 hidden layers.",
      },
      {
        what: "Loss Functions & Activation Functions",
        why: "To understand how to measure error (MSE, Cross-Entropy) and how to introduce non-linearity (ReLU, Sigmoid, Softmax).",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Activation Functions Guide", url: "https://machinelearningmastery.com/choose-an-activation-function-for-deep-learning/" },
        ],
        practice: "Compare the performance of a model using ReLU vs Sigmoid on a simple classification task.",
      },
      {
        what: "Data Preprocessing & Normalization",
        why: "Deep learning models are sensitive to input scales. Normalizing data ensures stable and faster training.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Feature Scaling (Scikit-Learn)", url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
        ],
        practice: "Apply StandardScalar and MinMaxScaler to a dataset and observe the distribution change.",
      },
      {
        what: "Optimization Algorithms (SGD, Adam)",
        why: "Simple gradient descent is slow. Advanced optimizers like Adam use momentum to reach the minimum faster.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Adam Optimizer Explained", url: "https://machinelearningmastery.com/adam-optimization-algorithm-for-deep-learning/" },
        ],
        practice: "Train the same model twice: once with SGD and once with Adam. Plot the loss curves to compare.",
      },
      {
        what: "Model Evaluation (Train/Val/Test)",
        why: "To ensure your model generalizes to new data and isn't just memorizing the training set (Overfitting).",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Model Evaluation Metrics", url: "https://towardsdatascience.com/metrics-to-evaluate-your-machine-learning-algorithm-f1043e14889" },
        ],
        practice: "Implement a validation split in your training loop and monitor both training and validation loss.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Specialized Architectures & Tuning",
    level: "Intermediate",
    steps: [
      {
        what: "Convolutional Neural Networks (CNNs)",
        why: "The standard for spatial data like images. Learn about Filters, Padding, Stride, and Pooling.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "CNNs for Visual Recognition (CS231n)", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" },
        ],
        practice: "Build a CNN to classify the CIFAR-10 dataset (colored images).",
      },
      {
        what: "Recurrent Neural Networks (RNNs) & LSTMs",
        why: "Essential for sequential data like text, time-series, or speech where past context matters.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Understanding LSTMs (Colah's Blog)", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
        ],
        practice: "Build an LSTM model to predict the next word in a sentence or next value in a stock price series.",
      },
      {
        what: "Regularization (Dropout & Weight Decay)",
        why: "To prevent overfitting. These techniques force the network to be more robust and simpler.",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Regularization in DL", url: "https://www.youtube.com/watch?v=look-up-dropout" },
        ],
        practice: "Apply Dropout to your CNN and observe if it reduces the gap between train and validation accuracy.",
      },
      {
        what: "Normalization (Batch & Layer Norm)",
        why: "To stabilize the training of very deep networks and allow for higher learning rates.",
        time: "4 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Batch Normalization Guide", url: "https://machinelearningmastery.com/batch-normalization-for-training-of-deep-neural-networks/" },
        ],
        practice: "Insert BatchNorm layers into a deep MLP and compare training stability.",
      },
      {
        what: "Transfer Learning & Fine-Tuning",
        why: "Industry secret: Don't train from scratch. Leverage models trained on millions of images (ResNet, VGG).",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Transfer Learning Tutorial", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
        ],
        practice: "Use a pre-trained ResNet model to classify a custom dataset of 100 images.",
      },
      {
        what: "Word Embeddings (Word2Vec, GloVe)",
        why: "To turn raw words into mathematical vectors that capture semantic relationships.",
        time: "5 Days",
        prereqs: "Step 12",
        resources: [
          { name: "Illustrated Word2Vec", url: "https://jalammar.github.io/illustrated-word2vec/" },
        ],
        practice: "Use pre-trained GloVe embeddings to find the 5 most similar words to 'Programming'.",
      },
      {
        what: "Object Detection (YOLO, Faster R-CNN)",
        why: "Go beyond simple classification to find WHERE objects are in an image.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "YOLO v8 Introduction", url: "https://docs.ultralytics.com/" },
        ],
        practice: "Run a pre-trained YOLO model on your webcam feed to detect household objects.",
      },
      {
        what: "Hyperparameter Optimization (Keras Tuner / Optuna)",
        why: "Finding the best learning rate or number of layers is an art. Automating this search is professional standard.",
        time: "5 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Optuna - Hyperparameter Framework", url: "https://optuna.org/" },
        ],
        practice: "Use Optuna to find the best 3 hyperparameters for an image classifier.",
      },
      {
        what: "Autoencoders & Dimensionality Reduction",
        why: "To learn compressed representations of data, useful for denoising and anomaly detection.",
        time: "5 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Building Autoencoders in Keras", url: "https://blog.keras.io/building-autoencoders-in-keras.html" },
        ],
        practice: "Build an autoencoder to remove 'salt and pepper' noise from images.",
      },
      {
        what: "Monitoring with Weights & Biases (WandB)",
        why: "To track experiments, compare models, and collaborate with a team professionally.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "WandB Quickstart", url: "https://docs.wandb.ai/quickstart" },
        ],
        practice: "Log your first 10-epoch training run to WandB and view the charts online.",
      },
    ],
  },
  {
    title: "Advanced Stage: Generative AI, Transformers & MLOps",
    level: "Advanced",
    steps: [
      {
        what: "Attention Mechanism & Transformers",
        why: "The foundation of all modern AI (ChatGPT, BERT). Self-attention allows the model to focus on different parts of input.",
        time: "2 Weeks",
        prereqs: "Step 12, Step 16",
        resources: [
          { name: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
          { name: "Attention Is All You Need (Paper)", url: "https://arxiv.org/abs/1706.03762" },
        ],
        practice: "Implement a simple multi-head attention block from scratch in PyTorch.",
      },
      {
        what: "Generative Adversarial Networks (GANs)",
        why: "To generate new data. Understand the generator-discriminator game that creates realistic fake data.",
        time: "2 Weeks",
        prereqs: "Step 11",
        resources: [
          { name: "GANs Specialization (Coursera)", url: "https://www.deeplearning.ai/courses/generative-adversarial-networks-specialization/" },
        ],
        practice: "Train a GAN to generate handwritten digits that don't exist in the MNIST dataset.",
      },
      {
        what: "Natural Language Processing (BERT & GPT)",
        why: "To leverage large pre-trained language models for specific tasks via fine-tuning.",
        time: "2 Weeks",
        prereqs: "Step 21",
        resources: [
          { name: "Hugging Face Course", url: "https://huggingface.co/learn/nlp-course" },
        ],
        practice: "Fine-tune a BERT model for multi-class sentiment analysis using the Hugging Face Transformers library.",
      },
      {
        what: "Reinforcement Learning (RL) Basics",
        why: "For building agents that learn through trial and error (Games, Robotics, FinTech).",
        time: "2 Weeks",
        prereqs: "Step 9",
        resources: [
          { name: "Deep RL Course (Hugging Face)", url: "https://huggingface.co/learn/deep-rl-course" },
        ],
        practice: "Train a simple agent to play 'CartPole' using OpenAI Gym and Stable Baselines3.",
      },
      {
        what: "Deployment: Flask, FastAPI & Docker",
        why: "A model is useless if it stays in a Jupyter Notebook. You must wrap it in an API and containerize it.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Serving PyTorch with FastAPI", url: "https://testdriven.io/blog/fastapi-pytorch-docker/" },
        ],
        practice: "Create a Docker image that serves your digit classifier over a REST API.",
      },
      {
        what: "Cloud ML Platforms (AWS SageMaker/Vertex AI)",
        why: "Professional DL engineers train and deploy on the cloud. Master scaling and managed endpoints.",
        time: "1 Week",
        prereqs: "Step 25",
        resources: [
          { name: "AWS SageMaker for Data Scientists", url: "https://aws.amazon.com/sagemaker/" },
        ],
        practice: "Deploy a model to an AWS SageMaker endpoint and invoke it from a Python script.",
      },
      {
        what: "Model Quantization & Optimization (ONNX)",
        why: "To make models smaller and faster for production or mobile devices.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "ONNX Runtime Guide", url: "https://onnxruntime.ai/" },
        ],
        practice: "Convert a PyTorch model to ONNX format and run it using the ONNX runtime.",
      },
      {
        what: "MLOps & CI/CD for Deep Learning",
        why: "To automate the retraining and deployment of models when new data arrives.",
        time: "1 Week",
        prereqs: "Step 23, Step 25",
        resources: [
          { name: "MLOps Specialization (DeepLearning.AI)", url: "https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/" },
        ],
        practice: "Set up a GitHub Action that automatically runs your unit tests whenever you push model code.",
      },
      {
        what: "Audio & Speech Processing",
        why: "Expanding into non-visual domains. Learn about Spectrograms, Wavelets, and Wav2Vec.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Speech Processing with Wav2Vec2", url: "https://huggingface.co/blog/fine-tune-wav2vec2-asr" },
        ],
        practice: "Fine-tune a speech-to-text model on a small dataset of voice commands.",
      },
      {
        what: "Ethical AI & Bias Mitigation",
        why: "To ensure your models are fair, explainable, and don't harm specific groups of people.",
        time: "Ongoing",
        prereqs: "None",
        resources: [
          { name: "Fairness in ML (Google)", url: "https://developers.google.com/machine-learning/crash-course/fairness/video-lecture" },
        ],
        practice: "Audit your classification model for bias using the 'Fairness Indicators' dashboard.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Handwritten Digit Recognizer", teaches: "MLP, Backprop, and Keras/PyTorch fundamentals.", tech: "Python, PyTorch, MNIST" },
  { level: "Beginner", title: "House Price Predictor", teaches: "Regression, Normalization, and Loss functions.", tech: "Python, NumPy, Pandas" },
  { level: "Beginner", title: "Sentiment Analyzer", teaches: "Word Embeddings and basic classification logic.", tech: "Python, NLTK, Scikit-learn" },
  { level: "Intermediate", title: "Dog vs Cat Classifier", teaches: "CNNs, Data Augmentation, and pooling layers.", tech: "PyTorch, Torchvision" },
  { level: "Intermediate", title: "Neural Style Transfer", teaches: "Feature extraction and intermediate layer access.", tech: "PyTorch, VGG19" },
  { level: "Intermediate", title: "Automated Image Captioner", teaches: "Combining CNNs (Vision) and RNNs (NLP).", tech: "PyTorch, LSTMs" },
  { level: "Intermediate", title: "Anomaly Detection in Time-Series", teaches: "LSTMs and reconstruction error with Autoencoders.", tech: "Python, TensorFlow" },
  { level: "Advanced", title: "Face Generator (GAN)", teaches: "Generative AI and adversarial training loops.", tech: "PyTorch, DCGAN" },
  { level: "Advanced", title: "Custom Language Model Fine-tuning", teaches: "Transformers, Hugging Face, and large data handling.", tech: "PyTorch, Transformers" },
  { level: "Advanced", title: "Autonomous Racing Agent", teaches: "Deep Reinforcement Learning and environments.", tech: "Python, Stable Baselines3, OpenAI Gym" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on syntax, math basics, and standard architectures to land an internship.",
    schedule: [
      "Days 1-7: Python, NumPy, and Linear Algebra.",
      "Days 8-15: Neural Network theory, Backprop, and PyTorch basics.",
      "Days 16-23: CNNs and Image Classification projects.",
      "Days 24-30: Build a portfolio and practice common interview MCQs.",
    ]
  },
  {
    title: "60-Day Standard Plan: The ML Engineer",
    description: "Balanced path covering CV, NLP, and professional experiment tracking.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: LSTMs, Transfer Learning, and Hyperparameter tuning.",
      "Days 41-60: API deployment (FastAPI), Docker, and 3 portfolio projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The DL Architect",
    description: "Comprehensive path including Generative AI, Transformers, and MLOps.",
    schedule: [
      "Days 1-30: Core Development & Vision foundations.",
      "Days 31-60: NLP, Transformers, and Advanced Concurrency.",
      "Days 61-90: GANs, RL, Cloud Deployment, and final advanced project.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between L1 and L2 regularization.",
  "How does the Adam optimizer work compared to standard SGD?",
  "Describe the 'Vanishing Gradient' problem and how ReLU/Batch-Norm fix it.",
  "Difference between a CNN and an RNN. When to use which?",
  "What is 'Self-Attention' in Transformers?",
  "How does Transfer Learning save computational cost?",
  "Explain the Bias-Variance tradeoff.",
  "Describe the check-effects-interactions pattern in Solidity (wait, wrong domain!). Describe how to handle imbalanced datasets in DL.",
  "What is 'Gradient Clipping'?",
  "How do you deploy a model to handle 10,000 requests per second?",
];

const codingQuestions = [
  { question: "Implement a 2-layer neural network from scratch using only NumPy.", topic: "Logic" },
  { question: "Write a PyTorch custom dataset class for a folder of images.", topic: "Frameworks" },
  { question: "Implement a sliding window function for time-series data.", topic: "Data Processing" },
  { question: "Write a function to calculate the Intersection over Union (IoU) for two bounding boxes.", topic: "Vision" },
];

const mcqs = [
  { question: "Which activation function is generally preferred for hidden layers?", options: ["Sigmoid", "Tanh", "ReLU", "Step"], answer: "ReLU" },
  { question: "What happens when you increase the 'Dropout' rate?", options: ["Higher accuracy", "Reduced overfitting", "Faster training", "Exploding gradients"], answer: "Reduced overfitting" },
  { question: "Which layer is used to reduce the spatial size of an input representation?", options: ["Dense", "Conv2D", "MaxPooling", "Dropout"], answer: "MaxPooling" },
];

const mistakes = [
  "Learning too many frameworks at once instead of mastering one (PyTorch or TF).",
  "Ignoring the math: Trying to build models without understanding gradients leads to tuning in the dark.",
  "Not using a GPU: Training large models on CPU takes 100x longer—always use Google Colab or Kaggle.",
  "Ignoring data quality: Clean data is more important than a complex model.",
  "Overfitting because the model is too large for the dataset.",
  "Forgetting to normalize data, causing gradients to explode or vanish.",
  "Neglecting experiment tracking (WandB/TensorBoard), making it impossible to reproduce results.",
  "Hardcoding paths: Use `pathlib` or `os.path` for portable scripts.",
  "Tutorial hell: Copy-pasting code without writing original logic from scratch.",
  "Ignoring the 'Evaluation' mode: Forgetting to call `model.eval()` or using `torch.no_grad()` during testing.",
];

export default function DeepLearningEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Brain className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Deep Learning Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of building systems that think. From absolute mathematical foundations to architecting global-scale LLMs, Generative AI, and production-ready MLOps.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/roles?section=item-Artificial Intelligence & Machine Learning">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Roles
          </Link>
        </Button>

        {stages.map((stage) => (
          <Card key={stage.title} className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3 text-primary">
                <Brain className="h-8 w-8" />
                {stage.title}
              </CardTitle>
              <CardDescription>Master the pillars of the {stage.level} level.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                      <div className="flex items-center gap-3">
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional DL Engineer.</CardDescription>
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
                    <Terminal className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Pick a timeline that matches your availability and goals.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream AI or Machine Learning role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding & Logic Challenges</h3>
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
              <h3 className="font-bold text-xl text-center">Resume & Profile Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Deep Learning', 'PyTorch', 'TensorFlow', 'CNN', 'RNN', 'LSTMs', 'Transformers', 'GANs', 'MLOps', 'AWS SageMaker', 'Hugging Face', 'Data Augmentation', 'Transfer Learning', 'Quantization'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Model Generalization' and 'Optimization'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality GIF recordings of your models in action (e.g. YOLO detection).</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with MLOps pipelines and cloud deployment.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <ShieldAlert className="h-6 w-6"/>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Intelligent Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Deep Learning is the most transformative technology of our time. It rewards the curious, the mathematical, and the persistent. Stay consistent, keep building, and remember: The most advanced AI in the world was built on the foundations you're learning today. Your neural journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building AI
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
