import React from "react";

import { SpeechHome } from "./speech";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span style={{ paddingTop: 10 }}>Speech To Text</span>
        <SpeechHome />
      </header>
    </div>
  );
}

export default App;
