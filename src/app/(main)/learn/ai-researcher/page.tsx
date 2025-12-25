
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
    title: "Stage 1: Beginner - Foundational Mathematics & Theory",
    level: "Beginner",
    steps: [
      {
        what: "Advanced Linear Algebra",
        why: "AI/ML is fundamentally applied linear algebra. Understanding vectors, matrices, eigenvalues, and Singular Value Decomposition (SVD) is non-negotiable for understanding how models work.",
        time: "4-6 Weeks",
        prereqs: "Basic Linear Algebra",
        resources: [
          { name: "Essence of Linear Algebra (3Blue1Brown)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
          { name: "MIT 18.06 Linear Algebra (Gilbert Strang)", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" },
        ],
        practice: "Implement matrix multiplication, SVD, and PCA from scratch in Python with NumPy.",
      },
      {
        what: "Advanced Calculus & Optimization",
        why: "Training models involves finding the minimum of a loss function, which is an optimization problem solved using calculus (gradients, chain rule).",
        time: "4-6 Weeks",
        prereqs: "Basic Calculus",
        resources: [
          { name: "Essence of Calculus (3Blue1Brown)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t57w" },
          { name: "Convex Optimization (Boyd & Vandenberghe)", url: "https://web.stanford.edu/~boyd/cvxbook/" },
        ],
        practice: "Manually compute gradients for simple functions. Implement gradient descent from scratch for a linear regression problem.",
      },
      {
        what: "Probability & Statistics",
        why: "Machine learning is built on the language of probability. You need a deep understanding of probability distributions, Bayes' theorem, and statistical inference to understand model behavior.",
        time: "4-5 Weeks",
        prereqs: "None",
        resources: [
          { name: "StatQuest with Josh Starmer (YouTube)", url: "https://www.youtube.com/user/joshstarmer" },
          { name: "Seeing Theory (Interactive Visualizations)", url: "https://seeing-theory.brown.edu/" },
        ],
        practice: "Implement Bayes' theorem for a simple classification problem. Derive the maximum likelihood estimate for a Gaussian distribution.",
      },
      {
        what: "Information Theory",
        why: "Concepts like entropy and cross-entropy are the basis for loss functions in classification models. KL divergence is key to understanding generative models.",
        time: "2 Weeks",
        prereqs: "Probability",
        resources: [
          { name: "Visual Information Theory (Chris Olah)", url: "https://colah.github.io/posts/2015-09-Visual-Information/" },
        ],
        practice: "Calculate the cross-entropy between two simple probability distributions.",
      },
      {
        what: "Scientific Python Stack",
        why: "Proficiency in NumPy for numerical computation, Pandas for data manipulation, and Matplotlib/Seaborn for visualization is essential for any research experiment.",
        time: "2-3 Weeks",
        prereqs: "Python Basics",
        resources: [
          { name: "Python for Data Analysis (Book)", url: "https://wesmckinney.com/book/" },
        ],
        practice: "Replicate a simple data analysis and visualization from a research paper or a Kaggle kernel.",
      },
      {
        what: "Introduction to Machine Learning Theory",
        why: "Before implementing models, you must understand the theory behind them: the bias-variance tradeoff, PAC learning, and model evaluation.",
        time: "3 Weeks",
        prereqs: "All previous math",
        resources: [
          { name: "Learning from Data (Caltech Course)", url: "https://work.caltech.edu/telecourse.html" },
          { name: "CS229: Machine Learning (Andrew Ng)", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMi_E227gsAh2g3p5n2iX2v" },
        ],
        practice: "Write a short paper explaining the bias-variance tradeoff with your own diagrams.",
      },
       {
        what: "How to Read a Research Paper",
        why: "Research is a conversation. You must learn how to efficiently read, understand, and critique scientific papers in your field.",
        time: "1-2 Weeks",
        prereqs: "None",
        resources: [
            { name: "How to Read a Paper (S. Keshav)", url: "https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf" },
        ],
        practice: "Read a classic, highly-cited paper (e.g., the original AlexNet paper) and try to summarize its key contributions in your own words.",
      },
      {
        what: "Academic Writing with LaTeX",
        why: "LaTeX is the standard for writing and publishing scientific papers. Learning it is essential for communicating your research.",
        time: "1 Week",
        prereqs: "None",
        resources: [
            { name: "Learn LaTeX in 30 minutes (Overleaf)", url: "https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes" },
        ],
        practice: "Recreate a simple one-page document with a title, author, abstract, and a few equations in LaTeX.",
      },
    ],
  },
  {
    title: "Stage 2: Intermediate - Deep Learning & Specialization",
    level: "Intermediate",
    steps: [
      {
        what: "Deep Learning Fundamentals",
        why: "Understand the theory behind neural networks, including backpropagation, activation functions, and optimization algorithms (e.g., Adam).",
        time: "4 Weeks",
        prereqs: "Stage 1",
        resources: [
          { name: "Neural Networks and Deep Learning (Book)", url: "http://neuralnetworksanddeeplearning.com/" },
          { name: "CS231n: Deep Learning for Computer Vision (Stanford)", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" },
        ],
        practice: "Implement a small neural network from scratch in Python/NumPy to classify MNIST digits.",
      },
      {
        what: "Master a Deep Learning Framework (PyTorch or JAX)",
        why: "To move from theory to practice. PyTorch is the standard in academia. JAX is gaining popularity for its performance and functional approach.",
        time: "3-4 Weeks",
        prereqs: "Deep Learning Fundamentals",
        resources: [
            { name: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/" },
            { name: "JAX 101 Tutorial", url: "https://jax.readthedocs.io/en/latest/jax-101/index.html" },
        ],
        practice: "Re-implement your MNIST classifier from scratch, but this time using PyTorch or JAX.",
      },
      {
        what: "Convolutional Neural Networks (CNNs)",
        why: "The foundational architecture for most computer vision tasks.",
        time: "3 Weeks",
        prereqs: "Deep Learning Fundamentals",
        resources: [
            { name: "A Guide to Convolutional Neural Networks (CS231n)", url: "https://cs231n.github.io/convolutional-networks/" },
        ],
        practice: "Implement a classic CNN architecture like LeNet-5 or a simplified VGG on the CIFAR-10 dataset.",
      },
      {
        what: "Recurrent Neural Networks (RNNs) & LSTMs",
        why: "The foundational architecture for sequence data, such as text or time series.",
        time: "2-3 Weeks",
        prereqs: "Deep Learning Fundamentals",
        resources: [
            { name: "The Unreasonable Effectiveness of RNNs (Blog)", url: "http://karpathy.github.io/2015/05/21/rnn-effectiveness/" },
            { name: "Understanding LSTMs (Blog)", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
        ],
        practice: "Implement an RNN or LSTM to perform sentiment analysis on IMDb movie reviews.",
      },
       {
        what: "Attention & Transformers",
        why: "The Transformer architecture is the current state-of-the-art for almost all NLP tasks and is increasingly used in computer vision.",
        time: "3-4 Weeks",
        prereqs: "RNNs/LSTMs",
        resources: [
            { name: "The Illustrated Transformer (Blog)", url: "http://jalammar.github.io/illustrated-transformer/" },
            { name: "Attention Is All You Need (Paper)", url: "https://arxiv.org/abs/1706.03762" },
        ],
        practice: "Implement a simple Transformer encoder block from scratch.",
      },
       {
        what: "Experimental Design & Tracking",
        why: "Research requires rigorous experimentation. You need to know how to design experiments, track them, and analyze results.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
            { name: "Weights & Biases (Tool)", url: "https://wandb.ai/" },
        ],
        practice: "Run a simple hyperparameter sweep for one of your previous projects and track the results using Weights & Biases.",
      },
       {
        what: "Choose a Specialization Area",
        why: "AI is too broad to master everything. Choose a subfield to focus on, such as Computer Vision (CV), Natural Language Processing (NLP), Reinforcement Learning (RL), or Generative Models.",
        time: "Ongoing",
        prereqs: "All previous",
        resources: [
            { name: "CVPR, ICCV (Top CV Conferences)", url: "" },
            { name: "ACL, EMNLP, NAACL (Top NLP Conferences)", url: "" },
            { name: "NeurIPS, ICML (Top General ML Conferences)", url: "" },
        ],
        practice: "Start reading recent papers from the top conferences in your chosen specialization.",
      },
       {
        what: "Replicate a Research Paper",
        why: "This is a critical skill for a researcher. It proves you understand the paper's methods deeply and forces you to solve implementation details.",
        time: "4-8 Weeks",
        prereqs: "Deep Learning Framework",
        resources: [
             { name: "Papers with Code", url: "https://paperswithcode.com/" },
        ],
        practice: "Find a relatively simple, recent paper with available code. Try to replicate their results by re-implementing their method from scratch, using their code only as a reference.",
      },
    ],
  },
  {
    title: "Stage 3: Advanced - Contributing to Research",
    level: "Advanced",
    steps: [
      {
        what: "Generative Models (GANs, VAEs, Diffusion)",
        why: "Understand the theory and implementation of models that can generate new data, a major area of modern research.",
        time: "4-6 Weeks",
        prereqs: "Stage 2",
        resources: [
            { name: "Generative Adversarial Networks (Paper)", url: "https://arxiv.org/abs/1406.2661" },
            { name: "Tutorial on Variational Autoencoders", url: "https://arxiv.org/abs/1606.05908" },
        ],
        practice: "Implement a simple GAN or VAE to generate MNIST digits.",
      },
       {
        what: "Reinforcement Learning (RL)",
        why: "Learn the theory of training agents to act in an environment to maximize a reward signal.",
        time: "4-6 Weeks",
        prereqs: "Stage 2",
        resources: [
            { name: "David Silver's Reinforcement Learning Course", url: "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-UYHyzD7bqsAa8i5T5alt" },
        ],
        practice: "Implement a simple RL algorithm like Q-learning or Deep Q-Networks (DQN) to solve an OpenAI Gym environment like CartPole.",
      },
       {
        what: "Self-Supervised & Unsupervised Learning",
        why: "A key research area focused on learning representations from data without explicit labels.",
        time: "3-4 Weeks",
        prereqs: "Stage 2",
        resources: [
            { name: "A Survey on Self-Supervised Learning", url: "https://lilianweng.github.io/posts/2019-11-10-self-supervised/" },
        ],
        practice: "Implement a simple contrastive learning method like SimCLR on an image dataset.",
      },
       {
        what: "Bayesian Deep Learning",
        why: "To represent uncertainty in your models' predictions, which is crucial for high-stakes applications.",
        time: "3 Weeks",
        prereqs: "Probability, Deep Learning",
        resources: [
            { name: "Probabilistic Deep Learning (Book)", url: "https://probabilistic-deep-learning.github.io/" },
        ],
        practice: "Implement dropout as a Bayesian approximation for a simple neural network.",
      },
       {
        what: "Develop a Novel Idea",
        why: "The goal of research is to create new knowledge. Start brainstorming small, novel extensions or variations of existing work.",
        time: "Ongoing",
        prereqs: "Deep expertise in one area",
        resources: [],
        practice: "Take a paper you replicated and ask 'what if?'. What if the loss function was different? What if a different architecture was used? Form a hypothesis.",
      },
       {
        what: "Run and Document Experiments",
        why: "Rigorously test your hypothesis. This involves careful experimental design, ablation studies, and comparison to baselines.",
        time: "Ongoing",
        prereqs: "Experimental Design",
        resources: [],
        practice: "Design an experiment to test your novel idea. Implement it, run it, and meticulously document the results, both positive and negative.",
      },
       {
        what: "Write Your Own Research Paper",
        why: "The culmination of your research work. Communicating your idea, methods, and results clearly is as important as the idea itself.",
        time: "4-8 Weeks",
        prereqs: "LaTeX",
        resources: [
            { name: "Conference paper templates (e.g., NeurIPS)", url: "https://neurips.cc/Conferences/2023/PaperInformation/StyleFiles" },
        ],
        practice: "Write a short (4-page) paper in a conference format detailing the background, your novel idea, your experiments, and your results.",
      },
       {
        what: "Collaborate and Get Feedback",
        why: "Research is a collaborative process. Share your work with peers, mentors, or professors to get feedback and improve it.",
        time: "Ongoing",
        prereqs: "A research project",
        resources: [],
        practice: "Present your research paper to a reading group or mentor and be open to critique and suggestions.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Linear Regression from Scratch", teaches: "Optimization, Calculus, NumPy.", tech: "Python, NumPy" },
  { level: "Beginner", title: "K-Means Clustering from Scratch", teaches: "Unsupervised learning, Vector quantization, NumPy.", tech: "Python, NumPy" },
  { level: "Beginner", title: "Decision Tree Classifier from Scratch", teaches: "Recursive algorithms, Information theory (entropy/Gini).", tech: "Python, NumPy" },
  { level: "Intermediate", title: "MNIST Classifier with a Custom Neural Network", teaches: "Deep learning frameworks, Backpropagation, Model evaluation.", tech: "PyTorch/JAX" },
  { level: "Intermediate", title: "Sentiment Analysis with LSTMs", teaches: "Recurrent Neural Networks, Text preprocessing, Embedding layers.", tech: "PyTorch/JAX" },
  { level: "Intermediate", title: "Image Classifier for CIFAR-10", teaches: "Convolutional Neural Networks (CNNs), Data augmentation.", tech: "PyTorch/JAX" },
  { level: "Intermediate", title: "Replicate a Simple Research Paper", teaches: "Paper comprehension, Experimental design, Debugging complex models.", tech: "PyTorch/JAX, LaTeX" },
  { level: "Advanced", title: "Implement a Generative Adversarial Network (GAN)", teaches: "Generative models, Adversarial training, complex loss functions.", tech: "PyTorch/JAX" },
  { level: "Advanced", title: "Implement a Transformer for a Simple NLP Task", teaches: "Self-attention mechanism, Positional encodings, advanced model architecture.", tech: "PyTorch/JAX" },
  { level: "Advanced", title: "Implement a Reinforcement Learning Agent for a Game", teaches: "Q-learning or Policy Gradients, Agent-environment interaction.", tech: "PyTorch/JAX, OpenAI Gym" },
];

const plans = [
    {
        title: "30-Day Fast Track (for those with strong math background)",
        description: "An intensive plan to quickly get up to speed with the practical side of ML research.",
        schedule: [
            "Days 1-10: Scientific Python Stack & Intro to ML Theory.",
            "Days 11-20: Deep Learning Fundamentals & master a DL framework (PyTorch).",
            "Days 21-30: Learn about CNNs and complete the 'MNIST Classifier' project.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a solid foundation in both theory and practice.",
        schedule: [
            "Days 1-20: Complete the entire Beginner Stage (Math and Theory).",
            "Days 21-40: Deep Learning Fundamentals, DL framework, CNNs, and RNNs.",
            "Days 41-60: Learn about Transformers and complete an intermediate project like the 'Sentiment Analysis with LSTMs'.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for deep knowledge and readiness for a research internship or PhD application.",
        schedule: [
            "Days 1-45: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 46-60: Choose a specialization and begin reading papers in that area.",
            "Days 61-90: Replicate a research paper from your chosen specialization and start brainstorming a novel extension.",
        ]
    }
];

const interviewTopics = [
    "Explain the Bias-Variance Tradeoff from first principles.",
    "Derive the update rule for logistic regression.",
    "What is the difference between Maximum Likelihood Estimation (MLE) and Maximum a Posteriori (MAP) estimation?",
    "Explain how backpropagation works, including the chain rule.",
    "What are the pros and cons of different optimization algorithms (SGD, Adam, etc.)?",
    "Describe the architecture of a Transformer. Why is self-attention powerful?",
    "What are the differences between GANs, VAEs, and Diffusion Models?",
    "Explain Principal Component Analysis (PCA) and its relationship to SVD.",
    "Discuss a recent AI research paper that you found interesting.",
    "How would you design an experiment to test a new proposed model architecture?",
];

const mcqs = [
    { question: "Which of the following is NOT a necessary condition for A* search to be optimal?", options: ["Admissible heuristic", "Consistent heuristic", "Monotonic heuristic"], answer: "Monotonic heuristic" },
    { question: "The capacity of a model to learn complex functions is described by its:", options: ["Bias", "Variance", "VC Dimension"], answer: "VC Dimension" },
    { question: "In a Transformer, what is the purpose of positional encodings?", options: ["To reduce computational cost", "To inject information about the relative or absolute position of tokens", "To normalize the input data"], answer: "To inject information about the relative or absolute position of tokens" },
];

const mistakes = [
    "Ignoring the Math: Trying to learn ML by only using libraries without understanding the underlying linear algebra and calculus.",
    "Not Reading Papers: Relying solely on blogs and tutorials instead of going to the primary source material.",
    "Focusing on State-of-the-Art (SOTA) only: Ignoring older, foundational papers that introduce key concepts.",
    "Poor Experimental Hygiene: Not tracking experiments, using a fixed random seed, or not comparing against proper baselines.",
    "Implementing Everything from Scratch (unnecessarily): Knowing how to implement from scratch is good, but for research, you should leverage well-tested libraries to move faster.",
    "Not Understanding the 'Why': Not being able to explain why a particular method works or why a specific hyperparameter was chosen.",
    "Confusing Engineering with Research: Focusing on deployment and scaling issues instead of the novelty and evaluation of an idea.",
    "Fear of Negative Results: Believing that only positive results are valuable. Negative results are also important findings.",
    "Not Writing: Postponing the writing process until the very end. Writing and researching should happen in parallel.",
    "Working in Isolation: Not discussing ideas or getting feedback from peers and mentors.",
];

export default function AiResearcherRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The AI Researcher Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive guide to mastering the deep mathematical and theoretical foundations required to create novel AI algorithms and contribute to the field.
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
                <CardDescription>Apply your knowledge by implementing these models and concepts from scratch.</CardDescription>
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
                <CardDescription>Choose a plan that fits your schedule and research goals.</CardDescription>
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
                <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation (for Research Roles)</CardTitle>
                <CardDescription>Key topics and questions for research scientist or PhD program interviews.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Important Interview Topics</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {interviewTopics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
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
                    <h3 className="font-semibold text-lg mb-2">Resume/CV Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Machine Learning', 'Deep Learning', 'PyTorch', 'JAX', 'NumPy', 'Probability', 'Statistics', 'Linear Algebra', 'Calculus', 'Optimization', 'Publications', 'Research', 'NLP', 'Computer Vision', 'Reinforcement Learning'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects/Research on a CV</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>List any publications (even pre-prints on arXiv) in a dedicated 'Publications' section.</li>
                        <li>For each project, clearly state the research question or hypothesis.</li>
                        <li>Describe the method you implemented, highlighting any novel contributions or variations from the original work.</li>
                        <li>Present results using standard metrics and include a link to your GitHub repository.</li>
                        <li>The GitHub repo should have a detailed `README.md` explaining how to reproduce your experiments.</li>
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
                The path of an AI researcher is one of deep intellectual curiosity and persistence. This roadmap is a guide, but true progress comes from asking novel questions, challenging assumptions, and rigorously testing your ideas. Stay curious, read voraciously, and embrace the challenge of creating new knowledge. Good luck!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}

    