import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { MessengerChat } from "react-messenger-chat-plugin";
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
          Learn chat bot
        </a>
      </header>
      {/*<MessengerChat*/}
      {/*  pageId="110906321050881"*/}
      {/*  debugMode={true}*/}
      {/*  greetingDialogDisplay={"hide"}*/}
      {/*  themeColor={"#e97a28"}*/}
      {/*  loggedInGreeting="loggedInGreeting"*/}
      {/*  loggedOutGreeting="loggedOutGreeting"      */}
      {/*/>*/}
        <MessengerCustomerChat
            pageId="110906321050881"
        />,
    </div>
  );
}

export default App;
