import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import EditPeakForm from './edit-peak-form';

export default function Layout(props) {
  if (!props.loggedIn) {
    return (
      <Redirect to="/login" />
    );
  }

  if (!props.editPeak) {
    return (
      <Redirect to="/peak-list" />
    );
  }

  return (
    <main role="main" className="container">
      <Col xs={12} className="add-peak-container">
        <h1 className="form-header">Edit Peak</h1>
        <EditPeakForm {...props} />
      </Col>
    </main>
  );
}

Layout.propTypes = {
  loggedIn: PropTypes.bool,
  editPeak: PropTypes.shape({
    uuid: PropTypes.string,
    peakName: PropTypes.string,
    dateClimbed: PropTypes.string,
    notes: PropTypes.string
  }),
};

Layout.defaultProps = {
  loggedIn: false,
  editPeak: null
};
