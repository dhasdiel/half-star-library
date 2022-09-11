import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Icon } from "semantic-ui-react";
import {
  borrowAction,
  returnAction,
  removeBookAction,
} from "../../socket/socketEmit";

const CardBook = (props) => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const book = props.book;
  const [action, setAction] = useState(null);

  const handleBorrow = () => {
    if (book.quanity - 1 < 0) {
      return;
    }
    borrowAction({ user: currentUser, book: book });
  };

  const handleReturn = () => {
    returnAction({ user: currentUser, book: book });
    console.log(`return user:`, currentUser);
  };

  const handleRemoveBook = () => {
    removeBookAction(book);
    console.log("remove book: ", book);
  };

  useEffect(() => {
    if (props.action === "borrow" || props.action === "genre") {
      setAction({ color: "green", click: handleBorrow, text: "Borrow" });
    } else if (props.action === "return") {
      setAction({ color: "orange", click: handleReturn, text: "Return" });
    } else if (props.action === "remove") {
      setAction({ color: "red", click: handleRemoveBook, text: "Remove" });
    } else setAction(null);
  }, [props.action]);

  return (
    <Card key={book.id}>
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>{book.genre}</Card.Meta>
        <Card.Description>{book.author}</Card.Description>
      </Card.Content>
      {props.action === "remove" && (
        <Card.Content extra>
          <a>
            <Icon name="book" />
            Quanity {book.quanity}
          </a>
        </Card.Content>
      )}
      {action ? (
        <Card.Content extra>
          <Button basic color={action.color} onClick={action.click}>
            {action.text}
          </Button>
        </Card.Content>
      ) : null}
    </Card>
  );
};

export default CardBook;
