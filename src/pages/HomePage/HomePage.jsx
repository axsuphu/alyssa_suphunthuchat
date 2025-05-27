import React from "react";
import Hero from "./Hero";
import Navbar from "../../components/layout/Navbar";
import Main from "../../components/layout/Main";

const HomePage = () => {
  return (
    <Main id="home">
      <div className="flex lg:items-center justify-center flex-col lg:flex-row h-screen">
        <Hero />
        <Navbar />
      </div>
    </Main>
  );
};

export default HomePage;
