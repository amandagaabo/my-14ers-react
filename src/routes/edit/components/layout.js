import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import EditPeakForm from './edit-peak-form';
import './layout.css';
import './react-confirm-alert.css';

export default function Layout(props) {
  function onDeleteConfirm() {
    const token = props.authToken;
    const { uuid } = props.currentUser;
    const peakUuid = props.editPeak.uuid;
    props.onDeletePeak(token, uuid, peakUuid);
    props.history.push('/peak-list');
  }

  function onDeleteClick() {
    confirmAlert({
      title: 'Confirm delete peak',
      message: 'Are you sure to delete this peak?',
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      onConfirm: () => onDeleteConfirm()
    });
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
            onClick={() => onDeleteClick()}
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
