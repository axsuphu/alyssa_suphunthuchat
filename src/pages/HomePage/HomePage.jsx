import React from "react";
import Hero from "./Hero";
import Navbar from "../../components/layout/Navbar";
import Main from "../../components/layout/Main";

const HomePage = () => {
  return (
    <Main>
      <div className="flex lg:items-center flex-col lg:flex-row">
        <Hero />
        <Navbar />
      </div>
    </Main>
  );
};

export default HomePage;
