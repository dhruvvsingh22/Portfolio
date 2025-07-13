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
          A passionate Software Developer with over two year of experience in the
          IT industry. I specialize in Data Structures and Algorithms as
          well as Web and App Development. My strong problem-solving skills and
          adaptability make me a fast learner, allowing me to quickly grasp new
          concepts and technologies. I&apos;m always eager to tackle challenging
          projects, collaborate with teams, and create impactful solutions that
          drive innovation. Let&apos;s build something amazing together!
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
          <a href="Dhruv Singh.pdf" download="Dhruv Resume" target="_blank">
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
