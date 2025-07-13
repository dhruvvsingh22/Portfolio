import React from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <div className="qualificationContainer">
      <div className="title">My Awesome Journey</div>
      <div className="sectionsContainer">
        <div className="section">
          <div className="sectionTitle">Experience</div>
          <div>
            <div
              style={{
                marginTop: "10px",
                fontSize: "1.3rem",
              }}
            >
              <b style={{ fontWeight: "600" }}>
                1) Samsung India Electronic Pvt Limited{" "}(Samsung Research and Development, Delhi)
              </b>
            </div>
            <div className="position">Software Engineer</div>
            <div className="dates">8 Jan 2024 - Present</div>
            <div>Full Time (On Campus)</div>
            <div className="spacer"></div>
            <div>16 October 2023 - 8 Jan 2024</div>
            <div>Rise For Campus Remote Training</div>
            <div>On Campus Placement</div>
            <div></div>
          </div>
          <div>
            <div className="experience">
              2) Planify Capital Limited
            </div>
            <div className="position">Frontend Developer</div>
            <div className="dates">10 Jan 2023 - 10 July 2023</div>
            {/* <div className="spacer"></div> */}
            <div>Internship (6 Month)</div>
            <div className="dates">10 July 2023 - 14 October 2023</div>
            <div>Full time</div>
          </div>
        </div>
        <div className="section">
          <div className="sectionTitle">Education</div>
          <div>
            <div className="education">
              1) J.C Bose University of Science and Technology, YMCA Faridabad
            </div>
            <div className="grade"></div>
            <div className="course">B.Tech (Computer Science Engineering)</div>
            <div>1 August 2019 - 15 July 2023</div>
            <div>Grade: 8.54 Cgpa</div>
            <div className="education">2) S.K Sr Sec School, Gurugram</div>
            <div className="grade"></div>
            <div className="course">12th CBSE, Non Medical</div>
            <div>April 2018 - April 2019</div>
            <div>Grade: 87.4%</div>
            <div className="spacer"></div>
            <div className="course">10th CBSE</div>
            <div>April 2016 - April 2017</div>
            <div>Grade: 95%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
