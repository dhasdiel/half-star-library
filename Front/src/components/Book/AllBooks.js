import React from "react";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import CardBook from "./CardBook";

const AllBooks = (props) => {
  var allBooks = useSelector((state) => state.books.books);
  const currentUser = useSelector((state) => state.users.currentUser);

  const getUserBooks = (key) => {
    let lenBooks = 0;
    let userBooks = [];
    if (key === "pastBooks") {
      lenBooks = currentUser?.pastBooks.length;
      userBooks = currentUser.pastBooks;
    } else if (key === "hasBooks") {
      lenBooks = currentUser?.hasBooks.length;
      userBooks = currentUser.hasBooks;
    }
    let newListBooks = [];
    for (let i = 0; i < lenBooks; i++) {
      for (let j = 0; j < allBooks.length; j++) {
        if (allBooks[j].id === userBooks[i]) {
          newListBooks.push(allBooks[j]);
        }
      }
    }
    return newListBooks;
  };

  const getModeBooks = () => {
    if (props.mode === "genre") {
      const filterdBooks = allBooks.filter(
        (book) => book.genre === currentUser.genre
      );
      return filterdBooks;
    } else if (props.mode === "borrow") {
      return allBooks;
    } else if (props.mode === "return") {
      return getUserBooks("hasBooks");
    } else if (props.mode === "remove") {
      return allBooks;
    }
  };

  const books = getModeBooks();

  return (
    <Card.Group>
      {books?.map((book) => (
        <CardBook key={book.id} book={book} action={props.mode} />
      ))}
    </Card.Group>
  );
};

export default AllBooks;
