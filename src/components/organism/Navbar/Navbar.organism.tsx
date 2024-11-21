import { Disclosure } from "@headlessui/react";
import {
  AcademicCapIcon,
  CpuChipIcon,
  DocumentTextIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

type Nav = {
  name: string;
  href: string;
  current: boolean;
  icon: JSX.Element;
};
const navigation: Nav[] = [
  {
    name: "Resume",
    href: "#resume",
    current: true,
    icon: <DocumentTextIcon className="h-6 w-6" />,
  },
  {
    name: "Project",
    href: "#project",
    current: false,
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    name: "Education",
    href: "#education",
    current: false,
    icon: <AcademicCapIcon className="h-6 w-6" />,
  },
  {
    name: "Skill",
    href: "#skill",
    current: false,
    icon: <CpuChipIcon className="h-6 w-6" />,
  },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-black/80 rounded-full max-w-md flex mx-auto z-50 fixed bottom-0 my-2 inset-x-0"
    >
      {() => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              {/* Navigation */}
              <div className="flex flex-1 items-center justify-center">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "flex flex-col items-center justify-center text-white hover:text-emerald-400 rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <div className="flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-xs">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
