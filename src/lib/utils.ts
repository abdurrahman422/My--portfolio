export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const navItems = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Expertise", href: "expertise" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Architecture", href: "architecture" },
  { label: "Contact", href: "contact" },
];

export const socialLinks = {
  github: "https://github.com/abdurrahman422",
  linkedin: "https://linkedin.com/in/abdurrahman422",
  email: "abdurrahman422487@gmail.com",
};

export const personalInfo = {
  name: "MD. ABDUR RAHMAN",
  title: "CSE Student | AI System Designer | UI/UX Enthusiast",
  location: "Bangladesh",
  description:
    "I design intelligent systems, AI assistant experiences, and modern application interfaces focused on automation, usability, and futuristic interaction.",
};

export const statsData = [
  { label: "Projects Built", value: 7, suffix: "+", icon: "code" },
  { label: "Systems Designed", value: 5, suffix: "", icon: "layout" },
  { label: "AI Concepts Applied", value: 8, suffix: "+", icon: "brain" },
  { label: "Firebase Integrations", value: 4, suffix: "+", icon: "database" },
];

export const expertiseData = [
  {
    title: "AI Assistant Architecture",
    desc: "Designing modular, intent-driven AI assistants with voice/text input, skill engines, and multi-screen orchestration.",
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Intelligent Workflow Design",
    desc: "Building automated workflows that eliminate repetitive tasks through smart pipeline architecture.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Voice/Text Command Systems",
    desc: "Implementing dual-input command interfaces with NLP-based intent extraction and context routing.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Firebase System Integration",
    desc: "Architecting real-time backends with authentication, Firestore, and cloud function orchestration.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "UI/UX Design",
    desc: "Crafting futuristic interfaces with glassmorphism, micro-interactions, and intelligent system aesthetics.",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "System Design & Planning",
    desc: "Approaching every project with scalable architecture, modular components, and production-grade thinking.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Automation Concepts",
    desc: "Developing self-operating pipelines with intelligent error handling and state management.",
    color: "from-purple-500 to-cyan-500",
  },
  {
    title: "Database Architecture",
    desc: "Designing normalized schemas, efficient queries, and scalable data models for complex systems.",
    color: "from-cyan-500 to-green-500",
  },
  {
    title: "Intent Detection Concepts",
    desc: "Building NLP pipelines that extract user intent and route to appropriate system handlers.",
    color: "from-green-500 to-purple-500",
  },
  {
    title: "AI Interaction Experience",
    desc: "Designing conversational interfaces that feel natural, responsive, and intelligently adaptive.",
    color: "from-blue-500 to-purple-500",
  },
];

export const architectureItems = [
  {
    title: "Assistant Command Pipeline",
    desc: "Voice/text input → Intent detection → Skill routing → Execution → Response",
    items: ["Speech/Text Capture", "NLP Intent Extraction", "Context Analysis", "Skill Module Dispatch", "Output Generation"],
    gradient: "from-purple-500/10 to-blue-500/10",
  },
  {
    title: "Intent Detection Flow",
    desc: "Raw input → Tokenization → Entity recognition → Intent classification → Parameter extraction",
    items: ["Input Preprocessing", "Tokenization & Parsing", "Entity Recognition", "Intent Mapping", "Confidence Scoring"],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Database Schema Design",
    desc: "Entity-relationship modeling → Normalization → Index strategy → Query optimization",
    items: ["ER Diagram Design", "Normalization (3NF)", "Index Planning", "Query Profiling", "Migration Strategy"],
    gradient: "from-cyan-500/10 to-purple-500/10",
  },
  {
    title: "Automation Workflow",
    desc: "Trigger → Condition evaluation → Task execution → Monitoring → Feedback loop",
    items: ["Event Triggers", "Conditional Logic", "Task Orchestration", "State Tracking", "Error Recovery"],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "System Architecture Layering",
    desc: "Presentation → Application → Business Logic → Data Access → Storage",
    items: ["UI/Presentation Layer", "API Gateway", "Business Logic Layer", "Data Access Layer", "Persistence Layer"],
    gradient: "from-pink-500/10 to-blue-500/10",
  },
  {
    title: "AI Interaction Pipeline",
    desc: "User input → Context assembly → Model inference → Response formatting → Delivery",
    items: ["Context Window", "Prompt Engineering", "Model Inference", "Output Sanitization", "Response UX"],
    gradient: "from-blue-500/10 to-purple-500/10",
  },
];

