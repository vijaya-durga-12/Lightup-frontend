import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sideImage from '../../src/assets/images/cart.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Container fluid className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img
              src={sideImage}
              alt="Sign Up"
              className="img-fluid rounded"
              style={{ maxHeight: '650px' }}
            />
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <div style={{ maxWidth: '400px' }}>
              <h1 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Log in to Exclusive</h1>
              <p className="text-muted mb-4">Enter your details below</p>

              <form className="space-y-4 w-80">
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none"
                  >
                    Login
                  </button>
                  <Link to="/forgot-password" className="text-red-500 mb-0">
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
