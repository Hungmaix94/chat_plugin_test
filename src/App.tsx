import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { MessengerChat } from "react-messenger-chat-plugin";
import MessengerCustomerChat from 'react-messenger-customer-chat';
export const FACEBOOK_PAGE_ID = '110906321050881';

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
          pageId={FACEBOOK_PAGE_ID}
          themeColor={"#e97a28"}
      />
    </div>
  );
}

export default App;
