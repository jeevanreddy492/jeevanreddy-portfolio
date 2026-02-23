import React from "react";

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          <span>Java</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
          <span>AWS</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <span>SQL</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg" />
          <span>Tableau</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <span>HTML</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <span>CSS</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <span>JavaScript</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <span>React</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <span>Python</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          <span>C</span>
        </div>

        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
          <span>C++</span>
        </div>

      </div>

      <h2 className="section-title" style={{ marginTop: "100px" }}>
        Certifications
      </h2>

      <div className="certifications-grid">

        <div className="cert-badge">
          <div>
            <h4>Data Structures & Algorithms</h4>
            <p>GeeksforGeeks</p>
          </div>
        </div>

        <div className="cert-badge">
          <div>
            <h4>AWS Cloud Practitioner</h4>
            <p>AWS</p>
          </div>
        </div>

        <div className="cert-badge">
          <div>
            <h4>Java & SQL</h4>
            <p>NPTEL</p>
          </div>
        </div>

      </div>
    </section>
  );
}