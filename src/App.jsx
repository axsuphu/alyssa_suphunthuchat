import React, { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import DarkMode from "./components/DarkMode";
import Background from "./components/layout/Background";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Background />
      <HomePage />
    </>
  );
}

export default App;
