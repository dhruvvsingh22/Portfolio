import React from "react";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";
import "./Language.css";

const Language = () => {
  return (
    <div className="languageContainer">
      <div className="serviceQualityTitle">Unmatched Service Quality</div>
      <div className="serviceDescription">
        I specialize in crafting user-friendly websites and apps and developing
        cutting-edge software solutions using the latest technologies. My focus
        is on delivering seamless, dynamic user experiences that drive
        engagement and satisfaction
      </div>
      <div className="infoContainer">
        <div className="infoColumn">
          <div className="infoRow">
            <div className="iconLanguage">
              <User2 size={20} />
            </div>
            <div className="infoText">Dhruv Singh</div>
          </div>
          <div className="infoRow">
            <div className="iconLanguage">
              <MailIcon size={20} />
            </div>
            <div className="infoText">dhruvvsingh22@gmail.com</div>
          </div>
          <div className="infoRow">
            <div className="iconLanguage">
              <GraduationCap size={20} />
            </div>
            <div className="infoText">B.Tech in Computer Science</div>
          </div>
        </div>
        <div className="infoColumn">
          <div className="infoRow">
            <div className="iconLanguage">
              <PhoneCall size={20} />
            </div>
            <div className="infoText">+91 9318315410</div>
          </div>
          <div className="infoRow">
            <div className="iconLanguage">
              <Calendar size={20} />
            </div>
            <div className="infoText">Born on 22 October 2001</div>
          </div>
          <div className="infoRow">
            <div className="iconLanguage">
              <HomeIcon size={20} />
            </div>
            <div className="infoText">Gurgaon Haryana</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
