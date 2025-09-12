
export interface Subject {
    id: string;
    name: string;
    description: string;
}

export interface BranchData {
    [semester: string]: Subject[];
}

export interface AcademicsData {
    [branch: string]: BranchData;
}

// Mock data for demonstration purposes
export const academicsData: AcademicsData = {
    "cse": {
        "3": [
            { id: "cs201", name: "Data Structures", description: "Learn about fundamental data structures." },
            { id: "cs202", name: "Database Management Systems", description: "Understand how databases work." },
            { id: "cs203", name: "Object Oriented Programming", description: "Grasp the concepts of OOP with Java/C++." },
            { id: "ma201", name: "Mathematics III", description: "Advanced calculus and linear algebra." },
        ],
        "4": [
            { id: "cs204", name: "Design and Analysis of Algorithms", description: "Learn to design and analyze algorithms." },
            { id: "cs205", name: "Operating Systems", description: "Understand the core concepts of an OS." },
            { id: "cs206", name: "Computer Networks", description: "Explore how computer networks function." },
        ],
    },
    "ece": {
        "3": [
            { id: "ec201", name: "Analog Electronics", description: "Fundamental electronic circuits." },
            { id: "ec202", name: "Digital Logic Design", description: "Learn the basics of digital circuits." },
            { id: "ec203", name: "Signals and Systems", description: "Understand continuous and discrete time signals." },
        ]
    }
    // Add more branches and semesters as needed
};

export const branchNames: { [key: string]: string } = {
    cse: "Computer Science & Engineering",
    ece: "Electronics & Communication Engineering",
    it: "Information Technology",
    me: "Mechanical Engineering",
    ce: "Civil Engineering",
    eee: "Electrical & Electronics Engineering",
};
