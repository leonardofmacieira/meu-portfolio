"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import React from "react";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/leonardo-macieira-002914231",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/leonardofmacieira",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/leo_macieiraa/?next=%2F",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
