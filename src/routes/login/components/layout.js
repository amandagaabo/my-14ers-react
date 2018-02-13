import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import LoginForm from './login-form';
import './layout.css';

export default function Layout(props) {
  function onFacebookLoginFailure(err) {
    console.error('facebook login error', err);
  }

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

      <Col xs={12}>
        <FacebookLogin
          appId="335446923615924"
          fields="name,email"
          callback={props.onLoginWithFacebook}
          onFailure={onFacebookLoginFailure}
          cssClass="facebook-btn"
          icon="fa-facebook"
        />
      </Col>
    </main>
  );
}

Layout.propTypes = {
  loggedIn: PropTypes.bool,
  onLoginWithFacebook: PropTypes.func
};

Layout.defaultProps = {
  loggedIn: false
};
