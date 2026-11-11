import {
  ai,
  androidstudio,
  art,
  aws,
  azureDO,
  bp,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  chatGPTApp,
  claude,
  clubapp,
  copilot,
  csharp,
  csn,
  css,
  dapp,
  git,
  html,
  impactQA,
  instagram,
  java,
  javascript,
  linkedin,
  linux,
  nodejs,
  python,
  queensconvent,
  reactjs,
  tally,
  twitter,
  typescript,
  verbblog,
  vit,
  weatherapp,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
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
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
    link: "https://github.com/richk21/verb",
  },
  {
    title: "Azure Cloud & DevOps",
    icon: azureDO,
    link: "https://www.linkedin.com/in/richa-kiran-9557b8219/",
  },
  {
    title: "AI-Assisted Developer",
    icon: ai,
    link: "https://github.com/richk21",
  },
  {
    title: "Artist",
    icon: art,
    link: "https://www.instagram.com/richa_art21/",
  },
];

// TODO: your resume also lists SQL, Microsoft Azure (App Services, Application
// Insights), Firebase, Redux, MUI, Jest and Postman. To show them here, add an
// icon for each to ../assets, import it above, and add an entry below.
const technologies = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Azure DevOps",
    icon: azureDO,
  },
  {
    name: "Claude Code",
    icon: claude,
  },
  {
    name: "Copilot",
    icon: copilot,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "AWS EC2",
    icon: aws,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const education = [
  {
    school: "Vellore Institute of Technology, Vellore",
    field: "B. Tech in Computer Science and Engineering",
    icon: vit,
    iconBg: "#E6DEDD",
    graddDate: "August 2024",
    location: "Vellore, Tamil Nadu, India",
    points: [
      "Graduated summa cum laude (3.63 GPA / 9.07 CGPA) with coursework spanning algorithms, computer systems, security, cloud, and blockchain.",
      "Lead app developer for Innovator's Quest, VIT's technical club.",
    ],
  },
  {
    school: "Queen's Convent School, Rohini",
    field: "Senior Secondary (Grade XII)",
    icon: queensconvent,
    iconBg: "#E6DEDD",
    graddDate: "March 2020",
    location: "Rohini, Delhi, India",
    points: [
      "Achieved 94.2% in Grade XII, maintaining good academic performance.",
    ],
  },
  {
    school: "Cambridge School, Noida",
    field: "Secondary (Grade X)",
    icon: csn,
    iconBg: "#E6DEDD",
    graddDate: "March 2018",
    location: "Noida, Uttar Pradesh, India",
    points: [
      "Graduated Grade X with 92.4%, demonstrating strong academic performance.",
    ],
  },
];

const experiences = [
  {
    title: "Software Developer (Full-Stack)",
    company_name: "bp",
    icon: bp,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Progressed from front-end to full-stack development, building features with React & TypeScript on the front end and C#/.NET on the back end.",
      "Designed and implemented REST APIs integrated with central database systems.",
      "Collaborated across teams on Semarchy data-integration initiatives spanning multiple business units.",
      "Applied software design patterns to build reusable, maintainable components.",
      "Debugged application failures and exceptions with Azure Monitoring tools such as Application Insights.",
      "Worked with Azure infrastructure, including App Services deployments and Kudu for diagnostics and troubleshooting.",
      "Used Git and Azure DevOps (ADO) for version control, CI/CD pipelines, peer code reviews and Agile workflows.",
      "Use AI coding tools, Claude Code and GitHub Copilot, to speed up development and documentation,  with proper context management and model switching for optimal performance and token usage.",
    ],
  },
  {
    title: "Front-end Development Intern",
    company_name: "ImpactQA",
    icon: impactQA,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Worked on Project Falcon, a software testing tool made for both technical and non-technical users.",
      "Created its front end in React and Bootstrap CSS.",
      "Used Postman to integrate with REST APIs and test the tool's functionality.",
    ],
  },
];

