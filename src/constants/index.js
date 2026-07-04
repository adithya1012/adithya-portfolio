import {
  linkedin,
  gge,
  devassist,
  bugclassification,
  chatbot,
  vtu,
  mobile,
  backend,
  creator,
  web,
  purdue,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  aws,
  docker,
  kubernetes,
  terraform,
  python,
  java,
  jira,
  pandas,
  numpy,
  jenkins,
  meta,
  starbucks,
  intel,
  metricstream,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mie,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: `${import.meta.env.BASE_URL}Adithya_Resume.pdf`,
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Cloud Software Engineer",
    icon: backend,
  },
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
];

const technologies = [
  // {
  //     name: "HTML 5",
  //     icon: html,
  // },
  // {
  //     name: "CSS 3",
  //     icon: css,
  // },
  // {
  //     name: "JavaScript",
  //     icon: javascript,
  // },
  // {
  //     name: "TypeScript",
  //     icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //     name: "Redux Toolkit",
  //     icon: redux,
  // },
  // {
  //     name: "Tailwind CSS",
  //     icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //     name: "Three JS",
  //     icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Jira",
    icon: jira,
  },
  // {
  //     name: "Pandas",
  //     icon: pandas,
  // },
  // {
  //     name: "NumPy",
  //     icon: numpy,
  // },
];

const skills = [
  {
    title: "Programming Languages",
    color: "blue-text-gradient",
    items: ["Python", "TypeScript", "C++", "Java", "SQL", "Shell"],
  },
  {
    title: "Frameworks & Libraries",
    color: "green-text-gradient",
    items: [
      "React",
      "Node.js",
      "Flask",
      "Django",
      "FastAPI",
      "Spring Boot",
      "Plotly",
      "Dash",
      "NumPy",
      "Pandas",
      "Qt",
      "Next.js",
    ],
  },
  {
    title: "DevOps & Systems",
    color: "pink-text-gradient",
    items: [
      "AWS (S3, EC2, EBS, Lambda)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Jenkins",
      "OAuth 2.0",
      "Git",
      "Jira",
      "Kafka",
      "REST",
      "Data Structures & Algorithms",
      "System Design",
      "Distributed Systems",
    ],
  },
  {
    title: "Databases & AI/ML",
    color: "orange-text-gradient",
    items: [
      "SQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Machine Learning",
      "NLP",
      "LLM",
      "RAG",
    ],
  },
  {
    title: "AI Tools & Agentic Coding",
    color: "blue-text-gradient",
    items: [
      "Claude Code",
      "GitHub Copilot",
      "Cursor",
      "Cline",
      "OpenAI Codex",
      "MCP",
    ],
  },
];

