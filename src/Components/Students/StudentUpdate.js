import axios from "axios";
import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const StudentUpdate = ({ handleClose, show, student, setDependency }) => {
  const { _id, name, roll, age, hall, status } = student;
  const nameRef = useRef();
  const rollRef = useRef();
  const ageRef = useRef();
  const classRef = useRef();
  const hallRef = useRef();
  const statusRef = useRef();
  const handleUpdate = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/studentProfile/${_id}`, {
        name: nameRef.current.value,
        roll: rollRef.current.value,
        age: ageRef.current.value,
        class: classRef.current.value,
        hall: hallRef.current.value,
        status: statusRef.current.value,
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
        <Modal.Title>Update Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              defaultValue={name}
              ref={nameRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="roll">
            <Form.Label>Roll</Form.Label>
            <Form.Control
              type="number"
              placeholder="Roll"
              defaultValue={roll}
              ref={rollRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="age"
              defaultValue={age}
              ref={ageRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="class">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="Class"
              defaultValue={student.class}
              ref={classRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="hall">
            <Form.Label>Hall</Form.Label>
            <Form.Control
              type="text"
              placeholder="Hall"
              defaultValue={hall}
              ref={hallRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="class">
            <Form.Select
              aria-label="Select Status"
              defaultValue={status}
              ref={statusRef}
            >
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Student
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

export default StudentUpdate;
