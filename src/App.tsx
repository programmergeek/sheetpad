import React from "react";
import "./App.css";
import { Card } from "./Components";

function App() {
  return (
    <div className="App">
      <Card
        author="Will Joseph"
        header="Test"
        sampleText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        tags={["Test", "Sparta"]}
      />
    </div>
  );
}

export default App;
