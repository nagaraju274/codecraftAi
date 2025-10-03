
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

// Data updated as per JNTUH R18/R22 Syllabus
export const academicsData: AcademicsData = {
    "cse": {
        "1": [
            { id: "ma101", name: "Mathematics - I", description: "Calculus and Linear Algebra." },
            { id: "ch102", name: "Chemistry", description: "Atomic structure, thermodynamics, and chemical kinetics." },
            { id: "cs103", name: "Programming for Problem Solving", description: "Introduction to C programming language.", relatedRoadmapId: "c" },
            { id: "me104", name: "Engineering Workshop", description: "Practical skills in trades like fitting, carpentry, and welding." },
            { id: "en105", name: "English", description: "Enhancing language and communication skills." },
        ],
        "2": [
            { id: "ma201", name: "Mathematics - II", description: "Ordinary Differential Equations and Vector Calculus." },
            { id: "ap202", name: "Applied Physics", description: "Principles of quantum mechanics, semiconductors, and optics." },
            { id: "cs203", name: "Engineering Graphics & Design", description: "Basics of technical drawing and graphics." },
            { id: "ee204", name: "Basic Electrical Engineering", description: "Fundamentals of DC and AC circuits." },
        ],
        "3": [
            { 
                id: "cs301", 
                name: "Data Structures", 
                description: "Learn about fundamental data structures using C.",
                relatedRoadmapId: "dsa-with-cpp",
                syllabus: [
                    { unit: "Unit 1: Introduction", topics: ["Data Structures, Abstract Data Types (ADTs)", "Introduction to C++ Classes", "Asymptotic Notations"] },
                    { unit: "Unit 2: Stacks and Queues", topics: ["Stacks ADT", "Queues ADT", "Circular Queues"] },
                    { unit: "Unit 3: Linked Lists", topics: ["Singly Linked Lists", "Doubly Linked Lists", "Circular Linked Lists"] },
                    { unit: "Unit 4: Trees", topics: ["Introduction to Trees", "Binary Trees", "Binary Search Trees (BST)"] },
                    { unit: "Unit 5: Graphs", topics: ["Graph Terminology", "Graph Representation", "Graph Traversal (BFS, DFS)"] },
                ]
            },
            { 
                id: "cs302", 
                name: "Computer Organization and Architecture", 
                description: "Understand the structure and behavior of digital computers.",
            },
            { id: "cs303", name: "Object Oriented Programming using C++", description: "Grasp the concepts of OOP with C++.", relatedRoadmapId: "c-plus-plus" },
            { id: "ma304", name: "Discrete Mathematics", description: "Study of mathematical structures that are discrete." },
            { id: "ec305", name: "Analog and Digital Electronics", description: "Study of electronic components and digital circuits." },
        ],
        "4": [
            { id: "cs401", name: "Design and Analysis of Algorithms", description: "Learn to design and analyze the efficiency of algorithms." },
            { id: "cs402", name: "Operating Systems", description: "Understand the core concepts of an OS." },
            { id: "cs403", name: "Database Management Systems", description: "Learn how databases work, including SQL.", relatedRoadmapId: "sql" },
            { id: "cs404", name: "Formal Languages and Automata Theory", description: "Study of abstract machines and automata." },
            { id: "cs405", name: "Software Engineering", description: "Principles of software development lifecycle." },
        ],
        "5": [
            { id: "cs501", name: "Computer Networks", description: "Explore how computer networks function.", relatedRoadmapId: "networking-basics" },
            { id: "cs502", name: "Web Technologies", description: "Learn to build web applications.", relatedRoadmapId: "full-stack-web-development" },
            { id: "cs503", name: "Machine Learning", description: "Introduction to machine learning concepts.", relatedRoadmapId: "data-analyst" },
            { id: "cs504", name: "Professional Elective - I", description: "Choose a subject of interest." },
            { id: "cs505", name: "Open Elective - I", description: "Choose a subject from other disciplines." },
        ],
        "6": [
            { id: "cs601", name: "Compiler Design", description: "Learn how compilers are designed and built." },
            { id: "cs602", name: "Cryptography & Network Security", description: "Study of encryption and network security." },
            { id: "cs603", name: "Data Warehousing & Data Mining", description: "Concepts of data storage and analysis." },
            { id: "cs604", name: "Professional Elective - II", description: "Choose a subject of interest." },
            { id: "cs605", name: "Open Elective - II", description: "Choose a subject from other disciplines." },
        ],
        "7": [
            { id: "cs701", name: "Cloud Computing", description: "Learn about cloud infrastructure and services.", relatedRoadmapId: "devops-engineer" },
            { id: "cs702", name: "Artificial Intelligence", description: "Introduction to AI and expert systems." },
            { id: "cs703", name: "Professional Elective - III", description: "Choose a subject of interest." },
            { id: "cs704", name: "Professional Elective - IV", description: "Choose a subject of interest." },
            { id: "cs705", name: "Open Elective - III", description: "Choose a subject from other disciplines." },
        ],
        "8": [
            { id: "cs801", name: "Professional Elective - V", description: "Final specialized subject." },
            { id: "cs802", name: "Professional Elective - VI", description: "Final specialized subject." },
            { id: "cs803", name: "Project Work", description: "Final year project." },
        ]
    },
    "cse-ai-ml": {
        "1": [
            { id: "ma101", name: "Mathematics - I (Calculus and Linear Algebra)", description: "Core mathematical foundations." },
            { id: "ap102", name: "Applied Physics", description: "Principles of quantum mechanics, semiconductors, and optics." },
            { id: "cs103", name: "Programming for Problem Solving (C)", description: "Introduction to C programming.", relatedRoadmapId: "c" },
            { id: "me104", name: "Engineering Workshop", description: "Practical engineering skills." },
            { id: "en105", name: "English", description: "Communication skills." },
        ],
        "2": [
            { id: "ma201", name: "Mathematics - II (Advanced Calculus)", description: "Differential equations and vector calculus." },
            { id: "ch202", name: "Chemistry", description: "Fundamentals of chemical principles." },
            { id: "cs203", name: "Data Structures", description: "Fundamental data structures and algorithms.", relatedRoadmapId: "dsa-with-cpp" },
            { id: "ee204", name: "Basic Electrical Engineering", description: "Fundamentals of DC and AC circuits." },
        ],
        "3": [
            { id: "cs301", name: "Computer Organization & Architecture", description: "Structure and behavior of digital computers." },
            { id: "ma302", name: "Probability and Statistics", description: "Foundation for data analysis and machine learning." },
            { id: "cs303", name: "Object Oriented Programming (Java)", description: "OOP concepts using Java.", relatedRoadmapId: "java" },
            { id: "cs304", name: "Design and Analysis of Algorithms", description: "Designing and analyzing algorithm efficiency." },
            { id: "cs305", name: "Database Management Systems", description: "Database design and SQL.", relatedRoadmapId: "sql" },
        ],
        "4": [
            { id: "cs401", name: "Operating Systems", description: "Core concepts of an OS." },
            { id: "cs402", name: "Software Engineering", description: "Principles of software development." },
            { id: "ai403", name: "Foundations of AI & ML", description: "Introduction to core AI and ML concepts." },
            { id: "cs404", name: "Formal Languages and Automata Theory", description: "Study of abstract machines." },
            { id: "py405", name: "Python for Data Science", description: "Python libraries for data science.", relatedRoadmapId: "beginners-guide-to-python" },
        ],
        "5": [
            { id: "ai501", name: "Machine Learning", description: "Supervised, unsupervised, and reinforcement learning.", relatedRoadmapId: "data-analyst" },
            { id: "cs502", name: "Computer Networks", description: "Functioning of computer networks.", relatedRoadmapId: "networking-basics" },
            { id: "ai503", name: "Natural Language Processing", description: "Processing and analyzing human language." },
            { id: "cs504", name: "Professional Elective - I (e.g., Computer Vision)", description: "Specialized subject in AI/ML." },
            { id: "cs505", name: "Open Elective - I", description: "Interdisciplinary subject." },
        ],
        "6": [
            { id: "ai601", name: "Deep Learning", description: "Neural networks and deep learning architectures." },
            { id: "cs602", name: "Compiler Design", description: "Principles of compiler construction." },
            { id: "ai603", name: "AI Ethics and Governance", description: "Ethical implications of AI." },
            { id: "cs604", name: "Professional Elective - II (e.g., Reinforcement Learning)", description: "Advanced elective." },
            { id: "cs605", name: "Open Elective - II", description: "Interdisciplinary subject." },
        ],
        "7": [
            { id: "ai701", name: "MLOps", description: "DevOps for Machine Learning." },
            { id: "cs702", name: "Cloud Computing", description: "Cloud infrastructure and services.", relatedRoadmapId: "devops-engineer" },
            { id: "cs703", name: "Professional Elective - III", description: "Specialized subject." },
            { id: "cs704", name: "Professional Elective - IV", description: "Specialized subject." },
            { id: "cs705", name: "Project - I", description: "First phase of the final year project." },
        ],
        "8": [
            { id: "cs801", name: "Professional Elective - V", description: "Final specialized subject." },
            { id: "cs802", name: "Professional Elective - VI", description: "Final specialized subject." },
            { id: "cs803", name: "Project - II", description: "Final phase of the final year project." },
        ]
    },
    "cse-ds": {
        "1": [
            { id: "ma101", name: "Mathematics - I (Calculus and Linear Algebra)", description: "Core mathematical foundations." },
            { id: "ap102", name: "Applied Physics", description: "Principles of quantum mechanics, semiconductors, and optics." },
            { id: "cs103", name: "Programming for Problem Solving (C)", description: "Introduction to C programming.", relatedRoadmapId: "c" },
            { id: "me104", name: "Engineering Workshop", description: "Practical engineering skills." },
            { id: "en105", name: "English", description: "Communication skills." },
        ],
        "2": [
            { id: "ma201", name: "Mathematics - II (Advanced Calculus)", description: "Differential equations and vector calculus." },
            { id: "ch202", name: "Chemistry", description: "Fundamentals of chemical principles." },
            { id: "cs203", name: "Data Structures", description: "Fundamental data structures and algorithms.", relatedRoadmapId: "dsa-with-cpp" },
            { id: "ee204", name: "Basic Electrical Engineering", description: "Fundamentals of DC and AC circuits." },
        ],
        "3": [
            { id: "cs301", name: "Computer Organization & Architecture", description: "Structure and behavior of digital computers." },
            { id: "ma302", name: "Probability and Statistics", description: "Foundation for data analysis and machine learning." },
            { id: "cs303", name: "Object Oriented Programming (Java)", description: "OOP concepts using Java.", relatedRoadmapId: "java" },
            { id: "cs304", name: "Design and Analysis of Algorithms", description: "Designing and analyzing algorithm efficiency." },
            { id: "ds305", name: "Introduction to Data Science", description: "Overview of the data science lifecycle." },
        ],
        "4": [
            { id: "cs401", name: "Operating Systems", description: "Core concepts of an OS." },
            { id: "cs402", name: "Database Management Systems", description: "Database design and SQL.", relatedRoadmapId: "sql" },
            { id: "py403", name: "Python for Data Science", description: "Using Python libraries like Pandas, NumPy, and Matplotlib.", relatedRoadmapId: "beginners-guide-to-python" },
            { id: "cs404", name: "Software Engineering", description: "Principles of software development." },
            { id: "ds405", name: "Data Warehousing", description: "Concepts of data storage for analytics." },
        ],
        "5": [
            { id: "ds501", name: "Machine Learning", description: "Supervised and unsupervised learning techniques.", relatedRoadmapId: "data-analyst" },
            { id: "cs502", name: "Computer Networks", description: "Functioning of computer networks.", relatedRoadmapId: "networking-basics" },
            { id: "ds503", name: "Data Visualization", description: "Techniques and tools for visualizing data." },
            { id: "cs504", name: "Professional Elective - I (e.g., Big Data Analytics)", description: "Specialized subject in Data Science." },
            { id: "cs505", name: "Open Elective - I", description: "Interdisciplinary subject." },
        ],
        "6": [
            { id: "ds601", name: "Deep Learning", description: "Neural networks and deep learning architectures." },
            { id: "ds602", name: "Business Intelligence", description: "Tools and techniques for BI." },
            { id: "cs603", name: "Cryptography & Network Security", description: "Study of encryption and network security." },
            { id: "cs604", name: "Professional Elective - II (e.g., Stream Processing)", description: "Advanced elective." },
            { id: "cs605", name: "Open Elective - II", description: "Interdisciplinary subject." },
        ],
        "7": [
            { id: "ds701", name: "Big Data Technologies", description: "Hadoop, Spark, and other big data tools." },
            { id: "cs702", name: "Cloud Computing", description: "Cloud infrastructure for data science.", relatedRoadmapId: "devops-engineer" },
            { id: "cs703", name: "Professional Elective - III", description: "Specialized subject." },
            { id: "cs704", name: "Professional Elective - IV", description: "Specialized subject." },
            { id: "cs705", name: "Project - I", description: "First phase of the final year project." },
        ],
        "8": [
            { id: "cs801", name: "Professional Elective - V", description: "Final specialized subject." },
            { id: "cs802", name: "Professional Elective - VI", description: "Final specialized subject." },
            { id: "cs803", name: "Project - II", description: "Final phase of the final year project." },
        ]
    },
    "cse-cs": {
        "1": [
            { id: "ma101", name: "Mathematics - I (Calculus and Linear Algebra)", description: "Core mathematical foundations." },
            { id: "ap102", name: "Applied Physics", description: "Principles of quantum mechanics, semiconductors, and optics." },
            { id: "cs103", name: "Programming for Problem Solving (C)", description: "Introduction to C programming.", relatedRoadmapId: "c" },
            { id: "me104", name: "Engineering Workshop", description: "Practical engineering skills." },
            { id: "en105", name: "English", description: "Communication skills." },
        ],
        "2": [
            { id: "ma201", name: "Mathematics - II (Advanced Calculus)", description: "Differential equations and vector calculus." },
            { id: "ch202", name: "Chemistry", description: "Fundamentals of chemical principles." },
            { id: "cs203", name: "Data Structures", description: "Fundamental data structures and algorithms.", relatedRoadmapId: "dsa-with-cpp" },
            { id: "ee204", name: "Basic Electrical Engineering", description: "Fundamentals of DC and AC circuits." },
        ],
        "3": [
            { id: "cs301", name: "Computer Organization & Architecture", description: "Structure and behavior of digital computers." },
            { id: "ma302", name: "Discrete Mathematics", description: "Study of mathematical structures." },
            { id: "cs303", name: "Object Oriented Programming (Java)", description: "OOP concepts using Java.", relatedRoadmapId: "java" },
            { id: "cs304", name: "Design and Analysis of Algorithms", description: "Designing and analyzing algorithm efficiency." },
            { id: "cs305", name: "Database Management Systems", description: "Database design and SQL.", relatedRoadmapId: "sql" },
        ],
        "4": [
            { id: "cs401", name: "Operating Systems", description: "Core concepts of an OS." },
            { id: "cs402", name: "Computer Networks", description: "Functioning of computer networks.", relatedRoadmapId: "networking-basics" },
            { id: "cy403", name: "Information Security", description: "Fundamentals of cybersecurity." },
            { id: "cs404", name: "Software Engineering", description: "Principles of software development." },
            { id: "cy405", name: "Python for Security", description: "Using Python for security scripting.", relatedRoadmapId: "beginners-guide-to-python" },
        ],
        "5": [
            { id: "cy501", name: "Cryptography", description: "Symmetric and asymmetric encryption algorithms." },
            { id: "cy502", name: "Network Security", description: "Securing networks with firewalls, IDS/IPS." },
            { id: "cs503", name: "Web Technologies", description: "Learn to build web applications.", relatedRoadmapId: "full-stack-web-development" },
            { id: "cs504", name: "Professional Elective - I (e.g., Ethical Hacking)", description: "Specialized subject in Cyber Security." },
            { id: "cs505", name: "Open Elective - I", description: "Interdisciplinary subject." },
        ],
        "6": [
            { id: "cy601", name: "Cyber Forensics", description: "Investigation of digital crimes." },
            { id: "cs602", name: "Compiler Design", description: "Principles of compiler construction." },
            { id: "cy603", name: "Application Security", description: "Securing web and mobile applications." },
            { id: "cs604", name: "Professional Elective - II (e.g., Malware Analysis)", description: "Advanced elective." },
            { id: "cs605", name: "Open Elective - II", description: "Interdisciplinary subject." },
        ],
        "7": [
            { id: "cy701", name: "Cloud Security", description: "Securing cloud infrastructure and services." },
            { id: "cy702", name: "Blockchain & Cryptocurrency", description: "Fundamentals of blockchain technology." },
            { id: "cs703", name: "Professional Elective - III", description: "Specialized subject." },
            { id: "cs704", name: "Professional Elective - IV", description: "Specialized subject." },
            { id: "cs705", name: "Project - I", description: "First phase of the final year project." },
        ],
        "8": [
            { id: "cs801", name: "Professional Elective - V", description: "Final specialized subject." },
            { id: "cs802", name: "Professional Elective - VI", description: "Final specialized subject." },
            { id: "cs803", name: "Project - II", description: "Final phase of the final year project." },
        ]
    },
    "csbs": {
        "1": [
            { id: "ma101", name: "Business Mathematics - I", description: "Calculus and statistical methods for business." },
            { id: "cs102", name: "Programming for Problem Solving (Python)", description: "Introduction to Python programming.", relatedRoadmapId: "beginners-guide-to-python" },
            { id: "bs103", name: "Principles of Management", description: "Fundamentals of management theory." },
            { id: "ee104", name: "Basic Electrical & Electronics Engineering", description: "Fundamentals of circuits." },
            { id: "en105", name: "Business Communication", description: "Professional communication skills." },
        ],
        "2": [
            { id: "ma201", name: "Business Mathematics - II", description: "Advanced statistics and operations research." },
            { id: "cs202", name: "Data Structures & Algorithms", description: "Core data structures and algorithms.", relatedRoadmapId: "dsa-with-python" },
            { id: "bs203", name: "Financial & Cost Accounting", description: "Principles of accounting." },
            { id: "cs204", name: "Object Oriented Programming (Java)", description: "OOP concepts using Java.", relatedRoadmapId: "java" },
        ],
        "3": [
            { id: "cs301", name: "Computer Organization", description: "Structure and behavior of computers." },
            { id: "bs302", name: "Marketing Management", description: "Core concepts of marketing." },
            { id: "cs303", name: "Database Management Systems", description: "Database design and SQL.", relatedRoadmapId: "sql" },
            { id: "bs304", name: "Human Resource Management", description: "Principles of HRM." },
            { id: "cs305", name: "Software Engineering", description: "Software development lifecycle." },
        ],
        "4": [
            { id: "cs401", name: "Operating Systems", description: "Core concepts of an OS." },
            { id: "cs402", name: "Computer Networks", description: "Functioning of computer networks.", relatedRoadmapId: "networking-basics" },
            { id: "bs403", name: "Financial Management", description: "Corporate finance and investment." },
            { id: "cs404", name: "Web Technologies", description: "Building web applications.", relatedRoadmapId: "full-stack-web-development" },
            { id: "bs405", name: "Business Analytics", description: "Using data for business decision-making." },
        ],
        "5": [
            { id: "cs501", name: "Cloud Computing", description: "Cloud infrastructure and services.", relatedRoadmapId: "devops-engineer" },
            { id: "bs502", name: "Supply Chain Management", description: "Logistics and supply chain." },
            { id: "cs503", name: "Artificial Intelligence for Business", description: "Applying AI to business problems." },
            { id: "cs504", name: "Professional Elective - I (e.g., E-Commerce)", description: "Specialized subject." },
            { id: "cs505", name: "Open Elective - I", description: "Interdisciplinary subject." },
        ],
        "6": [
            { id: "bs601", name: "Strategic Management", description: "Business strategy and policy." },
            { id: "cs602", name: "Cyber Security", description: "Fundamentals of cybersecurity." },
            { id: "ds603", name: "Predictive Modeling", description: "Building predictive models." },
            { id: "cs604", name: "Professional Elective - II (e.g., FinTech)", description: "Advanced elective." },
            { id: "cs605", name: "Open Elective - II", description: "Interdisciplinary subject." },
        ],
        "7": [
            { id: "bs701", name: "Entrepreneurship", description: "Starting and managing a business." },
            { id: "cs702", name: "Big Data Analytics", description: "Working with large datasets." },
            { id: "cs703", name: "Professional Elective - III", description: "Specialized subject." },
            { id: "cs704", name: "Professional Elective - IV", description: "Specialized subject." },
            { id: "cs705", name: "Project - I", description: "First phase of the final year project." },
        ],
        "8": [
            { id: "cs801", name: "Professional Elective - V", description: "Final specialized subject." },
            { id: "cs802", name: "Professional Elective - VI", description: "Final specialized subject." },
            { id: "cs803", name: "Project - II", description: "Final phase of the final year project." },
        ]
    },
    "ece": {
        "1": [
            { id: "ma101", name: "Mathematics - I", description: "Calculus and Linear Algebra." },
            { id: "ap102", name: "Applied Physics", description: "Principles of quantum mechanics, semiconductors, and optics." },
            { id: "ee103", name: "Basic Electrical Engineering", description: "Fundamentals of circuits and electricity." },
            { id: "me104", name: "Engineering Graphics & Design", description: "Basics of technical drawing and graphics." },
        ],
        "2": [
            { id: "ma201", name: "Mathematics - II", description: "Ordinary Differential Equations and Vector Calculus." },
            { id: "ch202", name: "Chemistry", description: "Atomic structure, thermodynamics, and chemical kinetics." },
            { id: "cs203", name: "Programming for Problem Solving", description: "Introduction to C programming language.", relatedRoadmapId: "c" },
            { id: "en204", name: "English", description: "Enhancing language and communication skills." },
        ],
        "3": [
            { id: "ec301", name: "Electronic Devices and Circuits", description: "Study of semiconductor devices like diodes and transistors." },
            { id: "ec302", name: "Digital System Design", description: "Learn the basics of digital circuits and logic gates." },
            { id: "ec303", name: "Signals and Systems", description: "Understand continuous and discrete time signals." },
            { id: "ec304", name: "Network Analysis and Transmission Lines", description: "Analysis of electrical networks and transmission lines." },
            { id: "ma305", name: "Mathematics – III", description: "Probability Theory and Stochastic Processes." },
        ],
        "4": [
            { id: "ec401", name: "Analog and Digital Communications", description: "AM, FM, and digital modulation techniques." },
            { id: "ec402", name: "Electromagnetic Fields and Waves", description: "Study of electromagnetic field theory." },
            { id: "ec403", name: "Linear IC Applications", description: "Study of op-amps and other linear integrated circuits." },
            { id: "ec404", name: "Electronic Circuit Analysis", description: "Analysis of BJT and FET amplifiers." },
            { id: "ee405", name: "Control Systems", description: "Analysis and design of control systems." },
        ],
        "5": [
            { id: "ec501", name: "Microprocessors & Microcontrollers", description: "Study of 8086 and 8051.", relatedRoadmapId: "mobile-app-development" },
            { id: "ec502", name: "Data Communications and Networks", description: "Fundamentals of computer networking." },
            { id: "ec503", name: "VLSI Design", description: "Introduction to Very Large Scale Integration." },
            { id: "ec504", name: "Professional Elective - I", description: "Choose a subject of interest." },
        ],
        "6": [
            { id: "ec601", name: "Antennas and Propagation", description: "Study of antenna theory." },
            { id: "ec602", name: "Digital Signal Processing", description: "Processing of digital signals." },
            { id: "ec603", name: "Object Oriented Programming through Java", description: "Core Java and OOP concepts.", relatedRoadmapId: "java" },
            { id: "ec604", name: "Professional Elective - II", description: "Choose a subject of interest." },
            { id: "ec605", name: "Open Elective - I", description: "Choose a subject from other disciplines." },
        ],
        "7": [
            { id: "ec701", name: "Microwave and Optical Communications", description: "Study of microwave and fiber optic communication." },
            { id: "ec702", name: "Embedded Systems", description: "Design of embedded systems." },
            { id: "ec703", name: "Professional Elective - III", description: "Choose a subject of interest." },
            { id: "ec704", name: "Professional Elective - IV", description: "Choose a subject of interest." },
            { id: "ec705", name: "Open Elective - II", description: "Choose a subject from other disciplines." },
        ],
        "8": [
            { id: "ec801", name: "Professional Elective - V", description: "Final specialized subject." },
            { id: "ec802", name: "Professional Elective - VI", description: "Final specialized subject." },
            { id: "ec803", name: "Project Work", description: "Final year comprehensive project." },
        ]
    },
    "it": {
        "1": [
            { id: "ma101", name: "Mathematics - I", description: "Calculus and Linear Algebra." },
            { id: "ch102", name: "Chemistry", description: "Atomic structure, thermodynamics, and chemical kinetics." },
            { id: "cs103", name: "Programming for Problem Solving", description: "Introduction to C programming language.", relatedRoadmapId: "c" },
            { id: "me104", name: "Engineering Workshop", description: "Practical skills in trades like fitting, carpentry, and welding." },
            { id: "en105", name: "English", description: "Enhancing language and communication skills." },
        ],
        "2": [
            { id: "ma201", name: "Mathematics - II", description: "Ordinary Differential Equations and Vector Calculus." },
            { id: "ap202", name: "Applied Physics", description: "Principles of quantum mechanics, semiconductors, and optics." },
            { id: "cs203", name: "Engineering Graphics & Design", description: "Basics of technical drawing and graphics." },
            { id: "ee204", name: "Basic Electrical Engineering", description: "Fundamentals of DC and AC circuits." },
        ],
        "3": [
            { id: "cs301", name: "Analog and Digital Electronics", description: "Study of electronic components and digital circuits." },
            { id: "cs302", name: "Data Structures", description: "Learn about fundamental data structures using C.", relatedRoadmapId: "dsa-with-cpp" },
            { id: "it303", name: "Computer Organization and Architecture", description: "Understand the structure and behavior of digital computers." },
            { id: "it304", name: "Object Oriented Programming using C++", description: "Grasp the concepts of OOP with C++.", relatedRoadmapId: "c-plus-plus" },
            { id: "ma305", name: "Discrete Mathematics", description: "Study of mathematical structures that are discrete." },
        ],
        "4": [
            { id: "cs401", name: "Operating Systems", description: "Understand the core concepts of an OS." },
            { id: "cs402", name: "Database Management Systems", description: "Learn how databases work, including SQL.", relatedRoadmapId: "sql" },
            { id: "it403", name: "Java Programming", description: "Core Java programming concepts.", relatedRoadmapId: "java" },
            { id: "cs404", name: "Design and Analysis of Algorithms", description: "Learn to design and analyze the efficiency of algorithms." },
            { id: "cs405", name: "Software Engineering", description: "Principles of software development lifecycle." },
        ],
        "5": [
            { id: "it501", name: "Computer Networks", description: "Explore how computer networks function.", relatedRoadmapId: "networking-basics" },
            { id: "it502", name: "Web Technologies", description: "Learn to build web applications.", relatedRoadmapId: "full-stack-web-development" },
            { id: "it503", name: "Data Warehousing and Data Mining", description: "Concepts of data storage and analysis." },
            { id: "cs504", name: "Professional Elective - I", description: "Choose a subject of interest." },
        ],
        "6": [
            { id: "it601", name: "Cryptography & Network Security", description: "Study of encryption and network security." },
            { id: "it602", name: "Artificial Intelligence", description: "Introduction to AI and expert systems." },
            { id: "it603", "name": "Python Programming", "description": "Learn the versatile Python language.", "relatedRoadmapId": "beginners-guide-to-python" },
            { id: "it604", name: "Professional Elective - II", description: "Choose a subject of interest." },
            { id: "it605", name: "Open Elective - I", description: "Choose a subject from other disciplines." },
        ],
        "7": [
            { id: "it701", name: "Cloud Computing", description: "Learn about cloud infrastructure and services.", relatedRoadmapId: "devops-engineer" },
            { id: "it702", name: "Mobile Application Development", description: "Concepts of mobile application development.", relatedRoadmapId: "mobile-app-development" },
            { id: "it703", name: "Professional Elective - III", description: "Choose another subject of interest." },
            { id: "it704", name: "Professional Elective - IV", description: "Choose another subject of interest." },
        ],
        "8": [
            { id: "it801", name: "Professional Elective - V", description: "Final specialized subject." },
            { id: "it802", name: "Professional Elective - VI", description: "Final specialized subject." },
            { id: "it803", name: "Project Work", description: "Final year comprehensive project." },
        ]
    },
    "me": {
        "1": [ { id: "me101", name: "Engineering Mechanics", description: "Statics, dynamics, and friction." } ],
        "2": [ { id: "me201", name: "Thermodynamics", description: "Laws of thermodynamics and energy conversion." } ],
        "3": [ { id: "me301", name: "Strength of Materials", description: "Stress, strain, and material properties." } ],
        "4": [ { id: "me401", name: "Theory of Machines", description: "Kinematics and dynamics of machines." } ],
        "5": [ { id: "me501", name: "Heat Transfer", description: "Conduction, convection, and radiation." } ],
        "6": [ { id: "me601", name: "Machine Design", description: "Design of machine elements." } ],
        "7": [ { id: "me701", name: "Finite Element Analysis", description: "Numerical method for solving engineering problems." } ],
        "8": [ { id: "me801", name: "Project Work", description: "Final year comprehensive project." } ],
    },
    "ce": {
        "1": [ { id: "ce101", name: "Engineering Geology", description: "Study of earth materials." } ],
        "2": [ { id: "ce201", name: "Surveying", description: "Principles of land surveying." } ],
        "3": [ { id: "ce301", name: "Fluid Mechanics", description: "Properties and behavior of fluids." } ],
        "4": [ { id: "ce401", name: "Structural Analysis", description: "Analysis of determinate structures." } ],
        "5": [ { id: "ce501", name: "Geotechnical Engineering", description: "Soil mechanics and foundation engineering." } ],
        "6": [ { id: "ce601", name: "Design of Concrete Structures", description: "Design of reinforced concrete elements." } ],
        "7": [ { id: "ce701", name: "Transportation Engineering", description: "Planning and design of transportation systems." } ],
        "8": [ { id: "ce801", name: "Project Work", description: "Final year comprehensive project." } ],
    },
    "eee": {
        "1": [ { id: "eee101", name: "Basic Electrical Engineering", description: "Fundamentals of circuits and electricity." } ],
        "2": [ { id: "eee201", name: "Electromagnetic Theory", description: "Study of electric and magnetic fields." } ],
        "3": [ { id: "eee301", name: "Electrical Machines I", description: "DC machines and transformers." } ],
        "4": [ { id: "eee401", name: "Power Systems I", description: "Generation and transmission of power." } ],
        "5": [ { id: "eee501", name: "Electrical Machines II", description: "AC machines." } ],
        "6": [ { id: "eee601", name: "Power Electronics", description: "Study of power electronic converters." } ],
        "7": [ { id: "eee701", name: "Power System Protection", description: "Protection schemes for power systems." } ],
        "8": [ { id: "eee801", name: "Project Work", description: "Final year comprehensive project." } ],
    }
};

export const branchNames: { [key: string]: string } = {
    cse: "Computer Science & Engineering",
    "cse-ai-ml": "CSE (AI & Machine Learning)",
    "cse-ds": "CSE (Data Science)",
    "cse-cs": "CSE (Cyber Security)",
    csbs: "Computer Science & Business Systems",
    ece: "Electronics & Communication Engineering",
    it: "Information Technology",
    me: "Mechanical Engineering",
    ce: "Civil Engineering",
    eee: "Electrical & Electronics Engineering",
};
