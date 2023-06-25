import GithubIcon from "../../atoms/Icons/GithubIcon.icon";

type SideBarProps = {
  name: string;
  element: React.ComponentType;
  onClick?: () => void;
};
export const sidebar: SideBarProps[] = [
  {
    name: "Home",
    element: GithubIcon,
  },
  {
    name: "Education",
    element: GithubIcon,
  },
  {
    name: "About",
    element: GithubIcon,
  },
];
