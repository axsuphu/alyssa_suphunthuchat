import React from "react";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="bg-app flex items-center justify-center">
        <div className="bg-overlay "></div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
