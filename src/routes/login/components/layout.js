import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import LoginForm from './login-form';
import './layout.css';

export default function Layout(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }

  return (
    <main role="main" className="login-container">
      <Col md={4} mdOffset={4} xs={10} xsOffset={1} className="form-container">

        <LoginForm {...props} />

        <Col xs={12}>
          <hr clasName="divider" />
          <FacebookLogin
            appId="335446923615924"
            version="2.12"
            fields="name,email"
            callback={props.onLoginWithFacebook}
            cssClass="facebook-btn"
            icon="fa-facebook"
          />
        </Col>

        <Col xs={12}>
          <a
            href="https://www.iubenda.com/privacy-policy/47759666/legal"
            className="facebook-privacy-link"
          >Privacy Policy
          </a>
        </Col>

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
