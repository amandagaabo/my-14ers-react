import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function SignUp() {
  return (
    <Layout />
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.loggedIn != null
});

export default connect(mapStateToProps)(SignUp);
