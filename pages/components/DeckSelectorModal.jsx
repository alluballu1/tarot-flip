import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeckSelectorModal = (props) => {
    const [visibility, setVisibility] = useState(true);
    const selectHandler = (value) => {
        props.deckSelect(value)
        setVisibility(!visibility)
    }
  return (
    <Modal
      show={visibility}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ background: "#301934", color: "white" }}>
        <Modal.Title >
          Select Tarot Deck-type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          background: "#333333",
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button variant="outline-light" onClick={() => selectHandler(0)}>
          Tarot Thoth
        </Button>
        <Button variant="outline-light" onClick={() => selectHandler(1)}>
          Rider–Waite
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default DeckSelectorModal;
