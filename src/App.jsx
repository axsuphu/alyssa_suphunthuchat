import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/ProjectsPage/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <di className="bg-primary">
        <div className="bg-overlay" />
        <div className="flex z-10 min-h-screen justify-center">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      </di>
    </>
  );
};

export default App;
