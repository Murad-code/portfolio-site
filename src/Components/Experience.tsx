import React from "react";
import Image from "next/image";
import bizclik from "../Assets/Companies/bizclik.png";
import wsj from "../Assets/Companies/wsj.png";
import theTelegraph from "../Assets/Companies/the-telegraph.png";
import clock from "../Assets/Companies/clock.png";
import leicesterTigers from "../Assets/Companies/leicester-tigers.png";
import gloucesterRugby from "../Assets/Companies/gloucester-rugby.png";
import riotGames from "../Assets/Companies/riot-games.png";

function Experience() {
  return (
    <div className="mt-36">
      <div>
        <h2 className="text-5xl">Companies I've worked with</h2>
        <h4 className="mt-6 text-2xl text-grey">
          These are a few of the companies I’ve had the pleasuring working with.{" "}
        </h4>
      </div>
      <div className="mt-12  flex flex-col">
        <div className="flex h-48 w-full items-center justify-between">
          <div className="flex h-full  w-6/12 justify-center">
            <Image
              className="h-full w-full object-contain grayscale"
              src={wsj}
              alt="Logo 1"
            />
          </div>
          <div className="flex h-full  w-3/12 justify-center">
            <Image
              className="h-full w-full object-contain grayscale"
              src={bizclik}
              alt="Logo 2"
            />
          </div>
          <div className="flex h-full  w-1/12 justify-center">
            <Image
              className="h-full w-full object-contain grayscale"
              src={leicesterTigers}
              alt="Logo 3"
            />
          </div>
        </div>
        <div className="flex h-48 w-full items-center justify-between">
          <div className="flex h-full  w-1/12 justify-center">
            <Image
              className="h-full w-full object-contain grayscale"
              src={clock}
              alt="Logo 4"
            />
          </div>
          <div className="flex h-full  w-1/12 justify-center">
            <Image
              className="h-full w-full object-contain grayscale"
              src={gloucesterRugby}
              alt="Logo 5"
            />
          </div>
          <div className=" flex  h-full w-5/12 justify-center ">
            <Image
              className="h-full w-full object-contain grayscale"
              src={theTelegraph}
              alt="Logo 6"
            />
          </div>
          <div className="flex h-full  w-3/12 justify-center">
            <Image
              className="h-full w-full object-contain grayscale"
              src={riotGames}
              alt="Logo 7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
