import React from "react";
import { Tab, Header } from "semantic-ui-react";
import AllBooks from "./AllBooks";

const panes = [
  {
    menuItem: "All",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="borrow" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Favorite genre",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="genre" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "remove",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="remove" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "return",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="return" />
      </Tab.Pane>
    ),
  },
];

function Borrow() {
  return (
    <>
      <Header as="h1">Books to borrow</Header>
      <Tab panes={panes} />
    </>
  );
}

export default Borrow;
