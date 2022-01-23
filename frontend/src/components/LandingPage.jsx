import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import RegisterForm from "./Forms/RegisterForm";
import LoginForm from "./Forms/LoginForm";

const LandingPage = () => {
  let location = useLocation();

  return (
    <Container>
      <Row xs={1} md={2} className="align-items-center">
        <Col md={7}>
          <h1 className="text-center">Hello.</h1>
        </Col>
        <Col md={5}>
          <Card className="p-4 d-flex">
            {location.pathname === "/sign-up" ? (
              <RegisterForm />
            ) : (
              <LoginForm />
            )}
          </Card>
          {location.pathname === "/sign-up" ? (
            <small>
              Already have an account? <Link to="/">Sign in</Link>
            </small>
          ) : (
            <small>
              Don't have an account yet? <Link to="sign-up">Register now</Link>
            </small>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
