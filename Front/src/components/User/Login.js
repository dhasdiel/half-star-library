import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { setCurrentUser } from "../../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const isExistUser = (username, users) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].fullname === username) {
        return users[i];
      }
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = name;
    const user = isExistUser(username, users);
    if (user) {
      dispatch(setCurrentUser(user));
      setError(false);
      setName("");
      window.location.href = "/";
    } else {
      setError(true);
    }
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", backgroundColor: "#334155" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Login to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && (
              <span style={{ color: "red", display: "block" }}>
                User not exist
              </span>
            )}
            <Button color="teal" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
