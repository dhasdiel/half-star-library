import React from "react";
import { Tab, Header } from "semantic-ui-react";
import Dashboard from "./Dashboard";
import AllBooks from "../Book/AllBooks";
import AllUsers from "../User/AllUsers";

const panes = [
  {
    menuItem: "Dashboard",
    render: () => (
      <Tab.Pane>
        <Dashboard />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Books",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="remove" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Users",
    render: () => (
      <Tab.Pane>
        <AllUsers />
      </Tab.Pane>
    ),
  },
];

const Management = () => {
  return (
    <>
      <Header as="h1">Library Managment</Header>
      <Tab panes={panes} />
    </>
  );
};

export default Management;
