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
            +1 (562) 577-7369
          </a>
        </li>

        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/jeevan-reddy-6b7507385/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/jeevan-reddy
          </a>
        </li>

        <li>
          <strong>Resume:</strong>{" "}
          <a
            href="https://docs.google.com/document/d/1FyStBQdKm6DGxIreZ3JhPhPlCAkdhMPPtGGOysHCsiE/edit?usp=sharing"
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