import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from "./Components/splash_page/splash";
import Projects from "./Components/projects/projects";
function App() {
  return (
    <div className="App">
       <Splash/>
      <main>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
