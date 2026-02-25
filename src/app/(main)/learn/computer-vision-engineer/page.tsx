
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
  Camera,
  Eye,
  Box,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Image Processing & Math Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Python for CV (NumPy & OpenCV)",
        why: "Python is the primary language for CV. NumPy handles the heavy matrix math, and OpenCV is the most used library for real-time computer vision.",
        time: "1 Week",
        prereqs: "Basic Python Syntax",
        resources: [
          { name: "OpenCV Course (YouTube - freeCodeCamp)", url: "https://www.youtube.com/watch?v=oXlwWbaUp8o" },
          { name: "Official OpenCV Tutorials", url: "https://docs.opencv.org/master/d9/df8/tutorial_root.html" },
        ],
        practice: "Install OpenCV. Load an image, convert it to grayscale, and resize it without losing aspect ratio.",
      },
      {
        what: "Image Processing Fundamentals",
        why: "To understand how computers 'see' images as arrays of pixels. Learn about color spaces (RGB, HSV), histograms, and thresholds.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Image Processing 101", url: "https://www.cs.cornell.edu/courses/cs1114/2010sp/lectures/02_histograms.pdf" },
        ],
        practice: "Implement a basic background subtraction logic using color thresholds.",
      },
      {
        what: "Linear Algebra & Calculus for CV",
        why: "Image transformations (rotation, scaling) and deep learning training are entirely based on matrices and derivatives.",
        time: "1 Week",
        prereqs: "High School Math",
        resources: [
          { name: "Essence of Linear Algebra (3Blue1Brown)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
        ],
        practice: "Calculate a 2D rotation matrix manually and apply it to a small set of points.",
      },
      {
        what: "Filtering & Kernels (Blur, Sharpen)",
        why: "To clean data. Understanding how a moving window (Kernel) changes pixels is the precursor to Convolutional Neural Networks.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Image Kernels Explained Visual", url: "https://setosa.io/ev/image-kernels/" },
        ],
        practice: "Implement a Gaussian Blur and a Sharpening filter using OpenCV's 'filter2D' function.",
      },
      {
        what: "Edge & Feature Detection (Canny, Sobel)",
        why: "To identify shapes and boundaries in an image. Features are the 'DNA' of an image.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Canny Edge Detection Tutorial", url: "https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html" },
        ],
        practice: "Build a document scanner logic that finds the edges of a sheet of paper in a photo.",
      },
      {
        what: "Traditional Feature Extraction (SIFT, ORB)",
        why: "To match objects across different images even if they are rotated or scaled. Vital for panoramic stitching.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Introduction to SIFT", url: "https://docs.opencv.org/4.x/da/df5/tutorial_py_sift_intro.html" },
        ],
        practice: "Use ORB to find matching points between two different photos of the same building.",
      },
      {
        what: "Object Detection with Haar Cascades",
        why: "The classic way to detect faces and simple objects. Fast enough to run on low-end hardware.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Face Detection with OpenCV", url: "https://realpython.com/face-recognition-with-python/" },
        ],
        practice: "Build a real-time face detector that draws a box around faces in your webcam feed.",
      },
      {
        what: "Data Augmentation Basics",
        why: "To prevent models from 'memorizing' data. Learn to flip, rotate, and crop images to create more training data.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Albumentations Documentation", url: "https://albumentations.ai/docs/" },
        ],
        practice: "Take 1 image and generate 10 unique variants using the Albumentations library.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Deep Learning for Vision",
    level: "Intermediate",
    steps: [
      {
        what: "Convolutional Neural Networks (CNNs)",
        why: "The 'Engine' of modern CV. You must understand layers, stride, padding, and max-pooling.",
        time: "2 Weeks",
        prereqs: "Beginner Stage, Deep Learning Basics",
        resources: [
          { name: "CNNs for Visual Recognition (CS231n)", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" },
        ],
        practice: "Build a custom CNN from scratch in PyTorch or TensorFlow to classify CIFAR-10 images.",
      },
      {
        what: "Image Classification Architectures (ResNet, VGG)",
        why: "Don't reinvent the wheel. Professional engineers use established architectures that have won global competitions.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Deep Learning for Vision (Papers with Code)", url: "https://paperswithcode.com/task/image-classification" },
        ],
        practice: "Train a ResNet-50 model on a custom dataset of 5 different fruit types.",
      },
      {
        what: "Transfer Learning & Fine-tuning",
        why: "Leverage weights from models trained on millions of images (ImageNet). This is how you get great results with small data.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Transfer Learning Tutorial (PyTorch)", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
        ],
        practice: "Fine-tune a pre-trained model to recognize specific car brands.",
      },
      {
        what: "Object Detection (YOLO, Faster R-CNN)",
        why: "Go beyond 'what is in this image' to 'WHERE is it'. This is the most common job requirement for CV engineers.",
        time: "2 Weeks",
        prereqs: "Step 10",
        resources: [
          { name: "YOLOv8 Documentation", url: "https://docs.ultralytics.com/" },
          { name: "Object Detection Course", url: "https://www.youtube.com/watch?v=WmsDetafLOk" },
        ],
        practice: "Train a YOLOv8 model to detect potholes or specific traffic signs in images.",
      },
      {
        what: "Semantic & Instance Segmentation (U-Net)",
        why: "To identify the exact pixels belonging to an object. Essential for medical imaging and self-driving cars.",
        time: "2 Weeks",
        prereqs: "Step 10",
        resources: [
          { name: "Image Segmentation (Hugging Face)", url: "https://huggingface.co/tasks/image-segmentation" },
        ],
        practice: "Implement a U-Net model to segment clouds or buildings from satellite imagery.",
      },
      {
        what: "Evaluation Metrics: mAP, IoU, F1",
        why: "Standard accuracy doesn't work for CV. You must understand 'Intersection over Union' and 'Mean Average Precision'.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Mean Average Precision Explained", url: "https://www.youtube.com/watch?v=P_W6OSsLYIc" },
        ],
        practice: "Calculate the IoU between two predicted bounding boxes manually.",
      },
      {
        what: "Experiment Tracking (Weights & Biases)",
        why: "Professional CV engineers run hundreds of experiments. You need to log metrics, images, and model versions.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "WandB Quickstart", url: "https://docs.wandb.ai/quickstart" },
        ],
        practice: "Log your first training run to WandB and visualize the 'Precision-Recall' curve.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery & High Performance",
    level: "Advanced",
    steps: [
      {
        what: "Vision Transformers (ViT)",
        why: "The new state-of-the-art. ViTs often outperform CNNs on very large datasets using the attention mechanism.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage, Attention Mechanism",
        resources: [
          { name: "Vision Transformers Illustrated", url: "https://jalammar.github.io/illustrated-transformer/" },
          { name: "ViT Paper Walkthrough", url: "https://www.youtube.com/watch?v=TrdevFK_am4" },
        ],
        practice: "Implement a simple ViT model or use a pre-trained one from Hugging Face.",
      },
      {
        what: "Generative Vision: GANs & Stable Diffusion",
        why: "To create new images or perform image-to-image translation (e.g., day to night).",
        time: "2 Weeks",
        prereqs: "CNN Basics",
        resources: [
          { name: "GANs Specialization (Coursera)", url: "https://www.coursera.org/specializations/generative-adversarial-networks-gans" },
        ],
        practice: "Train a DCGAN to generate realistic handwritten digits.",
      },
      {
        what: "3D Computer Vision & Point Clouds",
        why: "To understand depth. Essential for AR/VR and robotics. Learn about Stereo matching and LIDAR processing.",
        time: "2 Weeks",
        prereqs: "Linear Algebra",
        resources: [
          { name: "3D Vision Course (Stanford)", url: "https://web.stanford.edu/class/cs231a/" },
        ],
        practice: "Use Open3D to visualize and process a 3D point cloud file.",
      },
      {
        what: "Deployment: FastAPI & Docker",
        why: "A model is useless if it's not an API. Learn to serve your models at high throughput.",
        time: "1 Week",
        prereqs: "Python Basics",
        resources: [
          { name: "Deploying PyTorch with FastAPI", url: "https://testdriven.io/blog/fastapi-pytorch-docker/" },
        ],
        practice: "Containerize your fruit classifier and deploy it as a local REST API.",
      },
      {
        what: "Model Optimization (TensorRT / ONNX)",
        why: "To make models run 10x faster on specific hardware. Every production system uses this.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "ONNX Runtime Guide", url: "https://onnxruntime.ai/docs/" },
        ],
        practice: "Convert a PyTorch model to ONNX format and run a performance benchmark.",
      },
      {
        what: "Edge Deployment (TF Lite / OpenVINO)",
        why: "To run AI on mobile phones or low-power security cameras where cloud lag is unacceptable.",
        time: "1 Week",
        prereqs: "Step 20",
        resources: [
          { name: "TensorFlow Lite Guide", url: "https://www.tensorflow.org/lite/guide" },
        ],
        practice: "Deploy a small object detector to a mobile device emulator.",
      },
      {
        what: "Video Processing & Object Tracking",
        why: "To track multiple objects across frames (e.g., counting cars in traffic). Learn DeepSORT and ByteTrack.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Object Tracking Guide", url: "https://learnopencv.com/object-tracking-using-opencv-cpp-python/" },
        ],
        practice: "Implement a tracking script that counts unique items entering a specific area of a video.",
      },
      {
        what: "Ethics & Bias in Computer Vision",
        why: "To ensure your models don't discriminate based on race or gender. Essential for responsible AI.",
        time: "Ongoing",
        prereqs: "None",
        resources: [
          { name: "Algorithmic Bias in CV", url: "https://www.youtube.com/watch?v=look-up-ai-bias" },
        ],
        practice: "Audit your face detector for accuracy across different lighting conditions and demographics.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Document Scanner", teaches: "Edges, Contours, and Perspective Transforms.", tech: "Python, OpenCV" },
  { level: "Beginner", title: "Color-based Object Tracker", teaches: "HSV Color spaces and Masking.", tech: "Python, OpenCV" },
  { level: "Beginner", title: "Face Mask Detector (Haar)", teaches: "Cascade classifiers and real-time processing.", tech: "OpenCV" },
  { level: "Intermediate", title: "Pothole Detector (YOLO)", teaches: "Custom object detection and labeling.", tech: "PyTorch, YOLOv8" },
  { level: "Intermediate", title: "Plant Disease Classifier", teaches: "Transfer Learning and Image Classification.", tech: "TensorFlow, Keras" },
  { level: "Intermediate", title: "Background Remover", teaches: "Semantic Segmentation and Alpha Matting.", tech: "PyTorch, U-Net" },
  { level: "Intermediate", title: "Hand Gesture Controller", teaches: "Landmark detection and event triggering.", tech: "Mediapipe, Python" },
  { level: "Advanced", title: "Real-time Traffic Monitoring", teaches: "Video processing, Multiple Object Tracking (MOT).", tech: "YOLO, DeepSORT" },
  { level: "Advanced", title: "Self-Driving Lane Assistant", teaches: "Lane detection, steering angles, and hough transforms.", tech: "Python, OpenCV, PyTorch" },
  { level: "Advanced", title: "Face Verification System", teaches: "Face embeddings, Triplet loss, and Database search.", tech: "FaceNet, Pinecone" },
];

