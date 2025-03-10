import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/about">About Me</Link>
      <Link>Download CV</Link>
    </nav>
  );
};

export default Navbar;
