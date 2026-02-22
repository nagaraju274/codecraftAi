
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
    title: "Beginner Stage: Foundations & Keras API",
    level: "Beginner",
    steps: [
      {
        what: "Python & NumPy for Machine Learning",
        why: "TensorFlow operations are heavily inspired by NumPy. Mastering array manipulation is the entry ticket to tensor operations.",
        time: "1 Week",
        prereqs: "Basic Python",
        resources: [
          { name: "NumPy for Data Science (YouTube)", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI" },
          { name: "NumPy Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html" },
        ],
        practice: "Solve 20 NumPy exercises focusing on reshaping, broadcasting, and matrix multiplication.",
      },
      {
        what: "TensorFlow Basics: Tensors & Math Ops",
        why: "Tensors are the fundamental data structure. You must understand constants, variables, and how TF handles gradients.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "TF Introduction (Official Docs)", url: "https://www.tensorflow.org/guide/tensor" },
          { name: "Tensors in 10 Minutes (YouTube)", url: "https://www.youtube.com/watch?v=L35f_x9968w" },
        ],
        practice: "Create 1D, 2D, and 3D tensors. Perform element-wise multiplication and dot products.",
      },
      {
        what: "The GradientTape API",
        why: "GradientTape is the heart of automatic differentiation in TF. It's how models 'learn' by calculating derivatives.",
        time: "3 Days",
        prereqs: "Basic Calculus",
        resources: [
          { name: "Introduction to Gradients", url: "https://www.tensorflow.org/guide/autodiff" },
        ],
        practice: "Manually implement a simple linear regression update using GradientTape.",
      },
      {
        what: "Keras Sequential API",
        why: "The easiest way to build models. It allows you to stack layers like LEGO bricks for standard architectures.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Keras for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=qFJeN9V1ZsI" },
        ],
        practice: "Build a simple 3-layer neural network to classify the Iris dataset.",
      },
      {
        what: "Loss Functions & Optimizers",
        why: "Loss functions define 'how wrong' the model is, and optimizers (like Adam) define 'how to fix it'.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Losses & Optimizers Guide", url: "https://www.tensorflow.org/api_docs/python/tf/keras/losses" },
        ],
        practice: "Experiment with Mean Squared Error (MSE) vs Cross-Entropy on different problem types.",
      },
      {
        what: "Loading Data with tf.data API",
        why: "Processing large datasets that don't fit in memory requires efficient pipelines. tf.data is the standard.",
        time: "1 Week",
        prereqs: "Python Basics",
        resources: [
          { name: "tf.data: Build TF input pipelines", url: "https://www.tensorflow.org/guide/data" },
        ],
        practice: "Build a pipeline that loads images from a folder, resizes them, and batches them for training.",
      },
      {
        what: "Model Evaluation & Metrics",
        why: "To know if your model is actually good. Learn beyond accuracy: Precision, Recall, and F1-score.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Evaluation Metrics Explained", url: "https://www.tensorflow.org/api_docs/python/tf/keras/metrics" },
        ],
        practice: "Apply a Confusion Matrix to your classification results to identify where the model fails.",
      },
      {
        what: "Callbacks & Early Stopping",
        why: "To prevent overfitting and save time. Stop training automatically when the model stops improving.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Keras Callbacks Guide", url: "https://www.tensorflow.org/api_docs/python/tf/keras/callbacks" },
        ],
        practice: "Set up EarlyStopping and ModelCheckpoint to save the best version of your model during training.",
      },
      {
        what: "Saving & Loading Models",
        why: "To move models from training to production. Learn the SavedModel format vs. H5.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Save and Load Models (Official)", url: "https://www.tensorflow.org/tutorials/keras/save_and_load" },
        ],
        practice: "Train a model, save it to disk, and then load it in a separate script to make a single prediction.",
      },
      {
        what: "Basic Computer Vision: MNIST",
        why: "The 'Hello World' of ML. It combines all beginner concepts into a functional image classifier.",
        time: "3 Days",
        prereqs: "All previous steps",
        resources: [
          { name: "MNIST Digit Classification", url: "https://www.tensorflow.org/tutorials/quickstart/beginner" },
        ],
        practice: "Achieve >98% accuracy on the MNIST digit dataset using a Sequential model.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Advanced Keras & Vision",
    level: "Intermediate",
    steps: [
      {
        what: "Keras Functional API",
        why: "For complex models with multiple inputs, multiple outputs, or shared layers. Essential for professional ML.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Functional API Guide", url: "https://www.tensorflow.org/guide/keras/functional" },
        ],
        practice: "Build a model that takes both an image and a text description as input to predict a price.",
      },
      {
        what: "Custom Layers & Models",
        why: "To implement new research papers or unique architectures that aren't available out of the box.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Customizing Keras (YouTube)", url: "https://www.youtube.com/watch?v=look-up-custom-layers" },
        ],
        practice: "Create a custom Dense layer that includes a unique activation function you invented.",
      },
      {
        what: "Convolutional Neural Networks (CNNs)",
        why: "The industry standard for image data. Master Conv2D, MaxPooling, and Dropout.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "CNNs for Visual Recognition (CS231n)", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" },
        ],
        practice: "Build a CNN to classify the CIFAR-10 dataset (colored images).",
      },
      {
        what: "Data Augmentation",
        why: "To artificially increase the size of your training set and improve model generalization.",
        time: "3 Days",
        prereqs: "Step 13",
        resources: [
          { name: "Image Augmentation Guide", url: "https://www.tensorflow.org/tutorials/images/data_augmentation" },
        ],
        practice: "Use the `tf.keras.layers.RandomFlip` and `RandomRotation` layers in your CNN pipeline.",
      },
      {
        what: "Transfer Learning (MobileNet/ResNet)",
        why: "Don't train from scratch. Use pre-trained models on huge datasets to get SOTA results with little data.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Transfer Learning with TF Hub", url: "https://www.tensorflow.org/tutorials/images/transfer_learning" },
        ],
        practice: "Fine-tune a pre-trained ResNet50 model to classify different types of flowers.",
      },
      {
        what: "NLP: TextVectorization & Embeddings",
        why: "To convert raw text into a format a neural network can understand.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Text Classification (Official)", url: "https://www.tensorflow.org/tutorials/keras/text_classification" },
        ],
        practice: "Build a sentiment analyzer for IMDb movie reviews using Word Embeddings.",
      },
      {
        what: "Recurrent Neural Networks (RNNs) & LSTMs",
        why: "For sequential data like text or speech where the order of information matters.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Understanding LSTMs (Blog)", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
        ],
        practice: "Implement an LSTM model to generate text in the style of Shakespeare.",
      },
      {
        what: "Time Series Forecasting",
        why: "To predict future values (like stock prices or weather) based on historical sequence data.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Time Series with TF", url: "https://www.tensorflow.org/tutorials/structured_data/time_series" },
        ],
        practice: "Predict tomorrow's temperature based on the last 7 days of weather data.",
      },
      {
        what: "Hyperparameter Tuning (Keras Tuner)",
        why: "Finding the best number of layers or learning rate manually is impossible. Automate the search.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Keras Tuner Introduction", url: "https://www.tensorflow.org/tutorials/keras/keras_tuner" },
        ],
        practice: "Use RandomSearch to find the optimal number of units in a hidden layer for your CIFAR-10 model.",
      },
      {
        what: "Visualizing with TensorBoard",
        why: "To track loss curves, visualize model graphs, and profile performance in real-time.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Get Started with TensorBoard", url: "https://www.tensorflow.org/tensorboard/get_started" },
        ],
        practice: "Log your training progress and view the histograms of weights in the TensorBoard dashboard.",
      },
    ],
  },
  {
    title: "Advanced Stage: Deployment & Production",
    level: "Advanced",
    steps: [
      {
        what: "Custom Training Loops",
        why: "To have total control over every step of the training process, needed for advanced research and GANs.",
        time: "1 Week",
        prereqs: "Step 3, Step 12",
        resources: [
          { name: "Custom Training: Walkthrough", url: "https://www.tensorflow.org/guide/keras/writing_a_training_loop_from_scratch" },
        ],
        practice: "Rewrite your MNIST classifier training using a custom loop instead of `model.fit()`.",
      },
      {
        what: "Generative Models (GANs & VAEs)",
        why: "To generate new data (images, music). This is the cutting edge of creative AI.",
        time: "2 Weeks",
        prereqs: "Step 21",
        resources: [
          { name: "Deep Convolutional GAN (Tutorial)", url: "https://www.tensorflow.org/tutorials/generative/dcgan" },
        ],
        practice: "Train a GAN to generate realistic handwritten digits that look like the MNIST dataset.",
      },
      {
        what: "TensorFlow Serving",
        why: "The standard way to serve models in high-performance production environments using REST or gRPC.",
        time: "1 Week",
        prereqs: "Docker Basics",
        resources: [
          { name: "TF Serving Guide", url: "https://www.tensorflow.org/tfx/guide/serving" },
        ],
        practice: "Use Docker to spin up a TF Serving container and send a prediction request via `curl`.",
      },
      {
        what: "TensorFlow Lite (Mobile & Edge)",
        why: "To run models on iPhones, Androids, and IoT devices with limited battery and CPU.",
        time: "1 Week",
        prereqs: "Basic Mobile Dev Knowledge",
        resources: [
          { name: "TF Lite for Beginners", url: "https://www.tensorflow.org/lite/guide" },
        ],
        practice: "Convert a Keras model to the `.tflite` format and run a benchmark on the size reduction.",
      },
      {
        what: "TensorFlow.js (Web ML)",
        why: "Run models directly in the browser. Perfect for privacy-focused and low-latency web apps.",
        time: "1 Week",
        prereqs: "JavaScript Basics",
        resources: [
          { name: "TF.js Introduction", url: "https://www.tensorflow.org/js" },
        ],
        practice: "Load a pre-trained Object Detection model in a simple HTML page and use the webcam to detect objects.",
      },
      {
        what: "Distributed Training",
        why: "When your data or model is too big for one GPU. Learn MirroredStrategy and MultiWorkerMirroredStrategy.",
        time: "1 Week",
        prereqs: "Step 21",
        resources: [
          { name: "Distributed training with TF", url: "https://www.tensorflow.org/guide/distributed_training" },
        ],
        practice: "Simulate a distributed environment and run a training job across multiple virtual devices.",
      },
      {
        what: "TensorFlow Extended (TFX) Pipelines",
        why: "To manage the entire ML lifecycle: data validation, transformation, training, and deployment at scale.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "TFX Overview", url: "https://www.tensorflow.org/tfx" },
        ],
        practice: "Build a pipeline that checks for 'data drift' before retraining a model.",
      },
      {
        what: "Object Detection API",
        why: "To detect multiple objects and their positions in an image, a core skill for robotics and security.",
        time: "2 Weeks",
        prereqs: "CNN Basics",
        resources: [
          { name: "TF Object Detection Tutorial", url: "https://tensorflow-object-detection-api-tutorial.readthedocs.io/" },
        ],
        practice: "Train an object detector to find specific custom objects (like your favorite mug) in images.",
      },
      {
        what: "TensorFlow Recommenders",
        why: "Powers the 'Discovery' engines of YouTube, Netflix, and Amazon. Learn to build two-tower models.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "TF Recommenders Guide", url: "https://www.tensorflow.org/recommenders" },
        ],
        practice: "Build a movie recommendation system using the MovieLens dataset.",
      },
      {
        what: "Production Best Practices & Security",
        why: "To prevent 'Adversarial Attacks' and ensure models are fair, explainable, and secure.",
        time: "1 Week",
        prereqs: "All Stages",
        resources: [
          { name: "Responsible AI with TF", url: "https://www.tensorflow.org/responsible_ai" },
        ],
        practice: "Use the 'What-If Tool' to analyze a model for hidden biases against specific demographic groups.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Digit Recognizer (MNIST)", teaches: "Sequential API, Dense layers, Dropout, and basic evaluation.", tech: "TensorFlow, Keras" },
  { level: "Beginner", title: "House Price Predictor", teaches: "Regression, normalization, and handling numerical data.", tech: "TensorFlow, Pandas" },
  { level: "Beginner", title: "Iris Species Classifier", teaches: "Multi-class classification and softmax activation.", tech: "TensorFlow, Scikit-Learn" },
  { level: "Intermediate", title: "Dog vs Cat Classifier (CNN)", teaches: "Convolutions, pooling, data augmentation, and binary classification.", tech: "TensorFlow, Keras, CNN" },
  { level: "Intermediate", title: "Flower Species Finder (Transfer Learning)", teaches: "Pre-trained models (MobileNet), fine-tuning, and global average pooling.", tech: "TensorFlow, TF Hub" },
  { level: "Intermediate", title: "Stock Price Predictor (LSTM)", teaches: "Time series, windowing data, and recurring layers.", tech: "TensorFlow, LSTM" },
  { level: "Intermediate", title: "Movie Sentiment Analyzer", teaches: "NLP, tokenization, embeddings, and bi-directional LSTMs.", tech: "TensorFlow, TextVectorization" },
  { level: "Advanced", title: "Image Generator (GAN)", teaches: "Adversarial training, custom training loops, and generative AI.", tech: "TensorFlow, GradientTape" },
  { level: "Advanced", title: "Mobile Object Detector (TF Lite)", teaches: "Model quantization, optimization for mobile, and Android/iOS deployment.", tech: "TF Lite, Android/iOS" },
  { level: "Advanced", title: "Recommendation Engine", teaches: "Retrieval and Ranking tasks, embeddings, and two-tower models.", tech: "TF Recommenders" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Keras Specialist",
    description: "Focus on building and evaluating standard models quickly using high-level APIs.",
    schedule: [
      "Days 1-7: Python/NumPy and TF Tensor fundamentals.",
      "Days 8-15: Master Sequential API, Losses, and Optimizers.",
      "Days 16-23: Data pipelines (tf.data) and basic CNNs.",
      "Days 24-30: Build 'Dog vs Cat' project and learn to save/load models.",
    ]
  },
  {
    title: "60-Day Standard Plan: The ML Engineer",
    description: "Balanced path for building custom architectures and production-ready NLP/Vision apps.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage + 3 projects.",
      "Days 21-45: Functional API, Custom Layers, Transfer Learning, and NLP.",
      "Days 46-60: Time series, Hyperparameter tuning, and TensorBoard debugging.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The TF Architect",
    description: "Comprehensive path including Generative AI, Mobile deployment, and TFX pipelines.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate fundamentals.",
      "Days 31-60: Advanced Concurrency, GANs, and Object Detection API.",
      "Days 61-90: TF Lite, TF Serving, TFX Pipelines, and final production project.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between a Tensor and a NumPy Array.",
  "How does GradientTape work under the hood?",
  "What is the difference between the Sequential and Functional API?",
  "Explain 'Vanishing Gradients' and how LSTMs or ReLU help fix it.",
  "What is Transfer Learning and why is it preferred for production?",
  "Describe the 'Lazy Execution' vs 'Eager Execution' modes.",
  "How do you optimize a model for mobile devices? (Quantization).",
  "Explain the role of 'Softmax' in classification.",
  "What is data augmentation and how does it prevent overfitting?",
  "How would you serve a model to handle 10,000 requests per second?",
];

