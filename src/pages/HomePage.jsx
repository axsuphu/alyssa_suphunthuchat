import React from "react";
import Hero from "../components/sections/Hero";
import Navbar from "../components/layout/Navbar";

const HomePage = () => {
  return (
    <div className="h-auto w-auto flex items-center">
      <Hero />
      <Navbar />
    </div>
  );
};

export default HomePage;
