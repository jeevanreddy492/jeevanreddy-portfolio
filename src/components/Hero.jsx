import React from "react";
import profilePic from "../assets/ProfilePicture.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Jeevan</span>
        </h1>

        //<h2>Java Full Stack Developer</h2>

        <p>
  Software Engineer experienced in building enterprise-grade and cloud-native
  applications using Java, Spring Boot, Microservices, React.js, PostgreSQL,
  Apache Kafka, AWS, and RESTful APIs.
  <br /><br />
  Passionate about designing scalable distributed systems, high-performance APIs,
  event-driven architectures, secure software solutions, and backend services
  that power real-world business applications.
  <br /><br />
  Currently expanding my expertise in <strong>ASP.NET Core</strong>, <strong>C#</strong>,
  <strong>Entity Framework Core</strong>, and modern .NET application development,
  while actively building projects with <strong>Large Language Models (LLMs)</strong>,
  <strong>Retrieval-Augmented Generation (RAG)</strong>, and
  <strong>Agentic AI</strong>. I enjoy developing intelligent applications that
  combine AI with scalable backend systems to automate workflows, enhance user
  experiences, and solve complex real-world problems.
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