import React from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import { removeUserAction } from "../../socket/socketEmit";
import PopupModal from "../UI/PopupModal";

const CardUser = (props) => {
  const user = props.user;

  const handleRemoveUser = () => {
    removeUserAction(user);
    console.log("remove: ", user);
  };

  return (
    <Card key={user.id}>
      <Card.Content>
        <Card.Header>{user.fullname}</Card.Header>
        <Card.Meta>
          <span>Age: {user.age}</span>
        </Card.Meta>
        <Card.Description>Beloved genre: {user.genre}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="book" />
          Read {user.hasBooks.length + user.pastBooks.length} books
        </a>
      </Card.Content>
      <Card.Content extra>
        <PopupModal
          icon="remove user"
          message="User removed from the library"
          btn={
            <Button basic color="red" onClick={handleRemoveUser}>
              remove
            </Button>
          }
        />
      </Card.Content>
    </Card>
  );
};

export default CardUser;
