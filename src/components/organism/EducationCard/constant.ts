import sertMSIB from "../../../assets/MSIB.pdf";
import MTCNA from "../../../assets/MTCNA.pdf";
interface IEducationCard {
  [index:string ] : string
}
export const educationCard: IEducationCard[] = [
  {
    name: "Alterra Academy",
    duration: "2023 Feb - 2023 June",
    pdf: sertMSIB,
  },
  {
    name: "Institute Technology and Business ASIA Malang",
    duration: "2020 June - Present",
    pdf: MTCNA,
  },
];
