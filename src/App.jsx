import React from "react";
import DarkMode from "./components/DarkMode";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="bg-app">
        <div className="bg-overlay"></div>
        <DarkMode />
        <Router>
          <AppContent />
        </Router>
      </div>
    </>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Show navbar on Home Page only */}
      {location.pathname === "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
