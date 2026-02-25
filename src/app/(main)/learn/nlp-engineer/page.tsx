
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
  Binary,
  Settings,
  HardDrive,
  Box,
  FileCode,
  ShieldAlert,
  Braces,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Text Processing & Classic NLP",
    level: "Beginner",
    steps: [
      {
        what: "Python for NLP (NLTK & Spacy)",
        why: "Python is the industry standard. NLTK and Spacy are the primary libraries for fundamental text manipulation tasks.",
        time: "1 Week",
        prereqs: "Basic Python Syntax",
        resources: [
          { name: "NLTK Documentation", url: "https://www.nltk.org/" },
          { name: "Spacy Course: 101", url: "https://course.spacy.io/en/" },
          { name: "NLP with Python (YouTube - Krish Naik)", url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVMdJ5sq9ZrM92Wpr8tfL5Bi" },
        ],
        practice: "Install NLTK and Spacy. Load a text corpus and print the most frequent words.",
      },
      {
        what: "Regular Expressions (Regex)",
        why: "To find patterns, clean noise, and extract specific information like emails or URLs from raw text.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Regex One - Interactive Learn", url: "https://regexone.com/" },
          { name: "Python 're' Module Docs", url: "https://docs.python.org/3/library/re.html" },
        ],
        practice: "Write a script to extract all hashtags from a series of tweets.",
      },
      {
        what: "Tokenization & Normalization",
        why: "To break down sentences into words (tokens) and normalize them (lowercase, punctuation removal) for processing.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Tokenization in NLP", url: "https://web.stanford.edu/~jurafsky/slp3/2.pdf" },
        ],
        practice: "Compare NLTK's word_tokenize with Spacy's tokenizer on a complex sentence.",
      },
      {
        what: "Stemming & Lemmatization",
        why: "To reduce words to their root form (e.g., 'running' -> 'run'), ensuring the model recognizes related words as one.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Lemmatization vs Stemming", url: "https://nlp.stanford.edu/IR-book/html/htmldemo/irbook/html/node43.html" },
        ],
        practice: "Apply PorterStemmer and WordNetLemmatizer to a list of verbs and compare the output accuracy.",
      },
      {
        what: "Part-of-Speech (POS) Tagging",
        why: "To identify the grammatical role of words (Nouns, Verbs), which is crucial for understanding context and meaning.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "POS Tagging with Spacy", url: "https://spacy.io/usage/linguistic-features#pos-tagging" },
        ],
        practice: "Write a script that extracts only the nouns and adjectives from a news article summary.",
      },
      {
        what: "Bag of Words (BoW) & TF-IDF",
        why: "Computers only understand numbers. These techniques convert text into mathematical vectors for analysis.",
        time: "1 Week",
        prereqs: "Basic Math",
        resources: [
          { name: "TF-IDF Explained (YouTube - StatQuest)", url: "https://www.youtube.com/watch?v=hXNbFNCgBCY" },
        ],
        practice: "Implement a simple TF-IDF vectorizer using Scikit-Learn's TfidfVectorizer on a set of text files.",
      },
      {
        what: "Classic Text Classification",
        why: "To automate tasks like spam detection or sentiment analysis using Naive Bayes or SVM algorithms.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Scikit-learn: Text Classification", url: "https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html" },
        ],
        practice: "Build a 'Spam vs Ham' email classifier using the SMS Spam Collection dataset.",
      },
      {
        what: "Word Embeddings: Word2Vec & GloVe",
        why: "Static vectors that capture semantic relationships (e.g., 'King' - 'Man' + 'Woman' ≈ 'Queen').",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Illustrated Word2Vec (Jay Alammar)", url: "https://jalammar.github.io/illustrated-word2vec/" },
        ],
        practice: "Use the 'Gensim' library to load pre-trained Word2Vec models and find similar words.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Deep Learning for NLP",
    level: "Intermediate",
    steps: [
      {
        what: "RNNs & LSTMs for Text",
        why: "Standard neural networks ignore word order. Recurrent Neural Networks (RNNs) and LSTMs process sequences of words.",
        time: "2 Weeks",
        prereqs: "Deep Learning Basics",
        resources: [
          { name: "Understanding LSTMs (Colah's Blog)", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
          { name: "PyTorch NLP Tutorial", url: "https://pytorch.org/tutorials/beginner/deep_learning_nlp_tutorial.html" },
        ],
        practice: "Build a character-level name generator using an LSTM in PyTorch or TensorFlow.",
      },
      {
        what: "Sequence-to-Sequence (Seq2Seq) Models",
        why: "The foundation of machine translation and summarization. One network reads, another writes.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Illustrated Seq2Seq with Attention", url: "https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/" },
        ],
        practice: "Implement a simple English-to-French translator on a tiny dataset.",
      },
      {
        what: "The Attention Mechanism",
        why: "Instead of looking at the whole sentence at once, attention allows the model to 'focus' on specific relevant words.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Attention Mechanism (YouTube - Lilian Weng)", url: "https://www.youtube.com/watch?v=look-up-attention" },
        ],
        practice: "Calculate attention scores manually for a 3-word sentence to understand the math.",
      },
      {
        what: "The Transformer Architecture",
        why: "The 'big bang' of modern NLP. Transformers removed the need for recurrence, allowing for massive parallelization.",
        time: "2 Weeks",
        prereqs: "Step 11",
        resources: [
          { name: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
          { name: "Attention is All You Need (Paper)", url: "https://arxiv.org/abs/1706.03762" },
        ],
        practice: "Walk through the code of a minimal Transformer implementation in PyTorch.",
      },
      {
        what: "Hugging Face Ecosystem",
        why: "The 'GitHub of AI'. Most professional NLP projects use Hugging Face for pre-trained models and datasets.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Hugging Face Course", url: "https://huggingface.co/learn/nlp-course" },
        ],
        practice: "Use the 'Pipeline' API to perform sentiment analysis and summarization in 3 lines of code.",
      },
      {
        what: "BERT & Transfer Learning",
        why: "To leverage bidirectional context. Fine-tuning BERT is the standard starting point for most text-based tasks today.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Illustrated BERT", url: "https://jalammar.github.io/illustrated-bert/" },
        ],
        practice: "Fine-tune a DistilBERT model for multi-class intent classification.",
      },
      {
        what: "Named Entity Recognition (NER)",
        why: "To extract names, locations, and dates automatically. Essential for data enrichment and search engines.",
        time: "5 Days",
        prereqs: "Step 5, Step 14",
        resources: [
          { name: "NER with Transformers", url: "https://huggingface.co/docs/transformers/tasks/token_classification" },
        ],
        practice: "Build a tool that identifies all legal entities and dates in a set of contract documents.",
      },
      {
        what: "Tokenization Strategies (BPE, WordPiece)",
        why: "Modern models don't split by spaces. Understanding subword tokenization prevents the 'out-of-vocabulary' problem.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Summary of Tokenizers", url: "https://huggingface.co/docs/transformers/tokenizer_summary" },
        ],
        practice: "Use the Tokenizers library to train a custom BPE tokenizer on a non-English dataset.",
      },
    ],
  },
  {
    title: "Advanced Stage: LLMs, RAG & Production",
    level: "Advanced",
    steps: [
      {
        what: "Large Language Models (GPT, Llama)",
        why: "Master the architectures that power ChatGPT. Learn about Causal vs. Masked language modeling.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "State of GPT (Andrej Karpathy)", url: "https://www.youtube.com/watch?v=bZQun8Y4L2A" },
        ],
        practice: "Set up and run a local Llama-3 model using the 'llama.cpp' or 'Ollama' tools.",
      },
      {
        what: "Fine-Tuning LLMs (PEFT, LoRA)",
        why: "Training full LLMs is impossible for most. LoRA allows you to fine-tune massive models on a single consumer GPU.",
        time: "2 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "Parameter-Efficient Fine-Tuning (PEFT)", url: "https://huggingface.co/blog/peft" },
        ],
        practice: "Fine-tune a 7B parameter model using LoRA to speak in a specific persona.",
      },
      {
        what: "Retrieval-Augmented Generation (RAG)",
        why: "LLMs hallucinate. RAG connects LLMs to your private data (PDFs, DBs) to provide accurate, grounded answers.",
        time: "2 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "What is RAG? (Amazon)", url: "https://aws.amazon.com/what-is/retrieval-augmented-generation/" },
          { name: "RAG Guide (Pinecone)", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" },
        ],
        practice: "Build a pipeline that reads a folder of PDFs and answers questions about them using a vector database.",
      },
      {
        what: "Vector Databases (Pinecone, Chroma)",
        why: "To store and search millions of high-dimensional embeddings instantly.",
        time: "1 Week",
        prereqs: "Step 8, Step 19",
        resources: [
          { name: "ChromaDB Documentation", url: "https://docs.trychroma.com/" },
        ],
        practice: "Index 10,000 Wikipedia snippets in Chroma and perform a semantic search query.",
      },
      {
        what: "LangChain & LlamaIndex",
        why: "Frameworks that orchestrate complex AI workflows, connecting LLMs to tools, memory, and data sources.",
        time: "2 Weeks",
        prereqs: "Step 19",
        resources: [
          { name: "LangChain for Beginners", url: "https://python.langchain.com/docs/get_started/introduction" },
          { name: "LlamaIndex Introduction", url: "https://docs.llamaindex.ai/en/stable/" },
        ],
        practice: "Build a chat-with-your-database agent using LangChain and a SQL database.",
      },
      {
        what: "Evaluation of LLMs (RAGAS, G-Eval)",
        why: "Standard metrics like accuracy don't work for chat. You must learn to evaluate hallucination and faithfulness.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "RAGAS Documentation", url: "https://docs.ragas.io/en/stable/" },
        ],
        practice: "Run a RAGAS evaluation on your RAG pipeline and identify where it's failing.",
      },
      {
        what: "Prompt Engineering & Prompt Tuning",
        why: "To get the best performance out of models without retraining them. Learn Chain-of-Thought and Few-Shot prompting.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
        ],
        practice: "Compare Zero-Shot vs. Few-Shot prompting on a difficult extraction task.",
      },
      {
        what: "Deploying NLP Models (FastAPI & Docker)",
        why: "To turn your models into scalable services. Every professional NLP engineer must understand deployment.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Deploying Transformers with FastAPI", url: "https://huggingface.co/blog/fastapi-deployment" },
        ],
        practice: "Containerize your sentiment analyzer and deploy it as a local REST API.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Spam Email Detector", teaches: "TF-IDF, Naive Bayes, and basic classification.", tech: "Python, Scikit-learn" },
  { level: "Beginner", title: "Auto-Summarizer", teaches: "Frequency-based extraction and sentence tokenization.", tech: "Python, NLTK" },
  { level: "Beginner", title: "Pattern-based Chatbot", teaches: "Regex and string pattern matching logic.", tech: "Python, Re" },
  { level: "Intermediate", title: "Sentiment Analyzer App", teaches: "LSTMs and sequence processing.", tech: "PyTorch, Flask" },
  { level: "Intermediate", title: "Fake News Detector", teaches: "BERT fine-tuning and transfer learning.", tech: "Hugging Face, Transformers" },
  { level: "Intermediate", title: "Language Translator", teaches: "Seq2Seq models and Attention mechanisms.", tech: "PyTorch, OpenNMT" },
  { level: "Intermediate", title: "Resume Parser", teaches: "NER and specialized entity extraction.", tech: "Spacy, Transformers" },
  { level: "Advanced", title: "Personal Knowledge Assistant (RAG)", teaches: "Vector DBs, RAG, and LLM orchestration.", tech: "LangChain, Chroma, OpenAI/Llama" },
  { level: "Advanced", title: "Legal Document Auditor", teaches: "Complex multi-step reasoning and summarization.", tech: "LlamaIndex, LoRA" },
  { level: "Advanced", title: "Real-time Toxicity Guard", teaches: "High-throughput inference and production MLOps.", tech: "FastAPI, Docker, BERT" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Data Scripter",
    description: "Focus on syntax, classic NLP, and basic classification to clear data entry or analyst technical rounds.",
    schedule: [
      "Days 1-7: Python, Regex, and NLTK/Spacy foundations.",
      "Days 8-15: Tokenization, Stemming, and TF-IDF.",
      "Days 16-23: Scikit-learn classification and 2 beginner projects.",
      "Days 24-30: Evaluation metrics and basic GitHub portfolio.",
    ]
  },
  {
    title: "60-Day Standard Plan: The ML Engineer",
    description: "Balanced path covering sequence models, attention, and the Hugging Face ecosystem.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: RNNs, LSTMs, and the Attention mechanism.",
      "Days 41-60: Transformers, BERT, and building 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The LLM Architect",
    description: "Comprehensive path including LLMs, RAG, and production-level deployment.",
    schedule: [
      "Days 1-30: Core NLP & Deep Learning foundations.",
      "Days 31-60: Professional Systems (Transformers, NER, Testing).",
      "Days 61-90: LLMs, RAG, Vector DBs, and final capstone project.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between Stemming and Lemmatization.",
  "What is the 'Vanishing Gradient' problem in RNNs?",
  "How does Self-Attention differ from standard Attention?",
  "Describe the architecture of a Transformer (Encoder vs Decoder).",
  "What is the 'Norway Problem' in tokenization? (Wait, that's YAML! Describe the 'Out-of-vocabulary' problem).",
  "Explain TF-IDF and why it's better than simple Bag of Words.",
  "What is the difference between Word2Vec and BERT embeddings?",
  "How does RAG help reduce LLM hallucinations?",
  "Explain the LoRA fine-tuning method.",
  "Describe how you would evaluate a RAG pipeline.",
];

const codingQuestions = [
  { question: "Write a function to perform basic tokenization without using any library.", topic: "Logic" },
  { question: "Implement a simple TF-IDF calculation for a set of three documents.", topic: "Math" },
  { question: "Write a PyTorch loop for training a simple character-level RNN.", topic: "Deep Learning" },
  { question: "Implement a sliding window function for chunking long PDFs for RAG.", topic: "Data Processing" },
];

const mcqs = [
  { question: "Which algorithm is best suited for sequence-to-sequence tasks like translation?", options: ["Naive Bayes", "CNN", "Transformer", "Linear Regression"], answer: "Transformer" },
  { question: "What does the 'B' in BERT stand for?", options: ["Basic", "Bidirectional", "Binary", "Block"], answer: "Bidirectional" },
  { question: "Which metric is most important for an imbalanced classification task?", options: ["Accuracy", "F1-Score", "L1 Loss", "Mean Squared Error"], answer: "F1-Score" },
];

const mistakes = [
  "Ignoring data cleaning: Garbage In, Garbage Out—clean your text first.",
  "Jumping to LLMs immediately: You must understand classic NLP to debug LLM failures.",
  "Using Accuracy for imbalanced data: Always check Precision/Recall/F1.",
  "Ignoring context: Static embeddings like Word2Vec can't handle homonyms (e.g., 'bank').",
  "Over-chunking data for RAG: Losing context between chunks ruins the answer.",
  "Tutorial Hell: Copy-pasting Hugging Face scripts without writing logic yourself.",
  "Hardcoding API keys: Use environment variables from Day 1.",
  "Neglecting Evaluation: A model that 'feels' good is not a scientific model.",
  "Ignoring Bias: NLP models reflect the bias of their training data—audit them.",
  "Not using a GPU: Training Transformers on CPU is a waste of time—use Google Colab.",
];

export default function NlpEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The NLP Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of teaching machines to understand, interpret, and generate human language. From classic linguistics to the cutting-edge world of LLMs and RAG.
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
            <CardDescription>Apply your knowledge with these hands-on NLP projects.</CardDescription>
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
            <CardDescription>Pick a timeline that matches your goals.</CardDescription>
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
            <CardDescription>Master the topics required to land a role as an NLP Engineer.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> NLP Logic Challenges</h3>
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
                    {['NLP', 'Transformers', 'BERT', 'GPT', 'Hugging Face', 'LLM', 'RAG', 'Vector DB', 'Spacy', 'Tokenization', 'Fine-tuning', 'PyTorch', 'TensorFlow', 'FastAPI'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include links to live Hugging Face Space demos.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your data augmentation and cleaning strategy in READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase experience with RAG and LLM orchestration tools.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Teach the Machine to Talk</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Natural Language Processing is the interface between human thought and digital action. It rewards the curious, the linguistic, and the mathematical. Stay consistent, read the papers, and build daily. The future of AI is conversational—go build your part of it!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building NLP
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
