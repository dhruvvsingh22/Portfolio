"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";
import { useState } from "react";
// import styles from "./CssStyles/Socials.css";

const icons = [
  // {
  //   path: "/",
  //   name: <RiYoutubeFill />,
  // },
  {
    path: "https://www.linkedin.com/in/dhruv-singh-47859721a/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/dhruvvsingh22",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100025018313695",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/_dhruv_22_/",
    name: <RiInstagramFill />,
  },
];

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "hsl(var(--secondary))",
        marginTop: "32px",
        paddingTop: "40px",
        paddingBottom: "40px",
        color: "hsl(var(--primary))",
      }}
    >
      <div
        style={{
          display: "flex",
          columnGap: "1.5rem",
        }}
      >
        {icons.map((icon: any, index) => {
          return (
            <Link href={icon.path} key={index}>
              <div
                style={{ fontSize: "22px", cursor: "pointer"}}
              >
                {icon.name}{" "}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
