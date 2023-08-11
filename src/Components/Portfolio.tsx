/* eslint-disable react/no-unescaped-entities */
import React from "react";
import carPricePredictor from "../Assets/images/Car price predictor.png";
import carPricePredictor2 from "../Assets/images/Car price predictor 2.png";
import carPricePredictor3 from "../Assets/images/Car price predictor 3.png";
import foodFinder from "../Assets/images/Food finder.png";
import foodFinder2 from "../Assets/images/Food finder 2.png";
import sortingVisualiser from "../Assets/images/Sorting visualiser.png";
import sortingVisualiser2 from "../Assets/images/Sorting visualiser 2.png";
import multidoku from "../Assets/images/multidoku.png";
import multidoku2 from "../Assets/images/multidoku 2.png";
import multidoku3 from "../Assets/images/multidoku 3.png";

// import carPricePredictorDemo from "../Assets/vids/Car Price Predictor.mov";
// import foodFinderDemo from "../Assets/vids/Food finder.mp4";
// import sortingVisualiserDemo from "../Assets/vids/Sorting visualiser.mp4";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

function Portfolio() {
  interface IProject {
    name: string;
    skills: string;
    description: string;
    link: string;
    liveLink?: string;
    content: StaticImageData[];
  }
  const projectsInfo: IProject[] = [
    {
      name: "Car Price Predictor",
      skills: "Python • TypeScript • React • NextJs  • Excel • Nivo",
      description:
        "I created a Car Price Predictor web app that predicts a car's current and future price using machine learning. I used Python, scikit-learn, and Excel to develop the model, and React, Nextjs, and flask_restful to create the web app. Results are displayed on a line chart using Nivo charts.",
      link: "https://github.com/Murad-code/car-price-predictor",
      content: [carPricePredictor2, carPricePredictor, carPricePredictor3],
    },
    {
      name: "Multidoku",
      skills: "TypeScript • AWS (EC2) • Nginx • SocketIO • TailwindCSS • React",
      description:
        "A sudoku webapp utilising the backtracking algorithm to produce puzzles with the optional multiplayer functionality, powered by SocketIO, enabling players to host lobbies and join via unique room IDs for real-time gameplay. \nThe SocketIO server is hosted on an AWS EC2 instance, while Nginx acts as a reverse proxy for secure HTTPS connections. A point-based scoring system and leaderboard was implemented to track each players progress.",
      link: "https://github.com/Murad-code/sudoku",
      liveLink: "https://multidoku.vercel.app/",
      content: [multidoku, multidoku2, multidoku3],
    },
    {
      name: "Food Finder",
      skills: "JavaScript • React • MongoDB • Express • Google OAuth",
      description:
        "Restaurant finder webapp where users can enter a term and location to find places to eat and filter by best match, rating, and most reviews. This was developed by using Yelp's Fusion API and Google's OAuth was integrated so favourites can be saved to the user’s Google account.",
      link: "https://github.com/Murad-code/food-finder-public",
      content: [foodFinder, foodFinder2],
    },
    {
      name: "Sorting Algorithms Visualiser",
      skills: "JavaScript • React",
      description:
        "Visualiser tool to help teach/learn how different sorting algorithms work. Currently has: merge sort, bubble sort, insertion sort, and quick sort.",
      link: "https://github.com/Murad-code/sorting-visualiser",
      content: [sortingVisualiser, sortingVisualiser2],
    },
  ];

  const Projects = () => {
    return (
      <>
        {projectsInfo.map((project: IProject, index: number) => (
          <div
            key={index}
            className="mt-8 flex w-auto flex-col rounded-xl bg-white drop-shadow-md backdrop-blur-md md:mt-10 md:flex-row md:pl-16 md:pt-16"
          >
            <div className="px-4 pb-8 md:w-1/3 md:px-0">
              <h4 className="mt-6 text-2xl">{project.name}</h4>
              <p className="mt-1 text-lg font-light text-primary md:mt-3 md:text-xl">
                {project.skills}
              </p>
              <p className="mt-1 text-lg font-light md:mt-3	md:text-xl">
                {project.description}
              </p>
              <div className="linkContainer flex gap-4 md:gap-8">
                <p className="mt-2 font-light md:mt-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="hover:bg-primary-100 md:text-md rounded border border-primary bg-white px-3 py-1  text-sm text-primary transition duration-300 hover:bg-primary hover:text-white"
                  >
                    View on GitHub
                  </Link>
                </p>
                {project.liveLink && (
                  <p className="mt-2 font-light md:mt-3">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="hover:bg-primary-100 md:text-md rounded border border-primary bg-white px-3 py-1  text-sm text-primary transition duration-300 hover:bg-primary hover:text-white"
                    >
                      View Website
                    </Link>
                  </p>
                )}
              </div>
            </div>
            <div className="ml-4 flex h-[20rem] overflow-hidden rounded-br-xl rounded-tl-xl pb-3 pr-3 md:h-[30rem] md:w-2/3 ">
              <Swiper
                key={index}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={1000}
                pagination={{
                  clickable: true,
                }}
                injectStyles={[".swiper-button-next: black"]}
                className="mySwiper colors-primary rounded-br-xl rounded-tl-xl bg-offWhite p-4 "
              >
                {project.content.map((image, index) => (
                  <SwiperSlide
                    className="rounded-br-xl rounded-tl-xl p-4"
                    key={index}
                  >
                    <div className="relative h-full w-full ">
                      <Image
                        src={image}
                        alt="Image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div id="Portfolio" className="pt-24  md:pt-36">
      <div>
        <h2 className="text-5xl">Portfolio</h2>
        <h4 className="mt-6 text-2xl text-grey">
          Here’s some of the projects I’ve created recently.
        </h4>
      </div>
      <Projects />
    </div>
  );
}

export default Portfolio;
