import React from "react";
import Summary from "./components/Summary";
import Main from "./components/Main";
import "./Style.css";

const App = () => {
  return (
    <div className="app">
      <Main />
      <Summary />
    </div>
  );
};

export default App;
