import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';

export function Layout(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }

  return (
    <main role="main" className="container">
      <Col xs={12} className="sign-up-container">
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

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null
});

export default connect(mapStateToProps)(Layout);
