import React from "react";
import Description from "./Description";
import ProfileImage from "./ProfileImage";
import "./Hello.css"

const Hello = () => {
  return (
    <div
      className="DataImgCombine"
    >
      <Description />
      <ProfileImage />
    </div>
  );
};

export default Hello;
