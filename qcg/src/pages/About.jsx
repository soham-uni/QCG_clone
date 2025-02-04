import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Club</h1>
      <div className="about-content">
        <p className="about-highlight">
          We work around <span>Quantum Machine Learning</span> | 
        </p>
        <p className="about-description">
          Quantum Computing Group is a student-run organization dedicated to fostering and advancing quantum computing at IIT Roorkee. 
          Established in 2020, QCG is now a part of the ACM IIT Roorkee Student Chapter.
        </p>
        <p className="about-description">
          Our members explore various aspects of quantum computing and aim to elevate the technological proficiency of the student community. 
          We conduct concept discussions, hands-on workshops, open projects, and an **annual Quantum Computing Hackathon** to provide students 
          with exposure to cutting-edge advancements in quantum computing.
        </p>
      </div>
    </div>
  );
}

export default About;
