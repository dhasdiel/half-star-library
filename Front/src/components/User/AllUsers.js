import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import CardUser from "./CardUser";
import AddUser from "./AddUser";

const AllUsers = () => {
  const allUsers = useSelector((state) => state.users.users);
  return (
    <>
      <AddUser />
      {allUsers?.length === 0 && (
        <Header className="not-found" as="h3">
          No users found.
        </Header>
      )}
      <Card.Group>
        {allUsers?.map((user) => (
          <CardUser key={user.id} user={user} />
        ))}
      </Card.Group>
    </>
  );
};

export default AllUsers;
