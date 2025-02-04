import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Animated Text */}
      <h1 className="home-title">
        <span>Quantum Computing Group</span>
      </h1>

      {/* Tagline with Typing Effect */}
      <p className="home-tagline">Elevating the Future with Quantum Information</p>

      {/* Content Section */}
      <div className="home-content">
        <p>
          Quantum Computing Group (QCG) is a student-run community fostering a passion for{" "}
          <span className="highlight">Quantum Computing & Quantum Information</span> at IIT Roorkee.
          Founded in 2020, we are an integral part of the ACM IIT Roorkee Student Chapter.
        </p>
        <p>
          Our members engage in **cutting-edge research**, **hands-on projects**, and **collaborative discussions** to drive technological
          advancements in quantum mechanics.
        </p>
      </div>

      {/* Three Key Features */}
      <div className="features-container">
        <div className="feature-card">
          <h2>📚 Workshops</h2>
          <p>Learn quantum concepts through interactive workshops.</p>
        </div>
        <div className="feature-card">
          <h2>🖥️ Open Projects</h2>
          <p>Collaborate on research-driven quantum computing projects.</p>
        </div>
        <div className="feature-card">
          <h2>🏆 Hackathons</h2>
          <p>Compete in our annual **Quantum Computing Hackathon**.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
