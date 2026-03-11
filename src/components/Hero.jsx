import React from "react";
import profilePic from "../assets/ProfilePicture.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Hi, I'm <span>Jeevan</span></h1>
        <h2>Software Engineer & Competitive Programmer</h2>
        <p>
          Full Stack Java Developer with ~3 years of experience building scalable backend systems using Java, 
          Spring Boot, and microservices. 
          Experienced in developing REST APIs, integrating SQL/NoSQL databases, 
          and building responsive web applications with React. 
          Passionate about cloud-native development, distributed systems, and clean software architecture.
        </p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
      <img src={profilePic} alt="Jeevan" className="hero-img" />
    </section>
  );
}