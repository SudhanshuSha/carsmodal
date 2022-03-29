import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Accordian from "./Components/Accordian/Accordian";
import Header from "./Components/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Accordian />
    </React.Fragment>
  );
}

export default App;
