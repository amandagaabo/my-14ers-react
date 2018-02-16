import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import EditPeakForm from './edit-peak-form';
import './layout.css';

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
      <div className="edit-form-container container">

        <Col xs={12} md={6} mdOffset={3}>
          <img src={props.editPeak.imgSrc} alt="peak" className="peak-img" />
        </Col>

        <Col xs={12} md={6} mdOffset={3}>
          <h2 className="peak-name-title">{props.editPeak.peakName}</h2>
        </Col>

        <Col xs={12} md={6} mdOffset={3}>
          <EditPeakForm {...props} />
        </Col>

        <Col xs={12} md={6} mdOffset={3}>
          <button
            type="button"
            className="delete-peak-btn"
            onClick={() => onDeleteClick(props.editPeak.uuid)}
          >
            Delete Peak
          </button>
        </Col>

        <Col xs={12} md={6} mdOffset={3}>
          <Link
            to="/peak-list"
            className="cancel-link"
          >
            Cancel
          </Link>
        </Col>
      </div>
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
