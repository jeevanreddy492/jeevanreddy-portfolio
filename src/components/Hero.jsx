import React from "react";
import profilePic from "../assets/ProfilePicture.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Jeevan</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          Software Engineer experienced in building enterprise and cloud-native
          applications using Java, Spring Boot, Microservices, React.js,
          PostgreSQL, Apache Kafka, and AWS.
          <br /><br />
          Passionate about designing scalable distributed systems,
          high-performance REST APIs, event-driven architectures,
          and secure software solutions that power real-world business applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/15pbAmiI6eijIBywtl9vguGCscUcaEfNu/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn secondary"
          >
            Download Resume
          </a>
        </div>
      </div>

      <img
        src={profilePic}
        alt="Jeevan Pappu"
        className="hero-img"
      />
    </section>
  );
}