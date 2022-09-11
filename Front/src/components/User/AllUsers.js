import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Form, Input, Select } from "semantic-ui-react";
import CardUser from "./CardUser";
import AddData from "../AddData";
import AddUser from "./AddUser";

const AllUsers = () => {
  const allUsers = useSelector((state) => state.users.users);
  return (
    <>
      <AddUser />
      <Card.Group>
        {allUsers?.map((user) => (
          <CardUser key={user.id} user={user} />
        ))}
      </Card.Group>
    </>
  );
};

export default AllUsers;
