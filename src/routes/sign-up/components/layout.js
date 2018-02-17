import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import SignUpForm from './sign-up-form';

export default function Layout(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }
  return (
    <main role="main" className="sign-up-container">
      <Col md={4} mdOffset={4} xs={10} xsOffset={1} className="form-container">
        <SignUpForm {...props} />
        <Col xs={12}>
          <hr className="divider" />
          <FacebookLogin
            appId="335446923615924"
            version="2.12"
            fields="name,email"
            callback={props.onSignupWithFacebook}
            textButton="Sign up with Facebook"
            cssClass="facebook-btn"
            icon="fa-facebook"
          />
        </Col>
      </Col>
    </main>
  );
}

Layout.propTypes = {
  loggedIn: PropTypes.bool,
  onSignupWithFacebook: PropTypes.func
};

Layout.defaultProps = {
  loggedIn: false
};
