import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import FoodUpdate from "./FoodUpdate";

const FoodShowcase = ({ foodsItem, setDependency }) => {
  const [show, setShow] = useState(false);
  const [selectedFood, setSelectedFood] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Food Name</th>
            <th>Food Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {foodsItem.map((food, i) => (
            <tr key={food._id}>
              <td>{i + 1}</td>
              <td>{food.name}</td>
              <td>${food.price}</td>
              <td>
                <Button
                  onClick={() => {
                    handleShow();
                    setSelectedFood(food);
                  }}
                  variant="success"
                  size="sm"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FoodUpdate
        food={selectedFood}
        handleClose={handleClose}
        show={show}
        setDependency={setDependency}
      />
    </div>
  );
};

export default FoodShowcase;
