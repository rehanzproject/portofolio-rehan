import { icon } from "./constant";

function HeaderIcon() {
  const handleClick = (href: string) => {
    window.open(href, "_blank");
  };
  return icon.map((list) => (
    <button key={list.name} onClick={() => handleClick(list.href)}>
      {" "}
      <list.icon />
    </button>
  ));
}

export default HeaderIcon;
