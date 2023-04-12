import React from "react";
import { Icon } from "@iconify/react";
function Hero() {
  return (
    <div className="flex flex-col ">
      <div className="me-auto mt-20 text-center">
        <h1 className="text-center text-6xl text-black">
          Hi, my name is <span className="text-primary">Murad</span> <br /> I'm
          a software engineer.
        </h1>
      </div>
      <div className="ms-auto mt-12 text-center">
        <h3 className="text-center text-4xl text-black">
          I spend my day-today developing projects with <br />{" "}
          <span className="text-[#3178C6]">TypeScript</span>,{" "}
          <span className="text-[#3E98B6]">React</span>,{" "}
          <span className="text-[#036E00]">Node.js</span>, and{" "}
          <span className="text-[#EC912D]">AWS</span>
        </h3>
      </div>
      <div className="mx-auto mt-24 text-center">
        <h5 className="text-center text-3xl text-black">
          Scroll down to know more about me
        </h5>
      </div>

      <Icon
        className="mx-auto mt-12"
        icon="material-symbols:keyboard-double-arrow-down"
        color="#5d5d5d"
        width="48"
        height="48"
      />
    </div>
  );
}

export default Hero;
