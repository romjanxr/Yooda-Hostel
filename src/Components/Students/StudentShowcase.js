import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

const StudentShowcase = ({ allStudents, setAllStudents }) => {
  const [checkedStudent, setCheckedStudent] = useState([]);

  const handleCheckbox = (e, student) => {
    const { checked, name } = e.target;
    if (checked) {
      if (name === "allSelect") {
        setCheckedStudent(allStudents);
      } else {
        setCheckedStudent([...checkedStudent, student]);
      }
    } else {
      if (name === "allSelect") {
        setCheckedStudent([]);
      } else {
        const updatedStudent = checkedStudent.filter(
          s => s._id !== student._id
        );
        setCheckedStudent(updatedStudent);
      }
    }
  };

  const handleStatus = e => {
    const value = e.target.value;
    if (value) {
      checkedStudent.map(student =>
        axios
          .put("http://localhost:5000/students", {
            status: value,
            id: student._id,
          })
          .then(res => {
            if (res.data.modifiedCount) {
              const updatedStudent = allStudents.map(element => {
                if (element._id === student._id) {
                  element.status = value;
                }
                return element;
              });
              setAllStudents(updatedStudent);
            }
          })
      );
    }
  };
  return (
    <div>
      <div>
        <Form.Select
          required
          className="status-width mb-3"
          onChange={handleStatus}
        >
          <option value="">Change Status</option>
          <option value="Active">Active</option>
          <option value="InActive">InActive</option>
        </Form.Select>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                name="allSelect"
                checked={checkedStudent.length === allStudents.length}
                onChange={handleCheckbox}
              />
            </th>
            <th>Name</th>
            <th>Roll</th>
            <th>Age</th>
            <th>Class</th>
            <th>Hall</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map(student => (
            <tr key={student._id}>
              <td>
                <Form.Check
                  type="checkbox"
                  name={student.name}
                  checked={checkedStudent.some(
                    element => element._id === student._id
                  )}
                  onChange={e => handleCheckbox(e, student)}
                />
              </td>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>{student.hall}</td>
              <td>{student.status}</td>
              <td>
                <Button variant="success" size="sm">
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
      <div className="text-center">
        {/* {[...Array(pageCount).keys()].map(n => (
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
        ))} */}
      </div>
    </div>
  );
};

export default StudentShowcase;