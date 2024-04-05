import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tablero from "./components/Tablero/Tablero";
import Navbar from "./components/navbar/Navbar";
import ChatWebSocket from "./components/ChatWebSocket/ChatWebSocket";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Navbar/>
        
        <section>
         
        </section>

        <section>
          <Tablero/>
        </section> */}

         <ChatWebSocket/>
         
      </header>
    </div>
  );
}

export default App;
