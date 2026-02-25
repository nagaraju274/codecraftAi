
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
  Coins,
  ShieldAlert,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Web3 & Smart Contract Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Blockchain & Ethereum",
        why: "To understand the decentralized nature of the platform. You need to know about Blocks, Nodes, Gas, and the Ethereum Virtual Machine (EVM).",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Ethereum.org - Welcome to Ethereum", url: "https://ethereum.org/en/what-is-ethereum/" },
          { name: "Blockchain 101 (YouTube)", url: "https://www.youtube.com/watch?v=_160oMzblY8" },
        ],
        practice: "Research the difference between Proof of Work and Proof of Stake. Explain 'Gas' to a friend.",
      },
      {
        what: "Solidity Syntax & Variables",
        why: "Solidity is the primary language for Ethereum. You must master state variables, local variables, and global variables like 'msg.sender'.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Solidity by Example: Hello World", url: "https://solidity-by-example.org/hello-world/" },
          { name: "CryptoZombies - Path to Mastery", url: "https://cryptozombies.io/" },
        ],
        practice: "Open Remix IDE. Write a 'SimpleStorage' contract that saves a number and returns it.",
      },
      {
        what: "Functions & Visibility (Public, Private, External, Internal)",
        why: "Functions define how users interact with your contract. Visibility modifiers are the first line of security.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Solidity Functions Guide", url: "https://docs.soliditylang.org/en/v0.8.24/contracts.html#functions" },
        ],
        practice: "Create a contract with 4 functions, each with a different visibility modifier, and try calling them from another contract.",
      },
      {
        what: "Data Types: Address, Mapping & Structs",
        why: "Addresses are the IDs of the web3 world. Mappings are high-speed lookups (like HashMaps) used for balances.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Solidity by Example: Mapping", url: "https://solidity-by-example.org/mapping/" },
        ],
        practice: "Model a 'Bank' where you map an address to a balance. Use a Struct to store user profile data (name, joinDate).",
      },
      {
        what: "Control Flow (If, For, While)",
        why: "Logic branching in Solidity is similar to C++/JS, but you must be careful with loops due to Gas limits.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Solidity Control Structures", url: "https://www.geeksforgeeks.org/solidity-decision-making/" },
        ],
        practice: "Write a loop that calculates the sum of all balances in a specific list (though avoid this in production!).",
      },
      {
        what: "Constructors & State Modifiers (Pure, View)",
        why: "Constructors run once at deployment. 'view' and 'pure' functions don't cost gas when called externally.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "View and Pure Functions", url: "https://solidity-by-example.org/view-and-pure-functions/" },
        ],
        practice: "Add a constructor to your 'Bank' that sets the contract owner. Mark getter functions as 'view'.",
      },
      {
        what: "Remix IDE & Debugging",
        why: "Remix is the fastest way to test code. Learning to use the debugger and the 'Deploy & Run' panel is vital.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Remix IDE Docs", url: "https://remix-ide.readthedocs.io/en/latest/" },
        ],
        practice: "Deploy a contract to the 'Remix VM' and use the debugger to step through a function call.",
      },
      {
        what: "Wallets & Testnets (Metamask)",
        why: "To interact with the 'Real' web3. You need to know how to fund a wallet with test ETH and sign transactions.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Metamask Setup Guide", url: "https://support.metamask.io/hc/en-us/articles/360015489031-How-to-use-MetaMask" },
          { name: "Alchemy: What is a Testnet?", url: "https://www.alchemy.com/overviews/what-is-a-testnet" },
        ],
        practice: "Install Metamask. Get test ETH from a Sepolia faucet. Send a transaction to another account.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Standards & Frameworks",
    level: "Intermediate",
    steps: [
      {
        what: "Inheritance & Interfaces",
        why: "To reuse code and interact with other contracts (like Uniswap or Chainlink).",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Solidity by Example: Inheritance", url: "https://solidity-by-example.org/inheritance/" },
        ],
        practice: "Create an 'Ownable' base contract and inherit it into a 'SecretStorage' contract.",
      },
      {
        what: "Events & Logging",
        why: "Blockchain data is hard to query. Events are the only way for your frontend to efficiently listen for contract changes.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Solidity Events Explained", url: "https://solidity-by-example.org/events/" },
        ],
        practice: "Add an 'AuditLog' event to your Bank contract that triggers whenever someone withdraws funds.",
      },
      {
        what: "Error Handling (Require, Revert, Assert)",
        why: "To revert transactions if conditions aren't met (e.g., insufficient balance). Proper error messages save gas.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Solidity by Example: Error", url: "https://solidity-by-example.org/error/" },
        ],
        practice: "Use 'require' to ensure only the owner can withdraw from the contract. Use custom errors for gas savings.",
      },
      {
        what: "The ERC-20 Token Standard",
        why: "The foundation of DeFi. Most cryptocurrencies on Ethereum follow this standard.",
        time: "1 Week",
        prereqs: "Step 9, Step 10",
        resources: [
          { name: "OpenZeppelin: ERC-20", url: "https://docs.openzeppelin.com/contracts/4.x/erc20" },
        ],
        practice: "Use OpenZeppelin libraries to create your own 'GoldCoin' token in 5 lines of code.",
      },
      {
        what: "The ERC-721 NFT Standard",
        why: "To build digital collectibles and proof of ownership systems.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "OpenZeppelin: ERC-721", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
        ],
        practice: "Create an NFT collection where each token has a unique ID and a metadata URI.",
      },
      {
        what: "Modern Tooling: Hardhat & Foundry",
        why: "Remix is for snippets; Hardhat/Foundry are for professional projects. Mastering local environments is non-negotiable.",
        time: "2 Weeks",
        prereqs: "Step 1",
        resources: [
          { name: "Hardhat Tutorial", url: "https://hardhat.org/tutorial" },
          { name: "Foundry Book", url: "https://book.getfoundry.sh/" },
        ],
        practice: "Initialize a project with Foundry. Write a script to deploy your ERC-20 token to a local node.",
      },
      {
        what: "Testing with Forge or Waffle",
        why: "Smart contracts are permanent. Testing is the most important part of the dev cycle to prevent hacks.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Testing in Foundry", url: "https://book.getfoundry.sh/forge/tests" },
        ],
        practice: "Write a test case that ensures a non-owner CANNOT withdraw funds from your contract.",
      },
      {
        what: "Ethers.js / Viem & Web3.js",
        why: "To build frontends (React/Next.js) that talk to your smart contracts.",
        time: "1 Week",
        prereqs: "JS Basics",
        resources: [
          { name: "Ethers.js Documentation", url: "https://docs.ethers.org/v6/" },
          { name: "Viem - Getting Started", url: "https://viem.sh/" },
        ],
        practice: "Build a simple React button that shows the user's current ETH balance using Ethers.js.",
      },
    ],
  },
  {
    title: "Advanced Stage: Security & Architecture",
    level: "Advanced",
    steps: [
      {
        what: "Gas Optimization Techniques",
        why: "Users hate high fees. Learn about storage packing, using calldata, and avoiding loops.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Gas Optimization Tips", url: "https://rareskills.io/post/gas-optimization" },
        ],
        practice: "Refactor a contract to reduce the gas cost of a function by 20%.",
      },
      {
        what: "Reentrancy & Security Auditing",
        why: "The #1 cause of major DeFi hacks. Learn to identify and prevent malicious contract calls.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Solidity Security Patterns", url: "https://github.com/sigp/solidity-security-blog" },
          { name: "Secureum - Bootcamp", url: "https://secureum.substack.com/" },
        ],
        practice: "Write a vulnerable contract and an 'attacker' contract that drains its funds. Then fix the vulnerability.",
      },
      {
        what: "Proxy Patterns & Upgradability",
        why: "Smart contracts are immutable by default. Proxies allow you to fix bugs or add features after deployment.",
        time: "2 Weeks",
        prereqs: "Step 9, Step 11",
        resources: [
          { name: "OpenZeppelin: Upgradability", url: "https://docs.openzeppelin.com/contracts/4.x/api/proxy" },
        ],
        practice: "Deploy a UUPS proxy and upgrade its logic to a 'Version 2' without losing data.",
      },
      {
        what: "DeFi Protocol Integrations (Uniswap/Chainlink)",
        why: "To build useful finance apps. Chainlink oracles bring off-chain data (price) to the chain.",
        time: "2 Weeks",
        prereqs: "Step 14",
        resources: [
          { name: "Chainlink Data Feeds", url: "https://docs.chain.link/data-feeds" },
          { name: "Uniswap V3 Development", url: "https://docs.uniswap.org/sdk/v3/overview" },
        ],
        practice: "Build a contract that checks the price of BTC/USD and triggers an action if it falls below a threshold.",
      },
      {
        what: "Advanced Assembly (Yul)",
        why: "For extreme gas efficiency or custom operations not possible in high-level Solidity.",
        time: "2 Weeks",
        prereqs: "Step 17",
        resources: [
          { name: "Yul Documentation", url: "https://docs.soliditylang.org/en/v0.8.24/yul.html" },
        ],
        practice: "Write an addition function using only inline assembly (assembly { ... }).",
      },
      {
        what: "Static Analysis & Tooling (Slither/Echidna)",
        why: "Professional auditors use these tools to find bugs automatically.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Slither: Static Analysis for Solidity", url: "https://github.com/crytic/slither" },
        ],
        practice: "Run Slither on an old project and fix all 'High' and 'Medium' severity issues.",
      },
      {
        what: "Layer 2 Solutions (L2s)",
        why: "The future of scaling. Learn how Optimism, Arbitrum, and ZK-rollups differ.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "L2Beat - L2 Landscape", url: "https://l2beat.com/" },
        ],
        practice: "Deploy a contract to the Arbitrum Sepolia testnet.",
      },
      {
        what: "DAOs & Governance",
        why: "To build community-governed protocols where token holders vote on changes.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Governor Alpha & Bravo", url: "https://docs.openzeppelin.com/contracts/4.x/api/governance" },
        ],
        practice: "Deploy a Governance system where tokens allow users to vote on a treasury withdrawal.",
      },
      {
        what: "Final Capstone Project",
        why: "To synthesize all skills: Security, UI, Data, and Architecture into a production-grade DApp.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Decentralized Marketplace' with an ERC-20 payment system, NFT items, and a Next.js frontend.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Simple Bank", teaches: "Mappings, Address, and basic Deposit/Withdraw logic.", tech: "Solidity, Remix" },
  { level: "Beginner", title: "Decentralized Ballot", teaches: "Arrays, structs, and voting logic.", tech: "Solidity" },
  { level: "Beginner", title: "Personal To-Do (On-Chain)", teaches: "Structs, mapping, and simple data storage.", tech: "Solidity" },
  { level: "Intermediate", title: "Token Launchpad (ICO)", teaches: "ERC-20 standard, time-based logic, and crowdfunding.", tech: "Hardhat, OpenZeppelin" },
  { level: "Intermediate", title: "NFT Minting DApp", teaches: "ERC-721, IPFS, and frontend integration.", tech: "Foundry, React, Pinata" },
  { level: "Intermediate", title: "Multi-Signature Wallet", teaches: "Approvals, static data, and secure coordination.", tech: "Solidity, RSpec-like tests" },
  { level: "Intermediate", title: "Real-time Crypto Tracker", teaches: "API calls, Ethers.js, and state management.", tech: "Next.js, Ethers.js" },
  { level: "Advanced", title: "Decentralized Exchange (DEX)", teaches: "Liquidity pools, math logic, and swap algorithms.", tech: "Solidity, Vyper (Optional)" },
  { level: "Advanced", title: "Flash Loan Arbitrage Bot", teaches: "Advanced interop, high-speed execution, and lending protocols.", tech: "Foundry, Aave SDK" },
  { level: "Advanced", title: "Upgradable Governance DAO", teaches: "Proxy patterns, voting delays, and treasury management.", tech: "Solidity, Tally" },
];

