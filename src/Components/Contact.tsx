import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Contact() {
  const handleClick = () => {
    console.log("Button clicked!");

    window.location.href = mailtoUrl;
  };
  return (
    <div id="Contact" className="mb-10 pt-32">
      <div>
        <h2 className="text-5xl">Contact Me</h2>
        <h4 className="mt-6 text-2xl text-grey">
          Interested in hiring me? <br /> You can message me on LinkedIn, or by
          filling out the form below.
        </h4>
      </div>

      <div className="mx-auto mt-10 w-auto rounded-xl bg-white p-10 pt-10 drop-shadow-md backdrop-blur-md md:w-2/3 lg:w-8/12">
        <h4 className="m-4 mt-6 text-2xl">Let's get in touch</h4>
        <div className="m-2 flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="relative">
              <label for="name" className="text-sm leading-7 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-300 bg-offWhite px-3 py-1 text-base leading-8 text-grey outline-none transition-colors duration-200 ease-in-out focus:border-primary"
              />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="relative">
              <label for="email" className="text-sm leading-7">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-300 bg-offWhite px-3 py-1 text-base leading-8 text-grey outline-none transition-colors duration-200 ease-in-out focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full p-2">
            <div className="relative">
              <label for="message" className="text-sm leading-7">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-offWhite px-3 py-1 text-base leading-6 text-grey outline-none transition-colors duration-200 ease-in-out focus:border-primary"
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2">
            <button className="mx-auto flex rounded border-0 bg-primary px-8 py-2 text-lg text-white hover:bg-primary focus:outline-none">
              Send
            </button>
          </div>
          <div className="mt-8 flex w-full justify-around border-t border-gray-200 p-2 pt-8 text-center">
            <p className="">
              <span className="font-semibold">Email: </span>
              murad.coding@gmail.com
            </p>

            <p className="">
              <span className="font-semibold">Phone Number: </span>+44
              7305581194
            </p>
          </div>
          <div className="mt-2 flex w-full items-center justify-center space-x-2 ">
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
