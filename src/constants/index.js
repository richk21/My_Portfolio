import {
    mobile,
    art,
    blogger,
    web,
    javascript,
    html,
    css,
    reactjs,
    git,
    linux, 
    aws, 
    python, 
    swift, 
    xcode, 
    androidstudio, 
    kotlin, 
    java,
    samsung,
    dandc,
    tesla,
    carrent,
    jobit,
    tripguide,
    cert1,
    cert2,
    cert3,
    cert4,
    instagram,
    linkedin,
    twitter,
    clubapp,
    wordcount,
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
  ];
  
  const services = [
    {
      title: "App Developer",
      icon: mobile,
      link : "https://github.com/richk21/Chat-App-Kotlin-Firebase",
    },
    {
      title: "Web Developer",
      icon: web,
      link : "https://github.com/richk21/Word-Count",
    },
    {
      title: "Blogger",
      icon: blogger,
      link : "https://algonoob.devdojo.com/",
    },
    {
      title: "Artist",
      icon: art,
      link : "https://www.instagram.com/richa_art21/",
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "Android Studio",
      icon: androidstudio,
    },
    {
      name: "XCode",
      icon: xcode,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Python",
      icon: python,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "AWS EC2",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Linux",
      icon: linux,
    },
  ];
  
  const experiences = [
    {
      title: "App Developer Intern",
      company_name: "Duke and Clyde Corp.",
      icon: dandc,
      iconBg: "#E6DEDD",
      date: "June 2022 - Oct 2023",
      points: [
        "Worked with a team to design, develop and launch fintech mobile applications.",
        "Used the latest tools and technologies to create user-friendly and intuitive interfaces.",
        "Contributed to a cutting-edge fintech platform, gaining exposure to agile development methodologies.",
      ],
    },
    {
      title: "R&D Intern",
      company_name: "Samsung PRISM",
      icon: samsung,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "Participated in brainstorming sessions, fostering a supportive research environment.",
        "Worked on cutting-edge projects with an experienced team and mentors.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Club Portfolio",
      description:
        "University club portfolio app made in Swift, XCode.",
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
    {
      name: "Word Count",
      description:
        "Web application that counts the number of words that you've entered. The display is designed in retro style.",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: wordcount,
      source_code_link: "https://github.com/richk21/Word-Count",
    },
  ];

  const contactlogos = [
    {
      index: 1,
      name:"instagram",
      logo: instagram,
      url: "https://www.instagram.com/richa_art21/",
    },
    {
      index: 2,
      name:"twitter",
      logo: twitter,
      url: "https://twitter.com/richa25424629",
    },
    {
      index: 3,
      name:"linkedin",
      logo: linkedin,
      url: "https://www.linkedin.com/in/richa-kiran-9557b8219/"
    },
  ]

  const certifications = [
    {
      name: "Block.one: Getting Started with Smart Contracts",
      company: "Google Cloud",
      description:
        "Learnt how to build, deploy and call actions on a smart contract.",
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
      source_code_link: "https://www.coursera.org/account/accomplishments/verify/G7DL3Z5B7QRL",
    },
    {
      name: "Introduction to Docker",
      company: "Google Cloud",
      description:
        "Learnt how to create, run and debug containers and pushing and pulling of images to and from Google Container Repository.",
      tags: [
        {
          name: "GoogleCloud",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "WebDevelopment",
          color: "pink-text-gradient",
        },
      ],
      image: cert2,
      source_code_link: "https://www.coursera.org/account/accomplishments/verify/NX35K6SVW8KN",
    },
    {
      name: "Block.one: Getting Started with The EOSIO Blockchain",
      company: "Google Cloud",
      description:
        "Learnt about Compute Engine Virtual machine ane EOSIO platform, creation of a wallet and running a single node blockchain.",
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
      source_code_link: "https://www.coursera.org/account/accomplishments/verify/DSNZGL7RHU5S",
    },
    {
      name: "Create a Virtual Private Cloud (VPC) Using AWS",
      company: "Coursera Project Network",
      description:
        "Learnt how to create and run two Virtual Machines in a Virtual Private Cloud in AWS.",
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
      source_code_link: "https://www.coursera.org/account/accomplishments/verify/JMU45GFBASD5",
    },
  ];
  
  export { services, technologies, experiences, projects, certifications, contactlogos };