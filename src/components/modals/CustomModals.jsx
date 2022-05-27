import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function CustomModals() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
<>
<Button variant="outline-success" onClick={handleShow}>Create New Task </Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Write your task seeker" autoFocus/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}> Close </Button>
<Button variant="primary" onClick={handleClose}> Save </Button>
</Modal.Footer>
</Modal>
</>
);}