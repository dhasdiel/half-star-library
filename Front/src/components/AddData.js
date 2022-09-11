import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Form, Input, Select } from "semantic-ui-react";
import { addBookAction, addUserAction } from "../socket/socketEmit";

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

const AddData = (props) => {
  const mode = props.mode;
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [userGenre, setUserGenre] = useState("");
  const [isManager, setIsManager] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [quanity, setQuanity] = useState("");

  const numOfBooks = useSelector((state) => state.books.numOfBooks);
  const numOfUsers = useSelector((state) => state.users.numOfUsers);

  const addUser = () => {
    const newUser = {
      id: numOfUsers + 1,
      fullname: fullName,
      age: Number(age),
      genre: String(userGenre),
      isManager: isManager,
      pastBooks: [],
      hasBooks: [],
    };
    setShow(false);
    addUserAction(newUser);
  };

  const addBook = () => {
    const newBook = {
      id: numOfBooks + 1,
      title: title,
      author: author,
      genre: String(bookGenre),
      quanity: Number(quanity),
      borrowNow: 0,
    };
    setShow(false);
    addBookAction(newBook);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "user") {
      addUser();
    } else {
      addBook();
    }
  };

  return (
    <>
      {show ? (
        <div style={{ marginBottom: "15px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="5">
              {mode === "user" ? (
                <>
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
                </>
              ) : (
                <>
                  <Form.Field
                    control={Input}
                    label="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Form.Field
                    control={Input}
                    label="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <Form.Field
                    control={Select}
                    label="Genre"
                    options={genreOptions}
                    onChange={(e, data) => setBookGenre(data.value)}
                  />
                  <Form.Field
                    control={Input}
                    label="Quanity"
                    onChange={(e) => setQuanity(e.target.value)}
                  />
                </>
              )}
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
        </div>
      ) : (
        <Button
          style={{ marginBottom: "15px" }}
          color="blue"
          onClick={() => setShow(true)}
        >
          Add {mode}
        </Button>
      )}
    </>
  );
};

export default AddData;
