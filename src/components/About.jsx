import React from "react";

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>Skills & Certfications</h2>

      <div style={styles.container}>
        

      
        <div style={styles.card}>
          <h3 style={styles.subheading}>💡 Skills</h3>
          <ul style={styles.list}>
            <li>Java</li>
            <li>AWS Cloud Services</li>
            <li>SQL</li>
            <li>Tableau</li>
            <li>HTML, CSS, JavaScript, React</li>
            <li>Python</li>
            <li>C / C++</li>
            <li>Data Structures & Algorithms</li>
            <li>Oracle Documaker</li>
          </ul>
        </div>

        
        <div style={styles.card}>
          <h3 style={styles.subheading}>🏅 Certifications</h3>
          <ul style={styles.list}>
            <li>Data Structures & Algorithms — GeeksforGeeks</li>
            <li>AWS Cloud Practitioner — AWS</li>
            <li>Java & SQL — NPTEL</li>
          </ul>
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
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "left",
  },
  subheading: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
  },
};
