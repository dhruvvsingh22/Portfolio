"use client";
import React, { useState } from "react";
import Language from "./Language";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Image from "next/image";
import "./About.css";

const About = () => {
  const [data, setData] = useState("personal");

  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutTitle">
          About Dhruv Singh
        </div>
      </div>
      <div className="contentWrapper">
        <div className="profileImageWrapper">
          <img
            src="/profile.png"
            alt="Dhruv Singh"
            className="profileImageWrap"
          />
        </div>
        <div className="detailsWrapper">
          <div className="tabs">
            <div
              className={`tab ${data === "personal" ? "tabSelected" : "tabUnselected"}`}
              onClick={() => setData("personal")}
            >
              Personal Info
            </div>
            <div
              className={`tab ${data === "qualification" ? "tabSelected" : "tabUnselected"}`}
              onClick={() => setData("qualification")}
            >
              Qualification
            </div>
            <div
              className={`tab ${data === "skills" ? "tabSelected" : "tabUnselected"}`}
              onClick={() => setData("skills")}
            >
              Skills Info
            </div>
          </div>
          {data === "personal" ? (
            <Language />
          ) : data === "qualification" ? (
            <Qualification />
          ) : (
            <Skills />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
