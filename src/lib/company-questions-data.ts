
export interface CompanyQuestions {
    [companyId: string]: {
        name: string;
        questions: {
            topic: string;
            question: string;
        }[];
    };
}

export const serviceBasedQuestions: CompanyQuestions = {
    "tcs": {
        name: "TCS",
        questions: [
            { topic: "Aptitude", question: "If a boat travels 15 km/hr in still water and the river flows at 5 km/hr, how long does it take to travel 60 km upstream?" },
            { topic: "Technical", question: "Explain the difference between a primary key and a unique key in SQL." },
            { topic: "HR", question: "Where do you see yourself in 5 years?" },
        ]
    },
    "infosys": {
        name: "Infosys",
        questions: [
            { topic: "Aptitude", question: "Find the next number in the series: 2, 5, 10, 17, 26, ?" },
            { topic: "Technical", question: "What is object-oriented programming (OOP)?" },
            { topic: "HR", question: "Why do you want to work for Infosys?" },
        ]
    }
};

export const productBasedQuestions: CompanyQuestions = {
    "amazon": {
        name: "Amazon",
        questions: [
            { topic: "Data Structures", question: "How would you find the median of a stream of incoming numbers?" },
            { topic: "Algorithms", question: "Given a binary tree, check if it is a valid Binary Search Tree." },
            { topic: "System Design", question: "How would you design a system like Amazon's product recommendation service?" },
            { topic: "Behavioral", question: "Tell me about a time you had to deal with a difficult customer or teammate." },
        ]
    },
    "google": {
        name: "Google",
        questions: [
            { topic: "Algorithms", question: "Find the longest palindromic substring in a given string." },
            { topic: "Data Structures", question: "How do you implement a hash map from scratch?" },
            { topic: "System Design", question: "Design Google Search's type-ahead (autocomplete) feature." },
            { topic: "Behavioral", question: "Describe a project you are most proud of and what your contribution was." },
        ]
    }
};
