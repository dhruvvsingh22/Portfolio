import Image from "next/image";
import React from "react";
import { RiBriefcase4Fill, RiTodoFill } from "react-icons/ri";
import "./ProfileImage.css";

const ProfileImage = () => {
  return (
    <div>
      <div className="profileContainer">
        <div className="experienceBadge">
          <div className="iconWrapper">
            <RiBriefcase4Fill size={30} />
          </div>
          <p className="badgeNumber">2</p>
          <div className="badgeText">
            <p>years of</p>
            <p>experience</p>
          </div>
        </div>

        <img src="/profile.png" alt="Dhruv Singh" className="myProfileImage" />

        {/* <div className="projectsBadge">
          <div className="iconWrapper">
            <RiTodoFill size={30} />
          </div>
          <p className="badgeNumber">6</p>
          <div className="badgeText">
            <p>Projects</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileImage;
