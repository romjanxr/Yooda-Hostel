import axios from "axios";
import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const FoodUpdate = ({ handleClose, show, food, setDependency }) => {
  const { _id, name, price } = food;
  const nameRef = useRef();
  const priceRef = useRef();

  const handleUpdate = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/foods/${_id}`, {
        name: nameRef.current.value,
        price: priceRef.current.value,
      })
      .then(res => {
        if (res.data.modifiedCount) {
          setDependency(Math.random());
          handleClose();
        } else {
          alert("Something went wrong, Please try again");
        }
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Food</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3" controlId="foodName">
            <Form.Label>Food Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Food Name"
              defaultValue={name}
              ref={nameRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="foodPrice">
            <Form.Label>Food Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              defaultValue={price}
              ref={priceRef}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Food
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FoodUpdate;
