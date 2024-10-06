import tokopaedi from "/document/Tokopaedi-project.pdf";
import lms from "/document/LMS-project.pdf";

export interface ICardProject {
  name: string;
  desc: string;
  techStack: string[];
  pdf: string;
}

export const listCard: ICardProject[] = [
  {
    name: "Online Shop Tokopaedi",
    desc: "A mini e-commerce website for shoes that provides a platform for users to browse, select, and purchase footwear online.",
    techStack: ["React JS", "TailwindCSS", "GraphQL", "Redux", "Firebase"],
    pdf: tokopaedi,
  },
  {
    name: "Website Admin Learning Management System (LMS)",
    desc: "An administrative platform for managing educational courses and tracking student progress, designed for institutions to facilitate online learning.",
    techStack: ["React JS", "TailwindCSS", "REST API", "Redux"],
    pdf: lms,
  },
  {
    name: "Back-End Learning Management System",
    desc: "A robust back-end solution for managing course content, user data, and analytics in an LMS, utilizing Express and MySQL for database management.",
    techStack: ["Express JS", "Sequelize", "MySQL", "Firebase"],
    pdf: lms,
  },
  {
    name: "Mobile Application Learning Management System",
    desc: "A mobile app designed to provide students with access to learning materials, track their progress, and receive notifications through Firebase Cloud Messaging.",
    techStack: ["React Native", "Redux", "Firebase Cloud Messaging (FCM)"],
    pdf: lms,
  },
  {
    name: "UP2 PLN",
    desc: "An online learning platform for PLN that offers courses, tracks student engagement, and manages educational content using a PHP and MySQL back-end.",
    techStack: ["HTML", "Bootstrap", "PHP", "MySQL"],
    pdf: lms,
  },
  {
    name: "Chat Bot Telegram",
    desc: "A Telegram bot designed to assist users with information and queries related to learning management systems, using Node.js and Telegraf.",
    techStack: ["Node JS", "Telegraf", "Sequelize", "MySQL"],
    pdf: lms,
  },
  {
    name: "Ruang Maju Digital",
    desc: "A web application that connects users through a community platform, allowing them to share jokes and engage with others using Vue.js and TailwindCSS.",
    techStack: ["Vue JS", "TailwindCSS"],
    pdf: lms,
  },
  {
    name: "ByTheWay",
    desc: "A web application that connects users through a community platform, allowing them to share jokes and engage with others using Vue.js and TailwindCSS.",
    techStack: ["Vue JS", "TailwindCSS"],
    pdf: lms,
  },
];
