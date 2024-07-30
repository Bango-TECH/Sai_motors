import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [validated, setValidated] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setValidated(false);
    } else {
      setErrors({});
      setValidated(true);
      if (Username === "pratik" && Password === "pratik123") {
        navigate('/Main_manage');
      } else {
        setLoginError('Invalid username or password');
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!Username) {
      newErrors.username = 'Username is required';
    } else if (Username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
    }

    if (!Password) {
      newErrors.password = 'Password is required';
    } else if (Password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    return newErrors;
  };

  return (
    <div>
      <Container style={{margin:'30px 0 30px 0'}}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "10px", backgroundColor:'#FFEEA9'}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h3 className="mb-2 text-center text-uppercase" style={{ fontWeight: "bold", color: "#007bff", textDecoration: "underline" }}>
                    Admin Login
                  </h3>
                  <br />
                  <div className="mb-3">
                    {loginError && <Alert variant="danger">{loginError}</Alert>}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "10px" }}><h5>Username</h5></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter username"
                          value={Username}
                          onChange={(e) => setUsername(e.target.value)}
                          style={{ padding: "10px", borderRadius: "5px", borderColor: "#ced4da" }}
                          isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.username}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb3" controlId="formBasicPassword">
                        <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "10px" }}><h5>Password</h5></Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          value={Password}
                          onChange={(e) => setPassword(e.target.value)}
                          style={{ padding: "10px", borderRadius: "5px", borderColor: "#ced4da" }}
                          isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <br />
                      <div className="d-grid">
                        <Button variant="primary" type="submit" style={{ padding: "10px", borderRadius: "8px", backgroundColor: "#007bff", borderColor: "#007bff", fontWeight: "bold" }}>
                          <h5>Login</h5>
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;

