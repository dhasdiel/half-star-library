import React from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import { borrowAction } from "../../socket/socketEmit";

const CardBook = (props) => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const book = props.book;

  const handleBorrow = () => {
    if (book.quanity - 1 < 0) {
      return;
    }
    borrowAction({ user: currentUser, book: book });
  };

  const handleReturn = () => {};

  const handleRemove = () => {};

  const makeAction = () => {
    if (props.action === "borrow" || props.action === "genre") {
      return { color: "green", click: handleBorrow, text: "Borrow" };
    } else if (props.action === "return") {
      return { color: "yellow", click: handleReturn, text: "Return" };
    } else if (props.action === "remove") {
      return { color: "red", click: handleRemove, text: "Remove" };
    } else return null;
  };

  const action = makeAction();

  return (
    <Card key={book.id}>
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>{book.genre}</Card.Meta>
        <Card.Description>{book.author}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color={action.color} onClick={action.click}>
          {action.text}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default CardBook;
