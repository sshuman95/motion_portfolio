import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from "./Components/splash_page/splash";
import Projects from "./Components/projects/projects";
import About from "./Components/About/about";
import Exp from "./Components/Exp/exp";
import { motion } from "framer-motion"
function App() {
  return (
    <div className="App">
       <Splash/>
       <header className="header">
        <nav>
          <div className="initials">
              <h3>SS</h3>
          </div>
          <div className="links">
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
          </div>
        </nav>
       </header>
      <main id="grid">
        <About/>
        <Exp/>
        <Projects/>
        
      </main>
      <footer>
        <h1>Hello</h1>
      </footer>
    </div>
  );
}

export default App;
