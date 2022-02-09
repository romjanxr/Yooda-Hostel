import React from "react";
import { Table } from "react-bootstrap";

const ServedShowcase = ({ servedFood }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Roll</th>
            <th>Shift</th>
            <th>Served Food</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {servedFood.map((el, i) => (
            <tr key={el._id}>
              <td>{i + 1}</td>
              <td>{el.name}</td>
              <td>{el.roll}</td>
              <td>{el.shift}</td>
              <td>{el.servedFood}</td>
              <td>{el.date}</td>
              <td>{el.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ServedShowcase;