const codingQuestions = [
  { question: "Write a function to normalize a tensor to have a mean of 0 and std of 1.", topic: "Math Ops" },
  { question: "Implement a 2-layer neural network using the Functional API.", topic: "Keras" },
  { question: "Implement a custom loss function that calculates Mean Absolute Error.", topic: "Custom Ops" },
  { question: "Write a tf.data pipeline that shuffles and batches a dataset of integers.", topic: "Data API" },
];

const mcqs = [
  { question: "Which optimizer is generally considered the 'gold standard' for most deep learning tasks?", options: ["SGD", "RMSProp", "Adam", "Adagrad"], answer: "Adam" },
  { question: "What is the primary purpose of a 'Dropout' layer?", options: ["Speed up training", "Prevent Overfitting", "Reduce model size", "Increase accuracy"], answer: "Prevent Overfitting" },
  { question: "Which TF component is used to convert models for browser usage?", options: ["TF Serving", "TF Lite", "TF.js", "TFX"], answer: "TF.js" },
];

const mistakes = [
  "Not normalizing input data (leads to exploding gradients).",
  "Ignoring the importance of 'Shuffle' in data pipelines (causes biased training).",
  "Using 'Accuracy' for imbalanced datasets (use AUC-ROC or F1 instead).",
  "Overfitting because the model is too complex for the small amount of data.",
  "Forgetting to set the model to 'Evaluation Mode' during testing.",
  "Manually writing loops when vectorized TF ops would be 100x faster.",
  "Not using 'EarlyStopping', wasting hours on training that isn't improving.",
  "Ignoring GPU utilization; check if your data pipeline is the bottleneck.",
  "Hardcoding paths instead of using `os.path` or `pathlib`.",
  "Not versioning your models and data (leading to reproducible disasters).",
];

export default function TensorflowRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Brain className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The TensorFlow Mastery Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive journey to mastering the world's most popular deep learning ecosystem. From building your first neuron to deploying global-scale AI models.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional TensorFlow developer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream ML role.</CardDescription>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'Keras', 'CNN', 'LSTM', 'NLP', 'Computer Vision', 'TF Lite', 'TF Serving', 'TFX', 'Distributed Training', 'TensorBoard', 'Data Augmentation', 'Transfer Learning'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Host your models on Hugging Face Spaces or GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Write clear 'Model Performance' sections in your READMEs with graphs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with production tools like TF Serving or TFX.</li>
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
            TensorFlow is more than just a library; it's a doorway to creating systems that can see, hear, and think. Stay consistent, keep building even when the gradients explode, and always stay curious. The future of AI is being built right now—go build your part of it.
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
