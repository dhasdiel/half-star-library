import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Icon, Grid, Image, Statistic, List } from "semantic-ui-react";

const Home = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const numOfBooks = useSelector((state) => state.books.numOfBooks);

  const [name, setName] = useState("");
  const [leftBooks, setLeftBooks] = useState(numOfBooks);
  // const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.fullname);
      setLeftBooks(numOfBooks - currentUser.pastBooks.length);
      // setNewBooks(useSelector((state) => state.books.newBooksList));
    }
  }, [currentUser, numOfBooks]);

  return (
    <>
      <Header as="h1">
        <Icon name="hand peace" />
        <Header.Content>
          Welcome {name}
          <Header.Subheader>What you want to do?</Header.Subheader>
        </Header.Content>
      </Header>
      <div className="home-container">
        <Grid columns="two" divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic label="Books left to read" value={leftBooks} />
            </Grid.Column>
            <Grid.Column>
              List of new books
              {/* <List>
                {newBooks.map((book) => (
                  <List.Item>
                    <List.Header>{book.title}</List.Header>
                    {book.author}
                  </List.Item>
                ))}
              </List> */}
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
            </Grid.Column>
          </Grid.Row> */}
        </Grid>
      </div>
    </>
  );
};

export default Home;
