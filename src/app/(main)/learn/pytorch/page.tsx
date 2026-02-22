
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Tensors & Autograd Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to PyTorch & Installation",
        why: "To set up your environment using 'Conda' or 'Pip' and understand why PyTorch's dynamic computational graph is preferred for research.",
        time: "2 Days",
        prereqs: "Basic Python",
        resources: [
          { name: "PyTorch Official - Get Started", url: "https://pytorch.org/get-started/locally/" },
          { name: "PyTorch for Beginners (YouTube - freeCodeCamp)", url: "https://www.youtube.com/watch?v=V_xro1bcAuA" },
        ],
        practice: "Install PyTorch. Verify GPU access with `torch.cuda.is_available()`. Create a simple tensor.",
      },
      {
        what: "Tensors: The Core Data Structure",
        why: "Tensors are the multi-dimensional arrays that power all DL models. You must master creating, reshaping, and slicing them.",
        time: "3 Days",
        prereqs: "NumPy Basics",
        resources: [
          { name: "Introduction to Tensors", url: "https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html" },
        ],
        practice: "Perform matrix multiplication, broadcasting, and flattening operations on random tensors.",
      },
      {
        what: "Autograd: Automatic Differentiation",
        why: "Autograd is how PyTorch calculates gradients for backpropagation. It's the 'engine' that allows models to learn.",
        time: "3 Days",
        prereqs: "Basic Calculus (Derivatives)",
        resources: [
          { name: "A Gentle Introduction to torch.autograd", url: "https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html" },
        ],
        practice: "Create a tensor with `requires_grad=True`, perform math, and call `.backward()` to inspect `.grad`.",
      },
      {
        what: "Linear Regression from Scratch",
        why: "To understand exactly how the training loop works: prediction, loss calculation, backprop, and weight updates.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Linear Regression with PyTorch", url: "https://www.youtube.com/watch?v=GIsg-ZUy0MY" },
        ],
        practice: "Build a model that predicts values without using `nn.Module`, writing the training loop manually.",
      },
      {
        what: "The nn.Module & Linear Layers",
        why: "The professional way to build models. `nn.Module` is the base class for all neural network components.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Build the Neural Network", url: "https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html" },
        ],
        practice: "Refactor your linear regression model using `nn.Linear` and `nn.Module`.",
      },
      {
        what: "Loss Functions & Optimizers",
        why: "To define the goal (Loss) and the strategy to reach it (SGD, Adam). Optimizers automate the weight update step.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Losses and Optimizers in PyTorch", url: "https://pytorch.org/docs/stable/nn.html#loss-functions" },
        ],
        practice: "Compare the convergence speed of SGD vs. Adam on a simple regression task.",
      },
      {
        what: "Datasets & DataLoaders",
        why: "Handling large data requires efficient batching, shuffling, and multi-threaded loading. `DataLoader` handles this natively.",
        time: "4 Days",
        prereqs: "Python Iterators",
        resources: [
          { name: "Datasets & DataLoaders", url: "https://pytorch.org/tutorials/beginner/basics/data_tutorial.html" },
        ],
        practice: "Load the built-in MNIST dataset and iterate through batches using a loop.",
      },
      {
        what: "First Classifier: MNIST Digits",
        why: "To combine all foundations into a functional image classification system. The 'Hello World' of Deep Learning.",
        time: "4 Days",
        prereqs: "All previous steps",
        resources: [
          { name: "MNIST with PyTorch (Tutorial)", url: "https://nextjournal.com/gkoehler/pytorch-mnist" },
        ],
        practice: "Build a Multi-Layer Perceptron (MLP) that achieves >95% accuracy on MNIST digit recognition.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Computer Vision & Specialized Architectures",
    level: "Intermediate",
    steps: [
      {
        what: "Convolutional Neural Networks (CNNs)",
        why: "CNNs are the gold standard for spatial data (images). Master Conv2d, MaxPool2d, and flattening layers.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Training a Classifier (CIFAR-10)", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" },
        ],
        practice: "Build a CNN to classify the CIFAR-10 dataset (colored images).",
      },
      {
        what: "Transfer Learning with Torchvision",
        why: "Don't train from scratch. Use pre-trained models like ResNet or VGG to get expert results with tiny datasets.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Transfer Learning for Computer Vision", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
        ],
        practice: "Fine-tune a pre-trained ResNet18 model to classify a custom set of images (e.g., ants vs. bees).",
      },
      {
        what: "Custom Datasets & Transforms",
        why: "To work with your own data (folders of images or CSVs). Transforms are crucial for data augmentation.",
        time: "5 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Writing Custom Datasets", url: "https://pytorch.org/tutorials/beginner/data_loading_tutorial.html" },
        ],
        practice: "Create a `Dataset` class that loads local images and applies random cropping and flipping.",
      },
      {
        what: "Saving & Loading Models",
        why: "To preserve your trained model weights. Learn the difference between saving the `state_dict` vs the whole model.",
        time: "2 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Saving and Loading Models Guide", url: "https://pytorch.org/tutorials/beginner/saving_loading_models.html" },
        ],
        practice: "Train a model for 5 epochs, save the `state_dict`, and reload it in a fresh script.",
      },
      {
        what: "Intro to NLP: RNNs & LSTMs",
        why: "For sequential data like text or speech where the order of information matters.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "NLP From Scratch (Official)", url: "https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html" },
        ],
        practice: "Build a character-level RNN that predicts the language of a name (e.g., 'McGregor' -> Scottish).",
      },
      {
        what: "Word Embeddings & Torchtext",
        why: "To convert words into dense vectors that capture semantic meaning.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Word Embeddings Tutorial", url: "https://pytorch.org/tutorials/beginner/nlp/word_embeddings_tutorial.html" },
        ],
        practice: "Train a skip-gram model or use pre-trained GloVe embeddings in a sentiment analyzer.",
      },
      {
        what: "Sequence-to-Sequence Models",
        why: "The foundation of translation and chat systems. Learn Encoder-Decoder architectures.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "NLP From Scratch: Translation", url: "https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html" },
        ],
        practice: "Build a simple English-to-French translator using a Seq2Seq model.",
      },
      {
        what: "Visualizing with TensorBoard",
        why: "To monitor loss curves and visualize internal model parameters in real-time.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Visualizing with TensorBoard", url: "https://pytorch.org/tutorials/intermediate/tensorboard_tutorial.html" },
        ],
        practice: "Integrate `SummaryWriter` into your training loop to log training and validation loss.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery & Production",
    level: "Advanced",
    steps: [
      {
        what: "PyTorch Lightning",
        why: "The standard framework for professional PyTorch. It removes boilerplate and makes code reproducible and scalable.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "PyTorch Lightning - 15 Minute Guide", url: "https://lightning.ai/docs/pytorch/stable/starter/introduction.html" },
        ],
        practice: "Convert an existing CNN project into a `LightningModule`.",
      },
      {
        what: "Generative Adversarial Networks (GANs)",
        why: "To generate new data (images, art). This is the core of modern creative AI.",
        time: "2 Weeks",
        prereqs: "CNNs",
        resources: [
          { name: "DCGAN Tutorial", url: "https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html" },
        ],
        practice: "Train a GAN to generate realistic faces using the CelebA dataset.",
      },
      {
        what: "Attention & Transformers",
        why: "Transformers (the 'T' in ChatGPT) changed everything. Master Self-Attention and multi-head mechanisms.",
        time: "2 Weeks",
        prereqs: "NLP Basics",
        resources: [
          { name: "Attention Is All You Need (Annotated)", url: "https://nlp.seas.harvard.edu/2018/04/03/attention.html" },
          { name: "PyTorch Transformer Class Docs", url: "https://pytorch.org/docs/stable/generated/torch.nn.Transformer.html" },
        ],
        practice: "Implement a simple multi-head attention block from scratch.",
      },
      {
        what: "Hugging Face & Fine-tuning LLMs",
        why: "To leverage massive models like BERT or Llama. Every professional DL engineer must know this ecosystem.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "Fine-tuning a Pre-trained Model", url: "https://huggingface.co/docs/transformers/training" },
        ],
        practice: "Fine-tune a DistilBERT model for text classification on a custom dataset.",
      },
      {
        what: "Distributed Data Parallel (DDP)",
        why: "To train models across multiple GPUs. Essential for large-scale industrial projects.",
        time: "1 Week",
        prereqs: "Server Basics",
        resources: [
          { name: "Distributed Data Parallel Guide", url: "https://pytorch.org/tutorials/beginner/dist_overview.html" },
        ],
        practice: "Run a training job distributed across two local GPUs (or virtual ones).",
      },
      {
        what: "TorchScript & Model Optimization",
        why: "To export PyTorch models for high-performance deployment in C++ environments.",
        time: "1 Week",
        prereqs: "C++ Basics (Optional)",
        resources: [
          { name: "Introduction to TorchScript", url: "https://pytorch.org/tutorials/beginner/Intro_to_TorchScript_tutorial.html" },
        ],
        practice: "Convert a model to TorchScript via tracing and script annotations.",
      },
      {
        what: "Serving with TorchServe",
        why: "The official way to serve PyTorch models in production with logging, metrics, and multi-model management.",
        time: "1 Week",
        prereqs: "Docker Basics",
        resources: [
          { name: "TorchServe Getting Started", url: "https://pytorch.org/serve/getting_started.html" },
        ],
        practice: "Deploy your saved MNIST model as a REST API using TorchServe.",
      },
      {
        what: "Mixed Precision Training",
        why: "Train models twice as fast with half the memory using 16-bit floats without losing accuracy.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Automatic Mixed Precision (AMP)", url: "https://pytorch.org/docs/stable/amp.html" },
        ],
        practice: "Add `torch.cuda.amp` to a standard training loop and measure the speed increase.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Handwritten Digit Classifier", teaches: "MLP architecture, basic tensors, and Keras-style nn.Module.", tech: "PyTorch, MNIST" },
  { level: "Beginner", title: "House Price Predictor", teaches: "Regression, loss functions, and manual training loops.", tech: "PyTorch, Pandas" },
  { level: "Beginner", title: "Simple Sentiment Analyzer", teaches: "Embeddings, logic gates, and text preprocessing.", tech: "PyTorch, Torchtext" },
  { level: "Intermediate", title: "Dog vs Cat Classifier", teaches: "CNNs, max pooling, dropout, and data augmentation.", tech: "PyTorch, Torchvision" },
  { level: "Intermediate", title: "Neural Style Transfer", teaches: "Feature extraction, custom loss functions (style/content).", tech: "PyTorch, VGG19" },
  { level: "Intermediate", title: "Language Translator", teaches: "Seq2Seq, attention mechanisms, and sequence processing.", tech: "PyTorch, LSTMs" },
  { level: "Intermediate", title: "Model Performance Dashboard", teaches: "TensorBoard integration and metric tracking.", tech: "PyTorch, TensorBoard" },
  { level: "Advanced", title: "Face Generator (GAN)", teaches: "Adversarial training, custom weight initialization.", tech: "PyTorch, DCGAN" },
  { level: "Advanced", title: "BERT-based Question Answering", teaches: "Transformers, Hugging Face, and fine-tuning.", tech: "PyTorch, Transformers" },
  { level: "Advanced", title: "Production Deployment Pipeline", teaches: "Docker, TorchServe, and REST API creation.", tech: "PyTorch, TorchServe, Docker" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Research Ready",
    description: "Focus on tensor math, Autograd, and standard architectures to start experimenting with papers.",
    schedule: [
      "Days 1-10: Tensors, Autograd, and Manual Training Loops.",
      "Days 11-20: nn.Module, DataLoaders, and building MLPs.",
      "Days 21-30: CNN basics and building the MNIST classifier.",
    ]
  },
  {
    title: "60-Day Standard Plan: The ML Engineer",
    description: "Balanced path for mastering Computer Vision, NLP, and professional frameworks like Lightning.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage + 3 projects.",
      "Days 21-45: CNNs, Transfer Learning, RNNs, and Seq2Seq.",
      "Days 46-60: PyTorch Lightning, TensorBoard, and a complete Vision project.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The DL Architect",
    description: "Comprehensive path including Generative AI, Transformers, and Production Deployment.",
    schedule: [
      "Days 1-30: Core PyTorch & Vision fundamentals.",
      "Days 31-60: Advanced NLP, GANs, and Transformers.",
      "Days 61-90: Deployment (TorchServe), Distributed Training, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between Dynamic and Static Computational Graphs.",
  "How does backpropagation work in torch.autograd?",
  "What is the role of `optimizer.zero_grad()`?",
  "Explain the difference between `model.train()` and `model.eval()`.",
  "Describe the 'Lazy Evaluation' concept in PyTorch.",
  "What is the difference between `.view()` and `.reshape()`?",
  "How do you prevent overfitting in deep learning? (Dropout, Weight Decay).",
  "Explain Transfer Learning and when to unfreeze layers.",
  "How does the Self-Attention mechanism work in Transformers?",
  "Describe the process of deploying a model with TorchScript.",
];

const codingQuestions = [
  { question: "Implement a custom activation function (like ReLU) using Autograd.", topic: "Tensors" },
  { question: "Write a function to perform a moving average on a tensor.", topic: "Math Ops" },
  { question: "Implement a 3-layer CNN using the nn.Module class.", topic: "Architecture" },
  { question: "Write a simple training loop that includes validation steps.", topic: "Training" },
];

const mcqs = [
  { question: "Which function is used to free the gradients after an update?", options: ["grad.clear()", "optimizer.zero_grad()", "reset_grad()", "torch.zero()"], answer: "optimizer.zero_grad()" },
  { question: "What is the result of multiplying a (3, 4) tensor with a (4, 2) tensor?", options: ["(3, 2)", "(4, 4)", "(3, 4)", "Error"], answer: "(3, 2)" },
  { question: "Which PyTorch module is used for image augmentations?", options: ["torchvision.transforms", "torch.image", "nn.augment", "cv2"], answer: "torchvision.transforms" },
];

const mistakes = [
  "Forgetting `optimizer.zero_grad()`: Gradients accumulate by default, which breaks learning.",
  "Not using GPU: Training large models on CPU takes 100x longer—always use `.to(device)`.",
  "Ignoring `model.eval()`: BatchNorm and Dropout behave differently during testing.",
  "Mismatched Shapes: The most common error—always print tensor shapes debugging.",
  "Using `requires_grad=True` on test data: Wastes massive memory—use `with torch.no_grad():`.",
  "Over-fitting on small data: Not using enough regularization or augmentation.",
  "Directly using NumPy for gradients: NumPy doesn't support Autograd—always stay in the PyTorch ecosystem.",
  "Hardcoding parameters: Not using a config file or arguments for learning rates and batch sizes.",
  "Ignoring the Log: Not checking if loss is actually decreasing during the first few steps.",
  "Tutorial Hell: Watching videos without typing out the code and breaking things.",
];

export default function PyTorchRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Brain className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The PyTorch Mastery Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the framework of choice for researchers and cutting-edge AI labs. Build, test, and deploy industrial-scale Deep Learning models.
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your portfolio.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream DL/AI role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding Challenges</h3>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'Lightning', 'CNN', 'LSTM', 'Transformers', 'Autograd', 'Torchvision', 'DDP', 'TorchServe', 'Fine-tuning', 'Transfer Learning', 'Mixed Precision'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality loss/accuracy plots in GitHub READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose PyTorch Lightning').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Link to research paper implementations you've replicated.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Intelligent Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            PyTorch is more than a library; it's a doorway to creating systems that can see, understand, and generate. Stay consistent, keep building even when the gradients vanish, and always stay curious. The future of AI is being built right now—go build your part of it.
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
