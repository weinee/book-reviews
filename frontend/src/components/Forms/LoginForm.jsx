import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signIn } from "../../actions/auth.js";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(signIn(formData, navigate));
  };

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <Form onSubmit={handleLogIn}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          id="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <Form.Text className="d-flex text-muted">
          Forgot your password?
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
