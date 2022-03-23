import React from "react";
import './App.scss';
import NavBar from "../src/components/NavBar";
import MintingPage from "./pages/MintingPage";


function App() {
  return (
    <div className="App">
        <NavBar />
        <MintingPage />
    </div>
  );
}

export default App;
