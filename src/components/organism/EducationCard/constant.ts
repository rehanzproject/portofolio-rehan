import sertMSIB from "../../../assets/MSIB.pdf";
import MTCNA from "../../../assets/MTCNA.pdf";
interface IEducationCard {
  [index:string ] : string
}
export const educationCard: IEducationCard[] = [
  {
    name: "Alterra Academy",
    duration: "2023 Feb - 2023 June",
    desc: "Alterra Academy is an Education Technology company based in Malang that serves as a digital transformation platform for students to become top-quality Digital Talents in the current industry.",
    pdf: sertMSIB,
  },
  {
    name: "Institute Technology and Business ASIA Malang",
    duration: "2020 June - Present",
    desc: "Institut Teknologi dan Bisnis Asia Malang (ITBAM) is a higher education institution located in Malang, Indonesia. ITBAM focuses on providing quality education in the fields of technology and business. It offers a range of undergraduate and postgraduate programs to equip students with the necessary knowledge and skills to succeed in their chosen career paths.",
    pdf: MTCNA,
  },
];
