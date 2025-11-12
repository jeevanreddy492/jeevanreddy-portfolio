import React from "react";

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.container}>
        {/* DDoS Detection */}
        <div style={styles.card}>
          <h3 style={styles.title}>Detection of DDoS Attacks using ML (RNN)</h3>
          <p style={styles.desc}>
            Built a machine learning model using Recurrent Neural Networks to detect and mitigate
            Distributed Denial of Service attacks in real time.
          </p>
          <a href="#" style={styles.button}>View Project</a>
        </div>

        {/* Feed the Needy */}
        <div style={styles.card}>
          <h3 style={styles.title}>Feed the Needy</h3>
          <p style={styles.desc}>
            Developed a web platform connecting food donors with local NGOs to reduce food waste
            and support the community. Built using HTML, CSS, PHP, and MySQL.
          </p>
          <a href="#" style={styles.button}>View Project</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#ffffff",
    padding: "80px 60px",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    color: "#007acc",
    marginBottom: "50px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  card: {
    backgroundColor: "#f9f9f9",
    width: "300px",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  desc: {
    fontSize: "15px",
    marginBottom: "20px",
    color: "#555",
  },
  button: {
    backgroundColor: "#007acc",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "14px",
  },
};
