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
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "https://drive.google.com/file/d/1RiXF4VeucZbY3I856M50IMNXsJUKWpZn/view?usp=drive_link",
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
  // {
  //   title: "Machine Learning Engineer",
  //   icon: creator,
  // },
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

const experiences = [
  {
    title: "Development Intern",
    company_name: "Medical Informatics Engineering",
    icon: mie,
    iconBg: "#6d6f01",
    // iconBg: "white",
    date: "Feb 2025 - Present",
    points: [
      "Integrating a RAG pipeline in Ozwell.ai to retrieve patient data from WebChartNow.com, index it in ChromaDB, and aiming to boost query accuracy by 50% with patient specific insights.",
      "Published a custom Model Context Protocol (MCP) server on PyPI to enable LLM-based clients to access and communicate with NASA open-source APIs, retrieve mission data, and present real-time results to users. [[LINK](https://pypi.org/project/nasa-mcp-server/)]",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "INTEL TECHNOLOGY",
    icon: intel,
    iconBg: "#0c3a41",
    // iconBg: "white",
    date: "May 2021 - Jul 2023",
    points: [
      "Developed Windows application (.exe) for Edge Software Hub project. Was part of the team comprising two engineers. Optimising the efficiency of .exe through incorporating multithreading, parallel programming, and other OOP concepts.",
      "Taking responsibility on DevOps for the Management Console (internal) project, including setup and configuration of Cloud Foundry and Jenkins.",
      "Implemented Ec2 plugin in Jenkins that will spin dynamic instances in AWS for Jenkins’s node. This reduced 30% cost for the company from an infrastructure perspective. Worked on Proof of Concepts on Terraform for creating AWS service based on the user requirements through Jenkins.",
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
      "Developed Metrics Analytics Dashboard is a one stop Manager/Director level-oriented tool to derive meaningful insights and enable data driven decisions.",
      "Data was extracted from JIRA using JIRA client API by running a Job Scheduler every day and developed dash-boards/charts like Sprint projection, Release coverage, Velocity chart, Defect removal efficiency and many more using Python and Plotly Dash.",
      "This Analytics Dashboard has been automated to reduce manual work by 70% for Manager/Director to derive insights and present it to Board members.",
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
  experiences,
  testimonials,
  projects,
  education,
};