const experiences = [
  {
    title: "Development Intern",
    company_name: "Medical Informatics Engineering",
    icon: mie,
    iconBg: "#6d6f01",
    // iconBg: "white",
    date: "Feb 2025 - Present",
    points: [
      "Integrated a RAG pipeline in Ozwell.ai indexing patient data in ChromaDB, targeting a 50% query accuracy gain, and published a custom Model Context Protocol (MCP) server on PyPI enabling LLM clients to access NASA APIs and present real-time data. [[LINK](https://pypi.org/project/nasa-mcp-server/)]",
      "Contributed to PulseVault, a HIPAA-compliant video storage platform, building React components and Fastify REST APIs (HL7/FHIR-aligned) for resumable uploads and HLS adaptive streaming, with storage via AWS S3/R2.",
      "Building Pulse, an Android video editing application using React Native. Implemented a secure end-to-end OAuth 2.0 authentication system with PKCE, JWT token lifecycle, and deep-link based mobile login. [[LINK](https://play.google.com/store/apps/details?id=com.mieweb.pulse)]",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "INTEL CORPORATION",
    icon: intel,
    iconBg: "#0c3a41",
    // iconBg: "white",
    date: "May 2021 - Jul 2023",
    points: [
      "Developed a Windows application (.exe) for the Edge Software Hub project as part of a two-engineer team, optimizing efficiency through multithreading, parallel programming, and OOP concepts, which improved application performance.",
      "Managed DevOps operations for the internal Management Console project, leading the setup and seamless configuration of Cloud Foundry and Jenkins, achieving a 20% reduction in deployment time.",
      "Implemented an EC2 plugin in Jenkins to spin instances in AWS for Jenkins nodes, reducing infrastructure costs by 30%. Utilized Terraform to create AWS services through Jenkins, enhancing automation and efficiency in the process.",
    ],
  },
  {
    title: "Cloud Software Engineer",
    company_name: "METRICSTREAM",
    icon: metricstream,
    iconBg: "#03522a",
    // iconBg: "white",
    date: "Aug 2019 - May 2021",
    points: [
      "Built RESTful APIs with Java Spring Boot to expose JIRA project and team-performance data from a PostgreSQL database, serving analytics dashboards used by Managers and Directors for data-driven decisions.",
      "Implemented data-access layers using Spring Data JPA to query and transform daily JIRA data from Postgres, powering dashboards that improved visibility into team metrics and project-tracking efficiency by 40%.",
      "Designed and automated REST endpoints serving aggregated analytics, reducing manual reporting work by 70% for Managers/Directors presenting to Board members.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const education = [
  {
    title: "Master of Science, Computer Science",
    company_name: "Purdue University",
    icon: purdue,
    iconBg: "#45441c",
    // iconBg: "white",
    date: "Aug 2023 - May 2025",
    points: [
      "GPA: 4.0",
      "Courses: Algorithms, Web Development, Crypto Network Security, Databases Design, NLP, Deep Learning, Cloud Computing",
    ],
  },
  {
    title: "Bachelor of Engineering, Information Science",
    company_name: "Visvesvaraya Technological University",
    icon: vtu,
    iconBg: "#1b3b0f",
    // iconBg: "white",
    date: "Aug 2015 - Jul 2019",
    points: [
      "GPA: 3.2",
      "Courses: Data Structures, Unix, DBMS, Artificial Intelligence, Operating System, Machine Learning, Software Engineering",
    ],
  },
];

const projects = [
  {
    name: "DevAssist AI",
    description:
      "Built a VS Code extension leveraging multiple LLMs for prompt-based code generation, reducing coding effort by 30%. Designed tools like Read/Write File and Execute Command for real-time editing and debugging. Integrated specialized tools like Ask Follow-up Question and List Files, standardizing LLM responses for efficient real-time code editing.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "Code Generation",
        color: "green-text-gradient",
      },
      // {
      //     name: "css",
      //     color: "pink-text-gradient",
      // },
    ],
    image: devassist,
    source_code_link:
      "https://github.com/adithya1012/DevAssist_AI/blob/main/DevAssistAI%20-%20Research%20Symposium%20Poste_rev1r.pdf",
  },
  {
    name: "MERN AI Chatbot",
    description:
      "Created an chatbot platform that combines the capabilities of ChatGPT and Google Gemini API to deliver integrated responses to user queries. The system is designed for seamless communication and efficient processing, allowing users to receive comprehensive outputs from both AI models on a single platform.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Chatbot Development",
        color: "pink-text-gradient",
      },
      // {
      //     name: "mongodb",
      //     color: "green-text-gradient",
      // },
    ],
    image: chatbot,
    source_code_link: "https://github.com/adithya1012/MERN-AI-ChatBot",
  },
  {
    name: "Bug Classification",
    description:
      "Developed a bug classification model using advanced NLP techniques for accurate categorization. Integrated Naive Bayes with TF-IDF and engineered a neural network (Multi-Layer Perceptron) with Word2Vec embeddings. Fine-tuned transformer models like BERT for optimal classification performance.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Neural Networks",
        color: "pink-text-gradient",
      },
    ],
    image: bugclassification,
    source_code_link:
      "https://github.com/adithya1012/nlp_bug_classification/blob/main/NLP_Project_finalpaper.pdf",
  },
  // {
  //   name: "Global Gate Way",
  //   description:
  //     "Implemented Agile methodology for iterative development, focusing on dynamic content delivery and scalable backend processing. Developed a responsive user interface to optimize user experience and ensured reliability through comprehensive unit and functional testing. The application was deployed for easy access.",
  //   tags: [
  //     {
  //       name: "Web Dev",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Full-Stack Development",
  //       color: "green-text-gradient",
  //     },
  //     // {
  //     //     name: "css",
  //     //     color: "pink-text-gradient",
  //     // },
  //   ],
  //   image: gge,
  //   source_code_link: "https://github.com/adithya1012/global_gateway_edu",
  // },
];

export {
  services,
  technologies,
  skills,
  experiences,
  testimonials,
  projects,
  education,
};
