import React from "react";
import { Tab, Header } from "semantic-ui-react";
import AllBooks from "./AllBooks";

const panes = [
  {
    menuItem: "All",
    render: () => (
      <Tab.Pane>
        <AllBooks mode="return" />
      </Tab.Pane>
    ),
  },
];

const Return = () => {
  return (
    <>
      <Header as="h1">Books to return</Header>
      <Tab panes={panes} />
    </>
  );
};

export default Return;
