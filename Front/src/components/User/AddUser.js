import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Input, Select } from "semantic-ui-react";
import { addUserAction } from "../../socket/socketEmit";
import PopupModal from "../UI/PopupModal";

const genreOptions = [
  { key: "a", text: "Action", value: "action" },
  { key: "b", text: "Biography", value: "biography" },
  { key: "n", text: "Novel", value: "novel" },
  { key: "f", text: "Fantasy", value: "fantasy" },
  { key: "h", text: "Horror", value: "horror" },
  { key: "t", text: "Thriller", value: "thriller" },
];

const managerOptions = [
  { key: "t", text: "True", value: true },
  { key: "f", text: "False", value: false },
];

const AddUser = () => {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [userGenre, setUserGenre] = useState("");
  const [isManager, setIsManager] = useState("");

  const numOfUsers = useSelector((state) => state.users.numOfUsers);

  const handleSubmit = () => {
    const newUser = {
      id: numOfUsers + 1,
      fullname: fullName,
      age: Number(age),
      genre: String(userGenre),
      isManager: isManager,
      pastBooks: [],
      hasBooks: [],
    };
    // setShow(false);
    addUserAction(newUser);
  };

  return (
    <>
      {show ? (
        <div style={{ marginBottom: "15px" }}>
          <Form onSubmit={handleSubmit} className="add-form">
            <Form.Group widths="5">
              <Form.Field
                control={Input}
                label="Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
              <Form.Field
                control={Input}
                label="Age"
                onChange={(e) => setAge(e.target.value)}
              />
              <Form.Field
                control={Select}
                label="Favourite Genre"
                options={genreOptions}
                onChange={(e, data) => setUserGenre(data.value)}
              />
              <Form.Field
                control={Select}
                label="Manager"
                options={managerOptions}
                onChange={(e, data) => setIsManager(data.value)}
              />
            </Form.Group>
            <PopupModal
              icon="add user"
              message="User added to the library"
              btn={
                <Button className="add-btn" type="submit">
                  Add
                </Button>
              }
            />
          </Form>
        </div>
      ) : (
        <Button
          style={{ marginBottom: "15px" }}
          color="blue"
          onClick={() => setShow(true)}
        >
          Add User
        </Button>
      )}
    </>
  );
};

export default AddUser;
