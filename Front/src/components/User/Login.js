import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Message, Form, Header } from "semantic-ui-react";
import { selectAllUsers, setCurrentUser } from "../../redux/userSlice";

function Login() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const users = useSelector(selectAllUsers);
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
    console.log(user);
    if (user) {
      dispatch(setCurrentUser(user));
      setError(false);
      setName("");
      console.log("Works");
      // navigate("/");
      window.location.href = "/";
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Header as="h1">Login</Header>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Form.Input
              label="Full Name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Field>
          {error && (
            <span style={{ color: "red", display: "block" }}>
              User not exist
            </span>
          )}
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
