import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Icon } from "semantic-ui-react";
import {
  borrowAction,
  returnAction,
  removeBookAction,
} from "../../socket/socketEmit";
import PopupModal from "../UI/PopupModal";

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
  };

  const handleRemoveBook = () => {
    removeBookAction(book);
  };

  useEffect(() => {
    if (props.action === "borrow" || props.action === "genre") {
      setAction({
        color: "green",
        click: handleBorrow,
        text: "Borrow",
        icon: "add",
        message: "Book added to you",
      });
    } else if (props.action === "return") {
      setAction({
        color: "orange",
        click: handleReturn,
        text: "Return",
        icon: "redo",
        message: "You have returned book",
      });
    } else if (props.action === "remove") {
      setAction({
        color: "red",
        click: handleRemoveBook,
        text: "Remove",
        icon: "remove",
        message: "You have removed book",
      });
    } else setAction(null);
  }, [props.action]);

  return (
    <Card key={book.id} className="my-card">
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
          <PopupModal
            icon={action.icon}
            message={action.message}
            btn={
              <Button basic color={action.color} onClick={action.click}>
                {action.text}
              </Button>
            }
          />
        </Card.Content>
      ) : null}
    </Card>
  );
};

export default CardBook;
