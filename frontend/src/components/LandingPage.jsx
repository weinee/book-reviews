import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container>
      <Row xs={1} md={2} className="align-items-center">
        <Col md={7}>
          <h1 className="text-center">Hello.</h1>
        </Col>
        <Col md={5}>
          <Card className="p-4 d-flex">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="d-flex text-muted">
                  Forgot your password?
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
