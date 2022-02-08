import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const Students = () => {
  return (
    <div className="container my-5">
      <div className="w-50">
        <Form>
          <Row className="align-items-center">
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                Username
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <FormControl
                  id="inlineFormInputGroupUsername"
                  placeholder="Username"
                />
              </InputGroup>
            </Col>
            <Col xs="auto" className="my-1">
              <Form.Check
                type="checkbox"
                id="autoSizingCheck2"
                label="Remember me"
              />
            </Col>
            <Col xs="auto" className="my-1">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Students;
