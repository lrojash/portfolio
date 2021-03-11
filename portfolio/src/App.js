import React from "react";
import Router from './components/Router'
import './styles/styles.css'
import Particles from './components/Particles'

// Lights

function App(props) {
  return (
    <div>
      <Particles />
      <Router {...props} />
    </div>
  );
}

export default App;
