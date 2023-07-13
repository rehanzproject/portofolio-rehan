import tokopaedi from "../../../assets/Tokopaedi.pdf";
import lms from "../../../assets/LMS.pdf";

export interface ICardProject {
  name: string;
  desc: string;
  techStack: string[];
  pdf: string;
}

export const listCard: ICardProject[] = [
  {
    name: "Tokopaedi",
    desc: "A mini e-commerce website for shoes, also known as a small-scale or simplified e-commerce website, is a platform that allows businesses or individuals to sell products or services online on a smaller scale.",
    techStack: [
      "React JS ",
      "TailwindCSS",
      "GraphQL",
      "Redux",
      "Firebase",
      "Apollo",
    ],
    pdf: tokopaedi,
  },
  {
    name: "Learning Management System(LMS)",
    desc: "LMS stands for Learning Management System. It is a software application or platform designed to facilitate the administration, delivery, and tracking of educational courses and training programs. LMSs are commonly used in academic institutions, corporate organizations, and other learning environments to manage and deliver online learning content.",
    techStack: ["React JS", "TailwindCSS", "REST API", "Redux"],
    pdf: lms,
  },
];
