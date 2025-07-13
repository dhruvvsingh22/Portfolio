import React from "react";
import { User, MailIcon, MessageSquare } from "lucide-react";
import "./Form.css";

const Form = () => {
  return (
    <div className="formContainer">
      <div className="inputField">
        <input
          type="text"
          placeholder="Name"
          className="input"
          style={{ backgroundColor: "white" }}
        />
        <User size={20} className="icon" />
      </div>
      <div className="inputField">
        <input
          type="text"
          placeholder="Email ID"
          className="input"
          style={{ backgroundColor: "white" }}
        />
        <MailIcon size={20} className="icon" />
      </div>
      <div className="inputField large">
        <input
          type="text"
          placeholder="Type Your Message Here"
          className="input large"
          style={{ backgroundColor: "white" }}
        />
        <MessageSquare size={20} className="icon" />
      </div>
      <div className="button">
        <div className="buttonText">Let's Talk</div>
      </div>
    </div>
  );
};

export default Form;
