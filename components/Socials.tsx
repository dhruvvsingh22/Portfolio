"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://github.com/dhruvvsingh22",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/dhruv-singh-47859721a/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.instagram.com/_dhruv_22_/",
    name: <RiInstagramFill />,
  },
  {
    path: "https://wa.me/qr/3V27MXMXVHYYD1",
    name: <RiWhatsappFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100025018313695",
    name: <RiFacebookFill />,
  },
  
];

const Socials = () => {
  return (
    <div
      style={{
        display: "flex",
        columnGap: "1.5rem",
        marginTop: "40px",
      }}
    >
      {icons.map((icon: any, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div
              style={{ fontSize: "22px", cursor: "pointer", color: "black" }}
            >
              {icon.name}{" "}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
