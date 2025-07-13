import React from "react";
import ProfileImage from "./ProfileImage";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "./Form";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="header">
        <div>
          <div className="headerTitle">
            <div className="headerTitleLine"></div>
            <div className="headerTitleText">Hi</div>
          </div>
          <div className="mainTitle">Let&apos;s Work Togther</div>
          <div className="description">
            Let us unite and make a significant contribution to the tech
            industry.
          </div>
        </div>
      </div>
      <div className="content">
        <div className="contactDetails">
          <div className="contactItem">
            <div className="contactIcon">
              <MailIcon size={18} />
            </div>
            <div className="contactText">dhruvvsingh22@gmail.com</div>
          </div>
          <div className="contactItem">
            <div className="contactIcon">
              <HomeIcon size={18} />
            </div>
            <div className="contactText">Gurgaon Haryana</div>
          </div>
          <div className="contactItem">
            <div className="contactIcon">
              <PhoneCall size={18} />
            </div>
            <div className="contactText">+91 9318315410</div>
          </div>
        </div>
        <div className="formContainer">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
