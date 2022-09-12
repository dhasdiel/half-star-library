import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import SidebarMenu from "./components/UI/SidebarMenu";
import Home from "./components/Home";
import UserArea from "./components/User/UserArea";
import Borrow from "./components/Book/Borrow";
import Return from "./components/Book/Return";
import PastBooks from "./components/Book/PastBooks";
import Management from "./components/Manager/Management";
import NotFound from "./components/UI/NotFound";
import Login from "./components/User/Login";
import { setCurrentUser } from "./redux/userSlice";
import Result from "./components/Result";

const App = () => {
  const dispatch = useDispatch();
  window.onload = function () {
    if (localStorage["user"]) {
      dispatch(setCurrentUser(localStorage["user"]));
    }
  };

  return (
    <Router>
      {localStorage["user"] ? (
        <>
          <SidebarMenu />
          <div className="content-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/userarea" element={<UserArea />} />
              <Route path="/borrow" element={<Borrow />} />
              <Route path="/return" element={<Return />} />
              <Route path="/pastbooks" element={<PastBooks />} />
              <Route path="/management" element={<Management />} />
              <Route path="/result" element={<Result />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </>
      ) : (
        <Login />
      )}
    </Router>
  );
};

export default App;