const projects = [
  {
    name: "Verb - Incident Reporting & Review Platform",
    status: "active",
    description:
      "A platform where engineering teams log, review and publish incident reports, with organization-scoped accounts, role-based access (contributor, reviewer, auditor, admin) and a draft-to-publish review workflow. React/TypeScript front end with Redux Toolkit, Redux-Saga and MUI, containerised with Docker and Nginx. Under active development.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: verbblog,
    source_code_link: "https://github.com/richk21/verb",
    live_demo_link: "https://verbblog.netlify.app/",
  },
  {
    name: "Tally - Liveability Dashboard",
    status: "completed",
    description:
      "A full-stack web app that collects resident survey responses and turns them into interactive dashboards (amenity ratings, living standards, age spread) so people can compare localities before relocating. Built for the KendoReact component competition on dev.to.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "KendoReact",
        color: "pink-text-gradient",
      },
    ],
    image: tally,
    source_code_link: "https://github.com/richk21/tally-frontend",
    live_demo_link: "https://tally-survey-app.netlify.app/",
  },
  {
    name: "Brew Notes(DApp)",
    status: "completed",
    description:
      "Visitors can write a feedback message to me through this decentralized application wherein they will have to first connect their metamask wallet to this website and send their message by confirming the transaction through metamask.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "SmartContracts",
        color: "pink-text-gradient",
      },
    ],
    image: dapp,
    source_code_link: "https://github.com/richk21/DApp",
  },
  {
    name: "ChatGPT Chat App",
    status: "completed",
    description:
      "Interactive Chatting Application with ChatGPT for the ease of use of the AI Powered tool from android devices.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI-API",
        color: "green-text-gradient",
      },
      {
        name: "UI",
        color: "pink-text-gradient",
      },
    ],
    image: chatGPTApp,
    source_code_link: "https://github.com/richk21/ChatGPT-Android-App",
  },
  {
    name: "React Weather App",
    status: "completed",
    description:
      "This is an interactive weather app made in react using the Geolocation API and Unsplash API. It uses the geolocation API to fetch weather details of a location and displays an appropriate background image based on the location and its weather.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "GeolocationAPI",
        color: "green-text-gradient",
      },
      {
        name: "UnsplashAPI",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/richk21/Weather-App-React",
  },
  {
    name: "IQuest IOS App",
    status: "completed",
    description: "University club portfolio app made in Swift, XCode.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Xcode",
        color: "green-text-gradient",
      },
      {
        name: "VIT",
        color: "pink-text-gradient",
      },
    ],
    image: clubapp,
    source_code_link: "https://github.com/richk21/IQuestIOS_App",
  },
];

const contactlogos = [
  {
    index: 1,
    name: "instagram",
    logo: instagram,
    url: "https://www.instagram.com/richa_art21/",
  },
  {
    index: 2,
    name: "twitter",
    logo: twitter,
    url: "https://twitter.com/richa25424629",
  },
  {
    index: 3,
    name: "linkedin",
    logo: linkedin,
    url: "https://www.linkedin.com/in/richa-kiran-9557b8219/",
  },
];

const certifications = [
  {
    name: "Microsoft Azure Fundamentals(AZ-900)",
    company: "Microsoft",
    description:
      "Achieved AZ-900 Microsoft Azure Fundamentals certification, demonstrating foundational knowledge of cloud computing and Azure services. (Code: 9dau-sF77)",
    tags: [
      {
        name: "Microsoft",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: cert6,
    source_code_link:
      "https://www.certiport.com/Portal/Pages/CredentialVerification.aspx",
  },
  {
    name: "Microsoft Security, Compliance and Identity Fundamentals(SC-900)",
    company: "Microsoft",
    description:
      "I gained a solid understanding of essential concepts in security, compliance, and identity management. (Code: wvzb8-Fa87)",
    tags: [
      {
        name: "Microsoft",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "SecurityFundamentals",
        color: "pink-text-gradient",
      },
    ],
    image: cert5,
    source_code_link:
      "https://www.certiport.com/Portal/Pages/CredentialVerification.aspx",
  },
  {
    name: "Block.one: Getting Started with Smart Contracts",
    company: "Google Cloud",
    description:
      "Learned how to build, deploy and call actions on a smart contract.",
    tags: [
      {
        name: "GoogleCloud",
        color: "blue-text-gradient",
      },
      {
        name: "SmartContracts",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: cert1,
    source_code_link:
      "https://www.coursera.org/account/accomplishments/verify/G7DL3Z5B7QRL",
  },
  {
    name: "Introduction to Docker",
    company: "Google Cloud",
    description:
      "Learned to create, run, and debug containers, and manage images with Google Container Registry.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Containers",
        color: "green-text-gradient",
      },
      {
        name: "DevOps",
        color: "pink-text-gradient",
      },
    ],
    image: cert2,
    source_code_link:
      "https://www.coursera.org/account/accomplishments/verify/NX35K6SVW8KN",
  },
  {
    name: "Block.one: Getting Started with The EOSIO Blockchain",
    company: "Google Cloud",
    description:
      "Learned about Compute Engine Virtual machine and EOSIO platform, creation of a wallet and running a single node blockchain.",
    tags: [
      {
        name: "GoogleCloud",
        color: "blue-text-gradient",
      },
      {
        name: "EOSIO",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: cert3,
    source_code_link:
      "https://www.coursera.org/account/accomplishments/verify/DSNZGL7RHU5S",
  },
  {
    name: "Create a Virtual Private Cloud (VPC) Using AWS",
    company: "Coursera Project Network",
    description:
      "Learned to create and run two Virtual Machines in a Virtual Private Cloud in AWS.",
    tags: [
      {
        name: "Coursera",
        color: "blue-text-gradient",
      },
      {
        name: "VPC",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: cert4,
    source_code_link:
      "https://www.coursera.org/account/accomplishments/verify/JMU45GFBASD5",
  },
];

export {
  certifications,
  contactlogos,
  education,
  experiences,
  projects,
  services,
  technologies
};

