import React from "react";
import profilePic from "../assets/ProfilePicture.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Hi, I'm <span>Jeevan</span></h1>
        <h2>Software Engineer & Competitive Programmer</h2>
        <p>
          Experienced Software Engineer with 3 years in Oracle Documaker,
          strong expertise in Java, scalable backend systems and cloud technologies.
        </p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
      <img src={profilePic} alt="Jeevan" className="hero-img" />
    </section>
  );
}