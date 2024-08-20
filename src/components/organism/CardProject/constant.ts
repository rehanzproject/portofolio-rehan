import tokopaedi from "../../../assets/Tokopaedi-project.pdf";
import lms from "../../../assets/LMS-project.pdf";

export interface ICardProject {
  name: string;
  desc: string;
  techStack: string[];
  pdf: string;
}

export const listCard: ICardProject[] = [
  {
    name: "Online Shop Tokopaedi",
    desc: "A mini e-commerce website for shoes, also known as a small-scale or simplified e-commerce website, is a platform that allows businesses or individuals to sell products or services online on a smaller scale.",
    techStack: ["React JS", "TailwindCSS", "GraphQL", "Redux", "Firebase"],
    pdf: tokopaedi,
  },
  {
    name: "Website Admin Learning Management System(LMS)",
    desc: "LMS stands for Learning Management System. It is a software application or platform designed to facilitate the administration, delivery, and tracking of educational courses and training programs. LMSs are commonly used in academic institutions, corporate organizations, and other learning environments to manage and deliver online learning content.",
    techStack: ["React JS", "TailwindCSS", "REST API", "Redux"],
    pdf: lms,
  },
  {
    name: "Back - End Learning Management System",
    desc: "LMS stands for Learning Management System. It is a software application or platform designed to facilitate the administration, delivery, and tracking of educational courses and training programs. LMSs are commonly used in academic institutions, corporate organizations, and other learning environments to manage and deliver online learning content.",
    techStack: ["Express JS", "Sequelize", "MySQL", "Firebase"],
    pdf: lms,
  },
  {
    name: "Mobile Application Learning Management System",
    desc: "LMS stands for Learning Management System. It is a software application or platform designed to facilitate the administration, delivery, and tracking of educational courses and training programs. LMSs are commonly used in academic institutions, corporate organizations, and other learning environments to manage and deliver online learning content.",
    techStack: ["React Native", "Redux", "Firebase Cloud Messaging(FCM)"],
    pdf: lms,
  },
  {
    name: "UP2 PLN",
    desc: "LMS stands for Learning Management System. It is a software application or platform designed to facilitate the administration, delivery, and tracking of educational courses and training programs. LMSs are commonly used in academic institutions, corporate organizations, and other learning environments to manage and deliver online learning content.",
    techStack: ["HTML", "Boostrap", "PHP", "MySQL"],
    pdf: lms,
  },
  {
    name: "Chat Bot Telegram",
    desc: "LMS stands for Learning Management System. It is a software application or platform designed to facilitate the administration, delivery, and tracking of educational courses and training programs. LMSs are commonly used in academic institutions, corporate organizations, and other learning environments to manage and deliver online learning content.",
    techStack: ["Node JS", "Telegraf","Sequelize", "MySQL"],
    pdf: lms,
  },
  {
    name: "Jokieww",
    desc: "LMS stands for Learning Management System. It is a software application or platform designed to facilitate the administration, delivery, and tracking of educational courses and training programs. LMSs are commonly used in academic institutions, corporate organizations, and other learning environments to manage and deliver online learning content.",
    techStack: ["Vue JS", "TailwindCSS" ],
    pdf: lms,
  },
];
