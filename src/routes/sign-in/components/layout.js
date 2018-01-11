import React from 'react';
import { Col } from 'react-bootstrap';
import SignInForm from './sign-in-form';

export default function Layout(props) {
  return (
    <main role="main" className="container">
      <Col xs={12} className="sign-up-container">
        <h1 className="form-header">Sign In</h1>
        <SignInForm {...props} />
      </Col>
    </main>
  );
}
