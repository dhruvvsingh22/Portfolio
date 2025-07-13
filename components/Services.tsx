import React from "react";
import "./Service.css";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Software Development",
    description:
      "I have contributed to the development of several software projects for Samsung devices, including significant work on the software for the Samsung Family Hub and Samsung washing machines.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "During my tenure at Panify Capital Limited, I developed over 20 web pages and implemented various internal features for employee use. These included administrative functionalities for creating, editing, and deleting content across the entire website.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "While at Panify Capital Limited and during my college years, I gained experience in app development, building ordering and quiz apps in college and contributing to the development of web pages within the app infrastructure at Panify Capital Limited.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="servicesContainer">My Expertise</div>
      <div className="servicesContent">
        {serviceData.map((service, index) => (
          <div
            className={`serviceCard ${index === 0 ? "marginLeftNone" : ""}`}
            key={service.title}
          >
            <div className="serviceIcon">{service.icon}</div>
            <div className="serviceContent">
              <div className="serviceTitle">{service.title}</div>
              <div className="serviceDescription">{service.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
