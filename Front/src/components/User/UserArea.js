import React, { useEffect, useState } from "react";
import { changeUserDetails } from "../../socket/socketEmit";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  Form,
  Header,
  Input,
  Radio,
  Select,
} from "semantic-ui-react";
import { setCurrentUser } from "../../redux/userSlice";

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
  const books = useSelector((state) => state.books.books);

  const [fullName, setFullName] = useState("Full name");
  const [age, setAge] = useState("Age");
  const [genre, setGenre] = useState("Genre");
  const [userPastBooks, setUserPastBooks] = useState([]);

  const getUserPastBooks = () => {
    let pastBooks = [];
    for (let i = 0; i < currentUser?.pastBooks.length; i++) {
      for (let j = 0; j < books.length; j++) {
        if (books[j].id === currentUser.pastBooks[i]) {
          pastBooks.push(books[j]);
        }
      }
    }
    setUserPastBooks(pastBooks);
  };

  useEffect(() => {
    if (currentUser) {
      setFullName(currentUser.fullname);
      setAge(String(currentUser.age));
      setGenre(currentUser.genre);
      getUserPastBooks();
    }
  }, [currentUser]);

  // const handleToggle = () => {
  //   console.log(document.getElementsByClassName("field"));
  //   // document.getElementsByClassName("field").disabled = true;
  // };

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
    localStorage["user"] = JSON.stringify(changedUser);
    dispatch(setCurrentUser(changedUser));
  };

  return (
    <>
      {/* <span>Edit: </span>
      <Radio toggle onClick={handleToggle} /> */}
      <Header as="h1">Personal info</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
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
      <div style={{ marginTop: "20px" }}>
        <Header as="h1">Books you returned:</Header>
        <Card.Group centered>
          {userPastBooks.map((book) => (
            <Card key={book.id}>
              <Card.Content>
                <Card.Header content={book.title} />
                <Card.Meta content={book.genre} />
                <Card.Description content={book.author} />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </>
  );
};

export default UserArea;
