import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>

      <p className="contact-subtext">
        Let’s connect and build something great together!
      </p>

      <ul className="contact-list">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:jr.pappu.11@gmail.com">
            jr.pappu.11@gmail.com
          </a>
        </li>

        <li>
          <strong>Phone:</strong>{" "}
          <a href="tel:+15629129631">
            +1 (562) 912-9631
          </a>
        </li>

        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/jeevan-pappu-6392ba1b4/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/jeevan-reddy
          </a>
        </li>

        <li>
          <strong>Resume:</strong>{" "}
          <a
            href="https://drive.google.com/file/d/15pbAmiI6eijIBywtl9vguGCscUcaEfNu/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </li>
      </ul>
    </section>
  );
}