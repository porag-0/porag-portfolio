import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "diu-hospital-management",
    title: "DIU Hospital Management System",
    subtitle: "Desktop Application for Healthcare Administrative Operations",
    status: "Completed",
    category: "Desktop Applications",
    shortDescription:
      "A Java Swing-based hospital management desktop application designed to organize and streamline healthcare operations, staff management, and patient workflows.",
    isFeatured: true,
    order: 1,
    tags: ["Java", "Java Swing", "OOP", "Desktop Application", "GUI"],
    problem:
      "Managing routine hospital workflows—including patient records, doctor scheduling, and departmental coordination—often relies on manual record-keeping or disjointed spreadsheets, resulting in administrative delays and data synchronization challenges.",
    solution:
      "Built a desktop application with an intuitive graphical interface using Java Swing. The system standardizes common hospital workflows into dedicated operational modules, allowing administrators and receptionists to manage patient admissions, appointments, and departmental records from a single desktop environment.",
    features: [
      "Patient Registration and Records: Profile management and admission details",
      "Doctor & Staff Directory: Departmental assignments and availability tracking",
      "Appointment Scheduling: Booking and viewing doctor consultations",
      "Department Management: Structured departmental grouping and assignments",
      "Billing & Invoicing: Basic fee calculation and transaction record generation",
      "Administrative Login: Role-based password-protected authentication interface"
    ],
    technicalImplementation: [
      "Modular Object-Oriented Architecture: Applied core OOP principles including encapsulation for patient/doctor entities, inheritance for user roles, and abstraction for data management",
      "Java Swing GUI: Designed standard forms, tables, and dialog interfaces with event listeners for input validation",
      "Structured Data Handling: Organized patient and appointment records with robust exception handling to prevent runtime crashes"
    ],
    challengesAndLearnings: [
      "Handling desktop UI layout resizing and component alignment using Java Swing layout managers",
      "Managing state synchronization between different active dialog windows and tables",
      "Designing clean class hierarchies to represent real-world hospital workflows effectively"
    ],
    githubUrl: "", // Placeholder: [ADD GITHUB URL]
    liveDemoUrl: "", // Desktop application - no live web URL
    accentColor: "#FF6B35",
    iconName: "Activity"
  },
  {
    id: "factcheck-ai",
    title: "FactCheck-AI",
    subtitle: "AI-Assisted Claim Verification & Information Review Prototype",
    status: "Prototype",
    category: "AI / Experiments",
    shortDescription:
      "An exploratory fact-verification web application leveraging FastAPI and search API integrations to retrieve supporting references and analyze factual claims.",
    isFeatured: true,
    order: 2,
    tags: ["Python", "FastAPI", "HTTPX", "Search APIs", "AI Verification", "REST API"],
    problem:
      "Online misinformation spreads rapidly across social media platforms and news feeds. Manually searching for cross-references, primary sources, and credible context for viral claims is time-consuming for everyday readers.",
    solution:
      "Architected a lightweight verification pipeline using Python and FastAPI. The system accepts user-submitted statements, queries search APIs via asynchronous HTTPX requests to find contextual references, and prepares structured source summaries for examination.",
    features: [
      "Claim Input Interface: Straightforward user input for text-based statements",
      "Asynchronous Search Retrieval: Uses HTTPX for non-blocking concurrent source queries",
      "Context & Source Extraction: Gathers relevant snippets and publishing sources",
      "Verification Summary Card: Visual presentation of retrieved evidence and source links",
      "RESTful Backend: Clean endpoint documentation generated automatically with Swagger/OpenAPI"
    ],
    technicalImplementation: [
      "FastAPI Framework: High-performance asynchronous endpoint architecture",
      "HTTPX Client: Async HTTP connection pooling and request timeout handling",
      "Structured Request Models: Pydantic schemas validating claims and API payloads",
      "Error Handling: Graceful fallbacks when external search endpoints encounter rate limits"
    ],
    challengesAndLearnings: [
      "Managing external API latency and handling edge cases where search results are inconclusive",
      "Recognizing the critical importance of presenting retrieved sources transparently rather than making definitive automated accuracy claims",
      "Architecting clean async Python code to prevent thread blocking during network I/O"
    ],
    githubUrl: "", // Placeholder: [ADD GITHUB URL]
    liveDemoUrl: "", // Prototype
    accentColor: "#3B82F6",
    iconName: "SearchCheck"
  },
  {
    id: "smart-rfid-attendance",
    title: "Smart RFID Attendance System",
    subtitle: "IoT & Microcontroller-Based Identification Hardware System",
    status: "Completed",
    category: "IoT / Embedded",
    shortDescription:
      "An embedded attendance tracking prototype built with an ESP32 microcontroller, RC522 RFID reader, and I2C LCD display for contact-free identification.",
    isFeatured: true,
    order: 3,
    tags: ["ESP32", "RFID (RC522)", "Embedded C/C++", "I2C LCD", "IoT", "Hardware"],
    problem:
      "Paper-based attendance sheets in classrooms or workshops are slow, prone to proxy attendance, and difficult to compile into digital records efficiently.",
    solution:
      "Engineered a dedicated hardware attendance terminal combining an ESP32 microcontroller with an RC522 RFID scanner and a 16x2 I2C LCD. When an authorized RFID tag or card is swiped, the system validates the unique UID and provides immediate visual feedback.",
    features: [
      "Contactless Card Detection: RC522 RFID sensor reading 13.56 MHz cards and keyfobs",
      "Instant Visual Feedback: 16x2 alphanumeric LCD with I2C backpack showing user confirmation and timestamps",
      "ESP32 Microcontroller Core: Low-power, fast processing with onboard Wi-Fi capabilities for future cloud sync",
      "Status LEDs & Audio Buzzer: Audible and visual confirmation for recognized cards",
      "Modular Circuit Design: Prototyped on breadboard with clean pin mapping and power regulation"
    ],
    technicalImplementation: [
      "Embedded C/C++ Programming: Written using Arduino IDE / PlatformIO framework",
      "SPI & I2C Bus Communication: Configured SPI for the RFID module and two-wire I2C for the LCD display",
      "UID Matching Logic: Efficient memory search algorithm comparing scanned card IDs against local verification arrays"
    ],
    challengesAndLearnings: [
      "Managing I2C communication bus addresses and noise reduction on breadboard jumpers",
      "Understanding microcontroller memory limitations and non-volatile storage routines",
      "Writing reliable debounce and scan timeout routines to prevent duplicate triggers on a single swipe"
    ],
    githubUrl: "", // Placeholder: [ADD GITHUB URL]
    liveDemoUrl: "", // Hardware project
    accentColor: "#10B981",
    iconName: "Cpu"
  },
  {
    id: "retailflow-bd",
    title: "RetailFlow BD",
    subtitle: "Mobile-First Point-of-Sale & Retail Management Platform",
    status: "Concept",
    category: "Web Development",
    shortDescription:
      "A proposed business management and POS platform tailored to small and medium retailers in Bangladesh, featuring inventory, credit ledger, and mobile payments.",
    isFeatured: true,
    order: 4,
    tags: ["Product Concept", "Python", "MySQL", "JavaScript", "POS", "FinTech"],
    problem:
      "Small retail businesses in Bangladesh (grocery shops, pharmacies, local stores) frequently track inventory on paper ledgers and maintain customer credit ('Bakir Khata') manually, leading to lost revenue and inaccurate stock records.",
    solution:
      "Conceived RetailFlow BD as an accessible, localized business suite with barcode scanning, automated expiry alerts, customer credit tracking, and seamless mobile financial service (bKash/Nagad) reconciliation.",
    features: [
      "Billing & Point of Sale: Fast product lookup and bill generation",
      "Customer Credit Ledger (Bakir Khata): Digital tracking of customer dues, payments, and balances",
      "Inventory & Stock Tracking: Real-time stock counts with low-inventory notifications",
      "Product Expiry Monitoring: Essential alerts for pharmacy and grocery goods",
      "Receipt Printing & SMS: Support for portable Bluetooth thermal printers and SMS summaries",
      "Local Payment Concepts: Planned integration points for bKash and Nagad payment confirmation"
    ],
    technicalImplementation: [
      "Relational Database Schema: Conceptual entity relationship models for transactions, customer accounts, and stock ledgers",
      "Mobile-First Responsive Interface: Optimized touch targets for smartphone and tablet operation on shop counters",
      "Python Backend Concept: Lightweight API architecture designed to run on affordable cloud or local instances"
    ],
    challengesAndLearnings: [
      "Designing workflows that respect the fast pace of local counter transactions",
      "Balancing simple user interfaces with comprehensive accounting and credit ledger needs",
      "Researching local hardware integration constraints like low-cost Bluetooth thermal printers"
    ],
    githubUrl: "", // Placeholder: [ADD GITHUB URL]
    liveDemoUrl: "", // Conceptual project
    accentColor: "#F59E0B",
    iconName: "ShoppingBag"
  },
  {
    id: "job-recruitment-portal",
    title: "Job Recruitment Portal",
    subtitle: "Role-Based Career & Candidate Management Web Platform",
    status: "Concept",
    category: "Web Development",
    shortDescription:
      "A modern web portal concept connecting job seekers, company recruiters, and administrators with role-based dashboards and application tracking.",
    isFeatured: false,
    order: 5,
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MySQL", "JWT"],
    problem:
      "Small hiring teams need a straightforward, uncluttered system to advertise job vacancies and review candidate submissions without the complexity and expense of enterprise talent suites.",
    solution:
      "Designed a full-stack recruitment architecture featuring distinct role workflows for Candidates (browse, apply, track status), Recruiters (post openings, review applicants), and Admins (verify accounts and moderate listings).",
    features: [
      "Multi-Role Authentication: Candidate, Recruiter, and Admin role permissions",
      "Job Catalog & Search: Filtering by department, location, job type, and experience level",
      "Recruiter Management Dashboard: Create listings, view submitted resumes, update application stages",
      "Candidate Application Tracking: Real-time tracking of submitted applications",
      "Modern Responsive Layout: Styled with Tailwind CSS for clean presentation across devices"
    ],
    technicalImplementation: [
      "Component-Based Frontend: Built with React, TypeScript, and Vite for type safety and fast re-renders",
      "RESTful API Architecture: Express backend concepts with structured JSON endpoints and JWT token authentication",
      "Relational Data Design: Normalized MySQL tables for users, roles, job postings, and applications"
    ],
    challengesAndLearnings: [
      "Designing clear permission boundaries and state access rules for different user roles",
      "Structuring relational database schemas to efficiently link applicant profiles with multiple job postings",
      "Practicing component reuse and design token consistency across diverse dashboard views"
    ],
    githubUrl: "", // Placeholder: [ADD GITHUB URL]
    liveDemoUrl: "", // Concept
    accentColor: "#8B5CF6",
    iconName: "Briefcase"
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    subtitle: "Hierarchical Productivity & Academic Workflow Architecture",
    status: "Concept",
    category: "Concepts",
    shortDescription:
      "A structured productivity application designed around hierarchical task breakdown: Spaces → Projects/Courses → Topics → Tasks → Subtasks.",
    isFeatured: false,
    order: 6,
    tags: ["UI/UX Design", "Productivity", "React", "TypeScript", "Workflow Architecture"],
    problem:
      "Most to-do apps are either too flat (simple check-lists) or overly complex for students balancing multiple university courses, lab assignments, and personal software milestones.",
    solution:
      "Formulated TaskFlow around an intuitive 5-layer hierarchy: Spaces (University, Personal, Projects) → Courses / Projects → Topics → Tasks → Subtasks. This hierarchy mirrors real-world academic syllabi and project sprint boards.",
    features: [
      "Deep Hierarchical Organization: Spaces → Courses/Projects → Topics → Tasks → Subtasks",
      "Preset Contexts: Out-of-the-box templates for University, Home, and Work",
      "Progress Visualizations: Automatic completion percentage roll-ups from subtasks to parent topics",
      "Color Coding & Iconography: Custom visual tags for quick scanning of urgent tasks",
      "Adaptive Theme Support: Built-in dark and light modes tailored for long study sessions"
    ],
    technicalImplementation: [
      "Recursive Data Structures: State models supporting nested task trees with cascading completion status",
      "Local State Persistence: Client-side storage schemas enabling offline-first task updates",
      "Accessible Interface Design: Keyboard navigation and intuitive drag/reorder interactions"
    ],
    challengesAndLearnings: [
      "Managing recursive state mutations without performance bottlenecks in React",
      "Preventing visual clutter when displaying deeply nested project trees on mobile screens",
      "Crafting intuitive UX transitions between broad project overviews and granular subtask details"
    ],
    githubUrl: "", // Placeholder: [ADD GITHUB URL]
    liveDemoUrl: "", // Concept
    accentColor: "#EC4899",
    iconName: "CheckSquare"
  },
  {
    id: "local-ai-chatbot",
    title: "Local AI Chatbot",
    subtitle: "Self-Hosted LLM Interface via LM Studio & Mistral",
    status: "Prototype",
    category: "AI / Experiments",
    shortDescription:
      "An experimental local AI assistant running offline models through LM Studio, connected to a custom web interface via Python HTTP middleware.",
    isFeatured: false,
    order: 7,
    tags: ["LM Studio", "Mistral 7B", "Python", "Local LLM", "HTTP API", "Offline AI"],
    problem:
      "Relying entirely on cloud AI APIs incurs recurring subscription costs, requires constant internet access, and raises data privacy concerns for sensitive local coding or notes.",
    solution:
      "Created an experimental local pipeline hosting an open-weight Mistral language model locally using LM Studio's local inference server. Built a clean web front-end and lightweight Python middleware to stream responses completely offline.",
    features: [
      "100% Offline Inference: Runs on consumer hardware with zero external API calls or telemetry",
      "LM Studio Integration: Connects to local OpenAI-compatible inference endpoints",
      "Streaming Response Interface: Real-time token streaming for low-latency conversational feel",
      "System Prompt Customization: Configurable role prompts tailored for coding and technical explanations",
      "Privacy-Preserving Architecture: Conversations stay strictly on the local machine"
    ],
    technicalImplementation: [
      "Local API Bridge: Python server forwarding requests to LM Studio's localhost port",
      "Server-Sent Events / Chunked Streaming: Parsing token streams in real-time on the frontend",
      "Error Recovery: Detects when local model server is paused or offline, presenting helpful diagnostics"
    ],
    challengesAndLearnings: [
      "Optimizing prompt context length and temperature settings to balance speed and coherence on local GPU/CPU",
      "Handling stream reconnection and partial token rendering in web interfaces",
      "Understanding the operational differences between quantized local models and hosted cloud APIs"
    ],
    githubUrl: "", // Placeholder: [ADD GITHUB URL]
    liveDemoUrl: "", // Local experimental setup
    accentColor: "#06B6D4",
    iconName: "Bot"
  }
];
