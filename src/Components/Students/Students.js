import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import StudentShowcase from "./StudentShowcase";

const Students = () => {
  const [students, setStudents] = useState({ status: "Active" });
  const [allStudents, setAllStudents] = useState([]);
  const [dependency, setDependency] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;

  console.log(students);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/students?page=${page}&&size=${size}`)
      .then(res => {
        setAllStudents(res.data.students);
        const count = res.data.count;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
      });
  }, [page, dependency]);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/students", students).then(res => {
      if (res.data.insertedId) {
        setStudents({ status: "Active" });
        setDependency(Math.random());
      }
    });
  };

  return (
    <div className="container my-5">
      <div className="mb-5">
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
                <Form.Select
                  aria-label="Select Status"
                  name="students[status]"
                  value={students.status || ""}
                  onChange={e =>
                    setStudents({ ...students, status: e.target.value })
                  }
                >
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </Form.Select>
              </InputGroup>
            </Col>
            <Col className="my-1 text-center">
              <Button type="submit">Add Student</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <StudentShowcase
        allStudents={allStudents}
        setAllStudents={setAllStudents}
        pageCount={pageCount}
        setDependency={setDependency}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Students;
