"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
} from "react-icons/ri";

import Link from "next/link";
import { useState } from "react";
// import styles from "./CssStyles/Socials.css";

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiInstallFill />,
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
