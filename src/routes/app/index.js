import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function App(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null,
});

export default connect(mapStateToProps)(App);
