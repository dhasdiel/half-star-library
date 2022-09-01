import "./App.css";
import React, { useState } from "react";
import SidebarMenu from "./components/UI/SidebarMenu";
import { command, sendHello } from "./socket/socketEmit";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <React.Fragment>
      <SidebarMenu />
      <div className="content"></div>
      {/* <div className="pusher right">
        <h1>{counter}</h1>
        <button
          onClick={(e) => {
            setCounter((curr) => curr + 1);
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            command(counter);
          }}
        >
          CLick Me
        </button>
        <button
          onClick={(e) => {
            sendHello();
          }}
        >
          {" "}
          Hello{" "}
        </button>
      </div> */}
    </React.Fragment>
  );
};

export default App;
