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

  function sendFacebookResToAPI(res) {
    console.log('facebook response', res);
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
          autoLoad={true}
          fields="name,email"
          callback={sendFacebookResToAPI}
          cssClass="facebook-btn"
          icon="fa-facebook"
        />
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
