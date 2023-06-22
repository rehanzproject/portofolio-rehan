import {  MyListComponent, list } from "./constant";

function Navbar() {
  
  return (
    <div className="fixed flex items-center justify-center inset-x-0 bottom-0 my-6 h-24">
      <div className="flex flex-row gap-4 rounded-full max-w-sm bg-black py-2">
        {list.map((value: MyListComponent) => (
          <div key={value.name}>
             {value.component && <value.component />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
