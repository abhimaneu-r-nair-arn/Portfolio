const portfolioData = {
    techData: {
        csharp: {
            title: "C# / .NET",
            category: "Software Development",
            borderColor: "var(--accent-blue)",
            desc: "Utilized for enterprise backend architecture, application development, and building logic verification engines. Proficient in object-oriented structures, Visual Studio IDE, .NET frameworks, and integrating backend applications seamlessly with relational SQL databases."
        },
        java: {
            title: "Java",
            category: "Software Development",
            borderColor: "var(--accent-blue)",
            desc: "Core expertise in object-oriented programming (OOP), data structures, and multi-threaded applications. Applied in academic coursework and foundational software engineering to build robust, platform-independent backend components."
        },
        python: {
            title: "Python",
            category: "Software Development",
            borderColor: "var(--accent-blue)",
            desc: "Applied for rapid prototyping, utility scripting, algorithmic problem solving, and automated test scenario generation. Experienced with clean syntax scripting and data structure manipulation."
        },
        webdev: {
            title: "HTML5 / CSS3 / JavaScript",
            category: "Frontend Development",
            borderColor: "var(--accent-blue)",
            desc: "Building clean, modern, and responsive user interfaces. Focused on glassmorphism visual designs, flexbox/grid architecture, DOM manipulation, and smooth micro-interactions without reliance on heavy framework bloat."
        },
        sql: {
            title: "SQL & Database Management",
            category: "Data Architecture",
            borderColor: "var(--accent-blue)",
            desc: "Designing and querying relational databases (RDBMS). Experienced in writing complex multi-table JOINs, aggregate queries, table schema normalization, primary/foreign key relationships, and data integrity enforcement."
        },
        oop: {
            title: "Object-Oriented Programming (OOP)",
            category: "Software Design",
            borderColor: "var(--accent-blue)",
            desc: "Strong foundation in software design principles: Encapsulation, Inheritance, Polymorphism, and Abstraction. Applied across C# and Java to create clean, maintainable, modular, and reusable software components."
        },
        git: {
            title: "Git & Version Control",
            category: "DevOps & Tools",
            borderColor: "var(--accent-blue)",
            desc: "Managing code repositories via GitHub. Experienced with repository initialization, commit hygiene, branch management, pull requests, and collaborative code revision tracking."
        },
        stlc: {
            title: "Software Testing Life Cycle (STLC)",
            category: "Quality Assurance",
            borderColor: "var(--accent-green)",
            desc: "Structured execution of all testing phases: Requirement Analysis, Test Planning, Test Case Development, Test Environment Setup, Test Execution, and Test Cycle Closure reporting."
        },
        automation: {
            title: "Test Automation",
            category: "Quality Engineering",
            borderColor: "var(--accent-green)",
            desc: "Writing automated scripts to perform regression testing, validate workflow accuracy, and reduce manual verification overhead. Focused on reliable assertion checks and repeatable test suite execution."
        },
        manual: {
            title: "Manual & Functional Testing",
            category: "Quality Assurance",
            borderColor: "var(--accent-green)",
            desc: "Systematic validation of software requirements, user journeys, edge cases, boundary conditions, and cross-browser responsiveness through exploratory and structured manual testing."
        },
        testcases: {
            title: "Test Case Design & Execution",
            category: "Quality Assurance",
            borderColor: "var(--accent-green)",
            desc: "Authoring comprehensive, positive and negative test cases with clear preconditions, action steps, expected results, and actual result logging to achieve maximum requirement coverage."
        },
        bugtracking: {
            title: "Bug Tracking & Reporting",
            category: "Quality Assurance",
            borderColor: "var(--accent-green)",
            desc: "Documenting defect lifecycles with detailed steps to reproduce, clear environment parameters, severity/priority tagging, screenshots/logs, and verification of bug fixes."
        },
        logic: {
            title: "Logic Verification & CNF",
            category: "Computer Science Logic",
            borderColor: "var(--accent-green)",
            desc: "Application of First-Order Predicate Logic, Resolution Refutation, and Conjunctive Normal Form (CNF) conversions to systematically verify system constraints and automated rule engines."
        },
        api: {
            title: "API Testing Basics",
            category: "Quality Engineering",
            borderColor: "var(--accent-green)",
            desc: "Validating RESTful endpoints using tools like Postman. Inspecting HTTP response codes (200, 400, 500 series), JSON payload structures, request headers, and data transfer accuracy."
        }
    },
    langsphereData: {
        html: {
            title: 'HTML5',
            desc: 'Structured the platform with semantic sections for language profiles, comparison content, navigation, and accessible interactive controls.'
        },
        css: {
            title: 'CSS3',
            desc: 'Created the HUD-inspired visual system with responsive grid layouts, layered panels, state styling, and readable mobile breakpoints.'
        },
        javascript: {
            title: 'JavaScript',
            desc: 'Powered the client-side language data, live filtering, category switching, result rendering, and interactive search experience.'
        },
        search: {
            title: 'Search & Filter',
            desc: 'Lets visitors narrow the language library by name, creator, paradigm, or feature while the results update immediately.'
        },
        categories: {
            title: 'Category Tabs',
            desc: 'Groups languages into focused views so visitors can move quickly between general-purpose, systems, web, and other language categories.'
        },
        responsive: {
            title: 'Responsive UI',
            desc: 'Adapts the interface from a wide data grid to compact mobile layouts while preserving the primary search and discovery workflow.'
        },
        usage: {
            title: 'Platform Use',
            desc: 'Visitors can discover a language, inspect its profile, compare it with related options, and use the surfaced syntax and metrics to guide technology choices.'
        }
    },
    hirelinkData: {
        react: {
            title: 'React 18 + Vite',
            desc: 'Builds the responsive customer, provider, and administrator interfaces with reusable React components and fast Vite development tooling.'
        },
        spring: {
            title: 'Spring Boot 3.2',
            desc: 'Provides the backend REST API, service layer, validation, exception handling, and business workflows for services, providers, bookings, and reviews.'
        },
        java: {
            title: 'Java 17',
            desc: 'Supplies the backend language foundation for the object-oriented domain model, controllers, services, repositories, and application logic.'
        },
        jwt: {
            title: 'JWT Security',
            desc: 'Secures API access with token-based authentication and role-aware authorization for customers, service providers, and administrators.'
        },
        mysql: {
            title: 'MySQL 8',
            desc: 'Stores structured application data such as accounts, service categories, provider listings, bookings, statuses, ratings, and reviews.'
        }
    },
    certificationData: [
        {
            title: 'AI for BFSI',
            issuer: 'MeitY - nasscom Digital skilling initiative',
            date: 'Certificate',
            document: 'certifications/Abhimaneu_Nair_AI_for_BFSI.pdf'
        },
        {
            title: 'Getting Started with Cisco Packet Tracer',
            issuer: 'Cisco Networking Academy',
            date: 'Certificate',
            document: 'certifications/Getting_Started_with_Cisco_Packet_Tracer_certificate_abhimaneu.pdf'
        },
        {
            title: 'Introduction to Cybersecurity',
            issuer: 'Cisco Networking Academy',
            date: 'Certificate',
            document: 'certifications/Introduction_to_Cybersecurity_certificate_ARN.pdf'
        },
        {
            title: 'Introduction to Modern AI',
            issuer: 'Cisco Networking Academy',
            date: 'Certificate',
            document: 'certifications/Introduction_to_Modern_AI_certificate_ARN.pdf'
        },
        {
            title: 'JavaScript Essentials 1',
            issuer: 'Cisco Networking Academy',
            date: 'Certificate',
            document: 'certifications/JavaScript_Essentials_1_certificate_ARN.pdf'
        },
        {
            title: 'Networking Basics',
            issuer: 'Cisco Networking Academy',
            date: 'Certificate',
            document: 'certifications/Networking_Basics_certificate_ARN.pdf'
        },
        {
            title: 'Python Essentials 1',
            issuer: 'Cisco Networking Academy',
            date: 'Certificate',
            document: 'certifications/Python_Essentials_1_certificate_ARN.pdf'
        },
        {
            title: 'Introduction to Cybersecurity',
            issuer: 'Cisco Networking Academy',
            date: 'Badge',
            document: 'certifications/IntrotoCybersecBadge_ARN.pdf'
        },
        {
            title: 'Introduction to Modern AI',
            issuer: 'Cisco Networking Academy',
            date: 'Badge',
            document: 'certifications/IntrotoModernAIBadge_ARN.pdf'
        },
        {
            title: 'JavaScript Essentials 1',
            issuer: 'Cisco Networking Academy',
            date: 'Badge',
            document: 'certifications/JavaScriptEssentials1Badge_ARN.pdf'
        },
        {
            title: 'Networking Basics',
            issuer: 'Cisco Networking Academy',
            date: 'Badge',
            document: 'certifications/NetworkingBasicsBadge_ARN.pdf'
        },
        {
            title: 'Python Essentials 1',
            issuer: 'Cisco Networking Academy',
            date: 'Badge',
            document: 'certifications/PythonEssentials1Badge_ARN.pdf'
        }
    ]
};
