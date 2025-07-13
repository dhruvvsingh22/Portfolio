"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "./Project.css";

const Project = () => {
  const router = useRouter();

  const handleGitLink = () => {
    router.push("/projects");
  };

  return (
    <div className="container">
      <div className="title">My Projects</div>
      <div className="projectList">
        <div onClick={handleGitLink} className="projectCard">
          <div className="projectImageContainer">
            <div className="projectImageWrapper">
              <img src="/car.png" alt="Dhruv Singh" className="projectImage" />
            </div>
          </div>
          <div>
            <div className="projectTitle">Nexa Websites Nexa</div>
            <div className="projectDescription">Description</div>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImageContainer">
            <div className="projectImageWrapper">
              <img src="/car.png" alt="Dhruv Singh" className="projectImage" />
            </div>
          </div>
          <div>
            <div className="projectTitle">Nexa Websites Nexa</div>
            <div className="projectDescription">Description</div>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImageContainer">
            <div className="projectImageWrapper">
              <img src="/car.png" alt="Dhruv Singh" className="projectImage" />
            </div>
          </div>
          <div>
            <div className="projectTitle">Nexa Websites Nexa</div>
            <div className="projectDescription">Description</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
