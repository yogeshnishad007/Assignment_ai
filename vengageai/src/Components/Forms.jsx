import React from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Forms = ({
  error,
  name,
  number,
  category,
  handleSubmit,
  setName,
  setNumber,
  setCategory,
}) => {
  return (
    <>
      <Container
        className="text-center"
        style={{
          padding: 30,
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Row className=" mb-3 align-items-center">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
         
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Friends">Close Friends</option>
                <option value="Family">Family</option>
                <option value="Office">Office</option>
                <option value="Others">Others</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button style={{ margin: 20 }} variant="primary" type="submit">
            Add 
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Forms;



