import React from "react";
import Hero from "./Hero";
import Navbar from "../../components/layout/Navbar";
import Main from "../../components/layout/Main";
import BounceIn from "../../components/ui/BounceIn";

const HomePage = () => {
  return (
    <Main id="home">
      <BounceIn>
        <div className="flex lg:items-center justify-center flex-col lg:flex-row h-screen">
          <Hero />
          <Navbar />
        </div>
      </BounceIn>
    </Main>
  );
};

export default HomePage;
