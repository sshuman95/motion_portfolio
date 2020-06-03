import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from "./Components/splash_page/splash";
import Projects from "./Components/projects/projects";
import About from "./Components/About/about";
function App() {
  return (
    <div className="App">
       <Splash/>
      <main id="grid">
        <About/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
