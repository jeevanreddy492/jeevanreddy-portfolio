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
          <a href="" style={styles.button}>View Project</a>
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

        <div style={styles.card}>
          <h3 style={styles.title}>Encrypted Password Storage & Retrieval System</h3>
          <p style={styles.desc}>
            This project is a secure, end to end password storage system built using Spring Boot, AES encryption encrypted database entries that ensure safe credential handling and reliable retrieval.
          </p>
          <a href="https://github.com/jeevanreddy492/PasswordSecurity" style={styles.button}>View Project</a>
        </div>

        <div style={styles.card}>
          <h3 style={styles.title}>Little Stars Daycare</h3>
          <p style={styles.desc}>
            This project is a lightweight, single page React website for Little Stars Daycare that uses reusable components and custom CSS to present services, contact details, and operating hours in a clean, modern, and easy to navigate UI for parents.
          </p>
          <a href="https://simple-website-sepia.vercel.app" style={styles.button}>View Project</a>
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
