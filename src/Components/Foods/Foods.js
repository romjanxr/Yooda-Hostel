import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import FoodShowcase from "./FoodShowcase";

const Foods = () => {
  const [foods, setFoods] = useState({});
  const [foodsItem, setFoodsItem] = useState([]);
  const [dependency, setDependency] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/foods")
      .then(res => setFoodsItem(res.data));
  }, [dependency]);
  console.log(foods);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/foods", foods).then(res => {
      if (res.data.insertedId) {
        alert("Food Added Successfully");
        setDependency(Math.random());
      } else {
        alert("Something Went Wrong Please Try Again");
      }
    });
  };

  //
  return (
    <div className="my-5 container">
      <div className="mb-5">
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col sm={4} className="my-1">
              <Form.Label htmlFor="name" visuallyHidden>
                Food Name
              </Form.Label>
              <Form.Control
                required
                type="text"
                id="name"
                placeholder="Food Name"
                name="foods[name]"
                value={foods.name || ""}
                onChange={e => setFoods({ ...foods, name: e.target.value })}
              />
            </Col>
            <Col sm={4} className="my-1">
              <Form.Label htmlFor="price" visuallyHidden>
                Price
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl
                  required
                  type="number"
                  id="price"
                  placeholder="Price"
                  name="foods[price]"
                  value={foods.price || ""}
                  onChange={e => setFoods({ ...foods, price: e.target.value })}
                />
              </InputGroup>
            </Col>
            <Col sm={4} className="my-1">
              <Button type="submit">Add Food</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <FoodShowcase foodsItem={foodsItem} setDependency={setDependency} />
    </div>
  );
};

export default Foods;
