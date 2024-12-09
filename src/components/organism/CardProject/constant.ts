export interface ICardProject {
  name: string;
  desc: string;
  techStack: string[];
  image: string;
  githubLink?: string;
  liveDemo: string
}

export const listCard: ICardProject[] = [

  {
    name: "Badan Kepegawaian Daerah",
    desc: "A web application designed for managing user data, including creating, editing, and deleting records, as well as generating data reports in PDF format. Built to streamline administrative processes, it ensures efficiency and ease of use for managing retirement data and other key information.",
    techStack: ["Laravel Breeze", "Vue JS", "MySQL"],
    image: '/images/projects/bkd.webp',
    githubLink: '',
    liveDemo: 'https://bkd.hanzstore.my.id/',
  },
  {
    name: "Online Shop Tokopaedi",
    desc: "A mini e-commerce website for shoes that provides a platform for users to browse, select, and purchase footwear online.",
    techStack: ["React JS", "TailwindCSS", "GraphQL", "Redux", "Firebase"],
    image: '/images/projects/tokopaedi.webp',
    githubLink: 'https://github.com/rehanzproject/tokopaedi.git',
    liveDemo: 'https://tokopaedi-cyan.vercel.app/',
  },
  {
    name: "Website Admin Learning Management System (LMS)",
    desc: "An administrative platform for managing educational courses and tracking student progress, designed for institutions to facilitate online learning.",
    techStack: ["React JS", "TailwindCSS", "REST API", "Redux"],
    image: '/images/projects/academade.webp',
    githubLink: 'https://github.com/rehanzproject/tugas-akhir-admin.git',
    liveDemo: 'https://hanzstore.my.id/',
  },
  {
    name: "Back-End Learning Management System",
    desc: "A robust back-end solution for managing course content, user data, and analytics in an LMS, utilizing Express and MySQL for database management.",
    techStack: ["Express JS", "Sequelize", "MySQL", "Firebase"],
    image: '/images/projects/academade.webp',
    githubLink: 'https://github.com/rehanzproject/tugas-akhir.git',
    liveDemo: '',
  },
  {
    name: "Mobile Application Learning Management System",
    desc: "A mobile app designed to provide students with access to learning materials, track their progress, and receive notifications through Firebase Cloud Messaging.",
    techStack: ["React Native", "Redux", "Firebase Cloud Messaging (FCM)"],
    image: '/images/projects/mobileapp.webp',
    githubLink: 'https://github.com/rehanzproject/react-native-lms.git',
    liveDemo: '',
  },
  {
    name: "UP2 PLN",
    desc: "An online learning platform for PLN that offers courses, tracks student engagement, and manages educational content using a PHP and MySQL back-end.",
    techStack: ["HTML", "Bootstrap", "PHP", "MySQL"],
    image: '/images/projects/up2.webp',
    githubLink: '',
    liveDemo: 'https://pln.hanzstore.my.id/',
  },
  {
    name: "Chat Bot Telegram",
    desc: "A Telegram bot designed to assist users with information and queries related to learning management systems, using Node.js and Telegraf.",
    techStack: ["Node JS", "Telegraf", "Sequelize", "MySQL"],
    image: '/images/projects/anonytalkk.webp',
    githubLink: '',
    liveDemo: 'https://anonytalk.my.id/',
  },
  {
     name: "Ruang Maju Digital",
     desc: "Ruang Maju Digital is a digital platform offering professional website development services. We help you create visually appealing, responsive, and business-tailored websites using modern technologies like Vue.js and TailwindCSS. Elevate your online presence and leave a lasting impression with a website designed just for you.",
     techStack: ["Vue JS", "TailwindCSS"],
    image: '/images/projects/ruangmaju.webp',
    githubLink: '',
    liveDemo: 'https://ruangmajudigital.com/',
  },
  {
    name: "ByTheWay",
    desc: "This project aims to develop a web application that connects users through a community platform. It allows users to share jokes, engage with others, and foster an interactive community..",
    techStack: ["Vue JS", "TailwindCSS"],
    image: '/images/projects/bythewayy.webp',
    githubLink: '',
    liveDemo: 'https://bythewayy.my.id/',
  },
];
