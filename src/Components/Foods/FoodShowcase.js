import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import FoodUpdate from "./FoodUpdate";
import axios from "axios";

const FoodShowcase = ({
  foodsItem,
  setDependency,
  pageCount,
  page,
  setPage,
}) => {
  const [show, setShow] = useState(false);
  const [selectedFood, setSelectedFood] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = id => {
    axios
      .delete(`https://yooda-hostel-sv.herokuapp.com/foods/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
          setDependency(Math.random());
        }
      });
  };
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
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    handleDelete(food._id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center">
        {[...Array(pageCount).keys()].map(n => (
          <button
            className={
              n === page
                ? "btn btn-primary me-1"
                : "border border-primary btn btn-light me-2"
            }
            key={n}
            onClick={() => setPage(n)}
          >
            {n + 1}
          </button>
        ))}
      </div>
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
