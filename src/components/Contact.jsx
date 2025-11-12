import React from "react";

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>
      <p style={styles.subtext}>Let’s connect and build something great together!</p>

      <ul style={styles.list}>
        <li><strong>Email:</strong> <a href="mailto:jr.pappu.11@gmail.com">jr.pappu.11@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+15629129631">+1 (562) 912-9631</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jeevan-reddy-6b7507385/" target="_blank">linkedin.com/in/jeevan-reddy</a></li>
        <li><strong>Resume:</strong> <a href="#" download>Download PDF</a></li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#f9f9f9",
    padding: "80px 60px",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    color: "#007acc",
    marginBottom: "30px",
  },
  subtext: {
    color: "#555",
    fontSize: "16px",
    marginBottom: "30px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
    fontSize: "16px",
  },
};
