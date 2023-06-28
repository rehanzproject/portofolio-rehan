import { GithubIcon, LinkedinIcon } from "../../atoms";
type IconProps = {
  name: string;
  icon: React.ComponentType;
  href: string;
};

export const icon: IconProps[] = [
  {
    name: "Linkedin",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/rehan-maulana-94029823b/",
  },
  {
    name: "Github",
    icon: GithubIcon,
    href: "https://github.com/rehanzproject",
  },
];
