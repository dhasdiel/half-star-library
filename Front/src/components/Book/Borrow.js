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
];

const Borrow = () => {
  return (
    <>
      <Header as="h1">Books to borrow</Header>
      <Tab panes={panes} />
    </>
  );
};

export default Borrow;
