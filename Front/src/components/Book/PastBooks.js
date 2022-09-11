import React from "react";
import { Tab, Header } from "semantic-ui-react";
import AllBooks from "./AllBooks";

const panes = [
  {
    menuItem: "Now",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="has" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Past",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="past" />
      </Tab.Pane>
    ),
  },
];

const PastBooks = () => {
  return (
    <>
      <Header as="h1">My Books</Header>
      <Tab panes={panes} />
    </>
  );
};

export default PastBooks;
