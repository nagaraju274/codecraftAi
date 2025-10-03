
export interface Subject {
    id: string;
    name: string;
    description: string;
    relatedRoadmapId?: string;
    syllabus?: {
        unit: string;
        topics: string[];
    }[];
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
        "1": [
            { id: "cs101", name: "Engineering Mathematics I", description: "Calculus, linear algebra, and differential equations." },
            { id: "cs102", name: "Engineering Physics", description: "Mechanics, optics, and quantum mechanics." },
            { id: "cs103", name: "Programming for Problem Solving", description: "Introduction to C programming language." },
            { id: "cs104", name: "Engineering Drawing", description: "Basics of technical drawing and graphics." },
        ],
        "2": [
            { id: "cs105", name: "Engineering Mathematics II", description: "Advanced topics in calculus and vector spaces." },
            { id: "cs106", name: "Data Structures with C", description: "Introduction to fundamental data structures." },
            { id: "cs107", name: "Digital Logic Design", description: "Basics of digital circuits and logic gates." },
            { id: "cs108", name: "Environmental Science", description: "Study of the environment and conservation." },
        ],
        "3": [
            { 
                id: "cs201", 
                name: "Data Structures", 
                description: "Learn about fundamental data structures.",
                relatedRoadmapId: "dsa-with-java",
                syllabus: [
                    { unit: "Unit 1: Introduction", topics: ["Introduction to Data Structures", "Abstract Data Types (ADTs)", "Complexity Analysis"] },
                    { unit: "Unit 2: Arrays and Lists", topics: ["Arrays", "Linked Lists (Singly, Doubly)", "Stacks", "Queues"] },
                    { unit: "Unit 3: Trees", topics: ["Introduction to Trees", "Binary Trees", "Binary Search Trees (BST)", "AVL Trees"] },
                    { unit: "Unit 4: Graphs", topics: ["Graph Terminology", "Graph Representation", "Graph Traversal (BFS, DFS)"] },
                    { unit: "Unit 5: Sorting and Searching", topics: ["Bubble Sort, Insertion Sort", "Merge Sort, Quick Sort", "Linear Search, Binary Search"] },
                ]
            },
            { 
                id: "cs202", 
                name: "Database Management Systems", 
                description: "Understand how databases work.",
                relatedRoadmapId: "back-end-developer",
            },
            { id: "cs203", name: "Object Oriented Programming", description: "Grasp the concepts of OOP with Java/C++." },
            { id: "ma201", name: "Mathematics III", description: "Advanced calculus and linear algebra." },
        ],
        "4": [
            { id: "cs204", name: "Design and Analysis of Algorithms", description: "Learn to design and analyze algorithms." },
            { id: "cs205", name: "Operating Systems", description: "Understand the core concepts of an OS." },
            { id: "cs206", name: "Computer Networks", description: "Explore how computer networks function." },
            { id: "cs207", name: "Theory of Computation", description: "Study of abstract machines and automata." },
        ],
        "5": [
            { id: "cs301", name: "Machine Learning", description: "Introduction to machine learning concepts.", relatedRoadmapId: "data-analyst" },
            { id: "cs302", name: "Compiler Design", description: "Learn how compilers are designed and built." },
            { id: "cs303", name: "Software Engineering", description: "Principles of software development lifecycle." },
            { id: "cs304", name: "Artificial Intelligence", description: "Introduction to AI and expert systems." },
        ],
        "6": [
            { id: "cs305", name: "Web Technologies", description: "Learn to build web applications.", relatedRoadmapId: "full-stack-web-development" },
            { id: "cs306", name: "Cryptography & Network Security", description: "Study of encryption and network security." },
            { id: "cs307", name: "Data Warehousing & Data Mining", description: "Concepts of data storage and analysis." },
            { id: "cs308", name: "Elective I", description: "Choose a subject of interest." },
        ],
        "7": [
            { id: "cs401", name: "Cloud Computing", description: "Learn about cloud infrastructure and services." },
            { id: "cs402", name: "Big Data Analytics", description: "Techniques for analyzing large datasets." },
            { id: "cs403", name: "Elective II", description: "Choose another subject of interest." },
            { id: "cs404", name: "Project Work - Phase 1", description: "Start of the final year project." },
        ],
        "8": [
            { id: "cs405", name: "Project Work - Phase 2", description: "Conclusion of the final year project." },
            { id: "cs406", name: "Elective III", description: "Final specialized subject." },
        ]
    },
    "ece": {
        "1": [
            { id: "ec101", name: "Engineering Mathematics I", description: "Calculus, linear algebra, and differential equations." },
            { id: "ec102", name: "Engineering Physics", description: "Mechanics, optics, and quantum mechanics." },
            { id: "ec103", name: "Basic Electrical Engineering", description: "Fundamentals of circuits and electricity." },
            { id: "ec104", name: "Programming for Problem Solving", description: "Introduction to C programming language." },
        ],
        "2": [
            { id: "ec105", name: "Engineering Mathematics II", description: "Advanced topics in calculus and vector spaces." },
            { id: "ec106", name: "Electronic Devices and Circuits", description: "Study of semiconductor devices." },
            { id: "ec107", name: "Digital Logic Design", description: "Basics of digital circuits and logic gates." },
            { id: "ec108", name: "Engineering Chemistry", description: "Study of chemical principles in engineering." },
        ],
        "3": [
            { id: "ec201", name: "Analog Electronics", description: "Fundamental electronic circuits." },
            { id: "ec202", name: "Digital Logic Design", description: "Learn the basics of digital circuits." },
            { id: "ec203", name: "Signals and Systems", description: "Understand continuous and discrete time signals." },
            { id: "ec204", name: "Network Theory", description: "Analysis of electrical networks." },
        ],
        "4": [
            { id: "ec205", name: "Microprocessors & Microcontrollers", description: "Study of 8086 and 8051." },
            { id: "ec206", name: "Control Systems", description: "Analysis and design of control systems." },
            { id: "ec207", name: "Electromagnetic Waves", description: "Study of electromagnetic field theory." },
            { id: "ec208", name: "Analog Communication", description: "AM, FM, and PM modulation techniques." },
        ],
        "5": [
            { id: "ec301", name: "Digital Communication", description: "Sampling, quantization, and digital modulation." },
            { id: "ec302", name: "VLSI Design", description: "Introduction to Very Large Scale Integration." },
            { id: "ec303", name: "Digital Signal Processing", description: "Processing of digital signals." },
            { id: "ec304", name: "Antennas and Wave Propagation", description: "Study of antenna theory." },
        ],
        "6": [
            { id: "ec305", name: "Microwave Engineering", description: "Study of microwave components and systems." },
            { id: "ec306", name: "Embedded Systems", description: "Design of embedded systems.", relatedRoadmapId: "mobile-app-development" },
            { id: "ec307", name: "Computer Networks", description: "Fundamentals of computer networking." },
            { id: "ec308", name: "Elective I", description: "Choose a subject of interest." },
        ],
        "7": [
            { id: "ec401", name: "Optical Communication", description: "Study of fiber optic communication." },
            { id: "ec402", name: "Wireless Communication", description: "Mobile communication systems." },
            { id: "ec403", name: "Elective II", description: "Choose another subject of interest." },
            { id: "ec404", name: "Project Work - Phase 1", description: "Start of the final year project." },
        ],
        "8": [
            { id: "ec405", name: "Project Work - Phase 2", description: "Conclusion of the final year project." },
            { id: "ec406", name: "Satellite Communication", description: "Study of satellite systems." },
        ]
    },
    "it": {
        "1": [
            { id: "it101", name: "Engineering Mathematics I", description: "Calculus, linear algebra, and differential equations." },
            { id: "it102", name: "Engineering Physics", description: "Mechanics, optics, and quantum mechanics." },
            { id: "it103", name: "Programming for Problem Solving", description: "Introduction to C programming language." },
            { id: "it104", name: "Engineering Drawing", description: "Basics of technical drawing and graphics." },
        ],
        "2": [
            { id: "it105", name: "Engineering Mathematics II", description: "Advanced topics in calculus and vector spaces." },
            { id: "it106", name: "Data Structures with C", description: "Introduction to fundamental data structures." },
            { id: "it107", name: "Digital Logic Design", description: "Basics of digital circuits and logic gates." },
            { id: "it108", name: "Environmental Science", description: "Study of the environment and conservation." },
        ],
        "3": [
            { id: "it201", name: "Data Structures", description: "Learn about fundamental data structures.", relatedRoadmapId: "dsa-with-python" },
            { id: "it202", name: "Database Management Systems", description: "Understand how databases work." },
            { id: "it203", name: "Object Oriented Programming", description: "Grasp the concepts of OOP with Java/C++." },
        ],
        "4": [
            { id: "it204", name: "Design and Analysis of Algorithms", description: "Learn to design and analyze algorithms." },
            { id: "it205", name: "Operating Systems", description: "Understand the core concepts of an OS." },
            { id: "it206", name: "Computer Networks", description: "Explore how computer networks function." },
        ],
        "5": [
            { id: "it301", name: "Web Technologies", description: "Learn to build web applications.", relatedRoadmapId: "full-stack-web-development" },
            { id: "it302", name: "Software Engineering", description: "Principles of software development lifecycle." },
            { id: "it303", name: "Artificial Intelligence", description: "Introduction to AI and expert systems." },
        ],
        "6": [
            { id: "it304", name: "Cryptography & Network Security", description: "Study of encryption and network security." },
            { id: "it305", name: "Data Mining", description: "Concepts of data storage and analysis." },
            { id: "it306", name: "Elective I", description: "Choose a subject of interest." },
        ],
        "7": [
            { id: "it401", name: "Cloud Computing", description: "Learn about cloud infrastructure and services." },
            { id: "it402", name: "Mobile Computing", description: "Concepts of mobile application development.", relatedRoadmapId: "mobile-app-development" },
            { id: "it403", name: "Project Work - Phase 1", description: "Start of the final year project." },
        ],
        "8": [
            { id: "it404", name: "Project Work - Phase 2", description: "Conclusion of the final year project." },
            { id: "it405", name: "Elective II", description: "Final specialized subject." },
        ]
    },
    "me": {
        "1": [ { id: "me101", name: "Engineering Mechanics", description: "Statics, dynamics, and friction." } ],
        "2": [ { id: "me102", name: "Thermodynamics", description: "Laws of thermodynamics and energy conversion." } ],
        "3": [ { id: "me201", name: "Strength of Materials", description: "Stress, strain, and material properties." } ],
        "4": [ { id: "me202", name: "Theory of Machines", description: "Kinematics and dynamics of machines." } ],
        "5": [ { id: "me301", name: "Heat Transfer", description: "Conduction, convection, and radiation." } ],
        "6": [ { id: "me302", name: "Machine Design", description: "Design of machine elements." } ],
        "7": [ { id: "me401", name: "Finite Element Analysis", description: "Numerical method for solving engineering problems." } ],
        "8": [ { id: "me402", name: "Project Work", description: "Final year comprehensive project." } ],
    },
    "ce": {
        "1": [ { id: "ce101", name: "Engineering Geology", description: "Study of earth materials." } ],
        "2": [ { id: "ce102", name: "Surveying", description: "Principles of land surveying." } ],
        "3": [ { id: "ce201", name: "Fluid Mechanics", description: "Properties and behavior of fluids." } ],
        "4": [ { id: "ce202", name: "Structural Analysis", description: "Analysis of determinate structures." } ],
        "5": [ { id: "ce301", name: "Geotechnical Engineering", description: "Soil mechanics and foundation engineering." } ],
        "6": [ { id: "ce302", name: "Design of Concrete Structures", description: "Design of reinforced concrete elements." } ],
        "7": [ { id: "ce401", name: "Transportation Engineering", description: "Planning and design of transportation systems." } ],
        "8": [ { id: "ce402", name: "Project Work", description: "Final year comprehensive project." } ],
    },
    "eee": {
        "1": [ { id: "eee101", name: "Basic Electrical Engineering", description: "Fundamentals of circuits and electricity." } ],
        "2": [ { id: "eee102", name: "Electromagnetic Theory", description: "Study of electric and magnetic fields." } ],
        "3": [ { id: "eee201", name: "Electrical Machines I", description: "DC machines and transformers." } ],
        "4": [ { id: "eee202", name: "Power Systems I", description: "Generation and transmission of power." } ],
        "5": [ { id: "eee301", name: "Electrical Machines II", description: "AC machines." } ],
        "6": [ { id: "eee302", name: "Power Electronics", description: "Study of power electronic converters." } ],
        "7": [ { id: "eee401", name: "Power System Protection", description: "Protection schemes for power systems." } ],
        "8": [ { id: "eee402", name: "Project Work", description: "Final year comprehensive project." } ],
    }
};

export const branchNames: { [key: string]: string } = {
    cse: "Computer Science & Engineering",
    ece: "Electronics & Communication Engineering",
    it: "Information Technology",
    me: "Mechanical Engineering",
    ce: "Civil Engineering",
    eee: "Electrical & Electronics Engineering",
};
