// import { useState } from 'react'

import NavBar from './Pages/NavBar';

import './App.css'
import Main from './Pages/Main';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import WorkExp from './Pages/WorkExp';

function App() {
  return (
    <>
    {/* Look up at this  */}
      <div className="flex flex-col m-2.5 items-center"> 
        <NavBar />
        <Main id={"main" }/>
        <Skills id="skills" />
        <Projects id="projects" />
        <WorkExp id="experience" />
      </div>
    </>
  );
}

export default App;
