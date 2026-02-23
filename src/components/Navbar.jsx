import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Jeevan Reddy</h2>
      <div className="nav-icons">
        <a href="https://www.linkedin.com/in/jeevan-reddy-6b7507385/" target="_blank">
          <GrLinkedin />
        </a>
        <a href="https://github.com/jeevanreddy492" target="_blank">
          <BsGithub />
        </a>
      </div>
    </nav>
  );
}