const plans = [
  {
    title: "30-Day Fast Track: The CV Explorer",
    description: "Focus on OpenCV and core image processing to get productive with real-time video.",
    schedule: [
      "Days 1-7: Python, NumPy, and basic OpenCV (Loading, Resizing).",
      "Days 8-15: Color spaces, Filtering, and Edges.",
      "Days 16-23: Haar Cascades and Face detection.",
      "Days 24-30: Build the 'Document Scanner' project.",
    ]
  },
  {
    title: "60-Day Standard Plan: The ML Specialist",
    description: "Balanced path covering CNNs, transfer learning, and object detection.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Deep Learning Foundations & CNNs.",
      "Days 41-60: Transfer Learning, YOLO, and 2 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Vision Architect",
    description: "Comprehensive path for professional readiness, including deployment and Transformers.",
    schedule: [
      "Days 1-30: Core Image Processing & Vision Math.",
      "Days 31-60: Deep Learning & Architectural optimization.",
      "Days 61-90: ViTs, Video Tracking, Deployment (FastAPI), and Portfolio.",
    ]
  }
];

const interviewTopics = [
  "How does 1x1 convolution work? Why is it useful?",
  "Difference between Image Classification, Object Detection, and Segmentation.",
  "Explain the Bias-Variance tradeoff in CNNs.",
  "How do you handle class imbalance in a classification dataset?",
  "Explain the Mean Average Precision (mAP) metric.",
  "What is data augmentation and name 5 common techniques.",
  "How does the attention mechanism in ViTs differ from CNNs?",
  "What is 'Global Average Pooling'?",
  "How do you deploy a model to run on an edge device with limited RAM?",
  "Describe the 'Vanishing Gradient' problem.",
];

