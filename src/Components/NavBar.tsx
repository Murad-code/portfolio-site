import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

function NavBar() {
  const recipient = "muradk2512@gmail.com";
  const subject = "Email from portfolio site!";
  const body = "Hello, I would like to get in touch with you.";
  const mailtoUrl = `mailto:${recipient}`;
  const handleClick = () => {
    console.log("Button clicked!");

    window.location.href = mailtoUrl;
  };
  return (
    <nav
      className="fixed left-0 right-0 top-0
            z-10 flex w-full
            justify-around bg-white py-14 drop-shadow-md backdrop-blur-md"
    >
      <div className="flex items-center">
        <a className="cursor-pointer">
          <h3 className="text-2xl font-bold text-black">MURAD KAMALI</h3>
        </a>
      </div>

      <div className="hidden items-center space-x-8 lg:flex">
        <a
          className="flex cursor-pointer text-black
                    transition-colors duration-300 hover:text-primary"
        >
          home
        </a>

        <a
          className="flex cursor-pointer text-black
                    transition-colors duration-300 hover:text-primary"
        >
          about
        </a>

        <a
          className="flex cursor-pointer text-black
                    transition-colors duration-300 hover:text-primary"
        >
          portfolio
        </a>

        <a
          className="flex cursor-pointer text-black
                    transition-colors duration-300 hover:text-primary"
        >
          experience
        </a>

        <a
          className="flex cursor-pointer text-black
                    transition-colors duration-300 hover:text-primary"
        >
          contact
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <Link
          className="cursor-pointer"
          href="https://github.com/Murad-code"
          target="_blank"
        >
          <Icon
            icon="foundation:social-github"
            color="#353535"
            width="30"
            height="30"
          />
        </Link>
        <Link
          className="cursor-pointer"
          href="https://www.linkedin.com/in/murad-k-0872001b5/"
          target="_blank"
        >
          <Icon
            icon="foundation:social-linkedin"
            color="#353535"
            width="30"
            height="30"
          />
        </Link>
        <button className="cursor-pointer" onClick={handleClick}>
          <Icon icon="mdi:gmail" color="#353535" width="30" height="30" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
