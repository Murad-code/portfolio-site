/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Icon } from "@iconify/react";
function Hero() {
  return (
    <div className="flex flex-col ">
      <div className="text-center md:me-auto">
        <h1 className="text-center text-4xl text-black md:text-6xl">
          Hi, my name is <span className="text-primary">Murad</span> <br /> I'm
          a software engineer.
        </h1>
      </div>
      <div className="mt-12 text-center md:ms-auto">
        <h3 className="text-center text-2xl text-black md:text-4xl">
          I spend my day-to-day developing projects with <br />{" "}
          <span className="text-[#3178C6]">TypeScript</span>,{" "}
          <span className="text-[#3E98B6]">React</span>,{" "}
          <span className="text-[#036E00]">Node.js</span>, and{" "}
          <span className="text-[#EC912D]">AWS</span>
        </h3>
      </div>
      <div className="mx-auto mt-24 text-center">
        <h5 className="text-center text-xl text-black md:text-3xl">
          Scroll down to know more about me
          <div className="mt-12 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#339989"
              className="h-6 w-6 animate-bounce"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a.75.75 0 0 1 .75.75v10.5l2.97-2.97a.75.75 0 0 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06L9.25 13.25V2.75A.75.75 0 0 1 10 2z"
              />
            </svg>
          </div>
        </h5>
      </div>
    </div>
  );
}

export default Hero;
