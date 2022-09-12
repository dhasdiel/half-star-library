import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Grid, Statistic, Card, List } from "semantic-ui-react";

const Home = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const books = useSelector((state) => state.books.books);
  const numOfBooks = useSelector((state) => state.books.numOfBooks);

  const [name, setName] = useState("");
  const [leftBooks, setLeftBooks] = useState(numOfBooks);
  const [newBooks, setNewBooks] = useState([]);

  const getNewBooks = () => {
    let newBooks = [];
    for (let i = numOfBooks - 1; i > numOfBooks - 5; i--) {
      newBooks.push(books[i]);
    }
    setNewBooks(newBooks);
  };

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.fullname);
      setLeftBooks(numOfBooks - currentUser?.pastBooks.length);
      getNewBooks();
    }
  }, [currentUser, numOfBooks]);

  return (
    <>
      <div className="home-container">
        <Grid columns="two" divided>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Welcome {name}</Header>
              <Statistic label="Books left to read" value={leftBooks} />
            </Grid.Column>
            <Grid.Column>
              <Header as="h3">New books</Header>
              <List divided relaxed>
                {newBooks?.map((book) => (
                  <List.Item key={book.id}>
                    <List.Icon
                      name="book"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="span">{book.title}</List.Header>
                      <List.Description as="span">
                        {book.author}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default Home;
