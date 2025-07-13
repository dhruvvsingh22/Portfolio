import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "Data Structure and Algorithm" },
    { name: "Next JS" },
    { name: "React JS" },
    { name: "CSS" },
    { name: "HTML" },
    { name: "Typescript" },
    { name: "OOPS" },
    { name: "Operating System" },
    { name: "DBMS" },
    { name: "Computer Networks" },
    { name: "Python" },
    { name: "Tizen OS" },
    { name: "C#" },
    { name: "C++" },
    { name: "Java" },
    { name: "System Design" },
    { name: "MY SQL" },
  ];
  const tools = [
    { name: "Vs Code" },
    { name: "Github" },
    { name: "Firebase" },
    { name: "Android Studio" },
    { name: "Jupyter" },
    { name: "Postman" },
  ];

  return (
    <div className="container">
      <div className="title">Technologies I have worked on</div>
      <div className="sectionTitle">Skills</div>
      <div className="divider"></div>
      <div className="skillsContainer">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            {skill.name}
          </div>
        ))}
      </div>
      <div className="sectionTitle marginTop">Tools</div>
      <div className="divider"></div>
      <div className="toolsContainer">
        {tools.map((tool) => (
          <div key={tool.name} className="tool">
            {tool.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
