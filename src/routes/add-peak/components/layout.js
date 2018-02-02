import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddPeakForm from './add-peak-form';

export function Layout(props) {
  if (!props.loggedIn) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <main role="main" className="container">
      <Col xs={12} className="add-peak-container">
        <h1 className="form-header">Add Peak</h1>
        <AddPeakForm {...props} />
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
