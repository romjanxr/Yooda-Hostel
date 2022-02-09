import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Select from "react-select";
import ServedShowcase from "./ServedShowcase";

const Distribution = () => {
  const [students, setStudents] = useState([]);
  const todayDate = new Date()
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");
  const [distributeData, setDistributeData] = useState({ date: todayDate });
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [servedFood, setServedFood] = useState([]);
  const [dependency, setDependency] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  const studentRef = useRef();
  const foodRef = useRef();
  const shiftRef = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/students`)
      .then(res => setStudents(res.data.students));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/foods")
      .then(res => setFoods(res.data.foods));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/served")
      .then(res => setServedFood(res.data));
  }, [dependency]);

  const studentData = students.map(student => ({
    label: `${student.roll} - ${student.name}`,
    value: `${student.roll} - ${student.name}`,
  }));

  const foodData = foods.map(food => ({
    label: `${food.name} - price: $${food.price}`,
    value: food.name,
  }));

  const handleFoods = () => {
    if (selectedFood) {
      const foodList = selectedFood.map(({ value }) => value).join(", ");
      if (foodList) {
        setDistributeData({ ...distributeData, servedFood: foodList });
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const found = servedFood.some(
      s =>
        s.roll === distributeData.roll &&
        s.date === distributeData.date &&
        s.shift === distributeData.shift
    );
    if (!found) {
      distributeData.status = "Served";
      axios.post("http://localhost:5000/served", distributeData).then(res => {
        if (res.data.insertedId) {
          setDependency(Math.random());
          setDuplicate(false);
          clearInput();
        }
      });
    } else {
      setDuplicate(true);
    }
  };

  const clearInput = () => {
    console.log(studentRef.current.select);
    // shiftRef.current.select.clearValue();
    // foodRef.current.select.select.clearValue();
  };

  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="student">
          <Select
            ref={studentRef}
            options={studentData}
            onChange={opt => {
              setDistributeData({
                ...distributeData,
                roll: opt.label.split(" - ")[0],
                name: opt.label.split(" - ")[1],
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="shift">
          <Form.Select
            ref={shiftRef}
            aria-label="shift"
            onChange={e =>
              setDistributeData({ ...distributeData, shift: e.target.value })
            }
          >
            <option value="">Select the shift</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="shift">
          <Form.Control
            type="text"
            placeholder="Date"
            defaultValue={todayDate}
            onChange={e =>
              setDistributeData({ ...distributeData, date: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="shift">
          <Select
            ref={foodRef}
            options={foodData}
            isMulti
            onChange={opt => setSelectedFood(opt)}
            onBlur={handleFoods}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="mt-3">
        {duplicate && <Alert variant="danger">Already Served</Alert>}
      </div>
      <div className="mt-5">
        <ServedShowcase servedFood={servedFood} />
      </div>
    </div>
  );
};

export default Distribution;