const plans = [
  {
    title: "30-Day Fast Track: The DApp Developer",
    description: "Focus on syntax and basic frontend integration to build functional Web3 apps quickly.",
    schedule: [
      "Days 1-7: Solidity Basics & Remix IDE.",
      "Days 8-15: ERC-20 Tokens & Hardhat Foundations.",
      "Days 16-23: Frontend integration with Ethers.js & React.",
      "Days 24-30: Build a complete NFT Minting website.",
    ]
  },
  {
    title: "60-Day Standard Plan: The DeFi Engineer",
    description: "Balanced path for building complex financial protocols and mastering security.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Advanced Smart Contracts, Testing, and Security.",
      "Days 46-60: DeFi mechanics, Oracles, and building a Lending protocol.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Web3 Architect",
    description: "Comprehensive path for professional auditing, scaling, and enterprise deployment.",
    schedule: [
      "Days 1-30: Core Development & Standard protocols.",
      "Days 31-60: Professional Systems (Auditing, Proxies, Gas).",
      "Days 61-90: L2s, ZK-Rollups, Formal Verification, and Capstone.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between Call and DelegateCall?",
  "How does the EVM manage memory vs storage?",
  "What is a Reentrancy attack and how do you prevent it?",
  "Explain the difference between ERC-20 and ERC-721.",
  "What is Gas and how is it calculated?",
  "How do you make a smart contract upgradable?",
  "Explain the significance of the 'Receive' and 'Fallback' functions.",
  "What are Events and how are they used by indexed nodes?",
  "What is an Oracle and why do we need them? (Chainlink).",
  "Explain the Check-Effects-Interactions pattern.",
];

const codingQuestions = [
  { question: "Write a function that calculates the square root of a number in gas-efficient Solidity.", topic: "Math/Gas" },
  { question: "Implement a basic transfer function for an ERC-20 token manually.", topic: "Standards" },
  { question: "How would you prevent an integer overflow in Solidity < 0.8.0?", topic: "Security" },
  { question: "Write a modifier that restricts access to a function based on an address list.", topic: "Access Control" },
];

const mcqs = [
  { question: "Which visibility modifier allows a function to be called ONLY from outside the contract?", options: ["public", "private", "external", "internal"], answer: "external" },
  { question: "What is the cost of reading from 'storage' compared to 'memory'?", options: ["Cheaper", "Much More Expensive", "The same", "Free"], answer: "Much More Expensive" },
  { question: "Which keyword is used to stop execution and revert all changes if a condition is false?", options: ["stop", "revert", "require", "cancel"], answer: "require" },
];

const mistakes = [
  "Ignoring Gas Costs: Writing code that works but is too expensive for users to call.",
  "Implicit Visibility: Not explicitly declaring function visibility (pre-0.5.0 habit).",
  "Hardcoding Addresses: Makes testing and cross-chain deployment impossible.",
  "Tutorial Hell: Watching without coding. Every new concept should be tested in Remix.",
  "Ignoring Security: Thinking 'it's just a small app'—one bug can drain all funds.",
  "Not using 'unchecked' for math where you are SURE it won't overflow (saves gas).",
  "Over-using Loops: Large loops will hit the gas limit and fail the transaction.",
  "Neglecting Documentation: NatSpec comments are essential for auditors and users.",
  "Thinking Smart Contracts are like JS: They are immutable and persistent—no 'undo' after deploy.",
  "Ignoring the Log: Events are your only window into what happened—log generously.",
];

export default function SolidityRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Coins className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Solidity Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language of the decentralized future. From writing your first 'Hello World' smart contract to architecting secure, high-performance DeFi protocols and DAOs.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Blockchain / Smart Contract Languages">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Languages
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
            <CardDescription>Apply your knowledge with these 10 hands-on Solidity projects.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Web3 role.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Solidity', 'EVM', 'ERC-20', 'ERC-721', 'Foundry', 'Hardhat', 'Gas Optimization', 'Smart Contract Auditing', 'OpenZeppelin', 'Ethers.js', 'DeFi', 'DAO', 'L2 Scaling'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Security Patterns'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests and Slither reports in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with production L2 deployments.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Decentralized World</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Solidity is more than a language; it's a way to build trustless, transparent systems that can't be stopped. Stay consistent, keep building, and remember: The most innovative protocols in history were built on the foundations you're learning today. Your Web3 journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building DApps
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
