import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import EditPeakForm from './edit-peak-form';

export default function Layout(props) {
  function onDeleteClick(peakUuid) {
    const token = props.authToken;
    const { uuid } = props.currentUser;
    props.onDeletePeak(token, uuid, peakUuid);
    props.history.push('/peak-list');
  }

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
    <main role="main" className="edit-peak-container">
      <Col xs={12}>
        <h1 className="form-header">Edit Peak</h1>
        <EditPeakForm {...props} />
      </Col>

      <Col xs={12}>
        <button
          type="button"
          onClick={() => onDeleteClick(props.editPeak.uuid)}
        >
          Delete Peak
        </button>
      </Col>

    </main>
  );
}

Layout.propTypes = {
  loggedIn: PropTypes.bool,
  authToken: PropTypes.string,
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    uuid: PropTypes.string
  }),
  editPeak: PropTypes.shape({
    uuid: PropTypes.string,
    peakName: PropTypes.string,
    dateClimbed: PropTypes.string,
    notes: PropTypes.string,
    imgSrc: PropTypes.string
  }),
  onDeletePeak: PropTypes.func
};

Layout.defaultProps = {
  loggedIn: false,
  authToken: null,
  currentUser: null,
  editPeak: null
};
