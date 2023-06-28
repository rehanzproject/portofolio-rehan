import { MyListComponent, list } from "./constant";

function Navbar() {
  const handleClick = (section: string) => {
    const elementSection = document.getElementById(section);
    if (elementSection) {
      elementSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed flex items-center justify-center inset-x-0 bottom-0 my-6">
      <div className="flex flex-row gap-4 rounded-full max-w-sm bg-gradient-to-br from-blue-500 to-purple-50 py-2">
        <div className="relative group">
         
          {list.map((value: MyListComponent) => (
            <button
              className="px-10"
              onClick={() => handleClick(value.name)}
              key={value.name}
            >
              <button className="px-4 py-2">
                {" "}
                {value.component && <value.component />}
              </button>
              <div className="hidden group-hover:block mx-2 absolute bg-gray-500 text-white px-2 py-2 text-xs rounded-md">
                {value.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
