import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Portfolio", href: "#Portfolio" },
  { name: "Experience", href: "#Experience" },
  { name: "Contact", href: "#Contact" },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function NavBar() {
  // const [current, setCurrent] = useState("Home");

  return (
    <Disclosure
      as="nav"
      className="fixed left-0 right-0 top-0 z-10
    w-full bg-white px-4 py-5 drop-shadow-md backdrop-blur-md md:px-0 md:py-10"
    >
      {({ open }) => (
        <>
          <div className="flex h-12 flex-1 items-center  justify-between px-2 sm:items-stretch sm:justify-around">
            <div className="sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center">
              <a className="cursor-pointer">
                <h3 className="text-2xl font-bold text-black">Murad Kamali</h3>
              </a>
            </div>
            <div className="hidden space-x-8 sm:flex sm:items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex cursor-pointer text-black
                      transition-colors duration-300 hover:text-primary"
                  // className={classNames(
                  //   item.current ? "text-primary" : "hover:text-primary",
                  //   "rounded-md px-3 py-2 text-sm font-medium"
                  // )}
                  // aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="flex items-center  rounded-lg bg-primary p-2 px-4 text-white hover:bg-primaryDark sm:p-4 sm:px-8"
              // onClick={() => window.open("Murad Kamali CV.pdf", "_blank")}
            >
              <span className="">View CV</span>
            </button>
          </div>

          {/* Menu button for mobile */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-8">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="hover:text-white, block
                        rounded-md border-b
                      border-gray-200 px-3 py-2 text-base font-medium text-black hover:bg-primary hover:text-white"

                    // className={classNames(
                    //   item.current
                    //     ? "bg-primary text-white"
                    //     : "text-black hover:bg-primary hover:text-white",
                    //   "block rounded-md px-3 py-2 text-base font-medium"
                    // )}
                    // aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
