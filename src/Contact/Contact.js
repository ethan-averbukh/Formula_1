import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const handleSubmit = () => {

  }
  return (
    <div className="contact">
      <h1 className="contact-title">Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" aria-label="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
