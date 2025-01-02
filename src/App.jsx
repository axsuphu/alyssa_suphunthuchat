import React, { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import DarkMode from "./components/DarkMode";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DarkMode />
      <div className="bg-white dark:bg-stone-900 dark:text-stone-300 text-stone-900 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto"></div>
      </div>
    </>
  );
}

export default App;
