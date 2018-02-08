import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SignUpForm from './sign-up-form';

export default function Layout(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }
  return (
    <main role="main" className="sign-up-container">
      <Col xs={12}>
        <h1 className="form-header">Sign Up</h1>
        <SignUpForm {...props} />
      </Col>
    </main>
  );
}

Layout.propTypes = {
  loggedIn: PropTypes.bool
};

Layout.defaultProps = {
  loggedIn: false
};