export const projectDetailsData: Record<string, {
  period?: string;
  challenge: string;
  solution: string;
  architecture: { label: string; desc: string }[];
  workflow: string[];
  designDecisions: string[];
  scalability: string[];
}> = {
  "OS-Level Personal Desktop AI Assistant": {
    period: "Sep 2024 – Dec 2024",
    challenge:
      "Designing an intelligent desktop assistant that understands natural language commands, routes intents to appropriate handlers, and manages multi-screen orchestration — all while maintaining privacy-first local processing and modular extensibility.",
    solution:
      "Built a modular assistant architecture with intent classification pipeline, voice-to-text processing layer, and reactive multi-screen UI. The system separates command parsing from execution using a skill engine, enabling extensible modules without core changes.",
    architecture: [
      { label: "Voice Input", desc: "Speech recognition layer with wake-word detection and noise filtering" },
      { label: "Command Parser", desc: "NLP-based intent extraction and entity recognition from natural language" },
      { label: "Intent Router", desc: "Maps parsed intents to registered skill modules with priority handling" },
      { label: "Skill Engine", desc: "Modular execution environment supporting task scheduling and chaining" },
      { label: "UI Layer", desc: "Reactive multi-screen interface with real-time state synchronization" },
      { label: "Local Processing", desc: "Privacy-first architecture with on-device data persistence" },
    ],
    workflow: [
      "User speaks or types a command via the interface",
      "System captures audio/text and preprocesses the input",
      "Intent detection extracts meaning, entities, and parameters",
      "Router matches intent to the appropriate skill module",
      "Skill engine executes the task (search, draft, schedule, automate)",
      "UI updates across active screens with real-time state changes",
      "Feedback is delivered through voice response and visual confirmation",
    ],
    designDecisions: [
      "Modular skill architecture enables adding capabilities without core system changes",
      "Privacy-first approach processes voice and text data locally when possible",
      "Multi-screen reactive UI provides contextual awareness at a glance",
      "Dual voice/text input ensures accessibility across different usage scenarios",
    ],
    scalability: [
      "Plugin ecosystem for third-party skill module development",
      "Cloud sync for cross-device conversation continuity",
      "Advanced ML integration for contextual understanding improvements",
      "Smart home and IoT device interaction capabilities",
    ],
  },
  "Feed Mill Management System": {
    period: "Jan 2025 – Apr 2025",
    challenge:
      "Building a centralized system to manage complex feed production operations — tracking raw materials, batch production, inventory, suppliers, and sales — all while maintaining data integrity and operational transparency.",
    solution:
      "Designed a relational database architecture with normalized schemas for materials, production batches, inventory, suppliers, and sales. Built management workflows for end-to-end tracking with automated reporting and audit trails.",
    architecture: [
      { label: "Material Tracking", desc: "Raw material inventory with supplier linkage and quality logging" },
      { label: "Batch Production", desc: "Production batch management with recipe tracking and yield logging" },
      { label: "Inventory Control", desc: "Finished goods inventory with expiry tracking and stock alerts" },
      { label: "Supplier Management", desc: "Supplier records with order history and performance metrics" },
      { label: "Reporting Engine", desc: "Automated report generation for production, sales, and inventory" },
      { label: "Audit Trail", desc: "Complete operation logging for transparency and traceability" },
    ],
    workflow: [
      "Raw materials received from suppliers are logged with quality metrics",
      "Production batches are created with recipe specifications and material allocations",
      "Batch processing tracks yield, waste, and production parameters",
      "Finished goods are moved to inventory with batch traceability",
      "Sales orders are fulfilled from inventory with automatic stock deduction",
      "Automated reports are generated for management review",
      "Audit trail captures every transaction for compliance",
    ],
    designDecisions: [
      "Relational database design ensures data integrity across all operations",
      "Batch-level tracking provides full traceability from material to sale",
      "Automated reporting reduces manual effort and improves accuracy",
      "Modular design allows adding new features without disrupting existing workflows",
    ],
    scalability: [
      "Multi-location support for distributed production facilities",
      "Real-time dashboard integration for live operational monitoring",
      "API layer for third-party logistics and accounting integration",
      "Predictive analytics for demand forecasting and inventory optimization",
    ],
  },
  "National Crisis Response System": {
    period: "May 2024 – Aug 2024",
    challenge:
      "Conceptualizing a national-level coordination platform for emergency management that enables real-time resource allocation, incident tracking, and multi-agency communication during critical situations.",
    solution:
      "Designed a scalable system architecture with centralized monitoring, emergency coordination logic, and multi-agency communication channels. Focused on sustainability, real-time responsiveness, and fault-tolerant design principles.",
    architecture: [
      { label: "Incident Management", desc: "Centralized incident logging with severity classification and status tracking" },
      { label: "Resource Allocation", desc: "Real-time resource inventory and dispatch coordination logic" },
      { label: "Agency Communication", desc: "Multi-agency messaging with priority channels and escalation paths" },
      { label: "Monitoring Dashboard", desc: "Live incident map with resource positioning and status overview" },
      { label: "Scalability Layer", desc: "Distributed architecture designed for national-scale deployment" },
      { label: "Sustainability Model", desc: "Energy-efficient design with failover and disaster recovery planning" },
    ],
    workflow: [
      "Incident reported via multiple channels (call, app, web)",
      "System validates and categorizes incident with severity level",
      "Resources are allocated based on proximity and availability",
      "Agencies are notified through priority communication channels",
      "Real-time updates are pushed to all stakeholders",
      "Post-incident analysis captures response data for improvement",
    ],
    designDecisions: [
      "Distributed architecture ensures no single point of failure",
      "Priority-based communication ensures critical messages get through",
      "Scalable design can handle national-level concurrent incidents",
      "Sustainability focus reduces operational energy footprint",
    ],
    scalability: [
      "Integration with national emergency databases and systems",
      "AI-powered incident prediction and resource pre-positioning",
      "Mobile field unit support with offline capability",
      "Cross-border coordination for international emergencies",
    ],
  },
  "MediSync Healthcare System": {
    period: "Jan 2024 – Apr 2024",
    challenge:
      "Developing comprehensive healthcare system models that enable cross-provider patient record access, appointment management, and secure health data integration across multiple医疗机构.",
    solution:
      "Created logical and physical database designs, workflow diagrams, and user interaction models for a synchronized healthcare platform. Focused on data security, interoperability, and seamless patient experience.",
    architecture: [
      { label: "Patient Records", desc: "Unified patient profile with cross-provider medical history access" },
      { label: "Appointment Management", desc: "Multi-provider scheduling with conflict detection and reminders" },
      { label: "Data Integration", desc: "Secure health data exchange between hospitals, labs, and pharmacies" },
      { label: "User Interaction", desc: "Patient portal and provider dashboard with role-based access" },
      { label: "Database Schema", desc: "Normalized relational model supporting complex healthcare relationships" },
      { label: "Security Layer", desc: "Role-based access control with audit logging and compliance" },
    ],
    workflow: [
      "Patient registers and creates unified health profile",
      "Provider accesses patient history with authorized consent",
      "Appointment is scheduled with cross-provider availability check",
      "Medical records are updated and synchronized across providers",
      "Lab results are integrated and flagged for provider review",
      "Patient receives updates and prescription information",
    ],
    designDecisions: [
      "Unified patient profile eliminates data silos across providers",
      "Role-based access ensures HIPAA-compliant data security",
      "Normalized database supports complex medical relationships",
      "Interoperability focus enables integration with existing systems",
    ],
    scalability: [
      "National health ID integration for unified patient identification",
      "Telemedicine module for remote consultation support",
      "AI-assisted diagnosis suggestion and risk flagging",
      "Mobile health record access with offline sync capability",
    ],
  },
  "Reward Earning Mobile App": {
    period: "",
    challenge:
      "Building a mobile reward application with secure authentication, real-time data management, and an engaging user experience that motivates continued participation.",
    solution:
      "Developed a cross-platform Flutter application with Firebase Authentication, Cloud Firestore database, and a modern UI design focused on gamification and user engagement.",
    architecture: [
      { label: "Authentication", desc: "Firebase Auth with email/password and social login options" },
      { label: "Data Layer", desc: "Cloud Firestore for real-time data sync and offline support" },
      { label: "UI Framework", desc: "Flutter cross-platform UI with Material Design components" },
      { label: "State Management", desc: "Reactive state handling for real-time updates" },
    ],
    workflow: [
      "User registers or logs in via Firebase Authentication",
      "User completes tasks and challenges to earn rewards",
      "Reward points are updated in real-time via Firestore",
      "Dashboard displays current points, history, and achievements",
      "Users can redeem points for available rewards",
    ],
    designDecisions: [
      "Firebase provides scalable backend without server management",
      "Flutter enables single codebase for iOS and Android",
      "Real-time sync ensures consistent experience across devices",
      "Gamification elements drive user engagement and retention",
    ],
    scalability: [
      "Push notification integration for engagement",
      "Social features like leaderboards and challenges",
      "In-app purchases and premium reward tiers",
      "Admin dashboard for reward management",
    ],
  },
  "Machine Learning & AI Lab Projects": {
    period: "",
    challenge:
      "Implementing supervised and unsupervised learning algorithms on real datasets to derive actionable predictions and meaningful data clusters.",
    solution:
      "Built ML pipelines in Python using Google Colab, implementing linear regression, K-Means clustering, data preprocessing, and model evaluation with confusion matrix analysis.",
    architecture: [
      { label: "Data Preprocessing", desc: "Cleaning, normalization, feature extraction, and train-test splitting" },
      { label: "Regression Models", desc: "Linear regression implementation with gradient descent optimization" },
      { label: "Clustering", desc: "K-Means algorithm with elbow method for optimal cluster selection" },
      { label: "Evaluation", desc: "Confusion matrix, accuracy metrics, and cross-validation" },
    ],
    workflow: [
      "Dataset is loaded and analyzed for quality issues",
      "Data is preprocessed: missing values, normalization, encoding",
      "Model is trained on prepared training data",
      "Predictions are made on test data and evaluated",
      "Results are visualized with charts and confusion matrices",
    ],
    designDecisions: [
      "Python ecosystem provides robust ML libraries and visualization",
      "Google Colab enables cloud-based GPU acceleration",
      "Modular pipeline approach allows easy experimentation",
    ],
    scalability: [
      "Deep learning integration for complex pattern recognition",
      "Automated ML pipeline with hyperparameter tuning",
      "Model deployment as API endpoints",
    ],
  },
  "Image Processing Projects": {
    period: "",
    challenge:
      "Implementing fundamental image processing techniques for enhancement, filtering, and analysis of digital images with efficient algorithmic approaches.",
    solution:
      "Developed image processing pipelines in Python using OpenCV, implementing smoothing filters, gradient operations, pixel-level calculations, and image enhancement techniques.",
    architecture: [
      { label: "Smoothing Filters", desc: "Gaussian, median, and bilateral filtering for noise reduction" },
      { label: "Gradient Operations", desc: "Sobel, Prewitt, and Canny edge detection implementations" },
      { label: "Pixel Analysis", desc: "Histogram equalization, thresholding, and color space conversion" },
      { label: "Enhancement", desc: "Contrast stretching, sharpening, and morphological operations" },
    ],
    workflow: [
      "Input image is loaded and converted to appropriate color space",
      "Preprocessing applies noise reduction and normalization",
      "Core algorithm is applied (filtering, edge detection, enhancement)",
      "Post-processing refines the output for visual quality",
      "Result is compared with reference metrics for evaluation",
    ],
    designDecisions: [
      "OpenCV provides optimized implementations for real-time processing",
      "Modular pipeline allows combining multiple techniques",
      "Parameter tuning enables adaptation to different image types",
    ],
    scalability: [
      "Real-time video processing pipeline integration",
      "Deep learning-based segmentation and object detection",
      "Batch processing for large image datasets",
    ],
  },
};
