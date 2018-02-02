import React from 'react';
import { Col } from 'react-bootstrap';
import LoginForm from './login-form';

export default function Layout(props) {
  return (
    <main role="main" className="container">
      <Col xs={12} className="sign-up-container">
        <h1 className="form-header">Login</h1>
        <LoginForm {...props} />
      </Col>
    </main>
  );
}
