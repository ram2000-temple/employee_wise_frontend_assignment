// src/components/Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";

const Login = () => {
  // Hardcoded credentials for demo login
  const correctEmail = "eve.holt@reqres.in";
  const correctPassword = "cityslicka";

  // State variables to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hook for navigation after successful login
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-fill the email and password fields with demo credentials when the component mounts
    setEmail(correctEmail);
    setPassword(correctPassword);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate user credentials
    if (email === correctEmail && password === correctPassword) {
      // Simulate authentication by storing a fake token in localStorage
      localStorage.setItem("token", "fake-jwt-token");
      
      // Redirect to Users List page after successful login
      navigate("/users");
    } else {
      // Show error message if credentials are incorrect
      setError("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)" }} // Background gradient for UI styling
    >
      <Card className="shadow-lg p-4" style={{ width: "360px", borderRadius: "10px" }}>
        <div className="text-center mb-3">
          <h3 className="fw-bold">Welcome</h3>
        </div>

        {/* Display Demo Credentials */}
        <Alert variant="info" className="text-center">
          <strong>Demo Credentials</strong> <br />
          📧 <b>Email:</b> eve.holt@reqres.in <br />
          🔑 <b>Password:</b> cityslicka
        </Alert>

        {/* Show error message if login fails */}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Login Form */}
        <Form onSubmit={handleSubmit}>
          {/* Email Input */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          {/* Password Input */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {/* Submit Button */}
          <Button type="submit" variant="primary" className="w-100" style={{ borderRadius: "5px" }}>
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
