import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header, Container, Card } from "semantic-ui-react";
import CardUser from "./User/CardUser";
import CardBook from "./Book/CardBook";

const Result = () => {
  const searchValue = useLocation().state;
  const books = useSelector((state) => state.books.books);
  const users = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  const [resultBook, setResultBook] = useState([]);
  const [resultUser, setResultUser] = useState([]);

  const searchInUsers = () => {
    const temp = users?.filter((user) => user.fullname.includes(searchValue));
    console.log(temp);
    setResultUser(temp);
  };

  const searchInBooks = () => {
    const temp = books?.filter((book) => book.title.includes(searchValue));
    setResultBook(temp);
  };

  useEffect(() => {
    if (currentUser?.isManager) {
      searchInUsers();
    }
    searchInBooks();
  }, [searchValue, books, users]);

  return (
    <>
      <Header as="h1">Result</Header>
      <Container>
        {resultUser.length > 0 && (
          <>
            <Header as="h3">Users</Header>
            <Card.Group>
              {resultUser?.map((user) => (
                <CardUser key={user.id} user={user} />
              ))}
            </Card.Group>
          </>
        )}
        <Header as="h3">Books</Header>
        <Card.Group>
          {resultBook?.map((book) => (
            <CardBook
              key={book.id}
              book={book}
              action={currentUser?.isManager ? "remove" : "borrow"}
            />
          ))}
        </Card.Group>
      </Container>
    </>
  );
};

export default Result;
