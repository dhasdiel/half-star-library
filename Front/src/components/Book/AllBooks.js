import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Button, Container } from "semantic-ui-react";
import AddData from "../AddData";
import AddBook from "./AddBook";
import CardBook from "./CardBook";

const AllBooks = (props) => {
  const currentUser = useSelector((state) => state.users.currentUser);
  var allBooks = useSelector((state) => state.books.books);
  const [books, setBooks] = useState([]);

  const getUserBooks = (key) => {
    let lenBooks = 0;
    let temp = null;
    if (key === "pastBooks") {
      lenBooks = currentUser?.pastBooks.length;
      temp = currentUser?.pastBooks;
    } else if (key === "hasBooks") {
      lenBooks = currentUser?.hasBooks.length;
      temp = currentUser?.hasBooks;
    }
    let newListBooks = [];
    for (let i = 0; i < lenBooks; i++) {
      for (let j = 0; j < allBooks.length; j++) {
        if (allBooks[j].id === temp[i]) {
          newListBooks.push(allBooks[j]);
        }
      }
    }
    setBooks(newListBooks);
  };

  useEffect(() => {
    if (currentUser) {
      if (props.mode === "genre") {
        const filterdBooks = allBooks.filter(
          (book) => book.genre === currentUser?.genre
        );
        setBooks(filterdBooks);
      } else if (props.mode === "borrow") {
        setBooks(allBooks);
      } else if (props.mode === "return") {
        getUserBooks("hasBooks");
      } else if (props.mode === "past") {
        getUserBooks("pastBooks");
      } else if (props.mode === "remove") {
        setBooks(allBooks);
      } else if (props.mode === "has") {
        getUserBooks("hasBooks");
      }
    }
  }, [props.mode, currentUser, allBooks]);

  // useEffect(() => {
  //   console.log(`all books ${props.mode}`, books);
  // }, [books]);

  // useEffect(() => {
  //   console.log(`all books user`, currentUser);
  // }, [currentUser]);

  return (
    <>
      {props.mode === "remove" && <AddBook />}
      <Card.Group>
        {books?.map((book) => (
          <CardBook key={book.id} book={book} action={props.mode} />
        ))}
      </Card.Group>
    </>
  );
};

export default AllBooks;
