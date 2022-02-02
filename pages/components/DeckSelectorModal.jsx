import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeckSelectorModal = (props) => {
  const [visibility, setVisibility] = useState(true);
  return (
    <Modal
      show={visibility}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{ background: "#301934", color: "white" }}
        closeButton
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
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
        <Button onClick={() => props.deckSelect(0)}>Deck 1</Button>
        <Button onClick={() => props.deckSelect(1)}>Deck 2</Button>
      </Modal.Body>
    </Modal>
  );
};

export default DeckSelectorModal;
