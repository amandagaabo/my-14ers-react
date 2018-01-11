import React from 'react';
import { Col } from 'react-bootstrap';
import SignUpForm from './sign-up-form';

export default function Layout(props) {
  return (
    <main role="main" className="container">
      <Col xs={12} className="sign-up-container">
        <h1 className="form-header">Sign Up</h1>
        <SignUpForm {...props} />
      </Col>
    </main>
  );
}
