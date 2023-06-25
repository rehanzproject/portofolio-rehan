import GithubIcon from "../../atoms/Icons/GithubIcon.icon";
import HomeIcon from "../../atoms/Icons/HomeIcon.icon";

export interface ListComponent {
  name: string;
  component: React.ComponentType
}
export interface MyListComponent extends ListComponent {
  onClick?: () => void
}

export const list: MyListComponent[] = [
  {
    name: "Home",
    component: HomeIcon,
  },
  {
    name: "Github",
    component: GithubIcon,
  },
];
