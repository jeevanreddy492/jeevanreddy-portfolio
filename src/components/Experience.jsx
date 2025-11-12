import React from "react";

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>

      <div style={styles.timeline}>
        {/* Accenture */}
        <div style={styles.item}>
          <div style={styles.date}>Oct 2021 – Aug 2023</div>
          <h3 style={styles.company}>Accenture – Custom Software Engineering Analyst</h3>
          <ul style={styles.details}>
            <li>Developed and optimized enterprise document workflows using Oracle Documaker.</li>
            <li>Built and maintained DAL scripts, triggers, and templates for automated communications.</li>
            <li>Worked on an internal employee referral portal using Java (Spring MVC).</li>
            <li>Collaborated with cross-functional Agile teams for testing and delivery.</li>
          </ul>
        </div>

        {/* ACL Digital */}
        <div style={styles.item}>
          <div style={styles.date}>Jan 2021 – Aug 2021</div>
          <h3 style={styles.company}>ACL Digital – Trainee Software Engineer</h3>
          <ul style={styles.details}>
            <li>Trained in core programming and networking fundamentals (routers, firewalls, VPNs).</li>
            <li>Simulated secure enterprise network communications and applied encryption techniques.</li>
            <li>Learned SDLC lifecycle and version control practices.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 60px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "32px",
    color: "#007acc",
    textAlign: "center",
    marginBottom: "50px",
  },
  timeline: {
    borderLeft: "3px solid #007acc",
    marginLeft: "40px",
    paddingLeft: "20px",
  },
  item: {
    marginBottom: "40px",
  },
  date: {
    fontWeight: "bold",
    color: "#555",
  },
  company: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  details: {
    lineHeight: "1.8",
  },
};
