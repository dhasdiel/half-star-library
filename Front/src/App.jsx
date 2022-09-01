import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "./components/UI/SidebarMenu";
import { command, sendHello } from "./socket/socketEmit";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Router>
      <SidebarMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userarea" element={<UserArea />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/return" element={<Return />} />
          <Route path="/pastbooks" element={<PastBooks />} />
          <Route path="/management" element={<Management />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <h1>{counter}</h1>
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
        </button> */}
      </div>
    </Router>
  );
};

export default App;
