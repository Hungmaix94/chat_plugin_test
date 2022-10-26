import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MessengerChat } from "react-messenger-chat-plugin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MessengerChat
        pageId="110906321050881"
        themeColor={"#3578E5"}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"      
      />
    </div>
  );
}

export default App;
