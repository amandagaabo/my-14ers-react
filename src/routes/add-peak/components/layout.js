import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import AddPeakForm from './add-peak-form';
import './layout.css';

export default function Layout(props) {
  if (!props.loggedIn) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <main role="main" className="add-peak-container">
      <div className="add-form-container container">
        <Col xs={12} md={6} mdOffset={3} className="add-edit-container">
          <AddPeakForm {...props} />
        </Col>
      </div>
    </main>
  );
}

Layout.propTypes = {
  loggedIn: PropTypes.bool
};

Layout.defaultProps = {
  loggedIn: false
};
