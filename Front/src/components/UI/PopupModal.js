import React, { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const PopupModal = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={props.btn}
    >
      <Header icon>
        <Icon name={props.icon} />
        {props.message}
      </Header>
      <Modal.Actions>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PopupModal;
