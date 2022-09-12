import React, { useEffect, useState } from "react";
import { changeUserDetails } from "../../socket/socketEmit";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Header, Input, Select } from "semantic-ui-react";
import { setCurrentUser } from "../../redux/userSlice";
import AllBooks from "../Book/AllBooks";

const genreOptions = [
  { key: "a", text: "Action", value: "action" },
  { key: "b", text: "Biography", value: "biography" },
  { key: "n", text: "Novel", value: "novel" },
  { key: "f", text: "Fantasy", value: "fantasy" },
  { key: "h", text: "Horror", value: "horror" },
  { key: "t", text: "Thriller", value: "thriller" },
];

const UserArea = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  const [fullName, setFullName] = useState("Full name");
  const [age, setAge] = useState("Age");
  const [genre, setGenre] = useState("Genre");

  useEffect(() => {
    if (currentUser) {
      setFullName(currentUser.fullname);
      setAge(String(currentUser.age));
      setGenre(currentUser.genre);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const changedUser = {
      id: currentUser.id,
      fullname: fullName,
      age: Number(age),
      genre: String(genre),
      isManager: currentUser.isManager,
      pastBooks: currentUser.pastBooks,
      hasBooks: currentUser.hasBooks,
    };
    console.log("send changed user");
    changeUserDetails(changedUser);
    dispatch(setCurrentUser(changedUser));
    localStorage["user"] = JSON.stringify(changedUser);
  };

  return (
    <>
      <Header as="h1">Personal info</Header>
      <Form onSubmit={handleSubmit} className="edit-form">
        <Form.Group widths="4">
          <Form.Field
            control={Input}
            label="Full name"
            placeholder={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Form.Field
            control={Input}
            label="Age"
            placeholder={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Form.Field
            control={Select}
            label="Favourite Genre"
            options={genreOptions}
            placeholder={genre}
            onChange={(e, data) => setGenre(data.value)}
          />
        </Form.Group>
        <Button type="submit">Update</Button>
      </Form>
      <Header as="h1">Books you returned:</Header>
      <div className="edit-form" style={{ marginTop: "20px" }}>
        <AllBooks mode="past" />
      </div>
    </>
  );
};

export default UserArea;
