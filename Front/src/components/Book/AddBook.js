import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Input, Select } from "semantic-ui-react";
import { addBookAction } from "../../socket/socketEmit";
import PopupModal from "../UI/PopupModal";

const genreOptions = [
  { key: "a", text: "Action", value: "action" },
  { key: "b", text: "Biography", value: "biography" },
  { key: "n", text: "Novel", value: "novel" },
  { key: "f", text: "Fantasy", value: "fantasy" },
  { key: "h", text: "Horror", value: "horror" },
  { key: "t", text: "Thriller", value: "thriller" },
];

const AddBook = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [quanity, setQuanity] = useState("");

  const numOfBooks = useSelector((state) => state.books.numOfBooks);

  const handleSubmit = () => {
    const newBook = {
      id: numOfBooks + 1,
      title: title,
      author: author,
      genre: String(bookGenre),
      quanity: Number(quanity),
      borrowNow: 0,
    };
    addBookAction(newBook);
    // setShow(false);
  };
  return (
    <>
      {show ? (
        <div style={{ marginBottom: "15px" }}>
          <Form onSubmit={handleSubmit} className="add-form">
            <Form.Group widths="5">
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
            </Form.Group>
            <PopupModal
              icon="book"
              message="Book added to the library"
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
          Add Book
        </Button>
      )}
    </>
  );
};

export default AddBook;
