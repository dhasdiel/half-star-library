import React from "react";
import { Tab, Header } from "semantic-ui-react";
import AllBooks from "./AllBooks";

const panes = [
  {
    menuItem: "All",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="alluser" />
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
