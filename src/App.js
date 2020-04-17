import React from "react";
import "./App.css";
import NasaHeader from "./components/header";
import Card from "./components/cardComponent";
import NasaFooter from "./components/footerComponent";




function App() {
  return (
    <div className="App">
     <NasaHeader/>
      <Card/>
      <NasaFooter/>
    </div>
  );
}

export default App;
