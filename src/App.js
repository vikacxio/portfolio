import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./components/resume/Resume";
import Project from "./components/project/Project";
import About from "./components/about/About";
import Footer from "./components/Footer";


function App() {

  const [load, upadateLoad] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.title = 'Vikas Portfolio';
    
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <div className={`App ${theme}-theme`} id={load ? "no-scroll" : "scroll"}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />

      </div>
    </Router>

  );
}

export default App;
