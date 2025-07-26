import React from "react";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import Socials from "./Socials";
import "./Description.css";

const Description = () => {
  return (
    <>
      <div className="descriptionContainer">
        <div className="jobTitle">SOFTWARE DEVELOPER</div>
        <div className="mainTitle">Hello I am</div>
        <div className="subTitle">Dhruv Singh</div>
        <div className="descriptionText">
          I&apos;m a passionate Software Developer with over two years of experience in the IT industry. 
          I specialize in Data Structures and Algorithms, as well as Web and App Development.
           My strong problem-solving abilities and adaptability make me a quick learner, 
           allowing me to grasp new concepts and technologies with ease. I&apos;m always excited to take on 
           challenging projects, collaborate with teams, and build impactful solutions that drive innovation.
            Let&apos;s create something amazing together!
        </div>
        <div className="buttonContainer">
          <Link href="/contact">
            <div className="contactButtonDescription">
              <div> Contact me </div>
              <div className="icon">
                <Send size={18} />
              </div>
            </div>
          </Link>
          <a href="Dhruv_Singh_Resume.pdf" download="Dhruv Resume" target="_blank">
            <div className="downloadButton">
              <div>Download CV</div>
              <div className="icon">
                <Download size={18} />
              </div>
            </div>
          </a>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </>
  );
};

export default Description;
