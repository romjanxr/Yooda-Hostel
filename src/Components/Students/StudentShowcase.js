import React from "react";
import { Button, Table } from "react-bootstrap";

const StudentShowcase = () => {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
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
