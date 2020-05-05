import React from "react";
import "./App.css";
import Titlebar from "./components/titlebar";
import Results from "./components/searchresults";

function App() {
  return (
    <div className="container">
      <Titlebar />
      <Results />
    </div>
  );
}

export default App;
