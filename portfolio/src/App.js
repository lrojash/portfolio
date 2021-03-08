import React from "react";
import Router from './components/Router'
import './styles/styles.css'
// Lights
function App(props) {
  return (
    <div>
      <Router {...props} />
    </div>
  );
}

export default App;
