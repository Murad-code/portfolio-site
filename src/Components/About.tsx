import React from "react";
import { Icon } from "@iconify/react";

function About() {
  return (
    <div className="w-1/3 rounded-xl bg-white p-16	">
      <div className="inline-block rounded-xl bg-offWhite p-4">
        <Icon
          icon="mdi:account-cog-outline"
          color="#353535"
          width="50"
          height="50"
        />
      </div>
      <h4 className="mt-6 text-2xl	font-semibold">Experience</h4>
      <p className="mt-3 text-xl">
        As a software engineer with two years of experience working at a
        full-stack Javascript web development agency, I possess a strong
        understanding of technologies such as React, MongoDB, TypeScript,
        GraphQL, and AWS.
      </p>
    </div>
  );
}

export default About;
