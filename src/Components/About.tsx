/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Icon } from "@iconify/react";

function About() {
  return (
    <div
      id="About"
      className="flex w-full flex-col items-center pt-24 lg:flex-row lg:items-stretch lg:pt-36"
    >
      <div className="rounded-xl bg-white px-10 py-8 drop-shadow-md backdrop-blur-md lg:w-1/3">
        <div className="inline-block rounded-xl bg-offWhite p-4">
          <Icon
            icon="mdi:account-cog-outline"
            color="#353535"
            width="50"
            height="50"
          />
        </div>
        <h4 className="mt-6 text-2xl font-semibold">Experience</h4>
        <p className="mt-3 w-auto text-xl font-light ">
          As a software engineer with two years of experience working at a
          full-stack Javascript web development agency, I possess a strong
          understanding of technologies such as React, MongoDB, TypeScript,
          GraphQL, and AWS.
        </p>
      </div>
      <div className="mt-8 rounded-xl bg-white px-10 py-8 drop-shadow-md backdrop-blur-md lg:ml-6 lg:mt-0 lg:w-1/3">
        <div className="inline-block rounded-xl bg-offWhite p-4">
          <Icon
            icon="fluent-mdl2:education"
            color="#353535"
            width="50"
            height="50"
          />
        </div>
        <h4 className="mt-6 text-2xl font-semibold">Education</h4>
        <p className="mt-3 text-xl font-light	">
          I studied a BSc Computer Science degree at Brunel University achieving
          a 1st Class Honours with professional practice. This course has taught
          me core concepts such as algorithms, data structures, databases,
          software engineering principles, project management, and software
          testing. Additionally, I studied AI, Cybersecurity, and Software
          Engineering.
        </p>
      </div>
      <div className="mt-8 rounded-xl bg-white px-10 py-8 drop-shadow-md backdrop-blur-md lg:ml-6 lg:mt-0 lg:w-1/3">
        <div className="inline-block rounded-xl bg-offWhite p-4">
          <Icon
            icon="fluent-mdl2:coffee-script"
            color="#353535"
            width="50"
            height="50"
          />
        </div>
        <h4 className="mt-6 text-2xl	font-semibold">Side Projects</h4>
        <p className="mt-3 text-xl font-light">
          My side projects allow me to hone new and existing skills with
          technologies like React, MongoDB, TypeScript, GraphQL, and AWS. I also
          experiment with AI and machine learning and through my projects, I am
          continuing to learn and improve as a software engineer.
        </p>
      </div>
    </div>
  );
}

export default About;
