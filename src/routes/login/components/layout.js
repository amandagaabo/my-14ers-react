import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';

export default function Layout(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }

  return (
    <main role="main" className="login-container">
      <Col xs={12}>
        <h1 className="form-header">Login</h1>
        <LoginForm {...props} />
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
