import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import { borrowAction, returnAction } from "../../socket/socketEmit";

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

  const handleRemove = () => {};

  useEffect(() => {
    if (props.action === "borrow" || props.action === "genre") {
      setAction({ color: "green", click: handleBorrow, text: "Borrow" });
    } else if (props.action === "return") {
      setAction({ color: "orange", click: handleReturn, text: "Return" });
    } else if (props.action === "remove") {
      setAction({ color: "red", click: handleRemove, text: "Remove" });
    } else setAction(null);
  }, [props.action]);

  return (
    <Card key={book.id}>
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>{book.genre}</Card.Meta>
        <Card.Description>{book.author}</Card.Description>
      </Card.Content>
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
