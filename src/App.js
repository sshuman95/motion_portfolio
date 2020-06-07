import React from 'react';
//import logo from './Images/logo.svg';
import './App.css';
import Splash from "./Components/splash_page/splash";
import Projects from "./Components/projects/projects";
import About from "./Components/About/about";
import Exp from "./Components/Exp/exp";
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
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
       </header>
      <main id="grid">
        <About/>
        <Exp/>
        <Projects/>
      </main>
      <footer id="contact">
        <h1>Hello</h1>
      </footer>
    </div>
  );
}

export default App;
