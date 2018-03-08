import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { ClipLoader } from 'react-spinners';
import { FACEBOOK_APP_ID } from './../../../config';
import LoginForm from './login-form';

export default function Layout(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }

  return (
    <main role="main" className="login-container">
      <Col md={4} mdOffset={4} xs={10} xsOffset={1} className="form-container">
        <Col xs={12}>
          <ClipLoader
            color="#1E4899"
            loading={props.loading}
            margin="0"
          />
        </Col>

        <LoginForm {...props} />

        <Col xs={12}>
          <hr className="divider" />
          <FacebookLogin
            appId={FACEBOOK_APP_ID}
            version="2.12"
            fields="name,email"
            callback={props.onLoginWithFacebook}
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
  loading: PropTypes.bool,
  onLoginWithFacebook: PropTypes.func
};

Layout.defaultProps = {
  loggedIn: false,
  loading: false
};
