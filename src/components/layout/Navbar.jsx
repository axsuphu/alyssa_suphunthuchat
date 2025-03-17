import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = {
    projects: "/projects",
    experience: "/experience",
    about: "/about",
  };

  const hoverEffect = "hover:italic";

  const links = Object.entries(pages).map(([name, path]) => (
    <Link key={name} to={path} className={hoverEffect}>
      {name.toUpperCase()}
    </Link>
  ));

  return (
    <nav className="font-ubuntumono font-bold tracking-tighter flex flex-col text-5xl mt-14 gap-3 md:text-7xl lg:text-6xl lg:ml-20 lg:gap-4">
      {links}
      <a>DOWNLOAD CV</a>
    </nav>
  );
};

export default Navbar;
