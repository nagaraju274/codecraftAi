
import { BrainCircuit, Code } from "lucide-react";

export interface MockTest {
    id: string;
    title: string;
    icon: React.ElementType;
    description: string;
}

export const serviceBasedMockTests: MockTest[] = [
    {
        id: "aptitude-reasoning-1",
        title: "Aptitude & Reasoning Test 1",
        icon: BrainCircuit,
        description: "Sharpen your quantitative and logical skills with this comprehensive aptitude test."
    },
    {
        id: "verbal-ability-1",
        title: "Verbal Ability Test 1",
        icon: BrainCircuit,
        description: "Test your grammar, vocabulary, and reading comprehension skills."
    },
     {
        id: "full-service-mock-1",
        title: "Full Service-Based Mock Test 1",
        icon: BrainCircuit,
        description: "A complete simulation of a real placement test for service-based companies."
    },
];

export const productBasedMockTests: MockTest[] = [
    {
        id: "dsa-coding-1",
        title: "DSA & Coding Test 1",
        icon: Code,
        description: "Test your knowledge of fundamental data structures and algorithms with MCQs and a coding challenge."
    },
    {
        id: "system-design-basics-1",
        title: "System Design Basics Test 1",
        icon: Code,
        description: "Assess your understanding of core system design principles."
    },
     {
        id: "full-product-mock-1",
        title: "Full Product-Based Mock Test 1",
        icon: Code,
        description: "A complete simulation of a technical screening for product-based companies."
    },
];
