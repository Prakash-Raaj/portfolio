// import { useState } from 'react'

import NavBar from './Pages/NavBar';

import './App.css'
import Main from './Pages/Main';

function App() {
  return (
    <>
      <div className="flex flex-col m-2.5">
        <NavBar />
        <Main/>
      </div>
    </>
  );
}

export default App;
