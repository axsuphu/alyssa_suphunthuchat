import React from "react";
import Hero from "./Hero";
import Navbar from "../../components/layout/Navbar";

const HomePage = () => {
  return (
    <div className="h-auto w-auto flex lg:items-center flex-col lg:flex-row">
      <Hero />
      <Navbar />
    </div>
  );
};

export default HomePage;
