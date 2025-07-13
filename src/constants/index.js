import {
  androidstudio,
  art,
  aws,
  azureDO,
  blogger,
  blogWebsite,
  bp,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  chatGPTApp,
  clubapp,
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
  mobile,
  nodejs,
  python,
  queensconvent,
  reactjs,
  samsung,
  twitter,
  typescript,
  vit,
  weatherapp,
  web,
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
    link: "https://github.com/richk21", //put blogging site here
  },
  {
    title: "App Developer",
    icon: mobile,
    link: "https://github.com/richk21/Chat-App-Kotlin-Firebase",
  },
  {
    title: "Blogger",
    icon: blogger,
    link: "https://algonoob.devdojo.com/",
  },
  {
    title: "Artist",
    icon: art,
    link: "https://www.instagram.com/richa_art21/",
  },
];

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
      "Led projects as head of Innovator's Quest club and selected for Samsung PRISM research on energy analytics.",
    ],
  },
  {
    school: "Queen's Convent School, Rohini",
    field: "High School(Grade XII)",
    icon: queensconvent,
    iconBg: "#E6DEDD",
    graddDate: "March 2020",
    location: "Rohini, Delhi, India",
    points: [
      "Acheived 94.2% in Grade XII, maintaining good academic performance.",
    ],
  },
  {
    school: "Cambridge School, Noida",
    field: "Higher Secondary(Grade X)",
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
    title: "Full-Stack Developer",
    company_name: "bp",
    icon: bp,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Built new front-end features with React & TypeScript.",
      "Developed C# APIs with event-driven backend architecture for scalable operations.",
      "Worked with CI/CD pipelines and deployments using Azure DevOps.",
      "Collaborated with other BP teams to integrate external APIs for some features",
      "Expanded skillset from front-end development to full-stack engineering during the project.",
    ],
  },
  {
    title: "Front-end Development Intern",
    company_name: "ImpactQA",
    icon: impactQA,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Worked in project Falcon, a software testing tool made for both technical and non-technical users.",
      "Created its front end in React and BootStrap CSS.",
      "Used tools like Postman for API integrations to enable its testing functionalities",
    ],
  },
  {
    title: "R&D Intern",
    company_name: "Samsung PRISM",
    icon: samsung,
    iconBg: "#E6DEDD",
    date: "April 2023 - June 2023",
    points: [
      "Participated in brainstorming sessions, fostering a supportive research environment.",
      "Gained exposure to advanced projects and methodologies under experienced mentors.",
    ],
  },
];

const projects = [
  {
    name: "MERN Stack Blogging Website",
    description:
      "A full-stack MERN blogging platform allowing users to create, read, and comment on blogs with rich features.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: blogWebsite,
    source_code_link: "https://github.com/richk21/MERN-Stack-Blogging-Website",
  },
  {
    name: "Brew Notes(DApp)",
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
  technologies,
};
