import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const Students = () => {
  const [students, setStudents] = useState({});
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <div>
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col sm={6} className="my-1">
              <Form.Label htmlFor="name" visuallyHidden>
                Full Name
              </Form.Label>
              <Form.Control
                required
                type="text"
                id="name"
                placeholder="Full Name"
                name="students[name]"
                value={students.name || ""}
                onChange={e =>
                  setStudents({ ...students, name: e.target.value })
                }
              />
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="roll" visuallyHidden>
                Roll
              </Form.Label>
              <InputGroup>
                <FormControl
                  required
                  type="number"
                  id="roll"
                  placeholder="Roll"
                  name="students[roll]"
                  value={students.roll || ""}
                  onChange={e =>
                    setStudents({ ...students, roll: e.target.value })
                  }
                />
              </InputGroup>
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="age" visuallyHidden>
                Age
              </Form.Label>
              <InputGroup>
                <FormControl
                  required
                  type="number"
                  id="age"
                  placeholder="Age"
                  name="students[age]"
                  value={students.age || ""}
                  onChange={e =>
                    setStudents({ ...students, age: e.target.value })
                  }
                />
              </InputGroup>
            </Col>
            <Col sm={4} className="my-1">
              <Form.Label htmlFor="class" visuallyHidden>
                Class
              </Form.Label>
              <InputGroup>
                <FormControl
                  required
                  type="text"
                  id="class"
                  placeholder="Class"
                  name="students[class]"
                  value={students.class || ""}
                  onChange={e =>
                    setStudents({ ...students, class: e.target.value })
                  }
                />
              </InputGroup>
            </Col>
            <Col sm={4} className="my-1">
              <Form.Label htmlFor="hall" visuallyHidden>
                Hall
              </Form.Label>
              <InputGroup>
                <FormControl
                  required
                  type="text"
                  id="hall"
                  placeholder="Hall"
                  name="students[hall]"
                  value={students.hall || ""}
                  onChange={e =>
                    setStudents({ ...students, hall: e.target.value })
                  }
                />
              </InputGroup>
            </Col>
            <Col sm={4} className="my-1">
              <InputGroup>
                <Form.Select aria-label="Select Status">
                  <option value="1">InActive</option>
                  <option value="2">Active</option>
                </Form.Select>
              </InputGroup>
            </Col>
            <Col className="my-1 text-center">
              <Button type="submit">Add Student</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Students;
