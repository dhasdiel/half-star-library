import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
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

  // const getModeBooks = () => {
  //   if (props.mode === "genre") {
  //     const filterdBooks = allBooks.filter(
  //       (book) => book.genre === currentUser.genre
  //     );
  //     return filterdBooks;
  //   } else if (props.mode === "borrow") {
  //     return allBooks;
  //   } else if (props.mode === "return") {
  //     return getUserBooks("hasBooks");
  //   } else if (props.mode === "past") {
  //     return getUserBooks("pastBooks");
  //   } else if (props.mode === "remove") {
  //     return allBooks;
  //   }
  // };

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
      }
    }
  }, [props.mode, currentUser]);

  // useEffect(() => {
  //   console.log(`all books ${props.mode}`, books);
  // }, [books]);

  // useEffect(() => {
  //   console.log(`all books user`, currentUser);
  // }, [currentUser]);

  // setBooks(getModeBooks());

  return (
    <Card.Group>
      {books?.map((book) => (
        <CardBook key={book.id} book={book} action={props.mode} />
      ))}
    </Card.Group>
  );
};

export default AllBooks;
