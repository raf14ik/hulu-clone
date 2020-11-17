import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";
function App() {
  const [selectionOption, setSelectionOption] = useState(
    requests.fetchTrending
  );

  return (
    <div className="app">
      <Header />
      <Nav setSelectionOption={setSelectionOption} />
      <Results selectionOption={selectionOption} />
    </div>
  );
}

export default App;