const codingQuestions = [
  { question: "Implement a 3x3 convolution operation from scratch using NumPy.", topic: "Math" },
  { question: "Write a function to calculate the Intersection over Union (IoU) of two boxes.", topic: "Geometry" },
  { question: "Implement a sliding window logic for image scanning.", topic: "Algorithms" },
  { question: "Write a PyTorch custom dataset class for a folder of images.", topic: "Frameworks" },
];

const mistakes = [
  "Ignoring the importance of data cleaning and normalization.",
  "Using 'Accuracy' for imbalanced data instead of F1-Score or mAP.",
  "Forgetting to call `model.eval()` or using `torch.no_grad()` during testing.",
  "Ignoring the frame rate (FPS) during real-time video processing.",
  "Training on data that doesn't represent real-world camera angles.",
  "Hardcoding paths instead of using `os.path` or `pathlib`.",
  "Neglecting the log: Gradients exploding or vanishing without monitoring.",
  "Assuming bigger models are always better; often, smaller models are faster and more robust.",
  "Tutorial Hell: Copy-pasting code without writing original logic.",
  "Ignoring Ethics: Building surveillance tools without considering privacy.",
];

export default function ComputerVisionEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Camera className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Computer Vision Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the science of teaching machines to see. From basic pixel manipulation to advanced Transformers, Generative AI, and high-performance edge deployment.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/roles?section=item-Artificial Intelligence & Machine Learning">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Job Roles
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
            <CardDescription>Apply your knowledge with these hands-on vision projects.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream CV or AI role.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['OpenCV', 'PyTorch', 'CNN', 'YOLO', 'Object Detection', 'Segmentation', 'Transfer Learning', 'ViT', 'mAP', 'ONNX', 'TensorRT', 'FastAPI', 'CUDA'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Real-time Constraints'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality video demos of your models in your GitHub READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with specialized datasets (Medical, Satellite, etc).</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Teach the Machine to See</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Computer Vision is one of the most exciting fields in AI today. From medical breakthroughs to autonomous vehicles, your work will directly impact the physical world. Stay consistent, keep building, and remember: The most advanced vision systems in the world were built on the foundations you're learning today. Your journey to the future of AI starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Vision
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
