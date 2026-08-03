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
            href="https://www.linkedin.com/in/jeevan-reddy-pappu-23a94b243/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/jeevan-reddy
          </a>
        </li>

        <li>
          <strong>Resume:</strong>{" "}
          <a
            href="https://docs.google.com/document/d/1G_v-un0osdRLRDoCfaKVeEPKB5356wCFQtk8D-0-SE0/edit?usp=sharing"
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